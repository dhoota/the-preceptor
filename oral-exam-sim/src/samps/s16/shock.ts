// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

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
  euroTrauma: { id: "euro-trauma-2023", citation: "Rossaint R, et al. The European guideline on management of major bleeding and coagulopathy following trauma. Sixth edition. Crit Care. 2023.", url: "https://doi.org/10.1186/s13054-023-04327-7" },
  agaCirrhosis: { id: "aga-cirrhosis-2019", citation: "O'Leary JG, Greenberg CS, Patton HM, Caldwell SH. AGA clinical practice update. Coagulation in cirrhosis. Gastroenterology. 2019.", url: "https://doi.org/10.1053/j.gastro.2019.03.070" },
  lossNeck: { id: "loss-neck-2025", citation: "Loss L, Henry R, White A, et al. Penetrating neck trauma. A comprehensive review. Trauma Surg Acute Care Open. 2025.", url: "https://doi.org/10.1136/tsaco-2024-001619" },
  sahaHd: { id: "saha-hd-2017", citation: "Saha M, Allon M. Diagnosis, treatment, and prevention of hemodialysis emergencies. Clin J Am Soc Nephrol. 2017.", url: "https://doi.org/10.2215/CJN.05260516" },
  nardil: { id: "nardil-pm", citation: "Searchlight Pharma Inc. Nardil (phenelzine sulfate tablets). Canadian product monograph. 2022." },
  sirajeeTss: { id: "sirajee-tss-2025", citation: "Sirajee R, Baykan A, Fraulin FOG, et al. Toxic shock syndrome as an unexpected complication in outpatient pediatric burn treatment. A chart review. Plast Surg (Oakv). 2025.", url: "https://doi.org/10.1177/22925503241249758" },
  hockstein: { id: "hockstein-lvad", citation: "Hockstein MA. Continuous-flow left ventricular assist devices: management in the emergency department. J Am Coll Emerg Physicians Open. 2020.", url: "https://doi.org/10.1002/emp2.12178" },
  vedachalam: { id: "vedachalam-lvad-2020", citation: "Vedachalam S, Balasubramanian G, Haas GJ, Krishna SG. Treatment of gastrointestinal bleeding in left ventricular assist devices. A comprehensive review. World J Gastroenterol. 2020.", url: "https://doi.org/10.3748/wjg.v26.i20.2550" },
  nacPcc: { id: "nac-pcc-2022", citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022 revision.", url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" },
  kentAconite: { id: "kent-aconite-2025", citation: "Kent JT, Sathya A, Juurlink DN, et al. Mass aconite poisoning from a mislabelled spice product. Clin Toxicol (Phila). 2025.", url: "https://doi.org/10.1080/15563650.2025.2526115" },
  coulsonAconite: { id: "coulson-aconite-2017", citation: "Coulson JM, Caparrotta TM, Thompson JP. The management of ventricular dysrhythmia in aconite poisoning. Clin Toxicol (Phila). 2017.", url: "https://doi.org/10.1080/15563650.2017.1291944" },
  easlCirrhosis: { id: "easl-cirrhosis-2018", citation: "European Association for the Study of the Liver. EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol. 2018.", url: "https://doi.org/10.1016/j.jhep.2018.03.024" },
  chapmanAuto: { id: "chapman-autotransfusion-2025", citation: "Chapman NG, Wineberg DL, et al. Autologous transfusion of hemothoraces in resuscitation after thoracic trauma. A narrative review. J Trauma Inj. 2025.", url: "https://doi.org/10.20408/jti.2025.0053" },
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

  /* 04 Trauma in a man with cirrhosis ----------------------------------- */
  {
    id: "shock-04",
    topic: "shock",
    alsoTopics: ["multiple-trauma"],
    title: "Man who fell down the basement stairs",
    stem:
      "A 61-year-old man is brought to the emergency department by ambulance 40 minutes after falling down a flight of basement stairs at home. He has alcohol-related cirrhosis with ascites and known esophageal varices. He takes nadolol 40 mg daily, spironolactone and lactulose. A liver clinic letter from last month records his pulse as 58/minute and his systolic pressure as 98 mmHg. He has right lower chest and upper abdominal pain. He is jaundiced and pale. He is oriented but slow to answer. There is a bruise over his right temple. His right lower ribs are tender. His abdomen is distended with shifting dullness.",
    vitals: { temperature: "36.0°C", pulse: "96/minute", resp: "24/minute", bp: "90/56 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "Why may his heart rate and blood pressure understate how unwell he is?",
        accept: [
          { id: "nadolol", text: "Nadolol blunts the rise in heart rate, so 96/minute is a large increase from his usual 58/minute", match: ["nadolol", "beta blocker", "beta blockade", "blunted heart rate", "blunts heart rate"] },
          { id: "baseline", text: "His usual BP is low, so a reading near baseline gives little warning and he has little reserve", match: ["baseline", "usual bp", "usual blood pressure", "low reserve", "little reserve", "relative hypotension"] },
          { id: "shockindex", text: "His shock index is above 1", match: ["shock index"] },
          { id: "hb", text: "Hemoglobin may not have fallen yet in early bleeding", match: ["hemoglobin", "haemoglobin", "hb"] },
          { id: "mental", text: "Slowed thinking may be blamed on encephalopathy rather than poor perfusion", match: ["encephalopathy", "mental status", "slow to answer"] },
        ],
        explanation:
          "His pulse of 96/minute is 38 above his usual 58/minute on nadolol, which limits how far his heart rate can rise. His BP of 90/56 mmHg is close to his low baseline, so the numbers look reassuring when they are not. The European trauma bleeding guideline advises judging hemorrhage from physiology, injury pattern and response to resuscitation, and using the shock index. His shock index is 96 divided by 90, about 1.1. It also warns that a first normal hemoglobin can mask early bleeding.",
        keyFeature: { topic: "shock", n: 1 },
        source: "euro-trauma-2023",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "How does his cirrhosis change your assessment of his injuries?",
        accept: [
          { id: "fast", text: "Free fluid on eFAST may be ascites, so it cannot confirm hemoperitoneum", match: ["ascites", "efast", "fast", "free fluid", "hemoperitoneum"] },
          { id: "cthead", text: "CT head, since his slowness may be a head injury rather than encephalopathy and he is likely coagulopathic", match: ["ct head", "head ct", "ct brain", "intracranial", "head injury", "subdural"] },
          { id: "coag", text: "Expect coagulopathy and low platelets, so check INR, platelets and fibrinogen early", match: ["coagulopathy", "inr", "platelet", "fibrinogen", "thrombocytopenia", "viscoelastic", "rotem", "teg"] },
          { id: "varices", text: "A variceal bleed is a possible second source", match: ["variceal", "varices", "gi bleed", "gastrointestinal bleed", "hematemesis", "melena"] },
          { id: "risk", text: "Higher risk of death, so a lower threshold for trauma team activation and ICU", match: ["trauma team", "icu", "intensive care", "mortality", "higher risk"] },
          { id: "etoh", text: "Alcohol withdrawal risk and thiamine", match: ["withdrawal", "thiamine"] },
        ],
        explanation:
          "An eFAST detects fluid, not what the fluid is, and he already has ascites, so free fluid does not prove bleeding and CT is needed once he can travel. His slowness may be hepatic encephalopathy, but he has a temple bruise and likely coagulopathy, so intracranial bleeding must be excluded. The AGA practice update notes that the INR in cirrhosis predicts bleeding poorly and suggests platelets above 50 x 10^9/L and fibrinogen above 1.2 g/L during active bleeding. His varices give him a second possible bleeding source.",
        keyFeature: { topic: "multiple-trauma", n: 4 },
        source: "aga-cirrhosis-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows three fractured right ribs and a 6 mm left subdural hematoma without midline shift. There is no solid organ injury, and the abdominal fluid is ascites. His wife says he has had 8 to 10 watery stools a day for 3 days since his lactulose dose was doubled. Hemoglobin 121 g/L, the same as last month. Creatinine 128 umol/L, up from 84 umol/L last month. A diagnostic paracentesis shows an ascitic neutrophil count of 90 x 10^6/L. His BP is 88/54 mmHg.",
        prompt: "Which of the following is the most appropriate fluid for him now?",
        options: [
          "Albumin 20% 1 g/kg IV",
          "Albumin 5% 500 mL IV",
          "Normal saline 1 L IV",
          "Red cells 2 units IV",
          "Saline 0.45% 1 L IV",
        ],
        correct: 2,
        explanation:
          "CT has found no bleeding and his hemoglobin is unchanged, so his hypotension and acute kidney injury come from diarrheal fluid loss. His creatinine is 1.5 times baseline but below 133 umol/L (1.5 mg/dL), which EASL calls AKI stage 1A. His ascitic neutrophil count is below 250 x 10^6/L, so he has no spontaneous bacterial peritonitis. The EASL cirrhosis guideline says volume replacement should follow the cause, and that patients with diarrhea or excessive diuresis should be treated with crystalloids. It keeps 20% albumin at 1 g/kg for AKI with no obvious cause, AKI above stage 1A, or infection, and he has none of these. The European trauma guideline starts 0.9% saline or a balanced crystalloid in hypotensive trauma and restricts colloids. Saline 0.45% is hypotonic, expands the plasma less and is a poor choice with a subdural hematoma. Red cells are for bleeding, which he does not have.",
        keyFeature: { topic: "shock", n: 3 },
        source: "easl-cirrhosis-2018",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "He is admitted to intensive care. Neurosurgery will manage the subdural hematoma without surgery.",
        prompt: "Which changes would you make to his medications, including pain relief for his ribs?",
        accept: [
          { id: "nadolol", text: "Hold nadolol while he is hypotensive with acute kidney injury", match: ["hold nadolol", "stop nadolol", "withhold nadolol", "discontinue nadolol", "no nadolol", "hold beta blocker", "stop beta blocker", "withhold beta blocker", "discontinue beta blocker"] },
          { id: "spiro", text: "Hold spironolactone", match: ["hold spironolactone", "stop spironolactone", "withhold spironolactone", "discontinue spironolactone", "no spironolactone", "hold diuretic", "stop diuretic", "withhold diuretic", "discontinue diuretic", "no diuretic"] },
          { id: "nsaid", text: "No NSAIDs for his rib pain", match: ["no nsaid", "avoid nsaid", "not nsaid", "nsaid contraindicated", "no ibuprofen", "avoid ibuprofen", "no ketorolac", "avoid ketorolac", "no naproxen", "avoid naproxen", "no anti inflammatory", "avoid anti inflammatory", "instead of nsaid", "rather than nsaid", "instead of an nsaid", "rather than an nsaid", "instead of ibuprofen", "rather than ibuprofen", "instead of ketorolac", "rather than ketorolac", "nsaid avoided"] },
          { id: "lactulose", text: "Lower the lactulose dose, which caused his diarrhea, rather than stopping it", match: ["reduce lactulose", "lower lactulose", "decrease lactulose", "less lactulose", "adjust lactulose", "titrate lactulose", "review lactulose"] },
        ],
        unacceptable: [
          { text: "An NSAID such as ibuprofen or ketorolac", match: ["give nsaid", "give ibuprofen", "give ketorolac", "give naproxen", "start nsaid", "start ibuprofen", "start ketorolac", "start naproxen", "prescribe nsaid", "prescribe ibuprofen", "prescribe ketorolac", "prescribe naproxen", "use nsaid", "use ibuprofen", "use ketorolac", "use naproxen", "ibuprofen 200", "ibuprofen 400", "ibuprofen 600", "ibuprofen 800", "ketorolac 10", "ketorolac 15", "ketorolac 30", "naproxen 250", "naproxen 500", "regular ibuprofen", "scheduled ibuprofen", "scheduled nsaid", "regular nsaid"] },
        ],
        explanation:
          "The EASL guideline says that when acute kidney injury develops in cirrhosis, diuretics should be stopped and beta blockers stopped, along with vasodilators, NSAIDs and other nephrotoxic drugs. It also advises stopping nonselective beta blockers such as nadolol when systolic BP falls below 90 mmHg or during bleeding, sepsis or acute kidney injury, and restarting them after recovery. His systolic of 88 mmHg and his rise in creatinine from 84 to 128 umol/L meet both. His diarrhea began when his lactulose was doubled, so the dose needs review.",
        keyFeature: { topic: "multiple-trauma", n: 4 },
        source: "easl-cirrhosis-2018",
      },
    ],
    sources: [S.euroTrauma, S.agaCirrhosis, S.easlCirrhosis],
    ...META,
    reviewed: false,
    version: 2,
  },
  /* 05 Stab wound above the clavicle ------------------------------------ */
  {
    id: "shock-05",
    topic: "shock",
    alsoTopics: ["multiple-trauma"],
    title: "Man stabbed outside a bar",
    stem:
      "You are working in a rural hospital in northwestern Ontario. The blood bank holds 6 units of group O red cells and 4 units of frozen plasma. Your trauma chest drain kits can be connected to a blood giving set. More blood, a surgeon and a transfer flight are at least 3 hours away. A 24-year-old man is brought in by ambulance 20 minutes after he was stabbed once just above the left clavicle. Paramedics have held a gauze pad on the wound, and bright red blood wells up whenever the pressure is eased. He is pale, anxious and speaking in full sentences. His trachea is midline and there is no expanding hematoma in the neck. Breath sounds are slightly reduced at the left apex. A full log roll finds no other wound. Both radial pulses are weak.",
    vitals: { temperature: "36.2°C", pulse: "134/minute", resp: "26/minute", bp: "82/50 mmHg", o2sat: "94% on a non rebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What bedside imaging would show whether he is also bleeding into his chest or pericardium?",
        accept: [
          { id: "thorax", text: "eFAST thoracic views for a left hemothorax or pneumothorax", match: ["hemothorax", "haemothorax", "pleural", "pneumothorax", "lung ultrasound", "thoracic ultrasound", "efast", "fast"] },
          { id: "cardiac", text: "Subxiphoid cardiac view for a pericardial effusion", match: ["pericardial", "subxiphoid", "subcostal", "cardiac view", "tamponade", "effusion"] },
          { id: "cxr", text: "Portable chest X-ray for hemothorax, pneumothorax or a widened mediastinum", match: ["chest x ray", "cxr", "chest xray", "chest film", "mediastinum"] },
        ],
        explanation:
          "A wound above the clavicle can reach the lung apex, the subclavian vessels and the mediastinum, so much of the bleeding may be hidden. The European trauma bleeding guideline recommends point-of-care ultrasound, including FAST, in thoracoabdominal injury to detect hemothorax, pneumothorax and hemopericardium. A portable chest X-ray adds the size of any hemothorax and the width of the mediastinum. CT is for a patient stable enough to leave the resuscitation room.",
        keyFeature: { topic: "shock", n: 6 },
        source: "euro-trauma-2023",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        update: "The eFAST shows a left pleural collection and no pericardial fluid. A left chest tube drains 1100 mL of blood, then 200 mL more over 15 minutes. All 6 units of red cells and the 4 units of plasma have been given, with tranexamic acid. His BP is 80/46 mmHg.",
        prompt: "How would you continue his volume replacement until more blood arrives?",
        accept: [
          { id: "auto", text: "Autotransfuse the blood drained from his chest through a filtered giving set, within 4 to 6 hours of drainage", match: ["autotransfuse", "autotransfusion", "auto transfuse", "auto transfusion", "autologous", "reinfuse", "re infuse", "reinfusion", "cell salvage", "return the drained blood", "return the chest tube blood", "transfuse the drained blood", "transfuse the chest tube blood", "transfuse the pleural blood", "transfuse the hemothorax", "chest tube blood back"] },
        ],
        unacceptable: [
          { text: "Another 2 L of crystalloid", match: ["2 l crystalloid", "2 l saline", "2l saline", "2l crystalloid", "2 litre", "2 liter"] },
        ],
        explanation:
          "His own blood is collecting in the drain while donor blood is hours away. A 2025 review of autotransfusion of hemothoraces supports returning drained pleural blood in unstable patients when donor blood is unobtainable or significantly delayed, once a meaningful volume has drained, and advises against it beyond 4 to 6 hours after drainage or with gut contamination, infection, malignancy or significant coagulopathy. Pleural blood carries oxygen but is depleted of clotting factors, so it bridges until donor products arrive. The European trauma bleeding guideline also suggests cell salvage for severe bleeding from the thoracic cavity. Large volumes of crystalloid carry no oxygen and dilute clotting factors further.",
        keyFeature: { topic: "shock", n: 3 },
        source: "chapman-autotransfusion-2025",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "900 mL of drained blood has been returned through a filter. The flight is still 60 minutes away. His BP is 66/38 mmHg and pulse 142/minute, and he is confused. Ionized calcium 1.16 mmol/L. Temperature 36.4°C.",
        prompt: "What would you add to support his blood pressure until he reaches a surgeon?",
        accept: [
          { id: "ne", text: "A norepinephrine infusion, titrated to the minimum pressure target", match: ["norepinephrine", "noradrenaline", "levophed", "vasopressor", "pressor", "vasopressin"] },
        ],
        unacceptable: [
          { text: "Another 2 L of crystalloid instead of a vasopressor", match: ["2 l crystalloid", "2 l saline", "2l saline", "2l crystalloid", "2 litre", "2 liter"] },
        ],
        explanation:
          "He has had every unit of blood available and his own drained blood, and his pressure is still falling. The European trauma bleeding guideline recommends noradrenaline in addition to fluids when a restricted volume strategy does not reach the target pressure, and dobutamine only when there is myocardial dysfunction. It notes that retrospective studies link vasopressors in trauma with harm, so the infusion is a bridge to surgical control, not a substitute for blood. His ionized calcium and temperature are normal, so neither explains the hypotension.",
        keyFeature: { topic: "shock", n: 8 },
        source: "euro-trauma-2023",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What would you do to control bleeding from the wound until he reaches a surgeon?",
        accept: [
          { id: "foley", text: "Insert a Foley catheter into the wound track, inflate the balloon and clamp it", match: ["foley", "balloon", "catheter tamponade"] },
          { id: "pressure", text: "Firm direct digital pressure on the wound", match: ["direct pressure", "digital pressure", "firm pressure", "manual pressure", "hold pressure", "finger pressure"] },
          { id: "pack", text: "Pack the wound with hemostatic gauze", match: ["hemostatic gauze", "haemostatic gauze", "hemostatic dressing", "haemostatic dressing", "hemostatic agent", "pack the wound", "pack wound", "packing the wound", "wound packing", "gauze packing", "pack with gauze", "combat gauze", "quikclot"] },
          { id: "or", text: "Urgent transfer to a vascular or thoracic surgeon for operative control", match: ["transfer", "operating room", "operating theatre", "vascular surgeon", "thoracic surgeon", "vascular surgery", "thoracic surgery", "trauma surgeon", "surgical control"] },
        ],
        explanation:
          "Pressure alone is failing, and a tourniquet cannot be placed above the clavicle. The penetrating neck trauma review describes introducing a Foley catheter into the wound, inflating and clamping the balloon to tamponade bleeding during transfer to the operating room, and packing hemostatic dressing into the wound. It treats severe active bleeding and shock not responding to fluids as hard signs that need the operating room. Firm pressure continues until one of these is in place.",
        keyFeature: { topic: "multiple-trauma", n: 1 },
        source: "loss-neck-2025",
      },
    ],
    sources: [S.euroTrauma, S.lossNeck, S.chapmanAuto],
    ...META,
    reviewed: false,
    version: 2,
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

  /* 07 Anaphylaxis during hemodialysis ---------------------------------- */
  {
    id: "shock-07",
    topic: "shock",
    alsoTopics: ["anaphylaxis"],
    title: "Itching at the start of dialysis",
    stem:
      "You are working in a community hospital and are called to its hemodialysis unit. A 67-year-old man with diabetic kidney disease became itchy and short of breath and said his throat felt tight 8 minutes after his dialysis run started. The unit began using a new brand of dialyzer this week. He has had type 2 diabetes for 30 years with peripheral neuropathy and gastroparesis. He takes insulin glargine and amlodipine. His systolic pressure before dialysis today was 164 mmHg. Blood is still circulating through the machine. He has hives on his chest, swollen lips and wheeze.",
    vitals: { pulse: "82/minute", resp: "28/minute", bp: "84/48 mmHg", o2sat: "90% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage the dialysis circuit now?",
        options: [
          "Clamp and disconnect without returning blood",
          "Continue at a slower blood pump speed",
          "Return the blood in the circuit, then disconnect",
          "Stop ultrafiltration and continue the dialysis run",
          "Switch to a fresh dialyzer and continue",
        ],
        correct: 0,
        explanation:
          "Hives, lip swelling, wheeze and hypotension minutes into a run with a new dialyzer are anaphylaxis to the dialyzer or its sterilant. The review of hemodialysis emergencies advises not returning the blood in the circuit when a hypersensitivity reaction is suspected, because this may worsen the reaction. Continuing at a slower speed or with ultrafiltration stopped keeps him exposed to the allergen. A fresh dialyzer of the same type carries the same allergen. Epinephrine IM is given at the same time.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "saha-hd-2017",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        update: "Dialysis is stopped without returning the blood. He has had epinephrine 0.5 mg IM twice, 5 minutes apart, and 1 L of normal saline. His BP is 76/40 mmHg and his pulse 86/minute.",
        prompt: "What vasoactive infusion would you start now?",
        accept: [
          { id: "epi", text: "Epinephrine infusion by pump, titrated to BP", match: ["epinephrine infusion", "epinephrine drip", "epi infusion", "epi drip", "adrenaline infusion", "adrenaline drip"] },
        ],
        unacceptable: [{ text: "Undiluted epinephrine 1 mg IV push", match: ["1 mg iv push", "epinephrine 1 mg iv", "epinephrine 1 mg bolus"], dangerous: true }],
        explanation:
          "He stays hypotensive after two IM doses of epinephrine and a litre of fluid, so his anaphylaxis is refractory. The WAO guidance describes low-dose epinephrine infusions by pump for reactions refractory to IM epinephrine, given in monitored patients by staff experienced in diluting the drug. It does not recommend IV epinephrine for initial treatment. Glucagon is suggested mainly for patients taking beta blockers, and he takes none.",
        keyFeature: { topic: "shock", n: 7 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "Why could his shock be missed or blamed on the dialysis itself?",
        accept: [
          { id: "idh", text: "Hypotension during dialysis is common and is often put down to fluid removal", match: ["intradialytic", "dialysis hypotension", "fluid removal", "ultrafiltration", "common during dialysis"] },
          { id: "hr", text: "Diabetic autonomic neuropathy blunts the heart rate response", match: ["autonomic", "neuropathy", "no tachycardia", "blunted heart rate", "heart rate"] },
          { id: "baseline", text: "His usual BP is high, and a fall of more than 30% from baseline is hypotension even if the number looks modest", match: ["baseline", "usual bp", "usual blood pressure", "30%", "relative hypotension"] },
          { id: "early", text: "It began minutes into the run, before much fluid could have been removed", match: ["early in the run", "minutes into", "timing", "start of dialysis", "start of the run"] },
        ],
        explanation:
          "Low BP during dialysis is often blamed on ultrafiltration, but 8 minutes into a run little fluid has been removed. A pulse of 82 to 86/minute is slow for his pressure, which fits the autonomic neuropathy of long-standing diabetes. WAO defines hypotension in adults as a systolic BP below 90 mmHg or a fall of more than 30% from the person's baseline. His systolic has fallen from 164 to 84 mmHg, a fall of 49%.",
        keyFeature: { topic: "shock", n: 1 },
        source: "wao",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update: "He recovers and is observed overnight in hospital.",
        prompt: "What must be arranged before his next dialysis session and at discharge?",
        accept: [
          { id: "unit", text: "Tell the dialysis unit and nephrologist so the next run uses a different dialyzer, steam or gamma sterilized and well primed", match: ["different dialyzer", "change dialyzer", "switch dialyzer", "another dialyzer", "steam", "gamma", "dialysis unit", "nephrologist", "nephrology", "prime"] },
          { id: "record", text: "Record the reaction as an allergy in his chart and dialysis record", match: ["allergy list", "document", "record", "chart", "alert"] },
          { id: "allergist", text: "Refer to an allergist to identify the cause", match: ["allergist", "allergy referral", "allergy testing", "immunologist"] },
          { id: "autoinj", text: "Prescribe an epinephrine autoinjector and teach its use", match: ["autoinjector", "auto injector", "epipen", "allerject", "emerade"] },
          { id: "return", text: "Warn about recurrent symptoms and when to return", match: ["biphasic", "return", "come back"] },
        ],
        unacceptable: [{ text: "Resume dialysis with the same dialyzer", match: ["same dialyzer"] }],
        explanation:
          "The trigger sits in the dialysis unit, so preventing re-exposure matters most. The hemodialysis emergencies review names ethylene oxide sterilant as a frequent cause of these reactions and advises priming the dialyzer well and switching to a steam or gamma sterilized dialyzer. It notes that a dialyzer with a different housing compound may be needed and that an allergist can arrange further testing. The reaction must be recorded where every dialysis nurse will see it.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "saha-hd-2017",
      },
    ],
    sources: [S.wao, S.sahaHd],
    ...META,
    reviewed: false,
    version: 2,
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

  /* 09 Septic shock on an MAO inhibitor --------------------------------- */
  {
    id: "shock-09",
    topic: "shock",
    title: "Drowsy woman with a cough and fever",
    stem:
      "A 63-year-old woman is brought to the emergency department by her husband with 3 days of cough, fever and increasing breathlessness. Today she is drowsy. She has had treatment-resistant depression for 20 years and has taken phenelzine 30 mg twice daily for 8 years. She takes no other medications. Her lips are dry. There are crackles and bronchial breathing at the right base. Her hands are warm and her capillary refill is 3 seconds. Lactate is 4.8 mmol/L.",
    vitals: { temperature: "39.2°C", pulse: "118/minute", resp: "30/minute", bp: "78/42 mmHg", o2sat: "89% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What bedside tests would help confirm the type and source of her shock?",
        accept: [
          { id: "echo", text: "Cardiac POCUS for LV and RV function and pericardial fluid", match: ["echo", "echocardiogram", "cardiac ultrasound", "cardiac pocus", "pocus", "lv function"] },
          { id: "ivc", text: "IVC size and respiratory variation", match: ["ivc", "inferior vena cava"] },
          { id: "lung", text: "Lung ultrasound or chest X-ray for consolidation", match: ["lung ultrasound", "chest x ray", "cxr", "chest xray", "consolidation"] },
          { id: "lactate", text: "Repeat lactate to track the response", match: ["lactate"] },
          { id: "cultures", text: "Blood cultures before antibiotics", match: ["blood culture", "culture"] },
          { id: "ecg", text: "ECG", match: ["ecg", "electrocardiogram"] },
        ],
        explanation:
          "Fever, warm hands, a right basal consolidation and a lactate of 4.8 mmol/L fit septic shock from pneumonia. Bedside ultrasound looks for a failing ventricle, pericardial fluid or a small collapsing IVC, each of which would change fluid and drug choices. A chest X-ray or lung ultrasound confirms the source, and blood cultures are taken before antibiotics when this causes no delay. The Surviving Sepsis Campaign suggests guiding resuscitation by lactate and capillary refill and by dynamic measures rather than examination alone.",
        keyFeature: { topic: "shock", n: 6 },
        source: "ssc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial fluid resuscitation for her?",
        options: [
          "Albumin 25% 100 mL, then reassess",
          "Balanced crystalloid 30 mL/kg in boluses",
          "Dextrose 5% in water 2 L over 1 hour",
          "Normal saline 250 mL, then start pressors",
          "Plasma 15 mL/kg, then reassess",
        ],
        correct: 1,
        explanation:
          "The Surviving Sepsis Campaign suggests at least 30 mL/kg of IV crystalloid within the first 3 hours for sepsis-induced hypoperfusion, and balanced crystalloids rather than saline. For her 70 kg that is about 2.1 L, given in boluses with reassessment. A single 250 mL bolus is too little for a lactate of 4.8 mmol/L. Dextrose 5% in water does not stay in the circulation. Albumin is suggested only after large crystalloid volumes, and plasma is not a resuscitation fluid for sepsis.",
        keyFeature: { topic: "shock", n: 3 },
        source: "ssc",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "After 2 L of Ringer's lactate her BP is 80/44 mmHg.",
        prompt: "Which vasopressor would you start, and how would you start it given her medication?",
        accept: [
          { id: "ne", text: "Norepinephrine as a dilute infusion, started at a low dose and titrated in small steps with close BP monitoring", match: ["norepinephrine low", "norepinephrine dilute", "norepinephrine diluted", "norepinephrine titrate", "norepinephrine titrated", "norepinephrine small", "norepinephrine slow", "norepinephrine slowly", "norepinephrine cautious", "norepinephrine cautiously", "norepinephrine careful", "norepinephrine carefully", "norepinephrine reduced", "norepinephrine lower", "norepinephrine 0.01", "norepinephrine 0.02", "noradrenaline low", "noradrenaline dilute", "noradrenaline titrate", "noradrenaline titrated", "noradrenaline small", "noradrenaline slow", "noradrenaline cautious", "noradrenaline careful", "levophed low", "levophed titrate", "levophed titrated", "levophed dilute"] },
        ],
        unacceptable: [{ text: "Dopamine", match: ["dopamine"] }],
        explanation:
          "Norepinephrine is the first-line vasopressor in septic shock. The Surviving Sepsis Campaign recommends it over other vasopressors, including dopamine. Phenelzine is a monoamine oxidase inhibitor. Its Canadian product monograph says patients taking it should not be given sympathomimetics, and it names dopamine, epinephrine and norepinephrine. For hypotension and vascular collapse, its overdose section advises IV fluids and, if needed, a dilute pressor infusion titrated to BP, and it warns that adrenergic agents may produce a markedly increased pressor response. Her shock needs a vasopressor, so norepinephrine is started low and increased in small steps with frequent or arterial BP readings. Naming norepinephrine without saying how it is started does not answer the question.",
        keyFeature: { topic: "shock", n: 7 },
        source: "nardil-pm",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "On norepinephrine 0.08 mcg/kg/min her BP is 94/52 mmHg. She is coughing and has chest pain with breathing.",
        prompt: "What other treatment decisions does her medication and septic shock require now?",
        accept: [
          { id: "abx", text: "Broad-spectrum IV antibiotics for severe pneumonia within 1 hour", match: ["antibiotic", "antimicrobial", "ceftriaxone", "azithromycin", "piperacillin", "levofloxacin", "moxifloxacin"] },
          { id: "hold", text: "Hold phenelzine while she is hypotensive, with psychiatry advice on restarting", match: ["hold phenelzine", "stop phenelzine", "withhold phenelzine", "hold maoi", "stop maoi", "hold the maoi"] },
          { id: "meperidine", text: "Avoid meperidine for pain and dextromethorphan for cough", match: ["avoid meperidine", "no meperidine", "meperidine contraindicated", "avoid pethidine", "no pethidine", "pethidine contraindicated", "avoid dextromethorphan", "no dextromethorphan", "dextromethorphan contraindicated", "avoid serotonergic", "no serotonergic", "drug interaction"] },
        ],
        explanation:
          "Antimicrobials are due immediately, within 1 hour of recognizing septic shock. The phenelzine monograph notes that the drug causes postural hypotension that improves when it is stopped or the dose reduced, so holding it while she is in shock is reasonable, with psychiatric input about restarting. It warns that a single dose of meperidine has caused excitation, hyperpyrexia, circulatory collapse and death in patients on MAO inhibitors, and that dextromethorphan can cause similar reactions, so both are avoided for her pleuritic pain and cough.",
        keyFeature: { topic: "shock", n: 8 },
        source: "nardil-pm",
      },
    ],
    sources: [S.ssc, S.nardil],
    ...META,
    reviewed: false,
    version: 2,
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

  /* 11 Poisoning from a herbal root decoction -------------------------- */
  {
    id: "shock-11",
    topic: "shock",
    alsoTopics: ["tox"],
    title: "Man who collapsed after a home remedy",
    stem:
      "A 58-year-old man is brought to the emergency department by ambulance 90 minutes after drinking a herbal decoction for knee pain. A relative abroad sent him the dried root, and he boiled a larger amount than he was told to use. Within 30 minutes his lips and tongue tingled, the numbness spread to his hands and feet, and he vomited several times. He then felt his heart racing and collapsed briefly. His wife tasted a spoonful and now has tingling lips but is otherwise well. He has hypertension treated with ramipril. He is pale, sweaty and alert. The monitor shows frequent multifocal ventricular ectopic beats and short runs of polymorphic ventricular tachycardia. Potassium 3.9 mmol/L, magnesium 0.85 mmol/L, glucose 7.4 mmol/L.",
    vitals: { temperature: "36.4°C", pulse: "132/minute irregular", resp: "22/minute", bp: "74/42 mmHg", o2sat: "96% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "Which features point to a toxic cause of his shock?",
        accept: [
          { id: "ingestion", text: "A herbal root decoction taken shortly before the symptoms began", match: ["herbal", "decoction", "root", "remedy", "ingestion", "aconite"] },
          { id: "paresthesia", text: "Perioral and limb paresthesia", match: ["tingling", "paresthesia", "paraesthesia", "numbness", "perioral"] },
          { id: "vomiting", text: "Early repeated vomiting", match: ["vomiting", "vomited", "nausea"] },
          { id: "va", text: "Ventricular ectopy and polymorphic VT without known heart disease", match: ["ventricular ectopy", "ectopic", "polymorphic", "ventricular tachycardia", "arrhythmia", "dysrhythmia"] },
          { id: "wife", text: "His wife has similar symptoms after a small taste", match: ["wife", "others affected", "second person"] },
          { id: "lytes", text: "Normal potassium and magnesium, so no metabolic cause for the arrhythmia", match: ["normal potassium", "normal electrolytes", "normal magnesium"] },
        ],
        explanation:
          "Tingling lips and limbs, vomiting and ventricular arrhythmias soon after a herbal root preparation point to aconite poisoning. In a Toronto outbreak caused by aconite root sold as a mislabelled spice, 91% of patients had perioral paresthesia, 64% had nausea, vomiting or abdominal pain, and 73% developed refractory ventricular dysrhythmias. His wife's symptoms after a small taste point to a shared toxin. His normal potassium and magnesium argue against a metabolic cause of the arrhythmia.",
        keyFeature: { topic: "shock", n: 5 },
        source: "kent-aconite-2025",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        update: "He develops sustained polymorphic ventricular tachycardia with a pulse, and his BP falls to 68/38 mmHg. Two synchronized shocks do not restore sinus rhythm.",
        prompt: "Which antiarrhythmic drug would you give now?",
        accept: [
          { id: "amio", text: "Amiodarone IV", match: ["amiodarone"] },
          { id: "flec", text: "Flecainide, where it can be given", match: ["flecainide"] },
          { id: "proc", text: "Procainamide IV", match: ["procainamide"] },
        ],
        explanation:
          "Aconite alkaloids hold cardiac sodium channels in the activated state, which drives ventricular automaticity. In the review of 65 case reports, cardioversion restored sinus rhythm in only 5 of 30 attempts. Flecainide or amiodarone was more often followed by a return to sinus rhythm than lidocaine or cardioversion, though case reports cannot prove cause, and procainamide was followed by success in 2 of 2 cases. Amiodarone is the one most emergency departments can give IV at once.",
        keyFeature: { topic: "tox", n: 4 },
        source: "coulson-aconite-2017",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What other treatments would you start for his shock and arrhythmia?",
        accept: [
          { id: "bicarb", text: "Sodium bicarbonate infusion", match: ["bicarbonate", "bicarb", "nahco3"] },
          { id: "pressor", text: "Norepinephrine infusion for hypotension", match: ["norepinephrine", "noradrenaline", "vasopressor", "epinephrine", "pressor"] },
          { id: "mg", text: "Magnesium sulfate IV", match: ["magnesium sulfate", "magnesium sulphate", "mgso4", "iv magnesium", "magnesium iv", "give magnesium", "magnesium 2 g", "magnesium bolus", "magnesium infusion"] },
          { id: "airway", text: "Prepare for intubation and ventilation", match: ["intubate", "intubation", "ventilation", "airway"] },
          { id: "ecmo", text: "Early contact with a centre that can provide ECMO or cardiopulmonary bypass", match: ["ecmo", "bypass", "extracorporeal"] },
          { id: "poison", text: "Poison centre consultation, which also alerts public health", match: ["poison centre", "poison center", "public health", "toxicology", "toxicologist"] },
        ],
        explanation:
          "In the Toronto outbreak, refractory ventricular dysrhythmias were managed with infusions of sodium bicarbonate, amiodarone and vasopressors, and two patients needed mechanical ventilation for 48 hours. No patient died. The poison centre and public health traced the source to a mislabelled imported spice, which matters here because his wife is also affected and the remaining root could harm others. A centre able to provide ECMO or cardiopulmonary bypass should be contacted early, before he arrests.",
        keyFeature: { topic: "shock", n: 8 },
        source: "kent-aconite-2025",
      },
      {
        id: "q4",
        kind: "menu",
        select: 1,
        update: "Twenty minutes later he goes into ventricular fibrillation. After three shocks, epinephrine and amiodarone, he remains in ventricular fibrillation. The nearest ECMO centre is 3 hours away by air.",
        prompt: "Which of the following is the most appropriate next step for him?",
        options: [
          "Calcium chloride 1 g IV",
          "Digoxin immune Fab 10 vials IV",
          "Hemodialysis to remove the toxin",
          "Insert a transvenous pacing wire",
          "Naloxone 2 mg IV push",
          "Physostigmine 1 mg IV",
          "Prolonged high-quality CPR",
          "Stop resuscitation at 20 minutes",
        ],
        correct: [6],
        explanation:
          "In the review of aconite dysrhythmias, prolonged cardiopulmonary resuscitation was followed by a return to sinus rhythm in 9 of 15 patients. The authors call prolonged CPR a time-buying strategy that lets the body excrete the alkaloids, and bypass is not within reach for him. Stopping at 20 minutes abandons a patient who may recover. Digoxin immune Fab treats cardiac glycoside toxicity, not aconite. Calcium, naloxone and physostigmine treat calcium channel blocker, opioid and anticholinergic toxicity. Hemodialysis cannot be run during cardiac arrest, and pacing does not treat ventricular fibrillation.",
        keyFeature: { topic: "tox", n: 4 },
        source: "coulson-aconite-2017",
      },
    ],
    sources: [S.kentAconite, S.coulsonAconite],
    ...META,
    reviewed: false,
    version: 2,
  },
  /* 12 Toxic shock syndrome after a minor scald ------------------------- */
  {
    id: "shock-12",
    topic: "shock",
    alsoTopics: ["pediatric-fever"],
    title: "Toddler with a healing scald who is now unwell",
    stem:
      "A 2-year-old boy is brought to the emergency department by his mother with fever and vomiting since last night and watery diarrhea this morning. Four days ago he pulled a cup of hot tea onto his left forearm. A walk-in clinic dressed a partial thickness scald of about 2% of his body surface and arranged burn clinic follow-up. Today he was irritable and is now drowsy. He has had no wet diaper for 10 hours. There is a faint red rash over his trunk. The dressing is clean and dry. His hands and feet are warm and flushed, his pulses are bounding and his capillary refill is 1 second.",
    vitals: { temperature: "39.8°C", pulse: "176/minute", resp: "40/minute", bp: "80/34 mmHg", o2sat: "96% on room air", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "Which findings show that he is already in shock?",
        accept: [
          { id: "hr", text: "Tachycardia of 176/minute", match: ["tachycardia", "heart rate", "pulse rate", "176"] },
          { id: "mental", text: "Irritability, then drowsiness", match: ["drowsy", "drowsiness", "irritable", "irritability", "lethargy", "lethargic", "mental status", "altered"] },
          { id: "urine", text: "No wet diaper for 10 hours", match: ["no wet diaper", "no urine", "low urine", "reduced urine", "decreased urine", "urine output", "oliguria"] },
          { id: "diastolic", text: "Low diastolic pressure with a wide pulse pressure", match: ["diastolic", "pulse pressure"] },
          { id: "warm", text: "Flash capillary refill and bounding pulses of warm shock", match: ["flash", "bounding", "warm shock", "capillary refill"] },
          { id: "rr", text: "Tachypnea", match: ["tachypnea", "respiratory rate", "breathing fast"] },
        ],
        explanation:
          "Children keep their systolic pressure until late, so a systolic of 80 mmHg does not exclude shock. His heart rate of 176/minute, drowsiness and no urine for 10 hours show poor organ perfusion. The very low diastolic pressure, bounding pulses and flash capillary refill describe warm, vasodilated shock. The SSC pediatric guideline lists heart rate, blood pressure, capillary refill, level of consciousness and urine output as the clinical markers used to judge cardiac output.",
        keyFeature: { topic: "shock", n: 1 },
        source: "ssc-peds",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "How would you give his initial fluid resuscitation?",
        accept: [
          { id: "bolus", text: "Crystalloid boluses of 10 to 20 mL/kg, 130 to 260 mL, pushed rapidly", match: ["10 ml/kg", "20 ml/kg", "130 ml", "260 ml", "bolus"] },
          { id: "reassess", text: "Reassess after each bolus for perfusion, liver size and crackles", match: ["reassess", "after each bolus", "liver", "crackles", "hepatomegaly", "fluid overload"] },
          { id: "total", text: "Up to 40 to 60 mL/kg in the first hour, stopping if fluid overload appears", match: ["40 ml/kg", "60 ml/kg", "520 ml", "780 ml", "first hour"] },
          { id: "type", text: "A balanced crystalloid such as Ringer's lactate", match: ["ringer", "balanced", "plasma lyte", "crystalloid"] },
          { id: "access", text: "Intraosseous access if an IV is not placed quickly", match: ["intraosseous", "second access"] },
        ],
        explanation:
          "The SSC pediatric guideline suggests up to 40 to 60 mL/kg in 10 to 20 mL/kg boluses over the first hour where intensive care is available, titrated to markers of cardiac output and stopped if fluid overload develops. For 13 kg a bolus is 130 to 260 mL and the first-hour limit is 520 to 780 mL. It suggests balanced crystalloids rather than 0.9% saline. Intraosseous access is quick when a vein cannot be found.",
        keyFeature: { topic: "shock", n: 4 },
        source: "ssc-peds",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "Which antibiotics would you start within the hour?",
        accept: [
          { id: "clinda", text: "Clindamycin IV to suppress toxin production", match: ["clindamycin"] },
          { id: "vanc", text: "Vancomycin IV to cover MRSA", match: ["vancomycin"] },
          { id: "betalactam", text: "A beta-lactam such as ceftriaxone, cefazolin or cloxacillin", match: ["ceftriaxone", "cefazolin", "cloxacillin", "cefotaxime", "piperacillin", "beta lactam"] },
        ],
        explanation:
          "A small scald followed within days by fever, vomiting, diarrhea, rash and shock is toxic shock syndrome until shown otherwise. The SSC pediatric guideline recommends antimicrobials within 1 hour of recognizing septic shock, and clindamycin as part of empiric treatment when toxic shock is suspected, to limit toxin production. Vancomycin covers MRSA. A beta-lactam such as ceftriaxone completes broad coverage until cultures return.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "ssc-peds",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 60 mL/kg of Ringer's lactate his BP is 70/28 mmHg. His hands stay warm with bounding pulses. His liver edge is now 2 cm below the costal margin.",
        prompt: "Which of the following vasoactive infusions is most appropriate to start first for him?",
        options: [
          "Dobutamine",
          "Dopamine",
          "Milrinone",
          "Norepinephrine",
          "Vasopressin",
        ],
        correct: 3,
        explanation:
          "He has fluid-refractory shock, and his enlarging liver means more fluid is unwise. The SSC pediatric guideline suggests epinephrine or norepinephrine rather than dopamine, chosen by the child's physiology. Warm hands, bounding pulses and a very low diastolic pressure show low vascular tone, which norepinephrine treats. Dobutamine and milrinone dilate vessels and can lower his pressure further. Vasopressin is suggested only as an addition in children needing high-dose catecholamines.",
        keyFeature: { topic: "shock", n: 7 },
        source: "ssc-peds",
      },
      {
        id: "q5",
        kind: "short",
        required: 2,
        prompt: "What other treatments would you arrange for the likely cause of his shock?",
        accept: [
          { id: "wound", text: "Take down the dressing, inspect and swab the burn, and clean or debride it", match: ["remove the dressing", "remove dressing", "take down the dressing", "wound culture", "swab", "debride", "debridement", "clean the wound", "wound care"] },
          { id: "ivig", text: "IV immune globulin if shock persists", match: ["ivig", "immune globulin", "immunoglobulin"] },
          { id: "picu", text: "PICU admission and burn team consultation", match: ["picu", "intensive care", "burn team", "burn centre", "burn center", "plastic surgery"] },
          { id: "cultures", text: "Blood cultures", match: ["blood culture"] },
        ],
        explanation:
          "The burn is the likely source even though the dressing looks clean, so it is taken down, inspected, swabbed and cleaned. In a Calgary series of toxic shock after minor pediatric burns, children were 12 to 36 months old with 1% to 3% scald or contact burns, and they became ill 1 to 6 days after injury with vomiting, fever and then hypotension. Four of the six needed intensive care, two received IV immune globulin, and wound cultures grew Staphylococcus aureus in three.",
        keyFeature: { topic: "shock", n: 8 },
        source: "sirajee-tss-2025",
      },
    ],
    sources: [S.sscPeds, S.sirajeeTss],
    ...META,
    reviewed: false,
    version: 2,
  },

  /* 13 GI bleeding with a ventricular assist device --------------------- */
  {
    id: "shock-13",
    topic: "shock",
    alsoTopics: ["gi-bleed"],
    title: "Man with a heart pump who nearly fainted",
    stem:
      "A 66-year-old man is brought to the emergency department by his wife because he nearly fainted twice today. He has passed black stools for 2 days. A left ventricular assist device was implanted 14 months ago for ischemic cardiomyopathy. He takes warfarin with a target INR of 2 to 3, and ASA 81 mg daily. His pump controller gave two low flow alarms this morning. The pump hum is audible. No radial pulse can be felt and the automated cuff gives no reading. The monitor shows sinus tachycardia at 112/minute. He is pale, sweaty and slow to answer. INR 3.4. Hemoglobin 64 g/L, down from 112 g/L a month ago.",
    vitals: { temperature: "36.4°C", resp: "24/minute", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "How would you judge whether he is in shock when no pulse or cuff pressure can be measured?",
        accept: [
          { id: "map", text: "Doppler or return-to-flow MAP with a manual cuff", match: ["doppler", "return to flow", "manual cuff", "map", "mean arterial"] },
          { id: "alarms", text: "Pump controller readings, where low flow alarms suggest low preload", match: ["low flow", "alarm", "controller", "pump flow", "pulsatility"] },
          { id: "mental", text: "Mental status, sweating and general appearance", match: ["mental status", "confusion", "slow to answer", "sweat", "sweaty", "diaphoresis", "appearance"] },
          { id: "hr", text: "Heart rate on the monitor", match: ["tachycardia", "heart rate"] },
          { id: "lactate", text: "Lactate", match: ["lactate", "lactic"] },
          { id: "urine", text: "Urine output", match: ["urine"] },
        ],
        explanation:
          "Continuous-flow pumps leave little or no pulse, so an absent pulse and a failed automated cuff are expected even in a well patient. The ED review of LVAD care says noninvasive BP and pulse oximetry are unreliable and uses a manual cuff return-to-flow reading to estimate MAP. It lists mental status, hypotension, excessive tachycardia, sweating and general appearance as clues to hypoperfusion, and notes that device alarms may give the first warning. His confusion, sweating, pulse of 112/minute and low flow alarms mean shock.",
        keyFeature: { topic: "shock", n: 1 },
        source: "hockstein-lvad",
      },
      {
        id: "q2",
        kind: "single",
        update: "A manual cuff with Doppler gives a MAP of 56 mmHg. His VAD coordinator agrees with starting resuscitation.",
        prompt: "Which of the following is the most appropriate first resuscitation for him?",
        options: [
          "Crystalloid 2 L rapid bolus, then reassess",
          "Plasma 4 units before any red cells",
          "Platelets because he takes ASA",
          "Red cells now, reassessing flow after each unit",
          "Red cells only if hemoglobin falls below 60 g/L",
        ],
        correct: 3,
        explanation:
          "He has hemorrhagic shock with a hemoglobin of 64 g/L and a MAP of 56 mmHg, so he needs red cells now. The review of GI bleeding with LVADs describes transfusion to a hemoglobin of 70 to 90 g/L and stopping antiplatelet and anticoagulant drugs. Giving blood a unit at a time while watching pump flow avoids overloading a right ventricle that may be weak after LVAD implantation. A 2 L crystalloid bolus carries no oxygen. The review prefers PCC to plasma because plasma needs crossmatch and thawing and adds volume, and platelets do not replace lost red cells.",
        keyFeature: { topic: "gi-bleed", n: 5 },
        source: "vedachalam-lvad-2020",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What would you give to reverse his warfarin, with the dose?",
        accept: [
          { id: "pcc", text: "Four-factor PCC 2000 IU IV (25 IU/kg for an INR of 3.4), with IV vitamin K", match: ["pcc 2000", "pcc 2 000", "pcc 25", "prothrombin complex 2000", "prothrombin complex 2 000", "prothrombin complex 25", "octaplex 2000", "octaplex 25", "beriplex 2000", "beriplex 25"] },
        ],
        unacceptable: [
          { text: "Plasma as the first choice", match: ["plasma", "ffp"] },
          { text: "Idarucizumab or andexanet", match: ["idarucizumab", "praxbind", "andexanet"] },
        ],
        explanation:
          "He has life-threatening bleeding on warfarin, which the NAC recommendations list as an indication for PCC. Their sample dosing gives 2000 IU for an INR of 3 to 5, or 25 IU/kg for an INR of 2 to under 4, which is also 2000 IU for his 80 kg. IV vitamin K is given at the same time, because the effect of PCC on the INR lasts about 6 hours. Reversal in an LVAD raises the risk of pump thrombosis, so his VAD team shares the plan, but a MAP of 56 mmHg with ongoing bleeding justifies reversal now.",
        keyFeature: { topic: "shock", n: 8 },
        source: "nac-pcc-2022",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "After 3 units of red cells and PCC his Doppler MAP is 72 mmHg.",
        prompt: "What further steps would find and treat his bleeding source?",
        accept: [
          { id: "egd", text: "Upper endoscopy first, as upper GI sources are most common", match: ["endoscopy", "egd", "gastroscopy", "scope", "gastroenterology", "gastroenterologist"] },
          { id: "colon", text: "Colonoscopy", match: ["colonoscopy"] },
          { id: "smallbowel", text: "Push enteroscopy or capsule endoscopy for small bowel angiodysplasia if these are negative", match: ["capsule", "enteroscopy", "small bowel"] },
          { id: "hold", text: "Hold warfarin and ASA, with the VAD team deciding when to restart", match: ["hold asa", "stop asa", "hold aspirin", "stop aspirin", "hold warfarin", "stop warfarin", "hold anticoagulation", "hold anticoagulant", "hold antiplatelet"] },
          { id: "octreotide", text: "Octreotide for recurrent angiodysplasia bleeding", match: ["octreotide"] },
          { id: "vad", text: "VAD team review of pump speed", match: ["vad team", "vad coordinator", "heart failure team", "pump speed"] },
        ],
        explanation:
          "In LVAD patients about 47% of GI bleeds arise in the upper tract, 22% in the lower tract and 15% in the small bowel, and arteriovenous malformations cause 29% to 44%. The review describes EGD or colonoscopy first, then repeat EGD with push enteroscopy or capsule endoscopy for the small bowel if these are unrevealing. Octreotide is the medical treatment for recurrent bleeding from malformations, and a small reduction in pump speed has been linked to fewer bleeds. Warfarin and ASA stay on hold until his VAD team decides.",
        keyFeature: { topic: "gi-bleed", n: 6 },
        source: "vedachalam-lvad-2020",
      },
    ],
    sources: [S.hockstein, S.vedachalam, S.nacPcc],
    ...META,
    reviewed: false,
    version: 2,
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
