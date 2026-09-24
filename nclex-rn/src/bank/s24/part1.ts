import type { Item } from "@/engine/types";
import { ATA_HYPO, HINKLE, ISPD, ITP, KDIGO_GN, LEWIS, MH, SAH, WONG, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s24-01", {
      topic: "Stopped thyroid hormone in an older adult",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 78-year-old client with hypothyroidism stopped taking levothyroxine 3 months ago. The family reports increasing sleepiness over 4 days. Temperature is 34.6°C (94.3°F), heart rate 46/minute, respirations 8/minute and BP 88/52 mmHg. Serum sodium is 124 mEq/L (124 mmol/L). Which condition is the most likely cause of these findings?",
      rationale:
        "The client stopped levothyroxine 3 months ago. A temperature of 34.6°C, a heart rate of 46/minute and respirations of 8/minute show a slowed metabolism. Low BP and a sodium of 124 mEq/L add to the picture. Together these fit myxedema coma, a life-threatening form of hypothyroidism. It needs IV thyroid hormone and airway support.",
      sources: [ATA_HYPO, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Myxedema coma", why: "Untreated hypothyroidism with a low temperature, slow pulse, slow breathing, low BP and low sodium fits this state." },
      { text: "Adrenal crisis", why: "Adrenal crisis causes low BP and low sodium but usually a fast pulse, not a heart rate of 46/minute." },
      { text: "Septic shock", why: "Septic shock usually raises the heart rate. It does not explain the slow pulse after stopping levothyroxine." },
      { text: "Thyroid storm", why: "Thyroid storm causes fever and a fast pulse. This client has a low temperature and a slow pulse." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-02", {
      topic: "Findings with heavy protein loss in a child",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 4-year-old child has had swelling around the eyes for 5 days and now has a swollen abdomen. A urine dipstick shows protein 4+. Which additional findings are consistent with the most likely condition? Select all that apply.",
      rationale:
        "Swelling around the eyes, a swollen abdomen and protein 4+ in a young child point to nephrotic syndrome. Heavy protein loss makes the urine foamy and lowers the serum albumin. Low albumin lets fluid move into the tissues, which raises the weight. The liver responds by making more lipids, so cholesterol rises. Cola-colored urine and marked hypertension fit glomerulonephritis instead.",
      sources: [WONG, KDIGO_GN],
    }),
    kind: "sata",
    options: [
      { text: "Cola-colored urine", why: "Cola-colored urine reflects blood in the urine. It points to glomerulonephritis, not heavy protein loss." },
      { text: "Foamy urine", why: "Large amounts of protein in the urine make it foamy." },
      { text: "Albumin 1.8 g/dL (18 g/L)", why: "Protein lost in the urine lowers serum albumin, which lets fluid leak into the tissues." },
      { text: "BP 150/100 mmHg", why: "Marked hypertension is typical of glomerulonephritis. Nephrotic syndrome in young children usually has a normal or mildly raised BP." },
      { text: "Weight up 2 kg this week", why: "Fluid held in the tissues raises the body weight." },
      { text: "Temperature 39.2°C (102.6°F)", why: "Fever is not part of nephrotic syndrome. It would suggest an infection instead." },
      { text: "Cholesterol 320 mg/dL (8.3 mmol/L)", why: "The liver makes more lipoproteins when albumin is low, so cholesterol rises." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s24-03", {
      topic: "Cloudy fluid during home peritoneal dialysis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on continuous ambulatory peritoneal dialysis calls the clinic. The drained fluid has been cloudy since this morning. The client reports diffuse abdominal pain and a temperature of 38.1°C (100.6°F). What should the nurse do first?",
      rationale:
        "Cloudy drained fluid, abdominal pain and a temperature of 38.1°C in a client on peritoneal dialysis point to peritonitis. The drained fluid is sampled for cell count, Gram stain and culture. Antibiotics then start quickly, usually given into the dialysis fluid. Delay raises the risk of catheter loss and sepsis.",
      sources: [ISPD],
    }),
    kind: "mc",
    options: [
      { text: "Tell the client to add heparin to the next bag", why: "Heparin can keep fibrin from blocking the catheter but does not treat infection. The fluid must be tested first." },
      { text: "Advise the client to skip the next two exchanges", why: "Skipping exchanges leaves infected fluid in place and delays diagnosis and treatment." },
      { text: "Arrange a same-day visit to sample the fluid", why: "Cloudy fluid with abdominal pain signals peritonitis. A sample for cell count and culture comes before antibiotics start." },
      { text: "Advise acetaminophen and a recheck tomorrow", why: "Waiting a day delays antibiotics. Peritonitis can progress to sepsis and loss of the catheter." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-04", {
      topic: "Bleeding risk with a platelet count of 8 000",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse cares for a 32-year-old client with immune thrombocytopenia. The platelet count this morning is 8 000/mm3. Which finding should the nurse report first?",
      rationale:
        "A platelet count of 8 000/mm3 carries a risk of serious bleeding. Skin petechiae, bruises and gum oozing are expected at this level. A new headache with blurred vision may mean bleeding inside the skull. That is the most dangerous bleed in severe thrombocytopenia. It needs urgent report and a neurologic check.",
      sources: [ITP, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as x 10^9/L only, so this count reads 8 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as normal.",
    }),
    kind: "mc",
    options: [
      { text: "Petechiae on both lower legs", why: "Petechiae are expected with a platelet count this low and do not signal organ bleeding." },
      { text: "Bruises on the upper arms", why: "Bruising is expected with low platelets. It needs monitoring but does not threaten life." },
      { text: "Oozing gums after brushing teeth", why: "Gum oozing is a mucosal bleed that needs care but does not threaten life right away." },
      { text: "New headache with blurred vision", why: "A new headache with vision change can signal bleeding in the brain, the most serious risk." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s24-05", {
      topic: "New deficits after aneurysm coiling",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 52-year-old client is on day 6 after coiling of a ruptured cerebral aneurysm. The nurse reviews the latest note. Click to highlight the findings that need immediate follow-up.",
      rationale:
        "The client is on day 6 after coiling of the ruptured aneurysm, inside the usual window for vasospasm. New drowsiness, a new arm drift and word-finding trouble are new neurologic deficits. They suggest delayed cerebral ischemia and need urgent report. A stable mild headache, scheduled nimodipine and a dry access site are expected.",
      refs: ["Delayed cerebral ischemia from vasospasm is most common between days 3 and 14 after aneurysmal subarachnoid hemorrhage."],
      sources: [SAH],
    }),
    kind: "highlight",
    passage:
      "[[Alert and oriented at 0800]]. Now [[drowsy and oriented to person only]]. [[New drift of the right arm]]. [[Speech slow with word-finding pauses]]. [[Headache 3 of 10, unchanged]]. [[BP 142/84 mmHg]]. [[Taking nimodipine on schedule]]. [[Groin access site dry]].",
    spans: [
      { text: "Alert and oriented at 0800", why: "This is the earlier baseline. It sets the comparison for the new change." },
      { text: "drowsy and oriented to person only", why: "A fall in consciousness from the 0800 baseline can signal delayed cerebral ischemia from vasospasm." },
      { text: "New drift of the right arm", why: "A new motor deficit is a focal sign of ischemia from vasospasm." },
      { text: "Speech slow with word-finding pauses", why: "New trouble finding words points to ischemia in the language areas." },
      { text: "Headache 3 of 10, unchanged", why: "A stable mild headache is expected after aneurysm rupture." },
      { text: "BP 142/84 mmHg", why: "This BP is not a new problem on its own and needs no separate follow-up." },
      { text: "Taking nimodipine on schedule", why: "Scheduled nimodipine is the expected therapy to prevent delayed cerebral ischemia." },
      { text: "Groin access site dry", why: "A dry access site after coiling is expected." },
    ],
    correct: [1, 2, 3],
  },
  {
    ...meta("rn-s24-06", {
      topic: "Rigidity and rising carbon dioxide under anesthesia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "During general anesthesia with sevoflurane and succinylcholine, a client develops jaw rigidity. End-tidal carbon dioxide rises from 38 to 72 mmHg despite increased ventilation. Heart rate is 138/minute and temperature is 39.4°C (102.9°F). The anesthesia provider stops the sevoflurane. What should the circulating nurse do next?",
      rationale:
        "Jaw rigidity after succinylcholine, end-tidal carbon dioxide rising from 38 to 72 mmHg, a heart rate of 138/minute and a temperature of 39.4°C fit malignant hyperthermia. After the trigger is stopped, the team gives dantrolene as fast as possible. The circulating nurse brings the drug and helps mix it. Cooling, labs and other care follow.",
      sources: [MH, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Draw a serum creatine kinase level", why: "Creatine kinase helps track muscle breakdown later. Drawing it first delays the drug that stops the crisis." },
      { text: "Bring the dantrolene to the room", why: "Dantrolene stops the uncontrolled calcium release in muscle. It is the specific treatment and must be given fast." },
      { text: "Give acetaminophen for the fever", why: "The heat comes from muscle metabolism, not a raised set point in the brain. Acetaminophen does not help." },
      { text: "Pack ice in the groin and axillae", why: "Surface cooling helps but does not stop the muscle process. Dantrolene comes first." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-07", {
      topic: "Spreading pain in diverticulitis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client is admitted with left lower quadrant pain from diverticulitis. Twelve hours later the pain has spread across the whole abdomen. The abdomen is rigid and bowel sounds are absent. Heart rate is 118/minute and temperature is 38.9°C (102.0°F). Complete the sentence by dragging the options to the blanks.",
      rationale:
        "Diverticulitis can perforate and spill bowel contents into the peritoneal cavity. This client's pain spread from the left lower quadrant to the whole abdomen. The abdomen is now rigid and bowel sounds are absent. A heart rate of 118/minute and a temperature of 38.9°C show a systemic response. The nurse keeps the client NPO and reports the change at once.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "triad",
    template: "The client is most likely developing {0} as evidenced by {1} and {2}.",
    targets: ["Condition", "First finding", "Second finding"],
    tokens: [
      { text: "peritonitis from a perforation", why: "Spreading pain, a rigid abdomen, absent bowel sounds and fever fit a perforated diverticulum with peritonitis." },
      { text: "a small bowel obstruction", why: "Obstruction causes distension and vomiting with high-pitched bowel sounds early. A board-like abdomen points to peritonitis." },
      { text: "a lower gastrointestinal bleed", why: "The stem gives no blood in the stool and no fall in BP to suggest bleeding." },
      { text: "a rigid abdomen", why: "A rigid abdomen shows involuntary guarding from an inflamed peritoneum." },
      { text: "pain spreading across the abdomen", why: "Pain that moves from one quadrant to the whole abdomen suggests leakage into the peritoneal cavity." },
      { text: "left lower quadrant pain on admission", why: "Left lower quadrant pain is expected with diverticulitis. It does not show a new complication." },
      { text: "a history of diverticulitis", why: "The history explains the admission but does not show the new complication." },
    ],
    correct: [0, 3, 4],
  },
  {
    ...meta("rn-s24-08", {
      topic: "Teaching about vitamin B12 deficiency",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client newly diagnosed with pernicious anemia. The client reports numbness in both feet. Which statement by the client indicates a need for further teaching?",
      rationale:
        "Pernicious anemia results from a lack of intrinsic factor. Without it, the gut cannot absorb vitamin B12 from food. More meat and eggs will not correct the deficiency. Lifelong B12 replacement is needed. Numb feet reflect nerve damage from the deficiency, so daily foot checks protect the client.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will need vitamin B12 shots for the rest of my life.\"", why: "Without intrinsic factor, B12 from food is not absorbed. Replacement continues for life." },
      { text: "\"I should check my feet since I may not feel an injury.\"", why: "Reduced sensation from nerve damage raises the risk of unnoticed foot injury, so foot checks are needed." },
      { text: "\"Eating more meat and eggs will cure this problem.\"", why: "The problem is a lack of intrinsic factor, so diet alone cannot correct it. This statement needs more teaching." },
      { text: "\"I will get my blood count checked as planned.\"", why: "Follow-up blood counts show the response to B12 replacement." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-09", {
      topic: "Protecting a new dialysis fistula",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with kidney failure had a left forearm arteriovenous fistula created 2 weeks ago. Which instructions should the nurse include in discharge teaching? Select all that apply.",
      rationale:
        "A new fistula needs protection and daily checks. Feeling the thrill each day confirms flow. Anything that squeezes the arm can cause clotting. That includes sleeping on it, BP cuffs, tight items and heavy loads. Signs of infection need prompt report. Squeezing exercises help the vein enlarge before dialysis use.",
      sources: [HINKLE, LEWIS],
    }),
    kind: "sata",
    options: [
      { text: "Check for the thrill each day", why: "Feeling the thrill daily confirms blood is flowing through the fistula." },
      { text: "Wear a snug watch on the left wrist", why: "Tight items on the access arm can slow flow and lead to clotting." },
      { text: "Allow BP checks on the left arm", why: "A BP cuff on the access arm compresses the fistula and can cause clotting." },
      { text: "Avoid sleeping on the left arm", why: "Lying on the arm compresses the fistula and slows flow." },
      { text: "Carry heavy bags with the left arm", why: "Heavy loads on the access arm can compress and damage the fistula." },
      { text: "Report redness or drainage at the site", why: "Redness or drainage suggests infection, which can threaten the access." },
      { text: "Squeeze a soft ball as instructed", why: "Hand squeezing exercises help the new fistula mature for use." },
    ],
    correct: [0, 3, 5, 6],
  },
  {
    ...meta("rn-s24-10", {
      topic: "Overnight glucose pattern on bedtime insulin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client with type 1 diabetes takes NPH insulin at bedtime. The client reports night sweats and morning headaches. Fingerstick glucose was 52 mg/dL (2.9 mmol/L) at 0300 and 248 mg/dL (13.8 mmol/L) at 0700. Which explanation fits this pattern?",
      rationale:
        "A glucose of 52 mg/dL at 0300 with night sweats shows nighttime hypoglycemia. Counterregulatory hormones then push the glucose up to 248 mg/dL by 0700. This rebound pattern is called the Somogyi effect. The usual fix is a smaller bedtime NPH dose or a bedtime snack. The dawn phenomenon has no low reading overnight.",
      sources: [HINKLE, LEWIS],
    }),
    kind: "mc",
    options: [
      { text: "Dawn phenomenon", why: "The dawn phenomenon raises morning glucose without a low reading at 0300." },
      { text: "Too little bedtime insulin", why: "Too little insulin would give a high reading at 0300, not 52 mg/dL." },
      { text: "A large bedtime snack", why: "A large snack would raise the overnight glucose, not drop it to 52 mg/dL at 0300." },
      { text: "Somogyi effect", why: "A low at 0300 followed by a high at 0700 fits rebound hyperglycemia after nighttime hypoglycemia." },
    ],
    correct: 3,
  },
];
