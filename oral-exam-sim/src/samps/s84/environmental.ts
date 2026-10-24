// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  hc: { id: "hc-extreme-heat", citation: "Health Canada. Extreme heat events guidelines: technical guide for health care workers. 2011.", url: "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/climate-change-health/extreme-heat-events-guidelines-technical-guide-health-care-workers.html" },
  extrip: { id: "extrip-lithium", citation: "Decker BS, Goldfarb DS, Dargan PI, and colleagues. Extracorporeal treatment for lithium poisoning: systematic review and recommendations from the EXTRIP Workgroup. Clin J Am Soc Nephrol. 2015.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4422246/" },
  nata: { id: "nata-sudden-death", citation: "Casa DJ, Guskiewicz KM, Anderson SA, and colleagues. National Athletic Trainers' Association position statement: preventing sudden death in sports. J Athl Train. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3418121/" },
  paal: { id: "paal-hypothermia", citation: "Paal P, Pasquier M, Darocha T, and colleagues. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8744717/" },
  lampropoulou: { id: "lampropoulou-diving", citation: "Lampropoulou DI, Papageorgiou D, Pliakou E. Diving medicine: an exciting journey through time and future prospects. Cureus. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11044526/" },
  uhms: { id: "uhms-dcs-age", citation: "Undersea and Hyperbaric Medical Society. UHMS best practice guidelines: prevention and treatment of decompression sickness and arterial gas embolism. 2011.", url: "https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf" },
  smith: { id: "smith-electrical", citation: "Smith I, Kidd S, Kim S, Tennill RM. Assessment and management of electrical injuries in adults in the emergency department. Cureus. 2026.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13179728/" },
  bailey: { id: "bailey-monitoring", citation: "Bailey B, Gaudreault P, Thivierge RL. Cardiac monitoring of high-risk patients after an electrical injury: a prospective multicentre study. Emerg Med J. 2007.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2658483/" },
} satisfies Record<string, Source>;

export const ENVIRONMENTAL_S84: Samp[] = [
  /* 39 Heat warning, lithium ------------------------------------------------ */
  {
    id: "environmental-39",
    topic: "environmental",
    alsoTopics: ["tox"],
    title: "Found confused on the couch",
    stem:
      "You are working in a community hospital emergency department in Kamloops, British Columbia. A 77-year-old woman is brought in by ambulance on the fourth day of an extreme heat warning. Her home support worker found her confused on the couch of her top floor apartment, which has no air conditioning. The worker says she has had loose stools for 2 days and has been drinking little. She has bipolar disorder treated with lithium carbonate 900 mg daily for 20 years, and hypertension treated with amlodipine.\n\nShe is disoriented and cannot follow two-step commands. Her skin is hot and dry. She has a coarse tremor of both hands and occasional myoclonic jerks of the arms. There is no neck stiffness, rash or sign of head injury. Capillary glucose is 6.3 mmol/L.",
    vitals: { temperature: "41.1°C rectal", pulse: "116/minute", resp: "24/minute", bp: "102/58 mmHg", o2sat: "95% on room air", weight: "57 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Ice packs, cold water spray and fans are started with a rectal probe in place.",
        prompt: "Which of the following investigations is most likely to identify a second cause of her presentation?",
        options: ["Noncontrast CT head", "Serum lithium level", "TSH and free T4 level", "Two sets of blood cultures", "Urine drug screen"],
        correct: 1,
        explanation:
          "A coarse tremor and myoclonic jerks in a patient on long-term lithium point to lithium toxicity, which heat stroke alone does not explain. Two days of diarrhea and poor intake in the heat cause volume depletion, which increases lithium reabsorption in the kidney and raises the level. Blood cultures belong in her workup, but she has no focal source and they would not account for the tremor or myoclonus. CT head has a low yield without injury or focal signs. Nothing suggests thyroid disease, and a urine drug screen does not detect lithium.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "extrip-lithium",
      },
      {
        id: "q2",
        kind: "single",
        update: "After 35 minutes her rectal temperature is 38.9°C and active cooling is stopped. An hour later she is still disoriented with myoclonic jerks. Lithium is 3.6 mmol/L. Creatinine is 162 umol/L, up from 71 umol/L last year. Sodium is 141 mmol/L.",
        prompt: "Which of the following is the most likely cause of her ongoing confusion now that her temperature is controlled?",
        options: ["Lithium neurotoxicity", "Nonconvulsive status epilepticus", "Ongoing heat stroke injury", "Serotonin toxicity", "Wernicke encephalopathy"],
        correct: 0,
        explanation:
          "Her confusion persists at a normal temperature, alongside the tremor and myoclonus she had on arrival, a lithium of 3.6 mmol/L and a creatinine that has more than doubled. This is chronic lithium toxicity with neurotoxicity, and severe cases show myoclonus, seizures and coma. Heat stroke can leave lasting brain injury, but it does not explain the tremor and myoclonus or the toxic level. Nonconvulsive status needs an EEG if she fails to improve, but the lithium explains every finding. She takes no serotonergic drug, and nothing in her history suggests the malnutrition or alcohol use behind Wernicke encephalopathy.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "extrip-lithium",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is admitted and treated for lithium toxicity, and she recovers over 4 days. Her psychiatrist restarts lithium at a lower dose. The heat warning has been extended for 3 more days.",
        prompt: "Which of the following is the most appropriate hydration advice for her while she takes lithium in hot weather?",
        options: ["Drink a sports drink with each meal", "Drink water throughout the day", "Oral rehydration salts each morning", "Restrict fluids to 1.5 L daily", "Salt tablets with extra fluids"],
        correct: 1,
        explanation:
          "Lithium levels run higher in summer, and dehydration in hot weather is a recognized cause of lithium poisoning that needs hospital care. Health Canada advises people who take lithium to stay hydrated through the day with water. It advises against electrolyte solutions, because of the risk of hypernatremia. Sports drinks and oral rehydration salts are electrolyte solutions. Salt tablets add sodium in the same way. Restricting fluids to 1.5 L a day in a heat wave invites the dehydration that raised her level this time.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "hc-extreme-heat",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her son plans to take her home and buy an electric fan. Her apartment was 33°C this afternoon.",
        prompt: "Which of the following is the most protective plan for her once she leaves hospital, while the heat warning continues?",
        options: ["Cool shower each evening", "Electric fan beside her bed", "Extra fluids and a fan at home", "Fan with windows open at night", "Stay in an air-conditioned place"],
        correct: 4,
        explanation:
          "Air conditioning is one of the most protective factors against heat illness and death, and a public air-conditioned place is the alternative when a home has none. Studies of electric fans and heat stroke are mixed. Once the air is hotter than the skin, about 36°C, a fan warms the body by convection, and fans work less well in humid air. A fan in an apartment that reaches 33°C, with or without open windows and extra fluids, does not protect an older woman who has just had heat stroke. An evening shower cools her for a short time only. Health Canada also advises a daily check-in plan for people like her during extreme heat.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "hc-extreme-heat",
      },
    ],
    sources: [S.extrip, S.hc],
    ...META,
  },
  /* 40 Track meet medical tent --------------------------------------------- */
  {
    id: "environmental-40",
    topic: "environmental",
    title: "A runner carried into the medical tent",
    stem:
      "You are the physician in the medical tent at a provincial high school track and field championship in Saskatoon in June. It is 31°C with a humidex of 38. The tent has a stock tank filled with ice water, and an ambulance is parked beside the track. A 17-year-old girl is carried in after the 3000 m final. She stumbled and fell 150 m from the finish, got up and staggered across the line. She has no medical history and takes no medications.\n\nShe answers questions but thinks she is at a practice and cannot say which race she ran. She cannot stand without help. Her skin is flushed and wet with sweat. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "41.0°C rectal", pulse: "172/minute", resp: "28/minute", bp: "104/60 mmHg", o2sat: "98% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her collapse near the end of the race?",
        options: ["Exercise-associated collapse", "Exertional heat stroke", "Heat exhaustion", "Hyponatremic encephalopathy", "Postural hypotension"],
        correct: 1,
        explanation:
          "A rectal temperature above 40°C soon after collapse, together with central nervous system dysfunction such as disorientation, defines exertional heat stroke. She can talk, but she does not know where she is or what race she ran, and that counts as altered mental status. Heavy sweating does not exclude the diagnosis. Collapse from blood pooling after the finish occurs past the line, with a clear mind once the athlete lies flat. Heat exhaustion has no central nervous system dysfunction. Hyponatremia follows hours of exercise with excess drinking, not a 3000 m race. Her BP of 104/60 mmHg does not explain her confusion.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-sudden-death",
      },
      {
        id: "q2",
        kind: "single",
        update: "She is placed in the ice water tank with a rectal probe in place. After 9 minutes her rectal temperature is 39.8°C. She is shivering, now knows where she is and asks to get out.",
        prompt: "Which of the following is the most appropriate next step in her cooling?",
        options: ["Continue immersion until 38.9°C", "Move her to fans and wet towels", "Remove her and transfer by ambulance", "Remove her now and observe", "Stop at 39.5°C and observe"],
        correct: 0,
        explanation:
          "Core temperature must come down below 38.9°C as soon as possible, and she should be removed from the water when the rectal probe reads 38.9°C to avoid overcooling. Her clearer mind, her shivering and her wish to get out are not the end point. At 39.8°C she is still hyperthermic, and each extra minute at a high temperature adds to organ injury. Fans and wet towels cool more slowly than immersion. Transfer before cooling is complete breaks the rule of cooling first and transporting second when care is available on site. A stop at 39.5°C leaves her above the target.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-sudden-death",
      },
      {
        id: "q3",
        kind: "single",
        update: "Cooling is completed and she is lifted out of the tank. She is oriented and says she feels fine. Her coach suggests she rest and go home with her parents.",
        prompt: "Which of the following is the most appropriate plan for her now that cooling is complete?",
        options: ["Discharge to her coach and parents", "Family doctor review tomorrow", "Observe in the tent for 1 hour", "Rest, then run in the relay", "Transport to hospital by ambulance"],
        correct: 4,
        explanation:
          "Athletes with exertional heat stroke are cooled first and then transported to hospital. Feeling well after cooling does not exclude injury to muscle, kidney, liver or clotting, which needs laboratory assessment and observation. Discharge to her coach and parents, a family doctor visit the next day or an hour in the tent all skip that assessment. Returning to compete the same day exposes her to a second heat injury while she is still recovering from the first.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-sudden-death",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later a 16-year-old boy with sickle cell trait, known from newborn screening, is carried in. Twenty minutes into his warm-up, during repeat 200 m sprints, he slumped to the track. His legs feel weak but are not cramping. He is alert and oriented. His rectal temperature is 38.4°C, pulse 134/minute and respiratory rate 32/minute.",
        prompt: "Which of the following is the most likely cause of the boy's collapse during his warm-up?",
        options: ["Cardiac arrhythmia", "Exertional heat cramps", "Exertional heat stroke", "Exertional sickling", "Heat exhaustion"],
        correct: 3,
        explanation:
          "Exertional sickling in an athlete with sickle cell trait typically strikes within the first half hour of intense effort. The athlete slumps to the ground with weak muscles, and core temperature is not greatly raised. The boy fits each feature. Heat stroke needs a core temperature above 40°C with central nervous system dysfunction, and he is alert at 38.4°C. Heat cramps lock the muscles and usually start with twinges, and his legs are weak rather than cramped. Cardiac collapse tends to be instant and is not tied to muscle symptoms. Heat exhaustion is unlikely 20 minutes into a warm-up with a near-normal temperature.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-sudden-death",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for the boy in the medical tent?",
        options: ["High-flow oxygen and ambulance transfer", "Ice water immersion in the tent", "Oral fluids and rest in the shade", "Return to warm-up after a short rest", "Stretching and massage of both calves"],
        correct: 0,
        explanation:
          "Sickling collapse is treated as a medical emergency. NATA advises checking vital signs, giving high-flow oxygen at 15 L/minute by non-rebreather mask, and calling for transport with an AED attached if the athlete becomes obtunded or his vital signs decline. He is tachycardic and tachypneic in a tent with no laboratory, and the treating physicians must be ready for explosive rhabdomyolysis, so he goes to hospital by ambulance. Ice water immersion treats a high core temperature that he does not have and would delay transfer. Rest with oral fluids and a return to warm-up underestimate the danger. Stretching and massage treat cramps, which he does not have.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-sudden-death",
      },
    ],
    sources: [S.nata],
    ...META,
  },
  /* 41 Bus shelter, severe hypothermia -------------------------------------- */
  {
    id: "environmental-41",
    topic: "environmental",
    title: "Found on a bench at dawn",
    stem:
      "A 61-year-old man is brought to the emergency department by ambulance in January. Transit security found him at 05:30 lying on the bench of an unheated bus shelter in Edmonton, where the overnight low was minus 27°C. Friends had left him there at 01:00 after an evening of drinking. He has hypertension treated with ramipril.\n\nHe does not open his eyes or make sounds, and he extends his limbs to pain. He is not shivering. His skin is cold and his muscles are stiff. The monitor shows a regular wide complex rhythm at 22/minute with J waves. The paramedic could not feel a carotid pulse during a 10 second check. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "26.8°C rectal", resp: "4/minute", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care on arrival?",
        options: ["Atropine 1 mg IV every 3 minutes", "Chest compressions at 100 to 120/minute", "Epinephrine 1 mg IV every 3 to 5 minutes", "Pulse check for 1 minute with POCUS", "Transcutaneous pacing at 60/minute"],
        correct: 3,
        explanation:
          "In severe hypothermia the pulse can be so slow and weak that a 10 second check misses it, and he still breathes and shows an organized rhythm. Rescuers should look for signs of life for up to 1 minute. The ECG, end-tidal CO2 and point of care ultrasound help show organized cardiac activity and a meaningful cardiac output. Compressions start only if that check finds no signs of life. His slow rhythm reflects cold-slowed conduction and improves with rewarming, so atropine and pacing do not help. Epinephrine is for cardiac arrest, which has not been confirmed.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ultrasound shows slow coordinated ventricular contractions, and a weak femoral pulse is felt. He is intubated by rapid sequence intubation and an esophageal probe is placed at 40 cm. His end-tidal CO2 is 21 mmHg.",
        prompt: "Which of the following should guide his initial ventilator settings after intubation?",
        options: ["End-tidal CO2 of 35 to 45 mmHg", "Half the usual rate for his temperature", "Oxygen saturation of 94 to 98%", "Tidal volume titrated to chest rise", "Weight-based standard settings"],
        correct: 4,
        explanation:
          "Hypothermic patients should be ventilated with standard settings based on body weight. End-tidal CO2 is not reliable in severe hypothermia, because the gap between arterial and end-tidal CO2 widens, so raising it toward 35 to 45 mmHg would hypoventilate him. Halving the rate for his low metabolism is an older approach, and hypoventilation is more harmful than hyperventilation in these patients. Pulse oximetry often fails in cold, constricted fingers and does not set minute ventilation. Watching chest rise is too imprecise to set a tidal volume.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes later an arterial gas run at 37°C shows pH 7.19 and PaCO2 55 mmHg. The analyser also reports pH 7.33 and PaCO2 37 mmHg, corrected to his esophageal temperature of 27.9°C.",
        prompt: "Which of the following is the most appropriate response to his arterial blood gas result?",
        options: ["Increase minute ventilation", "Keep current ventilator settings", "Lower the respiratory rate", "Repeat the gas after rewarming", "Sodium bicarbonate 1 mmol/kg IV"],
        correct: 0,
        explanation:
          "Blood gases in hypothermia are read by the alpha-stat approach, using the values measured at 37°C. That approach is linked to better cerebral perfusion and neurological outcome. His measured pH of 7.19 with a PaCO2 of 55 mmHg shows respiratory acidosis, so minute ventilation should go up. The corrected values look normal, and acting on them would keep him underventilated. Lowering the rate makes the acidosis worse. Waiting until he is rewarmed leaves the acidosis untreated for hours. Bicarbonate does not correct a respiratory acidosis and adds CO2 that he cannot clear.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 2 hours of forced air warming, warmed IV fluid and warmed humidified oxygen, his esophageal temperature is 31.6°C. A rectal probe placed at the same time reads 28.8°C.",
        prompt: "Which of the following best explains the difference between his two temperature readings during rewarming?",
        options: ["Afterdrop as his limbs rewarm", "Failure of his core to rewarm", "Rectal probe lag during rewarming", "Warm humidified oxygen near the probe", "Warmed IV fluid near the probe"],
        correct: 2,
        explanation:
          "Rectal temperature lags well behind true core temperature during cooling and rewarming, and readings from sites without much blood flow trail during rapid change. An esophageal probe in the lower third, about 40 cm from the incisors, tracks core temperature and should guide care. Afterdrop is a fall in core temperature, but his esophageal reading is rising. His core has risen from 27.9°C to 31.6°C, so it is rewarming. A probe at 40 cm sits in the lower esophagus, away from the warmed gas in the airway. Warmed IV fluid mixes in the central blood, which the esophageal probe reads correctly.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
  },
  /* 42 Missed decompression stop, chest symptoms ----------------------------- */
  {
    id: "environmental-42",
    topic: "environmental",
    title: "Breathless after a wreck dive",
    stem:
      "You are working in a rural hospital emergency department on the Bruce Peninsula in Ontario in August. A 47-year-old man visiting from Vancouver is brought in by ambulance 90 minutes after his last dive. He made two wreck dives on air today, the second to 41 m. Near the end of the second dive he ran low on air and surfaced without completing a 10 minute decompression stop shown on his dive computer. About 45 minutes after surfacing he felt a burning pain behind the sternum when breathing in, then a dry cough whenever he tried to take a deep breath, and increasing breathlessness. He has vomited twice. He has no limb weakness, numbness or confusion, and no medical history.\n\nThe chest is clear. The neurological examination is normal. The ECG shows sinus tachycardia without ST changes. A chest radiograph shows no pneumothorax.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute", resp: "30/minute", bp: "98/62 mmHg", o2sat: "90% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his chest pain and breathlessness?",
        options: ["Acute coronary syndrome", "Arterial gas embolism", "Immersion pulmonary edema", "Pulmonary decompression sickness", "Spontaneous pneumothorax"],
        correct: 3,
        explanation:
          "Pulmonary decompression sickness, often called the chokes, causes an inspiratory burning and substernal discomfort, a dry cough on deep breathing and breathlessness that can progress to respiratory distress. A deep dive with a missed decompression stop gives him a large inert gas load. Arterial gas embolism usually starts within 10 to 20 minutes of surfacing with stroke-like signs, and his symptoms began at 45 minutes with a normal neurological examination. Immersion pulmonary edema starts while the diver is still in the water, and his symptoms began after surfacing with a clear chest. His pain is inspiratory and his ECG shows no ischemia. The radiograph excludes a pneumothorax.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "lampropoulou-diving",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment while his transfer for recompression is arranged?",
        options: ["Acetylsalicylic acid 325 mg PO", "Dexamethasone 10 mg IV", "Furosemide 40 mg IV", "Lidocaine 1.5 mg/kg IV", "Oxygen 100% by non-rebreather"],
        correct: 4,
        explanation:
          "Oxygen at 15 L/minute by reservoir mask or demand valve is the first treatment for decompression sickness, given with the patient supine and monitored until he reaches a chamber. Surface oxygen does not replace recompression. The UHMS guideline advises against aspirin, corticosteroids and lidocaine as adjuncts for decompression sickness. Furosemide causes a diuresis, and dehydration impairs inert gas elimination in a diver who is already vomiting and has a low BP.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "uhms-dcs-age",
      },
      {
        id: "q3",
        kind: "single",
        update: "His hemoglobin is 184 g/L, up from 151 g/L at a checkup last spring. He has not passed urine since the morning and is still vomiting. His BP is now 92/58 mmHg.",
        prompt: "Which of the following is the most appropriate fluid therapy for him while he awaits recompression?",
        options: ["Dextrose 5% in water 1 L IV", "Dextrose 5% with 0.45% saline 1 L IV", "Normal saline 1 L IV", "Oral water 1 L over 1 hour", "No IV fluid before recompression"],
        correct: 2,
        explanation:
          "A rise in hemoglobin from 151 to 184 g/L with no urine since morning and a falling BP shows volume depletion. A diver who cannot take oral fluids should receive isotonic crystalloid, titrated to an adequate BP and a urine output of 1 to 2 mL/kg/hour, which is 84 to 168 mL/hour for him. Fluid overload should be avoided, so his lungs are reassessed after each litre. Dextrose-containing fluids should be avoided, which rules out both dextrose solutions. Oral water is not possible while he keeps vomiting. Withholding fluid leaves him hypotensive and dry.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "uhms-dcs-age",
      },
      {
        id: "q4",
        kind: "single",
        update: "Two days after treatment he has no symptoms or signs. He wants to fly home to Vancouver.",
        prompt: "Which of the following is the shortest recommended interval after his treatment before he flies home?",
        options: ["12 hours", "24 hours", "48 hours", "72 hours", "96 hours"],
        correct: 3,
        explanation:
          "After recompression treatment for decompression sickness, the UHMS guideline advises waiting 72 hours before flying when no residual signs or symptoms remain. A diver with residual findings flies only when cleared by a diving medicine physician. He is now at 48 hours, so he should wait one more day.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "uhms-dcs-age",
      },
    ],
    sources: [S.lampropoulou, S.uhms],
    ...META,
  },
  /* 43 Household 240 V shock with tetany ------------------------------------ */
  {
    id: "environmental-43",
    topic: "environmental",
    alsoTopics: ["msk"],
    title: "A shock while replacing an outlet",
    stem:
      "A 38-year-old man is brought to the emergency department by ambulance after an electric shock at home. He was replacing a 240 volt dryer outlet in his basement after switching off what he thought was the right breaker. He gripped a live wire with his right hand while kneeling on the damp concrete floor. His arm locked and he could not let go for about 2 seconds, until his wife switched off the main power. He felt the current run through his chest to his knees. His wife says he did not lose consciousness and talked throughout. He is otherwise well.\n\nHe holds his painful right arm against his body, internally rotated, and cannot rotate it outward. The back of the shoulder is prominent and the coracoid stands out in front. There is a 4 mm grey burn on the right palm and a 3 mm burn over the left knee. The forearm is soft and the hand is neurovascularly intact. His ECG shows normal sinus rhythm with normal intervals.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "99% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his right shoulder findings?",
        options: ["Acromioclavicular separation", "Anterior shoulder dislocation", "Posterior shoulder dislocation", "Proximal humerus fracture", "Rotator cuff tear"],
        correct: 2,
        explanation:
          "An arm locked in internal rotation that cannot be turned outward, with fullness behind the shoulder and a prominent coracoid in front, is a posterior shoulder dislocation. Tetanic contraction during an electric shock can produce enough force to fracture or dislocate, and the posterior shoulder is the joint injury most often described. An anterior dislocation holds the arm slightly abducted and externally rotated. An acromioclavicular separation gives a step at the top of the shoulder with rotation preserved. A proximal humerus fracture can occur with the same mechanism and is sought on radiographs, but it does not block rotation in this way. A cuff tear leaves passive rotation intact.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "smith-electrical",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate extent of his examination for other injuries?",
        options: ["Examination along the current path only", "Focused examination of the right arm", "Full musculoskeletal examination", "Neurovascular check of the right hand", "Skin survey for entry and exit burns"],
        correct: 2,
        explanation:
          "Every patient with an electrical injury should have a thorough musculoskeletal examination, because significant injury can be present without visible entry or exit wounds. Tetanic contraction strong enough to dislocate one shoulder can also fracture or dislocate other bones and joints, so the examination covers the whole skeleton, including the other shoulder and the spine. Examining only the current path, the right arm or the right hand misses injury from contraction elsewhere. A skin survey finds burns but not deep or skeletal injury.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "smith-electrical",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate cardiac assessment for him after his normal initial ECG?",
        options: ["Echocardiogram before discharge", "ED cardiac monitoring for 6 hours", "Serial troponin over 6 hours", "Telemetry admission for 24 hours", "No further cardiac testing"],
        correct: 4,
        explanation:
          "In a prospective study in 21 emergency departments, patients monitored after a shock because of current across the chest, tetany, loss of consciousness or a source of 1000 V or more had no dangerous late arrhythmia. The authors concluded that asymptomatic patients with current across the chest or tetany, a normal first ECG, a source below 1000 V and no loss of consciousness do not need cardiac monitoring. He has every one of those features. Troponin has not been shown to help with cardiac risk after electrical injury. Nothing in his history or examination calls for an echocardiogram.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "bailey-monitoring",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following laboratory investigations are most appropriate for him at this visit?",
        options: ["Coagulation profile with INR", "Complete blood count", "Creatine kinase", "CT of the chest", "Electrolytes and creatinine", "Serum lipase and amylase", "Urine drug screen"],
        select: 3,
        correct: [1, 2, 4],
        explanation:
          "A blood count, electrolytes with kidney function and a creatine kinase are advised for patients with electrical injury. Current passing through muscle and tetanic contraction can injure muscle out of sight, and creatine kinase on arrival screens for rhabdomyolysis. Normal creatine kinase and creatinine are part of the evidence that a patient can safely go home. CT of the chest is not indicated without chest trauma or abnormal findings. A coagulation profile, lipase and amylase, and a urine drug screen have no indication in his history or examination.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "smith-electrical",
      },
      {
        id: "q5",
        kind: "single",
        update: "His shoulder is reduced under procedural sedation and his laboratory results are normal.",
        prompt: "Which of the following is the most appropriate plan for the small burns on his palm and knee?",
        options: ["Burn centre consultation", "Debridement in the ED", "Family doctor wound check", "Plastic surgery clinic in 6 weeks", "Silver sulfadiazine only"],
        correct: 0,
        explanation:
          "Early consultation with a burn centre or burn surgery team is recommended for all electrical burns, because small entry and exit wounds can sit over deeper injury along the current path. A phone consultation decides whether he needs review in person and how soon. Debridement of small dry burns in the ED is not needed and does not assess the deeper tissue. A wound check by his family doctor, or a plastic surgery visit in 6 weeks, skips the early specialist assessment. Topical cream alone treats only the skin surface.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "smith-electrical",
      },
    ],
    sources: [S.smith, S.bailey],
    ...META,
  },
];
