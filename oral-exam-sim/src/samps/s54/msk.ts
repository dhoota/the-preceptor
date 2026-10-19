// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "msk", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  robertson: { id: "robertson-fnsf", citation: "Robertson GA, Wood AM. Femoral neck stress fractures in sport: a current concepts review. Sports Med Int Open. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/30539087/" },
  reds: { id: "ioc-reds-2023", citation: "Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37752011/" },
  stiell: { id: "stiell-ccr", citation: "Stiell IG, Wells GA, Vandemheen KL, et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001.", url: "https://pubmed.ncbi.nlm.nih.gov/11597285/" },
  divi: { id: "divi-atccs", citation: "Divi SN, Schroeder GD, Mangan JJ, et al. Management of acute traumatic central cord syndrome: a narrative review. Global Spine J. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6512200/" },
  fehlingsMri: { id: "fehlings-sci-mri", citation: "Fehlings MG, Martin AR, Tetreault LA, et al. A clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the role of baseline magnetic resonance imaging in clinical decision making and outcome prediction. Global Spine J. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5684845/" },
  fehlingsTiming: { id: "fehlings-ccs-timing", citation: "Fehlings MG, Tetreault LA, Wilson JR, et al. A clinical practice guideline for the management of patients with acute spinal cord injury and central cord syndrome: recommendations on the timing of decompressive surgery. Global Spine J. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5684850/" },
  boaMbd: { id: "boast-mbd", citation: "British Orthopaedic Association. BOAST: management of metastatic bone disease. 2022.", url: "https://boa.ac.uk/resource/boast-management-of-metastatic-bone-disease.html" },
  rajkumar: { id: "imwg-2014", citation: "Rajkumar SV, Dimopoulos MA, Palumbo A, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25439696/" },
  dimopoulos: { id: "imwg-renal-2016", citation: "Dimopoulos MA, Sonneveld P, Leung N, et al. International Myeloma Working Group recommendations for the diagnosis and management of myeloma-related renal impairment. J Clin Oncol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26976420/" },
  sinikumpu: { id: "sinikumpu-patella", citation: "Sinikumpu J, Nicolaou N. Current concepts in the treatment of first-time patella dislocation in children and adolescents. J Child Orthop. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9900011/" },
  esska1: { id: "esska-ftpd-1", citation: "Blønd L, Askenberger M, Stephen J, et al. Management of first-time patellar dislocation: the ESSKA 2024 formal consensus, part 1. Knee Surg Sports Traumatol Arthrosc. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12022820/" },
  esska2: { id: "esska-ftpd-2", citation: "Balcarek P, Blønd L, Beaufils P, et al. Management of first-time patellar dislocation: the ESSKA 2024 formal consensus, part 2. Knee Surg Sports Traumatol Arthrosc. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/" },
  boastOpen: { id: "boast-open-fractures", citation: "British Orthopaedic Association. BOAST: open fractures. 2017.", url: "https://www.boa.ac.uk/resource/boast-4-pdf.html" },
  east: { id: "east-open-fracture-2011", citation: "Hoff WS, Bonadies JA, Cachecho R, Dorlac WC. EAST Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21610369/" },
  bica: { id: "bica-foot-fractures", citation: "Bica D, Sprouse RA, Armen J. Diagnosis and management of common foot fractures. Am Fam Physician. 2016.", url: "https://www.aafp.org/pubs/afp/issues/2016/0201/p183.html" },
  kim: { id: "kim-gustilo", citation: "Kim PH, Leopold SS. In brief: Gustilo-Anderson classification. Clin Orthop Relat Res. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3462875/" },
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
        update: "The right knee has no effusion, a full range of motion and no tenderness.",
        prompt: "Which of the following examination findings would best show that her knee pain is referred from elsewhere?",
        options: [
          "Anterior knee pain on resisted extension",
          "Groin pain on passive hip internal rotation",
          "Lateral knee pain on the Ober test",
          "Pain on the patellar grind test",
          "Tenderness over the tibial tubercle",
        ],
        correct: 1,
        explanation:
          "Pain at the extremes of hip motion, especially internal rotation, is the most consistent sign of a femoral neck stress fracture, and its pain can spread to the thigh and knee. Reproducing her groin pain by rotating the hip moves the search from the knee to the hip. Pain on resisted extension and tibial tubercle tenderness point to the extensor mechanism, the grind test to the patellofemoral joint, and a positive Ober test to a tight iliotibial band. Each would place the problem in the knee, which examines normally.",
        keyFeature: { topic: "msk", n: 3 },
        source: "robertson-fnsf",
      },
      {
        id: "q2",
        kind: "single",
        update: "Passive internal rotation of the right hip reproduces her groin and knee pain. AP pelvis and hip X-rays are normal. MRI shows marrow edema and a fracture line running from the superior cortex of the right femoral neck, the tension side, across more than half of its width. It is not displaced.",
        prompt: "Which of the following is the most appropriate management of this fracture?",
        options: [
          "Crutches with partial weight bearing",
          "Hip spica cast for 6 weeks",
          "Non weight bearing at home for 6 weeks",
          "Return to running in 6 weeks",
          "Urgent orthopedic surgery for fixation",
        ],
        correct: 4,
        explanation:
          "A tension-sided fracture line is vertical and unstable, and Robertson and Wood list surgical fixation for a tension-sided fracture that crosses more than half of the femoral neck, while incomplete compression-sided fractures can be managed without surgery. A displaced femoral neck fracture in a young adult threatens the blood supply of the femoral head and has a much worse outcome. So she needs urgent orthopedic consultation, with no weight bearing until fixation. Partial weight bearing, a spica cast or rest at home leave a fracture that can displace even with muscle contraction around the hip. A planned return to running ignores the fracture. Her normal X-rays never excluded it, which is why MRI, the second-line test, was needed.",
        keyFeature: { topic: "msk", n: 7 },
        source: "robertson-fnsf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following MRI findings would instead have allowed her fracture to be managed without surgery?",
        options: [
          "Complete line across the whole neck",
          "Compression-side line over half the neck",
          "Compression-side line under half the neck",
          "Displaced fracture through the neck",
          "Tension-side line over half the neck",
        ],
        correct: 2,
        explanation:
          "Robertson and Wood manage an incomplete compression-sided fracture, with a line across less than half of the femoral neck, without surgery, unless pain is significant or a straight leg raise is impossible. The compression-sided line is oblique and stable. A compression-sided line across half or more of the neck, a complete line and a tension-sided line across the neck are all fixed surgically, because tension-sided lines are vertical and prone to displace. A displaced fracture needs immediate reduction and fixation.",
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
        prompt: "Which of the following associated injuries is most important to look for in this man?",
        options: ["Cervical spine injury", "Hip fracture", "Nasal bone fracture", "Orbital floor fracture", "Rib fractures"],
        correct: 0,
        explanation:
          "A fall that drives the forehead into the ground forces the neck into hyperextension, and a 72-year-old with arthritis of the neck can injure the cervical spine without neck pain. Blunt trauma to the head in an alert, stable patient brings him within the Canadian C-spine rule, and age 65 or older is a high-risk factor that mandates imaging whatever the rest of the assessment shows. Walking in does not lower that risk. Nasal and orbital floor fractures follow a direct blow to the nose or orbit, not the forehead. A hip fracture follows a sideways fall onto the hip, and rib fractures need a blow to the chest, which is not tender.",
        keyFeature: { topic: "msk", n: 1 },
        source: "stiell-ccr",
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
          "Central cord syndrome is an acute spinal cord injury, so a spine surgeon is consulted now, with the collar kept on. The 2017 guideline by Fehlings and colleagues suggests that early surgery, within 24 hours of injury, be considered for adults with traumatic central cord syndrome, so the decision cannot wait. A medicine admission without a spine surgeon delays it. A clinic in 2 weeks or a family physician review in 2 days sends an untreated cord injury home. Physiotherapy will be part of his recovery but does not replace surgical assessment.",
        keyFeature: { topic: "msk", n: 7 },
        source: "fehlings-ccs-timing",
      },
    ],
    sources: [S.stiell, S.divi, S.fehlingsMri, S.fehlingsTiming],
    ...META,
  },

  /* 41 Pathologic humeral fracture from myeloma --------------------------- */
  {
    id: "msk-41",
    title: "Arm pain while lifting a kettle",
    stem:
      "A 68-year-old man presents to the emergency department 1 hour after he felt a crack in his right upper arm while lifting a full kettle. He has not been able to lift the arm since. For 2 months the same arm has ached at night, and he has felt tired and thirsty. He has lost 4 kg. He has hypertension treated with ramipril and no history of cancer. The right upper arm is swollen and tender in its middle third. The radial pulse is strong, and he can extend his wrist and fingers with normal sensation on the back of the hand. Blood tests drawn at triage show hemoglobin 96 g/L, creatinine 188 umol/L, and total protein 98 g/L with albumin 31 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "16/minute", bp: "138/80 mmHg", o2sat: "97% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "X-rays show a transverse fracture of the humeral shaft through a well defined lytic lesion. Smaller round lucencies are seen elsewhere in the humerus.",
        prompt: "Which of the following best explains the fracture in this patient's arm?",
        options: [
          "Direct blow from a fall",
          "Fragility fracture of osteoporosis",
          "Pathologic fracture through a lesion",
          "Spiral fracture from a twisting force",
          "Stress fracture from repeated loading",
        ],
        correct: 2,
        explanation:
          "A long bone that breaks while lifting a kettle, after 2 months of night pain at the same site, with a fracture line through a lytic lesion, is a pathologic fracture. The BOA standard notes that a low energy fracture in a patient without osteoporosis should raise suspicion of an underlying malignancy. Osteoporotic fractures follow falls and do not cause lytic lesions or months of night pain. He did not fall or twist the arm. A stress fracture follows repeated loading and has no lytic lesion.",
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
        update: "His corrected calcium is 3.18 mmol/L. He is alert, and his pain is controlled in a sling.",
        prompt: "Which of the following is the most appropriate plan for this patient after his initial care?",
        options: [
          "Discharge with sling and clinic review",
          "Hospital admission with IV saline",
          "Oral fluids and family physician review",
          "Same night plating, then discharge",
          "Sling and fracture clinic in 1 week",
        ],
        correct: 1,
        explanation:
          "A corrected calcium of 3.18 mmol/L with a creatinine of 188 umol/L needs IV saline and monitoring, and the IMWG advises high fluid intake for myeloma-related kidney injury. He also needs orthopedic care for a pathologic fracture, which may need fixation, and prompt hematology assessment. Discharge in a sling with clinic review, early or late, leaves hypercalcemia and kidney injury untreated. Oral fluids are not enough at this calcium and creatinine. Plating is planned by orthopedics after staging, not done the same night as a route to discharge.",
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
