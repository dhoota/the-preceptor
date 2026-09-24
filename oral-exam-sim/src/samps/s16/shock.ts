// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  ssc: { id: "ssc", citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021." },
  sscPeds: { id: "ssc-peds", citation: "Weiss SL, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Pediatr Crit Care Med. 2020." },
  smart: { id: "smart", citation: "Semler MW, et al. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018." },
  trekkGe: { id: "trekk-ge", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Gastroenteritis. Version 5.0. 2025.", url: "https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis" },
  cds: { id: "cds", citation: "Friedman JN, et al. Development of a clinical dehydration scale for use in children between 1 and 36 months of age. J Pediatr. 2004." },
  ondan: { id: "ondan", citation: "Freedman SB, et al. Oral ondansetron for gastroenteritis in a pediatric emergency department. N Engl J Med. 2006." },
  cpsOrt: { id: "cps-ort", citation: "Leung A, Prince T. Canadian Paediatric Society, Nutrition and Gastroenterology Committee. Oral rehydration therapy and early refeeding in the management of childhood gastroenteritis. Paediatr Child Health. 2006." },
  atls: { id: "atls", citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018." },
  crash2: { id: "crash2", citation: "CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2). Lancet. 2010." },
  proppr: { id: "proppr", citation: "Holcomb JB, et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma. The PROPPR randomized clinical trial. JAMA. 2015." },
  sogcTrauma: { id: "sogc-trauma", citation: "Jain V, et al. SOGC clinical practice guideline. Guidelines for the management of a pregnant trauma patient. J Obstet Gynaecol Can. 2015." },
  sci: { id: "sci", citation: "Walters BC, et al. Guidelines for the management of acute cervical spine and spinal cord injuries. 2013 update. Neurosurgery. 2013." },
  aoSpine: { id: "ao-spine", citation: "Kwon BK, et al. A clinical practice guideline for the management of patients with acute spinal cord injury. Recommendations on hemodynamic management. AO Spine and Praxis. Global Spine J. 2024." },
  wao: { id: "wao", citation: "Cardona V, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020." },
  aha: { id: "aha-cs", citation: "van Diepen S, et al. Contemporary management of cardiogenic shock. A scientific statement from the American Heart Association. Circulation. 2017." },
  soap2: { id: "soap2", citation: "De Backer D, et al. Comparison of dopamine and norepinephrine in the treatment of shock. N Engl J Med. 2010." },
  escPe: { id: "esc-pe", citation: "Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020." },
  rush: { id: "rush", citation: "Perera P, et al. The RUSH exam. Rapid ultrasound in shock in the evaluation of the critically ill. Emerg Med Clin North Am. 2010." },
  adrenal: { id: "adrenal", citation: "Bornstein SR, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2016." },
  ccb: { id: "ccb", citation: "St-Onge M, et al. Experts consensus recommendations for the management of calcium channel blocker poisoning in adults. Crit Care Med. 2017." },
  barkun: { id: "barkun", citation: "Barkun AN, et al. Management of nonvariceal upper gastrointestinal bleeding. Guideline recommendations from the International Consensus Group. Ann Intern Med. 2019." },
  villanueva: { id: "villanueva", citation: "Villanueva C, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013." },
  tcDoac: { id: "tc-doac", citation: "Thrombosis Canada. Clinical guide. DOACs. Management of bleeding. 2024.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf" },
  hyperNa: { id: "hyper-na", citation: "Adrogue HJ, Madias NE. Hypernatremia. N Engl J Med. 2000." },
  rosen: { id: "rosen", citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter on shock." },
} satisfies Record<string, Source>;

/** Oral rehydration plan: a volume and a 4 hour time frame are both required. */
const MATCH_ORT = ["50 ml/kg 4 hour", "50 ml/kg four hour", "50 ml/kg 4h", "50 ml/kg 4 hr", "50 ml/kg 4hr", "60 ml/kg 4 hour", "60 ml/kg four hour", "60 ml/kg 4h", "60 ml/kg 4 hr", "60 ml/kg 4hr", "75 ml/kg 4 hour", "75 ml/kg four hour", "75 ml/kg 4h", "75 ml/kg 4 hr", "75 ml/kg 4hr", "100 ml/kg 4 hour", "100 ml/kg four hour", "100 ml/kg 4h", "100 ml/kg 4 hr", "100 ml/kg 4hr", "500 ml 4 hour", "500 ml four hour", "500 ml 4h", "500 ml 4 hr", "500 ml 4hr", "600 ml 4 hour", "600 ml four hour", "600 ml 4h", "600 ml 4 hr", "600 ml 4hr", "750 ml 4 hour", "750 ml four hour", "750 ml 4h", "750 ml 4 hr", "750 ml 4hr", "1000 ml 4 hour", "1000 ml four hour", "1000 ml 4h", "1000 ml 4 hr", "1000 ml 4hr", "1 l 4 hour", "1 l four hour", "1 l 4h", "1 l 4 hr", "1 l 4hr"];

export const SHOCK_SAMPS: Samp[] = [
  /* 01 Paediatric gastroenteritis with some dehydration ---------------- */
  {
    id: "shock-01",
    topic: "shock",
    title: "Toddler with vomiting and diarrhea",
    stem:
      "A 14-month-old boy has had vomiting and watery diarrhea for 2 days. He vomited 6 times today and has had fewer wet diapers. He was 10.6 kg at a clinic visit last week. He is fussy but consolable. His eyes are slightly sunken, mucous membranes are sticky and tears are decreased. Capillary refill is 2 seconds. Glucose 4.2 mmol/L.",
    vitals: { temperature: "37.9°C", pulse: "140/minute", resp: "30/minute", bp: "94/58 mmHg", weight: "10.0 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What are the items of the Clinical Dehydration Scale for young children?",
        accept: [
          { id: "appear", text: "General appearance", match: ["appearance", "general appearance", "behaviour", "behavior"] },
          { id: "eyes", text: "Eyes, whether sunken", match: ["eye", "sunken"] },
          { id: "mm", text: "Mucous membranes", match: ["mucous membrane", "tongue", "mucosa"] },
          { id: "tears", text: "Tears", match: ["tear"] },
        ],
        unacceptable: [
          { text: "Capillary refill (not part of this scale)", match: ["capillary refill"] },
          { text: "Heart rate (not part of this scale)", match: ["heart rate"] },
        ],
        explanation:
          "The Clinical Dehydration Scale scores appearance, eyes, mucous membranes and tears from 0 to 2 each. A score of 0 means no dehydration. 1 to 4 means some dehydration. 5 to 8 means moderate to severe. It was validated in children 1 to 36 months.",
        keyFeature: { topic: "shock", n: 2 },
        source: "cds",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best estimate of his fluid deficit?",
        options: [
          "60 mL",
          "300 mL",
          "600 mL",
          "1 200 mL",
          "1 500 mL",
        ],
        correct: 2,
        explanation:
          "A recent weight is the most accurate measure. He lost 0.6 kg, which is about 600 mL and 6 percent of body weight. This fits some dehydration on the scale. Clinical signs alone often over or under estimate the deficit.",
        keyFeature: { topic: "shock", n: 2 },
        source: "cds",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What medication, with its dose and route, would help oral rehydration succeed?",
        accept: [
          { id: "ond", text: "Ondansetron 0.15 mg/kg orally as a single dose, so 2 mg (oral dissolving tablet)", match: ["ondansetron 2 mg", "ondansetron 2mg", "ondansetron 0.15", "zofran 2 mg", "zofran 2mg", "ondansetron 1.5"] },
        ],
        unacceptable: [
          { text: "Loperamide", match: ["loperamide", "imodium"], dangerous: true },
          { text: "Dimenhydrinate or metoclopramide", match: ["dimenhydrinate", "gravol", "metoclopramide", "maxeran"] },
        ],
        explanation:
          "A single dose of oral ondansetron reduces vomiting and the need for IV fluids and admission. Weight bands are 2 mg for 8 to 15 kg, 4 mg for 15 to 30 kg and 8 mg above 30 kg. Loperamide is contraindicated in young children because of ileus and toxicity. Dimenhydrinate is not effective and sedates.",
        keyFeature: { topic: "shock", n: 8 },
        source: "ondan",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        prompt: "What is the oral rehydration plan for his deficit, including the volume and time frame?",
        accept: [
          { id: "ort", text: "Oral rehydration solution 50 to 100 mL/kg over 4 hours, so 500 to 1000 mL, given in small frequent amounts", match: MATCH_ORT },
        ],
        unacceptable: [
          { text: "Juice, pop or sports drinks", match: ["juice", "pop", "gatorade", "sports drink"] },
          { text: "Stop feeding or dilute formula", match: ["stop feeding", "dilute", "npo"] },
        ],
        explanation:
          "Replace the deficit with oral rehydration solution 50 to 100 mL/kg over 4 hours, 5 mL every 1 to 2 minutes by syringe or spoon. Replace ongoing losses too. Resume his normal diet early. Sugary drinks worsen diarrhea.",
        keyFeature: { topic: "shock", n: 2 },
        source: "cps-ort",
      },
      {
        id: "q5",
        kind: "short",
        required: 3,
        prompt: "What signs would tell you he is progressing to shock?",
        accept: [
          { id: "hr", text: "Rising tachycardia", match: ["tachycardia", "heart rate", "tachycardic"] },
          { id: "crt", text: "Capillary refill over 3 seconds", match: ["capillary refill", "crt", "cap refill"] },
          { id: "mental", text: "Lethargy or decreased responsiveness", match: ["lethargy", "lethargic", "decreased responsiveness", "mental status", "drowsy", "listless", "irritable"] },
          { id: "cool", text: "Cool or mottled extremities", match: ["cool", "cold", "mottled", "mottling"] },
          { id: "pulse", text: "Weak or thready peripheral pulses", match: ["pulse"] },
          { id: "uo", text: "No urine output", match: ["urine", "anuria", "diaper", "no urine", "no wet", "oliguria", "no void"] },
          { id: "rr", text: "Tachypnea or deep breathing from acidosis", match: ["tachypnea", "deep breathing", "kussmaul", "respiratory rate"] },
          { id: "bp", text: "Hypotension, a late sign", match: ["hypotension", "low blood pressure"] },
        ],
        explanation:
          "Children maintain blood pressure until late through tachycardia and vasoconstriction. Rising heart rate, delayed capillary refill, mottling and altered mental status are the early markers. Hypotension signals impending arrest.",
        keyFeature: { topic: "shock", n: 1 },
        source: "trekk-ge",
      },
    ],
    sources: [S.cds, S.ondan, S.cpsOrt, S.trekkGe],
    ...META,
  },

  /* 02 Infant hypovolemic shock ---------------------------------------- */
  {
    id: "shock-02",
    topic: "shock",
    title: "Sleepy baby with diarrhea",
    stem:
      "A 4-month-old girl has had profuse watery diarrhea for 3 days and has refused feeds today. She has had one wet diaper in 18 hours. She is lethargic and barely responds to an IV attempt. Her O2 sat is 98%. Her hands and feet are cool and mottled. Capillary refill is 5 seconds. The anterior fontanelle is sunken.",
    vitals: { temperature: "37.2°C", pulse: "196/minute", resp: "52/minute", bp: "72/40 mmHg", weight: "6.0 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What findings show she is in shock despite a measurable blood pressure?",
        accept: [
          { id: "hr", text: "Marked tachycardia of 196", match: ["tachycardia", "heart rate", "196", "hr"] },
          { id: "crt", text: "Capillary refill of 5 seconds", match: ["capillary refill", "cap refill", "crt"] },
          { id: "mottle", text: "Cool mottled extremities", match: ["mottled", "mottling", "cool", "cold"] },
          { id: "mental", text: "Lethargy with poor response to pain", match: ["lethargy", "lethargic", "mental status", "responsive", "loc"] },
          { id: "uo", text: "Oliguria", match: ["oliguria", "urine", "diaper"] },
          { id: "rr", text: "Tachypnea", match: ["tachypnea", "respiratory rate"] },
        ],
        explanation:
          "Shock is inadequate tissue perfusion, not hypotension. In infants, tachycardia, delayed capillary refill, mottling, oliguria and altered mental status appear before blood pressure falls. Her systolic of 72 is also at the lower limit for age.",
        keyFeature: { topic: "shock", n: 1 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "Two IV attempts fail. What is your next step for vascular access?",
        accept: [
          { id: "io", text: "Intraosseous needle in the proximal tibia", match: ["intraosseous", "io", "tibia"] },
        ],
        unacceptable: [
          { text: "Central line or cutdown first", match: ["central line", "cutdown", "cut down"] },
          { text: "Nasogastric rehydration in shock", match: ["nasogastric", "ng tube"] },
        ],
        explanation:
          "In a child in shock, go to IO access after brief failed peripheral attempts, usually 90 seconds or two tries. The proximal tibia is the usual site in infants. Enteral rehydration is for dehydration without shock.",
        keyFeature: { topic: "shock", n: 3 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial fluid for this infant?",
        options: [
          "5% albumin 30 mL as a rapid bolus",
          "Dextrose 5% in water 120 mL as a rapid bolus",
          "Normal saline 600 mL infused over 1 hour",
          "Normal saline or Ringer's lactate 120 mL rapid bolus",
          "Two thirds dextrose one third saline at maintenance",
        ],
        correct: 3,
        explanation:
          "Give 20 mL/kg of isotonic crystalloid as a rapid bolus, then reassess. For 6 kg this is 120 mL. Repeat if perfusion does not improve. Hypotonic or dextrose only fluids stay poorly in the intravascular space and risk hyponatremia. Colloid offers no advantage.",
        keyFeature: { topic: "shock", n: 3 },
        source: "atls",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        update: "After two boluses her HR is 162 and capillary refill is 3 seconds. Point of care glucose is 2.4 mmol/L.",
        prompt: "What is the treatment for her glucose, including the dose?",
        accept: [
          { id: "d10", text: "D10W 5 mL/kg IV or IO, so 30 mL", match: ["d10 30", "d10w 30", "d10 5 ml/kg", "d10w 5 ml/kg", "d10 5ml/kg", "d10w 5ml/kg", "d10w 2 ml/kg", "d10w 12", "d10w 20", "d10 2 ml/kg", "dextrose 10% 30", "dextrose 10% 5 ml/kg", "d10 12", "d10 20", "d10 3 ml/kg", "dextrose 0.5 g/kg"] },
        ],
        unacceptable: [{ text: "D50W in an infant", match: ["d50", "50% dextrose"], dangerous: true }],
        explanation:
          "Infants have little glycogen and often become hypoglycemic with gastroenteritis. Give 0.2 to 0.5 g/kg dextrose as D10W 2 to 5 mL/kg. D50W is sclerosing and too concentrated for infants. Recheck glucose and add dextrose to maintenance fluids.",
        keyFeature: { topic: "shock", n: 8 },
        source: "trekk-ge",
      },
      {
        id: "q5",
        kind: "short",
        required: 1,
        prompt: "What are her estimated percentage dehydration and total fluid deficit in mL?",
        accept: [
          { id: "deficit", text: "About 10 to 15 percent, so 600 to 900 mL", match: ["600", "900", "750", "15%", "10%", "700", "800"] },
        ],
        unacceptable: [{ text: "5 percent or less", match: ["5%", "300", "3%"] }],
        explanation:
          "Shock from dehydration in an infant implies severe dehydration of 10 to 15 percent. Infants carry more body water, so the same signs mean a larger percentage deficit than in older children and adults, where severe dehydration is about 9 percent. Subtract the boluses given when planning the rest of the replacement.",
        keyFeature: { topic: "shock", n: 2 },
        source: "trekk-ge",
      },
    ],
    sources: [S.atls, S.trekkGe],
    ...META,
  },

  /* 03 Older adult with urosepsis on beta blocker --------------------- */
  {
    id: "shock-03",
    topic: "shock",
    alsoTopics: ["infectious-diseases"],
    title: "Nursing home resident who is not herself",
    stem:
      "An 84-year-old woman is sent from her long term care home because she is less talkative and ate nothing today. She has hypertension and dementia and takes metoprolol 50 mg twice daily. Her usual BP is 150/80 mmHg. She is drowsy but rousable. Her skin is cool. Urine is cloudy. Lactate 4.8 mmol/L. WBC 17.2 x 10^9/L. Creatinine 168 umol/L (baseline 80).",
    vitals: { temperature: "36.1°C", pulse: "82/minute", resp: "24/minute", bp: "102/58 mmHg", o2sat: "94% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What findings suggest she is in shock despite her vital signs?",
        accept: [
          { id: "lactate", text: "Lactate of 4.8 mmol/L", match: ["lactate"] },
          { id: "bp", text: "Blood pressure about 50 mmHg below her baseline", match: ["baseline", "relative hypotension", "blood pressure", "bp", "usual"] },
          { id: "mental", text: "Altered mental status", match: ["mental status", "drowsy", "confusion", "altered", "delirium", "less talkative"] },
          { id: "aki", text: "Acute kidney injury", match: ["kidney", "creatinine", "aki", "renal"] },
          { id: "rr", text: "Tachypnea", match: ["tachypnea", "respiratory rate", "rr"] },
          { id: "skin", text: "Cool skin", match: ["cool", "cold"] },
          { id: "bb", text: "Beta blocker masking tachycardia", match: ["beta blocker", "metoprolol", "masking"] },
          { id: "temp", text: "Hypothermia or absent fever", match: ["hypothermia", "no fever", "afebrile", "temperature"] },
        ],
        explanation:
          "Older adults often lack fever and tachycardia. Beta blockers blunt the heart rate response. A blood pressure that is normal for others may be relative hypotension for her. Lactate, confusion, tachypnea and acute kidney injury show hypoperfusion.",
        keyFeature: { topic: "shock", n: 1 },
        source: "ssc",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What actions should be completed within the first hour?",
        accept: [
          { id: "cultures", text: "Blood cultures before antibiotics", match: ["blood culture", "culture"] },
          { id: "abx", text: "Broad spectrum IV antibiotics within 1 hour", match: ["antibiotic", "piperacillin", "ceftriaxone", "pip tazo", "meropenem", "tazocin"] },
          { id: "fluid", text: "Balanced crystalloid 30 mL/kg, about 1.8 L, in boluses with reassessment", match: ["30 ml/kg", "crystalloid", "fluid bolus", "ringer", "normal saline", "plasma lyte", "1.8 l", "fluid"] },
          { id: "lactate", text: "Repeat lactate within 2 to 4 hours", match: ["repeat lactate", "lactate"] },
          { id: "pressor", text: "Norepinephrine if MAP stays under 65 mmHg", match: ["norepinephrine", "levophed", "vasopressor", "pressor"] },
          { id: "urine", text: "Urine culture", match: ["urine culture", "urinalysis"] },
        ],
        explanation:
          "Septic shock is an emergency. Antibiotics within 1 hour, cultures first if they do not delay treatment, and crystalloid resuscitation are the core. Surviving Sepsis suggests 30 mL/kg within 3 hours, given in boluses with frequent reassessment in older patients with heart disease.",
        keyFeature: { topic: "shock", n: 4 },
        source: "ssc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following fluids is most appropriate for her resuscitation?",
        options: [
          "25% albumin",
          "Hydroxyethyl starch",
          "Packed red blood cells",
          "Ringer's lactate",
          "0.45% saline",
        ],
        correct: 3,
        explanation:
          "Balanced crystalloids such as Ringer's lactate are suggested over saline in sepsis. They cause less hyperchloremic acidosis and in some trials fewer kidney events. Starches increase kidney injury and death and must not be used. Albumin is only considered after large crystalloid volumes.",
        keyFeature: { topic: "shock", n: 3 },
        source: "smart",
      },
      {
        id: "q4",
        kind: "menu",
        select: 1,
        update: "After 1.8 L of fluid her MAP is 58 mmHg. Crackles are now heard at both bases. She only has two peripheral IVs.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Another 2 L of crystalloid",
          "Delay any vasopressor until a central line is placed",
          "Dopamine by peripheral IV, titrated to MAP 65 mmHg",
          "Hydrocortisone as the sole next step",
          "Norepinephrine by peripheral IV, titrated to MAP 65 mmHg",
          "Phenylephrine by peripheral IV, titrated to MAP 65 mmHg",
          "Vasopressin by peripheral IV, titrated to MAP 65 mmHg",
        ],
        correct: [4],
        explanation:
          "Norepinephrine is the first line vasopressor in septic shock. It can start through a good peripheral IV in a proximal vein while central access is arranged. Signs of fluid overload mean more volume will cause harm. Dopamine causes more arrhythmias.",
        keyFeature: { topic: "shock", n: 7 },
        source: "ssc",
      },
      {
        id: "q5",
        kind: "short",
        required: 3,
        prompt: "What clinical or bedside measures would you reassess to guide further resuscitation?",
        accept: [
          { id: "map", text: "MAP", match: ["map", "mean arterial", "blood pressure"] },
          { id: "lactate", text: "Lactate clearance", match: ["lactate"] },
          { id: "crt", text: "Capillary refill time", match: ["capillary refill", "crt", "cap refill"] },
          { id: "uo", text: "Urine output by catheter, aiming for 0.5 mL/kg/h", match: ["urine output", "urine", "foley", "catheter"] },
          { id: "mental", text: "Mental status", match: ["mental status", "level of consciousness", "loc", "gcs"] },
          { id: "pocus", text: "Bedside ultrasound of the heart, lungs and IVC", match: ["ultrasound", "pocus", "ivc", "echo", "b line"] },
          { id: "plr", text: "Passive leg raise or other dynamic fluid responsiveness test", match: ["passive leg raise", "plr", "fluid responsiveness", "pulse pressure variation"] },
          { id: "lungs", text: "Lung exam and oxygen requirement", match: ["crackle", "oxygen requirement", "spo2", "lung exam"] },
        ],
        unacceptable: [{ text: "Central venous pressure as the only target", match: ["cvp", "central venous pressure"] }],
        explanation:
          "Resuscitation should follow the patient, not a fixed volume. Capillary refill, lactate, urine output, mental status and dynamic measures help decide between more fluid and more vasopressor. Static CVP targets are no longer recommended.",
        keyFeature: { topic: "shock", n: 4 },
        source: "ssc",
      },
    ],
    sources: [S.ssc, S.smart],
    ...META,
  },

  /* 04 Pregnant trauma ------------------------------------------------- */
  {
    id: "shock-04",
    topic: "shock",
    alsoTopics: ["multiple-trauma"],
    title: "Pregnant driver after a collision",
    stem:
      "A 31-year-old woman at 32 weeks gestation was the belted driver in a highway collision at 80 km/h. She is on a spine board. She complains of abdominal pain. Her O2 sat is 97%. Her abdomen is tender with a firm uterus. Fetal heart rate by Doppler is 100/minute. Her blood group from prenatal records is O RhD negative.",
    vitals: { temperature: "36.4°C", pulse: "108/minute", resp: "22/minute", bp: "104/64 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "Why may her vital signs underestimate her blood loss?",
        accept: [
          { id: "volume", text: "Blood volume rises about 40 to 50 percent in pregnancy, so she can lose a third before hypotension", match: ["blood volume", "volume expanded", "hypervolemia", "plasma volume", "30%", "35%"] },
          { id: "hr", text: "Resting heart rate is normally higher, so tachycardia is dismissed", match: ["heart rate", "tachycardia"] },
          { id: "bp", text: "Blood pressure is normally lower in pregnancy", match: ["blood pressure", "bp"] },
          { id: "shunt", text: "Blood is shunted from the uterus to maintain maternal pressure, so fetal distress is an early sign", match: ["fetal", "uterine", "placenta", "shunt"] },
          { id: "ivc", text: "Supine aortocaval compression lowers pressure unpredictably", match: ["aortocaval", "ivc", "supine", "compression"] },
        ],
        explanation:
          "Pregnant patients can lose 30 to 35 percent of their blood volume before hypotension appears. The uterus is sacrificed first. Fetal bradycardia is often the earliest sign of maternal shock. Treat as hemorrhagic shock until proven otherwise.",
        keyFeature: { topic: "shock", n: 1 },
        source: "sogc-trauma",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What are the immediate interventions?",
        accept: [
          { id: "tilt", text: "Manual left uterine displacement or tilt the board 15 to 30 degrees left", match: ["left lateral", "uterine displacement", "tilt", "wedge", "displace uterus"] },
          { id: "iv", text: "Two large bore IVs", match: ["large bore", "two iv", "2 iv", "access"] },
          { id: "blood", text: "Transfuse uncrossmatched O RhD negative blood", match: ["o negative", "o neg", "blood", "prbc", "transfuse", "transfusion"] },
          { id: "o2", text: "High flow oxygen", match: ["oxygen", "o2"] },
          { id: "ob", text: "Urgent obstetric consultation and continuous fetal monitoring", match: ["obstetric", "obstetrician", "fetal monitor", "ctg", "obs"] },
          { id: "fast", text: "eFAST", match: ["fast", "efast", "ultrasound"] },
          { id: "txa", text: "Tranexamic acid 1 g IV", match: ["tranexamic", "txa"] },
        ],
        explanation:
          "Relieving aortocaval compression can restore up to 30 percent of cardiac output. Her fetal bradycardia and firm tender uterus suggest placental abruption with maternal hemorrhage. Early blood, obstetrics and fetal monitoring are needed. A viable fetus in distress may need emergency cesarean delivery.",
        keyFeature: { topic: "multiple-trauma", n: 4 },
        source: "sogc-trauma",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following products is most appropriate for her initial resuscitation?",
        options: [
          "5% albumin before any blood",
          "2 L normal saline before any blood",
          "Type specific blood after the crossmatch is complete",
          "Uncrossmatched O RhD negative red cells",
          "Uncrossmatched O RhD positive red cells",
        ],
        correct: 3,
        explanation:
          "Hemorrhagic shock needs blood early rather than large crystalloid volumes. Women of childbearing potential should get O RhD negative red cells to avoid alloimmunization and later hemolytic disease of the fetus. Waiting for crossmatched blood delays care.",
        keyFeature: { topic: "shock", n: 3 },
        source: "sogc-trauma",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What pregnancy specific tests or treatments relate to her Rh status?",
        accept: [
          { id: "rhig", text: "Rh immune globulin 300 mcg IM or IV within 72 hours", match: ["rh immune globulin", "rhig", "winrho", "anti d", "rhogam", "immune globulin"] },
          { id: "kb", text: "Kleihauer Betke or flow cytometry to quantify fetomaternal hemorrhage", match: ["kleihauer", "kb", "fetomaternal", "flow cytometry"] },
          { id: "type", text: "Type and screen with antibody screen", match: ["antibody screen", "type and screen", "group and screen"] },
        ],
        explanation:
          "RhD negative pregnant trauma patients should receive Rh immune globulin. A Kleihauer Betke test estimates the fetomaternal hemorrhage and whether extra doses are needed. One 300 mcg dose covers about 30 mL of fetal whole blood.",
        keyFeature: { topic: "multiple-trauma", n: 4 },
        source: "sogc-trauma",
      },
    ],
    sources: [S.sogcTrauma],
    ...META,
  },

  /* 05 Pelvic fracture with hemorrhagic shock -------------------------- */
  {
    id: "shock-05",
    topic: "shock",
    alsoTopics: ["multiple-trauma"],
    title: "Motorcyclist after a crash",
    stem:
      "A 38-year-old man was thrown from his motorcycle 40 minutes ago. He is pale and anxious. His O2 sat is 95%. GCS 14. Paramedics gave 1.5 L of normal saline. He has pain over his pelvis and a leg length discrepancy. Chest is clear with equal air entry.",
    vitals: { temperature: "35.6°C", pulse: "136/minute", resp: "28/minute", bp: "78/50 mmHg", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What bedside imaging studies or tests would find the source of bleeding?",
        accept: [
          { id: "efast", text: "eFAST", match: ["fast", "efast", "ultrasound", "pocus"] },
          { id: "pelvis", text: "AP pelvis X-ray", match: ["pelvis x ray", "pelvic x ray", "pelvis xray", "pelvic xray", "pelvic film", "xray pelvis", "x ray pelvis", "pelvis"] },
          { id: "cxr", text: "Chest X-ray", match: ["chest x ray", "cxr", "chest xray", "chest film"] },
          { id: "abg", text: "Blood gas with lactate and base deficit", match: ["lactate", "base deficit", "blood gas", "abg", "vbg"] },
          { id: "hb", text: "Hemoglobin and type and crossmatch", match: ["hemoglobin", "crossmatch", "cbc", "type and screen"] },
          { id: "coag", text: "INR, fibrinogen or viscoelastic testing", match: ["inr", "fibrinogen", "teg", "rotem", "coag"] },
        ],
        explanation:
          "In hemorrhagic shock, the likely sources are chest, abdomen, pelvis, long bones and external. Chest X-ray, pelvis X-ray and eFAST at the bedside find most of them. Lactate and base deficit gauge the degree of shock. Unstable patients should not go to CT.",
        keyFeature: { topic: "shock", n: 6 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        update: "The pelvis X-ray shows an open book fracture. The eFAST shows no free fluid.",
        prompt: "What are the principles for his fluid and blood resuscitation?",
        accept: [
          { id: "mtp", text: "Activate the massive hemorrhage protocol", match: ["massive transfusion", "mtp", "massive hemorrhage", "massive haemorrhage"] },
          { id: "ratio", text: "Balanced products, red cells to plasma to platelets close to 1:1:1", match: ["1:1:1", "1 1 1", "plasma", "platelet", "ratio"] },
          { id: "limit", text: "Stop or minimize crystalloid", match: ["limit crystalloid", "minimize crystalloid", "stop saline", "no more crystalloid", "avoid crystalloid", "minimise crystalloid", "limit saline", "stop crystalloid"] },
          { id: "permissive", text: "Permissive hypotension, systolic 80 to 90 mmHg until bleeding is controlled, as there is no head injury", match: ["permissive", "systolic 80", "systolic 90", "sbp 80", "sbp 90", "map 65"] },
          { id: "warm", text: "Warm all fluids and blood", match: ["warm", "rapid infuser", "level 1"] },
          { id: "calcium", text: "Give calcium to prevent hypocalcemia from citrate", match: ["calcium"] },
          { id: "prbc", text: "Transfuse uncrossmatched O red cells now", match: ["o negative", "o positive", "prbc", "red cell", "uncrossmatched"] },
        ],
        unacceptable: [{ text: "Another 2 L of crystalloid", match: ["2 l saline", "2 l crystalloid", "more saline", "2l crystalloid", "2l saline"] }],
        explanation:
          "Damage control resuscitation uses blood products early in balanced ratios. Large crystalloid volumes dilute clotting factors and worsen acidosis and hypothermia. Permissive hypotension is reasonable without brain injury. Calcium and warming prevent the lethal triad.",
        keyFeature: { topic: "shock", n: 3 },
        source: "proppr",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What medication reduces death from bleeding in this patient, including the dose and timing?",
        accept: [
          { id: "txa", text: "Tranexamic acid 1 g IV over 10 minutes, then 1 g over 8 hours, started within 3 hours of injury", match: ["tranexamic 1 g", "tranexamic 1g", "txa 1 g", "txa 1g", "tranexamic acid 1", "txa 2 g", "txa 2g"] },
        ],
        unacceptable: [{ text: "Recombinant factor VIIa as first line", match: ["factor viia", "novoseven", "factor 7"] }],
        explanation:
          "CRASH-2 showed that tranexamic acid given within 3 hours reduces death from bleeding. Give 1 g over 10 minutes then 1 g over 8 hours. Starting after 3 hours may cause harm. Recombinant factor VIIa has no role as first line.",
        keyFeature: { topic: "shock", n: 8 },
        source: "crash2",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What interventions would control the pelvic bleeding?",
        accept: [
          { id: "binder", text: "Pelvic binder centred over the greater trochanters", match: ["binder", "sheet", "pelvic wrap"] },
          { id: "angio", text: "Angiography with embolization", match: ["angio", "angiography", "embolization", "embolisation", "ir", "interventional radiology"] },
          { id: "packing", text: "Preperitoneal pelvic packing", match: ["packing", "preperitoneal"] },
          { id: "exfix", text: "External fixation", match: ["external fixation", "ex fix", "exfix", "orthopedic", "orthopaedic"] },
          { id: "reboa", text: "REBOA where available", match: ["reboa"] },
          { id: "trauma", text: "Trauma surgery consultation or transfer to a trauma centre", match: ["trauma surgery", "trauma team", "trauma centre", "trauma center", "surgeon", "transfer"] },
        ],
        explanation:
          "A binder closes the pelvic volume and tamponades venous bleeding. It must be centred on the trochanters, not the iliac crests. Ongoing instability needs angioembolization or preperitoneal packing, and many centres need transfer to a trauma centre.",
        keyFeature: { topic: "multiple-trauma", n: 1 },
        source: "atls",
      },
    ],
    sources: [S.atls, S.proppr, S.crash2],
    ...META,
  },

  /* 06 Neurogenic shock ------------------------------------------------ */
  {
    id: "shock-06",
    topic: "shock",
    alsoTopics: ["multiple-trauma"],
    title: "Diver pulled from the lake",
    stem:
      "A 19-year-old man dove into shallow water from a dock and was pulled out by friends. He cannot move his arms or legs. He is awake and anxious. He has abdominal breathing. His skin is warm and pink below the nipple line. He has no obvious external bleeding.",
    vitals: { temperature: "35.9°C", pulse: "48/minute", resp: "22/minute", bp: "76/40 mmHg", o2sat: "94% on oxygen", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What findings point to neurogenic rather than hemorrhagic shock?",
        accept: [
          { id: "brady", text: "Bradycardia despite hypotension", match: ["bradycardia", "bradycardic", "heart rate", "hr 48", "slow"] },
          { id: "warm", text: "Warm, pink, dry skin", match: ["warm", "pink", "vasodilated", "vasodilation", "dry"] },
          { id: "deficit", text: "Neurological deficit consistent with a cervical cord injury", match: ["quadriplegia", "quadriplegic", "tetraplegia", "cannot move", "deficit", "cord", "paralysis", "weakness"] },
          { id: "breath", text: "Diaphragmatic breathing", match: ["diaphragmatic", "abdominal breathing"] },
          { id: "priapism", text: "Priapism", match: ["priapism"] },
        ],
        explanation:
          "Cervical or high thoracic cord injury interrupts sympathetic outflow. The result is vasodilation with warm skin and unopposed vagal tone with bradycardia. Hemorrhagic shock causes tachycardia and cool pale skin.",
        keyFeature: { topic: "shock", n: 5 },
        source: "sci",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "Neurogenic shock is a diagnosis of exclusion. What bedside tests would exclude hemorrhage?",
        accept: [
          { id: "efast", text: "eFAST", match: ["fast", "efast", "ultrasound", "pocus"] },
          { id: "cxr", text: "Chest X-ray", match: ["chest x ray", "cxr", "chest xray"] },
          { id: "pelvis", text: "Pelvis X-ray", match: ["pelvis", "pelvic"] },
          { id: "hb", text: "Hemoglobin and lactate", match: ["hemoglobin", "lactate", "cbc"] },
        ],
        explanation:
          "Patients with cord injury cannot feel abdominal or pelvic pain. Occult bleeding coexists in a significant number. Excluding hemorrhage at the bedside is essential before attributing shock to the cord injury.",
        keyFeature: { topic: "shock", n: 6 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "single",
        update: "The eFAST is negative. After 1 L of crystalloid, HR is 46 and BP 80/44 mmHg.",
        prompt: "Which of the following vasopressors is most appropriate for this patient?",
        options: [
          "Dobutamine",
          "Milrinone",
          "Norepinephrine",
          "Phenylephrine",
          "Vasopressin",
        ],
        correct: 2,
        explanation:
          "Norepinephrine gives alpha mediated vasoconstriction with some beta 1 support for heart rate and contractility. Pure alpha agonists such as phenylephrine can worsen reflex bradycardia in cervical cord injury. Dobutamine and milrinone vasodilate.",
        keyFeature: { topic: "shock", n: 7 },
        source: "sci",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        prompt: "What mean arterial pressure target do you set for his spinal cord perfusion?",
        accept: [
          { id: "map", text: "MAP of at least 75 to 80 mmHg and up to 90 to 95 mmHg for 3 to 7 days. Older guidance says 85 to 90", match: ["75", "80", "85", "90", "95"] },
        ],
        unacceptable: [{ text: "MAP 65 mmHg as for sepsis", match: ["65"] }],
        explanation:
          "The 2013 neurosurgical guideline recommends a MAP of 85 to 90 mmHg for 7 days after acute cord injury. The 2024 AO Spine guideline suggests a lower limit of 75 to 80 and an upper limit of 90 to 95 for 3 to 7 days. Hypotension worsens secondary cord ischemia. A MAP of 65 is too low for an injured cord.",
        keyFeature: { topic: "multiple-trauma", n: 6 },
        source: "ao-spine",
      },
    ],
    sources: [S.sci, S.atls, S.aoSpine],
    ...META,
  },

  /* 07 Anaphylactic shock on a beta blocker ---------------------------- */
  {
    id: "shock-07",
    topic: "shock",
    alsoTopics: ["anaphylaxis"],
    title: "Collapse at a barbecue",
    stem:
      "A 62-year-old man was stung by a wasp at a backyard barbecue. Within 10 minutes he felt faint and itchy. He takes metoprolol 50 mg twice daily and ramipril. On arrival he has hives across his trunk and a hoarse voice. He has wheeze.",
    vitals: { pulse: "64/minute", resp: "26/minute", bp: "70/36 mmHg", o2sat: "91% on room air", weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication for this patient?",
        options: [
          "Diphenhydramine 50 mg IV push",
          "Epinephrine 0.5 mg IM in the anterolateral thigh",
          "Epinephrine 1 mg IV push",
          "Epinephrine 0.5 mg subcutaneous in the upper arm",
          "Methylprednisolone 125 mg IV push",
        ],
        correct: 1,
        explanation:
          "IM epinephrine 0.01 mg/kg of 1 mg/mL, maximum 0.5 mg, into the lateral thigh is first line. Repeat every 5 minutes as needed. A 1 mg IV bolus is a cardiac arrest dose and can cause arrhythmia and infarction. Antihistamines and steroids do not treat shock.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        update: "He has received two doses of IM epinephrine and 2 L of Ringer's lactate. BP is 76/40 mmHg. HR is 68.",
        prompt: "What are the next treatments for his persistent shock, with the dose for any drug?",
        accept: [
          { id: "epiinf", text: "Epinephrine infusion starting at 0.05 to 0.1 mcg/kg/min, or 1 to 10 mcg/min, titrated", match: ["epinephrine infusion", "epi infusion", "epinephrine drip", "epi drip", "adrenaline infusion"] },
          { id: "glucagon", text: "Glucagon 1 to 5 mg IV over 5 minutes, then an infusion", match: ["glucagon 1", "glucagon 2", "glucagon 5", "glucagon 3"] },
          { id: "fluid", text: "Further crystalloid boluses, as much as 20 mL/kg repeated", match: ["fluid", "crystalloid", "ringer", "saline", "bolus"] },
          { id: "norepi", text: "Add norepinephrine or vasopressin if epinephrine alone is not enough", match: ["norepinephrine", "vasopressin"] },
        ],
        unacceptable: [{ text: "Undiluted 1 mg IV epinephrine boluses", match: ["epinephrine 1 mg iv push", "epinephrine 1 mg bolus", "1 mg iv push"], dangerous: true }],
        explanation:
          "Refractory anaphylaxis needs an epinephrine infusion and large volume fluid, since up to a third of blood volume can shift out of the vessels. Beta blockade blunts the response to epinephrine. Glucagon acts on the heart independent of beta receptors.",
        keyFeature: { topic: "shock", n: 7 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "Why does his medication list make this anaphylaxis more dangerous?",
        accept: [
          { id: "bb", text: "Beta blocker blunts the compensatory tachycardia and the response to epinephrine", match: ["beta blocker", "metoprolol", "beta"] },
          { id: "ace", text: "ACE inhibitor impairs bradykinin breakdown and angiotensin compensation", match: ["ace inhibitor", "ramipril", "acei", "bradykinin", "angiotensin"] },
          { id: "age", text: "Older age and likely heart disease increase cardiac risk", match: ["age", "cardiac", "heart disease", "coronary"] },
        ],
        explanation:
          "Beta blockers and ACE inhibitors are both linked with more severe anaphylaxis. Beta blockers reduce the effect of epinephrine and hide the tachycardia that would signal shock. Older patients with heart disease still need epinephrine because the benefit outweighs the risk.",
        keyFeature: { topic: "shock", n: 1 },
        source: "wao",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update: "He stabilizes and is weaned off all infusions after 8 hours.",
        prompt: "What are the parts of his discharge plan?",
        accept: [
          { id: "autoinj", text: "Prescribe two epinephrine autoinjectors, 0.3 mg, and teach their use", match: ["autoinjector", "auto injector", "epipen", "epinephrine", "allerject"] },
          { id: "allergy", text: "Refer to an allergist for venom testing and immunotherapy", match: ["allergist", "allergy", "immunotherapy", "venom"] },
          { id: "bb", text: "Review his beta blocker with his physician", match: ["beta blocker", "metoprolol"] },
          { id: "avoid", text: "Avoidance of stinging insects", match: ["avoidance", "avoid sting", "avoid insect", "avoid wasp", "avoid bee", "avoid outdoor food"] },
          { id: "biphasic", text: "Warn about biphasic reactions and return precautions", match: ["biphasic", "return", "come back"] },
          { id: "id", text: "Medical alert identification", match: ["medic alert", "medicalert", "bracelet", "identification"] },
          { id: "plan", text: "Written anaphylaxis action plan", match: ["action plan", "written plan"] },
        ],
        explanation:
          "Venom immunotherapy greatly reduces the risk of future systemic reactions. He needs autoinjectors and training before leaving. His cardiologist should review whether the beta blocker and ACE inhibitor are still the best choices.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "wao",
      },
    ],
    sources: [S.wao],
    ...META,
  },

  /* 08 Cardiogenic shock ----------------------------------------------- */
  {
    id: "shock-08",
    topic: "shock",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Grey and sweaty man with chest pain",
    stem:
      "A 66-year-old man has had crushing chest pain for 3 hours. He is grey, cool and sweaty. He has crackles to the mid lung fields. Your hospital has a cardiac catheterization laboratory.",
    vitals: { temperature: "36.2°C", pulse: "118/minute", resp: "30/minute", bp: "82/56 mmHg", o2sat: "88% on room air", weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What findings on ECG, chest X-ray or bedside ultrasound would support cardiogenic shock?",
        accept: [
          { id: "ste", text: "ST elevation or new ischemic changes on ECG", match: ["st elevation", "stemi", "ischemia", "ischemic", "st depression", "q wave"] },
          { id: "lvef", text: "Poor global or regional LV contraction on ultrasound", match: ["lv function", "ejection fraction", "wall motion", "contractility", "lvef", "poor lv", "reduced ef", "hypokinesis", "hypokinetic", "akinesis"] },
          { id: "blines", text: "Diffuse bilateral B lines", match: ["b line"] },
          { id: "ivc", text: "Plump IVC with little respiratory variation", match: ["ivc", "inferior vena cava"] },
          { id: "edema", text: "Pulmonary edema or vascular redistribution on chest X-ray", match: ["pulmonary edema", "redistribution", "kerley", "edema", "congestion"] },
          { id: "mr", text: "Acute mitral regurgitation or VSD on echo", match: ["mitral regurgitation", "vsd", "septal rupture", "papillary"] },
        ],
        explanation:
          "ECG, chest X-ray and bedside echo quickly separate cardiogenic shock from other types. A poorly contracting ventricle with B lines and a full IVC means the problem is the pump, not volume. Echo also finds mechanical complications such as papillary muscle rupture.",
        keyFeature: { topic: "shock", n: 6 },
        source: "aha-cs",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG shows an anterior STEMI. He is on BiPAP. MAP is 60 mmHg.",
        prompt: "Which of the following vasoactive drugs is most appropriate first for this patient?",
        options: [
          "Dopamine",
          "Isoproterenol",
          "Milrinone",
          "Nitroglycerin",
          "Norepinephrine",
        ],
        correct: 4,
        explanation:
          "Norepinephrine is the preferred first vasopressor in cardiogenic shock with hypotension. In SOAP II dopamine caused more arrhythmias and higher mortality in the cardiogenic subgroup. An inotrope such as dobutamine may be added once MAP is adequate. Nitrates and milrinone lower blood pressure further.",
        keyFeature: { topic: "shock", n: 7 },
        source: "soap2",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What definitive or supportive treatments address the cause of his shock?",
        accept: [
          { id: "pci", text: "Emergency coronary angiography with PCI", match: ["pci", "cath", "catheterization", "angiography", "angioplasty", "revascularization"] },
          { id: "asa", text: "ASA and antiplatelet loading", match: ["asa", "aspirin", "ticagrelor", "clopidogrel", "antiplatelet"] },
          { id: "heparin", text: "Unfractionated heparin", match: ["heparin"] },
          { id: "mcs", text: "Mechanical circulatory support such as an intra aortic balloon pump or Impella", match: ["balloon pump", "iabp", "impella", "ecmo", "mechanical support", "mechanical circulatory"] },
          { id: "vent", text: "Ventilatory support with BiPAP or intubation", match: ["bipap", "intubate", "intubation", "ventilation", "ventilatory support", "niv", "cpap"] },
          { id: "dobu", text: "Add dobutamine for low output once MAP is adequate", match: ["dobutamine", "inotrope"] },
        ],
        explanation:
          "Early revascularization is the only therapy shown to improve survival in infarct related cardiogenic shock. Go to the cath lab without delay. Mechanical support may bridge the patient, although routine balloon pumps did not improve survival. Antiplatelet therapy and heparin are part of standard STEMI care.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "aha-cs",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        prompt: "A colleague suggests a 2 L saline bolus for his hypotension. Why is this inappropriate?",
        accept: [
          { id: "overload", text: "He is already volume overloaded with pulmonary edema, and fluid will worsen oxygenation", match: ["pulmonary edema", "overload", "overloaded", "crackle", "b line", "worsen oxygenation", "worsen hypoxia", "congestion", "edema"] },
          { id: "pump", text: "The problem is pump failure, not low volume", match: ["pump", "cardiogenic", "not hypovolemic", "not volume"] },
        ],
        explanation:
          "Most patients with cardiogenic shock are not fluid responsive. Large boluses raise filling pressures and worsen pulmonary edema. A small 250 mL bolus may be tried only without congestion, for example in right ventricular infarction.",
        keyFeature: { topic: "shock", n: 3 },
        source: "aha-cs",
      },
    ],
    sources: [S.aha, S.soap2],
    ...META,
  },

  /* 09 Massive PE ------------------------------------------------------ */
  {
    id: "shock-09",
    topic: "shock",
    alsoTopics: ["dvt-pe"],
    title: "Collapse after knee surgery",
    stem:
      "A 58-year-old woman collapsed at home 9 days after a total knee replacement. She was not given anticoagulation at discharge. She is short of breath and anxious. JVP is elevated. Her lungs are clear. Her ECG shows sinus tachycardia with an S1Q3T3 pattern and T wave inversion in V1 to V4.",
    vitals: { temperature: "37.4°C", pulse: "128/minute", resp: "32/minute", bp: "78/48 mmHg", o2sat: "84% on a non rebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What bedside ultrasound findings would support your suspected diagnosis?",
        accept: [
          { id: "rv", text: "Dilated right ventricle, larger than the left", match: ["rv dilation", "rv dilated", "dilated rv", "right ventricle", "rv enlargement", "rv:lv", "rv lv ratio", "rv larger"] },
          { id: "dsign", text: "Septal flattening, a D shaped left ventricle", match: ["d sign", "d shaped", "septal flattening", "septum", "septal"] },
          { id: "mcconnell", text: "McConnell sign", match: ["mcconnell"] },
          { id: "ivc", text: "Plethoric IVC", match: ["ivc", "plethoric", "no collapse", "no variation"] },
          { id: "dvt", text: "DVT on compression ultrasound of the leg", match: ["dvt", "compression", "leg", "thrombus", "clot"] },
          { id: "tapse", text: "Reduced TAPSE", match: ["tapse"] },
          { id: "lung", text: "A lines without B lines on lung ultrasound", match: ["a line", "no b line", "without b line"] },
        ],
        explanation:
          "In an unstable patient too sick for CT, RV dilation and dysfunction on bedside echo with a clinical picture of PE supports treating as massive PE. Finding a DVT adds confidence. Clear lungs and a full IVC point away from hypovolemia and left heart failure.",
        keyFeature: { topic: "shock", n: 6 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate fluid strategy for this patient?",
        options: [
          "Albumin 25% 100 mL bolus, then a vasopressor",
          "Cautious bolus of no more than 500 mL, then vasopressor",
          "Crystalloid 30 mL/kg as a rapid bolus, then reassess",
          "Transfuse 2 units of red cells, then start a vasopressor",
          "No fluid bolus at all",
        ],
        correct: 1,
        explanation:
          "The failing RV is very sensitive to preload. Aggressive fluids distend it and compress the LV through the septum, which worsens output. A small cautious bolus is reasonable if the CVP is not high. Vasopressors are then the mainstay.",
        keyFeature: { topic: "shock", n: 3 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What vasoactive drug is suitable for her, and why?",
        accept: [
          { id: "ne", text: "Norepinephrine, to raise systemic pressure and RV coronary perfusion", match: ["norepinephrine", "levophed", "noradrenaline"] },
          { id: "epi", text: "Epinephrine for combined pressor and inotrope effect", match: ["epinephrine", "adrenaline"] },
          { id: "vaso", text: "Vasopressin, which does not raise pulmonary vascular resistance", match: ["vasopressin"] },
        ],
        unacceptable: [{ text: "Phenylephrine alone", match: ["phenylephrine"] }],
        explanation:
          "Norepinephrine restores systemic pressure and RV coronary perfusion and is first choice. Dobutamine alone lowers blood pressure, but it can be added to improve RV output once pressure is supported. Pure alpha agonists raise pulmonary vascular resistance and give no inotropy.",
        keyFeature: { topic: "shock", n: 7 },
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        prompt: "What is the definitive treatment, including the drug, dose and duration?",
        accept: [
          { id: "tpa", text: "Alteplase 100 mg IV over 2 hours", match: ["alteplase 100 2 hour", "alteplase 100 2h", "alteplase 100 2 hr", "alteplase 100 120 min", "alteplase 100 two hour", "tpa 100 2 hour", "tpa 100 2h", "tpa 100 2 hr", "tpa 100 120 min", "tpa 100 two hour", "rtpa 100 2 hour", "rtpa 100 2h", "rtpa 100 2 hr", "rtpa 100 120 min", "rtpa 100 two hour", "activase 100 2 hour", "activase 100 2h", "activase 100 2 hr", "activase 100 120 min", "activase 100 two hour"] },
          { id: "tnk", text: "Tenecteplase by weight, 45 mg for 82 kg, where used off label", match: ["tenecteplase 45", "tnk 45", "tenecteplase 40", "tnk 40", "tenecteplase 50", "tnk 50"] },
        ],
        unacceptable: [{ text: "Heparin alone", match: ["heparin alone", "only heparin"] }],
        explanation:
          "High risk PE with shock needs systemic thrombolysis. Alteplase 100 mg over 2 hours is the standard regimen. A 0.6 mg/kg accelerated regimen over 15 minutes, maximum 50 mg, is used in periarrest. Recent surgery is a relative contraindication, but death from untreated massive PE is likely. Surgical or catheter embolectomy is the alternative.",
        keyFeature: { topic: "shock", n: 8 },
        source: "esc-pe",
      },
    ],
    sources: [S.escPe],
    ...META,
  },

  /* 10 Adrenal crisis -------------------------------------------------- */
  {
    id: "shock-10",
    topic: "shock",
    title: "Vomiting woman with low pressure",
    stem:
      "A 41-year-old woman has had vomiting and abdominal pain for 2 days. She has felt weak for months and lost 6 kg. She says she has been craving salt. She has hypothyroidism treated with levothyroxine. Her O2 sat is 98%. Her skin creases and gums are darkly pigmented. Sodium 124 mmol/L, potassium 6.1 mmol/L, glucose 3.1 mmol/L, creatinine 142 umol/L. She received 1 L of saline and her BP is 78/44 mmHg.",
    vitals: { temperature: "38.0°C", pulse: "122/minute", resp: "22/minute", bp: "74/42 mmHg", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What findings suggest a cause of shock beyond simple volume loss?",
        accept: [
          { id: "na", text: "Hyponatremia", match: ["hyponatremia", "sodium", "na"] },
          { id: "k", text: "Hyperkalemia", match: ["hyperkalemia", "potassium"] },
          { id: "glu", text: "Hypoglycemia", match: ["hypoglycemia", "glucose"] },
          { id: "pig", text: "Hyperpigmentation of skin creases and gums", match: ["pigment", "pigmentation", "hyperpigmentation", "dark", "bronze"] },
          { id: "salt", text: "Salt craving", match: ["salt"] },
          { id: "wt", text: "Chronic weight loss and fatigue", match: ["weight loss", "weakness", "fatigue"] },
          { id: "autoimmune", text: "Other autoimmune disease", match: ["autoimmune", "hypothyroid", "hypothyroidism", "thyroid"] },
          { id: "fluid", text: "Poor response to fluid", match: ["fluid", "refractory", "not respond"] },
        ],
        explanation:
          "Hyponatremia, hyperkalemia, hypoglycemia and hyperpigmentation point to primary adrenal insufficiency. Autoimmune adrenalitis often coexists with thyroid disease. Shock that responds poorly to fluid should prompt a search for adrenal, cardiac, toxic and obstructive causes.",
        keyFeature: { topic: "shock", n: 5 },
        source: "adrenal",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What is the key drug treatment, including the dose and route?",
        accept: [
          { id: "hc", text: "Hydrocortisone 100 mg IV bolus, then 200 mg per 24 hours", match: ["hydrocortisone 100", "solu cortef 100", "hydrocortisone 100mg", "solucortef 100"] },
        ],
        unacceptable: [
          { text: "Wait for the cortisol or ACTH stimulation test before treating", match: ["wait", "acth stimulation first", "after cortisol"] },
          { text: "Dexamethasone alone", match: ["dexamethasone"] },
        ],
        explanation:
          "Give hydrocortisone 100 mg IV immediately, then 50 mg every 6 hours or 200 mg per 24 hours. Draw cortisol and ACTH first only if it causes no delay. At this dose hydrocortisone has enough mineralocorticoid effect, so fludrocortisone is not needed acutely.",
        keyFeature: { topic: "shock", n: 8 },
        source: "adrenal",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What are the other parts of her immediate treatment?",
        accept: [
          { id: "saline", text: "Further isotonic saline, 1 L in the first hour and more as needed", match: ["saline", "normal saline", "crystalloid", "fluid", "ns"] },
          { id: "dextrose", text: "Dextrose, such as 25 g IV and a dextrose containing infusion", match: ["dextrose", "d50", "d5", "glucose"] },
          { id: "k", text: "Monitor potassium and ECG, usually no specific hyperkalemia treatment needed", match: ["ecg", "monitor potassium", "cardiac monitor"] },
          { id: "trigger", text: "Look for and treat the trigger, such as infection", match: ["infection", "trigger", "precipitant", "culture", "antibiotic"] },
          { id: "labs", text: "Draw cortisol and ACTH before steroids if no delay", match: ["cortisol", "acth", "random cortisol"] },
        ],
        unacceptable: [{ text: "Hypotonic fluids", match: ["hypotonic", "0.45", "half saline"] }],
        explanation:
          "Adrenal crisis needs volume, glucose and hydrocortisone together. Hyperkalemia usually corrects with steroid and saline, but the ECG should be monitored. Infection is the most common trigger and she has a fever.",
        keyFeature: { topic: "shock", n: 3 },
        source: "adrenal",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "She improves and is later diagnosed with Addison disease. She is ready for discharge on hydrocortisone and fludrocortisone.",
        prompt: "What steroid education would prevent another crisis?",
        accept: [
          { id: "sick", text: "Sick day rules. Double or triple the glucocorticoid dose during fever or illness", match: ["sick day", "double", "triple", "stress dose", "increase dose"] },
          { id: "im", text: "Emergency hydrocortisone injection kit for vomiting", match: ["injection", "emergency kit", "im hydrocortisone", "injectable"] },
          { id: "id", text: "Medical alert bracelet or steroid card", match: ["medic alert", "medicalert", "bracelet", "card", "identification"] },
          { id: "vomit", text: "Seek care early if vomiting and unable to take pills", match: ["vomit", "vomiting", "seek care", "come back", "return"] },
          { id: "endo", text: "Endocrinology follow up", match: ["endocrinology", "endocrinologist"] },
          { id: "stop", text: "Never stop steroids abruptly", match: ["never stop", "do not stop", "abrupt"] },
        ],
        explanation:
          "Most adrenal crises follow illness without stress dosing. Sick day rules, a self injection kit and medical identification prevent death. Paramedics and ED staff can then act quickly.",
        keyFeature: { topic: "shock", n: 8 },
        source: "adrenal",
      },
    ],
    sources: [S.adrenal],
    ...META,
  },

  /* 11 Calcium channel blocker poisoning ------------------------------- */
  {
    id: "shock-11",
    topic: "shock",
    alsoTopics: ["tox"],
    title: "Man found with empty pill bottles",
    stem:
      "A 52-year-old man was found by his wife 3 hours after he told her he was taking all his pills. She brings empty bottles of amlodipine 10 mg (about 60 tablets) and extended release metformin. He is drowsy but answers questions. His O2 sat is 96%. Glucose 16.8 mmol/L. Potassium 3.6 mmol/L. Lactate 5.2 mmol/L. ECG shows sinus bradycardia with a normal QRS. He has received 2 L of crystalloid.",
    vitals: { temperature: "36.5°C", pulse: "58/minute", resp: "18/minute", bp: "72/34 mmHg", weight: "100 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What features point to a toxic cause of his shock?",
        accept: [
          { id: "collateral", text: "Empty pill bottles and a statement of intent", match: ["bottle", "pill", "intent", "collateral", "amlodipine"] },
          { id: "hyperglycemia", text: "Hyperglycemia, reflecting impaired insulin release", match: ["hyperglycemia", "glucose", "sugar"] },
          { id: "brady", text: "Relative bradycardia with hypotension", match: ["bradycardia", "heart rate", "hr"] },
          { id: "fluid", text: "Poor response to fluid", match: ["fluid", "refractory"] },
          { id: "mental", text: "Relatively preserved mental status for the degree of hypotension", match: ["mental status", "preserved", "awake"] },
        ],
        explanation:
          "Calcium channel blocker poisoning causes vasodilatory and cardiogenic shock. Hyperglycemia reflects blocked insulin release and correlates with severity. Dihydropyridines like amlodipine often cause reflex tachycardia at first, but large overdoses lose selectivity.",
        keyFeature: { topic: "shock", n: 5 },
        source: "ccb",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What first line drug, with its dose and route, would you give for this poisoning?",
        accept: [
          { id: "cagluc", text: "Calcium gluconate 10%, 30 to 60 mL IV (3 to 6 g)", match: ["calcium gluconate 30", "calcium gluconate 60", "calcium gluconate 3 g", "calcium gluconate 3g", "calcium gluconate 6 g", "calcium gluconate 6g", "calcium gluconate 3"] },
          { id: "cacl", text: "Calcium chloride 10%, 10 to 20 mL IV (1 to 2 g), by central line if possible", match: ["calcium chloride 10", "calcium chloride 20", "calcium chloride 1 g", "calcium chloride 1g", "calcium chloride 2 g", "calcium chloride 2g", "calcium chloride 1"] },
          { id: "hiet", text: "High dose insulin 1 unit/kg IV bolus, so 100 units, with dextrose", match: ["insulin 1 unit/kg", "insulin 100 unit", "insulin 1 u/kg", "insulin 1 unit per kg", "insulin 100 u"] },
          { id: "ne", text: "Norepinephrine infusion titrated to MAP", match: ["norepinephrine infusion", "norepinephrine mcg", "levophed infusion", "norepinephrine drip", "norepinephrine titrate"] },
        ],
        explanation:
          "Consensus recommendations list IV calcium, high dose insulin and norepinephrine or epinephrine as first line. Calcium may be repeated. Calcium chloride has three times the calcium of gluconate and damages tissue if it extravasates.",
        keyFeature: { topic: "tox", n: 4 },
        source: "ccb",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "You start high dose insulin euglycemic therapy. What are the elements of the protocol?",
        accept: [
          { id: "bolus", text: "Insulin bolus 1 unit/kg IV", match: ["bolus", "1 unit/kg", "1 u/kg"] },
          { id: "inf", text: "Insulin infusion 1 unit/kg/h, titrated up to 10 unit/kg/h", match: ["infusion", "unit/kg/h", "unit/kg/hr", "u/kg/h", "u/kg/hr", "titrate"] },
          { id: "dex", text: "Dextrose infusion to keep glucose 5.5 to 11 mmol/L", match: ["dextrose", "d10", "d50", "d25"] },
          { id: "glucose", text: "Glucose checks every 15 to 30 minutes at first", match: ["glucose check", "check glucose", "monitor glucose", "glucose monitoring", "glucose every", "glucose q"] },
          { id: "k", text: "Monitor potassium and replace if below about 2.8 to 3.0 mmol/L", match: ["potassium"] },
          { id: "time", text: "Allow 15 to 60 minutes for effect and continue vasopressors meanwhile", match: ["delay", "onset", "15 to 60", "continue vasopressor"] },
        ],
        explanation:
          "High dose insulin improves myocardial carbohydrate use and contractility. Start with a 1 unit/kg bolus, then 1 unit/kg/h titrated up. Give dextrose to maintain euglycemia and monitor glucose and potassium closely. It takes time to work, so vasopressors continue.",
        keyFeature: { topic: "shock", n: 8 },
        source: "ccb",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        update: "Despite calcium, insulin at 10 units/kg/h and norepinephrine at 0.8 mcg/kg/min, his MAP is 52 mmHg. Bedside echo shows a poorly contracting heart.",
        prompt: "Which of the following rescue therapies are most appropriate for this patient?",
        options: [
          "Activated charcoal 50 g by mouth",
          "Hemodialysis to remove amlodipine",
          "Intravenous lipid emulsion",
          "Methylene blue",
          "Physostigmine",
          "Referral for VA ECMO",
          "Transcutaneous pacing alone",
          "Whole bowel irrigation",
        ],
        correct: [5, 2],
        explanation:
          "The 2017 expert consensus suggests VA ECMO for refractory cardiogenic shock where available, and lipid emulsion in refractory shock. His echo shows pump failure, so ECMO fits. Methylene blue was not graded by the consensus and targets vasoplegia rather than a failing heart. Amlodipine is highly protein bound and not dialyzable. Charcoal is unsafe without a protected airway.",
        keyFeature: { topic: "tox", n: 4 },
        source: "ccb",
      },
    ],
    sources: [S.ccb],
    ...META,
  },

  /* 12 Paediatric septic shock with petechiae -------------------------- */
  {
    id: "shock-12",
    topic: "shock",
    alsoTopics: ["pediatric-fever"],
    title: "Feverish child with spots",
    stem:
      "A 3-year-old girl has had fever for 12 hours. She is now sleepy and has a spreading non blanching rash on her legs. Capillary refill is 4 seconds. Her hands and feet are cold. She has one IV.",
    vitals: { temperature: "39.8°C", pulse: "172/minute", resp: "40/minute", bp: "88/56 mmHg", o2sat: "95% on room air", weight: "14 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What findings show she is in septic shock?",
        accept: [
          { id: "hr", text: "Tachycardia", match: ["tachycardia", "heart rate", "172"] },
          { id: "crt", text: "Capillary refill 4 seconds", match: ["capillary refill", "cap refill", "crt"] },
          { id: "cold", text: "Cold extremities", match: ["cold", "cool", "mottled", "mottling"] },
          { id: "mental", text: "Altered mental status", match: ["sleepy", "lethargy", "lethargic", "mental status", "drowsy", "altered"] },
          { id: "rr", text: "Tachypnea", match: ["tachypnea", "respiratory rate"] },
          { id: "rash", text: "Purpuric rash suggesting meningococcemia", match: ["petechiae", "petechial", "purpura", "purpuric", "non blanching", "rash"] },
        ],
        explanation:
          "Children in septic shock keep a normal blood pressure until late. Tachycardia, prolonged capillary refill, cold extremities and altered mental status define cold shock. Fever with a spreading purpuric rash is meningococcemia until proven otherwise.",
        keyFeature: { topic: "shock", n: 1 },
        source: "ssc-peds",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What is your initial fluid resuscitation, including the fluid, volume and how you guide it?",
        accept: [
          { id: "bolus", text: "Balanced or isotonic crystalloid 10 to 20 mL/kg (140 to 280 mL) rapidly by push pull or pressure bag", match: ["10 ml/kg", "20 ml/kg", "140 ml", "280 ml", "200 ml", "ringer", "normal saline", "crystalloid", "plasma lyte"] },
          { id: "reassess", text: "Reassess after each bolus for perfusion, liver edge and crackles", match: ["reassess", "liver", "crackle", "after each bolus", "hepatomegaly"] },
          { id: "limit", text: "Up to 40 to 60 mL/kg in the first hour if no fluid overload", match: ["40 ml/kg", "60 ml/kg", "first hour"] },
          { id: "access", text: "Get a second access, IO if needed", match: ["io", "intraosseous", "second iv"] },
        ],
        unacceptable: [{ text: "Maintenance rate fluids only", match: ["maintenance"] }],
        explanation:
          "Give 10 to 20 mL/kg boluses of crystalloid, reassessing after each. Up to 40 to 60 mL/kg in the first hour is suggested where intensive care is available. Stop if crackles or hepatomegaly appear. Balanced crystalloids are suggested over saline.",
        keyFeature: { topic: "shock", n: 4 },
        source: "ssc-peds",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What antibiotic, with its dose, would you give within the first hour?",
        accept: [
          { id: "ctx", text: "Ceftriaxone 100 mg/kg IV, so 1.4 g (maximum 2 g per dose)", match: ["ceftriaxone 100 mg/kg", "ceftriaxone 100mg/kg", "ceftriaxone 1.4", "ceftriaxone 1400", "ceftriaxone 80 mg/kg", "cefotaxime 50 mg/kg", "cefotaxime 700", "cefotaxime 75 mg/kg"] },
        ],
        unacceptable: [{ text: "Delay antibiotics until after LP", match: ["after lp", "after lumbar", "wait"] }],
        explanation:
          "Give ceftriaxone 100 mg/kg IV, maximum 2 g, as soon as possible and within the first hour. Many centres add vancomycin for possible resistant pneumococcus until cultures return. Do not delay for LP in an unstable child. Draw a blood culture if it does not delay treatment.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "ssc-peds",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 60 mL/kg she has HR 168, capillary refill 4 seconds, cold extremities and BP 76/40 mmHg. Her liver edge is now 3 cm below the costal margin.",
        prompt: "Which of the following vasoactive agents is most appropriate first for this child?",
        options: [
          "Dobutamine alone",
          "Dopamine",
          "Epinephrine",
          "Milrinone",
          "Phenylephrine",
        ],
        correct: 2,
        explanation:
          "Pediatric Surviving Sepsis suggests epinephrine or norepinephrine over dopamine. Epinephrine fits cold shock with poor cardiac output because it adds inotropy. It can run through a peripheral IV or IO while central access is arranged. Stop fluid now that the liver is enlarging.",
        keyFeature: { topic: "shock", n: 7 },
        source: "ssc-peds",
      },
      {
        id: "q5",
        kind: "short",
        required: 2,
        prompt: "She stays hypotensive on epinephrine. What further non fluid therapies would you consider?",
        accept: [
          { id: "hc", text: "Stress dose hydrocortisone, such as 2 mg/kg IV (maximum 100 mg)", match: ["hydrocortisone", "steroid", "corticosteroid"] },
          { id: "ne", text: "Add norepinephrine", match: ["norepinephrine", "noradrenaline"] },
          { id: "ca", text: "Correct ionized calcium", match: ["calcium"] },
          { id: "glu", text: "Correct glucose", match: ["glucose", "dextrose"] },
          { id: "intubate", text: "Intubate with ketamine to reduce oxygen demand", match: ["intubate", "intubation", "ketamine", "ventilation"] },
          { id: "picu", text: "PICU and ECMO consultation", match: ["picu", "ecmo", "critical care"] },
          { id: "vanc", text: "Add vancomycin", match: ["vancomycin"] },
        ],
        explanation:
          "Catecholamine refractory shock needs more vasoactive support, correction of calcium and glucose, and consideration of stress dose hydrocortisone. Meningococcemia can cause adrenal hemorrhage. Early PICU involvement is essential. Use ketamine for intubation because propofol and high dose benzodiazepines drop blood pressure.",
        keyFeature: { topic: "shock", n: 8 },
        source: "ssc-peds",
      },
    ],
    sources: [S.sscPeds],
    ...META,
  },

  /* 13 Upper GI bleed on apixaban -------------------------------------- */
  {
    id: "shock-13",
    topic: "shock",
    alsoTopics: ["gi-bleed"],
    title: "Older man who fainted in the bathroom",
    stem:
      "A 78-year-old man fainted while getting up from the toilet this morning. He has felt tired for 2 days. He has atrial fibrillation on apixaban 5 mg twice daily and hypertension on bisoprolol. His last dose of apixaban was 3 hours ago. His usual BP is 145/85 mmHg. His O2 sat is 96%. He is pale. Rectal exam shows black tarry stool. Hemoglobin 72 g/L (baseline 138). Creatinine 110 umol/L. BUN is high.",
    vitals: { temperature: "36.4°C", pulse: "88/minute", resp: "20/minute", bp: "98/60 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "Why do his vital signs underestimate how unwell he is?",
        accept: [
          { id: "bb", text: "Bisoprolol blunts tachycardia", match: ["beta blocker", "bisoprolol", "blunt"] },
          { id: "baseline", text: "BP is well below his usual, so this is relative hypotension", match: ["baseline", "usual", "relative hypotension"] },
          { id: "age", text: "Older adults have a blunted physiologic response", match: ["age", "elderly", "older"] },
          { id: "shockindex", text: "Shock index near 1", match: ["shock index"] },
          { id: "syncope", text: "Syncope is a sign of significant volume loss", match: ["syncope", "faint", "fainted"] },
          { id: "hb", text: "Large hemoglobin drop", match: ["hemoglobin", "hb", "haemoglobin"] },
        ],
        explanation:
          "Beta blockers and age blunt tachycardia. A BP that looks acceptable may be well below baseline. Syncope with melena and a hemoglobin drop of more than 60 g/L signal major blood loss even with modest vital sign changes.",
        keyFeature: { topic: "shock", n: 1 },
        source: "barkun",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate transfusion approach for this patient?",
        options: [
          "Give 3 L of crystalloid and recheck hemoglobin",
          "Give 4 units of plasma first to correct the anticoagulant",
          "Red cells to 70 to 90 g/L, more if bleeding",
          "Transfuse only if hemoglobin falls below 60 g/L",
          "Transfuse to a target hemoglobin of 120 g/L",
        ],
        correct: 2,
        explanation:
          "A restrictive strategy with a threshold of 70 g/L and target of 70 to 90 improves survival in upper GI bleeding. A threshold of 80 is reasonable with cardiovascular disease. Active bleeding with hypoperfusion needs blood now regardless of the number. Plasma does not reverse apixaban.",
        keyFeature: { topic: "gi-bleed", n: 5 },
        source: "villanueva",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What agent, with its dose, would reverse his anticoagulant?",
        accept: [
          { id: "pcc", text: "Four factor prothrombin complex concentrate, a fixed 2000 units or 25 to 50 units/kg IV to a maximum of 3000 units", match: ["pcc 2000", "pcc 50", "octaplex 2000", "beriplex 2000", "prothrombin complex 2000", "prothrombin complex 50", "octaplex 50", "beriplex 50", "pcc 25", "pcc 1500"] },
          { id: "andexanet", text: "Andexanet alfa where available, dosed by drug and timing", match: ["andexanet"] },
        ],
        unacceptable: [
          { text: "Vitamin K", match: ["vitamin k"] },
          { text: "Protamine", match: ["protamine"] },
          { text: "Idarucizumab", match: ["idarucizumab", "praxbind"] },
        ],
        explanation:
          "Thrombosis Canada suggests andexanet where available, or 4 factor PCC as a fixed 2 000 units or 25 to 50 units/kg to a maximum of 3 000 units. Vitamin K and protamine have no effect on apixaban. Idarucizumab reverses only dabigatran.",
        keyFeature: { topic: "shock", n: 8 },
        source: "tc-doac",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What other treatments or consults are needed for his bleeding source?",
        accept: [
          { id: "ppi", text: "IV proton pump inhibitor, pantoprazole 80 mg bolus", match: ["ppi", "pantoprazole", "proton pump", "esomeprazole"] },
          { id: "scope", text: "Endoscopy within 24 hours after resuscitation", match: ["endoscopy", "scope", "gastroenterology", "egd", "gastroscopy"] },
          { id: "surgery", text: "Surgical or interventional radiology backup if endoscopy fails", match: ["surgery", "surgical", "interventional radiology", "embolization"] },
          { id: "hold", text: "Hold apixaban and antihypertensives", match: ["hold", "stop apixaban", "stop anticoagulant", "hold anticoagulant", "discontinue apixaban"] },
        ],
        unacceptable: [{ text: "Tranexamic acid", match: ["tranexamic", "txa"] }],
        explanation:
          "IV PPI before endoscopy reduces high risk stigmata. Endoscopy within 24 hours is recommended for most patients after resuscitation. Tranexamic acid did not reduce death in GI bleeding in HALT-IT and increased venous clots.",
        keyFeature: { topic: "gi-bleed", n: 6 },
        source: "barkun",
      },
    ],
    sources: [S.barkun, S.villanueva, S.tcDoac],
    ...META,
  },

  /* 14 Hypernatremic dehydration in an older woman --------------------- */
  {
    id: "shock-14",
    topic: "shock",
    title: "Dry and drowsy after a heat wave",
    stem:
      "An 86-year-old woman is brought from home by her son after a week long heat wave. She lives alone and has advanced dementia. She has barely eaten or drunk for several days. Her O2 sat is 95%. Her mucous membranes are dry. She is drowsy but rousable. Sodium 168 mmol/L, potassium 4.2 mmol/L, glucose 7.0 mmol/L, creatinine 210 umol/L, urea 32 mmol/L.",
    vitals: { temperature: "37.8°C", pulse: "112/minute", resp: "20/minute", bp: "88/50 mmHg", weight: "50 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first fluid for this patient?",
        options: [
          "5% albumin 500 mL bolus then reassess",
          "Dextrose 5% in water 500 mL bolus then reassess",
          "Free water 500 mL by nasogastric tube then reassess",
          "Half normal saline at 250 mL/hour then reassess",
          "Normal saline or Ringer's lactate 500 mL bolus then reassess",
        ],
        correct: 4,
        explanation:
          "She has hypovolemic shock as well as a free water deficit. Restore perfusion first with isotonic crystalloid in 250 to 500 mL boluses. Isotonic saline is still hypotonic relative to her serum. Then correct the free water deficit slowly with hypotonic fluid.",
        keyFeature: { topic: "shock", n: 3 },
        source: "hyper-na",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What is her estimated free water deficit in litres, and what formula did you use?",
        accept: [
          { id: "fwd", text: "About 4.5 L, using 0.45 x 50 kg x (168/140 minus 1)", match: ["4.5", "4.5 l", "4.5l", "4500", "4.4", "4.6"] },
          { id: "fwd5", text: "About 5 L if 0.5 is used for total body water", match: ["5 l", "5l", "5000", "5.0"] },
        ],
        unacceptable: [{ text: "About 6 L, using the 0.6 factor for a young man", match: ["6 l", "6l", "6000", "6.0"] }],
        explanation:
          "Free water deficit equals total body water times (sodium over 140 minus 1). Total body water is about 60 percent of weight in young men, 50 percent in young women and older men, and 45 percent in older women. Using 0.6 in an older woman overestimates the deficit by a third.",
        keyFeature: { topic: "shock", n: 2 },
        source: "hyper-na",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What is the maximum safe fall in serum sodium over the first 24 hours?",
        accept: [
          { id: "rate", text: "About 10 mmol/L per 24 hours, or about 0.5 mmol/L per hour", match: ["10", "0.5", "12", "8"] },
        ],
        unacceptable: [{ text: "Normalize within 24 hours", match: ["normalize", "to 140", "28"] }],
        explanation:
          "Chronic hypernatremia means brain cells have adapted with idiogenic osmoles. Rapid correction causes cerebral edema and seizures. Aim to lower sodium by no more than about 10 mmol/L per day, checking sodium every 2 to 4 hours at first.",
        keyFeature: { topic: "shock", n: 2 },
        source: "hyper-na",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "Besides water loss, what other conditions could be causing or worsening her shock?",
        accept: [
          { id: "infection", text: "Sepsis from pneumonia, UTI or another source", match: ["infection", "sepsis", "septic", "uti", "pneumonia", "urinary"] },
          { id: "heat", text: "Heat stroke", match: ["heat", "hyperthermia"] },
          { id: "acs", text: "Myocardial infarction or other cardiogenic cause", match: ["myocardial infarction", "mi", "acs", "cardiogenic", "ischemia", "arrhythmia"] },
          { id: "bleed", text: "Occult bleeding such as a GI bleed", match: ["bleed", "hemorrhage", "haemorrhage"] },
          { id: "adrenal", text: "Adrenal insufficiency", match: ["adrenal", "addison"] },
          { id: "meds", text: "Medications such as diuretics or antihypertensives", match: ["diuretic", "antihypertensive", "medication", "drug"] },
          { id: "pe", text: "Pulmonary embolism after immobility", match: ["pulmonary embolism", "pe"] },
        ],
        explanation:
          "Shock in an older adult is often multifactorial. Sepsis and heat stroke commonly coexist with dehydration after a heat wave. Silent myocardial infarction, bleeding and adrenal crisis must not be missed. Check CK for rhabdomyolysis and consider neglect when an older person is found in this state.",
        keyFeature: { topic: "shock", n: 5 },
        source: "rosen",
      },
    ],
    sources: [S.hyperNa, S.rosen],
    ...META,
  },

  /* 15 Tamponade ------------------------------------------------------- */
  {
    id: "shock-15",
    topic: "shock",
    title: "Breathless woman with cancer",
    stem:
      "A 57-year-old woman with metastatic lung cancer has had increasing breathlessness for a week. Today she nearly fainted. Her neck veins are distended. Heart sounds are quiet. Lungs are clear. The ECG shows sinus tachycardia with low voltage and beat to beat variation in QRS height.",
    vitals: { temperature: "36.8°C", pulse: "124/minute", resp: "28/minute", bp: "84/66 mmHg", o2sat: "93% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What clinical findings suggest obstructive rather than hypovolemic shock?",
        accept: [
          { id: "jvp", text: "Distended neck veins", match: ["jvp", "neck vein", "jugular", "jvd"] },
          { id: "muffled", text: "Quiet heart sounds", match: ["quiet", "muffled", "distant", "heart sound"] },
          { id: "pp", text: "Narrow pulse pressure", match: ["pulse pressure"] },
          { id: "paradox", text: "Pulsus paradoxus", match: ["pulsus", "paradoxus"] },
          { id: "alternans", text: "Electrical alternans and low voltage on ECG", match: ["alternans", "low voltage"] },
          { id: "lungs", text: "Clear lungs despite breathlessness", match: ["clear lung", "lungs clear", "clear"] },
        ],
        explanation:
          "Beck's triad of hypotension, raised JVP and quiet heart sounds, plus pulsus paradoxus, points to tamponade. Hypovolemic shock gives flat neck veins. Electrical alternans reflects the heart swinging in a large effusion.",
        keyFeature: { topic: "shock", n: 5 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What bedside ultrasound findings confirm tamponade physiology?",
        accept: [
          { id: "effusion", text: "Pericardial effusion", match: ["effusion", "pericardial fluid"] },
          { id: "ra", text: "Right atrial systolic collapse", match: ["right atrial", "ra collapse", "atrial collapse"] },
          { id: "rv", text: "Right ventricular diastolic collapse", match: ["right ventricular", "rv collapse", "ventricular collapse", "diastolic collapse"] },
          { id: "ivc", text: "Plethoric IVC without respiratory variation", match: ["ivc", "plethoric", "no collapse", "no variation"] },
          { id: "mv", text: "Exaggerated respiratory variation in mitral inflow", match: ["mitral inflow", "respiratory variation"] },
          { id: "swing", text: "Swinging heart", match: ["swinging"] },
        ],
        explanation:
          "An effusion alone does not mean tamponade. Diastolic collapse of the right heart chambers and a plethoric IVC show the effusion is limiting filling. A normal IVC that collapses makes tamponade unlikely.",
        keyFeature: { topic: "shock", n: 6 },
        source: "rush",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate definitive treatment in the emergency department?",
        options: [
          "Chest tube thoracostomy",
          "Furosemide 40 mg IV push",
          "Intubation and positive pressure ventilation",
          "Norepinephrine infusion alone",
          "Ultrasound guided pericardiocentesis",
        ],
        correct: 4,
        explanation:
          "Tamponade with shock needs drainage. Ultrasound guided pericardiocentesis is safe and effective, often with a catheter left in place. Diuretics and positive pressure ventilation reduce preload and can cause arrest. Vasopressors only buy time.",
        keyFeature: { topic: "shock", n: 5 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        prompt: "While the procedure is set up, what fluid therapy is appropriate?",
        accept: [
          { id: "bolus", text: "A modest isotonic crystalloid bolus of 250 to 500 mL to support preload", match: ["250", "500", "bolus", "crystalloid", "saline", "ringer", "fluid"] },
        ],
        unacceptable: [
          { text: "A diuretic such as furosemide", match: ["furosemide", "lasix", "diuretic"], dangerous: true },
          { text: "Fluid restriction", match: ["fluid restriction", "restrict fluid"] },
        ],
        explanation:
          "Tamponade is preload dependent. A modest fluid bolus may transiently raise filling pressure and cardiac output. Very large volumes add little and can worsen the effusion. Diuretics can cause collapse.",
        keyFeature: { topic: "shock", n: 5 },
        source: "rosen",
      },
    ],
    sources: [S.rosen, S.rush],
    ...META,
  },
];
