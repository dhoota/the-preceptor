// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  mckee: { id: "mckee-hf", citation: "McKee D, Thoma A, Bailey K, Fish J. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4116323/" },
  cag: { id: "cag-calcium-gluconate", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Calcium gluconate. Updated 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/calcium-gluconate" },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/burnreferral" },
  anderson: { id: "anderson-buprenorphine", citation: "Anderson TA, Quaye ANA, Ward EN, Wilens TE, Hilliard PE, Brummett CM. To stop or not, that is the question: acute pain management for the patient on chronic buprenorphine. Anesthesiology. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7041233/" },
  hampson: { id: "hampson-co", citation: "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. Am J Respir Crit Care Med. 2012." },
  walker: { id: "walker-inhalation", citation: "Walker PF, Buehner MF, Wood LA, and colleagues. Diagnosis and management of inhalation injury: an updated review. Crit Care. 2015.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4624587/" },
  alaska: { id: "alaska-burns", citation: "Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021.", url: "https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf" },
  nb: { id: "nb-burn-care", citation: "Trauma New Brunswick. Consensus statement. Emergency burn care. Version 2. 2025.", url: "https://nbtrauma.ca/wp-content/uploads/2025/10/Consensus-Statement-Emergency-Burn-Care-AUGUST-2025-FINAL.pdf" },
  berry: { id: "berry-eye", citation: "Berry J, Ashley J, Jeffery S. Ophthalmological evaluation of facial burns in a regional burns centre. Burns. 2020.", url: "https://pureportal.bcu.ac.uk/en/publications/ophthalmological-evaluation-of-facial-burns-in-a-regional-burns-c/" },
} satisfies Record<string, Source>;

export const BURNS_S69: Samp[] = [
  /* 39 Glass etching cream -------------------------------------------------- */
  {
    id: "burns-39",
    topic: "burns",
    title: "Night pain after a craft project",
    stem:
      "A 58-year-old woman presents to the emergency department at 02:00 with severe throbbing pain in the tips of her right index and middle fingers. The pain began at about 21:00 and has steadily worsened. Yesterday afternoon she spent 3 hours decorating glass jars with a glass etching cream bought at a craft store. She wore no gloves, wiped stray cream off the stencils with her fingertips and washed her hands when she finished. She has hypothyroidism treated with levothyroxine. She rates the pain 10 out of 10. The pads of both fingertips are slightly pale. There are no blisters, no swelling of the pulp, no fluctuance and no redness around the nails. Capillary refill is brisk and sensation is normal. The rest of the hand is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "18/minute", bp: "148/86 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the pain in her fingertips?",
        options: ["Acute bacterial paronychia", "Felon of the finger pulp", "Fluoride burn from the cream", "Herpes simplex whitlow", "Primary Raynaud phenomenon"],
        correct: 2,
        explanation:
          "Glass etching creams contain fluoride salts such as ammonium bifluoride, which release hydrofluoric acid on the skin. Dilute fluoride burns cause deep, throbbing pain that can begin hours after contact while the skin looks almost normal, which matches pain that began hours after she wiped the cream with bare fingertips. A felon and a paronychia are bacterial infections that cause a tense, swollen pulp or redness and pus at the nail fold, and she has neither. A herpetic whitlow shows grouped vesicles. Raynaud phenomenon causes episodes of colour change with cold, not constant pain confined to the two fingers that touched the cream.",
        keyFeature: { topic: "burns", n: 6 },
        source: "mckee-hf",
      },
      {
        id: "q2",
        kind: "single",
        update: "The hospital pharmacy has no commercial calcium gluconate gel in stock.",
        prompt: "Which of the following is the most appropriate way to prepare a topical gel for her fingers?",
        options: ["calcium gluconate 10% 1 mL in 30 mL lubricant", "calcium gluconate 10% 10 mL in 30 mL lubricant", "calcium gluconate 10% 30 mL in 10 mL lubricant", "calcium gluconate 10% 10 mL in 30 mL saline", "magnesium sulfate 50% 10 mL in 30 mL lubricant"],
        correct: 1,
        explanation:
          "When commercial gel is not available, the Canadian Antidote Guide makes one by mixing 10 mL of calcium gluconate 10% for injection, which holds 1000 mg, into 30 mL of water-soluble lubricant. That gives 1000 mg in about 40 mL, or about 2.5%, the strength of the commercial gel, and it goes inside a surgical glove over her fingers. Only 1 mL in 30 mL gives about 0.3%, far too weak. Reversing the proportions gives a thin liquid of about 7.5% that will not stay in place, and saline runs off the skin and does not hold calcium against it. Magnesium sulfate is not the topical agent the guide recommends.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 hours of the gel in a glove, changed every 30 minutes, her pain is still 9 out of 10 and both fingertip pads remain pale.",
        prompt: "Which of the following is the most appropriate next treatment for her fingers?",
        options: ["Intra-arterial calcium gluconate infusion", "Magnesium sulfate 2 g IV", "Pulp infiltration of calcium chloride 10%", "Pulp infiltration of calcium gluconate 10%", "Water irrigation for another hour"],
        correct: 0,
        explanation:
          "Pain that persists despite well applied calcium gel means fluoride is still active deep in the finger, and an intra-arterial calcium gluconate infusion carries calcium to that tissue. The Canadian Antidote Guide gives 10 mL of calcium gluconate 10% in 40 mL of D5W over 4 hours through an arterial catheter proximal to the burn, repeated until relief lasts more than 4 hours. IV regional calcium by a Bier block is an alternative some centres use. The guide warns against injecting calcium into the fingers because it can compromise their circulation, and calcium chloride is avoided for infiltration because it is toxic to tissue. IV magnesium treats systemic hypomagnesemia, which a fingertip exposure does not cause. Irrigation helps in the first minutes after contact, not many hours after the cream was washed off.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q4",
        kind: "single",
        update: "A radial arterial catheter is placed and the first infusion is started. Her pain begins to ease.",
        prompt: "Which of the following is the most appropriate disposition for her after the first infusion is started?",
        options: ["Discharge once the first infusion ends", "Discharge with gel and next day review", "Monitored admission for the infusion", "Observe in the department for 6 hours", "Refer to hand clinic in 1 week"],
        correct: 2,
        explanation:
          "An arterial infusion needs an arterial line, nursing care and repeat 4 hour infusions until pain stays away, so she needs a monitored admission, with hand or burn surgery following the fingers. Stopping after one infusion, or after a fixed 6 hour observation, ignores the rule that treatment repeats until relief lasts more than 4 hours. Discharge with gel and next day review suited her before the gel failed, not now. A hand clinic visit in 1 week leaves an active fluoride burn untreated in the meantime. The guide also advises calling the poison centre whenever this antidote is used.",
        keyFeature: { topic: "burns", n: 5 },
        source: "cag-calcium-gluconate",
      },
    ],
    sources: [S.cag, S.mckee],
    ...META,
  },

  /* 40 Toddler and a rust remover ------------------------------------------- */
  {
    id: "burns-40",
    topic: "burns",
    title: "Toddler who will not use her hands",
    stem:
      "You are working in a community hospital emergency department. The paediatric ward has no cardiac monitoring, and the nearest paediatric burn centre is 2 hours away. A 2-year-old girl is brought in at 16:00 because she has cried and refused to use her hands since 14:00. At 10:00 her mother, cleaning the bathtub with a liquid rust remover, left the room for a minute. She returned to find the girl leaning over the tub, splashing both arms up to the elbows in a puddle of the product. Her clothes and other skin stayed dry. Her mother washed her arms with soap and water for about 2 minutes. The girl often sucks her fingers. She has not coughed. She is screaming and holds her arms away from her body. Her face and eyes look normal. Both hands and forearms are faintly red without blisters, about 10% of her body surface.",
    vitals: { temperature: "37.1°C axillary", pulse: "156/minute", resp: "30/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The label shows that the rust remover contains dilute hydrofluoric acid.",
        prompt: "Which of the following additional routes of exposure is most important to assess in her now?",
        options: ["Acid splashed into her eyes", "Acid vapour inhaled at the tub", "Product on her legs and feet", "Product soaked into her clothes", "Product swallowed from her fingers"],
        correct: 4,
        explanation:
          "A toddler who sucks her fingers may have swallowed some of the product before the wash, and ingestion of hydrofluoric acid is a recognized route to systemic fluoride toxicity on top of her skin exposure. Her mouth and throat need examining, and her mother should be asked about drooling, vomiting or abdominal pain since the spill. Her clothes and the rest of her skin stayed dry, so her legs, feet and clothing were not exposed. Her face and eyes look normal, which makes an important eye exposure unlikely, although they remain part of her examination. She has not coughed, and nothing suggests she breathed in enough vapour from a brief spill to matter.",
        keyFeature: { topic: "burns", n: 1 },
        source: "mckee-hf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important for her now?",
        options: ["Forearm and hand radiographs", "Serum fluoride concentration", "Skin surface pH testing", "Twelve lead ECG and ionized calcium", "Urinalysis for myoglobin"],
        correct: 3,
        explanation:
          "Hydrofluoric acid on more than 5% of the body surface carries a risk of systemic fluoride toxicity at any concentration, and her exposure covers about 10% of a 12 kg child. Fluoride binds calcium and magnesium, causing hypocalcemia, hypomagnesemia, hyperkalemia, QT prolongation and ventricular dysrhythmia, often before any clinical sign. An ECG and an ionized calcium, with magnesium and potassium, find this early. A serum fluoride level takes too long to guide care. Skin pH testing guides irrigation soon after contact, and she was washed 6 hours ago. Radiographs and urine myoglobin answer questions that this exposure does not raise.",
        keyFeature: { topic: "burns", n: 1 },
        source: "mckee-hf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate topical treatment for her hands and forearms?",
        options: ["Petroleum jelly gauze dressing", "Topical calcium chloride 10% gel", "Topical calcium gluconate 2.5% gel", "Topical lidocaine 4% cream", "Topical silver sulfadiazine 1%"],
        correct: 2,
        explanation:
          "Calcium gluconate 2.5% gel binds the fluoride that is still diffusing through her skin. The Canadian Antidote Guide applies it in gloves over the hands and under a non-absorbent bandage elsewhere, changed every 4 hours until relief lasts more than 4 hours without gel. Topical treatment is preferred once the skin has been washed well. Calcium chloride is directly toxic to tissue and is not used for these burns. Silver sulfadiazine and petroleum gauze are dressings for thermal burns and do not bind fluoride. Lidocaine cream numbs only the surface and hides the pain that shows whether the calcium is working.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her ECG shows sinus tachycardia with a QTc of 470 ms. Her ionized calcium is 1.02 mmol/L. She settles a little once the gel is on.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Admit to the local paediatric ward", "Discharge home with gel to apply", "Discharge with burn clinic review", "Paediatric burn centre transfer", "Refer to plastic surgery clinic"],
        correct: 3,
        explanation:
          "Her ionized calcium is low and her QTc is long, so fluoride is already acting beyond her skin, and she needs continuous cardiac monitoring, repeated electrolytes and IV calcium as needed. The American Burn Association places all chemical injuries in its group for immediate burn centre consultation with consideration of transfer, and notes that all paediatric burns may benefit from burn centre referral. The hospital's paediatric ward has no cardiac monitoring, so admitting her there would leave a falling calcium unwatched. She travels with a monitor, IV calcium ready and the gel in place, after a call to the burn centre and the poison centre. Discharge with gel or clinic review, or a plastic surgery clinic referral, treats the skin and ignores the systemic toxicity.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.mckee, S.cag, S.abaRef],
    ...META,
  },

  /* 41 Burns in a patient on buprenorphine --------------------------------- */
  {
    id: "burns-41",
    topic: "burns",
    title: "Flash fire in the boathouse",
    stem:
      "A 34-year-old man is brought to the emergency department by ambulance 50 minutes after gasoline vapour ignited while he refuelled a running generator inside the closed boathouse at his cottage. For about 20 minutes before the flash he had a headache and felt nauseated. He has opioid use disorder and takes buprenorphine-naloxone 16 mg SL daily, last taken at 08:00 today. He has no other medical history. Paramedics gave fentanyl 100 mcg IV with little effect. He is alert, oriented and crying out in pain. His voice is normal, his face is not burned and there is no soot in his mouth. There are moist, blistered partial thickness burns over the front of both thighs and both lower legs, about 18% TBSA.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute", resp: "22/minute", bp: "138/84 mmHg", o2sat: "99% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most important to add for him now?",
        options: ["Chest radiograph for aspiration", "Co-oximetry for carboxyhemoglobin", "Creatine kinase for rhabdomyolysis", "Serum lactate for cyanide", "Urine drug screen for fentanyl"],
        correct: 1,
        explanation:
          "A gasoline generator running in a closed boathouse produces carbon monoxide, and his headache and nausea before the flash are typical early symptoms. A standard pulse oximeter reads carboxyhemoglobin as oxyhemoglobin, so his saturation of 99% does not exclude poisoning, and co-oximetry is needed. Cyanide comes from burning nitrogen-containing materials such as plastics and foam in house fires, not from a brief gasoline vapour flash. Creatine kinase matters after electrical injury, crush or long immobility. A urine drug screen would show the buprenorphine and fentanyl already known and would not change care. He has no airway signs to suggest aspiration.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hampson-co",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his poor response to the fentanyl given by paramedics?",
        options: ["Buprenorphine occupying his mu receptors", "Fentanyl dose too low for his weight", "Neuropathic pain from deep burns", "Opioid-induced hyperalgesia", "Rapid redistribution of fentanyl"],
        correct: 0,
        explanation:
          "Buprenorphine binds mu receptors with very high affinity and leaves them slowly, so at 16 mg daily it occupies most of them and blunts the effect of a usual dose of a full agonist. Fentanyl 100 mcg is about 1.2 mcg/kg for him, a standard first dose that would normally bring relief. Redistribution shortens the effect of a fentanyl bolus but does not stop it working at first. Opioid-induced hyperalgesia develops over long exposure to escalating full agonist doses and does not explain the failure of one dose. His partial thickness burns hurt because their nerve endings survive, and that pain responds to opioids. He needs larger, titrated IV doses of a full agonist with close monitoring.",
        keyFeature: { topic: "burns", n: 3 },
        source: "anderson-buprenorphine",
      },
      {
        id: "q3",
        kind: "single",
        update: "After hydromorphone 2 mg IV three times over 30 minutes, his pain is 5 out of 10 and he is alert. His carboxyhemoglobin is 9% and falls with oxygen. His headache has gone and his neurologic examination is normal.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit to general surgery locally", "Discharge with burn clinic follow-up", "Hyperbaric oxygen centre referral", "Observe overnight then discharge", "Transfer to a burn centre"],
        correct: 4,
        explanation:
          "Partial thickness burns of 10% TBSA or more call for immediate burn centre consultation with consideration for transfer, and his burns cover about 18% of his body and will need specialized wound care and difficult pain control. His carboxyhemoglobin of 9% with no loss of consciousness, no neurologic signs and resolved symptoms is treated with normobaric oxygen and does not call for hyperbaric therapy. Admission to a general surgery service without burn expertise, overnight observation or discharge all fall short of the care a burn of this size needs.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q4",
        kind: "single",
        update: "He will stay in your department for at least 6 hours before he leaves. His usual buprenorphine-naloxone dose is continued, and his pain rises again between hydromorphone doses.",
        prompt: "Which of the following is the most appropriate way to give his opioid analgesia over the next several hours?",
        options: ["Fentanyl patch 25 mcg/hour", "Hydromorphone 2 mg IM every 3 hours", "Hydromorphone PCA, bolus doses only", "Hydromorphone PCA with basal infusion", "Oral oxycodone as needed"],
        correct: 2,
        explanation:
          "A patient on buprenorphine has a high but unpredictable need for full agonist opioid, so patient-controlled analgesia lets him match the dose to his pain while the device limits each dose and the interval between them. Guidance on acute pain in patients taking buprenorphine advises patient-controlled analgesia when systemic opioids are needed, without a basal infusion, which adds opioid when he is asleep and raises the risk of respiratory depression. IM opioid is avoided in burns over 10% TBSA because poor peripheral perfusion makes its absorption slow and unpredictable. A fentanyl patch takes many hours to reach effect and cannot be adjusted to his pain. Oral oxycodone as needed is slow and too weak for his need.",
        keyFeature: { topic: "burns", n: 3 },
        source: "anderson-buprenorphine",
      },
    ],
    sources: [S.hampson, S.anderson, S.abaRef],
    ...META,
  },

  /* 42 Grease fire and a medevac from a nursing station --------------------- */
  {
    id: "burns-42",
    topic: "burns",
    title: "Flown in from a nursing station",
    stem:
      "You are working in a regional hospital emergency department without a burn unit. A 38-year-old woman arrives by air ambulance at 19:10 from a nursing station in a remote fly-in community. Earlier today she threw a cup of water onto a pan of burning cooking oil, and a fireball struck her chest and arms. Her daughter called the nursing station at 13:05, about 15 minutes after the fire. The nurse saw her at 13:40 and started Ringer's lactate at 500 mL/hour at 14:10, and it has run at that rate since. She has not passed urine since before the fire. She has no medical history. She is alert and speaks normally, with no facial burns and no soot in her mouth. Blistered deep partial thickness burns cover the front of her trunk and both arms, about 24% TBSA, without encircling either arm.",
    vitals: { temperature: "36.0°C rectal", pulse: "112/minute", resp: "20/minute", bp: "124/76 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following times should her burn fluid resuscitation timeline be counted from?",
        options: ["12:50", "13:05", "13:40", "14:10", "19:10"],
        correct: 0,
        explanation:
          "Burn resuscitation runs from the time of injury, with half of the 24-hour estimate planned for the first 8 hours after the burn. The fire happened at about 12:50, 15 minutes before her daughter's call, so her first 8 hours end at 20:50. The call at 13:05, the nurse's assessment at 13:40, the start of the IV at 14:10 and her arrival at 19:10 all come later. Counting from her arrival would keep the higher first-phase rate running until 03:10, more than 6 hours too long, and add to fluid creep.",
        keyFeature: { topic: "burns", n: 4 },
        source: "alaska-burns",
      },
      {
        id: "q2",
        kind: "single",
        update: "You use the 2 mL/kg/%TBSA consensus formula and the Alaska 2021 burn resuscitation guideline. She has received 2500 mL of Ringer's lactate since 14:10.",
        prompt: "Which of the following Ringer's lactate rates is most appropriate to start for her now?",
        options: ["105 mL/hour", "210 mL/hour", "280 mL/hour", "420 mL/hour", "500 mL/hour"],
        correct: 1,
        explanation:
          "Her 24-hour estimate is 2 x 70 kg x 24% = 3360 mL, and half of it, 1680 mL, is planned for the first 8 hours after the burn, which is 210 mL/hour. The Alaska guideline starts the calculated hourly rate whatever has already been given. The 2500 mL is documented but is neither subtracted nor made up, and the rate is then adjusted hourly to her urine output. A rate of 105 mL/hour belongs to the next 16 hours, which start at 20:50, and cutting to it now because she is ahead is the subtraction the guideline advises against. Rates of 280 and 420 mL/hour come from a 4 mL/kg formula, spread evenly over 24 hours or front-loaded into the first 8 hours, which gives twice the volume the 2 mL/kg starting point calls for. 500 mL/hour is the interim adult rate for the first hour before the burn size is known.",
        keyFeature: { topic: "burns", n: 4 },
        source: "alaska-burns",
      },
      {
        id: "q3",
        kind: "single",
        update: "She arrived wrapped in towels soaked in cool water, which the nursing station applied to ease her pain.",
        prompt: "Which of the following is the most appropriate response to her rectal temperature of 36.0°C?",
        options: ["Cool water soaks for pain", "Dry covers, forced-air warming", "Recheck temperature in 4 hours", "Saline-soaked gauze dressings", "No warming above 35.0°C"],
        correct: 1,
        explanation:
          "In a burn patient hypothermia starts below 36.5°C, not at 35°C as in an uninjured person, and early hypothermia after a burn worsens outcome. The wet towels come off, her burns are covered with clean dry sheets, and active warming with a forced-air blanket and warmed Ringer's lactate begins. Cooling with cool water is accepted only for burns of 5% TBSA or less, so more cool soaks over 24% of her body would drive her temperature down further. Saline-soaked gauze does the same, and dressings are not applied before the burn centre has been consulted. Rechecking in 4 hours, or waiting for 35°C, lets her cool through the hours that matter.",
        keyFeature: { topic: "burns", n: 1 },
        source: "nb-burn-care",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her towels are replaced with dry sheets and a warming blanket. A urinary catheter is placed at 19:30 and at once drains 520 mL of clear yellow urine.",
        prompt: "Which of the following best describes the 520 mL of urine drained when her catheter was placed?",
        options: ["Adequate output for the past hour", "Diuresis from excess fluid", "Myoglobinuria from deep burns", "Polyuric acute kidney injury", "Urine stored over several hours"],
        correct: 4,
        explanation:
          "She has not passed urine since before the fire, so her bladder held urine made over at least 6.5 hours, an average of no more than about 80 mL/hour. That drainage says nothing about her output in the last hour. Hourly urine output, which guides her fluid rate, is counted from 19:30, against an adult target of 30 to 50 mL/hour. Reading 520 mL as one hour of output would wrongly suggest heavy over-resuscitation or a failing kidney and could prompt a large cut in her fluids. Clear yellow urine is not the dark urine of myoglobinuria.",
        keyFeature: { topic: "burns", n: 4 },
        source: "nb-burn-care",
      },
    ],
    sources: [S.alaska, S.nb],
    ...META,
  },

  /* 43 Pressure cooker steam ------------------------------------------------ */
  {
    id: "burns-43",
    topic: "burns",
    title: "Kitchen accident with a pressure cooker",
    stem:
      "A 37-year-old woman presents to the emergency department 45 minutes after the lid of a pressure cooker blew off while she was leaning over it. A jet of steam and boiling lentils struck her face and neck. She says she breathed in the steam and coughed hard for several minutes. Her partner drove her in. She has no medical history and takes no medications. She is alert and her voice is slightly hoarse. There are moist, blistered partial thickness burns on the forehead, cheeks, nose and front of the neck, about 4% TBSA. Her eyelashes are singed on both sides and both eyes are painful and watering. There is no stridor. The back of the throat is red, with a blister on the soft palate. There is scattered wheeze over both lungs.",
    vitals: { temperature: "37.0°C oral", pulse: "112/minute", resp: "24/minute", bp: "132/80 mmHg", o2sat: "95% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her injury most raises concern for thermal injury below her vocal cords?",
        options: ["Burns of the front of the neck", "Pain and watering of both eyes", "Singed eyelashes on both sides", "Soft palate blister", "Steam as the source of heat"],
        correct: 4,
        explanation:
          "Dry hot air and smoke usually injure only the airway above the cords, because the upper airway absorbs their heat. Steam carries far more heat and releases it as it condenses, so it can burn the trachea, bronchi and lungs directly, and her cough and wheeze fit that. The palate blister shows that heat reached the oropharynx, which threatens the upper airway but says nothing more about the lower airway than the mechanism does. Singed eyelashes, neck burns and sore eyes are signs of facial exposure, not of injury below the cords.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in the care of her eyes?",
        options: ["Bilateral eye patching", "Delay exam until swelling settles", "Erythromycin ointment only", "Slit lamp fluorescein exam", "Topical steroid drops"],
        correct: 3,
        explanation:
          "Painful, watering eyes after steam struck her face may mean a corneal burn, and facial burns call for prompt examination with fluorescein staining. A review of facial burns at a regional burns centre found that this examination was often left undone and eye review often delayed. Her lids will swell over the next hours as her facial burns progress, which makes a later examination harder, so delay is the wrong choice. Ointment or patching before the cornea has been examined treats an injury that has not been defined. Topical steroid drops are not started in the emergency department without an ophthalmology assessment, because they can slow epithelial healing.",
        keyFeature: { topic: "burns", n: 1 },
        source: "berry-eye",
      },
      {
        id: "q3",
        kind: "single",
        update: "Over the next hour her voice becomes muffled and soft stridor appears. She is intubated without difficulty and remains on the ventilator.",
        prompt: "Which of the following investigations best confirms and grades injury to her airways below the vocal cords?",
        options: ["Arterial blood gas", "Chest CT scan", "Chest radiograph", "Fibreoptic bronchoscopy", "Ventilation perfusion scan"],
        correct: 3,
        explanation:
          "Fibreoptic bronchoscopy through her tube shows the mucosa directly, with redness, soot, ulceration or sloughing, and is the standard way to diagnose and grade inhalation injury. It can also clear secretions and casts. A chest radiograph is often normal early. Chest CT may add detail and help with prognosis but does not replace direct viewing. A blood gas measures gas exchange, which is affected by many other problems. A ventilation perfusion scan is a test for pulmonary embolism. Radionuclide ventilation scanning with xenon has been studied for inhalation injury but is not a practical test in this setting.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following features of her presentation meets the criteria for immediate burn centre consultation with consideration for transfer?",
        options: ["Burn size of 4% TBSA", "Heart rate of 112/minute", "Moist blistered burns of the neck", "Pain and watering of both eyes", "Singed eyelashes on both sides", "Suspected steam inhalation injury"],
        select: 1,
        correct: [5],
        explanation:
          "Suspected inhalation injury is a criterion for immediate burn centre consultation with consideration for transfer, and her steam exposure, hoarseness, stridor and intubation meet it. Partial thickness burns under 10% TBSA call only for consultation. Singed facial hair is listed among the signs of possible inhalation that call for consultation, but it is the suspected injury itself that meets the immediate criterion. Her heart rate and eye pain matter for her care but are not referral criteria. Burns of the neck are not among the special areas named in the criteria.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.walker, S.berry, S.abaRef],
    ...META,
  },
];
