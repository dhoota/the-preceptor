// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  abaResus: { id: "aba-resus", citation: "Cartotto R, Johnson LS, Savetamal A, and colleagues. American Burn Association clinical practice guidelines on burn shock resuscitation. J Burn Care Res. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38051821/" },
  abls: { id: "abls", citation: "American Burn Association. Advanced Burn Life Support Course Provider Manual. 2018 update." },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/resources/burnreferral/" },
  trekkBurns: { id: "trekk-burns", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations: pediatric thermal burns. Version 2.0. 2025.", url: "https://trekk.ca/resources/bottom-line-recommendations-pediatric-thermal-burns/" },
  trekkPain: { id: "trekk-pain", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations: pain treatment. Version 4.0. 2023.", url: "https://trekk.ca/resources/bottom-line-recommendations-pain-treatment/" },
  trekkAbuse: { id: "trekk-abuse", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations: suspected physical child abuse. Version 2.0. 2023.", url: "https://trekk.ca/resources/bottom-line-recommendations-suspected-physical-child-abuse/" },
  abaPain: { id: "aba-pain", citation: "Romanowski KS, Carson J, Pape K, and colleagues. American Burn Association guidelines on the management of acute pain in the adult burn patient. J Burn Care Res. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32885244/" },
  arnoldo: { id: "arnoldo-electrical", citation: "Arnoldo B, Klein M, Gibran NS. Practice guidelines for the management of electrical injuries. J Burn Care Res. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16819345/" },
  bosch: { id: "bosch-rhabdo", citation: "Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19571284/" },
  anseeuw: { id: "anseeuw-cyanide", citation: "Anseeuw K, Delvau N, Burillo-Putze G, and colleagues. Cyanide poisoning by fire smoke inhalation: a European expert consensus. Eur J Emerg Med. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/22828651/" },
  borron: { id: "borron-hydroxo", citation: "Borron SW, Baud FJ, Megarbane B, Bismuth C. Hydroxocobalamin for severe acute cyanide poisoning by ingestion or inhalation. Am J Emerg Med. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17543660/" },
  hampson: { id: "hampson-co", citation: "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. Am J Respir Crit Care Med. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23087025/" },
  walker: { id: "walker-inhalation", citation: "Walker PF, Buehner MF, Wood LA, and colleagues. Diagnosis and management of inhalation injury: an updated review. Crit Care. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26507130/" },
  griffin: { id: "griffin-cooling", citation: "Griffin BR, Frear CC, Babl F, Oakley E, Kimble RM. Cool running water first aid decreases skin grafting requirements in pediatric burns. Ann Emerg Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/31474480/" },
  palao: { id: "palao-chemical", citation: "Palao R, Monge I, Ruiz M, Barret JP. Chemical burns: pathophysiology and treatment. Burns. 2010.", url: "https://pubmed.ncbi.nlm.nih.gov/19864073/" },
  cig: { id: "cig-tetanus", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Tetanus toxoid. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html" },
  martyn: { id: "martyn-sux", citation: "Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Anesthesiology. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16394702/" },
  kemp: { id: "kemp-patterns", citation: "Kemp AM, Jones S, Lawson Z, Maguire SA. Patterns of burns and scalds in children. Arch Dis Child. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24492796/" },
  isbi: { id: "isbi", citation: "ISBI Practice Guidelines Committee. ISBI practice guidelines for burn care. Burns. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27542292/" },
  atls: { id: "atls", citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 11th ed. 2025.", url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/" },
  mintegi: { id: "mintegi-cyanide", citation: "Mintegi S, Clerigue N, Tipo V, and colleagues. Pediatric cyanide poisoning by fire smoke inhalation: a European expert consensus. Pediatr Emerg Care. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24196100/" },
  mha: { id: "ontario-mha", citation: "Ontario. Mental Health Act, R.S.O. 1990, c. M.7. Section 15, application for psychiatric assessment.", url: "https://www.ontario.ca/laws/statute/90m07" },
  hoffman: { id: "hoffman-commissure", citation: "Hoffman KA, Trigger CC. Pediatric oral commissure burn. Clin Pract Cases Emerg Med. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5965444/" },
  motov: { id: "motov-ketamine", citation: "Motov S, Rockoff B, Cohen V, and colleagues. Intravenous subdissociative-dose ketamine versus morphine for analgesia in the emergency department: a randomized controlled trial. Ann Emerg Med. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25817884/" },
  streitz: { id: "merck-escharotomy", citation: "Streitz MJ. How to do burn escharotomy. Merck Manual Professional Edition. Revised 2025.", url: "https://www.merckmanuals.com/professional/injuries-poisoning/how-to-do-skin-soft-tissue-and-minor-surgical-procedures/how-to-do-burn-escharotomy" },
  rosenCh54: { id: "rosen-ch54", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 54, Thermal Injuries.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  niceHead: { id: "nice-head-injury", citation: "National Institute for Health and Care Excellence. Head injury: assessment and early management. NICE guideline NG232. 2023.", url: "https://www.nice.org.uk/guidance/ng232" },
  osler: { id: "osler-baux", citation: "Osler T, Glance LG, Hosmer DW. Simplified estimates of the probability of death after burn injuries: extending and updating the Baux score. J Trauma. 2010.", url: "https://pubmed.ncbi.nlm.nih.gov/20038856/" },
  alyahya: { id: "alyahya-apap-screen", citation: "Alyahya B, Alalshaikh A, Almohawes M, and colleagues. The clinical value of screening for acetaminophen in all patients with intentional overdose or altered mental status suspected to be secondary to overdose. Front Pharmacol. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12343594/" },
  atsdrPhenol: { id: "atsdr-phenol", citation: "Agency for Toxic Substances and Disease Registry. Medical management guidelines for phenol. Centers for Disease Control and Prevention. Last reviewed 2014.", url: "https://wwwn.cdc.gov/TSp/MMG/MMGDetails.aspx?mmgid=144&toxid=27" },
  levis: { id: "levis-acs-burns", citation: "Levis C, Ali F. Significance of early diagnosis of abdominal compartment syndrome in major burns. Can J Plast Surg. 2006.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2539035/" },
} satisfies Record<string, Source>;

export const BURNS_S26: Samp[] = [
  {
    id: "burns-16",
    topic: "burns",
    title: "Hot sap at the sugar shack",
    stem: "You are working in a regional hospital emergency department in the Eastern Townships of Quebec. A 54-year-old man arrives by ambulance at 11:40. At 10:40 a valve on the maple sap evaporator in his sugar shack failed, and boiling sap surged over the pan onto him as he knelt to feed the firebox. He has blistered, moist partial thickness scalds of the abdomen, both thighs and both forearms, measured at 26% TBSA on a Lund and Browder chart. His face is spared and his voice is normal. He has bipolar disorder treated with lithium for 20 years. For years he has passed about 6 L of pale urine a day and drunk to match. His psychiatrist has told him to avoid anti-inflammatory drugs because they raise his lithium level. He drinks no alcohol. Paramedics reached him at 11:05. Ringer's lactate is started at 11:55.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "112/minute",
      resp: "20/minute",
      bp: "138/84 mmHg",
      o2sat: "98% on room air",
      weight: "88 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Using the 2 mL/kg/%TBSA formula, at which of the following times does the first 8-hour period of his resuscitation end?",
        options: [
          "18:40",
          "19:05",
          "19:40",
          "19:55",
          "22:40"
        ],
        correct: 0,
        explanation: "Burn resuscitation is timed from the injury, not from the paramedics' arrival, the emergency department arrival or the start of the infusion. His burn happened at 10:40, so the first 8 hours, in which half of the 24-hour estimate is planned, end at 18:40. The estimate is 2 x 88 kg x 26% = 4 576 mL for 24 hours, and half of it, 2 288 mL, over 8 hours is 286 mL/hour. The Alaska guideline starts this calculated rate without extra catch-up fluid for the delay. Timing from the paramedics gives 19:05, from arrival 19:40 and from the start of fluid 19:55, and each pushes the plan later than the injury warrants. 22:40 is 12 hours after the burn.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q2",
        kind: "single",
        update: "Ringer's lactate runs at 286 mL/hour. Over the next 3 hours his urine output is 240, 260 and 250 mL/hour, and it is pale. His capillary glucose is 6.4 mmol/L. His pulse is 108/minute and he is alert.",
        prompt: "Which of the following best explains his hourly urine output?",
        options: [
          "Alcohol-related diuresis",
          "Excess fluid resuscitation",
          "Glucose-driven osmotic diuresis",
          "Lithium-induced diabetes insipidus",
          "Normal response to burn resuscitation"
        ],
        correct: 3,
        explanation: "Lithium is one of the commonest causes of acquired nephrogenic diabetes insipidus, and about 12% of people treated for 15 years develop the overt form. After 20 years of lithium he has long passed about 6 L of pale urine a day, and his kidneys keep making about 250 mL an hour now, close to that usual volume. An adult burn patient who is responding normally makes about 0.5 mL/kg/hour, about 44 mL an hour for him, not 250. Excess fluid is unlikely at a standard formula rate when his output simply matches his usual pattern. A glucose of 6.4 mmol/L makes an osmotic diuresis unlikely, and he drinks no alcohol.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "davis-lithium"
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours later his urine output is still about 250 mL/hour. His pulse is 106/minute, BP 134/80 mmHg, lactate 1.6 mmol/L and sodium 141 mmol/L. He is alert and his hands are warm.",
        prompt: "Which of the following is the most appropriate change to his Ringer's lactate rate now?",
        options: [
          "Increase the rate by 10%",
          "Keep the current rate",
          "Reduce the rate by 10%",
          "Reduce the rate by half",
          "Stop the infusion for 1 hour"
        ],
        correct: 1,
        explanation: "The Alaska guideline titrates burn fluid to hourly urine output, lowering the rate by 10% an hour when output stays above 30 mL/hour and the mean arterial pressure is above 60 mmHg. That rule assumes urine output reflects kidney perfusion. His does not, because his output stays near his usual daily volume whatever his fluid state, so cutting the rate each hour would steadily under-resuscitate a 26% burn. His pulse is settling, his mean arterial pressure is about (134 + 2 x 80) / 3 = 98 mmHg, his lactate is normal, his sodium of 141 mmol/L shows no free water deficit and he is alert, so nothing shows that he needs more fluid either. The safest course is to keep the rate, follow these other markers closely and ask the burn centre for advice. Halving or stopping the infusion risks burn shock.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        update: "He rates his pain 9 out of 10. He has had no analgesia.",
        prompt: "Which of the following is the most appropriate analgesic plan for him now?",
        options: [
          "celecoxib 200 mg PO, fentanyl 50 mcg IV",
          "fentanyl 50 mcg IV, acetaminophen 1 g IV",
          "fentanyl 50 mcg IV, ketorolac 30 mg IV",
          "morphine 10 mg IM, acetaminophen 1 g PO",
          "oxycodone 10 mg PO, acetaminophen 1 g PO"
        ],
        correct: 1,
        explanation: "A 26% burn with pain rated 9 out of 10 needs IV analgesia given in repeated small doses and titrated to effect, with monitoring for respiratory depression. The Alaska guideline advises giving all medications IV for burns over 20% TBSA and combining an opioid with other agents. Fentanyl with IV acetaminophen does this without an anti-inflammatory drug, which his psychiatrist has told him to avoid because it raises his lithium level. Ketorolac and celecoxib are both anti-inflammatory drugs. Intramuscular morphine and oral oxycodone do not follow the IV route the guideline advises for a burn of this size.",
        keyFeature: {
          topic: "burns",
          n: 3
        },
        source: "alaska"
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit to general surgery here",
          "Admit to internal medicine here",
          "Admit to the ICU here",
          "Burn centre transfer",
          "Discharge with burn clinic follow-up"
        ],
        correct: 3,
        explanation: "The American Burn Association advises immediate consultation with a burn centre, with consideration of transfer, for partial thickness burns of 10% TBSA or more and for patients with burns and other comorbidities. He has a 26% burn, and his urine output cannot guide his fluids, which makes his resuscitation unusually difficult. A general surgery, internal medicine or ICU bed here does not provide burn centre care. Discharge would leave a major burn without resuscitation or specialist wound care.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      }
    ],
    sources: [
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      },
      {
        id: "davis-lithium",
        citation: "Davis J, Desmond M, Berk M. Lithium and nephrotoxicity: a literature review of approaches to clinical management and risk stratification. BMC Nephrol. 2018.",
        url: "https://doi.org/10.1186/s12882-018-1101-4"
      },
      S.abaRef
    ],
    reviewed: false,
    author: META.author,
    version: 3,
  },
  {
    id: "burns-17",
    topic: "burns",
    title: "A toddler and a kettle cord",
    stem:
      "A 2-year-old boy is brought to the emergency department by his parents 40 minutes after he pulled an electric kettle of freshly boiled water off the counter by its cord. His father held him under the kitchen tap for about 2 minutes, then drove him in. He is healthy and his immunizations are up to date.\n\nHe is screaming and pulls away from any touch. There are moist, pink, blistered burns that blanch over the entire front of the trunk and the front of both upper arms. The face, hands and perineum are spared. There are no other injuries.",
    vitals: { temperature: "37.1°C rectal", pulse: "156/minute", resp: "32/minute", bp: "98/62 mmHg", o2sat: "99% on room air", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first analgesic for him before IV access is obtained?",
        options: ["fentanyl 13 mcg IN", "fentanyl 20 mcg IN", "fentanyl 39 mcg IN", "fentanyl 50 mcg IN", "fentanyl 100 mcg IN"],
        correct: 1,
        explanation:
          "Severe pain in a child without IV access is treated with intranasal fentanyl 1.5 mcg/kg, which is 19.5 mcg, or about 20 mcg, at 13 kg. 13 mcg is 1 mcg/kg, the IV dose, and is likely to undertreat. 39 mcg is 3 mcg/kg, twice the recommended dose. 50 mcg is the ceiling for a repeat dose, not a weight-based first dose. 100 mcg is the maximum single dose for a larger child and would be over 7 mcg/kg here.",
        keyFeature: { topic: "burns", n: 3 },
        source: "trekk-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first aid for his burns now?",
        options: ["Apply ice packs to the burns", "Apply silver sulfadiazine cream", "Cool running water for 20 minutes", "Debride all the blisters now", "Wrap the burns in dry gauze"],
        correct: 2,
        explanation:
          "He had only 2 minutes of cooling, and 20 minutes of cool running water still helps up to 3 hours after the burn. In a large paediatric cohort it lowered the need for grafting. It also eases pain. Ice causes further tissue injury and hypothermia. Silver sulfadiazine slows re-epithelialization and is no longer advised. Debridement comes later, with analgesia or sedation. Dry gauze sticks to the wound, and plastic cling wrap laid lengthwise is preferred after cooling.",
        keyFeature: { topic: "burns", n: 3 },
        source: "trekk-burns",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is his burn size using the Lund and Browder chart?",
        options: ["13%", "15%", "17%", "21%", "27%"],
        correct: 2,
        explanation:
          "On the Lund and Browder chart the anterior trunk is 13% at every age and each upper arm is 4%, split 2% front and 2% back. The front of the trunk and the front of both upper arms give 13 + 2 + 2 = 17%. 13% counts the trunk alone. 15% counts only one arm. 21% counts both upper arms in full. 27% uses the adult rule of nines, which does not fit a toddler's proportions.",
        keyFeature: { topic: "burns", n: 4 },
        source: "trekk-burns",
      },
      {
        id: "q4",
        kind: "single",
        update: "IV access is obtained 1 hour after the burn. You use the TREKK formula of 3 mL/kg per %TBSA of Ringer's lactate for children aged 12 years and under.",
        prompt: "Which of the following Ringer's lactate rates should run now, in addition to his dextrose maintenance fluid?",
        options: ["28 mL/hour", "32 mL/hour", "41 mL/hour", "47 mL/hour", "83 mL/hour"],
        correct: 3,
        explanation:
          "The 24 hour estimate is 3 x 13 kg x 17 = 663 mL. Half, about 332 mL, is due in the first 8 hours from the burn, and 7 of those hours remain, so 332 / 7 is about 47 mL/hour. 41 mL/hour spreads the first half over 8 hours and ignores the hour already passed. 32 mL/hour uses the adult 2 mL/kg figure. 28 mL/hour is the whole volume over 24 hours. 83 mL/hour gives all 663 mL in the first 8 hours.",
        keyFeature: { topic: "burns", n: 4 },
        source: "trekk-burns",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit to the general paediatric ward", "Discharge with burn clinic follow-up", "Home care nursing for dressings", "Observe for 6 hours then discharge", "Transfer to a paediatric burn centre"],
        correct: 4,
        explanation:
          "Partial thickness burns of 10% TBSA or more in a child meet criteria for transfer to a paediatric burn centre, and he has 17% needing IV resuscitation. He will need repeated dressing changes under sedation and close fluid titration. A general paediatric ward lacks burn surgery and wound care expertise. Discharge, home nursing or brief observation ignore a burn of this size and his fluid needs.",
        keyFeature: { topic: "burns", n: 5 },
        source: "trekk-burns",
      },
    ],
    sources: [S.trekkBurns, S.trekkPain],
    ...META,
  },
  {
    id: "burns-18",
    topic: "burns",
    title: "Found beside the heater",
    stem:
      "An 84-year-old woman is brought to the emergency department by ambulance after her son found her on the floor of her apartment beside an electric space heater. She was last seen well about 16 hours earlier. She recalls feeling light-headed when she stood up at night and could not get up after she fell. She has atrial fibrillation and takes apixaban and metoprolol. She lives alone.\n\nShe is drowsy but answers questions. GCS 14. There is a bruise over the left temple. A white, leathery, insensate burn covers the left flank and lateral left thigh where she lay against the heater, about 4% TBSA. Her urine is dark brown.",
    vitals: { temperature: "37.6°C oral", pulse: "112/minute irregular", resp: "20/minute", bp: "102/58 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following blood tests is most important to add for her now?",
        options: ["Blood cultures, two sets", "Carboxyhemoglobin level", "Creatine kinase level", "Serum lipase level", "Thyroid stimulating hormone"],
        correct: 2,
        explanation:
          "Up to 16 hours on the floor, a deep contact burn and dark brown urine point to rhabdomyolysis, so creatine kinase is needed along with creatinine and potassium. A carboxyhemoglobin level adds little because an electric heater burns no fuel and makes no carbon monoxide. Her low grade temperature fits prolonged immobility and tissue injury better than bacteremia at this stage. Lipase and thyroid testing do not change her early management.",
        keyFeature: { topic: "burns", n: 1 },
        source: "bosch-rhabdo",
      },
      {
        id: "q2",
        kind: "single",
        update: "Creatine kinase is 38 000 U/L, creatinine 168 umol/L and potassium 5.6 mmol/L. The urine dipstick is strongly positive for blood. Microscopy shows 2 red cells per high power field. Her plasma is not pink.",
        prompt: "Which of the following best explains her urine dipstick and microscopy findings?",
        options: ["Anticoagulant related hematuria", "Glomerular hematuria", "Hemoglobinuria from hemolysis", "Myoglobinuria from muscle injury", "Urinary tract infection"],
        correct: 3,
        explanation:
          "A dipstick strongly positive for blood with only 2 red cells per high power field means a heme pigment without red cells, and with a creatine kinase of 38 000 U/L that pigment is myoglobin. Hemoglobinuria also gives this dipstick pattern, but hemolysis turns the plasma pink and her plasma is clear. Hematuria from apixaban, glomerular disease or infection would show many red cells on microscopy.",
        keyFeature: { topic: "burns", n: 1 },
        source: "bosch-rhabdo",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following additional investigations is most urgent for her?",
        options: ["Carotid Doppler ultrasound", "Echocardiogram", "Electroencephalogram", "Holter monitor", "Noncontrast CT of the head"],
        correct: 4,
        explanation:
          "She fell while taking apixaban, has a bruise over the temple and a GCS of 14, so intracranial hemorrhage must be excluded with a noncontrast CT of the head. Associated trauma is looked for in every burned patient, and here it may change anticoagulation now. An echocardiogram or Holter monitor may later help explain the light-headedness, but neither is urgent. Carotid Doppler and EEG do not fit a fall on standing.",
        keyFeature: { topic: "burns", n: 1 },
        source: "nice-head-injury",
      },
      {
        id: "q4",
        kind: "single",
        update: "The CT of the head shows no bleeding. Fluids are started for rhabdomyolysis.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Admit under burn surgery", "Admit under geriatric medicine", "Admit under internal medicine", "Discharge with burn clinic follow-up", "Short stay observation, then home"],
        correct: 0,
        explanation:
          "A full thickness burn needs burn centre care for excision and grafting, and her age, atrial fibrillation on apixaban, rhabdomyolysis with kidney injury and living alone all add to that need. American Burn Association criteria call for consultation with transfer for any full thickness burn and for burns with comorbidities. Geriatric or internal medicine can help as consultants, but they cannot excise or graft the wound. Discharge or brief observation ignores a deep burn, kidney injury and an unsafe home.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.bosch, S.abaRef, S.niceHead],
    ...META,
  },
  {
    id: "burns-19",
    topic: "burns",
    title: "A slip in the restaurant kitchen",
    stem: "A 44-year-old restaurant cook presents to the emergency department 40 minutes after he slipped on a greasy kitchen floor. His left hand went into a deep fryer as he fell, and he landed on his outstretched left hand. A coworker held the hand under cool running water for 20 minutes. He has pink, moist, blistered burns that blanch briskly and are very painful over the back of the left hand, fingers and wrist, about 2% TBSA. The burns do not encircle the wrist. He wears a wedding ring on the left ring finger, and the finger is swelling around it. His left wrist is swollen and tender over the distal radius. He is right-handed and otherwise healthy. He rates his pain as 8 out of 10 after IV fentanyl.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "102/minute",
      resp: "18/minute",
      bp: "138/84 mmHg",
      o2sat: "99% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most urgent step for his left hand now?",
        options: [
          "Apply silver sulfadiazine cream",
          "Debride all blisters now",
          "Elevate the hand on pillows",
          "Remove his wedding ring",
          "Start oral cephalexin"
        ],
        correct: 3,
        explanation: "His finger is already swelling around his ring, and burn edema increases over the next hours. The Alaska burn guideline advises removing all clothing and jewellery in the area of the burn and distal to it, before swelling turns a ring into a tourniquet that threatens the finger. Elevating the hand helps limit swelling, but it does not remove the constriction. The guideline advises debriding only blisters larger than 2 cm or over a joint, not every blister. It states that antibiotics are unnecessary for burns. It keeps silver sulfadiazine for full thickness wounds, and dressings come after the ring is off.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      },
      {
        id: "q2",
        kind: "single",
        update: "An X-ray of the left wrist shows a displaced distal radius fracture, which is reduced under procedural sedation. The burn covers the back of the hand and wrist over the fracture.",
        prompt: "Which of the following is the most appropriate way to immobilize his wrist?",
        options: [
          "Circumferential cast over the dressings",
          "Compression wrap around the wrist",
          "Padded volar splint, not encircling",
          "Removable brace strapped over the burn",
          "No immobilization until the burn heals"
        ],
        correct: 2,
        explanation: "The Alaska guideline warns that burned limbs swell, that splints must be reassessed so the swelling does not make them constrictive, and that injuries should not be wrapped circumferentially. A padded volar slab holds the reduction, leaves room for swelling and keeps the dorsal burn open for dressing care. A full cast or a circumferential compression wrap can act as a tourniquet as edema rises. A brace strapped over the burn presses on the wound. Leaving a reduced displaced fracture unsupported risks losing the reduction.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      },
      {
        id: "q3",
        kind: "single",
        update: "His pain is controlled. The orthopaedic surgeon is satisfied with the reduction and offers fracture clinic in 1 week. The burn centre is 90 minutes away by road.",
        prompt: "Which of the following is the most appropriate next step in his disposition?",
        options: [
          "Admit to orthopaedics for elevation",
          "Burn centre consultation by phone now",
          "Discharge with fracture clinic in 1 week",
          "Family physician dressing checks only",
          "Fax a routine burn clinic referral"
        ],
        correct: 1,
        explanation: "His burn is superficial partial thickness and covers about 2% TBSA. On its own, a partial thickness burn under 10% TBSA sits in the American Burn Association column for a consultation recommendation, which a routine burn clinic referral can meet. The same guideline lists patients with concomitant traumatic injuries for immediate consultation with consideration of transfer. His reduced fracture lies under the burn, which limits casting and affects any later surgery through burned skin. So the burn centre should be called now. A faxed routine referral fits the small burn but misses the fracture. Admission to orthopaedics, a fracture clinic in 1 week or family physician dressing checks each leave the burn and the fracture to be managed apart, without burn centre input.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following should be part of the care of his left arm over the next hours?",
        options: [
          "Elevate the arm above heart level",
          "Hang the arm down in a sling",
          "Ice packs over the splint",
          "Oral antibiotics to prevent infection",
          "Recheck the splint as swelling rises",
          "Repeat checks of circulation and sensation",
          "Tight elastic wrap over the splint"
        ],
        select: 3,
        correct: [
          0,
          4,
          5
        ],
        explanation: "The Alaska guideline advises elevating burned limbs above the heart to limit swelling, checking circulation, motor function and sensation, and reassessing splints so swelling does not make them constrictive. Rising pain, numbness or a cool hand would suggest compression that needs the splint loosened and urgent review. A dependent sling increases swelling. Ice can deepen the tissue injury. A tight elastic wrap adds constriction. The guideline states that antibiotics are unnecessary for burns.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      }
    ],
    sources: [
      S.abaRef,
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-20",
    topic: "burns",
    title: "A spill in the research lab",
    stem:
      "A 27-year-old man presents to the emergency department 25 minutes after a bottle of liquid phenol tipped over at the university laboratory where he works. It soaked the left sleeve of his lab coat and ran onto his left forearm and the back of his hand. A coworker pulled off the coat and his glove, and he rinsed the arm under a sink tap for 2 minutes. He is healthy and takes no medications.\n\nThe left forearm and the back of the hand have patches of white, wrinkled skin covering about 2% TBSA. The burns are not circumferential. He says the arm feels numb rather than sore. He smells of phenol. He is alert, has no cough and his chest is clear.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "142/86 mmHg", o2sat: "99% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to decontaminate his skin now?",
        options: ["Calcium gluconate gel to the skin", "Mineral oil under a dressing", "Rinse under a sink tap again", "Sodium bicarbonate soaks", "Swabbing with polyethylene glycol"],
        correct: 4,
        explanation:
          "Phenol keeps passing through the skin until it is removed, and rapid decontamination can decide survival. Low molecular weight polyethylene glycol, PEG 300 or 400, is wiped or irrigated over the skin again and again until the smell of phenol is gone. A small volume of water, like his 2 minute rinse at the sink, only dilutes phenol and spreads it over more skin. If no PEG is available, a high-volume shower is the fallback. Calcium gluconate gel binds fluoride and treats hydrofluoric acid, not phenol. Mineral oil is used to loosen tar. Bicarbonate soaks do not remove phenol from the skin.",
        keyFeature: { topic: "burns", n: 6 },
        source: "atsdr-phenol",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains why his burned skin feels numb rather than painful?",
        options: ["Brief cooling under the tap", "Local anesthetic effect of phenol", "Nerve injury from the spill", "Superficial depth of the burn", "Systemic sedation from phenol"],
        correct: 1,
        explanation:
          "Phenol acts as a local anesthetic, so it can damage skin extensively before any pain is felt. Numb, white skin after phenol contact is therefore not reassuring. The white colour is protein precipitated by the phenol, and the skin later turns red and may slough. Two minutes under a tap ended 25 minutes ago and does not explain lasting numbness. A superficial burn is painful, not numb. A nerve injury would follow the course of a nerve rather than the patches the phenol touched. He is alert, so systemic sedation does not explain it.",
        keyFeature: { topic: "burns", n: 6 },
        source: "atsdr-phenol",
      },
      {
        id: "q3",
        kind: "single",
        update: "After decontamination he becomes nauseated and light-headed. His pulse is now 122/minute and his BP is 108/70 mmHg.",
        prompt: "Which of the following is the most important monitoring for him now?",
        options: ["Continuous cardiac monitoring", "Hourly capillary glucose", "Hourly compartment pressures", "Peak flow every hour", "Serial creatine kinase"],
        correct: 0,
        explanation:
          "Phenol absorbed through the skin can cause dysrhythmias, falling BP and shock, seizures and coma, and death has followed skin contact alone. ATSDR warns that phenol on more than 60 square inches of skin, about 390 square centimetres or roughly 2% of an adult's body surface, carries a risk of imminent death, and his burns cover about 2% TBSA. New nausea and light-headedness, a pulse of 122/minute and a BP that has fallen to 108/70 mmHg suggest systemic absorption, so he needs continuous cardiac monitoring. Compartment pressures are not needed for burns that are not circumferential. Peak flow tracks airway disease, and he has no cough and a clear chest. Nothing in the case points to low glucose or muscle breakdown.",
        keyFeature: { topic: "burns", n: 1 },
        source: "atsdr-phenol",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit for monitoring over 24 hours", "Discharge after 2 hours if symptom free", "Discharge with burn clinic in 1 week", "Discharge with family physician review", "Observe 4 hours then discharge"],
        correct: 0,
        explanation:
          "He has signs of systemic absorption, with nausea, light-headedness, a rising pulse and a falling BP. ATSDR advises considering admission for anyone with systemic toxicity, and observation with repeated examination for 18 to 24 hours after a serious exposure, because effects on the brain and lungs can be delayed. Discharge after 2 to 4 hours of observation is only for a mild exposure in a patient who stays free of symptoms, which he has not. Discharge with burn clinic or family physician follow-up ignores the risk of delayed toxicity.",
        keyFeature: { topic: "burns", n: 5 },
        source: "atsdr-phenol",
      },
    ],
    sources: [S.atsdrPhenol],
    ...META,
  },
  {
    id: "burns-21",
    topic: "burns",
    title: "Asleep on the couch at the cabin",
    stem: "A 46-year-old man is brought to the emergency department by ambulance from a cabin fire that started when he fell asleep smoking on the couch after an evening of drinking. He woke to thick smoke and escaped down an outside staircase, falling down the last six steps. He now has midline neck pain. He opens his eyes spontaneously, is slightly confused and obeys commands. He smells of alcohol. There is soot in his nostrils and his nasal hairs are singed. His voice is normal and he has no stridor. He has blistered partial thickness burns to both forearms, about 6% TBSA. Carboxyhemoglobin is 22% and lactate is 1.8 mmol/L.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "104/minute",
      resp: "20/minute",
      bp: "136/82 mmHg",
      o2sat: "97% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings, if it developed, would most strongly indicate that he needs intubation?",
        options: [
          "Carbon flecks in his sputum",
          "More soot in his nostrils",
          "New inspiratory stridor",
          "Rising carboxyhemoglobin",
          "Singed eyebrows"
        ],
        correct: 2,
        explanation: "The Alaska burn guideline notes that singed facial hair, soot around the nose or mouth and carbonaceous sputum raise suspicion of inhalation injury but are less predictive of the need for intubation, and they call for frequent reassessment. More concerning findings are stridor, respiratory distress, hypoxia, altered mentation and full thickness facial or neck burns. New stridor signals upper airway narrowing that can progress quickly. A rising carboxyhemoglobin is treated with oxygen and is not by itself a reason to intubate.",
        keyFeature: {
          topic: "burns",
          n: 2
        },
        source: "alaska"
      },
      {
        id: "q2",
        kind: "single",
        update: "He is started on 100% oxygen by non-rebreather mask. One hour later, about 2 hours after his fall, his carboxyhemoglobin is 12%, but he is still confused and his GCS remains 14. There is a boggy swelling over the back of his head.",
        prompt: "Which of the following is the most appropriate next step for his confusion?",
        options: [
          "Hyperbaric oxygen transfer first",
          "Noncontrast CT of the head",
          "Observe until he is sober",
          "Repeat carboxyhemoglobin in 4 hours",
          "thiamine 100 mg IV and observe"
        ],
        correct: 1,
        explanation: "He fell down six steps and has a scalp hematoma, and his GCS is still 14 two hours after the fall. The Canadian CT head rule treats a GCS below 15 at 2 hours after injury as a high-risk finding that calls for CT. Alcohol and carbon monoxide can both cause confusion, but blaming either one before a head injury is excluded is unsafe, so observing until he is sober or repeating the carboxyhemoglobin delays the diagnosis. Thiamine is reasonable in a heavy drinker, but it does not answer whether he is bleeding. Transfer for hyperbaric oxygen before imaging would move an unassessed head injury away from care.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "cchr"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to possible cyanide poisoning in him?",
        options: [
          "hydroxocobalamin 5 g IV now",
          "hydroxocobalamin 70 mg/kg IV now",
          "sodium nitrite 300 mg IV now",
          "sodium thiosulfate 12.5 g IV now",
          "No cyanide antidote at present"
        ],
        correct: 4,
        explanation: "The Alaska burn guideline lists the features that should prompt a cyanide antidote after smoke exposure: cardiac arrest, seizures, unexplained hypotension, a GCS below 10 or an elevated lactate. He has none of these. His GCS is 14, his BP is normal and his lactate is 1.8 mmol/L. Giving hydroxocobalamin now, at the adult 5 g dose or the weight-based dose used in children, interferes with laboratory tests without a clear indication. Nitrite induces methemoglobin, which lowers oxygen-carrying capacity further in a patient who already has carbon monoxide poisoning. Thiosulfate alone is not indicated when there are no features of cyanide toxicity.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his neck pain?",
        options: [
          "Clear his neck clinically now",
          "Delay neck assessment until burns are dressed",
          "Remove the collar to reduce neck swelling",
          "Soft collar and review in the morning",
          "Spinal motion restriction and cervical imaging"
        ],
        correct: 4,
        explanation: "He fell down six steps and has midline neck pain, and the Alaska burn guideline advises spinal motion restriction when spine injury is suspected. His alcohol intoxication and mild confusion mean his neck cannot be cleared on examination, so he needs imaging. Delaying assessment until his burns are dressed ignores a possible spinal injury. His burns are on his forearms, not his neck, so neck swelling is not a reason to remove the collar. A soft collar does not restrict movement.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      }
    ],
    sources: [
      {
        id: "cchr",
        citation: "Stiell IG, Wells GA, Vandemheen K, and colleagues. The Canadian CT Head Rule for patients with minor head injury. Lancet. 2001.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11356436/"
      },
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-22",
    topic: "burns",
    title: "A jump from the balcony",
    stem:
      "A 27-year-old man is brought to the emergency department by ambulance after he jumped from a third floor balcony to escape an apartment fire 50 minutes ago. He landed on his feet and fell backward. His shirt was on fire. He has severe pain in both heels and in the low back. He has no neck pain. He has no medical history.\n\nHe is alert, GCS 15, on a spine board with a collar. His airway is clear and his voice is normal. There are partial thickness burns over the entire back of the trunk and the back of the right arm. Both heels are swollen. The abdomen is soft.",
    vitals: { temperature: "36.2°C oral", pulse: "128/minute", resp: "24/minute", bp: "88/56 mmHg", o2sat: "96% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following investigations are most appropriate in the resuscitation bay to find the cause of his hypotension?",
        options: ["Carboxyhemoglobin level", "Chest radiograph", "CT of the head", "FAST examination", "Pelvic radiograph", "Serum lipase", "Transthoracic echocardiogram", "Urine myoglobin"],
        correct: [1, 3, 4],
        explanation:
          "In a hypotensive trauma patient the adjuncts to the primary survey look for blood in the chest, the abdomen and the pelvis, so a chest radiograph, a FAST examination and a pelvic radiograph come first. Jumping from a height loads the pelvis and the spine. A head CT is not the first test in an alert patient with GCS 15 and does not explain shock. Carboxyhemoglobin, lipase, urine myoglobin and a formal echocardiogram do not find a bleeding source.",
        keyFeature: { topic: "burns", n: 1 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following spinal injuries is most likely given his mechanism and heel findings?",
        options: ["Atlantoaxial dislocation", "Cervical facet dislocation", "Lumbar burst fracture", "Odontoid peg fracture", "Thoracic Chance fracture"],
        correct: 2,
        explanation:
          "A fall onto the feet sends an axial load up through the heels to the thoracolumbar junction, and calcaneal fractures are linked with lumbar burst fractures. His back pain fits that pattern, so the thoracolumbar spine needs CT. A Chance fracture is a flexion distraction injury, classically from a lap belt. Cervical facet, odontoid and atlantoaxial injuries follow head and neck mechanisms, and he has no neck pain in the stem.",
        keyFeature: { topic: "burns", n: 1 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "single",
        update: "A splenic laceration is found and controlled. Using the rule of nines and 2 mL/kg per %TBSA of Ringer's lactate, you calculate his burn resuscitation.",
        prompt: "Which of the following volumes is due in the first 8 hours after his burn?",
        options: ["900 mL", "1440 mL", "1800 mL", "2700 mL", "3600 mL"],
        correct: 2,
        explanation:
          "The back of the trunk is 18% and the back of one arm is 4.5%, so the burn is 22.5% TBSA. At 2 mL/kg per %TBSA the 24 hour estimate is 2 x 80 x 22.5 = 3600 mL, and half of it, 1800 mL, is due in the first 8 hours from the time of the burn, not from arrival. 1440 mL is half of a total based on 18%, which misses the arm. 900 mL is a quarter of the total. 2700 mL is half of a total based on 3 mL/kg per %TBSA. 3600 mL is the whole 24 hour estimate.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
    ],
    sources: [S.atls, S.abls],
    ...META,
  },
  {
    id: "burns-23",
    topic: "burns",
    title: "A cold hand after a brush fire",
    stem:
      "You are working in a regional hospital emergency department without a burn unit. A 39-year-old man presents 5 hours after his sleeve caught fire while he was burning brush on his farm. He has type 2 diabetes and takes metformin. Ringer's lactate was started on arrival and a burn centre transfer is being arranged.\n\nThe entire right arm has a dry, leathery, white, insensate burn that encircles the forearm and upper arm. There are partial thickness burns on the right chest and flank. The total burn is about 22% TBSA. The right hand is now cool with numb fingers. Doppler signals over the radial and ulnar arteries were present on arrival and are now absent.",
    vitals: { temperature: "36.7°C oral", pulse: "110/minute", resp: "20/minute", bp: "132/84 mmHg", o2sat: "98% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for his right arm?",
        options: ["Escharotomy of the arm", "Fasciotomy of the forearm", "Heparin infusion", "Observe with the arm elevated", "Urgent arteriogram of the arm"],
        correct: 0,
        explanation:
          "A circumferential full thickness burn of the arm with a cool, numb hand and loss of Doppler signals means the rigid eschar is compressing the limb as edema builds, so escharotomy is needed now, with burn surgeon advice by phone if transfer cannot happen first. An arteriogram delays release and the vessels are compressed, not blocked. Elevation helps only before perfusion is lost, so observing now wastes time. Fasciotomy is kept for a true compartment syndrome that persists after escharotomy, as after electrical or crush injury. Heparin does not relieve compression.",
        keyFeature: { topic: "burns", n: 1 },
        source: "isbi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following incision sites is correct for this procedure on his forearm?",
        options: ["Directly over the radial pulse", "Dorsal midline from elbow to wrist", "Medial and lateral midaxial lines", "Transverse incision across the wrist", "Volar midline from elbow to wrist"],
        correct: 2,
        explanation:
          "Forearm escharotomy runs along the medial and lateral midaxial lines, through the full thickness of eschar and down to bleeding tissue, so the ring of eschar opens on both sides. These lines avoid the main neurovascular bundles and tendons, and the medial cut passes in front of the medial epicondyle to spare the ulnar nerve. An incision over the radial pulse puts the artery at risk. A single dorsal or volar midline cut does not free the whole circumference and exposes tendons. A transverse cut at the wrist does not release the length of the limb.",
        keyFeature: { topic: "burns", n: 1 },
        source: "merck-escharotomy",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesia for the procedure?",
        options: ["IV fentanyl titrated to effect", "Lidocaine infiltration of the eschar", "Oral oxycodone before the procedure", "Topical lidocaine gel", "No analgesia for insensate eschar"],
        correct: 0,
        explanation:
          "The eschar itself is numb, but the cut reaches viable tissue and bleeding edges that are painful, so IV opioid titrated to effect is needed, with procedural sedation when the burn is large. Infiltrating local anesthetic into eschar works poorly and adds volume under tight tissue. Oral oxycodone is slow and unreliable in a patient in burn shock. Topical gel does not reach the depth of the incision. Withholding analgesia because the eschar is insensate ignores the pain of the deeper cut.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following hourly urine outputs is the target for his fluid titration?",
        options: ["19 mL/hour", "38 mL/hour", "76 mL/hour", "100 mL/hour", "150 mL/hour"],
        correct: 1,
        explanation:
          "For an adult with a thermal burn the urine output target is 0.5 mL/kg/hour, which is 38 mL/hour at 76 kg. Aiming higher, at 76 mL/hour or 1 mL/kg/hour, drives excess fluid and worsens edema in the burned arm and chest. 100 mL/hour is the higher goal used after high voltage electrical injury with pigmented urine, and his is a flame burn. 150 mL/hour is about 2 mL/kg/hour, beyond even that goal. 19 mL/hour accepts under-resuscitation.",
        keyFeature: { topic: "burns", n: 4 },
        source: "abls",
      },
    ],
    sources: [S.isbi, S.streitz, S.abaPain, S.abls],
    ...META,
  },
  {
    id: "burns-24",
    topic: "burns",
    title: "A tent fire at the campground",
    stem: "A 5-year-old boy is brought to the emergency department by ambulance 1 hour after a propane heater set fire to his family's tent at a campground. His father pulled him out within a minute. Paramedics covered his burns with wet towels, which are still on him. He has partial thickness burns to his face, neck, chest and both arms, about 18% TBSA. His voice is hoarse, there is soot around his mouth and he has soft inspiratory stridor at rest. He is alert and frightened. His skin under the towels is cold and he is shivering.",
    vitals: {
      temperature: "34.6°C rectal",
      pulse: "142/minute",
      resp: "32/minute",
      bp: "102/64 mmHg",
      o2sat: "95% on 10 L/minute by non-rebreather mask",
      weight: "19 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of young children makes his airway more likely to obstruct early?",
        options: [
          "A higher metabolic rate",
          "A larger skin area for his weight",
          "A smaller and shorter airway",
          "Thinner skin that burns more deeply",
          "Weaker cough reflexes than adults"
        ],
        correct: 2,
        explanation: "The TREKK burns guidance notes that a child's smaller and shorter airway leads to earlier upper airway obstruction from burn-related edema. With hoarseness, soot and stridor already present, he needs airway equipment ready and a low threshold for early intubation. A higher metabolic rate raises oxygen and glucose needs, and a larger surface area for his weight raises fluid and heat loss. Thinner skin makes burns deeper. Cough strength is not the mechanism the guidance describes. None of these explains early airway obstruction.",
        keyFeature: {
          topic: "burns",
          n: 2
        },
        source: "trekk-burns"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his temperature of 34.6°C?",
        options: [
          "Continue wet towels to cool the burns",
          "Ice packs to the burned areas",
          "Keep him uncovered for burn assessment",
          "Remove wet towels, cover and warm him",
          "Warm bath immersion"
        ],
        correct: 3,
        explanation: "He is hypothermic, and the wet towels are making it worse. Cooling is useful soon after a burn, but wet coverings left too long cause hypothermia, which the TREKK guidance warns about. It advises keeping the room warm, covering the child with blankets and avoiding repeated exposure of the wounds. It warns never to use ice, which can cause more tissue injury. Leaving him uncovered adds heat loss. Immersion is impractical with a threatened airway and would wet large burns again.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "trekk-burns"
      },
      {
        id: "q3",
        kind: "single",
        update: "He is intubated uneventfully with a cuffed tube and placed on a ventilator.",
        prompt: "Which of the following positions is most appropriate for him while he waits for transfer?",
        options: [
          "Flat supine with the neck extended",
          "Head of the bed elevated",
          "Left lateral with the head down",
          "Prone with the face supported",
          "Trendelenburg to support pressure"
        ],
        correct: 1,
        explanation: "He has significant burns to the face and neck. The TREKK guidance advises elevating the head of the bed to help reduce edema in head and neck burns. Lying flat or head down increases facial and airway swelling. Prone positioning presses on facial burns and makes the airway harder to monitor. His blood pressure is normal, so a head-down position has no purpose.",
        keyFeature: {
          topic: "burns",
          n: 2
        },
        source: "trekk-burns"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit to the local paediatric ward",
          "Discharge with burn clinic follow-up",
          "Observe for 12 hours in this department",
          "Outpatient plastic surgery referral",
          "Transfer to a paediatric burn centre"
        ],
        correct: 4,
        explanation: "The TREKK guidance lists transfer to a paediatric burn centre for partial thickness burns of 10% TBSA or more and for inhalation injury with burns of 5% TBSA or more. He meets both, and he is intubated. A local ward, observation in the department or outpatient care cannot provide burn centre care for an intubated child with an 18% burn and inhalation injury.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "trekk-burns"
      }
    ],
    sources: [S.trekkBurns],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-25",
    topic: "burns",
    title: "A heater flare at the hunting camp",
    stem: "You are working in a rural hospital emergency department in northern Manitoba. A 34-year-old man arrives 4 hours after a kerosene heater flared at a hunting camp and set his clothing alight. He has deep partial and full thickness burns to his trunk and both legs, measured at 45% TBSA. His face and neck are not burned, his voice is normal, there is no soot in his mouth and he has no stridor. He is alert. He has received no IV fluid. The air ambulance is committed to another call, and the flight to the burn centre will take about 5 hours once it arrives. He is 178 cm tall.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "124/minute",
      resp: "22/minute",
      bp: "128/76 mmHg",
      o2sat: "97% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan before his long transfer?",
        options: [
          "Intubate before the flight",
          "Intubate only if stridor develops",
          "Nebulized epinephrine for the flight",
          "Transfer awake with oxygen",
          "Transfer with a nasal airway in place"
        ],
        correct: 0,
        explanation: "He has no signs of inhalation injury, but his burn covers 45% TBSA. The Alaska burn guideline notes that long transport times and burns larger than 40% that need high-volume resuscitation may require intubation, because generalized edema develops as fluid is given. He faces a long delay and a 5-hour flight in which airway control is difficult. Waiting for stridor risks losing the airway in the aircraft. A nasal airway and nebulized epinephrine do not protect against progressive edema.",
        keyFeature: {
          topic: "burns",
          n: 2
        },
        source: "alaska"
      },
      {
        id: "q2",
        kind: "single",
        update: "He is intubated. His predicted body weight, based on his height of 178 cm, is about 73 kg.",
        prompt: "Which of the following initial tidal volumes is most appropriate for his ventilator?",
        options: [
          "300 mL",
          "440 mL",
          "540 mL",
          "720 mL",
          "900 mL"
        ],
        correct: 1,
        explanation: "Burn injury and resuscitation predispose to lung injury, and the Alaska guideline advises a lung-protective strategy with a tidal volume of 6 mL/kg of ideal body weight. At about 73 kg that is 6 x 73 = 438 mL, about 440 mL. A volume of 540 mL is 6 mL/kg of his actual weight of 90 kg, and 720 and 900 mL are 8 and 10 mL/kg of actual weight, which are all too large. A volume of 300 mL is about 4 mL/kg and risks hypoventilation.",
        keyFeature: {
          topic: "burns",
          n: 2
        },
        source: "alaska"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the preferred fluid for his burn resuscitation?",
        options: [
          "dextrose 5% in water",
          "hydroxyethyl starch",
          "Ringer's lactate",
          "sodium chloride 0.45%",
          "sodium chloride 0.9%"
        ],
        correct: 2,
        explanation: "The Alaska guideline states that a balanced salt solution such as Ringer's lactate is preferred for burn resuscitation, and that large amounts of 0.9% saline, generally more than 3 L in an adult, cause hyperchloremic acidosis. He will need several litres, so saline is a poor choice. Dextrose 5% in water and half-normal saline are hypotonic and leave the circulation. Colloids are reserved for burns refractory to initial resuscitation, with specialist advice, so starch is not a first fluid.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        update: "Twelve hours after the burn he is still waiting for the flight. He has received 11 L of Ringer's lactate, and despite repeated rate increases his urine output is 25 mL/hour. His abdomen is becoming tense.",
        prompt: "Which of the following is the most appropriate change to his resuscitation now?",
        options: [
          "Add 5% albumin to the resuscitation",
          "Double the Ringer's lactate rate",
          "furosemide 40 mg IV",
          "norepinephrine infusion IV",
          "Ringer's lactate 2 L bolus"
        ],
        correct: 0,
        explanation: "He has already received 11 L in 12 hours, well ahead of the 2 mL/kg per %TBSA starting estimate of 8 100 mL for the first 24 hours, and his abdomen is tightening, a warning of fluid creep. The American Burn Association guideline recommends considering human albumin, especially in larger burns, to lower resuscitation volumes and improve urine output. Doubling the rate or bolusing adds more crystalloid and more edema. The guideline makes no recommendation for vasopressors as adjuncts. Furosemide raises urine output without improving perfusion and removes the guide to resuscitation.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "aba-resus"
      }
    ],
    sources: [
      S.abaResus,
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-26",
    topic: "burns",
    title: "Pasta water on the forearm",
    stem:
      "A 24-year-old woman presents to the emergency department 1 hour after she spilled a pot of boiling pasta water on her left forearm and lower abdomen. She cooled the burns under the tap for 20 minutes at home. She is right-handed, works as a barista and lives with her partner. She has no medical history and takes no medications.\n\nThere are pink, moist, blistered burns that blanch and are very painful on the volar left forearm and the lower abdomen. Together they cover the area of about three and a half of her own palms, including fingers. A rim of red skin without blisters surrounds both areas. Pain is 6 out of 10.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "124/76 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best estimate of her burn size for planning her care?",
        options: ["About 2%", "About 3.5%", "About 5%", "About 7%", "About 9%"],
        correct: 1,
        explanation:
          "The patient's palm with fingers is about 1% TBSA, so an area of three and a half palms is about 3.5%. The red rim without blisters is superficial and is not counted. 5% would add in that red skin. 7% doubles the estimate, as if each palm were 2%. 9% is the rule of nines value for a whole arm, which overstates a burn limited to the volar forearm. 2% undercounts the palms she has.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Admit for IV analgesia", "Discharge with burn clinic follow-up", "Early grafting by plastic surgery", "Transfer to a burn centre", "No follow-up after discharge"],
        correct: 1,
        explanation:
          "A superficial partial thickness burn of about 3.5% in a healthy adult who can manage her own dressings and lives with support can be treated as an outpatient, with review in a burn clinic within a few days to confirm healing. Partial thickness burns under 10% call for consultation, not transfer. Admission for IV analgesia is not needed for pain of 6 out of 10 from a burn of this size, which oral analgesia can control. Burns that blanch and are moist usually heal without grafting. Discharge without follow-up misses burns that deepen over the first days.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic plan for her first days at home?",
        options: ["Acetaminophen with ibuprofen", "Codeine with acetaminophen", "Hydromorphone every 4 hours", "Topical lidocaine on the wounds", "Tramadol every 6 hours"],
        correct: 0,
        explanation:
          "Scheduled acetaminophen with an NSAID such as ibuprofen controls most pain from a small partial thickness burn and spares opioids, with a short supply of opioid kept for dressing changes if needed. Codeine and tramadol have unpredictable metabolism and add opioid side effects without better relief. Round the clock hydromorphone is more than a 3.5% burn needs and adds risk of dependence. Topical anesthetic on open burn wounds is absorbed unpredictably and is not advised.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
    ],
    sources: [S.abaRef, S.abaPain],
    ...META,
  },
  {
    id: "burns-27",
    topic: "burns",
    title: "Pinned under a dirt bike",
    stem: "A 17-year-old girl presents to the emergency department 2 hours after her dirt bike tipped over on a trail and pinned her right leg for about a minute. The hot exhaust pipe lay across the front of her right knee. She has a 1.5% TBSA burn over the knee that is white and leathery in the centre with a mottled red rim, and it blanches poorly. She has abrasions on her right forearm. Her right mid-shin is not deformed and she can bear weight. She is healthy. Her immunization record shows a complete childhood series and a tetanus booster 2 years ago. She rates her pain as 7 out of 10.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "118/72 mmHg",
      o2sat: "99% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of her burn are most important in planning her disposition?",
        options: [
          "Burn size of 1.5% TBSA",
          "Contact mechanism from an exhaust pipe",
          "Deep partial or full thickness depth",
          "Location over the knee joint",
          "Nearby abrasions on her forearm",
          "Patient age of 17 years"
        ],
        select: 2,
        correct: [
          2,
          3
        ],
        explanation: "The American Burn Association referral guideline calls for immediate consultation, with consideration of transfer, for any deep partial or full thickness burn over a joint. Her white, leathery, poorly blanching burn is at least deep partial thickness, and it lies over the knee, where scarring can limit movement. A partial thickness burn under 10% TBSA elsewhere would only need a routine consultation. The contact mechanism, her age and the abrasions do not by themselves meet referral criteria.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate tetanus prophylaxis for her?",
        options: [
          "Td booster and tetanus immune globulin",
          "Tdap booster dose today",
          "Tetanus immune globulin alone",
          "Two-dose catch-up series",
          "No tetanus prophylaxis now"
        ],
        correct: 4,
        explanation: "The Canadian Immunization Guide advises no tetanus vaccine and no tetanus immune globulin for any wound, clean or not, when a person has had 3 or more doses and the last dose was less than 5 years ago. She completed her childhood series and had a booster 2 years ago, so she needs nothing today. A Tdap booster adds nothing. Tetanus immune globulin is for contaminated or major wounds in people with fewer than 3 doses or an unknown history. A catch-up series is for people who never completed a primary series.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "cig-tetanus"
      },
      {
        id: "q3",
        kind: "single",
        update: "Her pain is controlled with oral analgesics and the burn is cooled and dressed. The burn centre is 2 hours away.",
        prompt: "Which of the following is the most appropriate next step in her disposition?",
        options: [
          "Admit to the orthopaedic service here",
          "Consult the burn centre today",
          "Discharge with family physician follow-up",
          "Dressing check in 2 weeks",
          "No follow-up if pain settles"
        ],
        correct: 1,
        explanation: "Her deep burn over the knee meets the American Burn Association criteria for immediate consultation with a burn centre, which will decide whether she needs transfer or early outpatient review for possible grafting. Discharge to family physician follow-up, a 2-week dressing check or no follow-up risks a contracture across the knee. She has no fracture or orthopaedic injury that needs admission.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      }
    ],
    sources: [S.abaRef, S.cig],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-28",
    topic: "burns",
    title: "A spilled mug of hot chocolate",
    stem: "A 5-year-old girl is brought to the emergency department by her mother 40 minutes after she knocked a mug of hot chocolate off the kitchen table onto her left forearm. Her mother held the arm under cool running water for 20 minutes before coming in. There is a pink, moist, blistered burn with irregular splash-shaped edges on the forearm, about 2% TBSA, that blanches briskly. It does not encircle the arm. Her immunizations are up to date. She is crying and rates her pain as 6 out of 10 on the faces scale. The history is consistent each time it is told.",
    vitals: {
      temperature: "36.8°C tympanic",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "102/64 mmHg",
      o2sat: "99% on room air",
      weight: "20 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following should be in place before she is discharged home?",
        options: [
          "Burn dressing applied after cleaning",
          "Complete healing of the burn",
          "Follow-up plan explained to her mother",
          "Oral antibiotic prescription",
          "Pain controlled on oral analgesics",
          "Silver sulfadiazine cream applied",
          "Skeletal survey completed"
        ],
        select: 3,
        correct: [
          0,
          2,
          4
        ],
        explanation: "The TREKK burns guidance supports discharge when no burn centre referral criteria are met, there is no concern for maltreatment, a dressing has been applied, pain is well controlled, and instructions on pain, dressing care and follow-up have been explained. Healing takes days to weeks and is not a discharge requirement. The guidance advises avoiding silver sulfadiazine because it impairs re-epithelialization and is linked to more infection. Antibiotics are not needed for a clean small burn. A skeletal survey is for suspected abuse, which her history and burn pattern do not suggest.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "trekk-burns"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following burn patterns in a child of her age would most raise concern for an inflicted injury?",
        options: [
          "Irregular splash marks on one forearm",
          "Scald on the chest from a pulled-down cup",
          "Small blister on one fingertip from a candle",
          "Symmetric glove-pattern scalds of both hands",
          "Uneven scald on the thigh from a spilled bowl"
        ],
        correct: 3,
        explanation: "The TREKK guidance lists immersion-pattern scalds in a stocking or glove distribution, symmetric burns of the buttocks or genitals, and sharply patterned contact burns that mirror a hot object as patterns that raise concern for inflicted burns. Symmetric glove-pattern scalds of both hands suggest forced immersion. Irregular splash marks, uneven spill scalds and pulled-down cup injuries fit accidental spills, like her own burn. A small fingertip blister from touching a candle fits exploratory contact.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "trekk-burns"
      },
      {
        id: "q3",
        kind: "single",
        update: "The blisters are debrided and petroleum-based non-stick gauze is applied, because no long-term dressing is available in your department.",
        prompt: "Which of the following follow-up plans is most appropriate for her?",
        options: [
          "Burn centre transfer tonight",
          "Dressing change in 2 to 3 days",
          "Dressing change in 2 weeks",
          "Follow-up only if a fever develops",
          "No follow-up needed"
        ],
        correct: 1,
        explanation: "The TREKK guidance notes that petroleum-based non-stick gauze needs a dressing change every 2 to 3 days. Leaving it for 2 weeks allows the dressing to stick and the wound to go unreviewed. Waiting for a fever, or planning no follow-up, misses early signs of infection or deepening. Her burn is small and superficial partial thickness, not circumferential and not on a special area, so it does not meet the criteria for transfer.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "trekk-burns"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate first analgesic order for her pain?",
        options: [
          "ibuprofen 100 mg PO",
          "ibuprofen 200 mg PO",
          "ibuprofen 400 mg PO",
          "ibuprofen 600 mg PO",
          "morphine 2 mg IM"
        ],
        correct: 1,
        explanation: "The TREKK pain guidance gives ibuprofen 10 mg/kg per dose by mouth, to a maximum of 600 mg. At 20 kg that is 200 mg. A dose of 100 mg is only 5 mg/kg. Doses of 400 mg and 600 mg are 20 and 30 mg/kg, above the recommended dose. The guidance advises avoiding intramuscular injections in children because intranasal and IV routes are less painful and absorbed more predictably, and her moderate pain does not need an opioid first.",
        keyFeature: {
          topic: "burns",
          n: 3
        },
        source: "trekk-pain"
      }
    ],
    sources: [S.trekkBurns, S.trekkPain],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-29",
    topic: "burns",
    title: "Sore palms after a long workday",
    stem:
      "A 45-year-old man presents to the emergency department at 23:00 with severe burning pain in both palms and both knees. The pain started a few hours after he finished a 10 hour shift and has become much worse. He wore cotton work gloves and knee pads all day. He has no medical history and takes no medications.\n\nThere are red, blistered patches on both palms and over both kneecaps. Some areas are grey and do not blanch. The skin feels slippery. The patches do not extend beyond the areas covered by his gloves and knee pads.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "16/minute", bp: "138/84 mmHg", o2sat: "99% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions is most likely to explain the cause of his injuries?",
        options: ["Contact with wet concrete at work", "Exposure to cold water", "New soap or detergent at home", "Recent sun exposure", "Use of vibrating power tools"],
        correct: 0,
        explanation:
          "Severe, delayed pain with blisters confined to the skin under his gloves and knee pads, and skin that feels slippery, point to an alkali burn, and wet cement or concrete is the common source. Asking directly about chemical contact at work is the key step. Cold exposure causes numbness and pallor, not blistered burns. A new soap causes itchy dermatitis. Sun exposure spares skin covered by gloves. Vibrating tools cause numbness and blanching of the fingers, not burns of the knees.",
        keyFeature: { topic: "burns", n: 6 },
        source: "palao-chemical",
      },
      {
        id: "q2",
        kind: "single",
        update: "He was finishing a concrete floor on his knees and his gloves were soaked with wet cement for most of the day.",
        prompt: "Which of the following is the most appropriate first treatment for his burns?",
        options: ["Calcium gluconate 2.5% gel", "Dilute vinegar soaks", "Silver sulfadiazine cream", "Topical corticosteroid cream", "Water irrigation until pH normal"],
        correct: 4,
        explanation:
          "Alkali from cement penetrates deeply and keeps injuring tissue until it is washed away, so the skin is irrigated with large volumes of water, checking the surface pH until it is near normal. Vinegar or other acids to neutralize the alkali release heat and delay irrigation. Calcium gluconate gel treats hydrofluoric acid, not alkali. Silver sulfadiazine and steroid creams trap residual alkali on the skin and do nothing to remove it.",
        keyFeature: { topic: "burns", n: 6 },
        source: "palao-chemical",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition after irrigation?",
        options: ["Burn centre consultation", "Dermatology clinic referral", "Discharge with family physician review", "Occupational health clinic review", "Return to work with new gloves"],
        correct: 0,
        explanation:
          "American Burn Association criteria call for consultation for every chemical injury, and deep burns over the palms and knees, which are functional areas and joints, add to the need for burn centre care. Cement burns often deepen over the first days. Dermatology or occupational health cannot manage a deep chemical burn that may need grafting. Family physician review alone risks missing progression. Returning to work does not address a burn that needs specialist care.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.palao, S.abaRef],
    ...META,
  },
  {
    id: "burns-30",
    topic: "burns",
    title: "A splash from the tar kettle",
    stem:
      "A 41-year-old roofer is brought to the emergency department by ambulance 45 minutes after hot roofing tar splashed onto the front of his right leg and his right forearm. Coworkers poured water over the tar at the scene. Paramedics gave fentanyl 100 mcg IV. He has no medical history.\n\nHe is writhing and rates his pain 9 out of 10. Hardened black tar sticks to the front of the right leg and the right forearm, including over the knee. Where the tar has flaked off, the skin is red, blistered and moist. The burned area is about 12% TBSA.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "20/minute", bp: "146/90 mmHg", o2sat: "98% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next analgesic for him?",
        options: ["fentanyl 50 mcg IV", "hydromorphone 2 mg IM", "lorazepam 2 mg IV", "morphine 10 mg SC", "naproxen 500 mg PO"],
        correct: 0,
        explanation:
          "Severe burn pain that persists after a first opioid dose calls for more IV opioid, given as fentanyl 50 mcg and repeated every few minutes until the pain is controlled. IM and SC injections act slowly and absorb unpredictably. A benzodiazepine sedates without treating the pain. Naproxen is too weak on its own for pain of 9 out of 10 and adds kidney risk while fluid needs are uncertain.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
      {
        id: "q2",
        kind: "single",
        update: "After fentanyl 150 mcg IV more, his pain is 7 out of 10 and he is drowsy but rousable. His breathing is normal.",
        prompt: "Which of the following ketamine doses is most appropriate to add as an analgesic adjunct?",
        options: ["ketamine 27 mg IV", "ketamine 90 mg IV", "ketamine 135 mg IV", "ketamine 180 mg IV", "ketamine 270 mg IV"],
        correct: 0,
        explanation:
          "Subdissociative ketamine at 0.3 mg/kg, pushed over several minutes, gives analgesia comparable to an opioid without dissociation and spares further opioid when drowsiness limits it, which is 27 mg at 90 kg. The American Burn Association supports low dose ketamine as an opioid adjunct. 90 mg, 135 mg and 180 mg are 1, 1.5 and 2 mg/kg, dissociative doses used for procedural sedation. 270 mg is 3 mg/kg, far more than any IV sedation or analgesic dose. Higher doses add emergence reactions and airway risk with no gain in analgesia.",
        keyFeature: { topic: "burns", n: 3 },
        source: "motov-ketamine",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage the tar stuck to his skin?",
        options: ["Acetone to dissolve the tar", "Mineral oil to dissolve the tar", "Peel it off after cooling", "Scrub it with a surgical brush", "Soak it in hot water to soften"],
        correct: 1,
        explanation:
          "Once cooled, tar is removed with a lipophilic agent such as mineral oil or petrolatum, applied and left under a dressing to dissolve the tar over hours. Peeling or scrubbing tears off viable skin, deepens the wound and causes severe pain. Acetone and other solvents are toxic to tissue. Hot water would burn the skin again.",
        keyFeature: { topic: "burns", n: 3 },
        source: "rosen-ch54",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Discharge after the tar is removed", "Discharge with family physician review", "Discharge with home care nursing", "Referral to a burn centre", "Short stay observation, then home"],
        correct: 3,
        explanation:
          "A partial thickness burn of 12% TBSA meets the American Burn Association criterion of partial thickness burns of 10% or more for immediate consultation with consideration of transfer, and the burn crosses the knee, a joint that may need grafting if it deepens. Poorly controlled pain, as he has, is also listed as a reason for burn centre consultation. Discharge after tar removal, with family physician or home nursing follow-up, or after brief observation, does not give a burn of this size and site the specialist care it needs.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.abaPain, S.motov, S.abaRef, S.rosenCh54],
    ...META,
  },
  {
    id: "burns-31",
    topic: "burns",
    title: "A flash fire at the grain dryer",
    stem: "You are working in a regional hospital emergency department in rural Saskatchewan. A 52-year-old farmer arrives by ambulance at 18:00. At 13:00 a leaking propane line on his grain dryer ignited in a flash fire while he stood on a ladder, and he fell about 2 m onto concrete. He was seen first at a small health centre, which charted his burn as 40% TBSA and gave 2.5 L of Ringer's lactate, including two 1 L boluses. On your assessment he has partial thickness burns of the front of his trunk and both arms, which you measure at 27% TBSA. The red, unblistered, blanching skin on his neck and lower abdomen had been counted as burned. His face is spared, his voice is normal and there is no soot in his mouth. He is alert and complains of neck pain.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "112/minute",
      resp: "20/minute",
      bp: "134/80 mmHg",
      o2sat: "97% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the difference between the health centre TBSA and your own estimate?",
        options: [
          "Burns deepen and spread after 5 hours",
          "Erythema was counted in the TBSA",
          "Lund and Browder underestimates adult burns",
          "Swelling hides the burn edges",
          "The rule of nines ignores the neck"
        ],
        correct: 1,
        explanation: "The Alaska burn guideline states that superficial burn area should not be included in the TBSA. Only partial and full thickness burns count. Counting his red, unblistered, blanching skin inflated the estimate from 27% to 40%. The guideline names wrong burn size estimates, fluid boluses and care at several sites as causes of fluid creep, and all three apply to him. Burns can deepen over time, but that does not turn unburned red skin into burn area. Swelling and the charting method do not explain an overestimate of this size.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q2",
        kind: "single",
        update: "He has tenderness over the midline of his lower cervical spine. His arms and legs have normal strength and sensation.",
        prompt: "Which of the following is the most appropriate management of his cervical spine?",
        options: [
          "CT of the cervical spine",
          "Flexion and extension radiographs",
          "MRI of the spine as an outpatient",
          "Remove the collar and test rotation",
          "Soft collar for comfort only"
        ],
        correct: 0,
        explanation: "Burns often come with other injuries, and the Alaska guideline advises spinal motion restriction when spine injury is suspected. Under the Canadian C-spine rule, a fall from 3 feet, about 1 m, or more is a dangerous mechanism. That is a high-risk factor, so he needs imaging, and his midline tenderness adds to the concern. CT is the usual first test for an adult after trauma. Testing rotation is only allowed after the rule shows he is low risk, and he is not. Flexion views, a soft collar or delayed MRI leave a possible fracture unassessed.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "ccr"
      },
      {
        id: "q3",
        kind: "single",
        update: "Imaging shows no cervical fracture. You plan his burn resuscitation with 2 mL/kg per %TBSA of Ringer's lactate, using your estimate of 27%.",
        prompt: "Which of the following Ringer's lactate rates is most appropriate to start now?",
        options: [
          "180 mL/hour",
          "270 mL/hour",
          "400 mL/hour",
          "540 mL/hour",
          "720 mL/hour"
        ],
        correct: 1,
        explanation: "The 24-hour estimate is 2 x 80 kg x 27% = 4 320 mL, and half, 2 160 mL, is planned for the first 8 hours after the burn, which is 270 mL/hour. The Alaska guideline advises starting at the calculated hourly rate regardless of earlier fluid, without catching up or subtracting what was given before. Giving 2 160 mL over the 3 hours left in that window, 720 mL/hour, is a catch-up. The rate of 400 mL/hour uses the inflated 40%. The rate of 540 mL/hour uses 4 mL/kg. The rate of 180 mL/hour spreads the volume evenly over 24 hours.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        update: "An hour later he is pale and sweaty. His pulse is 134/minute and his BP is 84/52 mmHg.",
        prompt: "Which of the following is the most appropriate immediate step while the cause is sought?",
        options: [
          "hydroxocobalamin 5 g IV",
          "norepinephrine infusion IV",
          "Ringer's lactate 2 L bolus",
          "Ringer's lactate 500 mL bolus",
          "Ringer's lactate rate doubled"
        ],
        correct: 3,
        explanation: "The Alaska burn guideline notes that a systolic BP below 90 mmHg is rare early after a burn. It advises a single 250 to 500 mL crystalloid bolus while other causes are considered, such as trauma, and a call to the burn or trauma centre. After his fall onto concrete, occult bleeding is the first concern. A 2 L bolus or a doubled rate adds edema without treating the cause, and he has already had boluses that raise his risk of fluid creep. The guideline advises vasopressors only on specialist advice. His exposure was a brief outdoor flash, so a cyanide antidote is not indicated.",
        keyFeature: {
          topic: "burns",
          n: 1
        },
        source: "alaska"
      }
    ],
    sources: [
      {
        id: "ccr",
        citation: "Stiell IG, Wells GA, Vandemheen KL, and colleagues. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001.",
        url: "https://doi.org/10.1001/jama.286.15.1841"
      },
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-32",
    topic: "burns",
    title: "A flare from the table burner",
    stem: "You are working in a community hospital emergency department with a labour and delivery unit but no burn unit or neonatal intensive care unit. A 34-year-old woman, G3P2 at 26 weeks, arrives by private car 3 hours after a tabletop gel fuel burner flared at a lakeside cottage and set her dress alight. Her partner smothered the flames and drove her in. She has had no IV fluid. She has blistered, moist, pink partial thickness burns to the front of both legs and most of her right arm, and her burns have not yet been mapped. There is no soot in her mouth, her voice is normal and she has no stridor. Her pregnancy has been uncomplicated. She lies tilted to her left side on the stretcher and has received IV morphine.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "114/minute",
      resp: "20/minute",
      bp: "106/62 mmHg",
      o2sat: "98% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following Ringer's lactate rates is most appropriate until her burn size is measured?",
        options: [
          "125 mL/hour",
          "250 mL/hour",
          "500 mL/hour",
          "1 000 mL/hour",
          "2 000 mL/hour"
        ],
        correct: 2,
        explanation: "The Trauma New Brunswick burn statement gives a starting rate of 500 mL/hour of Ringer's lactate for patients older than 13 years with a major burn, before the exact TBSA is calculated. It defines a major burn in an adult as more than 20% TBSA. The front of both legs and most of one arm already exceed that, so fluid should start now at 500 mL/hour and change to the calculated rate once her burns are mapped. The rates of 125 and 250 mL/hour are its starting rates for children aged 5 years or younger and 6 to 12 years. Rates of 1 000 and 2 000 mL/hour risk the over-resuscitation that the statement says must be avoided.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "nb-burn"
      },
      {
        id: "q2",
        kind: "single",
        update: "Her burns are mapped at 24% TBSA and the calculated rate is started. Twenty minutes later, still tilted to her left, her blood pressure is 84/50 mmHg.",
        prompt: "Which of the following is the most appropriate response to her blood pressure?",
        options: [
          "Accept it as early burn shock",
          "Double the Ringer's lactate rate",
          "Give 2 L Ringer's lactate rapidly",
          "Give 500 mL and seek another cause",
          "Start a norepinephrine infusion"
        ],
        correct: 3,
        explanation: "The Alaska burn guideline states that a systolic pressure below 90 mmHg is rare in the initial burn period. When it occurs, the guideline advises a single bolus of 250 to 500 mL of crystalloid while alternative causes of hypotension, such as a medical, toxic or traumatic condition, are considered. It also advises consulting the burn centre for a systolic pressure below 90 mmHg. Accepting the pressure as burn shock misses that warning. Giving 2 L rapidly is the large bolus the guideline advises against. Doubling the rate goes far beyond its hourly changes of 10%, which are guided by urine output, and it adds to fluid creep. Starting a norepinephrine infusion skips both the limited bolus and the search for a cause.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of her case is most likely to raise her fluid needs above the formula estimate?",
        options: [
          "Burns on both legs",
          "Clear voice without stridor",
          "Partial thickness depth",
          "Three hours without fluid",
          "Weight of 70 kg"
        ],
        correct: 3,
        explanation: "The Alaska burn guideline lists resuscitation delay among the factors known to increase fluid needs, with inhalation injury, electrical burns, associated trauma, intoxication and very deep burns. She reached hospital 3 hours after the burn with no IV fluid, so she may need more than the formula predicts and her response needs extra attention. Her clear voice, with no soot or stridor, argues against the inhalation injury that would raise her needs. Her partial thickness burns are not the very deep burns on that list. The site of her burns and her weight are already built into the formula through TBSA and kilograms.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to labour and delivery here",
          "Admit under general surgery here",
          "Burn centre with obstetric care",
          "Discharge with burn clinic review",
          "Transfer to a tertiary obstetric unit"
        ],
        correct: 2,
        explanation: "The Trauma New Brunswick burn statement recommends immediate consultation, with transfer considered, for partial thickness burns over 10% TBSA and for pre-existing conditions that could complicate management. She has a 24% burn and is 26 weeks pregnant. Her hospital has no burn unit and no neonatal intensive care unit, so she needs a burn centre in a hospital that can also care for her pregnancy and a preterm baby. Admission to labour and delivery or general surgery here lacks burn care, and so does a tertiary obstetric unit without a burn service. Discharge is unsafe while she needs IV resuscitation.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "nb-burn"
      }
    ],
    sources: [
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      },
      {
        id: "nb-burn",
        citation: "Trauma New Brunswick. Consensus statement. Emergency burn care. Version 2. 2025.",
        url: "https://nbtrauma.ca/wp-content/uploads/2025/10/Consensus-Statement-Emergency-Burn-Care-AUGUST-2025-FINAL.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 3,
  },
  {
    id: "burns-33",
    topic: "burns",
    title: "A flare-up on the balcony grill",
    stem: "A 68-year-old man presents to the emergency department 1 hour after grease on his balcony barbecue flared up. His sleeves caught fire and he beat out the flames with his hands. He has Parkinson disease with a tremor and slow movements, takes carbidopa-levodopa and lives alone in an apartment. There are burns on the backs of both hands and fingers and the front of both forearms, about 5% TBSA. They are pale and fairly dry, blanch slowly and are less painful to pinprick than the surrounding skin. The burns do not encircle any limb. His face is spared and his voice is normal. He rates his pain as 8 out of 10.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "98/minute",
      resp: "18/minute",
      bp: "146/84 mmHg",
      o2sat: "98% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features are most important in deciding where he is treated?",
        options: [
          "Age of 68 years",
          "Burn size of about 5% TBSA",
          "Comorbid Parkinson disease",
          "Deep partial burns of both hands",
          "Grease fire as the mechanism",
          "Living in an apartment"
        ],
        select: 2,
        correct: [
          2,
          3
        ],
        explanation: "The American Burn Association referral guideline calls for immediate consultation, with consideration of transfer, for any deep partial or full thickness burn of the hands, and for patients with burns and other comorbidities. His pale, dry, slowly blanching burns are deep partial thickness, and Parkinson disease is a comorbidity that will slow his recovery. A partial thickness burn under 10% TBSA alone would call for a routine consultation. Age, the grease mechanism and his type of housing are not referral criteria by themselves.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate fluid plan for his burn?",
        options: [
          "albumin 5% 1 mL/kg per %TBSA",
          "Encourage oral fluids",
          "Ringer's lactate 500 mL/hour",
          "Ringer's lactate 2 mL/kg per %TBSA",
          "Ringer's lactate 4 mL/kg per %TBSA"
        ],
        correct: 1,
        explanation: "The Alaska burn guideline states that burns under 20% TBSA do not need IV fluid resuscitation and that oral fluids are feasible and favoured for small to moderate burns. Formula-based IV resuscitation is for adults with partial and full thickness burns over 20% TBSA. His burn is about 5%, and he is drinking. A rate of 500 mL/hour is the guideline's starting rate for large burns before TBSA is known. Albumin is reserved for large burns that respond poorly to crystalloid. Extra fluid would add swelling to his burned hands.",
        keyFeature: {
          topic: "burns",
          n: 4
        },
        source: "alaska"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first analgesic order for his pain?",
        options: [
          "codeine 30 mg PO",
          "hydromorphone 2 mg IM",
          "hydromorphone 0.25 mg IV",
          "ketorolac 30 mg IV",
          "morphine 10 mg IV once"
        ],
        correct: 2,
        explanation: "He has severe pain from deep burns. The Alaska guideline advises repeated small IV doses of analgesia titrated to effect, while watching for respiratory depression. A small IV dose of hydromorphone suits his age and can be repeated until his pain is controlled. A single 10 mg dose of morphine is large for a 68-year-old. Intramuscular dosing is painful and absorbed unpredictably. Codeine is weak and unreliable. Ketorolac alone will not control severe burn pain.",
        keyFeature: {
          topic: "burns",
          n: 3
        },
        source: "alaska"
      },
      {
        id: "q4",
        kind: "single",
        update: "His pain is now controlled. His hands are dressed and elevated. He cannot grip his cup or open a pill bottle with the dressings on.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Burn centre consultation for transfer",
          "Discharge home with home care nursing",
          "Discharge with family physician follow-up",
          "Observation overnight then discharge",
          "Plastic surgery clinic next week"
        ],
        correct: 0,
        explanation: "His deep partial thickness burns of both hands meet the American Burn Association criteria for immediate consultation with consideration of transfer, and his comorbidity adds to that need. Hand burns of this depth may need grafting and early hand therapy to prevent contractures. He lives alone and cannot manage his own care with both hands dressed. Discharge with home nursing, family physician follow-up, overnight observation or a clinic visit next week delays specialist care and leaves him unable to look after himself.",
        keyFeature: {
          topic: "burns",
          n: 5
        },
        source: "aba-referral"
      }
    ],
    sources: [
      S.abaRef,
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf"
      }
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-34",
    topic: "burns",
    title: "Brought in by police",
    stem:
      "A 29-year-old man is brought to the emergency department by police 1 hour after he poured lighter fluid on both forearms and set it alight in his apartment. He says he wanted to die and still does. He has depression and was prescribed sertraline, which he stopped last month. He will not say whether he took anything else.\n\nHe is alert and oriented. There are deep partial thickness burns on the volar surfaces of both forearms, about 4% TBSA. His voice is normal and there is no soot in the mouth. He rates his pain 8 out of 10.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "18/minute", bp: "138/86 mmHg", o2sat: "98% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic for him now?",
        options: ["codeine 30 mg PO", "fentanyl 250 mcg IV", "hydromorphone 1 mg IV", "lorazepam 2 mg SL", "morphine 15 mg IM"],
        correct: 2,
        explanation:
          "Pain of 8 out of 10 from deep partial thickness burns calls for an IV opioid titrated to effect, and hydromorphone 1 mg IV is a reasonable starting dose for a 75 kg adult. Fentanyl 250 mcg is over 3 mcg/kg as a single dose and risks apnea. IM morphine absorbs slowly and unpredictably. Lorazepam does not relieve pain. Codeine is weak and its effect varies with metabolism.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important to add for him?",
        options: ["Carboxyhemoglobin level", "Creatine kinase level", "CT of the head", "Serum acetaminophen level", "Serum lipase level"],
        correct: 3,
        explanation:
          "Every patient who self-harms, and who will not say what else he took, needs an acetaminophen level, because early acetaminophen poisoning causes no symptoms and is treatable only if found in time. Carboxyhemoglobin matters after smoke exposure in an enclosed space, and he has no smoke or airway findings. A small burn does not cause rhabdomyolysis. He is alert with no head injury in the history, so head CT is not indicated. Lipase does not change his care.",
        keyFeature: { topic: "burns", n: 1 },
        source: "alyahya-apap-screen",
      },
      {
        id: "q3",
        kind: "single",
        update: "You are working in Ontario. His burns are dressed and he is medically stable. He stands up and says he is going home. He still says he wants to die.",
        prompt: "Which of the following is the most appropriate next step?",
        options: ["Allow him to leave against advice", "Ask police to take him home", "Complete a Form 1 for assessment", "Discharge with a crisis line number", "Voluntary admission only if he agrees"],
        correct: 2,
        explanation:
          "A physician who examines a person who has attempted or threatens bodily harm to himself, and who is apparently suffering from a mental disorder likely to result in serious bodily harm to himself, can complete a Form 1 under section 15 of the Ontario Mental Health Act, which allows detention for up to 72 hours for psychiatric assessment. Letting him leave, sending him home with police or discharging him with a crisis number leaves a man with ongoing suicidal intent unsafe. Voluntary admission is preferred when he accepts it, but it cannot depend on his agreement when he is leaving.",
        keyFeature: { topic: "burns", n: 5 },
        source: "ontario-mha",
      },
    ],
    sources: [S.abaPain, S.mha, S.alyahya],
    ...META,
  },
  {
    id: "burns-35",
    topic: "burns",
    title: "A hand under the belt",
    stem:
      "A 4-year-old boy is brought to the emergency department by his father 1 hour after he pushed his right hand under the moving belt of a home treadmill. His father switched it off and freed the hand within a few seconds. He is healthy and his immunizations are up to date.\n\nHe is crying and holds the hand still. On the palm and the palmar surface of the fingers there are raw friction burns, about 1% TBSA, with white patches that do not blanch. He will not make a fist. The fingers are pink with brisk capillary refill. The dorsum is swollen but not burned.",
    vitals: { temperature: "37.0°C tympanic", pulse: "134/minute", resp: "26/minute", bp: "100/64 mmHg", o2sat: "99% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first analgesic for him?",
        options: ["fentanyl 9 mcg IN", "fentanyl 17 mcg IN", "fentanyl 25 mcg IN", "fentanyl 50 mcg IN", "fentanyl 100 mcg IN"],
        correct: 2,
        explanation:
          "A deep friction burn of the palm is severely painful, and intranasal fentanyl 1.5 mcg/kg is the first choice without IV access, which is 25.5 mcg, or about 25 mcg, at 17 kg. 9 mcg is about 0.5 mcg/kg and 17 mcg is 1 mcg/kg, both too low for a first dose. 50 mcg is about 3 mcg/kg. 100 mcg is the maximum single dose for a much larger child and would be about 6 mcg/kg here.",
        keyFeature: { topic: "burns", n: 3 },
        source: "trekk-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for his hand?",
        options: ["Bone scan of the hand", "CT angiogram of the arm", "MRI of the hand", "Radiograph of the hand", "Ultrasound of the tendons"],
        correct: 3,
        explanation:
          "A treadmill belt crushes as well as abrades the hand, and dorsal swelling with refusal to make a fist raises concern for fracture, so a radiograph of the hand is needed. The burn is not the only injury to look for. His fingers are pink with brisk refill, so angiography is not needed. MRI, bone scan and tendon ultrasound are not first line tests after acute hand trauma in a child.",
        keyFeature: { topic: "burns", n: 1 },
        source: "trekk-burns",
      },
      {
        id: "q3",
        kind: "single",
        update: "The radiograph shows no fracture.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Discharge with family physician review", "Discharge with home dressings", "Hand therapy referral in 2 weeks", "Paediatric burn centre referral", "Splint and review in 2 weeks"],
        correct: 3,
        explanation:
          "A deep partial thickness burn of the hand, even at 1% TBSA, meets TREKK criteria for referral to a paediatric burn centre because scarring across the palm and fingers can cause contracture and loss of function. Family physician review or home dressings do not give the specialist wound care and splinting he needs. Waiting 2 weeks for hand therapy or review is too late for decisions about grafting.",
        keyFeature: { topic: "burns", n: 5 },
        source: "trekk-burns",
      },
    ],
    sources: [S.trekkPain, S.trekkBurns],
    ...META,
  },
  {
    id: "burns-36",
    topic: "burns",
    title: "Short of breath three days after a fire",
    stem:
      "A 47-year-old man is brought to the emergency department by ambulance with worsening shortness of breath. Three days ago the house trailer where he lives caught fire while he slept, and he escaped through thick smoke. He declined assessment at the scene and has coughed black sputum since. Today he became confused. He smokes a pack of cigarettes a day and has no other medical history.\n\nHe is drowsy but answers questions in a normal voice. There is no stridor. He coughs up thick black secretions that he cannot clear. There are coarse crackles and wheeze over both lungs. Deep partial thickness burns of both forearms and the upper back, about 11% TBSA, are covered with household towels. A chest radiograph shows patchy opacities in both lungs.",
    vitals: { temperature: "38.9°C oral", pulse: "126/minute", resp: "36/minute", bp: "104/62 mmHg", o2sat: "85% on 15 L/minute by non-rebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan for him now?",
        options: ["Awake intubation with topical anesthesia", "High flow nasal oxygen trial first", "Noninvasive ventilation trial first", "Rapid sequence with rocuronium", "Rapid sequence with succinylcholine"],
        correct: 3,
        explanation:
          "He is hypoxemic on high flow oxygen, breathing 36 times a minute, confused and unable to clear thick secretions, so his airway needs to be secured now rather than after a trial of support. High flow nasal oxygen and noninvasive ventilation are poor choices for a confused patient who cannot clear his secretions. An awake technique needs a cooperative patient, and his confusion and hypoxemia make it unsafe. His burns are 3 days old. The Alaska guideline warns that patients whose burns are more than a few hours old may have a raised potassium and that succinylcholine needs care, so rocuronium is the safer paralytic.",
        keyFeature: { topic: "burns", n: 2 },
        source: "alaska",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his worsening respiratory failure today?",
        options: ["Aspiration pneumonitis", "Cardiogenic pulmonary edema", "Lower airway smoke injury", "Pulmonary embolism", "Thermal upper airway edema"],
        correct: 2,
        explanation:
          "Thick smoke, black sputum since the fire, wheeze, crackles and patchy opacities in both lungs point to chemical injury of the lower airways from smoke. Inhalation injury causes atelectasis and impaired immune function, and pneumonia is a common complication, which fits his fever and new confusion 3 days later. Thermal airway injury is generally limited to the structures above the glottis, and his normal voice and lack of stridor make upper airway edema unlikely. He has no heart disease to suggest cardiogenic edema and no reduced consciousness before today to suggest aspiration. His smoke exposure explains the bilateral findings better than a pulmonary embolism.",
        keyFeature: { topic: "burns", n: 1 },
        source: "walker-inhalation",
      },
      {
        id: "q3",
        kind: "single",
        update: "In the ICU he receives a fentanyl infusion and is fed through a nasogastric tube. His creatinine is 196 umol/L. When his dressings are changed he grimaces and his heart rate rises to 140/minute.",
        prompt: "Which of the following should be added to his analgesia now?",
        options: ["acetaminophen 1 g NG every 6 hours", "ketorolac 15 mg IV every 6 hours", "lidocaine 1 mg/kg/hour IV infusion", "midazolam 2 mg/hour IV infusion", "morphine 2 mg/hour IV infusion"],
        correct: 0,
        explanation:
          "The American Burn Association pain guideline advises that opioids should not be used in isolation and that acetaminophen be given to all burn patients, with care over the maximum daily dose. Added to his fentanyl, it gives multimodal analgesia and reduces the opioid he needs. NSAIDs such as ketorolac depend on the patient's kidney function, and his creatinine of 196 umol/L argues against one. IV lidocaine is only a second or third line adjunct. Midazolam sedates without treating pain and does not spare opioid. A morphine infusion adds a second opioid rather than an opioid sparing agent.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
    ],
    sources: [
      {
        id: "alaska",
        citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.",
        url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf",
      },
      S.walker,
      S.abaPain,
    ],
    reviewed: false,
    author: META.author,
    version: 2,
  },
  {
    id: "burns-37",
    topic: "burns",
    title: "Gasoline on the bonfire",
    stem:
      "A 15-year-old boy is brought to the emergency department by his parents 1 hour after he threw gasoline onto a backyard bonfire and the flames flashed back at him. The fire was outdoors. He has no medical history.\n\nHe is alert and speaks in full sentences with a normal voice. There is no stridor, cough or soot in the nose or mouth. The tips of his eyebrows are singed. There are red, blistered, blanching burns on the forehead and cheeks, and on the front of both arms and hands. The total burn is 14% TBSA. The chest is clear.",
    vitals: { temperature: "36.8°C oral", pulse: "108/minute", resp: "18/minute", bp: "124/74 mmHg", o2sat: "99% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway management for him?",
        options: ["Awake fibreoptic intubation", "Dexamethasone 10 mg IV", "Nebulized racemic epinephrine", "Observe with serial airway checks", "Rapid sequence intubation"],
        correct: 3,
        explanation:
          "An outdoor flash burn with singed eyebrow tips but a normal voice, no stridor, no soot and a clear chest does not point to inhalation injury, so he is watched with repeated airway checks and the plan changes if hoarseness or stridor appears. Intubating every facial burn exposes patients to avoidable risk and ventilator time. Dexamethasone and racemic epinephrine have no role in an airway that shows no edema.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate IV fluid plan for him?",
        options: ["Maintenance IV fluid with oral intake", "Normal saline bolus 20 mL/kg", "Ringer's lactate 2 mL/kg per %TBSA", "Ringer's lactate 3 mL/kg per %TBSA", "Ringer's lactate 4 mL/kg per %TBSA"],
        correct: 0,
        explanation:
          "TREKK starts a burn resuscitation formula for burns over 15% TBSA, and his burn is 14%, so maintenance IV fluid with oral intake is enough while his perfusion and urine output are watched. The 2 mL/kg figure applies to those aged 13 years and over whose burns meet the threshold. 3 mL/kg is for children 12 and under. 4 mL/kg is an older formula that drives excess fluid. A saline bolus is not needed in a well perfused patient.",
        keyFeature: { topic: "burns", n: 4 },
        source: "trekk-burns",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit to the adolescent ward", "Discharge with burn clinic follow-up", "Observe overnight then discharge", "Outpatient plastic surgery review", "Transfer to a paediatric burn centre"],
        correct: 4,
        explanation:
          "Partial thickness burns of 10% TBSA or more meet TREKK criteria for transfer to a paediatric burn centre, and his 14% burn involves the face and hands, where the centre can manage function and scarring and watch for burns that deepen. An adolescent ward lacks burn wound expertise. Discharge, overnight observation or outpatient plastic surgery review do not match a burn of this size and site.",
        keyFeature: { topic: "burns", n: 5 },
        source: "trekk-burns",
      },
      {
        id: "q4",
        kind: "menu",
        select: 3,
        prompt: "Which of the following measures are most appropriate to reduce his pain in the department?",
        options: ["Apply ice packs to the burns", "Cling wrap over the arm burns", "Cool running water for 20 minutes", "IM morphine every 4 hours", "IV fentanyl titrated to effect", "Leave the burns open to air", "Silver sulfadiazine to all burns"],
        correct: [1, 2, 4],
        explanation:
          "Cool running water for 20 minutes still helps within 3 hours of the burn, and he is 1 hour out. Plastic cling wrap laid lengthwise over the limb burns, not the face, cuts air flow over exposed nerve endings. IV fentanyl titrated to effect treats moderate to severe pain. Ice deepens the injury. IM morphine absorbs unpredictably and hurts to give. Air flow over open burns increases pain. Silver sulfadiazine is not advised and makes later wound assessment harder.",
        keyFeature: { topic: "burns", n: 3 },
        source: "trekk-burns",
      },
    ],
    sources: [S.walker, S.trekkBurns],
    ...META,
  },
  {
    id: "burns-38",
    topic: "burns",
    title: "Smoke in the workshop",
    stem:
      "A 62-year-old man is brought to the emergency department by ambulance after a fire in his basement workshop. He tried to fight it and was in the smoke for about 20 minutes before he got out. He has hypertension and takes amlodipine. He does not smoke.\n\nHe is alert with a normal voice and no stridor. The neurologic examination is normal. There is soot in both nostrils and he coughs up black sputum. His face is not burned. There are partial thickness burns on the backs of both hands, about 2% TBSA. The chest is clear. Carboxyhemoglobin is 16% and venous lactate is 1.8 mmol/L. His ECG shows sinus rhythm with no ischemic changes.",
    vitals: { temperature: "36.9°C oral", pulse: "98/minute", resp: "20/minute", bp: "148/88 mmHg", o2sat: "97% on 15 L/minute by nonrebreather mask", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 4,
        prompt: "Which of the following findings in him suggest inhalation injury?",
        options: ["Burns on the hands", "Carbonaceous sputum", "Carboxyhemoglobin of 16%", "Enclosed space fire", "Glasgow Coma Scale of 15", "Normal voice", "Oxygen saturation of 97%", "Soot in the nostrils"],
        correct: [1, 2, 3, 7],
        explanation:
          "A fire in an enclosed space, soot in the nostrils, carbonaceous sputum and a raised carboxyhemoglobin in a non-smoker all point to smoke inhalation. Hand burns say nothing about the airway. A normal voice and a normal level of consciousness are reassuring but do not exclude injury below the cords. The oxygen saturation on a nonrebreather mask is not reassuring, since pulse oximetry reads carboxyhemoglobin as oxyhemoglobin.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to assess his upper airway?",
        options: ["Chest radiograph", "CT of the neck soft tissues", "Lateral neck radiograph", "Nasolaryngoscopy at the bedside", "Rapid sequence intubation"],
        correct: 3,
        explanation:
          "He has signs of smoke inhalation but no stridor, hoarseness or facial burn, so direct inspection with a bedside nasolaryngoscope shows whether there is edema or soot at the glottis and guides the decision to intubate. Intubating without evidence of upper airway compromise adds risk. A chest radiograph is usually normal early after inhalation injury. Neck CT and lateral neck films show upper airway swelling poorly and move him away from the resuscitation bay.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his carbon monoxide exposure?",
        options: ["Bilevel ventilation with 40% oxygen", "Hydroxocobalamin 5 g IV", "Hyperbaric oxygen within 6 hours", "Room air with a repeat level", "Tight fitting mask with 100% oxygen"],
        correct: 4,
        explanation:
          "Carboxyhemoglobin of 16% in an alert man with no neurologic deficit, no ischemic ECG changes and a normal lactate is treated with 100% oxygen through a tight fitting mask, which shortens the half life of carbon monoxide. Hyperbaric oxygen is considered for serious poisoning, marked by loss of consciousness, neurologic deficits, ischemic cardiac changes, significant metabolic acidosis or carboxyhemoglobin above 25%, and he has none of these. 40% oxygen and room air are too little. His normal lactate and BP do not suggest cyanide, so hydroxocobalamin is not needed.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hampson-co",
      },
      {
        id: "q4",
        kind: "single",
        update: "Nasolaryngoscopy shows soot in the pharynx and on the epiglottis with no edema.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit to the general medicine ward", "Discharge after a normal carboxyhemoglobin", "Discharge with next day clinic review", "Refer to the burn centre for admission", "Short stay unit for 6 hours"],
        correct: 3,
        explanation:
          "Soot in the pharynx confirms smoke inhalation, and the American Burn Association advises burn centre consultation with consideration of transfer for every suspected inhalation injury, because airway edema and lower airway injury can worsen over the next 24 to 48 hours. A general ward lacks airway and burn expertise. Discharge once the carboxyhemoglobin falls, discharge with clinic review or a 6 hour stay all end monitoring too early.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.walker, S.hampson, S.abaRef],
    ...META,
  },
];
