// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "msk", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  robertson: { id: "robertson-fnsf", citation: "Robertson GA, Wood AM. Femoral neck stress fractures in sport: a current concepts review. Sports Med Int Open. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/30539087/" },
  reds: { id: "ioc-reds-2023", citation: "Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37752011/" },
  divi: { id: "divi-atccs", citation: "Divi SN, Schroeder GD, Mangan JJ, et al. Management of acute traumatic central cord syndrome: a narrative review. Global Spine J. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6512200/" },
  fehlingsMri: { id: "fehlings-sci-mri", citation: "Fehlings MG, Martin AR, Tetreault LA, et al. A clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the role of baseline magnetic resonance imaging in clinical decision making and outcome prediction. Global Spine J. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5684845/" },
  fehlingsTiming: { id: "fehlings-sci-timing-2024", citation: "Fehlings MG, Tetreault LA, Hachem L, et al. An update of a clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the role and timing of decompressive surgery. Global Spine J. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10964895/" },
  boaMbd: { id: "boast-mbd", citation: "British Orthopaedic Association. BOAST: management of metastatic bone disease. 2022.", url: "https://boa.ac.uk/resource/boast-management-of-metastatic-bone-disease.html" },
  rajkumar: { id: "imwg-2014", citation: "Rajkumar SV, Dimopoulos MA, Palumbo A, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25439696/" },
  dimopoulos: { id: "imwg-renal-2016", citation: "Dimopoulos MA, Sonneveld P, Leung N, et al. International Myeloma Working Group recommendations for the diagnosis and management of myeloma-related renal impairment. J Clin Oncol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26976420/" },
  sinikumpu: { id: "sinikumpu-patella", citation: "Sinikumpu J, Nicolaou N. Current concepts in the treatment of first-time patella dislocation in children and adolescents. J Child Orthop. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9900011/" },
  esska2: { id: "esska-ftpd-2", citation: "Balcarek P, Blønd L, Beaufils P, et al. Management of first-time patellar dislocation: the ESSKA 2024 formal consensus, part 2. Knee Surg Sports Traumatol Arthrosc. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/" },
  boastOpen: { id: "boast-open-fractures", citation: "British Orthopaedic Association. BOAST: open fractures. 2017.", url: "https://www.boa.ac.uk/resource/boast-4-pdf.html" },
  east: { id: "east-open-fracture-2011", citation: "Hoff WS, Bonadies JA, Cachecho R, Dorlac WC. EAST Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21610369/" },
  lezak: { id: "lezak-peroneal", citation: "Lezak B, Massel DH, Varacallo MA. Peroneal nerve injury. StatPearls. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/31751049/" },
} satisfies Record<string, Source>;

export const MSK_S54: Samp[] = [
  /* 39 Femoral neck stress fracture --------------------------------------- */
  {
    id: "msk-39",
    title: "Runner with an aching knee",
    stem:
      "A 19-year-old woman presents to the emergency department with 3 weeks of aching in her right knee and the front of her right thigh. She runs cross-country for her university team and raised her weekly distance from 50 to 90 km over the past 2 months to train for a half marathon. The ache began late in her runs and now comes on when she walks. Today she stopped a run after 2 km because of pain in her right groin. Her periods stopped 8 months ago, and she has lost 5 kg this season. She takes no medications. She is 168 cm tall. She walks with a limp.",
    vitals: { temperature: "36.6°C oral", pulse: "58/minute", resp: "14/minute", bp: "102/64 mmHg", o2sat: "99% on room air", weight: "49 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Her right knee has no effusion, a full range of motion and no tenderness. Passive internal rotation of the right hip reproduces her groin and knee pain.",
        prompt: "Which of the following is the most likely cause of the pain in her right knee?",
        options: [
          "Adductor longus strain",
          "Femoral neck stress fracture",
          "Iliotibial band syndrome",
          "Patellofemoral pain syndrome",
          "Pes anserine bursitis",
        ],
        correct: 1,
        explanation:
          "Robertson and Wood describe a femoral neck stress fracture as groin pain that comes on gradually with activity after a recent rise in training, starts late in exercise and then limits it, brings an antalgic gait and can spread to the thigh and knee. Pain at the extremes of hip motion, especially internal rotation, is its most consistent sign. Female sex is a main risk factor, and they link amenorrhea and disordered eating to these fractures. Her knee examines normally, which argues against iliotibial band syndrome, patellofemoral pain and pes anserine bursitis, each a problem within or beside the knee. An adductor strain hurts on resisted adduction and does not explain pain that is now present with walking.",
        keyFeature: { topic: "msk", n: 3 },
        source: "robertson-fnsf",
      },
      {
        id: "q2",
        kind: "single",
        update: "AP pelvis and lateral hip X-rays are normal. MRI shows marrow edema and a fracture line running from the superior cortex of the right femoral neck, the tension side, across more than half of its width. It is not displaced.",
        prompt: "Which of the following is the most appropriate management of this fracture?",
        options: [
          "Fracture clinic review in 1 week",
          "Hip spica cast for 6 weeks",
          "Repeat MRI in 4 weeks",
          "Sports medicine review in 2 weeks",
          "Urgent surgical fixation",
        ],
        correct: 4,
        explanation:
          "A tension-sided fracture line is vertical and unstable, and Robertson and Wood list surgical fixation for a tension-sided fracture that crosses more than half of the femoral neck. Only incomplete compression-sided fractures are managed without surgery. A displaced femoral neck fracture in a young adult threatens the blood supply of the femoral head and can end in avascular necrosis, so she needs urgent orthopedic consultation for fixation. A spica cast is not the treatment for an unstable tension-sided fracture. Review in a fracture or sports medicine clinic, or a repeat MRI in 4 weeks, leaves an unstable fracture untreated, and delay raises the chance that it displaces.",
        keyFeature: { topic: "msk", n: 7 },
        source: "robertson-fnsf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following activity orders is most appropriate for her now?",
        options: [
          "Crutches, no weight bearing",
          "Crutches, touch-down weight bearing",
          "Strict bed rest, no standing",
          "Walker, weight bearing as tolerated",
          "Wheelchair with standing transfers",
        ],
        correct: 2,
        explanation:
          "Robertson and Wood state that once a complete femoral neck stress fracture is diagnosed, initial bed rest is mandatory before surgery. Even without weight bearing, the hip muscles that contract to steady the pelvis can displace the fracture. Her fracture line crosses more than half of the neck, which they class as complete. Crutches without weight bearing or with touch-down weight bearing, a walker and standing transfers all make those muscles work. Displacement in a young adult risks avascular necrosis of the femoral head.",
        keyFeature: { topic: "msk", n: 8 },
        source: "robertson-fnsf",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following underlying problems is most important to address in her follow-up care?",
        options: [
          "Low energy availability",
          "Overpronation of the feet",
          "Running on hard surfaces",
          "Weak hip abductors",
          "Worn-out running shoes",
        ],
        correct: 0,
        explanation:
          "Amenorrhea for 8 months, a 5 kg weight loss and a body mass index of about 17.4 kg/m2 (49 kg at 1.68 m) in an endurance runner point to low energy availability, the driver of Relative Energy Deficiency in Sport. It suppresses reproductive hormones and harms bone health. Robertson and Wood link disordered eating, amenorrhea and low bone density to the higher rate of femoral neck stress fractures in women. Fatigue of the hip abductors can add to tension-sided fractures, and pronation, footwear and running surfaces are training factors, but none explains amenorrhea and weight loss, and correcting them alone leaves her at risk of the next fracture.",
        keyFeature: { topic: "msk", n: 2 },
        source: "ioc-reds-2023",
      },
    ],
    sources: [S.robertson, S.reds],
    ...META,
  },

  /* 40 Central cord syndrome after a forward fall ------------------------- */
  {
    id: "msk-40",
    title: "Fall on an icy driveway",
    stem:
      "A 72-year-old man presents to the emergency department 2 hours after he slipped on his icy driveway. His hands were in his coat pockets, so he fell forward and struck his forehead on the pavement. He did not lose consciousness and remembers the whole event. He walked into the department and asks only to have the cut on his forehead closed. He says he has no neck pain. He has hypertension and arthritis of his neck, and takes ramipril. He does not take an anticoagulant. He is alert and oriented, with a GCS of 15. There is a 3 cm laceration on his forehead with a surrounding abrasion. His chest, abdomen and pelvis are not tender.",
    vitals: { temperature: "36.5°C oral", pulse: "78/minute", resp: "16/minute", bp: "156/84 mmHg", o2sat: "97% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following neck injury mechanisms does the injury to his forehead most suggest?",
        options: ["Axial compression", "Flexion with rotation", "Hyperextension", "Hyperflexion", "Lateral flexion"],
        correct: 2,
        explanation:
          "A forward fall that drives the forehead into the ground pushes the head backward and forces the neck into hyperextension, so the forehead wound marks the mechanism. Divi and colleagues describe hyperextension as the most common mechanism of acute traumatic central cord syndrome, in which the cord is compressed within a canal already narrowed by spondylosis, often without a fracture and most often in older adults after falls. His age and the arthritis of his neck put him in that group, and his lack of neck pain does not exclude it. Axial compression follows a blow to the top of the head, as in a dive into shallow water. Hyperflexion, with or without rotation, follows a blow to the back of the head or a sudden stop that throws the chin to the chest. Lateral flexion follows a blow to the side of the head.",
        keyFeature: { topic: "msk", n: 2 },
        source: "divi-atccs",
      },
      {
        id: "q2",
        kind: "single",
        update: "While the laceration is cleaned, he mentions that both hands have burned and tingled since the fall and that he has dropped his keys twice. His grip is weak on both sides. Strength in his legs is normal.",
        prompt: "Which of the following is the most likely cause of the symptoms in his hands?",
        options: [
          "Cervical spinal cord injury",
          "Cold injury to both hands",
          "Median nerve compression at wrists",
          "Peripheral neuropathy",
          "Ulnar neuropathy at both elbows",
        ],
        correct: 0,
        explanation:
          "Burning and tingling in both hands with weak grips and normal leg strength after a hyperextension injury is the pattern of acute traumatic central cord syndrome. Divi and colleagues describe it as the most common incomplete spinal cord injury, seen most often in older adults after low-energy falls, with worse function in the arms and hands than in the legs, often over a canal already narrowed by arthritis and often without a fracture. Cold injury needs long exposure. Median or ulnar nerve compression would not appear in both hands at once after this fall. A peripheral neuropathy develops over months and starts in the feet.",
        keyFeature: { topic: "msk", n: 3 },
        source: "divi-atccs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His neck is immobilized in a collar. CT of the cervical spine shows multilevel degenerative narrowing of the spinal canal with no fracture or malalignment.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Collar removal and reassessment",
          "Discharge in a soft collar",
          "Flexion and extension X-rays",
          "MRI of the cervical spine",
          "Repeat CT in 24 hours",
        ],
        correct: 3,
        explanation:
          "A CT without a fracture does not clear a man with a new neurologic deficit. CT shows bone, and his deficit comes from injury to the cord itself over a narrowed canal. The 2017 guideline by Fehlings and colleagues suggests MRI in adults with acute spinal cord injury, before surgery when feasible, to guide decisions and to predict recovery. Removing the collar or sending him home in a soft collar ignores the deficit. Flexion and extension films move a neck that has already injured the cord and do not show the cord. A repeat CT in 24 hours will not show it either.",
        keyFeature: { topic: "msk", n: 4 },
        source: "fehlings-sci-mri",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for him?",
        options: [
          "Admission under internal medicine",
          "Discharge with spine clinic in 2 weeks",
          "Family physician review in 2 days",
          "Physiotherapy for his hand weakness",
          "Urgent spine surgery consultation",
        ],
        correct: 4,
        explanation:
          "Central cord syndrome is an acute spinal cord injury, so a spine surgeon is consulted now, with the collar kept on. The 2024 AO Spine update by Fehlings and colleagues recommends that early surgery, within 24 hours of injury, be offered as the preferred option for adults with acute spinal cord injury regardless of level, and its evidence includes patients with central cord syndrome. The decision on surgery therefore cannot wait. A medicine admission without a spine surgeon delays it. A clinic in 2 weeks or a family physician review in 2 days sends an untreated cord injury home. Physiotherapy will be part of his recovery but does not replace surgical assessment.",
        keyFeature: { topic: "msk", n: 7 },
        source: "fehlings-sci-timing-2024",
      },
    ],
    sources: [S.divi, S.fehlingsMri, S.fehlingsTiming],
    ...META,
  },

  /* 41 Pathologic humeral fracture from myeloma --------------------------- */
  {
    id: "msk-41",
    title: "Pain in the side after reaching back",
    stem:
      "A 68-year-old man presents to the emergency department 6 hours after he felt a crack in his right side as he twisted to reach the back seat of his car. Breathing deeply has hurt since. For 2 months the same area has ached at night, and he has felt tired and thirsty. He has lost 4 kg. He has hypertension treated with ramipril and no history of cancer. He has point tenderness over the right eighth rib in the midaxillary line. Breath sounds are equal and there is no subcutaneous emphysema. Blood tests drawn at triage show hemoglobin 96 g/L, creatinine 188 umol/L, and total protein 98 g/L with albumin 31 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "18/minute", bp: "138/80 mmHg", o2sat: "96% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "X-rays show a displaced fracture of the right eighth rib at a lucent, slightly expanded area with a thinned and scalloped cortex. Smaller round lucencies are seen in two other ribs. There is no pneumothorax.",
        prompt: "Which of the following best explains the fracture of this patient's rib?",
        options: [
          "Direct blow to the chest wall",
          "Fragility fracture of osteoporosis",
          "Pathologic fracture",
          "Stress fracture from repeated loading",
          "Twisting injury of normal bone",
        ],
        correct: 2,
        explanation:
          "A rib that breaks with a simple twist, after 2 months of night pain at the same site, at a lucent area with a thinned and scalloped cortex, is a pathologic fracture. The BOA standard notes that a low energy fracture in a patient without osteoporosis should raise suspicion of an underlying malignancy. A fragility fracture of osteoporosis follows a fall and does not produce a lucent, expanded area or months of night pain. He was not struck on the chest. A stress fracture follows repeated loading and shows no lucent lesion, and a twist alone does not break a normal rib.",
        keyFeature: { topic: "msk", n: 2 },
        source: "boast-mbd",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of his bone lesions?",
        options: [
          "Hyperparathyroid bone disease",
          "Metastatic prostate cancer",
          "Multiple myeloma",
          "Paget disease of bone",
          "Vitamin D deficiency osteomalacia",
        ],
        correct: 2,
        explanation:
          "Anemia of 96 g/L, a creatinine of 188 umol/L, lytic bone lesions and a total protein of 98 g/L with albumin of only 31 g/L, a gap of 67 g/L that suggests a monoclonal protein, together point to multiple myeloma. The IMWG criteria define myeloma-related organ damage by hypercalcemia, renal insufficiency, anemia and lytic bone lesions. Prostate cancer metastases are usually sclerotic rather than lytic and do not raise the protein gap. Hyperparathyroidism and osteomalacia thin the bone without a protein gap or anemia, and Paget disease enlarges and thickens bone.",
        keyFeature: { topic: "msk", n: 2 },
        source: "imwg-2014",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following blood tests is most important to add for him now?",
        options: ["Serum calcium level", "Serum creatine kinase", "Serum lipase level", "Thyroid stimulating hormone", "Troponin I level"],
        correct: 0,
        explanation:
          "Hypercalcemia is a common companion of myeloma and lytic bone disease, and his thirst, fatigue and raised creatinine fit it. The BOA standard for suspected metastatic bone disease lists calcium and a bone profile with a myeloma screen among the first blood tests, along with X-rays of the whole bone. A high calcium needs treatment in the department. Creatine kinase, lipase, TSH and troponin do not address any feature of his presentation.",
        keyFeature: { topic: "msk", n: 2 },
        source: "boast-mbd",
      },
      {
        id: "q4",
        kind: "single",
        update: "His corrected calcium is 3.18 mmol/L. He is alert, and his pain is controlled with acetaminophen and a small dose of IV opioid.",
        prompt: "Which of the following is the most appropriate plan for this patient after his initial care?",
        options: [
          "Analgesia and fracture clinic in 1 week",
          "Discharge and hematology clinic in 1 week",
          "Hospital admission with IV saline",
          "Oral fluids and family physician review",
          "Outpatient skeletal survey, then review",
        ],
        correct: 2,
        explanation:
          "A corrected calcium of 3.18 mmol/L with a creatinine of 188 umol/L needs IV saline and monitoring in hospital, and the IMWG advises high fluid intake for myeloma-related kidney injury. Admission also allows prompt hematology assessment of a likely new myeloma. Discharge to a hematology clinic in a week, or an outpatient skeletal survey first, leaves the hypercalcemia and kidney injury untreated. Oral fluids are not enough at this calcium and creatinine. A fracture clinic visit treats only the rib.",
        keyFeature: { topic: "msk", n: 8 },
        source: "imwg-renal-2016",
      },
    ],
    sources: [S.boaMbd, S.rajkumar, S.dimopoulos],
    ...META,
  },

  /* 42 First-time lateral patellar dislocation in a child ----------------- */
  {
    id: "msk-42",
    title: "Dancer who cannot straighten her knee",
    stem:
      "A 13-year-old girl is brought to the emergency department by her mother 45 minutes after she landed awkwardly from a turn at her dance class. She felt something shift on the outside of her right knee and has not been able to straighten it since. This has never happened before. She is healthy and takes no medications. She was given intranasal fentanyl at triage and is now more comfortable. Her right knee is held in about 40 degrees of flexion. There is a firm bulge on the lateral side of the knee, and the front of the knee looks flat. The dorsalis pedis pulse is strong, and sensation and toe movement are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/68 mmHg", o2sat: "99% on room air", weight: "46 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following manoeuvres is most appropriate to reduce this injury?",
        options: [
          "Axial traction on the lower leg",
          "Extension with medial patellar push",
          "Flexion of the knee past 90 degrees",
          "Internal rotation of the tibia",
          "Pushing the patella further laterally",
        ],
        correct: 1,
        explanation:
          "A lateral bulge with a flat front of the knee, held in flexion after a twisting landing, is a lateral patellar dislocation. Sinikumpu and Nicolaou advise that the patella be reduced and the reduction confirmed clinically before any other care, by extending the knee while pressure on the patella guides it back into the groove, which for a lateral dislocation means pushing it medially. Pushing it further laterally or flexing the knee more keeps it out and adds pain. Traction along the leg and rotating the tibia do not move the patella back. Pulses, sensation and movement were checked before the reduction and are checked again after it.",
        keyFeature: { topic: "msk", n: 5 },
        source: "sinikumpu-patella",
      },
      {
        id: "q2",
        kind: "single",
        update: "The patella returns to its groove as the knee is extended. She can now do a straight leg raise. Over the next hour the knee becomes tense and swollen.",
        prompt: "Which of the following associated injuries does this swelling most suggest?",
        options: [
          "Medial collateral sprain",
          "Medial meniscus tear",
          "Osteochondral fracture",
          "Patellar tendon rupture",
          "Quadriceps tendon rupture",
        ],
        correct: 2,
        explanation:
          "A tense effusion within an hour of a patellar dislocation is a hemarthrosis. The ESSKA consensus calls the incidence of chondral and osteochondral fractures after a first dislocation high, especially in children, and treats a hemarthrosis as a warning sign of one. She can do a straight leg raise, so her quadriceps and patellar tendons are intact. A medial collateral sprain is outside the joint and causes little effusion, and a meniscal tear usually swells more slowly and is not the injury this mechanism predicts.",
        keyFeature: { topic: "msk", n: 1 },
        source: "esska-ftpd-1",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "X-rays of the right knee, including an axial view, show a large effusion and no fracture.",
        prompt: "Which of the following are the most appropriate next steps in her care?",
        options: [
          "Bone scan of the knee",
          "Cylinder cast for 6 weeks",
          "MRI of the knee as soon as possible",
          "Orthopedic review within days",
          "Repeat X-rays in 6 weeks",
          "Ultrasound of the knee",
          "Urgent arthroscopy tonight",
        ],
        correct: [2, 3],
        explanation:
          "Normal X-rays with a hemarthrosis do not exclude a cartilage or osteochondral fragment. The ESSKA consensus considers MRI mandatory after a first dislocation, as soon as possible when there is a hemarthrosis, to find these lesions and to assess repairability, and a repairable fragment changes the plan, so orthopedic review follows within days. Repeat X-rays in 6 weeks lose the time in which a fragment is best repaired. A bone scan and ultrasound do not show the cartilage surfaces. A cylinder cast does not find or treat a fragment, and arthroscopy tonight comes before the injury is defined.",
        keyFeature: { topic: "msk", n: 4 },
        source: "esska-ftpd-1",
      },
      {
        id: "q4",
        kind: "single",
        update: "MRI shows a 15 mm by 12 mm osteochondral fragment from the patella lying loose in the joint.",
        prompt: "Which of the following is the most appropriate plan for her?",
        options: [
          "Activity as tolerated, no follow-up",
          "Brace and physiotherapy only",
          "Discharge with review in 3 months",
          "Repeat MRI in 6 weeks",
          "Surgery to repair the fragment",
        ],
        correct: 4,
        explanation:
          "The fragment measures 15 by 12 mm, about 1.8 cm2. The ESSKA consensus advises repairing chondral or osteochondral fractures of 1 cm2 or more in the patellofemoral area, at the earliest possible time, with refixation preferred over removal even when delayed, so she needs prompt referral for surgery. Nonoperative care with a brace and physiotherapy is for a first dislocation without a repairable fragment. Discharge with a 3 month review, a repeat MRI in 6 weeks or no follow-up all delay a repair that is best done early.",
        keyFeature: { topic: "msk", n: 7 },
        source: "esska-ftpd-2",
      },
    ],
    sources: [S.sinikumpu, S.esska1, S.esska2],
    ...META,
  },

  /* 43 Farm crush injury with an open metatarsal fracture ----------------- */
  {
    id: "msk-43",
    title: "Farmer stepped on in the barn",
    stem:
      "You are working in a rural hospital emergency department in Saskatchewan. The nearest orthopedic surgeon is 2 hours away by road. A 54-year-old man presents 3 hours after a cow stepped on his right forefoot while he was cleaning a stall in his barn. He was wearing rubber boots. He drove himself in and limps. He has type 2 diabetes treated with metformin. His right sock is stained with manure and blood. The forefoot is swollen and bruised across its dorsum, with tenderness over the second and third metatarsals. The dorsalis pedis pulse is palpable and toe sensation is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "16/minute", bp: "148/86 mmHg", o2sat: "98% on room air", weight: "102 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "With the sock removed, there is a 5 mm puncture on the dorsum of the foot over the third metatarsal, oozing blood. X-rays show fractures of the second and third metatarsal shafts, each displaced by about 4 mm.",
        prompt: "Which of the following is the most appropriate target time for surgical debridement of this fracture?",
        options: [
          "After the swelling settles in 1 week",
          "Immediately after transfer",
          "Within 12 hours of injury",
          "Within 24 hours of injury",
          "Within 72 hours of injury",
        ],
        correct: 1,
        explanation:
          "A small puncture over displaced metatarsal fractures, oozing blood through a manure-stained sock, is an open fracture with agricultural contamination. BOAST standards set debridement immediately for highly contaminated wounds such as agricultural, aquatic or sewage injuries, within 12 hours for other solitary high energy open fractures and within 24 hours for other low energy ones. The small size of the wound does not lessen the contamination, so his transfer is arranged now. Waiting 72 hours or until the swelling settles leaves soil organisms in the fracture.",
        keyFeature: { topic: "msk", n: 7 },
        source: "boast-open-fractures",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best classifies this open fracture before surgical exploration?",
        options: ["Closed fracture with abrasion", "Gustilo type I", "Gustilo type II", "Gustilo type III", "Puncture not over fracture"],
        correct: 3,
        explanation:
          "A 5 mm wound would be type I if it were clean, but the Gustilo and Anderson system places any open fracture from a farm injury in type III, whatever the size of the wound, because of the contamination. Kim and Leopold note that the grade given in the emergency department is provisional and is best confirmed in the operating room. The puncture lies over the fractured third metatarsal and oozes blood, so this is not a closed fracture with an abrasion or an unrelated puncture. Type II needs a wound longer than 1 cm without extensive soft tissue damage.",
        keyFeature: { topic: "msk", n: 6 },
        source: "kim-gustilo",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following antibiotics is added to cefazolin specifically because of the farmyard contamination?",
        options: ["azithromycin IV", "ciprofloxacin PO", "fluconazole IV", "penicillin G IV", "vancomycin IV"],
        correct: 3,
        explanation:
          "The EAST guideline advises gram-positive coverage as soon as possible after injury, added gram-negative coverage for type III fractures and high-dose penicillin when there is fecal or possible clostridial contamination, such as a farm injury. Manure carries Clostridium species, the cause of gas gangrene, and penicillin covers them. As a type III injury it also needs gram-negative cover. Fluoroquinolones such as ciprofloxacin offer no advantage over cephalosporin and aminoglycoside regimens and may impair fracture healing. Azithromycin, fluconazole and vancomycin do not target clostridia, and nothing here suggests resistant staphylococci or a fungal infection.",
        keyFeature: { topic: "msk", n: 6 },
        source: "east-open-fracture-2011",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to immobilize his foot for the transfer?",
        options: [
          "Buddy taping of the toes",
          "Circumferential below knee cast",
          "Hard-soled shoe with full weight bearing",
          "Padded posterior slab and crutches",
          "Tight compression wrap to the knee",
        ],
        correct: 3,
        explanation:
          "Bica and colleagues describe initial care of metatarsal shaft fractures as a posterior splint with crutches and no weight bearing, and they list open fractures, multiple metatarsal fractures and lesser metatarsal shafts displaced 3 mm or more for surgical referral. He has all three, so a well padded slab carries him to the surgeon. A crushed foot keeps swelling for hours, and a circumferential cast or a tight wrap leaves no room for it. A walking boot or hard-soled shoe with weight bearing suits a nondisplaced lesser metatarsal fracture, not displaced open ones. Buddy taping treats toe fractures.",
        keyFeature: { topic: "msk", n: 8 },
        source: "bica-foot-fractures",
      },
    ],
    sources: [S.boastOpen, S.kim, S.east, S.bica],
    ...META,
  },
];
