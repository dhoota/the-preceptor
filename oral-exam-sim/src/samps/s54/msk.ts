// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "msk", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  robertson: { id: "robertson-fnsf", citation: "Robertson GA, Wood AM. Femoral neck stress fractures in sport: a current concepts review. Sports Med Int Open. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/30539087/" },
  reds: { id: "ioc-reds-2023", citation: "Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37752011/" },
  aresco: { id: "aresco-geriatric-cspine", citation: "Aresco C, Gambert SR, Stein DM. Cervical spine injuries in the geriatric patient. Consultant360. 2010.", url: "https://www.consultant360.com/articles/cervical-spine-injuries-geriatric-patient" },
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
  walters: { id: "walters-fibula", citation: "Walters BB, Constant D, Anand P. Fibula fractures. StatPearls. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/32310599/" },
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
          "A forward fall that drives the forehead into the ground pushes the head backward and forces the neck into hyperextension. Aresco and colleagues advise that an older patient with abrasions on the forehead or face after such a fall should raise strong suspicion of a cervical extension injury, so his forehead wound marks the mechanism even though he has no neck pain. Axial compression follows a blow to the top of the head, as in a dive into shallow water. Hyperflexion, with or without rotation, follows a blow to the back of the head or a sudden stop that throws the chin to the chest. Lateral flexion follows a blow to the side of the head.",
        keyFeature: { topic: "msk", n: 2 },
        source: "aresco-geriatric-cspine",
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
    sources: [S.aresco, S.divi, S.fehlingsMri, S.fehlingsTiming],
    ...META,
  },

  /* 41 Pathologic rib fracture from myeloma ------------------------------ */
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
          "A rib that breaks with a simple twist, after 2 months of night pain at the same site, at a lucent area with a thinned and scalloped cortex, is a pathologic fracture. The BOA standard notes that a low energy fracture in a patient without osteoporosis should raise suspicion of an underlying malignancy. A fragility fracture of osteoporosis can follow a minor twist, but it does not produce a lucent, expanded area with a scalloped cortex, or months of night pain at the site. He was not struck on the chest. A stress fracture follows repeated loading and shows no lucent lesion, and a twist alone does not break a normal rib.",
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
          "Discharge and hematology clinic in 1 week",
          "Hospital admission with IV saline",
          "Oral fluids and family physician review",
          "Outpatient skeletal survey, then review",
          "Rib fracture clinic review in 1 week",
        ],
        correct: 1,
        explanation:
          "A corrected calcium of 3.18 mmol/L with a creatinine of 188 umol/L needs IV saline and monitoring in hospital, and the IMWG advises high fluid intake for myeloma-related kidney injury. Admission also allows prompt hematology assessment of a likely new myeloma. Discharge to a hematology clinic in a week, or an outpatient skeletal survey first, leaves the hypercalcemia and kidney injury untreated. Oral fluids are not enough at this calcium and creatinine. A fracture clinic visit treats only the rib.",
        keyFeature: { topic: "msk", n: 8 },
        source: "imwg-renal-2016",
      },
    ],
    sources: [S.boaMbd, S.rajkumar, S.dimopoulos],
    ...META,
  },

  /* 42 First-time lateral patellar dislocation at home ------------------- */
  {
    id: "msk-42",
    title: "Knee that gave way on a wet floor",
    stem:
      "You are working in a community hospital emergency department. MRI is available only at the regional hospital. A 12-year-old girl is brought to the emergency department by her grandmother 1 hour after her right foot slipped on a stair at home and her knee buckled inward as she fell. She cannot straighten the knee. This has never happened before. She is healthy and takes no medications. She was given intranasal fentanyl at triage and is now more comfortable. Her right knee is held in about 40 degrees of flexion. There is a firm bulge on the lateral side of the knee, and the front of the knee looks flat. The dorsalis pedis pulse is strong, and sensation and toe movement are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "106/minute", resp: "20/minute", bp: "110/66 mmHg", o2sat: "99% on room air", weight: "41 kg" },
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
          "Valgus stress with the knee flexed",
        ],
        correct: 1,
        explanation:
          "A lateral bulge with a flat front of the knee, held in flexion after the knee buckled inward, is a lateral patellar dislocation. Sinikumpu and Nicolaou advise that the patella be reduced and the reduction confirmed clinically before any other care, by extending the knee with pressure on the lateral side of the patella, which guides it medially back into its groove. Traction along the leg, flexing the knee further and rotating the tibia do not move the patella back. A valgus stress adds to the lateral pull on the patella. Pulses, sensation and movement were checked before the reduction and are checked again after it.",
        keyFeature: { topic: "msk", n: 5 },
        source: "sinikumpu-patella",
      },
      {
        id: "q2",
        kind: "single",
        update: "The patella is reduced. She can now do a straight leg raise. AP, lateral and axial X-rays of the knee show no fracture.",
        prompt: "Which of the following findings over the next hours would most suggest an associated osteochondral fracture?",
        options: [
          "Apprehension on lateral patellar push",
          "Medial femoral condyle tenderness",
          "Medial patellar border tenderness",
          "Pain on full knee flexion",
          "Rapid tense knee effusion",
        ],
        correct: 4,
        explanation:
          "A tense effusion that builds within hours of a patellar dislocation is a hemarthrosis, and Sinikumpu and Nicolaou advise that a hemarthrosis prompt a search for a chondral or other intra-articular injury. They name MRI as the investigation of choice, especially when a hemarthrosis suggests an osteochondral fracture, because normal X-rays do not exclude a cartilage fragment. Tenderness at the medial border of the patella and over the medial femoral condyle is present after almost every first dislocation, so it does not single out a fracture. Apprehension when the patella is pushed laterally shows instability, and pain on full flexion is expected in any acutely injured knee.",
        keyFeature: { topic: "msk", n: 1 },
        source: "sinikumpu-patella",
      },
      {
        id: "q3",
        kind: "menu",
        select: 1,
        update: "An MRI of the knee is booked at the regional hospital in 2 days, and she will go home until then.",
        prompt: "Which of the following is the most appropriate way to support her knee for now?",
        options: [
          "Cylinder cast for 6 weeks",
          "Elastic patellar brace",
          "Hinged brace locked in extension for 6 weeks",
          "Infrapatellar tendon strap",
          "Knee immobilizer for 6 weeks",
          "Long leg back slab for 3 weeks",
        ],
        correct: [1],
        explanation:
          "Sinikumpu and Nicolaou advise against a cast or rigid orthosis after a first dislocation, because it prevents the recovery of motion and the early muscle strengthening that recovery depends on. They suggest that an elastic patella-specific brace may be useful, because it encourages weight bearing and reduces anxiety, used for no more than several weeks, with weight bearing as tolerated and crutches at first if needed. The ESSKA 2024 consensus finds no brace proven better than none and allows a brace with free motion for a short time after the injury. A cylinder cast, a knee immobilizer or slab for weeks, and a brace locked in extension for 6 weeks are prolonged rigid immobilization. An infrapatellar strap is used for patellar tendon pain and does not hold the patella.",
        keyFeature: { topic: "msk", n: 8 },
        source: "sinikumpu-patella",
      },
      {
        id: "q4",
        kind: "single",
        update: "MRI 2 days later shows a 15 mm by 12 mm osteochondral fragment from the patella lying loose in the joint.",
        prompt: "Which of the following is the most appropriate plan for her?",
        options: [
          "Activity as tolerated, no follow-up",
          "Discharge with review in 3 months",
          "Physiotherapy and review in 6 weeks",
          "Repeat MRI in 6 weeks",
          "Surgery to repair the fragment",
        ],
        correct: 4,
        explanation:
          "The fragment measures 15 mm by 12 mm, about 1.8 cm2. The ESSKA consensus advises repairing chondral or osteochondral fractures of 1 cm2 or more in the patellofemoral area, with refixation of the fragment preferred over its removal, so she needs prompt referral for surgery. Physiotherapy with a review in 6 weeks is the plan for a first dislocation without a repairable fragment. Discharge with a 3 month review, a repeat MRI in 6 weeks or no follow-up all leave a loose fragment that the consensus advises repairing.",
        keyFeature: { topic: "msk", n: 7 },
        source: "esska-ftpd-2",
      },
    ],
    sources: [S.sinikumpu, S.esska2],
    ...META,
  },

  /* 43 Open fibular shaft fracture from a cow kick ------------------------ */
  {
    id: "msk-43",
    title: "Dairy farmer kicked during milking",
    stem:
      "You are working in a rural hospital emergency department in Manitoba. The nearest orthopedic surgeon is 2 hours away by road. A 54-year-old man presents 3 hours after a dairy cow kicked the outside of his right leg, midway between the knee and the ankle, while he was milking. He wore coveralls tucked into rubber boots. He drove himself in and limps. He has type 2 diabetes treated with metformin. The right leg of his coveralls is stained with manure and blood. The lateral leg is swollen and bruised at that level, with tenderness over the fibula. The dorsalis pedis pulse is palpable.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "16/minute", bp: "148/86 mmHg", o2sat: "98% on room air", weight: "102 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "With the coveralls cut away, there is a 4 mm puncture over the bruised area, oozing blood. X-rays show a transverse fracture of the middle of the fibular shaft. The tibia, knee and ankle are intact.",
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
          "A small puncture over a fibular fracture, oozing blood through manure-stained clothing, is an open fracture with agricultural contamination. The BOAST standard for open fractures of long bones sets debridement immediately for highly contaminated wounds such as agricultural, aquatic or sewage injuries, within 12 hours for other solitary high energy open fractures and within 24 hours for other low energy ones. The small size of the wound does not lessen the contamination, so his transfer is arranged now. Waiting 72 hours or until the swelling settles leaves soil organisms in the fracture.",
        keyFeature: { topic: "msk", n: 6 },
        source: "boast-open-fractures",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following antibiotics is added to cefazolin specifically because of the farmyard contamination?",
        options: ["azithromycin IV", "ciprofloxacin PO", "fluconazole IV", "penicillin G IV", "vancomycin IV"],
        correct: 3,
        explanation:
          "The EAST guideline advises gram-positive coverage as soon as possible after injury, added gram-negative coverage for type III fractures and high-dose penicillin when there is fecal or possible clostridial contamination, such as a farm injury. Manure carries Clostridium species, the cause of gas gangrene, and penicillin covers them. EAST lists open fractures from farm injuries as a special category of type III, so he also needs gram-negative cover. Fluoroquinolones such as ciprofloxacin offer no advantage over cephalosporin and aminoglycoside regimens and may impair fracture healing. Azithromycin, fluconazole and vancomycin do not target clostridia, and nothing here suggests resistant staphylococci or a fungal infection.",
        keyFeature: { topic: "msk", n: 6 },
        source: "east-open-fracture-2011",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is most likely for the fibular fracture itself once the wound is debrided?",
        options: [
          "Above knee cast for 6 weeks",
          "Intramedullary nail of the fibula",
          "Nonoperative care of the fracture",
          "Plate fixation of the fibula",
          "Spanning external fixator",
        ],
        correct: 2,
        explanation:
          "Walters and colleagues note that the vast majority of isolated fibular shaft fractures are treated without surgery, and that the fibular shaft is not a weight bearing part of the leg. His tibia, knee and ankle are intact, so once the wound has been debrided the fracture itself is usually treated without fixation. Plating or nailing the fibula, or a spanning external fixator, would stabilize a bone that does not need it here. An above knee cast for 6 weeks would hold the knee and ankle still for a fracture of a bone that does not carry the load.",
        keyFeature: { topic: "msk", n: 8 },
        source: "walters-fibula",
      },
      {
        id: "q4",
        kind: "single",
        update: "The receiving surgeon expects to close his wound 5 days after the injury.",
        prompt: "Which of the following is the most appropriate total duration of his prophylactic antibiotics?",
        options: [
          "1 day after injury",
          "3 days after injury",
          "7 days after injury",
          "10 days after injury",
          "14 days after injury",
        ],
        correct: 1,
        explanation:
          "EAST advises that for type III open fractures, which include farm injuries, prophylactic antibiotics continue for 72 hours after injury, and for no more than 24 hours after soft tissue coverage. Stopping 3 days after injury meets both limits, because his wound is closed on day 5. Stopping after 1 day is too short for a type III fracture, since the 24 hour rule after wound closure applies to type I and II fractures. Courses of 7, 10 or 14 days run past both limits, and EAST notes consensus that prophylaxis continued well beyond 72 hours is more likely to harm than help.",
        keyFeature: { topic: "msk", n: 6 },
        source: "east-open-fracture-2011",
      },
    ],
    sources: [S.boastOpen, S.east, S.walters],
    ...META,
  },
];
