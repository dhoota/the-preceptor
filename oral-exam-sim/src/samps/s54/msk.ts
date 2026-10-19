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
  garcia: { id: "garcia-lopez-peds-open", citation: "Garcia-Lopez E, Vutescu ES, Orman S, Schiller J, Eberson CP, Cruz AI. Antibiotic considerations in the management of pediatric open fractures: current concept review. J Pediatr Orthop Soc N Am. 2021.", url: "https://jposna.org/index.php/jposna/article/view/225" },
  boastOpen: { id: "boast-open-fractures", citation: "British Orthopaedic Association. BOAST: open fractures. 2017.", url: "https://www.boa.ac.uk/resource/boast-4-pdf.html" },
  east: { id: "east-open-fracture-2011", citation: "Hoff WS, Bonadies JA, Cachecho R, Dorlac WC. EAST Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21610369/" },
  bica: { id: "bica-foot-fractures", citation: "Bica D, Sprouse RA, Armen J. Diagnosis and management of common foot fractures. Am Fam Physician. 2016.", url: "https://www.aafp.org/pubs/afp/issues/2016/0201/p183.html" },
  dodd: { id: "dodd-foot-acs", citation: "Dodd A, Le I. Foot compartment syndrome: diagnosis and management. J Am Acad Orthop Surg. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24187035/" },
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
        update: "Passive internal rotation of the right hip reproduces her groin and knee pain. She cannot hop on the right leg. AP pelvis and right hip X-rays are normal.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Bone scan in 2 weeks", "CT of the right hip", "MRI of the right hip", "Physiotherapy and graded running", "Repeat X-rays in 2 weeks"],
        correct: 2,
        explanation:
          "X-rays are often normal early in a femoral neck stress fracture, so normal films do not clear her. MRI is the second-line test of choice, with a reported sensitivity and specificity of 100%, and she should stay off the leg on crutches until it is done. A bone scan has false positive rates as high as 32% and uses radiation. Repeat films in 2 weeks delay the diagnosis, and delay raises the risk that the fracture displaces. Graded running before a fracture is excluded invites that displacement. CT is not the recommended second-line test.",
        keyFeature: { topic: "msk", n: 4 },
        source: "robertson-fnsf",
      },
      {
        id: "q3",
        kind: "single",
        update: "MRI shows marrow edema and a fracture line running from the superior cortex of the right femoral neck, the tension side, across more than half of its width. It is not displaced.",
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
          "A tension-sided fracture line is vertical and unstable, and Robertson and Wood list surgical fixation for a tension-sided fracture that crosses more than half of the femoral neck, while incomplete compression-sided fractures can be managed without surgery. A displaced femoral neck fracture in a young adult threatens the blood supply of the femoral head and has a much worse outcome. So she needs urgent orthopedic consultation, with no weight bearing until fixation. Partial weight bearing, a spica cast or rest at home leave a fracture that can displace even with muscle contraction around the hip. A planned return to running ignores the fracture.",
        keyFeature: { topic: "msk", n: 7 },
        source: "robertson-fnsf",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following underlying problems is most important to address in her follow-up care?",
        options: [
          "Excess foot pronation",
          "Hip abductor weakness",
          "Inadequate running shoes",
          "Low energy availability",
          "Running on hard surfaces",
        ],
        correct: 3,
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
        options: ["Creatine kinase level", "Serum calcium level", "Serum lipase level", "Thyroid stimulating hormone", "Troponin I level"],
        correct: 1,
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

  /* 42 Child with an open forearm fracture under a bandage ---------------- */
  {
    id: "msk-42",
    title: "Boy who fell from a skateboard",
    stem:
      "An 8-year-old boy is brought to the emergency department by his mother 2 hours after he fell from his skateboard onto his outstretched left hand. His forearm is visibly bent. Before driving him in, his mother put an adhesive bandage on a small cut on the inside of his forearm. He is healthy, his immunizations are up to date and he has no allergies. He was given ibuprofen at triage. The left forearm is angulated at its middle third. The radial pulse is strong and capillary refill is 2 seconds.",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "22/minute", bp: "104/62 mmHg", o2sat: "99% on room air", weight: "27 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Under the bandage there is a 4 mm wound on the volar forearm directly over the angulation. It has stopped bleeding. X-rays show displaced fractures of the radial and ulnar shafts.",
        prompt: "Which of the following best describes the injury to this boy's forearm?",
        options: [
          "Open fracture of both forearm bones",
          "Pressure injury from the bandage",
          "Separate cut over a closed fracture",
          "Tented skin over a closed fracture",
          "Torn blister over a closed fracture",
        ],
        correct: 0,
        explanation:
          "A wound of any size over a fracture is an open fracture until a surgeon shows otherwise, and a small volar puncture right at the angulation is typical of a bone end that pierced the skin and slipped back. That the bleeding has stopped does not seal it. The bandage hid the wound, which is why every dressing over a fracture is removed and the skin inspected. Tenting and fracture blisters are skin changes over a closed fracture without a full thickness break. Calling the wound a separate cut or a pressure mark delays the prompt IV antibiotics that open fractures need.",
        keyFeature: { topic: "msk", n: 6 },
        source: "garcia-lopez-peds-open",
      },
      {
        id: "q2",
        kind: "menu",
        select: 1,
        update: "The wound has been photographed and covered with saline-soaked gauze. The bone ends are not visible, and there is no dirt in the wound.",
        prompt: "Which of the following antibiotic regimens is most appropriate for his open fracture now?",
        options: [
          "Cefazolin IV",
          "Cefazolin IV and gentamicin IV",
          "Ceftriaxone IV",
          "Cephalexin PO",
          "Clindamycin IV",
          "Penicillin G IV",
          "Piperacillin-tazobactam IV",
          "Vancomycin IV",
        ],
        correct: [0],
        explanation:
          "A clean 4 mm puncture made from the inside by a bone end, with no gross contamination, is a low grade open fracture. Garcia-Lopez and colleagues describe a first-generation cephalosporin such as cefazolin, given promptly, as the standard for these injuries in children, with gentamicin frequently added for type 3 fractures with extensive soft tissue damage or heavy contamination, and penicillin considered for farm injuries. He has neither. He has no allergy, so clindamycin and vancomycin are not needed, and piperacillin-tazobactam or ceftriaxone add breadth without benefit. Oral cephalexin does not belong in the first dose for an open fracture awaiting surgery.",
        keyFeature: { topic: "msk", n: 6 },
        source: "garcia-lopez-peds-open",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following should be documented before his forearm is splinted or reduced?",
        options: [
          "Capillary refill in the fingers only",
          "Grip strength against the other hand",
          "Motor and sensory testing of each nerve",
          "Two-point discrimination at the thumb",
          "Wrist and elbow range of motion",
        ],
        correct: 2,
        explanation:
          "Displaced fractures of both forearm bones can injure the median nerve and its anterior interosseous branch, the radial nerve and its posterior interosseous branch, and the ulnar nerve. So motor and sensory function of each nerve, with the pulse and capillary refill, is recorded before and after any manipulation. BOAST standards ask that the vascular and neurological status of every open fracture be assessed and documented. Capillary refill alone misses a nerve injury. Grip strength is painful and nonspecific, two-point discrimination at the thumb tests only part of one nerve, and moving the joints of a broken forearm is harmful.",
        keyFeature: { topic: "msk", n: 5 },
        source: "boast-open-fractures",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this boy?",
        options: [
          "Discharge with fracture clinic in 1 week",
          "Family physician review in 2 days",
          "Plastic surgery clinic referral tomorrow",
          "Reduction in the department, then home",
          "Urgent orthopedic consultation now",
        ],
        correct: 4,
        explanation:
          "An open, displaced fracture of both forearm bones needs an orthopedic surgeon in the department to plan irrigation, debridement, reduction and stabilization. Some low grade open fractures in children are now managed with bedside irrigation and antibiotics, but that decision belongs to the surgeon who will follow the fracture. Discharge with clinic follow-up, a family physician review or a plastics referral all delay that decision. A closed reduction with discharge treats the bone and ignores the open wound.",
        keyFeature: { topic: "msk", n: 7 },
        source: "garcia-lopez-peds-open",
      },
    ],
    sources: [S.garcia, S.boastOpen],
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
          "The EAST guideline advises gram-positive coverage as soon as possible after injury, added gram-negative coverage for type III fractures and high-dose penicillin when there is fecal or possible clostridial contamination, such as a farm injury. Manure carries Clostridium species, the cause of gas gangrene, and penicillin covers them. Farmyard contamination also places the fracture in the type III group whatever the wound size, so gram-negative cover is added as well. Fluoroquinolones such as ciprofloxacin offer no advantage over cephalosporin and aminoglycoside regimens and may impair fracture healing. Azithromycin, fluconazole and vancomycin do not target clostridia, and nothing here suggests resistant staphylococci or a fungal infection.",
        keyFeature: { topic: "msk", n: 6 },
        source: "east-open-fracture-2011",
      },
      {
        id: "q3",
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
      {
        id: "q4",
        kind: "single",
        update: "Two hours later, while he waits for transport, his foot pain is much worse despite two doses of IV morphine. The dorsum of the foot is tense, and passive extension of the toes causes severe pain.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Higher dose of IV morphine",
          "Ice and recheck in 4 hours",
          "Observation until transport arrives",
          "Repeat foot X-rays",
          "Urgent surgeon call for decompression",
        ],
        correct: 4,
        explanation:
          "Pain out of proportion to the injury despite opioids, a tense foot and pain on passive toe extension after a crush with metatarsal fractures point to foot compartment syndrome. Dodd and Le note that crush injuries and high-energy fractures are its usual cause, that its signs are less reliable than in other parts of the body so the diagnosis is often delayed, and that emergent fasciotomy is commonly recommended. So the surgeon is called now and the transfer upgraded. More morphine masks the pain that tracks the problem. Ice, observation and repeat films add delay.",
        keyFeature: { topic: "msk", n: 7 },
        source: "dodd-foot-acs",
      },
    ],
    sources: [S.boastOpen, S.east, S.bica, S.dodd],
    ...META,
  },
];
