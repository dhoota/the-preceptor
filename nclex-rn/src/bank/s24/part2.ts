import type { Item } from "@/engine/types";
import { HINKLE, KDIGO_CKD, KDIGO_GN, MSCC, PANC_CHRONIC, TACO, WFH, WONG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s24-11", {
      topic: "Breathlessness during a blood transfusion",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 82-year-old client with heart failure receives a second unit of packed red blood cells for a hemoglobin of 7.1 g/dL (71 g/L). The unit runs at 250 mL per hour. Sixty minutes in, the client reports shortness of breath. BP is 176/98 mmHg, up from 138/80 mmHg. Heart rate is 112/minute, respirations 30/minute and SpO2 88% on room air. Crackles are heard in both lung bases and the neck veins are distended. Temperature is 37.0°C (98.6°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The client is 82 years old with heart failure and received blood at 250 mL per hour. New dyspnea, a BP rise from 138/80 to 176/98 mmHg, distended neck veins and crackles point to circulatory overload. A temperature of 37.0°C argues against a febrile or hemolytic reaction. The nurse stops the unit and sits the client upright. Diuretics are given as prescribed. SpO2 and lung sounds track the response.",
      sources: [TACO, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Transfusion-associated circulatory overload", why: "Hypertension, distended neck veins, crackles and hypoxia during a fast transfusion in heart failure fit volume overload." },
      { text: "Transfusion-related acute lung injury", why: "Lung injury from transfusion usually brings hypotension and often fever, not a rising BP with distended neck veins." },
      { text: "Acute hemolytic transfusion reaction", why: "A hemolytic reaction brings fever, chills, back pain and often hypotension. This BP is rising." },
      { text: "Febrile nonhemolytic reaction", why: "A febrile reaction raises the temperature. The temperature here is 37.0°C." },
    ],
    actions: [
      { text: "Stop the transfusion", why: "Stopping the unit halts any further volume." },
      { text: "Speed up the unit to finish it", why: "A faster rate adds volume and worsens the overload." },
      { text: "Place the client flat in bed", why: "Lying flat increases venous return and worsens breathing." },
      { text: "Sit the client upright", why: "Sitting upright pools blood in the legs and eases breathing." },
      { text: "Give acetaminophen as prescribed", why: "Acetaminophen treats fever. This client has no fever." },
    ],
    parameters: [
      { text: "Oxygen saturation", why: "SpO2 shows whether oxygenation improves as the overload is treated." },
      { text: "Serum amylase level", why: "Amylase does not reflect volume status or oxygenation." },
      { text: "Lung sounds", why: "Crackles should lessen as the extra fluid is removed." },
      { text: "Blood glucose", why: "Glucose does not guide care for volume overload." },
      { text: "Urine ketones", why: "Urine ketones do not guide care for volume overload." },
    ],
    correct: { condition: 0, actions: [0, 3], parameters: [0, 2] },
  },
  {
    ...meta("rn-s24-12", {
      topic: "Response to pancreatic enzyme replacement",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with chronic pancreatitis had greasy, foul-smelling stools and lost 4 kg over 2 months. Pancrelipase with meals was started 3 weeks ago. Which finding best shows that the treatment is working?",
      rationale:
        "Greasy, foul-smelling stools and a 4 kg weight loss show fat malabsorption from loss of pancreatic enzymes. Pancrelipase supplies the missing digestive enzymes with each meal. Formed stools without grease are the best sign that fat digestion has improved. Weight gain over time also shows a response. Enzymes do not treat pain or diabetes.",
      sources: [PANC_CHRONIC],
    }),
    kind: "mc",
    options: [
      { text: "Stools formed and not greasy", why: "Enzymes replace lipase so fat is digested. Formed stools without grease show better fat absorption." },
      { text: "Lower serum amylase level", why: "Amylase is often normal in chronic pancreatitis and does not measure enzyme replacement." },
      { text: "Less abdominal pain after meals", why: "Enzyme replacement is not a treatment for pain in chronic pancreatitis." },
      { text: "Fasting glucose back to normal", why: "Oral enzymes do not replace insulin, so they do not correct diabetes from pancreatic damage." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-13", {
      topic: "Home care for a child with a factor VIII deficiency",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches the parents of a 7-year-old child with severe hemophilia A who has a home infusion plan. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Severe hemophilia A causes bleeding into joints and muscles. Factor VIII given at the first sign of a bleed limits damage. Ibuprofen and aspirin impair platelets and are avoided. Heat increases blood flow to a bleeding joint. Regular low-contact exercise and good dental care are encouraged. A medical alert speeds emergency care.",
      sources: [WFH, WONG],
    }),
    kind: "sata",
    options: [
      { text: "Give ibuprofen for joint pain", why: "Ibuprofen affects platelet function and raises bleeding risk. Acetaminophen is used for pain." },
      { text: "Apply heat to a swollen joint", why: "Heat widens blood vessels and can increase bleeding into the joint. Cold is used instead." },
      { text: "Use a soft toothbrush", why: "A soft brush keeps gums healthy while limiting gum bleeding." },
      { text: "Keep the child out of all sports", why: "Regular low-contact exercise protects joints. Full restriction is not needed." },
      { text: "Infuse factor at the first sign of a joint bleed", why: "Early factor replacement stops the bleed and limits joint damage." },
      { text: "Choose swimming over tackle football", why: "Low-contact activities like swimming build muscle with less risk of injury." },
      { text: "Wear a medical alert bracelet", why: "A medical alert tells responders about the bleeding disorder in an emergency." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s24-14", {
      topic: "Clear nasal drip after pituitary surgery",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is on day 1 after transsphenoidal removal of a pituitary tumor. The client reports a steady drip of clear fluid from the nose and a salty taste. The drip gets worse when the client leans forward. What should the nurse do?",
      rationale:
        "A steady clear nasal drip with a salty taste after transsphenoidal surgery suggests a cerebrospinal fluid leak. A leak raises the risk of meningitis. The nurse collects the fluid and notifies the surgeon. Testing can confirm spinal fluid. The head of the bed stays raised, and the client avoids blowing the nose, coughing and bending.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Have the client gently blow the nose clear", why: "Blowing the nose raises pressure and can widen the leak or let bacteria in." },
      { text: "Save a drainage sample and call the surgeon", why: "Clear, salty fluid after pituitary surgery suggests a spinal fluid leak. The surgeon needs to know, and the fluid can be tested." },
      { text: "Pack both nostrils with sterile gauze", why: "Packing the nose hides the leak and can trap bacteria near the repair." },
      { text: "Place the client flat with the head down", why: "The head of the bed stays raised to lower pressure at the repair." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-15", {
      topic: "Crying bouts with knees drawn up in an infant",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 9-month-old infant has had bouts of sudden crying with the knees drawn to the chest since last night. Between bouts the infant is calm. The infant has vomited twice. Which findings would the nurse expect with the most likely condition? Select three.",
      rationale:
        "An infant with bouts of sudden crying, knees drawn up, calm spells and vomiting fits intussusception. Part of the bowel telescopes into the next segment. Expected findings include a sausage-shaped mass, an empty-feeling right lower quadrant and stool with blood and mucus. An olive-shaped mass fits pyloric stenosis. Ribbon-like stools fit Hirschsprung disease.",
      sources: [WONG],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Stool with mucus and blood", why: "Mucus and blood mixed in the stool come from the trapped, congested bowel." },
      { text: "Sausage-shaped mass in the abdomen", why: "The telescoped bowel can form a sausage-shaped mass, often in the right upper abdomen." },
      { text: "Olive-shaped mass in the upper abdomen", why: "An olive-shaped mass points to pyloric stenosis, which causes projectile vomiting in young infants." },
      { text: "Ribbon-like, foul-smelling stools", why: "Ribbon-like, foul stools point to Hirschsprung disease." },
      { text: "Watery diarrhea with fever", why: "Watery diarrhea with fever suggests infection rather than a telescoped bowel." },
      { text: "Empty-feeling right lower quadrant", why: "The right lower quadrant can feel empty as the bowel moves into the segment ahead." },
    ],
    correct: [0, 1, 5],
  },
  {
    ...meta("rn-s24-16", {
      topic: "Improvement in kidney inflammation after strep throat",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 7-year-old child is admitted with acute glomerulonephritis 2 weeks after a sore throat. On admission, the urine was tea-colored, the BP was 140/92 mmHg and the child weighed 26 kg. Which finding on day 3 shows improvement?",
      rationale:
        "Acute glomerulonephritis after a strep throat causes sodium and water retention. That leads to edema, hypertension and a low urine output. A weight fall from 26 kg to 24.8 kg shows the child is losing the extra fluid. Daily weight is the best measure of fluid balance. A higher BP, a low output or more swelling shows no improvement.",
      sources: [WONG, KDIGO_GN],
    }),
    kind: "mc",
    options: [
      { text: "Urine output 0.4 mL/kg/hour", why: "An output of 0.4 mL/kg/hour is below normal and shows oliguria." },
      { text: "BP 144/94 mmHg", why: "A BP of 144/94 mmHg is higher than on admission and shows no improvement." },
      { text: "Weight 24.8 kg", why: "A drop from 26 kg to 24.8 kg shows the retained fluid is being excreted." },
      { text: "More swelling around the eyes", why: "More swelling shows fluid is still building up." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-17", {
      topic: "Symptoms soon after meals following gastrectomy",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 2,
      stem: "A client had a partial gastrectomy 6 weeks ago. About 20 minutes after meals the client has cramping, diarrhea, dizziness, sweating and a pounding heart. Complete the following sentences by choosing from the lists of options.",
      rationale:
        "Cramping, diarrhea, dizziness, sweating and a pounding heart about 20 minutes after meals fit early dumping syndrome after gastrectomy. Food enters the small bowel too fast and draws fluid in. Teaching includes small, frequent meals low in simple sugars. Fluids are taken between meals. Lying down briefly after eating slows emptying.",
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "These findings are most consistent with {0}. The nurse should teach the client to {1}.",
    blanks: [
      {
        options: [
          { text: "reactive hypoglycemia", why: "Low glucose from late dumping appears later after a meal, not within 20 minutes." },
          { text: "a marginal ulcer", why: "A marginal ulcer causes pain and bleeding, not sweating and a racing heart soon after meals." },
          { text: "dumping syndrome", why: "Rapid emptying of food into the small bowel soon after meals causes cramping, diarrhea and vasomotor signs." },
          { text: "pernicious anemia", why: "Pernicious anemia develops slowly after gastric surgery and does not cause symptoms after each meal." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "eat three large meals each day", why: "Large meals speed emptying and worsen symptoms. Small, frequent meals are advised." },
          { text: "choose foods high in simple sugars", why: "Simple sugars draw fluid into the bowel and worsen dumping." },
          { text: "sit upright for an hour after eating", why: "Lying down after meals slows emptying. Sitting upright speeds it." },
          { text: "drink fluids between meals, not with them", why: "Taking fluids apart from meals slows the passage of food into the bowel." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s24-18", {
      topic: "Back pain and leg weakness with cancer in bone",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 71-year-old client with prostate cancer that has spread to bone has had mid back pain for 2 weeks. Today the client reports that both legs feel heavy and numb. The client has not voided in 9 hours. Which action is the priority?",
      rationale:
        "Prostate cancer in bone, back pain, new heavy and numb legs and no void for 9 hours point to metastatic spinal cord compression. It is an oncologic emergency. The provider needs to know now so urgent MRI and treatment can start. Function at diagnosis predicts function after treatment. Delay risks permanent paralysis.",
      sources: [MSCC, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Report the findings to the provider now", why: "Back pain with new leg weakness, numbness and urinary retention suggests cord compression. Urgent imaging and treatment protect function." },
      { text: "Give the prescribed oral opioid for pain", why: "Pain relief matters but does not address a threat of permanent paralysis." },
      { text: "Encourage walking to prevent weakness", why: "Walking with new leg weakness raises fall risk, and spinal stability is not yet known." },
      { text: "Apply a heating pad to the back", why: "Heat does not treat compression and delays the report." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-19", {
      topic: "Diet with high potassium and phosphorus in kidney disease",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with stage 4 chronic kidney disease has a serum potassium of 5.6 mEq/L (5.6 mmol/L) and a phosphorus of 6.1 mg/dL (1.97 mmol/L). Which instructions should the nurse include? Select all that apply.",
      rationale:
        "In stage 4 chronic kidney disease the kidneys cannot clear potassium and phosphorus well. This client's potassium is 5.6 mEq/L and phosphorus is 6.1 mg/dL. High-potassium foods and salt substitutes are limited. Dairy, dark colas and processed foods add phosphorus. Phosphate binders work only when taken with food.",
      sources: [KDIGO_CKD, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Use a salt substitute to flavor food", why: "Most salt substitutes contain potassium chloride and can raise the potassium further." },
      { text: "Choose dark cola drinks", why: "Dark colas contain phosphoric acid and add phosphorus." },
      { text: "Limit bananas, oranges and potatoes", why: "These foods are high in potassium, which is already 5.6 mEq/L." },
      { text: "Eat more dairy foods for calcium", why: "Dairy foods are high in phosphorus and would raise the level further." },
      { text: "Choose fresh foods over processed foods", why: "Processed foods often contain phosphate and sodium additives." },
      { text: "Take the phosphate binder with meals", why: "Binders taken with meals bind dietary phosphorus in the gut." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s24-20", {
      topic: "Dark urine after a sulfonamide in an enzyme deficiency",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 24-year-old client with G6PD deficiency started sulfamethoxazole-trimethoprim for a urinary tract infection 2 days ago. The client now has dark urine, yellow sclera and fatigue. Hemoglobin has fallen from 13.8 g/dL (138 g/L) to 9.2 g/dL (92 g/L). Which process best explains these changes?",
      rationale:
        "G6PD deficiency leaves red cells unable to handle oxidant stress. Sulfamethoxazole is a known oxidant trigger. Within days, red cells break down. Hemoglobin falls from 13.8 to 9.2 g/dL. Released pigment darkens the urine and yellows the sclera. The drug is stopped and the provider is notified.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Urinary tract blood loss", why: "Blood loss in the urine would show red urine and red cells on urinalysis, not yellow sclera." },
      { text: "Acute hemolysis", why: "Sulfonamides are oxidant drugs. In G6PD deficiency they break down red cells, causing dark urine, jaundice and a falling hemoglobin." },
      { text: "Bone marrow suppression", why: "Marrow suppression lowers counts over a longer time. It does not cause dark urine and jaundice in 2 days." },
      { text: "Drug-induced liver injury", why: "Liver injury can cause jaundice but does not explain a hemoglobin fall from 13.8 to 9.2 g/dL." },
    ],
    correct: 1,
  },
];
