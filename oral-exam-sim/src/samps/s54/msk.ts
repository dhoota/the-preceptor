// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "msk", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  robertson: { id: "robertson-fnsf", citation: "Robertson GA, Wood AM. Femoral neck stress fractures in sport: a current concepts review. Sports Med Int Open. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/30539087/" },
  reds: { id: "ioc-reds-2023", citation: "Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37752011/" },
  azhar: { id: "azhar-raaa", citation: "Azhar B, Patel SR, Holt PJ, Hinchliffe RJ, Thompson MM, Karthikesalingam A. Misdiagnosis of ruptured abdominal aortic aneurysm: systematic review and meta-analysis. J Endovasc Ther. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25101588/" },
  rubano: { id: "rubano-aaa-us", citation: "Rubano E, Mehta N, Caputo W, Paladino L, Sinert R. Systematic review: emergency department bedside ultrasonography for diagnosing suspected abdominal aortic aneurysm. Acad Emerg Med. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23406071/" },
  esvs: { id: "esvs-aaa-2024", citation: "Wanhainen A, Van Herzeele I, Bastos Goncalves F, et al. European Society for Vascular Surgery (ESVS) 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms. Eur J Vasc Endovasc Surg. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38307694/" },
  boaMbd: { id: "boast-mbd", citation: "British Orthopaedic Association. BOAST: management of metastatic bone disease. 2022.", url: "https://boa.ac.uk/resource/boast-management-of-metastatic-bone-disease.html" },
  rajkumar: { id: "imwg-2014", citation: "Rajkumar SV, Dimopoulos MA, Palumbo A, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25439696/" },
  dimopoulos: { id: "imwg-renal-2016", citation: "Dimopoulos MA, Sonneveld P, Leung N, et al. International Myeloma Working Group recommendations for the diagnosis and management of myeloma-related renal impairment. J Clin Oncol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26976420/" },
  garcia: { id: "garcia-lopez-peds-open", citation: "Garcia-Lopez E, Vutescu ES, Orman S, Schiller J, Eberson CP, Cruz AI. Antibiotic considerations in the management of pediatric open fractures: current concept review. J Pediatr Orthop Soc N Am. 2021.", url: "https://jposna.org/index.php/jposna/article/view/225" },
  boastOpen: { id: "boast-open-fractures", citation: "British Orthopaedic Association. BOAST: open fractures. 2017.", url: "https://www.boa.ac.uk/resource/boast-4-pdf.html" },
  east: { id: "east-open-fracture-2011", citation: "Hoff WS, Bonadies JA, Cachecho R, Dorlac WC. EAST Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21610369/" },
  boastAcs: { id: "boast-compartment", citation: "British Orthopaedic Association. BOAST: diagnosis and management of compartment syndrome of the extremities. 2014, updated 2025.", url: "https://www.boa.ac.uk/resource/boast-10-pdf.html" },
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

  /* 40 Ruptured aortic aneurysm presenting as hip pain -------------------- */
  {
    id: "msk-40",
    title: "Groin pain after lifting a heavy bag",
    stem:
      "You are working in a community hospital emergency department. The nearest vascular surgeon is at a tertiary centre 90 minutes away by road. A 71-year-old man presents 3 hours after a sudden pain in his left groin and hip that began as he lifted a 20 kg bag of wood pellets. The pain now also involves his left flank. He felt lightheaded when he stood up at home. He has hypertension and smoked for 45 years. He takes amlodipine. He is pale and lies still on the stretcher. The left hip moves fully, and passive flexion and rotation do not change his pain. There is no bony tenderness over the hip or pelvis. His abdomen is obese and mildly tender in the left lower quadrant. Urinalysis shows 10 to 20 red cells per high power field.",
    vitals: { temperature: "36.4°C oral", pulse: "112/minute", resp: "22/minute", bp: "96/58 mmHg", o2sat: "95% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would most strongly argue against the hip as the source of his pain?",
        options: [
          "Full painless passive hip motion",
          "Groin pain on walking",
          "Inability to bear weight",
          "Onset while lifting a heavy bag",
          "Pain spreading into the thigh",
        ],
        correct: 0,
        explanation:
          "Disease of the hip joint and hip fractures hurt when the joint is moved, so pain that passive flexion and rotation leave unchanged points away from the hip. His pallor, a pulse of 112/minute and a BP of 96/58 mmHg make a bleeding source more likely, and in a 71-year-old smoker, groin, flank and hip pain with shock is a ruptured abdominal aortic aneurysm until proven otherwise. Groin pain on walking, inability to bear weight and pain spreading into the thigh are all typical of hip pathology. Onset with lifting fits a strain but does not exclude a vascular cause.",
        keyFeature: { topic: "msk", n: 3 },
        source: "azhar-raaa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for him?",
        options: [
          "CT of the kidneys without contrast",
          "Hip and pelvis X-rays",
          "MRI of the lumbar spine",
          "Point of care aortic ultrasound",
          "Urine culture and sensitivity",
        ],
        correct: 3,
        explanation:
          "Bedside ultrasound by emergency physicians detects an abdominal aortic aneurysm with a pooled sensitivity of 99% and specificity of 98%, and it takes minutes without moving an unstable patient. Half of patients with an aneurysm lack the classic triad of hypotension, back pain and a pulsatile mass, and his obesity makes palpation unreliable. Red cells in the urine tempt a diagnosis of renal colic, but a noncontrast renal CT takes a hypotensive patient out of the department and cannot be the first test. Hip X-rays, a spine MRI and a urine culture do not address bleeding.",
        keyFeature: { topic: "msk", n: 3 },
        source: "rubano-aaa-us",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a 7.4 cm infrarenal aortic aneurysm. His BP is now 84/50 mmHg. He is alert and speaking.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Call vascular surgery and transfer now",
          "Crystalloid boluses to a systolic of 120 mmHg",
          "CT angiography before calling surgery",
          "Observation in the ICU at this hospital",
          "Repeat ultrasound in 1 hour",
        ],
        correct: 0,
        explanation:
          "An aneurysm in a hypotensive patient with this pain is very suggestive of rupture, and he needs repair at a vascular centre, so the vascular surgeon is called now and transfer is arranged while resuscitation continues. The ESVS 2024 guideline recommends permissive hypotension, restricting fluid while he stays conscious, with a systolic target of 70 to 90 mmHg and blood products in place of large volumes of crystalloid. Pushing crystalloid to a systolic of 120 mmHg can worsen the bleeding. CT angiography plans the repair but must not delay the call. Observation here or a repeat scan wastes time he does not have.",
        keyFeature: { topic: "msk", n: 7 },
        source: "esvs-aaa-2024",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most common initial misdiagnosis in patients with a ruptured abdominal aortic aneurysm?",
        options: ["Acute pancreatitis", "Diverticulitis", "Hip osteoarthritis", "Lumbar disc herniation", "Ureteric colic"],
        correct: 4,
        explanation:
          "In a meta-analysis of 1 109 patients, 42% of ruptured aneurysms were first misdiagnosed, and ureteric colic and myocardial infarction were the most common wrong diagnoses. Flank pain spreading to the groin with blood in the urine, as he has, makes the error easy. Abdominal pain, shock and a pulsatile mass were present in only 61%, 46% and 45% of cases, so their absence does not exclude rupture. Pancreatitis, diverticulitis, hip arthritis and disc herniation can also be mistaken for a leaking aneurysm, but none was a leading misdiagnosis.",
        keyFeature: { topic: "msk", n: 3 },
        source: "azhar-raaa",
      },
    ],
    sources: [S.azhar, S.rubano, S.esvs],
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
        keyFeature: { topic: "msk", n: 1 },
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
        select: 3,
        prompt: "Which of the following are the most appropriate steps for his wound in the emergency department?",
        options: [
          "Cefazolin IV now",
          "Cephalexin PO at discharge",
          "Closure with tissue adhesive",
          "Delay of antibiotics until surgery",
          "Photograph of the wound",
          "Probing of the wound to bone",
          "Saline-soaked gauze dressing",
        ],
        correct: [0, 4, 6],
        explanation:
          "BOAST standards call for IV antibiotics as soon as possible, ideally within 1 hour of injury, photographs of the wound when it is first exposed, and a dressing of saline-soaked gauze under an occlusive film until formal debridement. Photographs let the surgeon plan without disturbing the dressing again. Probing the wound adds contamination and pain without changing care. Closing it with adhesive traps bacteria over the fracture. Oral cephalexin at discharge and waiting for surgery both miss the window in which antibiotics help most. His immunizations are up to date, so tetanus is covered.",
        keyFeature: { topic: "msk", n: 6 },
        source: "boast-open-fractures",
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
        update: "With the sock removed, there is a 5 mm puncture on the dorsum of the foot over the third metatarsal, oozing blood. X-rays show displaced fractures of the second and third metatarsal shafts.",
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
          "The EAST guideline advises gram-positive coverage as soon as possible after injury, added gram-negative coverage for type III fractures and high-dose penicillin when there is fecal or possible clostridial contamination, such as a farm injury. Manure carries Clostridium species, the cause of gas gangrene, and penicillin covers them. Fluoroquinolones such as ciprofloxacin offer no advantage over cephalosporin and aminoglycoside regimens and may impair fracture healing. Azithromycin, fluconazole and vancomycin do not target clostridia, and nothing here suggests resistant staphylococci or a fungal infection.",
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
          "Displaced fractures of two metatarsals after a crush need a well padded posterior slab that leaves room for swelling, with crutches and no weight bearing until the surgeon decides on fixation. A crushed foot keeps swelling for hours, and the BOAST standard on compartment syndrome asks that circumferential dressings be released to the skin when it is suspected, so a circumferential cast or a tight wrap is the wrong choice now. A hard-soled shoe with full weight bearing suits a stable single metatarsal fracture, not displaced ones. Buddy taping treats toe fractures.",
        keyFeature: { topic: "msk", n: 8 },
        source: "boast-compartment",
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
          "Pain out of proportion to the injury despite opioids, a tense foot and pain on passive toe extension after a crush with metatarsal fractures point to foot compartment syndrome. Dodd and Le note that its signs are less reliable than in the leg and that diagnosis is often delayed, and emergent fasciotomy is commonly recommended. The BOAST standard calls for immediate surgical decompression once the diagnosis is made, so the surgeon is called now and the transfer upgraded. More morphine masks the pain that tracks the problem. Ice, observation and repeat films add delay.",
        keyFeature: { topic: "msk", n: 7 },
        source: "dodd-foot-acs",
      },
    ],
    sources: [S.boastOpen, S.east, S.boastAcs, S.dodd],
    ...META,
  },
];
