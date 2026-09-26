// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Preceptor";

const ROSEN: Source = {
  id: "rosen",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023.",
};
const OAR: Source = {
  id: "ottawa-ankle",
  citation: "Stiell IG, et al. Implementation of the Ottawa ankle rules. JAMA. 1994.",
};
const EAST: Source = {
  id: "east-open-fracture",
  citation: "Hoff WS, et al. East Practice Management Guidelines Work Group. Update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011.",
};
const BRATZLER: Source = {
  id: "ashp-prophylaxis",
  citation: "Bratzler DW, et al. Clinical practice guidelines for antimicrobial prophylaxis in surgery. Am J Health Syst Pharm. 2013.",
};
const IDSA: Source = {
  id: "idsa-ssti",
  citation: "Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections. 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
};
const HQO_HIP: Source = {
  id: "hqo-hip",
  citation: "Health Quality Ontario (now Ontario Health). Hip Fracture: Care for People With Fragility Fractures. Quality standard. 2017, updated 2024.",
};
const NICE_HIP: Source = {
  id: "nice-hip",
  citation: "National Institute for Health and Care Excellence. Hip fracture: management. Clinical guideline CG124. 2011, with later updates.",
  url: "https://www.nice.org.uk/guidance/cg124",
};
const MCQUEEN: Source = {
  id: "mcqueen",
  citation: "McQueen MM, Court-Brown CM. Compartment monitoring in tibial fractures. The pressure threshold for decompression. J Bone Joint Surg Br. 1996.",
};
const MILLS: Source = {
  id: "mills-abi",
  citation: "Mills WJ, et al. The value of the ankle-brachial index for diagnosing arterial injury after knee dislocation. A prospective study. J Trauma. 2004.",
};
const AAP_ABUSE: Source = {
  id: "aap-abuse",
  citation: "Christian CW, Committee on Child Abuse and Neglect. The evaluation of suspected child physical abuse. Pediatrics. 2015.",
};
const AAP_FX: Source = {
  id: "aap-fractures",
  citation: "American Academy of Pediatrics. Evaluating young children with fractures for child abuse. Clinical report. Pediatrics. 2025.",
};
const CYFSA: Source = {
  id: "cyfsa",
  citation: "Ontario. Child, Youth and Family Services Act, 2017. Duty to report a child in need of protection.",
};
const AAOS_SCH: Source = {
  id: "aaos-supracondylar",
  citation: "Mulpuri K, Hosalkar H, Howard A. AAOS clinical practice guideline: the treatment of pediatric supracondylar humerus fractures. J Am Acad Orthop Surg. 2012.",
  url: "https://pubmed.ncbi.nlm.nih.gov/22553105/",
};
const TREKK: Source = {
  id: "trekk-pain",
  citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations: pediatric fractures. Version 4.0. 2025.",
  url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2025_04_22-Fractures-BLR-v4.0-Final.pdf",
};

const base = { topic: "msk", reviewed: true, author: AUTHOR, version: 1 } as const;

export const MSK_SAMPS: Samp[] = [
  {
    ...base,
    id: "msk-01",
    title: "Fall from a ladder",
    stem:
      "A 44-year-old roofer fell about 4 metres from a ladder and landed on his feet. He has severe right heel pain and cannot bear weight. He did not hit his head. GCS is 15. The right hindfoot is swollen and bruised. Radiographs show a comminuted intra-articular calcaneal fracture.",
    vitals: { pulse: "96/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What other injuries would you specifically look for given this mechanism and fracture?",
        required: 3,
        accept: [
          { id: "spine", text: "Thoracolumbar spine fracture", match: ["lumbar", "l spine", "thoracolumbar", "spine fracture", "spinal fracture", "vertebra", "vertebral", "burst fracture", "compression fracture", "t spine"] },
          { id: "contra", text: "Contralateral calcaneal fracture", match: ["contralateral", "other calcaneus", "bilateral calcaneus", "bilateral calcaneal", "left calcaneus", "left calcaneal", "other heel", "left heel", "opposite heel", "other foot"] },
          { id: "knee", text: "Tibial plateau or other knee injury", match: ["tibial plateau", "knee", "tibia", "tibial"] },
          { id: "ankle", text: "Ankle, talus or pilon fracture", match: ["ankle", "talus", "talar", "pilon", "plafond"] },
          { id: "hip", text: "Hip, pelvic or acetabular fracture", match: ["hip", "pelvi", "pelvic", "acetabulum", "acetabular", "femoral neck"] },
          { id: "wrist", text: "Wrist or distal forearm fracture from bracing the fall", match: ["wrist", "distal radius", "radius", "forearm", "upper extremity", "scaphoid"] },
        ],
        explanation:
          "Axial loading through the heel transmits force up the limb and spine. About one in ten calcaneal fractures has an associated lumbar spine fracture, and bilateral calcaneal fractures are common. Knee, hip and wrist injuries also occur with falls from height.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        update: "He has midline tenderness at the thoracolumbar junction. Leg strength, sensation and perianal sensation are normal.",
        prompt: "Which of the following is the most appropriate imaging of his spine?",
        options: [
          "CT of the thoracic and lumbar spine",
          "Lumbar spine radiographs only",
          "MRI of the lumbar spine before any other imaging",
          "Nuclear bone scan in 48 hours",
          "No spine imaging",
        ],
        correct: 0,
        explanation:
          "A high energy fall with a calcaneal fracture and midline tenderness warrants CT of the thoracolumbar spine. CT is more sensitive than plain films for fractures and defines canal compromise. A normal neurological exam does not exclude an unstable fracture.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT shows a stable L1 compression fracture. Spine surgery will see him as an outpatient. Orthopedics plans delayed fixation of the calcaneus once the swelling settles.",
        prompt: "What are the elements of the ED management of his calcaneal fracture?",
        required: 3,
        accept: [
          { id: "splint", text: "Bulky compressive dressing or well padded posterior splint", match: ["splint", "backslab", "jones dressing", "bulky dressing", "robert jones", "compressive dressing"] },
          { id: "elevate", text: "Strict elevation and ice", match: ["elevate", "elevation", "ice", "cryotherapy"] },
          { id: "nwb", text: "Non weight bearing with crutches or walker", match: ["non weight bearing", "nonweight bearing", "nwb", "no weight bearing", "crutch", "walker"] },
          { id: "analgesia", text: "Multimodal analgesia", match: ["analgesia", "analgesic", "acetaminophen", "nsaid", "ibuprofen", "naproxen", "opioid", "hydromorphone", "morphine", "pain control"] },
          { id: "compartment", text: "Monitor or counsel about foot compartment syndrome", match: ["compartment"] },
          { id: "followup", text: "Orthopedic follow up within about one week", match: ["orthopedic follow", "orthopaedic follow", "ortho follow", "fracture clinic", "orthopedic clinic", "orthopaedic clinic"] },
        ],
        unacceptable: [
          { text: "Weight bearing as tolerated", match: ["weight bearing as tolerated", "wbat"] },
          { text: "Circumferential cast while swelling is still evolving", match: ["circumferential cast", "full cast", "below knee cast", "plaster cast"] },
        ],
        explanation:
          "Intra-articular calcaneal fractures swell dramatically. Management is a bulky padded splint, strict elevation, non weight bearing, analgesia and early orthopedic follow up. Foot compartment syndrome is an uncommon but real complication, so warn the patient about escalating pain.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-02",
    title: "Twisting injury on the soccer field",
    stem:
      "A 31-year-old woman twisted her right ankle when her planted foot rotated outward during a soccer game. She could not take four steps on the field or in the ED. She is tender at the posterior tip of the medial malleolus and over the deltoid ligament. The lateral malleolus is not tender. She is also tender just below the fibular head. The navicular and the base of the fifth metatarsal are not tender. The foot is warm with normal pulses.",
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following imaging studies are indicated for her now?",
        options: [
          "Ankle radiograph series",
          "Bone scan of the right ankle",
          "CT of the right ankle",
          "Foot radiograph series",
          "Knee and full length tibia and fibula radiographs",
          "MRI of the right ankle",
          "Point of care ultrasound of the Achilles tendon",
        ],
        select: 2,
        correct: [0, 4],
        explanation:
          "Medial malleolar tenderness and inability to bear weight meet the Ottawa ankle rules for an ankle series. The foot rule is negative. Proximal fibular tenderness with an external rotation mechanism raises concern for a Maisonneuve injury, so image the whole fibula.",
        keyFeature: { topic: "msk", n: 1 },
        source: "ottawa-ankle",
      },
      {
        id: "q2",
        kind: "short",
        update: "The radiologist reports no ankle fracture. The medial clear space looks borderline wide. The tibia and fibula films have not yet been done.",
        prompt: "What steps would uncover an unstable injury that the ankle films may be hiding?",
        required: 2,
        accept: [
          { id: "fibula", text: "Proximal fibular fracture outside the ankle films, so obtain full length fibula views", match: ["proximal fibula", "fibular head", "fibula", "fibular", "maisonneuve", "tib fib"] },
          { id: "stress", text: "Weight bearing or stress (gravity) views to show medial clear space widening", match: ["weight bearing view", "weight bearing film", "weight bearing xray", "weight bearing x ray", "weight bearing radiograph", "stress view", "stress film", "stress radiograph", "gravity stress", "external rotation stress"] },
          { id: "syndesmosis", text: "Examine the syndesmosis with squeeze and external rotation stress tests", match: ["squeeze test", "external rotation test", "syndesmosi", "syndesmotic", "tibiofibular"] },
          { id: "deltoid", text: "Measure the medial clear space and look for talar shift, comparing with the other side", match: ["medial clear space", "talar shift", "clear space", "compare with the other", "contralateral view", "comparison view"] },
          { id: "ct", text: "CT or MRI if the diagnosis remains uncertain", match: ["ct", "mri", "computed tomography"] },
        ],
        explanation:
          "A Maisonneuve injury tears the deltoid ligament, the syndesmosis and the interosseous membrane, and fractures the proximal fibula. Ankle films can look nearly normal. Full length fibula films, a careful look at the medial clear space and weight bearing or stress views reveal the instability.",
        keyFeature: { topic: "msk", n: 4 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        update: "Films show a proximal fibular fracture and a medial clear space of 6 mm. Orthopedics agrees this is an unstable injury and will plan fixation.",
        prompt: "What are the elements of her ED disposition?",
        required: 3,
        accept: [
          { id: "splint", text: "Posterior slab with stirrup splint", match: ["splint", "backslab", "posterior slab", "stirrup", "sugar tong"] },
          { id: "nwb", text: "Non weight bearing with crutches", match: ["non weight bearing", "nonweight bearing", "nwb", "no weight bearing", "crutch"] },
          { id: "elevate", text: "Elevation and ice", match: ["elevate", "elevation", "ice"] },
          { id: "analgesia", text: "Analgesia such as acetaminophen and an NSAID", match: ["analgesia", "analgesic", "acetaminophen", "nsaid", "ibuprofen", "naproxen", "opioid", "pain control"] },
          { id: "ortho", text: "Orthopedic follow up within about one week for operative fixation", match: ["orthopedic", "orthopaedic", "ortho", "fracture clinic", "surgical fixation", "operative fixation", "orif"] },
          { id: "return", text: "Return instructions for increasing pain, numbness or colour change", match: ["return", "compartment", "numbness"] },
        ],
        unacceptable: [
          { text: "Weight bearing as tolerated", match: ["weight bearing as tolerated", "wbat"] },
          { text: "Tensor bandage or air cast alone", match: ["tensor alone", "tensor only", "tensor bandage only", "air cast", "aircast", "air stirrup"] },
        ],
        explanation:
          "A Maisonneuve injury is unstable and usually needs syndesmotic fixation. She needs a well padded splint, strict non weight bearing, analgesia and early fracture clinic review. Treating it as a simple sprain with a tensor and weight bearing risks late ankle arthritis.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
    ],
    sources: [OAR, ROSEN],
  },
  {
    ...base,
    id: "msk-03",
    title: "Shoulder pain after a night at home",
    stem:
      "A 27-year-old man with epilepsy had a witnessed generalized convulsion overnight. He now has severe left shoulder pain. He holds the arm adducted and internally rotated and cannot externally rotate it. The anterior shoulder looks flat and the coracoid is prominent. An AP radiograph was reported as showing no fracture.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [{ id: "posterior", text: "Posterior glenohumeral dislocation", match: ["posterior dislocation", "posterior shoulder", "posterior glenohumeral", "dislocated posteriorly", "posteriorly dislocated"] }],
        unacceptable: [
          { text: "Anterior shoulder dislocation", match: ["anterior dislocation", "anterior shoulder", "anterior glenohumeral"] },
          { text: "Rotator cuff tear or contusion", match: ["rotator cuff", "contusion", "frozen shoulder"] },
        ],
        explanation:
          "Seizure causes forceful contraction of the strong internal rotators and drives the humeral head posteriorly. Loss of external rotation with the arm locked in internal rotation is the key sign. Posterior dislocations are frequently missed on a single AP view.",
        keyFeature: { topic: "msk", n: 2 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following mechanisms, other than seizure, classically cause this injury?",
        options: [
          "Axial load on a flexed, adducted and internally rotated arm",
          "Direct blow to the lateral aspect of the shoulder",
          "Electrical injury or ECT without muscle paralysis",
          "Fall on an abducted, externally rotated arm",
          "Hanging by one arm from a height",
          "Repetitive overhead throwing in athletes",
        ],
        select: 2,
        correct: [0, 2],
        explanation:
          "Posterior dislocation follows violent muscle contraction from seizure, electrical injury or electroconvulsive therapy (ECT) given without muscle paralysis, or an axial load on a flexed, adducted and internally rotated arm. Abduction with external rotation dislocates anteriorly. A direct lateral blow classically injures the acromioclavicular joint.",
        keyFeature: { topic: "msk", n: 2 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        update: "A scapular Y view confirms the diagnosis. You plan closed reduction under procedural sedation.",
        prompt: "What neurovascular findings would you document before and after reduction?",
        required: 3,
        accept: [
          { id: "axillary", text: "Axillary nerve sensation over the lateral deltoid and deltoid contraction", match: ["axillary nerve", "regimental badge", "lateral deltoid", "deltoid sensation", "deltoid"] },
          { id: "pulse", text: "Radial pulse", match: ["radial pulse", "pulse", "brachial pulse"] },
          { id: "perfusion", text: "Capillary refill, colour and temperature of the hand", match: ["capillary refill", "cap refill", "perfusion", "colour", "color", "warmth", "temperature"] },
          { id: "musculocutaneous", text: "Musculocutaneous nerve with lateral forearm sensation and elbow flexion", match: ["musculocutaneous", "lateral forearm", "biceps"] },
          { id: "radial", text: "Radial nerve with wrist and thumb extension and dorsal web space sensation", match: ["radial nerve", "wrist extension", "thumb extension", "dorsal web"] },
          { id: "median", text: "Median nerve with thumb opposition and index finger sensation", match: ["median nerve", "median", "opposition", "ok sign"] },
          { id: "ulnar", text: "Ulnar nerve with finger abduction and little finger sensation", match: ["ulnar nerve", "ulnar", "finger abduction", "little finger", "fifth finger"] },
        ],
        explanation:
          "Document the axillary nerve, distal nerves and perfusion before and after every manipulation. A deficit after reduction is managed differently from one present at arrival. The axillary nerve is the one most often injured with shoulder dislocation.",
        keyFeature: { topic: "msk", n: 5 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What associated injuries would you specifically look for on his imaging or examination?",
        required: 2,
        accept: [
          { id: "reversehs", text: "Reverse Hill-Sachs lesion (anteromedial humeral head impaction)", match: ["reverse hill sachs", "hill sachs", "humeral head impaction", "trough", "impaction fracture"] },
          { id: "lesser", text: "Lesser tuberosity fracture", match: ["lesser tuberosity", "tuberosity"] },
          { id: "glenoid", text: "Posterior glenoid rim fracture (reverse Bankart)", match: ["glenoid", "bankart"] },
          { id: "neck", text: "Proximal humerus or surgical neck fracture", match: ["proximal humerus", "humeral neck", "surgical neck", "anatomic neck", "humerus fracture"] },
          { id: "bilateral", text: "Dislocation of the other shoulder", match: ["bilateral", "contralateral", "other shoulder", "right shoulder", "both shoulder"] },
          { id: "vertebral", text: "Thoracic vertebral compression fracture from the seizure", match: ["vertebral", "compression fracture", "thoracic spine", "t spine"] },
        ],
        explanation:
          "Posterior dislocation is often bilateral after seizure. Impaction of the humeral head, lesser tuberosity and proximal humerus fractures are common companions and change management. A proximal humerus fracture should be recognized before any reduction attempt.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-04",
    title: "Forearm pain after a fall down stairs",
    alsoTopics: ["abuse-domestic"],
    stem:
      "A 34-year-old woman has pain in the middle of her left forearm. She says she fell down the stairs last night. Her partner stays at the bedside and answers most questions for her. She avoids eye contact. The forearm is swollen along its ulnar border. Radiographs show a transverse, minimally displaced fracture of the ulnar shaft. The radius looks intact.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What mechanism does this fracture pattern most suggest?",
        required: 1,
        accept: [
          { id: "defence", text: "A direct blow to the raised forearm while defending against an assault", match: ["direct blow", "defensive", "defending", "defence", "defense", "nightstick", "assault", "struck", "hit with", "intimate partner violence", "ipv", "domestic violence", "abuse"] },
        ],
        unacceptable: [{ text: "Fall on an outstretched hand", match: ["outstretched", "foosh"] }],
        explanation:
          "An isolated transverse ulnar shaft fracture results from a direct blow, typically when the forearm is raised to ward off an attack. It is called a nightstick fracture. A fall on the outstretched hand more often fractures the distal radius.",
        keyFeature: { topic: "msk", n: 2 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What steps would you take in the ED to address this concern?",
        required: 3,
        accept: [
          { id: "alone", text: "Interview her alone, away from the partner", match: ["alone", "privately", "private", "without the partner", "separate", "without partner"] },
          { id: "ask", text: "Ask directly and nonjudgmentally about intimate partner violence", match: ["ask directly", "ask about", "screen", "screening", "direct question", "inquire"] },
          { id: "exam", text: "Examine for other injuries such as patterned bruises, injuries of different ages or strangulation marks", match: ["other injuries", "full exam", "full skin", "secondary survey", "bruise", "strangulation", "head to toe", "body map"] },
          { id: "document", text: "Document injuries objectively, in her own words, with photographs if she consents", match: ["document", "photograph", "photo"] },
          { id: "safety", text: "Assess immediate safety and lethality risk, including children and weapons", match: ["safety", "lethality", "danger assessment", "risk assessment", "children at home", "weapon"] },
          { id: "resources", text: "Offer resources such as social work, a violence team, shelters and a safety plan", match: ["social work", "shelter", "resource", "advocate", "domestic violence team", "safety plan", "crisis line", "hotline"] },
          { id: "interpreter", text: "Use a professional interpreter rather than the partner if needed", match: ["interpreter"] },
          { id: "children", text: "Report to child protection if children are exposed, where provincial law requires", match: ["child protection", "children aid", "child welfare", "childrens aid"] },
        ],
        unacceptable: [
          { text: "Confront the partner", match: ["confront the partner", "confront partner"] },
          { text: "Report to police without her consent", match: ["police without consent", "police without her consent", "mandatory report to police", "mandatory police report", "mandatory reporting"] },
        ],
        explanation:
          "Speak with her alone and ask directly. Document carefully and look for other injuries. Assess safety and connect her with supports. Adult intimate partner violence is not generally reportable to police without consent in Canada, but exposure of children may require a child protection report in many provinces. Confronting the partner can escalate her risk.",
        keyFeature: { topic: "abuse-domestic", n: 4 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What associated injury must you exclude before accepting this as an isolated ulnar fracture, and how?",
        required: 1,
        accept: [
          { id: "monteggia", text: "Radial head dislocation (Monteggia injury) on dedicated elbow films", match: ["monteggia", "radial head", "radiocapitellar", "elbow film", "elbow xray", "elbow x ray", "elbow radiograph", "elbow view", "image the elbow", "elbow"] },
        ],
        explanation:
          "Any forearm shaft fracture requires imaging of the joints above and below. An ulnar fracture with radial head dislocation is a Monteggia injury. The radiocapitellar line should pass through the capitellum on every view.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "single",
        update: "Elbow and wrist films are normal. She discloses that her partner struck her with a broom handle. She wishes to go to her sister's home tonight.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit for open reduction and internal fixation",
          "Discharge home with her partner once her pain is controlled",
          "Sling and family physician follow up in six weeks",
          "Splint, analgesia, fracture clinic in one week, safety plan",
          "Tensor bandage and return to work tomorrow",
        ],
        correct: 3,
        explanation:
          "A minimally displaced isolated ulnar shaft fracture is usually treated closed with a long arm or functional forearm splint, analgesia and fracture clinic review in about one week. Displacement beyond half the shaft width or marked angulation may need fixation. Her safe destination, supports and a safety plan before discharge are part of the disposition.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-05",
    title: "Adolescent with knee pain and a limp",
    stem:
      "A 13-year-old boy has three weeks of intermittent left knee pain and a limp. It worsened today after he tripped. He is afebrile. The knee has full range of motion, no effusion and no tenderness. His mother asks for a knee X-ray.",
    vitals: { weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "The knee examination is normal.",
        prompt: "What further steps would you take in his evaluation?",
        required: 2,
        accept: [
          { id: "hipexam", text: "Examine the hip, including internal rotation and rotation with flexion", match: ["hip exam", "examine hip", "examine the hip", "hip range", "hip rom", "internal rotation", "hip rotation", "assess hip", "assess the hip", "drehmann"] },
          { id: "hipxr", text: "AP pelvis and frog leg lateral views of both hips", match: ["frog leg", "frog lateral", "hip xray", "hip x ray", "hip radiograph", "hip film", "pelvis xray", "pelvic xray", "pelvis x ray", "pelvic x ray", "pelvis radiograph", "pelvic radiograph", "ap pelvis", "lauenstein"] },
          { id: "gait", text: "Observe his gait for an antalgic or out-toeing pattern", match: ["gait", "out toeing", "trendelenburg"] },
        ],
        explanation:
          "Hip pathology in children and adolescents often refers pain to the knee through the obturator nerve. A normal knee exam in a limping child mandates a hip exam and hip films. Both hips should be imaged, including a lateral view.",
        keyFeature: { topic: "msk", n: 3 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        update: "Internal rotation of the left hip is markedly reduced and the hip externally rotates as it is flexed. On the AP pelvis, a line along the superior femoral neck does not intersect the left epiphysis.",
        prompt: "Which of the following is the most likely diagnosis in this adolescent?",
        options: [
          "Legg-Calve-Perthes disease",
          "Septic arthritis of the left hip",
          "Slipped capital femoral epiphysis",
          "Tibial tubercle apophysitis",
          "Transient synovitis of the left hip",
        ],
        correct: 2,
        explanation:
          "An overweight adolescent with referred knee pain, obligate external rotation on hip flexion and an abnormal Klein line has a slipped capital femoral epiphysis. Perthes disease usually affects younger children. Transient synovitis and septic arthritis do not displace the epiphysis on radiographs, and septic arthritis usually causes fever. Tibial tubercle apophysitis (Osgood-Schlatter disease) causes tenderness at the tubercle, and his knee is not tender.",
        keyFeature: { topic: "msk", n: 3 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the elements of his management in the ED?",
        required: 3,
        accept: [
          { id: "nwb", text: "Strict non weight bearing on stretcher or wheelchair", match: ["non weight bearing", "nonweight bearing", "nwb", "no weight bearing", "wheelchair", "bed rest", "stretcher"] },
          { id: "ortho", text: "Same day orthopedic consultation for surgical fixation", match: ["orthopedic", "orthopaedic", "ortho", "pinning", "fixation", "surgery"] },
          { id: "analgesia", text: "Analgesia", match: ["analgesia", "analgesic", "acetaminophen", "ibuprofen", "nsaid", "morphine", "fentanyl", "opioid", "pain control"] },
          { id: "other", text: "Assess the other hip clinically and on films", match: ["other hip", "contralateral", "bilateral", "right hip", "both hip"] },
          { id: "npo", text: "Keep him fasting for likely surgery", match: ["npo", "nil by mouth", "fasting", "nothing by mouth"] },
        ],
        unacceptable: [
          { text: "Weight bearing as tolerated", match: ["weight bearing as tolerated", "wbat"], dangerous: true },
          { text: "Discharge with outpatient follow up", match: ["outpatient", "family doctor", "follow up in 1 week", "follow up in one week"] },
          { text: "Attempt closed reduction in the ED", match: ["reduce in ed", "closed reduction"], dangerous: true },
        ],
        explanation:
          "SCFE needs prompt in situ fixation. Weight bearing can convert a stable slip to an unstable one with a high risk of avascular necrosis. The contralateral hip slips in a substantial proportion of patients, so examine and image it. Never manipulate the hip in the ED.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "single",
        update: "He cannot bear weight at all, even with crutches.",
        prompt: "Which of the following best describes the urgency of orthopedic care?",
        options: [
          "Hip spica cast in the ED and clinic follow up",
          "MRI as an outpatient before any referral",
          "Outpatient orthopedic clinic within two weeks",
          "Physiotherapy referral and reassessment in one month",
          "Urgent orthopedic consultation for fixation",
        ],
        correct: 4,
        explanation:
          "Inability to bear weight even with crutches defines an unstable slip. Avascular necrosis rates are high, so orthopedic consultation for fixation is needed as soon as possible. Delays for imaging or clinic visits are not appropriate.",
        keyFeature: { topic: "msk", n: 7 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-06",
    title: "Wrist pain after a snowboard fall",
    stem:
      "A 22-year-old man fell on his outstretched right hand while snowboarding yesterday. He has radial sided wrist pain. There is tenderness in the anatomic snuffbox and over the scaphoid tubercle, and axial loading of the thumb hurts. Four view wrist radiographs, including a dedicated scaphoid view, show no fracture.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What injury must you presume despite the normal films?",
        required: 1,
        accept: [{ id: "scaphoid", text: "Occult scaphoid fracture", match: ["scaphoid", "navicular"] }],
        unacceptable: [{ text: "Simple wrist sprain", match: ["sprain", "strain", "soft tissue"] }],
        explanation:
          "A significant share of scaphoid fractures are invisible on initial films. Snuffbox tenderness, tubercle tenderness and pain with thumb axial loading together raise the probability. The diagnosis of wrist sprain should not be made in this setting.",
        keyFeature: { topic: "msk", n: 4 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the elements of his management before he leaves the ED?",
        required: 3,
        accept: [
          { id: "spica", text: "Thumb spica splint", match: ["thumb spica", "spica", "thumb splint", "scaphoid splint", "scaphoid cast"] },
          { id: "reimage", text: "Repeat imaging in 10 to 14 days, or earlier MRI or CT", match: ["repeat xray", "repeat x ray", "repeat radiograph", "repeat film", "repeat imaging", "mri", "ct", "10 day", "14 day", "two week", "2 week"] },
          { id: "followup", text: "Arrange fracture clinic or sports medicine follow up", match: ["fracture clinic", "follow up", "followup", "orthopedic", "orthopaedic", "plastic", "hand clinic", "sport medicine"] },
          { id: "analgesia", text: "Analgesia such as acetaminophen or an NSAID", match: ["analgesia", "analgesic", "acetaminophen", "nsaid", "ibuprofen", "naproxen"] },
          { id: "activity", text: "Avoid contact sports and heavy use until cleared", match: ["avoid sport", "no sport", "avoid contact", "no contact", "activity restriction", "rest"] },
        ],
        unacceptable: [
          { text: "Tensor bandage only", match: ["tensor only", "tensor alone", "tensor bandage only"] },
          { text: "No immobilization", match: ["no immobilization", "no splint", "no immobilisation"] },
        ],
        explanation:
          "Treat clinically suspected scaphoid fractures as fractures. Immobilize in a thumb spica, then reimage in about two weeks or obtain early advanced imaging. Missed fractures risk nonunion and avascular necrosis of the proximal pole.",
        keyFeature: { topic: "msk", n: 4 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is a professional snowboard instructor and needs an answer soon.",
        prompt: "Which of the following tests best confirms or excludes an occult scaphoid fracture in the next few days?",
        options: [
          "Bone scan within 24 hours",
          "MRI of the wrist",
          "Plain film stress views",
          "Point of care ultrasound",
          "Repeat radiographs tomorrow",
        ],
        correct: 1,
        explanation:
          "MRI has the best sensitivity and specificity for occult scaphoid fracture and also shows bone bruising and ligament injury. CT is a reasonable alternative if MRI is unavailable. Repeating plain films too early adds little.",
        keyFeature: { topic: "msk", n: 4 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-07",
    title: "Knee pain after a fall at a care home",
    alsoTopics: ["analgesia-sedation"],
    stem:
      "An 84-year-old woman from a long term care home was found on the floor beside her bed this morning. She complains of right knee pain and cannot stand. She has mild dementia and takes amlodipine, zopiclone at bedtime and furosemide. The knee has mild tenderness and no effusion. A knee radiograph is normal.",
    vitals: { temperature: "36.9°C", pulse: "88/minute regular", bp: "132/70 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "The knee film is normal.",
        prompt: "What further steps would you take in her evaluation?",
        required: 2,
        accept: [
          { id: "hipexam", text: "Examine the hip for leg shortening, rotation, log roll pain and range of motion", match: ["hip exam", "examine hip", "examine the hip", "log roll", "leg shortening", "shortening", "external rotation", "hip range", "assess hip", "assess the hip", "hip tenderness"] },
          { id: "hipxr", text: "AP pelvis and lateral hip radiographs", match: ["hip xray", "hip x ray", "hip radiograph", "hip film", "pelvis xray", "pelvic xray", "pelvis x ray", "pelvic x ray", "pelvi radiograph", "pelvic radiograph", "ap pelvis", "lateral hip"] },
          { id: "rami", text: "Examine the pubic rami and pelvis", match: ["pubic rami", "pubic ramus", "pelvic exam", "examine pelvis", "examine the pelvis", "pelvic ring"] },
        ],
        explanation:
          "Hip injury commonly refers pain to the knee, especially in older or cognitively impaired patients. Inability to bear weight after a fall with a normal knee requires a hip and pelvis exam and radiographs.",
        keyFeature: { topic: "msk", n: 3 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        update: "She has pain with log roll of the right hip. AP pelvis and lateral hip radiographs show no fracture. She still cannot bear weight.",
        prompt: "Which of the following is the most appropriate next step for her?",
        options: [
          "Discharge back to the care home with a walker",
          "MRI of the hip, or CT if MRI unavailable",
          "Physiotherapy review and discharge if she can transfer",
          "Repeat hip radiographs in 10 days",
          "Ultrasound of the right hip",
        ],
        correct: 1,
        explanation:
          "A small but important share of hip fractures are occult on radiographs. An older patient who cannot bear weight after a fall with normal films needs MRI, or CT when MRI is not available promptly. Discharge risks displacement of an impacted femoral neck fracture.",
        keyFeature: { topic: "msk", n: 4 },
        source: "nice-hip",
      },
      {
        id: "q3",
        kind: "short",
        update: "MRI shows a nondisplaced right femoral neck fracture. Orthopedics accepts her for surgery.",
        prompt: "What are the elements of her ED management?",
        required: 3,
        accept: [
          { id: "block", text: "Fascia iliaca or femoral nerve block", match: ["fascia iliaca", "femoral nerve block", "femoral block", "nerve block", "regional anesthesia", "regional anaesthesia", "peng block", "fnb"] },
          { id: "acet", text: "Scheduled acetaminophen with cautious low dose opioid for breakthrough", match: ["acetaminophen", "paracetamol", "tylenol", "hydromorphone", "morphine", "opioid", "analgesia", "analgesic"] },
          { id: "delirium", text: "Delirium prevention with orientation aids, glasses, hearing aids and avoiding benzodiazepines", match: ["delirium", "orientation", "hearing aid", "glasses", "avoid benzodiazepine", "avoid sedative", "no benzodiazepine", "no sedative"] },
          { id: "surgery", text: "Surgery within 48 hours of arrival", match: ["48 hour", "48h", "surgery", "orthopedic", "orthopaedic", "ortho"] },
          { id: "npo", text: "Fasting and preoperative workup including ECG, blood work and goals of care", match: ["npo", "fasting", "preoperative", "pre op", "ecg", "cbc", "goals of care", "code status"] },
          { id: "pressure", text: "Pressure injury prevention", match: ["pressure injury", "pressure ulcer", "pressure area", "pressure sore", "skin care"] },
          { id: "vte", text: "VTE prophylaxis", match: ["vte", "dvt prophylaxis", "thromboprophylaxis", "low molecular weight heparin", "lmwh", "enoxaparin", "dalteparin", "tinzaparin"] },
        ],
        unacceptable: [{ text: "Skin traction", match: ["traction"] }],
        explanation:
          "Early regional analgesia reduces opioid use and delirium. Canadian quality standards support surgery within 48 hours of arrival. Delirium prevention, fasting and preoperative workup, and pressure care should start in the ED. Routine traction adds no benefit.",
        keyFeature: { topic: "msk", n: 8 },
        source: "hqo-hip",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What causes of her fall would you look for?",
        required: 3,
        accept: [
          { id: "syncope", text: "Syncope or arrhythmia", match: ["syncope", "arrhythmia", "dysrhythmia", "heart block", "ecg", "cardiac"] },
          { id: "ortho", text: "Orthostatic hypotension from antihypertensive or diuretic", match: ["orthostatic", "postural", "hypotension", "amlodipine", "furosemide", "diuretic", "volume depletion", "dehydration"] },
          { id: "meds", text: "Sedating medication such as zopiclone", match: ["zopiclone", "sedative", "hypnotic", "medication", "polypharmacy"] },
          { id: "infection", text: "Infection such as urinary tract infection or pneumonia", match: ["infection", "uti", "urinary", "pneumonia", "sepsis"] },
          { id: "delirium", text: "Delirium", match: ["delirium"] },
          { id: "stroke", text: "Stroke or TIA", match: ["stroke", "tia", "cva"] },
          { id: "metabolic", text: "Hypoglycemia or electrolyte disturbance such as hyponatremia", match: ["hypoglycemia", "hypoglycaemia", "glucose", "hyponatremia", "hyponatraemia", "electrolyte", "sodium", "hypokalemia"] },
          { id: "environment", text: "Environmental hazard such as poor lighting or a trip at night", match: ["environment", "environmental", "toilet", "toileting", "nocturia", "lighting", "trip"] },
          { id: "abuse", text: "Elder abuse or neglect", match: ["abuse", "neglect"] },
        ],
        explanation:
          "A fragility fracture is often the result of a medical event. Look for syncope, orthostatic hypotension, sedating drugs, infection, delirium and metabolic causes. Her furosemide, amlodipine and zopiclone are all plausible contributors.",
        keyFeature: { topic: "msk", n: 2 },
        source: "rosen",
      },
    ],
    sources: [ROSEN, HQO_HIP, NICE_HIP],
  },
  {
    ...base,
    id: "msk-08",
    title: "Deformed ankle after a slip on ice",
    stem:
      "A 58-year-old man slipped on ice and has an obviously deformed right ankle. The foot is displaced laterally. The skin over the medial malleolus is tented and blanched. The foot is cool and dusky. The dorsalis pedis pulse is not palpable and is faint on Doppler.",
    vitals: { pulse: "102/minute", bp: "150/90 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for his ankle?",
        options: [
          "Ankle radiographs before any manipulation",
          "CT angiography of the right leg",
          "Immediate reduction with analgesia or sedation, then films",
          "Splint in the position found and wait for orthopedics",
          "Vascular surgery consultation before any reduction",
        ],
        correct: 2,
        explanation:
          "A fracture dislocation with a threatened foot or tented skin should be reduced immediately with analgesia or sedation, then imaged. Reduction restores perfusion and prevents skin necrosis. Delaying for imaging or consultants risks both.",
        keyFeature: { topic: "msk", n: 5 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What findings would you document before and after the reduction?",
        required: 3,
        accept: [
          { id: "dp", text: "Dorsalis pedis pulse", match: ["dorsalis pedi", "dp pulse", "dorsal pedal", "pedal pulse", "pulse"] },
          { id: "pt", text: "Posterior tibial pulse", match: ["posterior tibial", "pt pulse"] },
          { id: "perfusion", text: "Capillary refill, colour and temperature", match: ["capillary refill", "cap refill", "colour", "color", "temperature", "warmth", "perfusion"] },
          { id: "dpn", text: "Deep peroneal nerve with first web space sensation and toe dorsiflexion", match: ["deep peroneal", "deep fibular", "first web", "dorsiflexion", "toe extension", "ehl"] },
          { id: "spn", text: "Superficial peroneal nerve with dorsal foot sensation", match: ["superficial peroneal", "superficial fibular", "dorsum", "dorsal foot"] },
          { id: "tibial", text: "Tibial nerve with plantar sensation and toe flexion", match: ["tibial nerve", "plantar", "sole", "toe flexion"] },
          { id: "skin", text: "Skin condition over the malleoli", match: ["skin", "tenting", "blanching", "wound"] },
        ],
        explanation:
          "Pulses, perfusion and the peroneal and tibial nerves must be documented before and after any manipulation. A change after reduction may signal nerve entrapment or vascular injury. The state of the skin also guides timing of surgery.",
        keyFeature: { topic: "msk", n: 5 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        update: "After reduction the foot pinks up and pulses return. Films show a reduced trimalleolar fracture. You now notice a 3 mm puncture over the medial malleolus oozing blood with fat droplets.",
        prompt: "Which of the following best describes this injury at the medial malleolus?",
        options: [
          "Closed fracture with a superficial abrasion",
          "Closed fracture with impending skin breakdown",
          "Contaminated laceration for suturing in the ED",
          "Fracture blister over the medial malleolus",
          "Open fracture needing antibiotics and surgical debridement",
        ],
        correct: 4,
        explanation:
          "Any wound near a fracture that communicates with it is an open fracture, however small. Blood with fat droplets strongly suggests communication. Open fractures need early antibiotics, tetanus prophylaxis and operative debridement.",
        keyFeature: { topic: "msk", n: 6 },
        source: "east-open-fracture",
      },
      {
        id: "q4",
        kind: "short",
        update: "He weighs 90 kg. His last tetanus booster was 15 years ago.",
        prompt: "What are the elements of your management now, including drug doses where relevant?",
        required: 4,
        accept: [
          { id: "cefazolin", text: "Cefazolin 2 g IV as soon as possible", match: ["cefazolin 2 g", "cefazolin 2g", "cefazolin 2000 mg", "cefazolin 2 gram", "ancef 2 g", "ancef 2g"] },
          { id: "tetanus", text: "Tetanus toxoid booster (Tdap)", match: ["tetanus", "tdap", "td"] },
          { id: "dressing", text: "Photograph and cover with a sterile saline moistened dressing", match: ["sterile dressing", "saline dressing", "moist dressing", "photograph", "photo", "cover wound", "cover the wound"] },
          { id: "splint", text: "Well padded splint with repeat neurovascular check", match: ["splint", "backslab", "immobilization", "immobilisation", "immobilize", "immobilise"] },
          { id: "ortho", text: "Urgent orthopedic consultation for operative debridement and fixation", match: ["orthopedic", "orthopaedic", "ortho", "debridement", "washout", "operating room", "surgical"] },
          { id: "analgesia", text: "Analgesia", match: ["analgesia", "analgesic", "opioid", "hydromorphone", "morphine", "fentanyl"] },
        ],
        unacceptable: [
          { text: "Oral antibiotic such as cephalexin", match: ["cephalexin", "keflex", "oral antibiotic"] },
          { text: "Close the wound in the ED", match: ["suture", "primary closure", "close the wound", "close wound", "staple"] },
        ],
        explanation:
          "Early IV cefazolin reduces infection after open fractures. Use 2 g, or 3 g if weight is 120 kg or more. An open fracture is a tetanus prone wound, so a booster is due when the last dose was more than 5 years ago. Cover the wound, splint, and involve orthopedics urgently for debridement. Do not close the wound in the ED.",
        keyFeature: { topic: "msk", n: 7 },
        source: "east-open-fracture",
      },
    ],
    sources: [ROSEN, EAST],
  },
  {
    ...base,
    id: "msk-09",
    title: "Knuckle cut after a night out",
    stem:
      "A 26-year-old man has a 5 mm laceration over the dorsum of his right fifth metacarpophalangeal joint. He says he cut it on a glass at a bar last night. The knuckle is swollen and painful to move. He is right handed and works as an electrician.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What mechanism must you assume until proven otherwise?",
        required: 1,
        accept: [
          { id: "fightbite", text: "Closed fist injury against teeth (fight bite)", match: ["fight bite", "closed fist", "punch", "tooth", "teeth", "human bite", "clenched fist"] },
        ],
        explanation:
          "A small wound over an MCP joint of the dominant hand is a closed fist injury until proven otherwise. Patients often deny the fight. The injury inoculates oral flora into the joint and tendon sheath.",
        keyFeature: { topic: "msk", n: 6 },
        source: "idsa-ssti",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the elements of your evaluation and wound care?",
        required: 3,
        accept: [
          { id: "explore", text: "Explore the wound through full range of motion including with the fist clenched", match: ["clenched", "range of motion", "fist position", "explore", "exploration"] },
          { id: "tendon", text: "Test extensor tendon function and look for tendon or capsule injury", match: ["tendon", "extensor", "capsule", "joint penetration", "joint violation"] },
          { id: "xray", text: "Hand radiographs for fracture, tooth fragment or air in the joint", match: ["xray", "x ray", "radiograph", "film", "imaging"] },
          { id: "irrigate", text: "Copious irrigation", match: ["irrigated", "irrigate", "irrigation", "wash out", "washout"] },
          { id: "open", text: "Leave the wound open", match: ["leave open", "left open", "not close", "no closure", "not suture", "no suture", "delayed closure"] },
          { id: "abx", text: "Antibiotics covering oral flora such as amoxicillin clavulanate", match: ["amoxicillin clavulanate", "amox clav", "clavulin", "augmentin", "antibiotic"] },
          { id: "tetanus", text: "Tetanus prophylaxis", match: ["tetanus", "tdap"] },
        ],
        unacceptable: [{ text: "Primary closure of the wound", match: ["suture", "primary closure", "close the wound", "close wound", "steri strip", "tissue glue", "staple"] }],
        explanation:
          "Examine the wound in the clenched fist position because the tendon and capsule injury slides away when the fingers extend. Radiographs look for fractures, tooth fragments and joint air. Irrigate, leave open and give antibiotics that cover Eikenella and anaerobes. Suturing traps oral flora in the joint.",
        keyFeature: { topic: "msk", n: 6 },
        source: "idsa-ssti",
      },
      {
        id: "q3",
        kind: "single",
        update: "He admits punching someone in the mouth. Radiographs show a small intra-articular fracture of the fifth metacarpal head. Exploration shows a breach in the joint capsule.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Buddy taping and follow up with his family physician",
          "Primary joint capsule closure in the ED, then discharge home",
          "Ulnar gutter splint, oral antibiotics, clinic in one week",
          "Urgent hand surgery for operative washout and IV antibiotics",
          "Wound check in 48 hours after discharge on antibiotics",
        ],
        correct: 3,
        explanation:
          "A fight bite that enters the joint and fractures the metacarpal head is an open intra-articular fracture with a contaminated wound. It needs urgent hand surgery consultation for operative irrigation and debridement, with IV antibiotics. Outpatient care risks septic arthritis and permanent loss of hand function.",
        keyFeature: { topic: "msk", n: 7 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        update: "He has no allergies.",
        prompt: "What is an appropriate empiric IV antibiotic regimen for him?",
        required: 1,
        accept: [
          { id: "ivamoxclav", text: "IV amoxicillin clavulanate", match: ["iv amoxicillin clavulanate", "intravenous amoxicillin clavulanate", "iv amox clav", "iv clavulin", "iv augmentin"] },
          { id: "piptazo", text: "Piperacillin tazobactam", match: ["piperacillin", "pip tazo", "tazocin"] },
          { id: "ceftmetro", text: "Ceftriaxone plus metronidazole", match: ["ceftriaxone metronidazole", "ceftriaxone flagyl"] },
          { id: "ertapenem", text: "A carbapenem such as ertapenem", match: ["ertapenem", "meropenem", "imipenem", "carbapenem"] },
          { id: "cefoxitin", text: "Cefoxitin", match: ["cefoxitin"] },
          { id: "ampsul", text: "Ampicillin sulbactam, where available", match: ["ampicillin sulbactam", "unasyn"] },
        ],
        unacceptable: [
          { text: "Cefazolin", match: ["cefazolin", "ancef"] },
          { text: "Clindamycin alone", match: ["clindamycin alone", "clindamycin only"] },
          { text: "Cephalexin", match: ["cephalexin", "keflex"] },
        ],
        explanation:
          "Human bite infections include Eikenella corrodens, streptococci, Staphylococcus aureus and anaerobes. A beta lactam with a beta lactamase inhibitor, a carbapenem, or ceftriaxone with metronidazole covers them. Ampicillin sulbactam is the usual American choice but is not marketed in Canada, where IV amoxicillin clavulanate has been available since 2020. First generation cephalosporins and clindamycin alone miss Eikenella.",
        keyFeature: { topic: "msk", n: 6 },
        source: "idsa-ssti",
      },
    ],
    sources: [IDSA, ROSEN],
  },
  {
    ...base,
    id: "msk-10",
    title: "Increasing leg pain after admission",
    stem:
      "A 19-year-old man sustained a closed midshaft fracture of the right tibia in a soccer tackle. He arrived two hours ago. The skin is intact. He is in severe pain.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings would you document on his initial examination of the injured leg?",
        required: 3,
        accept: [
          { id: "pulses", text: "Dorsalis pedis and posterior tibial pulses", match: ["pulse", "dorsalis pedi", "posterior tibial", "doppler"] },
          { id: "perfusion", text: "Capillary refill, colour and temperature of the foot", match: ["capillary refill", "cap refill", "colour", "color", "temperature", "perfusion"] },
          { id: "dpn", text: "Deep peroneal nerve with first web space sensation and ankle or toe dorsiflexion", match: ["deep peroneal", "first web", "dorsiflexion", "toe extension"] },
          { id: "spn", text: "Superficial peroneal nerve with dorsal foot sensation and eversion", match: ["superficial peroneal", "eversion", "dorsum of foot", "dorsal foot"] },
          { id: "tibial", text: "Tibial nerve with plantar sensation and plantarflexion", match: ["tibial nerve", "plantar", "sole", "plantarflexion"] },
          { id: "compartments", text: "Compartment firmness and pain on passive stretch", match: ["compartment", "passive stretch", "tense", "firmness"] },
          { id: "skin", text: "Skin integrity to exclude an open fracture", match: ["skin", "wound", "open fracture", "laceration"] },
        ],
        explanation:
          "A baseline examination of pulses, perfusion, each nerve distribution and the compartments allows later change to be recognized. Tibial shaft fractures are the most common cause of acute compartment syndrome. Skin must be examined all around the leg.",
        keyFeature: { topic: "msk", n: 5 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        update: "He is placed in a long leg backslab and admitted for fixation tomorrow. Four hours later his pain is escalating despite repeated hydromorphone. Passive toe flexion causes severe pain. The anterior compartment is tense. Dorsalis pedis pulse is present.",
        prompt: "What are the immediate steps in his management?",
        required: 3,
        accept: [
          { id: "release", text: "Remove or split the backslab and dressings down to skin", match: ["remove", "split", "loosen", "release the", "bivalve", "take down"] },
          { id: "level", text: "Keep the leg at heart level", match: ["heart level", "level of heart", "level of the heart", "neutral position", "avoid elevation", "no elevation", "not elevate", "don't elevate", "stop elevating"] },
          { id: "ortho", text: "Urgent orthopedic consultation for fasciotomy", match: ["fasciotomy", "orthopedic", "orthopaedic", "ortho", "surgery", "surgeon"] },
          { id: "pressure", text: "Measure compartment pressures if the diagnosis is uncertain", match: ["compartment pressure", "pressure measurement", "measure pressure", "stryker", "intracompartmental"] },
          { id: "bp", text: "Avoid hypotension and give oxygen", match: ["avoid hypotension", "treat hypotension", "hypotension", "blood pressure", "oxygen", "fluid"] },
        ],
        unacceptable: [
          { text: "Reassure because the pulse is present", match: ["pulse present so", "reassure"] },
          { text: "Elevate the limb", match: ["elevate", "elevation", "elevated"] },
          { text: "Apply ice", match: ["ice"] },
        ],
        explanation:
          "Pain out of proportion and pain on passive stretch are the earliest signs of compartment syndrome. Pulses are usually preserved until late. Release all circumferential dressings, keep the limb at heart level rather than elevated, and call orthopedics for fasciotomy.",
        keyFeature: { topic: "msk", n: 7 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        update: "Orthopedics measures an anterior compartment pressure of 48 mmHg. His BP is 124/70 mmHg.",
        prompt: "Which of the following is the most appropriate interpretation of this measurement?",
        options: [
          "Elevate the leg and give more opioid analgesia",
          "Perfusion pressure of 22 mmHg, so emergency fasciotomy",
          "Pressure below 50 mmHg, so observe with hourly leg checks",
          "Pressure only meaningful if the pulse is absent",
          "Repeat the pressure measurement in six hours",
        ],
        correct: 1,
        explanation:
          "A difference between diastolic pressure and compartment pressure below 30 mmHg is the commonly used threshold for fasciotomy. Here the perfusion pressure is 70 minus 48, or 22 mmHg, which supports emergency fasciotomy. Absolute thresholds miss patients with lower blood pressure.",
        keyFeature: { topic: "msk", n: 7 },
        source: "mcqueen",
      },
    ],
    sources: [ROSEN, MCQUEEN],
  },
  {
    ...base,
    id: "msk-11",
    title: "Motorcycle crash with a dressed leg",
    alsoTopics: ["multiple-trauma"],
    stem:
      "A 35-year-old man crashed his motorcycle at moderate speed. Paramedics applied a gauze dressing and a vacuum splint to his left lower leg. The primary survey is normal. Radiographs show displaced fractures of the left tibial and fibular shafts. The dressing is soaked with blood.",
    vitals: { pulse: "104/minute", bp: "128/76 mmHg", weight: "125 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step regarding the leg?",
        options: [
          "Apply a tourniquet to the left thigh",
          "Leave the dressing on until orthopedics arrives",
          "Reinforce the dressing and obtain CT angiography of the leg",
          "Remove the dressing and inspect skin around the entire leg",
          "Remove the splint only if the pulses are absent",
        ],
        correct: 3,
        explanation:
          "Dressings and splints applied in the field can hide an open fracture. The skin over every fracture must be inspected circumferentially. The wound can then be photographed and covered again to limit repeated exposure. Leaving the dressing on to reduce infection risk delays recognition of an open fracture.",
        keyFeature: { topic: "msk", n: 6 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "menu",
        update: "There is a 1.5 cm wound over the anteromedial tibia overlying the fracture.",
        prompt: "Which of the following is the most appropriate antibiotic prophylaxis for his open fracture?",
        options: [
          "cefazolin 1 g IV",
          "cefazolin 2 g IV",
          "cefazolin 3 g IV",
          "ceftriaxone 1 g IV",
          "cephalexin 500 mg PO",
          "ciprofloxacin 500 mg PO",
          "vancomycin 1 g IV",
          "None",
        ],
        select: 1,
        correct: [2],
        explanation:
          "Cefazolin is first line for open fractures. Weight based dosing uses 3 g for patients weighing 120 kg or more, so he needs 3 g. Oral agents are inadequate. Clindamycin or vancomycin is reserved for severe beta lactam allergy or known MRSA.",
        keyFeature: { topic: "msk", n: 6 },
        source: "ashp-prophylaxis",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the other elements of the management of his leg in the ED?",
        required: 3,
        accept: [
          { id: "tetanus", text: "Tetanus prophylaxis as indicated", match: ["tetanus", "tdap"] },
          { id: "dressing", text: "Photograph, remove gross debris and apply a sterile saline moistened dressing", match: ["sterile dressing", "saline dressing", "moist dressing", "photograph", "photo", "gross debris", "gross contamination"] },
          { id: "splint", text: "Realign and splint with neurovascular checks before and after", match: ["realign", "reduce", "reduction", "splint"] },
          { id: "ortho", text: "Urgent orthopedic consultation for operative debridement and stabilization", match: ["orthopedic", "orthopaedic", "ortho", "debridement", "washout", "operating room", "external fixation"] },
          { id: "analgesia", text: "IV analgesia", match: ["analgesia", "analgesic", "opioid", "fentanyl", "hydromorphone", "morphine", "ketamine"] },
          { id: "compartment", text: "Monitor for compartment syndrome", match: ["compartment"] },
        ],
        unacceptable: [{ text: "Close the wound in the ED", match: ["suture", "primary closure", "close the wound", "close wound", "staple"] }],
        explanation:
          "Open fracture care is antibiotics, tetanus, a sterile dressing, splinting and early operative debridement. Open fractures can still develop compartment syndrome. Wounds are not closed in the ED. A 1.5 cm wound without heavy contamination does not need added gram negative cover.",
        keyFeature: { topic: "msk", n: 7 },
        source: "east-open-fracture",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "In what other presentations should a fracture be presumed open until proven otherwise?",
        required: 2,
        accept: [
          { id: "puncture", text: "A small puncture wound near a fracture", match: ["puncture", "small wound", "pinhole", "poke hole"] },
          { id: "lac", text: "A laceration adjacent to or over a fracture", match: ["laceration", "adjacent wound", "wound over", "wound near"] },
          { id: "fightbite", text: "A closed fist injury over a metacarpal fracture", match: ["fight bite", "closed fist", "human bite", "punch"] },
          { id: "fat", text: "Bleeding from a wound with fat droplets", match: ["fat", "marrow"] },
          { id: "bite", text: "An animal bite over a fracture", match: ["animal bite", "dog bite", "bite"] },
          { id: "gunshot", text: "A gunshot wound with a fracture", match: ["gunshot", "gsw", "penetrating"] },
          { id: "nailbed", text: "A distal phalanx fracture with a nail bed laceration", match: ["nail bed", "nailbed", "tuft", "subungual"] },
        ],
        explanation:
          "Small punctures, adjacent lacerations, fight bites, animal bites and nail bed injuries over a tuft fracture all communicate with bone more often than expected. Treat them as open fractures so antibiotics are not delayed.",
        keyFeature: { topic: "msk", n: 6 },
        source: "rosen",
      },
    ],
    sources: [ROSEN, EAST, BRATZLER],
  },
  {
    ...base,
    id: "msk-12",
    title: "Child with a swollen elbow",
    alsoTopics: ["analgesia-sedation"],
    stem:
      "A 6-year-old girl fell from monkey bars onto her outstretched left arm. The elbow is swollen with an S shaped deformity and anterior bruising. Radiographs show a completely displaced extension type supracondylar humerus fracture.",
    vitals: { weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What neurovascular findings would you document?",
        required: 3,
        accept: [
          { id: "radial", text: "Radial pulse", match: ["radial pulse", "pulse", "brachial"] },
          { id: "perfusion", text: "Hand perfusion with capillary refill, colour and warmth", match: ["capillary refill", "cap refill", "colour", "color", "warmth", "temperature", "perfusion", "pink"] },
          { id: "ain", text: "Anterior interosseous nerve with OK sign", match: ["anterior interosseous", "ain", "ok sign", "okay sign", "fpl", "flexor pollicis longus"] },
          { id: "median", text: "Median nerve sensation over index finger pad", match: ["median"] },
          { id: "radialn", text: "Radial nerve with thumb extension and dorsal web space sensation", match: ["radial nerve", "thumb extension", "thumbs up", "dorsal web", "wrist extension"] },
          { id: "ulnar", text: "Ulnar nerve with finger abduction and little finger sensation", match: ["ulnar", "finger abduction", "little finger", "cross finger", "crossed finger"] },
        ],
        explanation:
          "Displaced supracondylar fractures injure the brachial artery and the anterior interosseous, radial and ulnar nerves. Document each before any splinting or reduction. The OK sign tests the anterior interosseous nerve, which is most often injured in extension type fractures.",
        keyFeature: { topic: "msk", n: 5 },
        source: "aaos-supracondylar",
      },
      {
        id: "q2",
        kind: "short",
        update: "The radial pulse is absent. The hand is warm and pink with capillary refill of 2 seconds. She cannot flex the tip of her thumb or index finger.",
        prompt: "Which nerve is injured?",
        required: 1,
        accept: [{ id: "ain", text: "Anterior interosseous branch of the median nerve", match: ["anterior interosseous", "ain", "median"] }],
        unacceptable: [
          { text: "Radial nerve", match: ["radial nerve"] },
          { text: "Ulnar nerve", match: ["ulnar"] },
        ],
        explanation:
          "Loss of flexion of the thumb interphalangeal joint and index distal interphalangeal joint, with preserved sensation, indicates an anterior interosseous nerve palsy. Most recover after reduction. Document it before and after any manipulation.",
        keyFeature: { topic: "msk", n: 5 },
        source: "aaos-supracondylar",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for the pulseless but well perfused hand?",
        options: [
          "Admit and reassess the hand in the morning",
          "Arterial bypass by vascular surgery",
          "CT angiography before contacting orthopedics",
          "Splint in over 90 degrees of flexion and discharge home",
          "Urgent closed reduction and pinning by orthopedics",
        ],
        correct: 4,
        explanation:
          "A pulseless, well perfused hand after a displaced supracondylar fracture needs urgent orthopedic consultation for closed reduction and pinning within hours. Most pulses return once the fracture is reduced. Splint in about 20 to 40 degrees of flexion while waiting, since hyperflexion worsens swelling and flow.",
        keyFeature: { topic: "msk", n: 7 },
        source: "aaos-supracondylar",
      },
      {
        id: "q4",
        kind: "short",
        update: "She is crying and has no IV.",
        prompt: "What is an appropriate analgesic for her now, including the drug, dose and route?",
        required: 1,
        accept: [
          {
            id: "infent",
            text: "Intranasal fentanyl 1.5 mcg/kg, which is 30 mcg",
            match: [
              "intranasal fentanyl 30 mcg", "intranasal fentanyl 30mcg", "intranasal fentanyl 30 microgram", "intranasal fentanyl 1.5 mcg/kg", "intranasal fentanyl 1.5mcg/kg", "intranasal fentanyl 1.5 microgram",
              "in fentanyl 30 mcg", "in fentanyl 30mcg", "in fentanyl 1.5 mcg/kg", "nasal fentanyl 30 mcg", "nasal fentanyl 1.5 mcg/kg", "fentanyl 30 mcg nasal", "fentanyl 30 mcg in",
            ],
          },
          {
            id: "inketa",
            text: "Intranasal ketamine 1 mg/kg, which is 20 mg",
            match: ["intranasal ketamine 20 mg", "intranasal ketamine 20mg", "intranasal ketamine 1 mg/kg", "intranasal ketamine 1mg/kg", "in ketamine 20 mg", "in ketamine 1 mg/kg", "nasal ketamine 20 mg", "nasal ketamine 1 mg/kg"],
          },
        ],
        unacceptable: [
          { text: "Intramuscular opioid", match: ["morphine im", "im morphine", "intramuscular"] },
          { text: "Oral codeine", match: ["codeine"], dangerous: true },
        ],
        explanation:
          "Intranasal fentanyl at 1.5 mcg/kg, maximum 100 mcg, gives rapid analgesia without an IV, here 30 mcg. Ibuprofen 10 mg/kg is a useful addition but acts slowly. Codeine is contraindicated in children under 12 in Canada because of unpredictable metabolism, and IM injections are painful.",
        keyFeature: { topic: "msk", n: 8 },
        source: "trekk-pain",
      },
    ],
    sources: [AAOS_SCH, TREKK],
  },
  {
    ...base,
    id: "msk-13",
    title: "Infant who will not move a leg",
    alsoTopics: ["abuse-domestic"],
    stem:
      "A 4-month-old boy is brought in because he has been fussy and has not moved his right leg since yesterday. His father says the leg got caught between the crib slats. The child is irritable when the thigh is handled. There is a small bruise on his left ear. A radiograph shows a spiral fracture of the right femoral shaft.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of this presentation raise concern for inflicted injury?",
        required: 3,
        accept: [
          { id: "mech", text: "Mechanism inconsistent with a spiral fracture", match: ["mechanism", "inconsistent", "implausible", "does not fit", "not explain", "crib"] },
          { id: "delay", text: "Delay in seeking care", match: ["delay", "yesterday", "late presentation"] },
          { id: "ear", text: "Bruising of the ear, a protected site, in a baby who does not cruise", match: ["ear", "bruise", "bruising", "ten 4", "ten4"] },
          { id: "spiral", text: "Spiral fracture pattern implying a twisting force", match: ["spiral", "twisting", "torsion"] },
          { id: "nonamb", text: "Femoral fracture in a non ambulatory infant", match: ["non ambulatory", "nonambulatory", "not walking", "not cruising", "not mobile", "cannot walk", "4 month", "four month"] },
        ],
        explanation:
          "Long bone fractures in infants who cannot walk are highly suspicious for abuse. A spiral femur fracture needs a twisting force a crib does not usually supply. Ear bruising in an infant is a sentinel injury, and delay in presentation adds concern.",
        keyFeature: { topic: "msk", n: 2 },
        source: "aap-abuse",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What investigations would you order to look for associated injuries or alternative explanations?",
        required: 3,
        accept: [
          { id: "survey", text: "Skeletal survey", match: ["skeletal survey", "bone survey"] },
          { id: "head", text: "Neuroimaging such as CT head", match: ["ct head", "head ct", "neuroimaging", "mri brain", "brain imaging", "head imaging", "mri head"] },
          { id: "eyes", text: "Retinal examination by ophthalmology", match: ["retina", "retinal", "ophthalmology", "fundoscopy", "dilated eye", "fundus"] },
          { id: "abdo", text: "Liver enzymes and lipase for occult abdominal injury", match: ["liver enzyme", "ast", "alt", "lft", "lipase", "transaminase"] },
          { id: "coag", text: "CBC and coagulation studies", match: ["cbc", "coagulation", "inr", "ptt", "platelet", "complete blood count"] },
          { id: "bone", text: "Calcium, phosphate, alkaline phosphatase, PTH and vitamin D", match: ["calcium", "phosphate", "alkaline phosphatase", "alp", "pth", "vitamin d", "bone health", "metabolic bone"] },
          { id: "urine", text: "Urinalysis for blood", match: ["urinalysi", "urinalysis", "urine"] },
        ],
        explanation:
          "A skeletal survey looks for occult fractures such as metaphyseal corner and posterior rib fractures. Infants under 6 months with suspected abuse need neuroimaging even without neurological signs. Laboratory tests screen for abdominal injury and exclude bone or bleeding disorders.",
        keyFeature: { topic: "msk", n: 1 },
        source: "aap-fractures",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What steps must you take to protect this child?",
        required: 2,
        accept: [
          { id: "report", text: "Report directly to child protection services", match: ["child protection", "children aid", "cas", "report", "child welfare", "cps"] },
          { id: "admit", text: "Admit to hospital to keep him safe during assessment", match: ["admit", "admission", "keep in hospital", "safe environment"] },
          { id: "team", text: "Involve the child abuse or child protection team", match: ["child abuse team", "scan team", "child maltreatment", "protection team", "pediatrician", "paediatrician"] },
          { id: "siblings", text: "Ensure other children in the home are assessed", match: ["sibling", "other children"] },
          { id: "document", text: "Document the history verbatim and the examination findings", match: ["document", "verbatim", "photograph"] },
        ],
        unacceptable: [
          { text: "Discharge home with outpatient follow up", match: ["discharge home", "discharge with"], dangerous: true },
          { text: "Obtain the parents' consent before reporting", match: ["consent before report", "parental consent", "parents consent", "permission"] },
        ],
        explanation:
          "Every province and territory requires a physician with reasonable grounds to suspect a child needs protection to report promptly. Consent is not required. In Ontario the duty is personal and cannot be delegated. Admission keeps the infant safe while the assessment is completed.",
        keyFeature: { topic: "abuse-domestic", n: 6 },
        source: "cyfsa",
      },
    ],
    sources: [AAP_ABUSE, AAP_FX, CYFSA],
  },
  {
    ...base,
    id: "msk-14",
    title: "Elbow pain after a running fall",
    stem:
      "A 38-year-old woman tripped while running and landed on her outstretched right hand. She has lateral elbow pain and pain with forearm rotation. There is tenderness over the radial head. The elbow radiographs show no fracture line, but there is a posterior fat pad and an elevated anterior fat pad.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What injury must you presume?",
        required: 1,
        accept: [{ id: "radialhead", text: "Occult radial head fracture", match: ["radial head", "radial neck", "occult fracture", "occult elbow fracture", "intra articular fracture"] }],
        unacceptable: [{ text: "Elbow sprain or contusion only", match: ["sprain", "contusion", "soft tissue"] }],
        explanation:
          "A posterior fat pad indicates an elbow effusion and, after trauma, an intra-articular fracture until proven otherwise. In adults the radial head is the usual culprit. In children the same sign suggests an occult supracondylar fracture.",
        keyFeature: { topic: "msk", n: 4 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What associated injuries would you look for on examination?",
        required: 2,
        accept: [
          { id: "druj", text: "Distal radioulnar joint and interosseous membrane injury (Essex-Lopresti)", match: ["druj", "distal radioulnar", "essex lopresti", "interosseous membrane", "forearm tenderness", "distal radius"] },
          { id: "wrist", text: "Wrist or scaphoid injury from the fall", match: ["wrist", "scaphoid", "snuffbox"] },
          { id: "ligament", text: "Collateral ligament injury or elbow instability", match: ["collateral", "ligament", "instability", "mcl", "lcl"] },
          { id: "coronoid", text: "Coronoid or capitellum fracture", match: ["coronoid", "capitellum", "capitellar"] },
          { id: "dislocation", text: "Elbow dislocation that has reduced", match: ["dislocation", "terrible triad"] },
          { id: "shoulder", text: "Shoulder or clavicle injury", match: ["shoulder", "clavicle"] },
          { id: "nerve", text: "Posterior interosseous or radial nerve injury", match: ["posterior interosseous", "radial nerve"] },
        ],
        explanation:
          "Force travels from the wrist to the elbow. Wrist tenderness with a radial head fracture suggests an Essex-Lopresti injury, which needs surgical care. Coronoid fractures and ligament injuries can make the elbow unstable.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        update: "The wrist and forearm are not tender. She can fully pronate and supinate after the pain settles.",
        prompt: "What are the elements of her disposition?",
        required: 3,
        accept: [
          { id: "sling", text: "Sling for comfort for a few days only", match: ["sling", "collar and cuff"] },
          { id: "rom", text: "Early active range of motion", match: ["range of motion", "early motion", "early mobilization", "early mobilisation", "rom", "move the elbow"] },
          { id: "analgesia", text: "Analgesia such as acetaminophen and an NSAID", match: ["analgesia", "analgesic", "acetaminophen", "nsaid", "ibuprofen", "naproxen"] },
          { id: "followup", text: "Follow up in about one week with repeat assessment", match: ["follow up", "followup", "fracture clinic", "repeat xray", "repeat x ray", "repeat radiograph", "reassess"] },
          { id: "return", text: "Return if numbness, locking or worsening pain", match: ["return", "locking", "numbness"] },
        ],
        unacceptable: [{ text: "Long arm cast for several weeks", match: ["long arm cast", "cast for 6 week", "cast for six week"] }],
        explanation:
          "Undisplaced or occult radial head fractures do well with a brief sling and early motion. Prolonged immobilization causes elbow stiffness. Follow up confirms recovering range of motion.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
  },
  {
    ...base,
    id: "msk-15",
    title: "Knee that popped out and back",
    stem:
      "A 29-year-old man was thrown from a snowmobile. His right knee bent backward and he felt it pop out and back in. The knee is swollen and grossly unstable in several directions. Radiographs show a small avulsion fracture of the fibular head and no dislocation. The dorsalis pedis pulse is palpable.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What associated injuries must you actively exclude?",
        required: 2,
        accept: [
          { id: "popliteal", text: "Popliteal artery injury", match: ["popliteal", "arterial", "artery", "vascular"] },
          { id: "peroneal", text: "Common peroneal nerve injury", match: ["peroneal", "fibular nerve", "foot drop"] },
          { id: "plateau", text: "Tibial plateau fracture", match: ["tibial plateau", "plateau"] },
          { id: "tibialn", text: "Tibial nerve injury", match: ["tibial nerve"] },
          { id: "compartment", text: "Compartment syndrome of the leg", match: ["compartment"] },
        ],
        explanation:
          "Multiligament instability after hyperextension means the knee dislocated and spontaneously reduced. Popliteal artery and common peroneal nerve injuries are the key associated injuries. A palpable pulse does not exclude an intimal tear.",
        keyFeature: { topic: "msk", n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ankle brachial index on the right is 0.8.",
        prompt: "Which of the following is the most appropriate next step for him?",
        options: [
          "CT angiography and urgent vascular surgery consultation",
          "Discharge home in a knee immobilizer",
          "Repeat ankle brachial index in clinic in one week",
          "Urgent MRI of the knee for ligament injury",
          "Venous duplex ultrasound of the leg",
        ],
        correct: 0,
        explanation:
          "An ankle brachial index below 0.9 after knee dislocation predicts arterial injury requiring imaging, and a palpable pulse does not exclude it. CT angiography and vascular surgery consultation are needed urgently. Unrecognized popliteal injury carries a high amputation rate if repair is delayed past about six to eight hours.",
        keyFeature: { topic: "msk", n: 7 },
        source: "mills-abi",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What examination findings test the common peroneal nerve?",
        required: 2,
        accept: [
          { id: "dorsiflex", text: "Ankle and toe dorsiflexion", match: ["dorsiflexion", "dorsiflex", "toe extension", "foot drop", "ehl", "extensor hallucis"] },
          { id: "eversion", text: "Foot eversion", match: ["eversion", "evert"] },
          { id: "webspace", text: "Sensation of the first web space", match: ["first web", "web space"] },
          { id: "dorsum", text: "Sensation over the dorsum of the foot and lateral leg", match: ["dorsum", "dorsal foot", "lateral leg", "top of foot"] },
        ],
        unacceptable: [{ text: "Plantar sensation or plantarflexion", match: ["plantar", "sole"] }],
        explanation:
          "The deep peroneal nerve supplies dorsiflexion and first web space sensation. The superficial peroneal nerve supplies eversion and dorsal foot sensation. Plantarflexion and plantar sensation test the tibial nerve.",
        keyFeature: { topic: "msk", n: 5 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT angiography is normal. Vascular surgery signs off.",
        prompt: "What are the elements of his disposition?",
        required: 3,
        accept: [
          { id: "observe", text: "Admit or observe with serial vascular examinations for about 24 hours", match: ["serial", "observe", "observation", "admit", "admission", "24 hour", "repeat abi", "repeat ankle brachial"] },
          { id: "immobilize", text: "Knee immobilizer or splint in slight flexion", match: ["immobilizer", "immobiliser", "splint", "brace", "immobilize", "immobilise"] },
          { id: "nwb", text: "Non weight bearing with crutches", match: ["non weight bearing", "nonweight bearing", "nwb", "crutch"] },
          { id: "ortho", text: "Early orthopedic follow up for multiligament reconstruction", match: ["orthopedic", "orthopaedic", "ortho", "sport medicine", "reconstruction", "ligament repair"] },
          { id: "analgesia", text: "Analgesia", match: ["analgesia", "analgesic", "acetaminophen", "nsaid", "opioid"] },
          { id: "vte", text: "Consider VTE prophylaxis", match: ["vte", "thromboprophylaxis", "lmwh", "dvt prophylaxis", "enoxaparin"] },
        ],
        explanation:
          "A reduced knee dislocation needs a period of observation for delayed arterial thrombosis, immobilization, non weight bearing and early orthopedic care. Multiligament injuries usually require surgical reconstruction.",
        keyFeature: { topic: "msk", n: 8 },
        source: "rosen",
      },
    ],
    sources: [ROSEN, MILLS],
  },
];
