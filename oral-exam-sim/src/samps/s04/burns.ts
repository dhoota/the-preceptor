// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Preceptor";

const ABLS: Source = {
  id: "abls",
  citation: "American Burn Association. Advanced Burn Life Support Course Provider Manual. 2018 update.",
};
const ABA_REFERRAL: Source = {
  id: "aba-referral",
  citation: "American Burn Association. Guidelines for burn patient referral. Advice on transfer and consultation. 2022.",
  url: "https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018.",
};
const ROSEN: Source = {
  id: "rosen",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. 2023.",
};
const CO: Source = {
  id: "hampson-co",
  citation:
    "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. Am J Respir Crit Care Med. 2012.",
  url: "https://pubmed.ncbi.nlm.nih.gov/23087025/",
};
const CYANIDE: Source = {
  id: "cyanide-consensus",
  citation:
    "Anseeuw K, Delvau N, Burillo-Putze G, et al. Cyanide poisoning by fire smoke inhalation. A European expert consensus. Eur J Emerg Med. 2013.",
  url: "https://pubmed.ncbi.nlm.nih.gov/22828651/",
};
const HF: Source = {
  id: "hf-review",
  citation: "McKee D, Thoma A, Bailey K, Fish J. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014.",
  url: "https://pubmed.ncbi.nlm.nih.gov/25114621/",
};
const CYFSA: Source = {
  id: "cyfsa",
  citation: "Ontario. Child, Youth and Family Services Act, 2017. Section 125, duty to report child in need of protection.",
  url: "https://www.ontario.ca/laws/statute/17c14",
};
const CPS_PAIN: Source = {
  id: "cps-pain",
  citation:
    "Trottier ED, Ali S, Doré-Bergeron MJ, Chauvin-Kimoff L. Canadian Paediatric Society. Best practices in pain assessment and management for children. Paediatr Child Health. 2022.",
  url: "https://cps.ca/en/documents/position/pain-assessment-and-management",
};
const CIG_TETANUS: Source = {
  id: "cig-tetanus",
  citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Tetanus toxoid. Updated 2026.",
  url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html",
};
const ISBI: Source = {
  id: "isbi",
  citation: "ISBI Practice Guidelines Committee. ISBI practice guidelines for burn care. Burns. 2016.",
  url: "https://doi.org/10.1016/j.burns.2016.05.013",
};

const ATSDR_AMMONIA: Source = {
  id: "atsdr-ammonia",
  citation: "Agency for Toxic Substances and Disease Registry. Medical management guidelines for ammonia. Page last reviewed 2017.",
  url: "https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=7&toxid=2",
};
const WALKER: Source = {
  id: "walker-inhalation",
  citation: "Walker PF, Buehner MF, Wood LA, et al. Diagnosis and management of inhalation injury. An updated review. Crit Care. 2015.",
  url: "https://doi.org/10.1186/s13054-015-1077-4",
};
const ALASKA: Source = {
  id: "alaska-burns",
  citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
  url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf",
};
const AGGARWAL: Source = {
  id: "aggarwal-flash",
  citation: "Aggarwal S, Maitz P, Kennedy P. Electrical flash burns due to switchboard explosions in New South Wales. A 9-year experience. Burns. 2011.",
  url: "https://doi.org/10.1016/j.burns.2011.01.017",
};
const STATPEARLS_ELECTRICAL: Source = {
  id: "zemaitis-electrical",
  citation: "Zemaitis MR, Guirguis M, Cindass R. Electrical injuries. StatPearls. 2025.",
  url: "https://www.ncbi.nlm.nih.gov/books/NBK448087/",
};
const MERCK_ESCHAROTOMY: Source = {
  id: "merck-escharotomy",
  citation: "Streitz MJ. How to do burn escharotomy. Merck Manual Professional Edition. Revised 2025.",
  url: "https://www.merckmanuals.com/professional/injuries-poisoning/how-to-do-skin-soft-tissue-and-minor-surgical-procedures/how-to-do-burn-escharotomy",
};

export const BURNS_SAMPS: Samp[] = [
  {
    id: "burns-01",
    topic: "burns",
    alsoTopics: ["airway"],
    title: "A burst hose in the field",
    stem:
      "You are working in a rural hospital emergency department in Saskatchewan. A 52-year-old farmer is driven in by his son 30 minutes after a hose on an anhydrous ammonia tank burst while he was fertilizing a field. He was caught in the white cloud for about 20 seconds, and the liquid sprayed his face, neck and right forearm. His son flushed him with water from the tank's safety jug. He has burning eyes, a sore throat and a cough. He smokes. His voice is normal and there is no stridor. There are grey-white blistered burns on his face, neck and right forearm, about 6% TBSA. The soft palate is red with patches of white mucosa. There is scattered expiratory wheeze. His eyes are being irrigated with saline.",
    vitals: { temperature: "36.8°C", pulse: "112/minute", resp: "24/minute", bp: "152/90 mmHg", o2sat: "94% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings on repeated assessment would show that his upper airway is becoming threatened?",
        required: 3,
        accept: [
          { id: "voice", text: "Hoarseness or a change in voice", match: ["hoarse", "hoarseness", "voice change", "change in voice", "dysphonia", "muffled voice"] },
          { id: "stridor", text: "Stridor", match: ["stridor", "noisy breathing"] },
          { id: "drool", text: "Drooling or difficulty swallowing secretions", match: ["drool", "drooling", "dysphagia", "difficulty swallowing", "odynophagia", "pooling secretion", "unable to swallow"] },
          { id: "swelling", text: "Increasing swelling of the lips, tongue, palate or pharynx", match: ["swelling", "edema", "oedema", "uvula"] },
          { id: "distress", text: "Increasing work of breathing, rising respiratory rate or falling SpO2", match: ["respiratory distress", "work of breathing", "accessory muscle", "tachypnea", "respiratory rate", "hypoxia", "hypoxemia", "desaturation", "falling saturation", "spo2"] },
          { id: "mental", text: "Agitation, confusion or drowsiness", match: ["agitation", "agitated", "drowsy", "drowsiness", "confusion", "confused", "altered mental", "level of consciousness"] },
        ],
        explanation:
          "Ammonia dissolves in water to form a corrosive alkali, and ATSDR notes that severe exposure causes swelling and narrowing of the throat with upper airway obstruction and fluid in the lungs. The white patches on his palate are mucosal burns, so one normal examination is not enough. Hoarseness, stridor, drooling, spreading swelling and a rising work of breathing all signal narrowing. ATSDR adds that the low oxygen levels that follow can alter mental status. It advises watching for laryngeal edema and securing the airway by intubation if respiratory compromise develops.",
        keyFeature: { topic: "burns", n: 2 },
        source: "atsdr-ammonia",
      },
      {
        id: "q2",
        kind: "single",
        update: "You perform flexible nasolaryngoscopy at the bedside.",
        prompt: "Which of the following findings on nasolaryngoscopy would most strongly support intubating him now?",
        options: [
          "Clear mucus pooled in the nasopharynx",
          "Erythema of the posterior pharyngeal wall",
          "Red, swollen inferior turbinates",
          "Small blisters on the soft palate",
          "Swollen arytenoids and aryepiglottic folds",
        ],
        correct: 4,
        explanation:
          "Swelling of the arytenoids and aryepiglottic folds narrows the entrance to the larynx. Walker and colleagues report that 20 to 33% of patients admitted with inhalation injury develop upper airway obstruction from edema that can progress rapidly, and they favour early intubation by the most experienced operator when obstruction is impending. Erythema of the pharyngeal wall and blisters on the palate confirm mucosal injury and call for close watching, but they sit above the larynx and do not narrow the airway. Nasal mucus and swollen turbinates reflect irritation of the nose.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q3",
        kind: "short",
        update: "The epiglottis, arytenoids and vocal cords look normal. There is mild erythema of the pharynx. His voice remains normal and his SpO2 is 95% on room air.",
        prompt: "What is your plan for his airway and breathing over the next 24 hours?",
        required: 2,
        accept: [
          { id: "admit", text: "Admit to a monitored bed rather than discharge", match: ["admit", "admission", "monitored bed", "observe overnight", "observation", "hospitalize", "icu", "stepdown"] },
          { id: "serial", text: "Serial checks of voice, stridor, swallowing and SpO2, with repeat nasolaryngoscopy if symptoms change", match: ["serial", "reassess", "reassessment", "repeat nasolaryngoscopy", "repeat scope", "repeat laryngoscopy", "hourly", "airway check"] },
          { id: "ready", text: "Difficult airway equipment ready and a low threshold for early intubation", match: ["difficult airway", "airway cart", "intubation plan", "plan to intubate", "low threshold", "intubate if", "surgical airway"] },
          { id: "bronch", text: "Inhaled bronchodilator for wheeze", match: ["salbutamol", "bronchodilator", "ventolin", "ipratropium"] },
          { id: "o2", text: "Humidified oxygen", match: ["humidified", "oxygen", "o2"] },
          { id: "edema", text: "Watch for noncardiogenic pulmonary edema, which can appear over the next day", match: ["pulmonary edema", "pulmonary oedema", "ards", "chest x ray", "cxr", "chest radiograph"] },
          { id: "smoke", text: "No smoking for at least 72 hours", match: ["no smoking", "not smoke", "stop smoking", "avoid smoking", "smoking cessation"] },
          { id: "burn", text: "Consult or transfer to a burn centre", match: ["burn centre", "burn center", "burn unit", "transfer"] },
        ],
        unacceptable: [
          { text: "Discharge home now", match: ["discharge home", "discharge now", "send home", "discharge him"] },
        ],
        explanation:
          "A normal larynx now does not end the risk. ATSDR advises observing patients carefully for 6 to 12 hours for upper airway obstruction, and notes that lung injury can keep evolving over 18 to 24 hours, with noncardiogenic pulmonary edema after severe exposure. He has respiratory symptoms, wheeze and skin burns, and ATSDR advises considering admission for respiratory distress or significant skin burns. Humidified oxygen and inhaled bronchodilators treat the irritation and bronchospasm. Smoking should be discouraged for 72 hours because it can worsen the lung injury.",
        keyFeature: { topic: "burns", n: 2 },
        source: "atsdr-ammonia",
      },
      {
        id: "q4",
        kind: "short",
        update: "He rates his pain as 9 out of 10, from the burns and during the eye irrigation.",
        prompt: "What analgesic would you give, with the drug, dose and route?",
        required: 1,
        accept: [
          { id: "fentanyl", text: "Fentanyl 1 mcg/kg IV, about 90 mcg, then titrated in small repeated doses", match: ["fentanyl 1 mcg/kg", "fentanyl 50 iv", "fentanyl 75 iv", "fentanyl 90 iv", "fentanyl 100 iv", "fentanyl 50 mcg", "fentanyl 75 mcg", "fentanyl 90 mcg", "fentanyl 100 mcg"] },
          { id: "morphine", text: "Morphine 0.05 to 0.1 mg/kg IV, about 5 to 9 mg, titrated", match: ["morphine 0.1 mg/kg", "morphine 0.05 mg/kg", "morphine 4 iv", "morphine 5 iv", "morphine 6 iv", "morphine 8 iv", "morphine 9 iv"] },
          { id: "hydromorphone", text: "Hydromorphone 0.5 to 1 mg IV, titrated", match: ["hydromorphone 0.5 iv", "hydromorphone 1 iv", "hydromorphone 0.5 mg", "hydromorphone 1 mg", "dilaudid 0.5 iv", "dilaudid 1 iv"] },
          { id: "ketamine", text: "Ketamine 0.1 to 0.3 mg/kg IV as an analgesic dose", match: ["ketamine 0.1 mg/kg", "ketamine 0.2 mg/kg", "ketamine 0.3 mg/kg", "ketamine 10 iv", "ketamine 20 iv", "ketamine 25 iv"] },
        ],
        unacceptable: [
          { text: "Intramuscular opioid", match: ["intramuscular", "morphine im", "im morphine", "fentanyl im", "hydromorphone im"] },
          { text: "Oral analgesic alone", match: ["acetaminophen alone", "ibuprofen alone", "oral morphine", "po morphine", "oral hydromorphone"] },
        ],
        explanation:
          "The Alaska burn guideline advises analgesia in repeated small IV or IO doses, titrated to effective pain control, with monitoring for respiratory depression. Fentanyl 1 mcg/kg is 90 mcg at his weight of 90 kg. IV doses act within minutes, so each one can be judged before the next, which matters in a man whose airway is being watched. Intramuscular and oral doses act slowly and cannot be titrated to effect.",
        keyFeature: { topic: "burns", n: 3 },
        source: "alaska-burns",
      },
    ],
    sources: [ATSDR_AMMONIA, WALKER, ALASKA],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "burns-02",
    topic: "burns",
    title: "A garage flash fire",
    stem:
      "A 35-year-old man was pouring gasoline in his garage when it ignited at 14:00. He arrives at your emergency department at 16:00. Paramedics started a line and gave 1 L of Ringer's lactate. He has deep partial and full thickness burns to the entire anterior trunk, the whole of the right arm and the anterior surface of the left leg. His face is red without blisters.",
    vitals: { pulse: "118/minute", resp: "22/minute", bp: "128/76 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following TBSA values, using the rule of nines, should be used for his fluid calculation?",
        options: [
          "27%",
          "36%",
          "40%",
          "45%",
          "54%",
        ],
        correct: 1,
        explanation:
          "Anterior trunk 18%, whole right arm 9% and anterior left leg 9% give 36%. Superficial burns such as the red, unblistered face are not counted. Overestimating TBSA is common and leads to over resuscitation.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Using the ABA consensus formula of 2 mL/kg/%TBSA of Ringer's lactate for the first 24 hours, what are the total 24 hour volume and the hourly rate you would run now for the rest of the first 8 hours?",
        required: 2,
        accept: [
          { id: "total", text: "Total 5760 mL over 24 hours", match: ["5760", "5,760", "5760ml", "5.76", "5.8 l", "5800"] },
          { id: "rate", text: "About 313 mL per hour, as 2880 mL minus the 1000 mL already given is due in the 6 hours left of the first 8", match: ["313", "310", "314", "315", "313ml/h", "313ml/hr", "313ml", "1880"] },
        ],
        unacceptable: [
          { text: "Rate timed from ED arrival rather than from injury", match: ["235", "360"] },
          { text: "Rate that ignores the prehospital litre", match: ["480"] },
        ],
        explanation:
          "2 x 80 x 36 is 5760 mL. Half, 2880 mL, is given in the first 8 hours counted from the time of injury, not arrival. Two hours and 1000 mL have passed, so 1880 mL remains over 6 hours, about 313 mL per hour. The formula is only a starting point and is titrated to urine output.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following hourly urine output targets is most appropriate for him?",
        options: [
          "0.1 mL/kg/h, about 8 mL per hour",
          "0.5 mL/kg/h, about 30 to 50 mL per hour",
          "1 to 1.5 mL/kg/h, about 100 mL per hour",
          "2 mL/kg/h, about 160 mL per hour",
          "2.5 mL/kg/h, about 200 mL per hour",
        ],
        correct: 1,
        explanation:
          "For adult thermal burns the target is 0.5 mL/kg/h, roughly 30 to 50 mL per hour. Higher targets drive fluid creep and edema complications. Children under about 30 kg target 1 mL/kg/h. Adults with pigmented urine after electrical injury target 75 to 100 mL per hour until it clears.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        update: "Four hours after injury his urine output has been 15 mL per hour for two consecutive hours. BP 118/70 mmHg, pulse 116/minute.",
        prompt: "What actions would you take?",
        required: 2,
        accept: [
          { id: "increase", text: "Increase the fluid rate by about 20 to 30%, then reassess hourly", match: ["increase rate", "increase fluid", "increase infusion", "increase ringer", "increase lr", "increase the rate", "increase iv", "up the rate", "titrate up", "one third", "20%", "25%", "30%", "33%"] },
          { id: "catheter", text: "Check the urinary catheter for kinking or blockage", match: ["catheter", "foley", "kink", "blocked", "flush"] },
          { id: "reassess", text: "Reassess perfusion with lactate, base deficit or mental status", match: ["lactate", "base deficit", "perfusion", "mental status", "blood gas"] },
          { id: "missed", text: "Look for other causes such as missed injury, bleeding or compartment syndrome", match: ["missed injury", "bleeding", "hemorrhage", "compartment", "other injury", "occult"] },
          { id: "burncentre", text: "Discuss with the burn centre", match: ["burn centre", "burn center", "burn unit", "burn surgeon"] },
        ],
        unacceptable: [
          { text: "Diuretic to increase urine output", match: ["furosemide", "lasix", "diuretic", "mannitol"], dangerous: true },
          { text: "Large repeated fluid boluses", match: ["repeat bolus", "2 l bolus", "large bolus"] },
        ],
        explanation:
          "Low urine output in burn shock is treated by stepping up the infusion by about 20 to 33%, not with boluses or diuretics. Always exclude a blocked catheter first. Diuretics produce urine without improving perfusion and remove the only reliable endpoint.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
    ],
    sources: [ABLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-03",
    topic: "burns",
    title: "Throbbing fingertips",
    stem:
      "A 44-year-old man presents at 23:00 with severe throbbing pain in the tips of three fingers of his right hand. The pain started about six hours after he finished work and is now 10 out of 10. He denies any injury. He works at a car detailing shop. The fingertips look almost normal apart from slight pallor under the nails. Vital signs are normal.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What specific history questions would help explain his pain?",
        required: 2,
        accept: [
          { id: "chemical", text: "Any contact with chemicals at work", match: ["chemical", "acid", "caustic", "corrosive", "solvent"] },
          { id: "product", text: "Name of the product used and its safety data sheet", match: ["product", "safety data sheet", "sds", "msds", "label", "ingredient"] },
          { id: "wheel", text: "Use of wheel cleaner or rust remover", match: ["wheel cleaner", "rust remover", "rust", "wheel"] },
          { id: "hf", text: "Exposure to hydrofluoric acid", match: ["hydrofluoric", "hf"] },
          { id: "glove", text: "Glove use and whether gloves were torn", match: ["glove"] },
          { id: "duration", text: "Duration of contact and whether the skin was washed", match: ["duration", "how long", "washed", "irrigated", "decontaminated", "decontamination"] },
        ],
        explanation:
          "Severe pain out of proportion to a near normal looking finger should trigger questions about chemical exposure. Dilute hydrofluoric acid in wheel cleaners and rust removers causes delayed, deep pain. The product label or safety data sheet confirms the agent and concentration.",
        keyFeature: { topic: "burns", n: 6 },
        source: "hf-review",
      },
      {
        id: "q2",
        kind: "short",
        update: "He used an aluminium wheel cleaner that contains hydrofluoric acid. One of his gloves had a hole in it.",
        prompt: "What treatments would you give for his fingers?",
        required: 2,
        accept: [
          { id: "irrigate", text: "Copious irrigation with water", match: ["irrigation", "irrigate", "water", "wash"] },
          { id: "gel", text: "Topical 2.5% calcium gluconate gel, often in a glove over the hand", match: ["calcium gluconate gel", "calcium gel", "topical calcium", "calcium gluconate 2.5", "gluconate gel", "ca gluconate"] },
          { id: "ia", text: "Intra-arterial calcium gluconate infusion if pain persists", match: ["intra arterial", "intraarterial", "arterial calcium"] },
          { id: "bier", text: "IV regional calcium gluconate by Bier block", match: ["bier", "regional calcium", "intravenous regional"] },
          { id: "sc", text: "Local subcutaneous 5% calcium gluconate infiltration", match: ["subcutaneous calcium", "infiltrate", "infiltration", "injection of calcium", "sc calcium"] },
          { id: "nail", text: "Consult hand surgery about nail removal if the nail bed is involved", match: ["nail removal", "remove nail", "hand surgery", "plastic"] },
        ],
        unacceptable: [
          { text: "Local injection of calcium chloride", match: ["calcium chloride"], dangerous: true },
          { text: "Digital nerve block, which masks the pain used to guide treatment", match: ["digital block", "nerve block", "ring block"] },
        ],
        explanation:
          "Fluoride ions penetrate deeply and bind calcium and magnesium. Irrigation is followed by topical calcium gluconate gel, escalating to intra-arterial or regional calcium if pain continues. Calcium chloride causes tissue necrosis if injected into tissue. Pain relief is the treatment endpoint, so avoid nerve blocks.",
        keyFeature: { topic: "burns", n: 6 },
        source: "hf-review",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What systemic complications of hydrofluoric acid exposure would you consider?",
        required: 2,
        accept: [
          { id: "ca", text: "Hypocalcemia", match: ["hypocalcemia", "hypocalcaemia", "low calcium", "calcium"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "hypomagnesaemia", "low magnesium", "magnesium"] },
          { id: "k", text: "Hyperkalemia", match: ["hyperkalemia", "hyperkalaemia", "high potassium", "potassium"] },
          { id: "arrhythmia", text: "Ventricular dysrhythmia, QT prolongation or cardiac arrest", match: ["arrhythmia", "dysrhythmia", "ventricular", "vf", "qt", "cardiac arrest", "torsade"] },
          { id: "acidosis", text: "Metabolic acidosis", match: ["acidosis"] },
        ],
        explanation:
          "Fluoride binds calcium and magnesium, and large or concentrated exposures cause profound hypocalcemia, hypomagnesemia and hyperkalemia. Death is usually from ventricular fibrillation. A small dilute fingertip exposure rarely causes systemic toxicity but these risks guide monitoring for larger ones.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hf-review",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the best endpoint to judge whether his local treatment is adequate?",
        options: [
          "Completing 60 minutes of irrigation",
          "Normal ECG and QT interval",
          "Normal serum calcium",
          "Resolution of pain",
          "Return of normal nail colour",
        ],
        correct: 3,
        explanation:
          "Pain tracks ongoing fluoride activity in the tissue. Treatment is repeated or escalated until the pain resolves. Serum calcium and ECG monitor systemic toxicity, not local control.",
        keyFeature: { topic: "burns", n: 6 },
        source: "hf-review",
      },
    ],
    sources: [HF],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-04",
    topic: "burns",
    alsoTopics: ["tox"],
    title: "Found in a smoke filled apartment",
    stem:
      "A 58-year-old woman is pulled from a smoke filled apartment after about 20 minutes. She was found unresponsive. She now opens her eyes to voice and is confused. GCS 11. She has superficial partial thickness burns to both hands, about 4% TBSA, and soot around her nostrils. Lactate 11 mmol/L. Carboxyhemoglobin 28%.",
    vitals: { pulse: "124/minute", resp: "26/minute", bp: "92/58 mmHg", o2sat: "99% on non-rebreather mask", weight: "65 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What associated injuries or toxic exposures must you assess for?",
        required: 3,
        accept: [
          { id: "co", text: "Carbon monoxide poisoning", match: ["carbon monoxide", "co poisoning", "co toxicity", "co level", "co exposure", "carboxyhemoglobin", "cohb"] },
          { id: "cn", text: "Cyanide poisoning", match: ["cyanide", "hcn", "cn"] },
          { id: "inhalation", text: "Inhalation injury to the airway or lungs", match: ["inhalation", "airway injury", "airway burn", "smoke inhalation", "airway edema"] },
          { id: "trauma", text: "Trauma from a fall, collapse or escape attempt, including head injury", match: ["trauma", "fall", "head injury", "fracture", "c spine", "cervical spine"] },
          { id: "tox", text: "Co-ingestion of drugs or alcohol", match: ["ingestion", "overdose", "alcohol", "drug"] },
          { id: "hypoxia", text: "Hypoxic brain injury", match: ["hypoxic", "anoxic"] },
        ],
        explanation:
          "Smoke from house fires carries carbon monoxide and hydrogen cyanide, both of which cause confusion, shock and lactic acidosis. A small surface burn does not explain her condition. Look for injuries from a fall or collapse and for intoxicants.",
        keyFeature: { topic: "burns", n: 1 },
        source: "cyanide-consensus",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her lactate is 11 mmol/L and she remains hypotensive.",
        prompt: "Which of the following treatments is most appropriate for her now?",
        options: [
          "Hydroxocobalamin 5 g IV over 15 minutes",
          "Hydroxocobalamin 70 mg IV",
          "Methylene blue 1 mg/kg IV",
          "Sodium bicarbonate 100 mmol IV and observe",
          "Sodium nitrite 300 mg IV",
        ],
        correct: 0,
        explanation:
          "In a fire victim, a lactate above about 8 mmol/L with shock or altered mental status strongly suggests cyanide toxicity. Hydroxocobalamin 5 g IV is the antidote of choice and can be repeated once. Nitrites induce methemoglobinemia, which further reduces oxygen delivery in a patient who already has carbon monoxide poisoning.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cyanide-consensus",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What features in any carbon monoxide poisoned patient should prompt discussion of hyperbaric oxygen?",
        required: 2,
        accept: [
          { id: "loc", text: "Loss of consciousness", match: ["loss of consciousness", "loc", "syncope", "unresponsive", "unconscious"] },
          { id: "neuro", text: "Neurological signs, confusion or altered mental status", match: ["neurologic", "neurological", "confusion", "altered mental", "mental status", "gcs", "seizure", "coma", "focal"] },
          { id: "level", text: "Carboxyhemoglobin above 25%", match: ["25%", "above 25", "over 25", "cohb", "carboxyhemoglobin"] },
          { id: "preg", text: "Pregnancy with carboxyhemoglobin above about 15%", match: ["pregnancy", "pregnant"] },
          { id: "cardiac", text: "Myocardial ischemia", match: ["ischemia", "ischaemia", "chest pain", "troponin", "ecg change", "cardiac"] },
          { id: "acidosis", text: "Severe metabolic acidosis", match: ["acidosis", "ph"] },
          { id: "exposure", text: "Age 36 or older or exposure of 24 hours or more", match: ["age 36", "older age", "age over", "prolonged exposure", "24 hour"] },
        ],
        explanation:
          "Hyperbaric oxygen may reduce delayed neurological sequelae. Common criteria are loss of consciousness, neurological abnormality, carboxyhemoglobin above 25%, pregnancy, ischemia and severe acidosis. Transfer should not delay treatment of shock, cyanide or airway problems.",
        keyFeature: { topic: "tox", n: 4 },
        source: "hampson-co",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What are the reasons in this case to consider early intubation?",
        required: 2,
        accept: [
          { id: "gcs", text: "Depressed level of consciousness", match: ["gcs", "level of consciousness", "decreased loc", "confusion", "confused", "unable to protect", "airway protection", "protect airway"] },
          { id: "soot", text: "Soot around the nostrils suggesting inhalation injury", match: ["soot", "inhalation", "airway injury", "airway burn"] },
          { id: "space", text: "Prolonged exposure in an enclosed space", match: ["enclosed", "confined", "20 minute", "prolonged"] },
          { id: "shock", text: "Shock with severe acidosis and a likely worsening course", match: ["shock", "hypotension", "acidosis", "lactate"] },
          { id: "transfer", text: "Need for safe transfer for hyperbaric or burn centre care", match: ["transfer", "hyperbaric", "transport"] },
        ],
        explanation:
          "Her depressed consciousness, signs of smoke inhalation and shock all make airway loss likely. Securing the airway before transport is safer than intubating in a moving vehicle. Continue 100% oxygen through the tube.",
        keyFeature: { topic: "burns", n: 2 },
        source: "cyanide-consensus",
      },
    ],
    sources: [CYANIDE, CO],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-05",
    topic: "burns",
    alsoTopics: ["abuse-domestic"],
    title: "A toddler with sore feet",
    stem:
      "An 18-month-old boy is brought in by his mother's partner, who says the child climbed into a hot bath yesterday evening while he was on the phone. There are partial thickness burns to both feet and lower legs up to mid calf with a sharp, symmetric upper border. There are no splash marks. Estimated TBSA is 8%.",
    vitals: { temperature: "37.6°C", pulse: "150/minute", resp: "30/minute", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of this presentation are concerning for an inflicted injury?",
        required: 3,
        accept: [
          { id: "delay", text: "Delay in seeking care", match: ["delay", "delayed", "yesterday", "late presentation"] },
          { id: "pattern", text: "Stocking distribution with a sharp line of demarcation", match: ["stocking", "sharp", "demarcation", "clear line", "tide mark", "immersion"] },
          { id: "symmetric", text: "Bilateral symmetric burns", match: ["symmetric", "symmetrical", "bilateral", "both leg", "both feet"] },
          { id: "splash", text: "No splash marks", match: ["splash", "no splash", "without splash"] },
          { id: "history", text: "History not consistent with the child's development or the injury pattern", match: ["inconsistent", "not consistent", "developmental", "development", "mechanism", "story", "history"] },
          { id: "caregiver", text: "Unsupervised with a non-parent caregiver", match: ["caregiver", "partner", "supervision", "unsupervised", "non parent"] },
          { id: "flexure", text: "Sparing of skin creases or soles from forced immersion", match: ["sparing", "flexure", "crease", "sole"] },
        ],
        explanation:
          "A child who climbs into hot water withdraws and splashes, leaving irregular burns. Symmetric stocking burns with a clean upper margin and no splashes suggest forced immersion. Delay and a history that does not fit the pattern add concern.",
        keyFeature: { topic: "abuse-domestic", n: 2 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "short",
        update: "He screams when his feet are touched and you need to examine and dress the wounds.",
        prompt: "What analgesic would you order, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "infent", text: "Intranasal fentanyl 1.5 mcg/kg, about 15 to 17 mcg", match: ["fentanyl 1.5 mcg/kg", "fentanyl 1.5mcg/kg", "fentanyl 15 mcg", "fentanyl 16 mcg", "fentanyl 17 mcg", "fentanyl 15mcg", "fentanyl 16mcg", "fentanyl 20 mcg intranasal", "fentanyl 2 mcg/kg intranasal"] },
          { id: "ivmorph", text: "Morphine 0.05 to 0.1 mg/kg IV, about 0.5 to 1 mg", match: ["morphine 0.1 mg/kg", "morphine 0.05 mg/kg", "morphine 1 mg iv", "morphine 1.1 mg", "morphine 0.5 mg iv"] },
          { id: "ivfent", text: "Fentanyl 1 mcg/kg IV, about 10 mcg", match: ["fentanyl 1 mcg/kg iv", "fentanyl 10 mcg iv", "fentanyl 10mcg iv", "fentanyl 11 mcg"] },
          { id: "ketamine", text: "Intranasal ketamine 1 to 1.5 mg/kg or IV ketamine 0.1 to 0.3 mg/kg as an analgesic dose", match: ["ketamine 1 mg/kg intranasal", "ketamine 1.5 mg/kg intranasal", "ketamine 1 mg/kg in", "ketamine 1.5 mg/kg in", "ketamine 0.1", "ketamine 0.2", "ketamine 0.3"] },
        ],
        unacceptable: [
          { text: "Codeine", match: ["codeine", "tylenol 3", "tylenol #3"], dangerous: true },
          { text: "Intramuscular opioid", match: ["intramuscular", "morphine im", "im morphine"] },
        ],
        explanation:
          "Intranasal fentanyl gives fast, effective analgesia without an IV. Burn dressing changes are among the most painful procedures in children. Codeine is contraindicated in Canada under age 12 because of unpredictable metabolism.",
        keyFeature: { topic: "burns", n: 3 },
        source: "cps-pain",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the steps in his disposition?",
        required: 2,
        accept: [
          { id: "report", text: "Report to child protection services", match: ["child protection", "cas", "children's aid", "childrens aid", "report", "cps", "child welfare", "social service"] },
          { id: "burn", text: "Refer or transfer to a pediatric burn centre because of feet involvement", match: ["burn centre", "burn center", "burn unit", "transfer", "plastic"] },
          { id: "admit", text: "Admit to a safe setting, not discharge with the same caregiver", match: ["admit", "admission", "safe", "not discharge"] },
          { id: "survey", text: "Skeletal survey and full examination for other injuries", match: ["skeletal survey", "skeletal", "fundoscopy", "retinal", "other injury", "head to toe"] },
          { id: "sw", text: "Involve social work and the child abuse team", match: ["social work", "child abuse team", "scan team", "child protection team"] },
        ],
        unacceptable: [{ text: "Discharge home with the caregiver and family doctor follow up", match: ["discharge home", "home with"], dangerous: true }],
        explanation:
          "Burns to the feet and suspected abuse are each criteria for burn centre referral. The child must go to a safe setting while protection services investigate. A skeletal survey looks for occult fractures in a child under two.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best describes your duty to report in Ontario?",
        options: [
          "Be certain of abuse before reporting",
          "Delegate the report to a nurse or social worker",
          "Get the mother's consent before reporting",
          "Report directly, promptly, on reasonable grounds to suspect",
          "Wait for the skeletal survey before reporting",
        ],
        correct: 3,
        explanation:
          "Ontario law requires a professional with reasonable grounds to suspect abuse to report directly to a children's aid society without delay. The duty cannot be delegated and does not need certainty or consent. Other provinces have similar laws.",
        keyFeature: { topic: "abuse-domestic", n: 6 },
        source: "cyfsa",
      },
    ],
    sources: [ABLS, CPS_PAIN, ABA_REFERRAL, CYFSA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-06",
    topic: "burns",
    alsoTopics: ["environmental", "msk"],
    title: "A flash in the switchgear room",
    stem:
      "A 41-year-old electrician is brought to the emergency department by ambulance from a pulp mill in British Columbia. At 13:10 an arc flash erupted from a 4160 volt switchgear cabinet about 1 m in front of him while a coworker was testing it. He was not touching any equipment. The blast knocked him backward onto the concrete floor. His fleece jacket caught fire and melted onto his arms before coworkers smothered it. He did not lose consciousness. He arrives at 14:00. He has ringing in both ears and says his eyes feel gritty. There are deep partial thickness burns on his face, neck and anterior chest. Both forearms have white, leathery, insensate burns that encircle them from wrist to elbow. The total burn is 24% TBSA on a Lund and Browder chart.",
    vitals: { temperature: "36.6°C", pulse: "116/minute", resp: "22/minute", bp: "136/84 mmHg", o2sat: "96% on room air", weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What associated injuries would you look for?",
        required: 3,
        accept: [
          { id: "eye", text: "Eye injury, such as corneal burns from heat and intense light", match: ["eye", "corneal", "cornea", "ocular", "keratitis", "vision", "retina", "retinal"] },
          { id: "ear", text: "Tympanic membrane rupture or hearing loss from the blast", match: ["tympanic", "eardrum", "ear drum", "hearing", "ear injury", "tinnitus"] },
          { id: "head", text: "Head injury from the fall", match: ["head injury", "head trauma", "tbi", "intracranial", "concussion", "brain injury"] },
          { id: "spine", text: "Cervical or other spine injury from the fall", match: ["spine", "spinal", "c spine", "cervical", "vertebral"] },
          { id: "inhalation", text: "Inhalation injury from the fire and fumes", match: ["inhalation", "airway burn", "airway injury", "smoke", "carbon monoxide", "carboxyhemoglobin", "cyanide"] },
          { id: "current", text: "Conduction injury, if current passed through him", match: ["conduction", "current", "electrical injury", "cardiac", "arrhythmia", "dysrhythmia", "rhabdomyolysis", "myoglobin"] },
          { id: "trauma", text: "Fractures or other blunt injuries", match: ["fracture", "blunt", "trauma"] },
          { id: "limb", text: "Loss of circulation to the hands under the encircling burns", match: ["compartment", "ischemia", "ischaemia", "circulation", "perfusion", "pulse"] },
          { id: "psych", text: "Acute stress and later psychological injury", match: ["psychological", "ptsd", "acute stress", "mental health"] },
        ],
        explanation:
          "In a 9-year burn unit series of switchboard explosions, flash burns caused serious complications that included ocular injuries and major psychological problems, and eye injuries were common even when the burn area was small. The blast that threw him to the floor can injure the head, spine and ears, and ringing in both ears raises concern for the eardrums. A burning jacket and facial burns raise the question of smoke inhalation. The encircling full thickness forearm burns threaten circulation to both hands as edema builds.",
        keyFeature: { topic: "burns", n: 1 },
        source: "aggarwal-flash",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What findings would suggest that electrical current also passed through his body?",
        required: 3,
        accept: [
          { id: "contact", text: "Contact wounds at entry and exit points, such as the hands or feet", match: ["entry", "exit", "contact wound", "contact point", "contact burn", "entrance wound", "charred wound"] },
          { id: "ecg", text: "Arrhythmia or new ECG changes", match: ["arrhythmia", "dysrhythmia", "ecg change", "abnormal ecg", "st change", "atrial fibrillation", "ventricular", "ectopy"] },
          { id: "ck", text: "Raised CK or dark urine from myoglobin", match: ["ck", "creatine kinase", "myoglobin", "myoglobinuria", "dark urine", "rhabdomyolysis", "pigmented urine"] },
          { id: "muscle", text: "Tense, tender muscle away from the burned skin", match: ["tense muscle", "muscle tenderness", "tender muscle", "deep muscle", "compartment"] },
          { id: "neuro", text: "New weakness, numbness or other neurological deficit", match: ["weakness", "numbness", "paresthesia", "paraesthesia", "neurological deficit", "neuro deficit", "nerve injury"] },
          { id: "loc", text: "Loss of consciousness or cardiac arrest at the scene", match: ["loss of consciousness", "loc", "unconscious", "cardiac arrest"] },
          { id: "tetany", text: "Tetanic muscle contraction or being unable to let go", match: ["tetany", "tetanic", "let go"] },
          { id: "troponin", text: "Raised troponin", match: ["troponin"] },
        ],
        explanation:
          "StatPearls separates flash injuries, in which an arc burns the skin with no current passing through the body, from flame injuries, in which the arc ignites clothing, and from true electrical injuries, in which the person becomes part of the circuit. True injuries usually show contact points at the entry and exit sites. Current passing through the body damages the heart, muscle and nerves along its path, which shows as an arrhythmia, a rising CK with dark urine, tense muscle away from the burns, or a neurological deficit. He was not touching the equipment, but these signs must still be sought because the skin can look normal over deep injury.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "zemaitis-electrical",
      },
      {
        id: "q3",
        kind: "single",
        update: "His ECG shows sinus tachycardia only. CK is 410 U/L and his urine is clear yellow. There are no contact wounds. He has two IV lines and a urinary catheter.",
        prompt: "Using the Alaska burn resuscitation guideline, which of the following initial hourly rates of Ringer's lactate is most appropriate?",
        options: [
          "128 mL/hour",
          "170 mL/hour",
          "255 mL/hour",
          "383 mL/hour",
          "510 mL/hour",
        ],
        correct: 2,
        explanation:
          "His ECG, CK, clear urine and lack of contact wounds point to a flash and flame burn with no current through the body, so he is resuscitated as an adult thermal burn. The Alaska guideline's adult formula is 2 mL/kg/%TBSA over the first 24 hours, with half given in the first 8 hours after the burn. 2 x 85 kg x 24% is 4080 mL, and 2040 mL over 8 hours is 255 mL/hour. The 8 hours run from the injury at 13:10, not from his arrival, so they end at 21:10. The 4 mL/kg electrical formula gives 510 mL/hour and adds fluid he does not need. 383 mL/hour uses the 3 mL/kg children's formula, 170 mL/hour spreads the volume evenly over 24 hours, and 128 mL/hour is the rate for the later 16 hours. The rate is then adjusted to a urine output of 0.5 mL/kg/hour.",
        keyFeature: { topic: "burns", n: 4 },
        source: "alaska-burns",
      },
      {
        id: "q4",
        kind: "short",
        update: "At 16:30 both hands are cool and pale. The pulse oximeter on each index finger reads 86%. Doppler signals are absent at both wrists. The burn centre is 2 hours away by road.",
        prompt: "What would you do now?",
        required: 2,
        accept: [
          { id: "eschar", text: "Escharotomy of both forearms now, along the medial and lateral lines, through the eschar only", match: ["escharotomy", "escharotomie", "incise eschar", "release eschar", "incise the eschar"] },
          { id: "consult", text: "Urgent call to the burn or plastic surgeon to perform or guide the release", match: ["burn surgeon", "plastic surgeon", "plastic surgery", "plastics", "burn centre", "burn center", "surgeon", "surgery consult"] },
          { id: "elevate", text: "Elevate both arms", match: ["elevate", "elevation"] },
          { id: "remove", text: "Remove rings, watch and melted clothing", match: ["remove ring", "remove jewellery", "remove jewelry", "remove watch", "remove constricting", "remove clothing"] },
          { id: "analgesia", text: "IV analgesia or procedural sedation for the incisions", match: ["analgesia", "sedation", "ketamine", "fentanyl", "morphine", "hydromorphone"] },
          { id: "recheck", text: "Recheck Doppler signals and finger oximetry after release", match: ["recheck doppler", "repeat doppler", "reassess perfusion", "recheck pulse", "recheck oximetry"] },
        ],
        unacceptable: [
          { text: "Delay the release until he reaches the burn centre", match: ["wait for transfer", "await transfer", "wait until burn centre", "wait for burn centre", "delay until transfer"] },
        ],
        explanation:
          "Absent Doppler flow and a distal oxygen saturation below 95% under circumferential burns are indications for escharotomy. Merck describes incising the medial and lateral sides of the limb through the full thickness eschar, 1 cm beyond its margins, while staying above the fascia. A fasciotomy is different, because it opens the fascia to decompress the muscle compartments. A 2-hour road transfer is too long to leave both hands ischemic, so the burn or plastic surgeon should be called now to perform or guide the release. The Doppler signals and finger saturations are then rechecked.",
        keyFeature: { topic: "msk", n: 7 },
        source: "merck-escharotomy",
      },
    ],
    sources: [AGGARWAL, STATPEARLS_ELECTRICAL, ALASKA, MERCK_ESCHAROTOMY],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "burns-07",
    topic: "burns",
    alsoTopics: ["multiple-trauma"],
    title: "Harder and harder to bag",
    stem:
      "A 50-year-old man's clothing caught fire at a campfire. He arrives from a regional hospital three hours after the injury, intubated. He has full thickness burns encircling the chest and upper abdomen and both arms, about 40% TBSA. Peak airway pressures have risen steadily and he is now hard to bag.",
    vitals: { pulse: "126/minute", bp: "104/64 mmHg", o2sat: "88% on FiO2 1.0", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What causes of his rising airway pressure should you consider?",
        required: 2,
        accept: [
          { id: "eschar", text: "Restrictive circumferential chest eschar", match: ["eschar", "circumferential", "restrictive", "chest wall"] },
          { id: "tube", text: "Tube obstruction or displacement, including right mainstem intubation", match: ["tube obstruction", "mainstem", "displacement", "blocked tube", "kinked", "dislodged", "tube"] },
          { id: "ptx", text: "Pneumothorax", match: ["pneumothorax"] },
          { id: "bronchospasm", text: "Bronchospasm or airway casts from inhalation injury", match: ["bronchospasm", "cast", "secretion", "inhalation", "mucus plug", "soot"] },
          { id: "acs", text: "Abdominal compartment syndrome", match: ["abdominal compartment", "abdominal hypertension"] },
        ],
        explanation:
          "A stiff circumferential eschar across the chest and abdomen prevents chest wall expansion. Always check the tube and look for pneumothorax too. Rising pressure with a tight, leathery torso strongly suggests eschar restriction.",
        keyFeature: { topic: "burns", n: 1 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "single",
        update: "The tube is in good position and there is no pneumothorax on ultrasound.",
        prompt: "Which of the following interventions is most appropriate for his rising airway pressure?",
        options: [
          "Add neuromuscular blockade as the only change in management",
          "Bilateral chest tube insertion at the bedside",
          "Chest escharotomy along both anterior axillary lines",
          "Decompressive fasciotomy of both arms",
          "Increase PEEP to 15 cm H2O and recheck",
        ],
        correct: 2,
        explanation:
          "Escharotomy incisions along the anterior axillary lines, joined across the upper abdomen, free the chest wall. Ventilation usually improves immediately. It is done at the bedside with electrocautery or a scalpel under analgesia and sedation.",
        keyFeature: { topic: "burns", n: 1 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What analgesic or sedative would you order for this intubated patient before the escharotomy, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "fent", text: "Fentanyl 1 to 2 mcg/kg IV bolus, about 100 to 150 mcg, then infusion", match: ["fentanyl 100 mcg", "fentanyl 150 mcg", "fentanyl 100mcg", "fentanyl 150mcg", "fentanyl 1 mcg/kg", "fentanyl 2 mcg/kg", "fentanyl 100", "fentanyl 150", "fentanyl 1 to 2", "fentanyl 50 mcg"] },
          { id: "ket", text: "Ketamine 0.5 to 1 mg/kg IV", match: ["ketamine 0.5 mg/kg", "ketamine 1 mg/kg", "ketamine 50 mg", "ketamine 80 mg", "ketamine 90 mg", "ketamine 0.5", "ketamine 1 mg/kg iv"] },
          { id: "hm", text: "Hydromorphone 1 to 2 mg IV", match: ["hydromorphone 1 mg", "hydromorphone 2 mg", "dilaudid 1 mg", "dilaudid 2 mg"] },
          { id: "morph", text: "Morphine 0.1 mg/kg IV, about 8 to 10 mg", match: ["morphine 0.1 mg/kg", "morphine 8 mg", "morphine 10 mg"] },
        ],
        unacceptable: [
          { text: "Paralysis or sedation without analgesia", match: ["rocuronium alone", "vecuronium alone", "paralytic alone", "paralysis alone", "midazolam alone", "propofol alone"], dangerous: true },
        ],
        explanation:
          "Escharotomy through full thickness burn is less painful than through viable tissue, but the margins and the procedure still hurt. An intubated burn patient needs analgesia first, not paralysis or sedation alone. Titrate to blood pressure.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        update: "After the escharotomy he is easy to ventilate. You are preparing him for air transfer to the provincial burn centre.",
        prompt: "What would you do before he leaves?",
        required: 3,
        accept: [
          { id: "tube", text: "Secure the tube with ties and confirm position", match: ["secure tube", "secure the tube", "tube tie", "tie", "tube position", "confirm tube"] },
          { id: "ng", text: "Insert a nasogastric or orogastric tube", match: ["nasogastric", "orogastric", "ng tube", "og tube", "ngt", "ogt"] },
          { id: "foley", text: "Insert a urinary catheter and chart hourly output", match: ["foley", "urinary catheter", "catheter", "urine output"] },
          { id: "warm", text: "Keep him warm with clean dry dressings or sheets", match: ["warm", "hypothermia", "blanket", "dry dressing", "dry sheet", "clean sheet"] },
          { id: "fluids", text: "Continue fluids by formula from the time of injury with a clear plan", match: ["fluid", "ringer", "resuscitation", "parkland"] },
          { id: "docs", text: "Send documentation of TBSA, time of injury, fluids given and procedures", match: ["document", "documentation", "chart", "record", "handover", "time of injury"] },
          { id: "lines", text: "Two secure large bore IV lines", match: ["iv access", "large bore", "two iv", "central line", "intraosseous", "io"] },
          { id: "analgesia", text: "Ongoing analgesia and sedation for the flight", match: ["analgesia", "sedation", "fentanyl", "ketamine"] },
          { id: "call", text: "Physician to physician handover with the burn centre", match: ["burn centre", "burn center", "call", "physician to physician", "handover"] },
        ],
        explanation:
          "Transfer packaging for a major burn means a secure airway, gastric and bladder drainage, reliable access and warmth. Wet dressings and cold rooms cause hypothermia. The receiving team needs the time of injury and every volume given.",
        keyFeature: { topic: "burns", n: 5 },
        source: "abls",
      },
    ],
    sources: [ABLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-08",
    topic: "burns",
    alsoTopics: ["abuse-domestic"],
    title: "Found by her daughter",
    stem:
      "An 81-year-old woman is brought in by her daughter, who found her at home with wounds on both thighs. The patient says she spilled a kettle two days ago. She has type 2 diabetes with peripheral neuropathy, uses a walker and lives alone. Vital signs are normal. There are burns over the anterior thighs, about 5% TBSA. Some areas are white, dry and do not blanch.",
    vitals: { weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What factors in this case favour admission or burn centre referral rather than discharge?",
        required: 3,
        accept: [
          { id: "age", text: "Older age", match: ["age", "elderly", "older", "81"] },
          { id: "dm", text: "Diabetes and neuropathy that impair healing", match: ["diabetes", "diabetic", "neuropathy", "comorbid", "comorbidity"] },
          { id: "depth", text: "Deep partial or full thickness burn likely to need grafting", match: ["full thickness", "deep partial", "deep", "graft", "depth", "third degree"] },
          { id: "home", text: "Lives alone and cannot manage dressings or mobility", match: ["lives alone", "alone", "home", "social", "dressing", "self care", "support"] },
          { id: "mobility", text: "Reduced mobility with walker", match: ["walker", "mobility", "fall risk", "ambulation", "ambulate"] },
          { id: "delay", text: "Delayed presentation with infection risk", match: ["delay", "delayed", "infection", "two day"] },
          { id: "cause", text: "Unclear circumstances that need assessment", match: ["circumstance", "neglect", "abuse", "cognition", "cognitive", "confusion"] },
        ],
        explanation:
          "Burn severity is not only about TBSA. Older age, diabetes and full thickness areas slow healing and raise mortality. Living alone with limited mobility means she cannot safely manage dressings at home.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings best indicates a full thickness burn?",
        options: [
          "Exquisite pain to light touch over the burn",
          "Intact blisters over pink moist skin",
          "Painful erythema without any blisters",
          "Red skin that blanches with brisk capillary refill",
          "White or leathery, nonblanching skin with reduced sensation",
        ],
        correct: 4,
        explanation:
          "Full thickness burns are dry, white or leathery, do not blanch and have reduced sensation because the nerve endings are destroyed. Her neuropathy makes sensation a less reliable guide. Burns in older adults are often deeper than they look.",
        keyFeature: { topic: "burns", n: 5 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What other issues would you explore about how this injury happened?",
        required: 2,
        accept: [
          { id: "neglect", text: "Elder abuse or neglect", match: ["abuse", "neglect", "elder"] },
          { id: "syncope", text: "Fall, syncope or other medical event at the time", match: ["syncope", "fall", "collapse", "medical cause", "hypoglycemia", "stroke", "seizure"] },
          { id: "cognition", text: "Cognitive impairment or delirium", match: ["cognition", "cognitive", "dementia", "delirium", "memory"] },
          { id: "delay", text: "Why she did not seek care for two days", match: ["delay", "why", "two day", "seek care"] },
          { id: "safety", text: "Home safety and ability to manage daily activities", match: ["home safety", "safety", "daily activities", "adl", "cope", "function"] },
        ],
        explanation:
          "A delayed presentation in an older adult should prompt questions about why she fell or spilled, and whether anyone is neglecting or harming her. Cognitive decline and hypoglycemia are common hidden causes. Home safety drives the discharge plan.",
        keyFeature: { topic: "abuse-domestic", n: 1 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        update: "Her last tetanus booster was more than 20 years ago.",
        prompt: "What tetanus prophylaxis does she need?",
        required: 1,
        accept: [
          { id: "td", text: "Tetanus toxoid containing vaccine such as Tdap or Td", match: ["tdap", "td", "tetanus toxoid", "tetanus booster", "tetanus vaccine", "adacel", "boostrix"] },
        ],
        explanation:
          "Burns are tetanus prone wounds. Her last dose was more than 5 years ago, so she needs a tetanus toxoid booster. Tetanus immune globulin is added if her primary series is incomplete or unknown.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "cig-tetanus",
      },
    ],
    sources: [ABA_REFERRAL, ABLS, CIG_TETANUS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-09",
    topic: "burns",
    alsoTopics: ["analgesia-sedation"],
    title: "Grabbed the wrong handle",
    stem:
      "A 27-year-old right-handed graphic designer grabbed the handle of a cast iron pan that had been in a hot oven. She arrives 40 minutes later. There are blistered, pink, moist burns across the palm and the palmar surface of the fingers of her right hand, about 1.5% TBSA. They blanch with brisk refill and are very painful. She is otherwise well.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following dispositions is most appropriate for her?",
        options: [
          "Admit to general surgery for daily dressings",
          "Admit to the ICU for fluid resuscitation",
          "Discharge, prompt burn centre or plastic surgery referral",
          "Discharge with family doctor follow up in two weeks",
          "Discharge with no planned follow up",
        ],
        correct: 2,
        explanation:
          "Partial thickness burns of the hands meet burn centre referral criteria regardless of size because of the risk to function. Most can be managed as outpatients with early specialist review. Small TBSA alone does not make a hand burn minor.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the elements of her wound care in the emergency department?",
        required: 3,
        accept: [
          { id: "cool", text: "Cool running water for 20 minutes, which still helps up to 3 hours after injury", match: ["cool", "running water", "cold water", "20 minute"] },
          { id: "clean", text: "Gentle cleaning with mild soap and water or saline", match: ["clean", "soap", "saline", "wash"] },
          { id: "blister", text: "Debride ruptured or large tense blisters", match: ["blister", "debride", "debridement", "deroof"] },
          { id: "dressing", text: "Non-adherent or antimicrobial dressing with fingers dressed separately", match: ["dressing", "non adherent", "nonadherent", "silver", "petrolatum", "vaseline gauze", "bacitracin", "mepitel", "jelonet"] },
          { id: "elevate", text: "Elevation", match: ["elevate", "elevation", "sling"] },
          { id: "splint", text: "Splint in the position of function and encourage range of motion", match: ["splint", "position of function", "range of motion", "rom", "movement"] },
          { id: "tetanus", text: "Update tetanus immunization", match: ["tetanus", "tdap", "td"] },
        ],
        unacceptable: [
          { text: "Ice or ice water", match: ["ice"] },
          { text: "Butter, oil or home remedies", match: ["butter", "oil", "toothpaste"] },
          { text: "Routine oral antibiotics", match: ["oral antibiotic", "prophylactic antibiotic", "systemic antibiotic", "cephalexin", "keflex"] },
        ],
        explanation:
          "Cool running water for 20 minutes reduces burn depth and pain. Clean, debride ruptured blisters and use a non-adherent dressing that allows early movement. Ice deepens tissue injury and prophylactic antibiotics are not indicated.",
        keyFeature: { topic: "burns", n: 5 },
        source: "isbi",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What analgesic strategies would you use in the emergency department and for her first days at home?",
        required: 2,
        accept: [
          { id: "acet", text: "Regular acetaminophen", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "nsaid", text: "Regular NSAID such as ibuprofen or naproxen", match: ["ibuprofen", "naproxen", "nsaid", "advil", "celecoxib", "ketorolac"] },
          { id: "opioid", text: "Short course of oral opioid for breakthrough and dressing changes", match: ["opioid", "hydromorphone", "morphine", "oxycodone", "tramadol"] },
          { id: "cool", text: "Cooling and covering the wound to reduce pain", match: ["cool", "cooling", "cover", "covering", "dressing"] },
          { id: "elevate", text: "Elevation", match: ["elevate", "elevation"] },
          { id: "premed", text: "Analgesia before dressing changes", match: ["before dressing", "premedicate", "pre medicate", "prior to dressing"] },
        ],
        explanation:
          "Superficial partial thickness burns are very painful because nerve endings are exposed. Covering the wound and cooling it bring rapid relief. Regular acetaminophen and an NSAID, with a short opioid supply for dressing changes, cover most patients.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "isbi",
      },
    ],
    sources: [ABA_REFERRAL, ISBI],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-10",
    topic: "burns",
    alsoTopics: ["multiple-trauma"],
    title: "Pulled from a burning car",
    stem:
      "A 40-year-old driver is extracted from a burning car after a head on collision on the highway. He arrives 40 minutes after the crash. GCS 14. He has partial and full thickness burns to both legs and the lower trunk, about 20% TBSA. His abdomen is tender and FAST shows fluid in Morison's pouch.",
    vitals: { pulse: "134/minute", resp: "28/minute", bp: "78/40 mmHg", o2sat: "94% on non-rebreather mask", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his hypotension?",
        options: [
          "Burn shock from capillary leak",
          "Carbon monoxide poisoning",
          "Hemorrhage from an intra-abdominal injury",
          "Neurogenic shock from a thoracic spinal cord injury",
          "Vasovagal response to pain",
        ],
        correct: 2,
        explanation:
          "Burn shock develops over hours and rarely causes hypotension in the first hour. Early hypotension in a burned patient is hemorrhage until proven otherwise. His positive FAST points to the abdomen.",
        keyFeature: { topic: "burns", n: 1 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What immediate interventions would you perform for his shock?",
        required: 3,
        accept: [
          { id: "mtp", text: "Activate the massive transfusion protocol and give blood products", match: ["massive transfusion", "mtp", "blood", "prbc", "packed red", "plasma", "transfusion", "transfuse"] },
          { id: "txa", text: "Tranexamic acid 1 g IV", match: ["tranexamic", "txa"] },
          { id: "surgery", text: "Urgent general or trauma surgery for laparotomy", match: ["laparotomy", "surgery", "surgeon", "operating room", "operating theatre"] },
          { id: "binder", text: "Pelvic binder if a pelvic injury is suspected", match: ["pelvic binder", "binder", "sheet"] },
          { id: "access", text: "Two large bore IV or IO lines", match: ["large bore", "iv access", "intraosseous", "io", "two iv"] },
          { id: "warm", text: "Prevent hypothermia with warmed products and a warm room", match: ["warm", "hypothermia"] },
          { id: "calcium", text: "IV calcium with transfusion", match: ["calcium"] },
        ],
        unacceptable: [{ text: "Large volume crystalloid by burn formula", match: ["parkland", "burn formula", "4 l", "5 l"] }],
        explanation:
          "Hemorrhagic shock takes priority over the burn. Balanced blood product resuscitation, TXA within 3 hours and source control are the key steps. Burn formula crystalloid will not correct hemorrhage and worsens coagulopathy.",
        keyFeature: { topic: "multiple-trauma", n: 6 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What other injuries or exposures must you specifically look for in this patient?",
        required: 2,
        accept: [
          { id: "spine", text: "Spinal injury", match: ["spine", "spinal", "c spine", "cervical"] },
          { id: "tbi", text: "Traumatic brain injury", match: ["head injury", "brain injury", "tbi", "intracranial", "head"] },
          { id: "pelvis", text: "Pelvic or long bone fractures", match: ["pelvic", "pelvis", "femur", "fracture", "long bone"] },
          { id: "chest", text: "Chest injury such as pneumothorax, hemothorax or aortic injury", match: ["pneumothorax", "hemothorax", "aortic", "chest injury", "rib"] },
          { id: "co", text: "Carbon monoxide or cyanide from smoke", match: ["carbon monoxide", "cyanide", "co poisoning", "co level", "cohb", "carboxyhemoglobin"] },
          { id: "inhal", text: "Inhalation injury", match: ["inhalation", "airway burn", "airway injury"] },
        ],
        explanation:
          "A high energy crash plus fire means injuries from both. The secondary survey must look for spine, head, chest and pelvic injury. Smoke exposure in a car fire can also cause carbon monoxide and cyanide poisoning.",
        keyFeature: { topic: "multiple-trauma", n: 3 },
        source: "atls",
      },
      {
        id: "q4",
        kind: "short",
        update: "He is in severe pain.",
        prompt: "What analgesic would you order given his hypotension, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "ketamine", text: "Ketamine 0.1 to 0.3 mg/kg IV, about 10 to 25 mg", match: ["ketamine 0.1", "ketamine 0.2", "ketamine 0.3", "ketamine 10 mg", "ketamine 15 mg", "ketamine 20 mg", "ketamine 25 mg"] },
          { id: "fentanyl", text: "Fentanyl in small titrated IV doses of 25 to 50 mcg, about 0.25 to 0.5 mcg/kg, repeated to effect", match: ["fentanyl 25 mcg", "fentanyl 50 mcg", "fentanyl 25mcg", "fentanyl 50mcg", "fentanyl 0.5 mcg/kg", "fentanyl 0.25 mcg/kg", "fentanyl 25", "fentanyl 50", "fentanyl 0.5"] },
        ],
        unacceptable: [
          { text: "Intramuscular opioid", match: ["intramuscular", "morphine im", "im morphine"] },
          { text: "Large morphine dose in shock", match: ["morphine 10 mg", "morphine 15 mg"], dangerous: true },
        ],
        explanation:
          "Analgesia should not be withheld because of hypotension. Low dose ketamine or small titrated doses of fentanyl provide relief with little effect on blood pressure. Morphine causes histamine release and more hypotension.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
    ],
    sources: [ATLS, ABLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-11",
    topic: "burns",
    alsoTopics: ["airway", "multiple-trauma"],
    title: "An explosion at the ice hut",
    stem:
      "A 45-year-old man was lighting a propane heater in his ice fishing hut when it exploded one hour ago. He has partial thickness burns to the face, neck, anterior chest and both arms, about 25% TBSA. His eyebrows are singed. Over 30 minutes in your department his voice has become muffled and a soft inspiratory stridor has appeared.",
    vitals: { pulse: "116/minute", resp: "24/minute", bp: "142/88 mmHg", o2sat: "96% on non-rebreather mask", weight: "100 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Arrange ENT nasendoscopy in the morning",
          "Intubate now by most experienced operator, surgical backup",
          "Nebulized epinephrine and dexamethasone, then reassess",
          "Start BiPAP to support his breathing",
          "Wait for a carboxyhemoglobin level before deciding",
        ],
        correct: 1,
        explanation:
          "Progressive voice change and new stridor mean airway edema is advancing. Swelling peaks over the first 24 hours and accelerates with fluid resuscitation. Waiting turns a controlled intubation into a failed airway.",
        keyFeature: { topic: "burns", n: 2 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following statements about his intubation are correct?",
        options: [
          "Awake intubation is contraindicated in airway burns",
          "Cut the tube short to reduce dead space",
          "Nasal intubation is preferred in facial burns",
          "Succinylcholine is contraindicated at any time after a burn",
          "Succinylcholine is safe within 24 hours of a burn",
          "Use a 6.0 mm tube routinely for the swollen glottis",
          "Use the largest tube possible, ideally 7.5 mm or more",
        ],
        select: 2,
        correct: [4, 6],
        explanation:
          "The hyperkalemic risk of succinylcholine begins after about 24 to 48 hours as receptors upregulate. A large tube allows bronchoscopy and clearance of casts, although smaller sizes must be on hand. Facial swelling will increase, so the tube is never cut short.",
        keyFeature: { topic: "airway", n: 5 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What methods would you use to confirm tube placement after intubation?",
        required: 2,
        accept: [
          { id: "etco2", text: "Continuous waveform capnography", match: ["capnography", "etco2", "end tidal", "co2 detector", "capnometry"] },
          { id: "cxr", text: "Chest radiograph for depth", match: ["chest x ray", "cxr", "x ray", "radiograph"] },
          { id: "ausc", text: "Auscultation of both lungs and epigastrium", match: ["auscultation", "breath sound", "listen"] },
          { id: "chest", text: "Bilateral chest rise", match: ["chest rise", "chest movement"] },
          { id: "us", text: "Airway or lung ultrasound", match: ["ultrasound", "lung sliding", "pocus"] },
          { id: "sat", text: "Stable oxygen saturation", match: ["saturation", "spo2", "oximetry"] },
          { id: "visual", text: "Direct or video visualization of the tube through the cords", match: ["visualization", "visualisation", "through the cord", "video"] },
        ],
        explanation:
          "Waveform capnography is the most reliable confirmation of tracheal placement. A chest radiograph checks depth. Clinical signs alone are unreliable, especially under burned, swollen tissue.",
        keyFeature: { topic: "airway", n: 6 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        update: "The nearest burn centre is 300 km away.",
        prompt: "What steps would you take to prepare him for transport?",
        required: 3,
        accept: [
          { id: "tube", text: "Secure the endotracheal tube with ties and plan for swelling", match: ["secure tube", "secure the tube", "secure ett", "endotracheal", "ett", "tie"] },
          { id: "fluid", text: "Fluids calculated from time of injury with an hourly plan", match: ["fluid", "ringer", "parkland", "resuscitation", "time of injury"] },
          { id: "foley", text: "Urinary catheter with hourly output", match: ["foley", "catheter", "urine output"] },
          { id: "ng", text: "Gastric tube", match: ["nasogastric", "orogastric", "ng", "og", "gastric tube"] },
          { id: "warm", text: "Keep warm with dry dressings", match: ["warm", "hypothermia", "dry dressing", "dry sheet", "blanket"] },
          { id: "analgesia", text: "Analgesia and sedation for the journey", match: ["analgesia", "sedation", "fentanyl", "ketamine", "propofol"] },
          { id: "docs", text: "Documentation and direct handover to the burn centre", match: ["document", "handover", "burn centre", "burn center", "call"] },
          { id: "access", text: "Two secure large bore lines", match: ["large bore", "iv access", "two iv", "io", "intraosseous"] },
          { id: "vent", text: "Transport ventilator settings and gas check before leaving", match: ["ventilator", "blood gas", "abg", "vbg", "vent setting"] },
        ],
        explanation:
          "A long transport leaves no room for airway or access problems. Secure the tube, drain the stomach and bladder, and send clear fluid targets. Warmth and analgesia are easily forgotten during packaging.",
        keyFeature: { topic: "multiple-trauma", n: 8 },
        source: "abls",
      },
    ],
    sources: [ABLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-12",
    topic: "burns",
    alsoTopics: ["tox"],
    title: "A splash at the plant",
    stem:
      "A 38-year-old woman at an industrial cleaning plant was splashed with a concentrated acid solution on both forearms and one thigh 30 minutes ago, about 5% TBSA. She was showered at the site. The product contains hydrofluoric acid. She now reports tingling around her mouth and muscle cramps. Her SpO2 is 98%. ECG shows a QTc of 520 ms.",
    vitals: { pulse: "112/minute", bp: "118/70 mmHg", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What electrolyte abnormalities do you expect?",
        required: 3,
        accept: [
          { id: "ca", text: "Hypocalcemia", match: ["hypocalcemia", "hypocalcaemia", "low calcium", "calcium"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "hypomagnesaemia", "low magnesium", "magnesium"] },
          { id: "k", text: "Hyperkalemia", match: ["hyperkalemia", "hyperkalaemia", "high potassium", "potassium"] },
          { id: "acid", text: "Metabolic acidosis", match: ["acidosis", "low bicarbonate"] },
        ],
        unacceptable: [{ text: "Hypercalcemia", match: ["hypercalcemia", "hypercalcaemia", "high calcium"] }],
        explanation:
          "Fluoride binds calcium and magnesium, and cell injury releases potassium. Concentrated HF over even a few percent of body surface can cause fatal hypocalcemia. Perioral tingling, cramps and a long QT are warnings of impending ventricular fibrillation.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hf-review",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What systemic treatments, with the dose of each, would you give now?",
        required: 2,
        accept: [
          { id: "ca", text: "IV calcium, either calcium chloride 10% 10 mL (1 g) through a secure line or calcium gluconate 10% 30 mL (3 g), repeated as needed", match: ["calcium chloride 1 g", "calcium chloride 10 ml", "cacl 1 g", "calcium chloride 1g", "cacl2 1 g", "calcium gluconate 3 g", "calcium gluconate 30 ml", "calcium gluconate 3g", "calcium gluconate 2 g", "calcium gluconate 2g", "calcium gluconate 20 ml"] },
          { id: "mg", text: "Magnesium sulfate 2 g IV", match: ["magnesium 2 g", "magnesium sulfate 2", "mgso4 2", "magnesium 2", "magnesium 2g", "magnesium sulfate 2g"] },
        ],
        unacceptable: [{ text: "Calcium chloride injected into the burned skin", match: ["subcutaneous calcium chloride", "infiltrate calcium chloride", "calcium chloride subcutaneous"], dangerous: true }],
        explanation:
          "Systemic HF toxicity needs aggressive IV calcium and magnesium, often in repeated doses guided by frequent levels and the ECG. Calcium chloride gives about three times the elemental calcium of the same volume of gluconate but must go IV, never into tissue. Either salt earns the calcium mark, and magnesium is the second.",
        keyFeature: { topic: "tox", n: 4 },
        source: "hf-review",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following dispositions is most appropriate after initial treatment?",
        options: [
          "Discharge once the tingling resolves",
          "Four hours of observation, then discharge",
          "Monitored ICU bed, serial electrolytes, burn centre input",
          "Surgical ward bed without cardiac or electrolyte monitoring",
          "Transfer to a hyperbaric oxygen unit",
        ],
        correct: 2,
        explanation:
          "Systemic fluoride toxicity can cause sudden ventricular fibrillation hours after exposure. She needs continuous cardiac monitoring and frequent calcium, magnesium and potassium checks. The burn centre can advise on the chemical wounds.",
        keyFeature: { topic: "tox", n: 5 },
        source: "hf-review",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What local treatments would you give for her skin?",
        required: 2,
        accept: [
          { id: "irrigate", text: "Continued copious water irrigation", match: ["irrigation", "irrigate", "water", "wash", "shower"] },
          { id: "gel", text: "Topical 2.5% calcium gluconate gel applied and reapplied", match: ["calcium gluconate gel", "calcium gel", "topical calcium", "calcium gluconate 2.5"] },
          { id: "sc", text: "Subcutaneous infiltration of 5% calcium gluconate for persistent pain", match: ["subcutaneous calcium gluconate", "infiltration", "subcutaneous", "sc calcium gluconate"] },
          { id: "clothes", text: "Remove all contaminated clothing and jewellery", match: ["remove clothing", "clothing", "clothes", "jewellery", "jewelry"] },
          { id: "ppe", text: "Staff protective equipment during decontamination", match: ["ppe", "protective", "glove", "gown"] },
        ],
        explanation:
          "Irrigation removes unbound acid and topical calcium binds the fluoride that remains. Pain guides repeated application or infiltration with calcium gluconate. Staff must wear gloves because secondary exposure is a real risk.",
        keyFeature: { topic: "burns", n: 6 },
        source: "hf-review",
      },
    ],
    sources: [HF],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-13",
    topic: "burns",
    title: "Weather delays the transfer",
    stem:
      "You are working in a rural emergency department. A 45-year-old woman sustained a 50% TBSA deep partial and full thickness burn in a house fire six hours ago. She was intubated for inhalation injury. A snowstorm has grounded the transport aircraft and she will remain in your department for several more hours. Ringer's lactate is running at 900 mL per hour. Urine output over the last two hours has been 140 and 130 mL.",
    vitals: { pulse: "118/minute", bp: "112/64 mmHg", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What hourly urine output target, in mL per hour, should guide her fluids?",
        required: 1,
        accept: [
          { id: "uo", text: "About 35 mL per hour, which is 0.5 mL/kg/h, with a range of 30 to 50 mL per hour", match: ["35", "0.5 ml/kg/h", "0.5 ml/kg/hr", "0.5 ml/kg", "0.5ml/kg/h", "30 to 50", "30 50", "0.5 ml kg", "30 ml", "40 ml", "50 ml"] },
        ],
        unacceptable: [{ text: "Target of 1 mL/kg/h or more in an adult thermal burn", match: ["70 ml", "100 ml", "1 ml/kg/h", "1 ml/kg"] }],
        explanation:
          "The adult thermal burn target is 0.5 mL/kg/h, which is 35 mL per hour for her. Output well above target means she is being over resuscitated. Higher targets are for children under about 30 kg and for pigmented urine after electrical injury.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "short",
        update: "Her output is well above target.",
        prompt: "What actions would you take?",
        required: 2,
        accept: [
          { id: "reduce", text: "Reduce the infusion rate by about 20 to 30%", match: ["reduce", "decrease", "lower", "wean", "titrate down", "cut back", "turn down"] },
          { id: "hourly", text: "Reassess urine output hourly and adjust again", match: ["hourly", "reassess", "every hour", "monitor urine"] },
          { id: "record", text: "Keep a running record of total fluid given against the formula", match: ["record", "chart", "track", "running total", "fluid balance", "document"] },
          { id: "glucose", text: "Check glucose to exclude osmotic diuresis", match: ["glucose", "glycosuria", "osmotic"] },
          { id: "burn", text: "Discuss the plan with the burn centre by phone", match: ["burn centre", "burn center", "phone", "call"] },
        ],
        explanation:
          "Fluid should be titrated down in steps of about 20 to 30% when output is above target. Stopping fluids abruptly can precipitate burn shock. Glycosuria can create a false high output, so check glucose.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What complications of over resuscitation would you watch for?",
        required: 3,
        accept: [
          { id: "abd", text: "Abdominal compartment syndrome", match: ["abdominal compartment", "intra abdominal hypertension", "bladder pressure"] },
          { id: "limb", text: "Extremity compartment syndrome", match: ["extremity compartment", "limb compartment", "compartment syndrome"] },
          { id: "lung", text: "Pulmonary edema and worsening oxygenation", match: ["pulmonary edema", "pulmonary oedema", "ards", "oxygenation", "hypoxia", "respiratory failure"] },
          { id: "orbital", text: "Orbital compartment syndrome", match: ["orbital"] },
          { id: "airway", text: "Worsening airway and facial edema", match: ["airway edema", "facial edema", "facial swelling", "airway swelling", "edema"] },
          { id: "conversion", text: "Deepening of burn wounds", match: ["conversion", "deepening", "wound depth"] },
        ],
        explanation:
          "Fluid creep is a well known harm of burn resuscitation. Abdominal, limb and orbital compartment syndromes and pulmonary edema all follow excess crystalloid. Measuring bladder pressure detects abdominal hypertension.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        update: "The nurse notes she grimaces and becomes tachycardic with every turn.",
        prompt: "What analgesia or sedation measures, with a dose for any drug, would you use for the coming hours?",
        required: 2,
        accept: [
          { id: "fent", text: "Fentanyl infusion, for example 1 to 2 mcg/kg/h with boluses", match: ["fentanyl infusion", "fentanyl 1 mcg/kg/h", "fentanyl 2 mcg/kg/h", "fentanyl 50 mcg/h", "fentanyl 100 mcg/h", "fentanyl 1 to 2", "fentanyl drip"] },
          { id: "ket", text: "Ketamine infusion, for example 0.1 to 0.5 mg/kg/h", match: ["ketamine infusion", "ketamine 0.1", "ketamine 0.2", "ketamine 0.3", "ketamine 0.5", "ketamine drip"] },
          { id: "hm", text: "Hydromorphone infusion or boluses of 0.5 to 1 mg IV", match: ["hydromorphone infusion", "hydromorphone 0.5", "hydromorphone 1 mg", "dilaudid infusion"] },
          { id: "prop", text: "Propofol infusion for sedation in addition to analgesia", match: ["propofol infusion", "propofol 5", "propofol 10", "propofol 20", "propofol drip"] },
          { id: "bolus", text: "Pre-emptive opioid bolus before turning or dressing", match: ["before turning", "pre emptive", "preemptive", "before repositioning", "before dressing", "prior to turning"] },
        ],
        unacceptable: [{ text: "Increase paralysis", match: ["rocuronium", "vecuronium", "cisatracurium", "increase paralysis", "paralytic infusion"], dangerous: true }],
        explanation:
          "Burn pain is severe and persistent, and intubated patients cannot report it. Analgesia first with an opioid or ketamine infusion, adding sedation as needed. Pre-emptive boluses before care prevent spikes. Paralysis hides pain without treating it.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
    ],
    sources: [ABLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-14",
    topic: "burns",
    title: "Screaming in the ambulance bay",
    stem:
      "A 30-year-old man was scalded by steam from a burst pipe at a pulp mill 45 minutes ago. He has blistered partial thickness burns to the back, buttocks and backs of both thighs, about 22% TBSA. Paramedics gave morphine 10 mg IM on scene. He is screaming in pain.",
    vitals: { pulse: "128/minute", resp: "24/minute", bp: "138/84 mmHg", o2sat: "98% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What analgesic would you order now, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "fent", text: "Fentanyl 1 mcg/kg IV, about 75 mcg, repeated every 5 minutes to effect", match: ["fentanyl 75 mcg iv", "fentanyl 50 mcg iv", "fentanyl 100 mcg iv", "fentanyl 1 mcg/kg iv", "fentanyl 1 mcg/kg", "fentanyl 75 iv", "fentanyl 50 iv", "fentanyl 100 iv"] },
          { id: "morph", text: "Morphine 0.1 mg/kg IV, about 5 to 7.5 mg, titrated", match: ["morphine 5 mg iv", "morphine 7.5 mg iv", "morphine 0.1 mg/kg iv", "morphine 0.1 mg/kg", "morphine 5 iv", "morphine 7.5 iv", "morphine 4 mg iv"] },
          { id: "hm", text: "Hydromorphone 0.5 to 1 mg IV, titrated", match: ["hydromorphone 0.5 mg iv", "hydromorphone 1 mg iv", "hydromorphone 1 iv", "hydromorphone 0.5 iv", "dilaudid 1 mg iv"] },
          { id: "ket", text: "Ketamine 0.1 to 0.3 mg/kg IV", match: ["ketamine 0.1", "ketamine 0.2", "ketamine 0.3", "ketamine 10 mg iv", "ketamine 15 mg iv", "ketamine 20 mg iv"] },
        ],
        unacceptable: [{ text: "Another intramuscular dose", match: ["intramuscular", "morphine im", "im morphine", "repeat im"] }],
        explanation:
          "IV opioid titrated to effect is the standard for severe burn pain. Small doses every few minutes allow rapid relief with less risk. Low dose ketamine is a useful adjunct.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Why is intramuscular opioid a poor choice in major burns?",
        required: 2,
        accept: [
          { id: "absorb", text: "Unreliable absorption because of poor tissue perfusion and edema", match: ["absorption", "absorbed", "perfusion", "edema", "oedema", "unreliable", "erratic"] },
          { id: "delayed", text: "Delayed toxicity when perfusion is restored and depots are absorbed at once", match: ["delayed", "depot", "stacking", "later", "respiratory depression", "toxicity"] },
          { id: "slow", text: "Slow onset and cannot be titrated", match: ["slow onset", "titrate", "titration", "onset"] },
          { id: "painful", text: "The injection itself is painful", match: ["painful injection", "injection pain", "hurt", "painful"] },
        ],
        explanation:
          "Burn shock reduces muscle blood flow, so IM drugs are absorbed slowly and unpredictably. Repeated doses can pool and release together once fluids restore perfusion. IV titration gives control over both relief and side effects.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        update: "He is comfortable. You have started fluids and a urinary catheter. Your emergency department has no burn service.",
        prompt: "What reasons or steps determine his disposition?",
        required: 3,
        accept: [
          { id: "tbsa", text: "Partial thickness burns of 10% TBSA or more meet burn centre referral criteria", match: ["10%", "tbsa", "size", "22%", "extent", "percent"] },
          { id: "perineum", text: "Check for perineal or genital involvement, a separate referral criterion", match: ["perineum", "perineal", "genital"] },
          { id: "fluids", text: "He needs formal fluid resuscitation", match: ["fluid", "resuscitation"] },
          { id: "call", text: "Call the burn centre to arrange transfer", match: ["burn centre", "burn center", "transfer", "burn unit", "call"] },
          { id: "work", text: "Workplace injury needing documentation and WSIB or workers' compensation reporting", match: ["wsib", "workers compensation", "worksafe", "workplace", "occupational"] },
          { id: "warm", text: "Dry dressings and warmth for transport", match: ["dry dressing", "warm", "hypothermia", "clean sheet", "dry sheet"] },
        ],
        explanation:
          "Partial thickness burns of 10% TBSA or more meet burn centre criteria on their own. Burns of the perineum or genitals are a separate criterion, so look for them when the buttocks are burned. A 22% burn needs formal resuscitation and transfer. Workplace injuries also carry reporting obligations.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to cooling as part of his pain control?",
        options: [
          "Apply crushed ice packs to burned areas for 30 minutes",
          "Avoid cooling for steam burns",
          "Keep cold wet sheets on for the transfer",
          "Limit cooling of large burns and prevent hypothermia",
          "Stop cooling after the first 5 minutes",
        ],
        correct: 3,
        explanation:
          "Cool running water reduces pain and depth and still helps up to about 3 hours after injury. In large burns, core temperature must be protected, so cooling is limited and the patient is then dried and covered. Ice and wet sheets cause hypothermia and deepen injury. Cool running water for 20 minutes helps small burns. Cooling is not contraindicated for steam burns.",
        keyFeature: { topic: "burns", n: 3 },
        source: "isbi",
      },
    ],
    sources: [ABLS, ABA_REFERRAL, ISBI],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "burns-15",
    topic: "burns",
    alsoTopics: ["asthma-copd"],
    title: "A spark near the nasal prongs",
    stem:
      "A 72-year-old man with COPD on home oxygen at 2 L/minute lit a cigarette while wearing his nasal prongs. There was a flash at his face. He has superficial partial thickness burns to the nose, upper lip and cheeks. His nasal hairs and eyebrows are singed. His voice is normal and there is no stridor. There is no soot in his mouth. His SpO2 is at his usual baseline. Carboxyhemoglobin 6%.",
    vitals: { o2sat: "90% on 2 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings, if they developed, would raise your concern for significant airway injury?",
        required: 2,
        accept: [
          { id: "voice", text: "Hoarseness or voice change", match: ["hoarse", "hoarseness", "voice", "dysphonia"] },
          { id: "stridor", text: "Stridor", match: ["stridor"] },
          { id: "soot", text: "Soot in the mouth or carbonaceous sputum", match: ["soot", "carbonaceous", "carbon"] },
          { id: "oral", text: "Oropharyngeal edema or blistering", match: ["oropharyngeal", "oropharynx", "tongue", "intraoral", "mouth", "pharynx", "blistering"] },
          { id: "distress", text: "Increasing respiratory distress or falling saturation", match: ["respiratory distress", "dyspnea", "dyspnoea", "work of breathing", "desaturation", "hypoxia", "saturation"] },
          { id: "drool", text: "Drooling or difficulty swallowing", match: ["drool", "drooling", "dysphagia", "swallow"] },
        ],
        explanation:
          "Home oxygen flash fires usually cause superficial facial burns with little airway involvement. Singed hairs alone do not mandate intubation. Change in voice, stridor, oral swelling or soot would signal injury below the face.",
        keyFeature: { topic: "burns", n: 2 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best interpretation of his carboxyhemoglobin of 6%?",
        options: [
          "A reason for early intubation",
          "An indication for hydroxocobalamin",
          "Carbon monoxide poisoning needing hyperbaric oxygen",
          "Evidence of coexisting cyanide toxicity",
          "Within the expected range for a smoker",
        ],
        correct: 4,
        explanation:
          "Smokers commonly have carboxyhemoglobin up to about 10%. A level of 6% after a brief flash without smoke exposure is expected. It does not indicate hyperbaric oxygen or cyanide treatment.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hampson-co",
      },
      {
        id: "q3",
        kind: "short",
        update: "After a period of observation his airway remains normal.",
        prompt: "What considerations apply to his disposition?",
        required: 3,
        accept: [
          { id: "face", text: "Facial burns meet burn centre referral or consultation criteria", match: ["burn centre", "burn center", "plastic", "referral", "face burn", "facial burn"] },
          { id: "observe", text: "Period of airway observation before discharge", match: ["observe", "observation", "monitor airway", "airway watch"] },
          { id: "smoking", text: "Smoking cessation", match: ["smoking", "cessation", "quit", "nicotine", "cigarette"] },
          { id: "o2safety", text: "Home oxygen safety review with his oxygen provider and respirologist", match: ["oxygen safety", "home oxygen", "oxygen provider", "home o2", "fire safety", "oxygen supplier"] },
          { id: "copd", text: "Baseline COPD status and ability to manage at home", match: ["copd", "baseline", "respiratory status", "manage at home", "home support", "home situation"] },
          { id: "wound", text: "Facial wound care and follow up", match: ["wound care", "follow up", "dressing", "ointment"] },
          { id: "eyes", text: "Eye examination for corneal injury", match: ["eye", "cornea", "corneal", "fluorescein"] },
        ],
        explanation:
          "Face burns warrant discussion with a burn centre even when small. Continuing to smoke on oxygen risks a larger fire, so safety counselling and notifying his oxygen provider matter. His COPD and social supports decide whether he can go home.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [ABLS, CO, ABA_REFERRAL],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
];
