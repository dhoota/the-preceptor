import type { Item } from "@/engine/types";
import { ADRENAL, ASCITES, CELIAC, CHOLANGITIS, HINKLE, KDIGO_AKI, UC, UGIB, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s24-21", {
      topic: "Trend in a client taking a daily anti-inflammatory",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 68-year-old client with knee osteoarthritis takes naproxen twice daily. The client was admitted with pneumonia and is now on day 3. The nurse reviews the flow sheet. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3"],
            rows: [
              ["Heart rate (/minute)", "82", "94", "110"],
              ["BP (mmHg)", "132/78", "122/72", "108/64"],
              ["Temperature (°C)", "38.4", "37.6", "37.1"],
              ["Hemoglobin (g/dL)", "12.6", "11.1", "9.4"],
              ["BUN (mg/dL)", "18", "29", "44"],
              ["Creatinine (mg/dL)", "0.9", "0.9", "1.0"],
            ],
          },
        },
      ],
      rationale:
        "The client takes naproxen, which can cause peptic ulcers. Over 3 days the hemoglobin falls from 12.6 to 9.4 and the heart rate rises from 82 to 110/minute. BP falls to 108/64 mmHg. BUN rises from 18 to 44 while creatinine barely changes. Digested blood in the upper gut raises the BUN. This pattern fits upper gastrointestinal bleeding.",
      sources: [UGIB, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report urea in mmol/L rather than BUN, so the rise reads about 6.4 to 15.7 mmol/L. Creatinine reads about 80 to 88 micromol/L, and hemoglobin falls from 126 to 94 g/L.",
    }),
    kind: "mc",
    options: [
      { text: "Acute kidney injury", why: "Kidney injury would raise the creatinine too. Creatinine stays near 0.9 while the BUN climbs." },
      { text: "Worsening sepsis from pneumonia", why: "The temperature is falling, which argues against worsening sepsis. Sepsis also does not explain the falling hemoglobin." },
      { text: "Fluid volume excess", why: "Fluid excess would raise the BP, not drop it to 108/64 mmHg." },
      { text: "Upper gastrointestinal bleeding", why: "Falling hemoglobin and BP, a rising pulse and a BUN rise with a steady creatinine fit blood digested in the gut." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s24-22", {
      topic: "Laboratory trend after a long lie on the floor",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 79-year-old client was found on the floor at home after lying there for about a day. The nurse reviews the trend since admission. Which findings need follow-up? Select all that apply.",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Measure", "Admission", "12 hours", "24 hours"],
            rows: [
              ["Creatine kinase (units/L)", "18 400", "32 600", "41 200"],
              ["Creatinine (mg/dL)", "1.3", "1.9", "2.6"],
              ["Potassium (mEq/L)", "4.9", "5.6", "6.2"],
              ["Sodium (mEq/L)", "139", "140", "138"],
              ["Glucose (mg/dL)", "104", "112", "108"],
              ["Hemoglobin (g/dL)", "13.1", "12.9", "13.0"],
              ["Urine output (mL/hour)", "45", "30", "18"],
            ],
          },
        },
      ],
      rationale:
        "A long lie on the floor can crush muscle and cause rhabdomyolysis. Creatine kinase rises from 18 400 to 41 200 units/L. Myoglobin injures the kidneys, so creatinine rises from 1.3 to 2.6 and urine output falls to 18 mL per hour. Potassium released from muscle reaches 6.2 mEq/L. Sodium, glucose and hemoglobin stay stable.",
      sources: [HINKLE, KDIGO_AKI, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report creatinine in micromol/L only, so the rise reads about 115 to 230 micromol/L. Potassium and sodium keep the same numbers in mmol/L, and glucose stays near 5.8 to 6.2 mmol/L.",
    }),
    kind: "sata",
    options: [
      { text: "Rising creatine kinase", why: "Creatine kinase climbing to 41 200 units/L shows ongoing muscle breakdown." },
      { text: "Stable serum sodium", why: "Sodium stays between 138 and 140 mEq/L and needs no action." },
      { text: "Rising serum creatinine", why: "Creatinine doubling from 1.3 to 2.6 shows kidney injury from myoglobin." },
      { text: "Stable blood glucose", why: "Glucose stays between 104 and 112 and needs no action." },
      { text: "Rising serum potassium", why: "Potassium rising to 6.2 mEq/L from broken-down muscle cells risks dysrhythmias." },
      { text: "Falling urine output", why: "Output falling to 18 mL per hour signals worsening kidney injury." },
      { text: "Stable hemoglobin", why: "Hemoglobin stays steady and shows no bleeding." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s24-23", {
      topic: "Plan of care for a small ureteral stone",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 45-year-old client comes to the emergency department with sudden severe right flank pain that spreads to the groin. The urinalysis shows red blood cells. A CT scan shows a 4 mm stone in the right ureter. Which intervention should the nurse include in the plan of care?",
      rationale:
        "A 4 mm ureteral stone often passes on its own. The nurse strains all urine to catch the stone for analysis. Analysis guides diet and drug choices to prevent new stones. Pain control, adequate fluids and walking support passage. Fluid restriction and withholding analgesia are not part of care.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Limit fluids to 1 L per day", why: "Restricting fluids concentrates the urine. Adequate fluid helps a small stone pass." },
      { text: "Keep the client on bed rest", why: "Walking may help a stone move down the ureter. Bed rest is not needed." },
      { text: "Strain all urine for the stone", why: "Straining the urine catches the stone so it can be analyzed and prevention planned." },
      { text: "Hold pain medicine until the stone passes", why: "Renal colic is severe. Analgesia is a core part of care while the stone passes." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-24", {
      topic: "Fewer stools with fever in severe colitis",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with a severe ulcerative colitis flare has had 10 bloody stools a day for 5 days. Today the client has had 2 stools. The abdomen is distended and tender. Temperature is 38.9°C (102.0°F) and heart rate is 124/minute. Which problem is the priority?",
      rationale:
        "Severe ulcerative colitis can lead to toxic megacolon. A sudden drop in stool count with a distended, tender abdomen is a warning sign, not improvement. Fever of 38.9°C and a heart rate of 124/minute show systemic toxicity. The colon may perforate. The nurse reports at once and keeps the client NPO while an abdominal x-ray is obtained.",
      sources: [UC, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Improving colitis with fewer stools", why: "Fewer stools with a distended, tender abdomen and fever point to a dilated colon, not recovery." },
      { text: "Dehydration from earlier diarrhea", why: "Fluid loss needs care, but it does not explain the distension and tenderness." },
      { text: "Anemia from blood loss", why: "Anemia is likely after bloody stools but is not the most urgent threat here." },
      { text: "Toxic dilation of the colon", why: "Distension, fever, a heart rate of 124/minute and a sudden fall in stools suggest a toxic dilated colon that can perforate." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s24-25", {
      topic: "Setting up seizure precautions",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 30-year-old client with a new seizure disorder is admitted for medication changes. The client had a tonic-clonic seizure 2 days ago. Which measures should the nurse put in place for seizure precautions? Select all that apply.",
      rationale:
        "Seizure precautions aim to protect the airway and prevent injury. Suction and oxygen equipment are set up at the bedside. The bed stays low. IV access allows rescue medication if a seizure lasts too long. Nothing goes in the mouth during a seizure. Restraints cause injury.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Keep a tongue blade at the bedside", why: "Objects placed in the mouth during a seizure can break teeth or block the airway." },
      { text: "Set up suction equipment at the bedside", why: "Suction clears secretions from the airway after a seizure." },
      { text: "Apply wrist restraints at night", why: "Restraints can cause injury during a seizure and are not part of precautions." },
      { text: "Keep the bed in the lowest position", why: "A low bed reduces injury from a fall during a seizure." },
      { text: "Set up oxygen equipment at the bedside", why: "Oxygen supports the client if breathing is impaired after a seizure." },
      { text: "Keep a saline lock in place", why: "IV access allows fast rescue medication if a prolonged seizure occurs." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s24-26", {
      topic: "Signs of infected ascites",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 58-year-old client with cirrhosis and ascites is admitted with increasing confusion. The nurse reviews the admission note. Click to highlight the findings that suggest an infection of the ascitic fluid.",
      rationale:
        "Spontaneous bacterial peritonitis is an infection of ascitic fluid without a surgical source. Fever of 38.2°C, abdominal tenderness and new confusion are common signs. An ascitic neutrophil count of 420/mm3 is above the 250 cells/mm3 threshold. A fluid wave, spider angiomas and palmar erythema reflect known cirrhosis. Antibiotics start promptly.",
      refs: ["Spontaneous bacterial peritonitis is diagnosed when the ascitic fluid neutrophil count is 250 cells/mm3 or more."],
      sources: [ASCITES],
    }),
    kind: "highlight",
    passage:
      "[[Temperature 38.2°C (100.8°F)]]. [[Diffuse abdominal tenderness on palpation]]. [[Abdomen distended with a fluid wave]]. [[Oriented to person only]], was fully oriented 2 days ago. [[Spider angiomas on the chest]]. [[Palmar erythema]]. [[Ascitic fluid neutrophils 420/mm3]].",
    spans: [
      { text: "Temperature 38.2°C (100.8°F)", why: "Fever in a client with ascites raises concern for bacterial peritonitis." },
      { text: "Diffuse abdominal tenderness on palpation", why: "Abdominal tenderness suggests an inflamed peritoneum." },
      { text: "Abdomen distended with a fluid wave", why: "A fluid wave confirms known ascites. It does not point to infection." },
      { text: "Oriented to person only", why: "New confusion can be the first sign of infection, which also triggers hepatic encephalopathy." },
      { text: "Spider angiomas on the chest", why: "Spider angiomas are a chronic sign of cirrhosis." },
      { text: "Palmar erythema", why: "Palmar erythema is a chronic sign of liver disease." },
      { text: "Ascitic fluid neutrophils 420/mm3", why: "A neutrophil count of 420/mm3 in ascitic fluid meets the threshold for bacterial peritonitis." },
    ],
    correct: [0, 1, 3, 6],
  },
  {
    ...meta("rn-s24-27", {
      topic: "First client to see on a surgical unit with biliary disease",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse receives report on 4 clients on a surgical unit. Which client should the nurse assess first?",
      rationale:
        "Jaundice, fever of 39.0°C and new confusion in a client with gallstones suggest acute cholangitis with organ dysfunction. Bile duct infection can progress quickly to sepsis. This client needs assessment first and urgent biliary drainage. Shoulder pain after laparoscopy and moderate cholecystitis pain are expected. A client tolerating fluids is stable.",
      sources: [CHOLANGITIS],
    }),
    kind: "mc",
    options: [
      { text: "Client with gallstones, jaundice, fever of 39.0°C (102.2°F) and confusion", why: "Jaundice, fever and confusion with gallstones suggest severe cholangitis, which can progress to septic shock." },
      { text: "Client after laparoscopic cholecystectomy with right shoulder pain", why: "Shoulder pain after laparoscopy is expected from the gas used to inflate the abdomen." },
      { text: "Client with acute cholecystitis and right upper quadrant pain of 5 of 10", why: "Moderate pain in cholecystitis needs treatment but is not an immediate threat." },
      { text: "Client on day 2 after an ERCP who is tolerating clear fluids", why: "A client tolerating fluids after the procedure is stable." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-28", {
      topic: "Matching findings to endocrine disorders",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews findings for 4 clients with endocrine disorders. Drag the finding that best matches each disorder.",
      rationale:
        "Hypothyroidism slows metabolism and causes cold intolerance. Hyperthyroidism speeds metabolism and causes heat intolerance. Primary adrenal insufficiency raises ACTH, which darkens the skin. Cushing syndrome from excess cortisol causes purple striae. Tetany fits low calcium. Dilute urine in large volumes fits diabetes insipidus.",
      sources: [HINKLE, ADRENAL],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Hypothyroidism", "Hyperthyroidism", "Primary adrenal insufficiency", "Cushing syndrome"],
    tokens: [
      { text: "Heat intolerance", why: "Excess thyroid hormone raises heat production, so heat is poorly tolerated." },
      { text: "Purple striae on the abdomen", why: "Excess cortisol thins the skin and causes wide purple striae." },
      { text: "Cold intolerance", why: "Low thyroid hormone slows metabolism, so cold is poorly tolerated." },
      { text: "Darkened skin creases", why: "High ACTH in primary adrenal failure darkens the skin, especially in creases." },
      { text: "Tetany and muscle cramps", why: "Tetany reflects low calcium, as in hypoparathyroidism, not these four disorders." },
      { text: "Large volumes of dilute urine", why: "Large volumes of dilute urine fit diabetes insipidus." },
    ],
    correct: [2, 0, 3, 1],
  },
  {
    ...meta("rn-s24-29", {
      topic: "Tongue swelling after starting a blood pressure drug",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 56-year-old client started lisinopril 3 weeks ago. The client arrives at the clinic with swelling of the lips and tongue that began 1 hour ago. The voice is muffled. SpO2 is 95% on room air. What should the nurse do first?",
      rationale:
        "Lip and tongue swelling with a muffled voice after starting lisinopril suggests angioedema from an ACE inhibitor. Swelling can block the airway quickly. An SpO2 of 95% does not rule out an airway threat. The nurse calls for emergency help so the airway can be secured. The drug is stopped and not restarted.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Give an oral antihistamine and observe", why: "This swelling is driven by bradykinin. Antihistamines have little effect, and waiting risks airway loss." },
      { text: "Call the emergency response team", why: "Tongue swelling with a muffled voice threatens the airway. Emergency airway support must be ready quickly." },
      { text: "Apply ice packs to the lips", why: "Ice does not reduce airway swelling and delays emergency care." },
      { text: "Hold the next dose and recheck tomorrow", why: "The drug is stopped, but waiting until tomorrow ignores a threat to the airway." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-30", {
      topic: "Meal choices for gluten intolerance",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client newly diagnosed with celiac disease about diet. Which two meal choices show the client understands the teaching? Select two.",
      rationale:
        "Celiac disease needs a strict lifelong gluten-free diet. Gluten is found in wheat, barley and rye. Rice, corn, meat, beans and vegetables are safe. Barley soup, rye toast, wheat pasta and beer-battered fish contain gluten. Label reading helps find hidden gluten.",
      sources: [CELIAC],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Grilled chicken, rice and green beans", why: "Plain meat, rice and vegetables contain no gluten." },
      { text: "Barley soup with crackers", why: "Barley contains gluten, and most crackers are made from wheat." },
      { text: "Rye toast with scrambled eggs", why: "Rye contains gluten." },
      { text: "Wheat pasta with tomato sauce", why: "Wheat pasta contains gluten." },
      { text: "Corn tortillas with beans and salsa", why: "Corn is gluten-free, as are plain beans and salsa." },
      { text: "Beer-battered fish with fries", why: "Beer and most batters contain gluten from barley or wheat." },
    ],
    correct: [0, 4],
  },
];
