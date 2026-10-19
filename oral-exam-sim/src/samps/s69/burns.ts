// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  mckee: { id: "mckee-hf", citation: "McKee D, Thoma A, Bailey K, Fish J. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4116323/" },
  cag: { id: "cag-calcium-gluconate", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Calcium gluconate. Updated 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/calcium-gluconate" },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/burnreferral" },
  kohan: { id: "kohan-buprenorphine", citation: "Kohan L, Potru S, Barreveld AM, and colleagues. Buprenorphine management in the perioperative period: educational review and recommendations from a multisociety expert panel. Reg Anesth Pain Med. 2021.", url: "https://asra.com/guidelines-articles/original-articles/article-item/guidelines/2021/08/12/buprenorphine-management-in-the-perioperative-period" },
  hampson: { id: "hampson-co", citation: "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. Am J Respir Crit Care Med. 2012." },
  walker: { id: "walker-inhalation", citation: "Walker PF, Buehner MF, Wood LA, and colleagues. Diagnosis and management of inhalation injury: an updated review. Crit Care. 2015.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4624587/" },
  abaPain: { id: "aba-pain", citation: "Romanowski KS, Carson J, Pape K, and colleagues. American Burn Association guidelines on the management of acute pain in the adult burn patient: a review of the literature, a compilation of expert opinion, and next steps. J Burn Care Res. 2020." },
  berry: { id: "berry-eye", citation: "Berry J, Ashley J, Jeffery S. Ophthalmological evaluation of facial burns in a regional burns centre. Burns. 2020.", url: "https://pureportal.bcu.ac.uk/en/publications/ophthalmological-evaluation-of-facial-burns-in-a-regional-burns-c/" },
} satisfies Record<string, Source>;

export const BURNS_S69: Samp[] = [
  /* 39 Glass etching cream -------------------------------------------------- */
  {
    id: "burns-39",
    topic: "burns",
    title: "Throbbing fingertips after a craft afternoon",
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
          "Glass etching creams contain fluoride salts such as ammonium bifluoride, which release hydrofluoric acid on the skin. Dilute fluoride burns cause deep, throbbing pain that can begin hours after contact while the skin looks almost normal, which matches pain starting about 6 hours after she wiped the cream with bare fingertips. A felon and a paronychia are bacterial infections that cause a tense, swollen pulp or redness and pus at the nail fold, and she has neither. A herpetic whitlow shows grouped vesicles. Raynaud phenomenon causes episodes of colour change with cold, not constant pain confined to the two fingers that touched the cream.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q2",
        kind: "single",
        update: "You start calcium gluconate 2.5% gel, applied inside a surgical glove over her right hand.",
        prompt: "Which of the following is the most appropriate analgesia for her while the topical treatment continues?",
        options: ["bupivacaine 0.5% digital block", "hydromorphone 1 mg IV, titrated", "lidocaine 4% cream to fingertips", "lidocaine 1% digital block", "lidocaine 1% wrist block"],
        correct: 1,
        explanation:
          "Relief of pain is the clinical sign that calcium has bound the fluoride in her tissues, so it tells you whether the gel is working or whether she needs more invasive treatment. Titrated IV hydromorphone eases her pain of 10 out of 10 and leaves that signal intact. A digital or wrist block with lidocaine or bupivacaine removes the pain that guides treatment, and local anesthetic infiltration can also raise tissue tension in the finger. Lidocaine cream acts only on the surface, does not bind fluoride and would take the place of the calcium gel inside the glove.",
        keyFeature: { topic: "burns", n: 6 },
        source: "mckee-hf",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 hour of gel, changed once, her pain is still 9 out of 10 and both fingertip pads remain pale.",
        prompt: "Which of the following is the most appropriate next treatment for her fingers?",
        options: ["Intra-arterial calcium gluconate infusion", "Magnesium sulfate 2 g IV", "Pulp infiltration of calcium chloride 10%", "Pulp infiltration of calcium gluconate 10%", "Water irrigation for another hour"],
        correct: 0,
        explanation:
          "Pain that persists despite well applied calcium gel means fluoride is still active deep in the finger, and an intra-arterial calcium gluconate infusion carries calcium to that tissue. The Canadian Antidote Guide gives 10 mL of calcium gluconate 10% in 40 mL of D5W over 4 hours through an arterial catheter proximal to the burn, repeated until relief lasts more than 4 hours. Calcium gluconate should not be infiltrated into the fingers, and calcium chloride is avoided for infiltration because it is toxic to tissue. IV magnesium treats systemic hypomagnesemia, which a fingertip exposure does not cause. Irrigation helps in the first minutes after contact, not many hours after the cream was washed off.",
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
          "An arterial infusion needs an arterial line, nursing care and repeat 4 hour infusions until pain stays away, so she needs a monitored admission, with hand or burn surgery following the fingers. Stopping after one infusion, or after a fixed 6 hour observation, ignores the rule that treatment repeats until relief lasts more than 4 hours. Discharge with gel and next day review suited her before the gel failed, not now. A hand clinic visit in 1 week leaves an active fluoride burn untreated in the meantime. All chemical injuries also merit a call to the burn centre.",
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
      "A 2-year-old girl is brought to the emergency department by her parents at 16:00 because she has cried and refused to use her hands for the past 2 hours. At 10:00 her mother was removing rust stains from the bathtub with a liquid rust remover. She left the room for a minute and came back to find the girl sitting in a puddle of the spilled product, with both hands and forearms wet. She washed the girl's arms at the sink with soap and water for about 2 minutes. There was no liquid near her mouth, and she has not coughed or vomited. She is healthy and her immunizations are up to date. She is screaming and holds her arms away from her body. The skin of both hands and both forearms is faintly red, with no blisters. Together these areas cover about 10% of her body surface area.",
    vitals: { temperature: "37.1°C axillary", pulse: "156/minute", resp: "30/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following ingredients in the rust remover best explains her presentation?",
        options: ["Hydrochloric acid", "Hydrofluoric acid", "Phosphoric acid", "Sodium hydroxide", "Sodium hypochlorite"],
        correct: 1,
        explanation:
          "Many household rust removers contain dilute hydrofluoric acid. At concentrations below 20% the pain can start many hours after contact and progress while the skin shows little more than redness, which fits a girl who was settled after a brief wash and is now screaming 6 hours later. Hydrochloric and phosphoric acids injure the surface at the moment of contact, so pain and visible damage would have been present from the start. Sodium hydroxide causes an immediate, deepening alkali burn with slippery skin. Sodium hypochlorite is bleach, which irritates on contact and is not a rust remover.",
        keyFeature: { topic: "burns", n: 6 },
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
          "Calcium gluconate 2.5% gel binds the fluoride that is still diffusing through her skin. The Canadian Antidote Guide applies it in gloves over the hands and under a non-absorbent bandage elsewhere, changed every 4 hours, and topical treatment is preferred in children once the skin is washed. Calcium chloride is avoided on burned tissue because it injures it. Silver sulfadiazine and petroleum gauze are dressings for thermal burns and do not bind fluoride. Lidocaine cream numbs only the surface and hides the pain that shows whether the calcium is working.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her ECG shows sinus tachycardia with a QTc of 470 ms. Her ionized calcium is 1.02 mmol/L. She settles a little once the gel is on.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Admit with cardiac monitoring", "Discharge home with gel to apply", "Discharge with burn clinic review", "Observe 4 hours then discharge", "Refer to plastic surgery clinic"],
        correct: 0,
        explanation:
          "Her ionized calcium is below normal and her QTc is long, so fluoride is already acting beyond the skin. She needs admission with continuous cardiac monitoring, IV calcium as needed, and repeat calcium, magnesium and potassium until the values are stable, with burn centre and poison centre advice. Discharge home with gel or with clinic review would leave a child with a falling calcium unmonitored. A fixed 4 hour observation is too short when fluoride can keep binding calcium for hours. A plastic surgery clinic referral addresses the skin but not the systemic risk.",
        keyFeature: { topic: "burns", n: 5 },
        source: "cag-calcium-gluconate",
      },
    ],
    sources: [S.mckee, S.cag],
    ...META,
  },

  /* 41 Burns in a patient on buprenorphine --------------------------------- */
  {
    id: "burns-41",
    topic: "burns",
    title: "Flash fire while refuelling in the garage",
    stem:
      "A 34-year-old man is brought to the emergency department by ambulance 50 minutes after gasoline vapour ignited while he refuelled a running snowblower inside his closed garage. For about 20 minutes before the flash he had a headache and felt nauseated. He has opioid use disorder and takes buprenorphine-naloxone 16 mg SL daily, last taken at 08:00 today. He has no other medical history. Paramedics gave fentanyl 100 mcg IV with little effect. He is alert, oriented and crying out in pain. His voice is normal, his face is not burned and there is no soot in his mouth. There are moist, blistered partial thickness burns over the front of both thighs and both lower legs, about 18% TBSA.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute", resp: "22/minute", bp: "138/84 mmHg", o2sat: "99% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most important to add for him now?",
        options: ["Chest radiograph for aspiration", "Co-oximetry for carboxyhemoglobin", "Creatine kinase for rhabdomyolysis", "Serum lactate for cyanide", "Urine drug screen for fentanyl"],
        correct: 1,
        explanation:
          "A gasoline engine running in a closed garage produces carbon monoxide, and his headache and nausea before the flash are typical early symptoms. A standard pulse oximeter reads carboxyhemoglobin as oxyhemoglobin, so his saturation of 99% does not exclude poisoning, and co-oximetry is needed. Cyanide comes from burning nitrogen-containing materials such as plastics and foam in house fires, not from a brief gasoline vapour flash. Creatine kinase matters after electrical injury, crush or long immobility. A urine drug screen would show the buprenorphine and fentanyl already known and would not change care. He has no airway signs to suggest aspiration.",
        keyFeature: { topic: "burns", n: 1 },
        source: "hampson-co",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic for him now?",
        options: ["hydromorphone 2 mg IV", "ketorolac 30 mg IV", "morphine 10 mg IM", "naloxone 0.4 mg IV first", "oxycodone 10 mg PO"],
        correct: 0,
        explanation:
          "Buprenorphine binds mu receptors tightly, so usual doses of a full agonist give little relief, as the fentanyl 100 mcg showed. Severe burn pain in a patient taking buprenorphine is treated with a high affinity full agonist such as hydromorphone, given IV in larger doses and repeated every few minutes to effect with close monitoring. IM morphine is absorbed unpredictably from burned and swollen tissue and cannot be titrated. Oral oxycodone acts too slowly for pain of this severity. Ketorolac alone is not enough for an 18% burn and adds kidney risk during fluid resuscitation. Naloxone would not free receptors from buprenorphine at that dose and could precipitate withdrawal.",
        keyFeature: { topic: "burns", n: 3 },
        source: "kohan-buprenorphine",
      },
      {
        id: "q3",
        kind: "single",
        update: "After hydromorphone 2 mg IV three times over 30 minutes, his pain is 5 out of 10 and he is alert. He worries that the burn team will stop his usual medication.",
        prompt: "Which of the following is the most appropriate plan for his buprenorphine-naloxone while he is in hospital?",
        options: ["Hold it until his pain settles", "Keep giving his usual daily dose", "Replace it with methadone", "Replace it with oral morphine", "Taper it to 4 mg daily"],
        correct: 1,
        explanation:
          "Buprenorphine should not be routinely stopped or tapered around acute pain or surgery, because interruption raises the risk of relapse and overdose after discharge. His usual 16 mg continues, and full agonists and other analgesics are added on top, with the buprenorphine dose split through the day if that helps his pain. Holding or tapering it removes the protection it gives him. A switch to methadone or to oral morphine is a major change of addiction treatment with its own risks of overdose and withdrawal, and is not needed to treat burn pain.",
        keyFeature: { topic: "burns", n: 3 },
        source: "kohan-buprenorphine",
      },
      {
        id: "q4",
        kind: "single",
        update: "His carboxyhemoglobin is 9% and falls with oxygen. His headache has gone and his neurologic examination is normal. His pain is controlled.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit to general surgery locally", "Discharge with burn clinic follow-up", "Hyperbaric oxygen centre referral", "Observe overnight then discharge", "Transfer to a burn centre"],
        correct: 4,
        explanation:
          "Partial thickness burns of 10% TBSA or more call for immediate burn centre consultation and transfer, and his burns cover about 18% and need formal fluid resuscitation and specialized wound care. His carboxyhemoglobin of 9% with no loss of consciousness, no neurologic signs and resolved symptoms is treated with normobaric oxygen and does not call for hyperbaric therapy. Admission to a general surgery service without burn expertise, overnight observation or discharge all fall short of the care a burn of this size needs. His buprenorphine dose and analgesic plan go with him.",
        keyFeature: { topic: "burns", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.hampson, S.kohan, S.abaRef],
    ...META,
  },

  /* 42 Intubated after a bedroom fire --------------------------------------- */
  {
    id: "burns-42",
    topic: "burns",
    title: "Ventilated man awaiting transfer",
    stem:
      "You are working in a community hospital emergency department without a burn unit. A 52-year-old man was carried out of a smoke-filled bedroom by firefighters after about 15 minutes inside a burning house. On arrival 40 minutes later he was hoarse, had soot in his mouth and coughed black sputum. Because of rising stridor he was intubated 20 minutes ago with an 8.0 mm tube and is now sedated and ventilated. He smokes and has no other medical history. He has partial thickness burns of the face, neck, upper chest and both arms, about 27% TBSA. The chest burns do not encircle the chest. His carboxyhemoglobin was 14% and his lactate 2.4 mmol/L. A portable chest radiograph shows the tube tip 4 cm above the carina and clear lungs.",
    vitals: { temperature: "36.4°C core", pulse: "104/minute", resp: "16/minute", bp: "122/76 mmHg", o2sat: "98% on FiO2 0.6 by ventilator", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the meaning of his clear chest radiograph?",
        options: ["Confirms injury limited to the larynx", "Excludes the need for bronchoscopy", "Not reliable to exclude lung injury", "Predicts a low risk of pneumonia", "Shows intubation was not required"],
        correct: 2,
        explanation:
          "A chest radiograph taken on arrival is rarely helpful in showing whether smoke inhalation injury is present or how severe it is, because the changes appear over hours to days. It serves as a baseline. His hoarseness, soot in the mouth, carbonaceous sputum and 15 minutes in an enclosed smoke-filled room point to injury that a clear film cannot rule out. Bronchoscopy is the test that shows and grades injury below the cords. A clear film says nothing about later pneumonia, and his intubation was justified by rising stridor, which the film does not assess.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q2",
        kind: "single",
        update: "Thirty minutes later his peak airway pressure rises from 24 to 45 cmH2O and his SpO2 falls to 86%. Breath sounds are equal, lung sliding is present on both sides and the tube is still at 23 cm at the lips. A suction catheter meets resistance and brings back black, rubbery fragments.",
        prompt: "Which of the following is the most likely cause of his rising airway pressure?",
        options: ["Bronchospasm from smoke irritants", "Restrictive chest wall eschar", "Right mainstem tube migration", "Tension pneumothorax", "Tube blocked by sloughed airway casts"],
        correct: 4,
        explanation:
          "Smoke injury makes the airway lining slough and leak protein, which forms casts that can occlude the airways or the tube. A suction catheter that meets resistance and returns black, rubbery fragments shows an obstructed tube, which is cleared by suction and, if that fails, by bronchoscopy or a careful tube change by the most skilled operator. Lung sliding on both sides argues against a tension pneumothorax. The tube has not moved and breath sounds are equal, so mainstem migration is unlikely. His chest burns are partial thickness and do not encircle the chest, so eschar cannot restrict it. Bronchospasm would not stop a suction catheter.",
        keyFeature: { topic: "burns", n: 2 },
        source: "walker-inhalation",
      },
      {
        id: "q3",
        kind: "single",
        update: "The tube is cleared and his saturation recovers. You calculate his burn fluids with 2 mL/kg/%TBSA of Ringer's lactate.",
        prompt: "Which of the following best describes how his inhalation injury is likely to affect his fluid needs?",
        options: ["Albumin started in the first hour", "Fluid restricted to protect the lungs", "Less fluid than the formula predicts", "More fluid than the formula predicts", "Same fluid as the formula predicts"],
        correct: 3,
        explanation:
          "The inflammatory response to smoke inhalation adds to the capillary leak of the burn itself, so patients with inhalation injury often need more fluid than the formula estimate. The formula is a starting point, and the rate is titrated hourly to urine output. Restricting fluid to spare the lungs risks under resuscitation, shock and kidney injury. Assuming his needs will match or fall below the estimate ignores that leak. Albumin is considered when resuscitation is failing or running far over the estimate, and is not a routine first hour treatment.",
        keyFeature: { topic: "burns", n: 4 },
        source: "walker-inhalation",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate sedation and analgesia plan for him during the transfer?",
        options: ["fentanyl and propofol infusions", "midazolam infusion alone", "propofol infusion alone", "rocuronium and midazolam infusions", "rocuronium infusion alone"],
        correct: 0,
        explanation:
          "A ventilated patient with a 27% burn has severe pain whether or not he can report it, so his plan starts with an opioid infusion such as fentanyl, with boluses before he is moved, and adds a sedative such as propofol for tolerance of the tube. Propofol or midazolam alone sedates without treating pain. A neuromuscular blocker alone, or with only a benzodiazepine, can leave a paralysed patient in pain and unable to show it. Paralysis is added only when ventilation needs it, and always with analgesia and sedation in place.",
        keyFeature: { topic: "burns", n: 3 },
        source: "aba-pain",
      },
    ],
    sources: [S.walker, S.abaPain],
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
          "Painful, watering eyes after steam struck her face may mean a corneal burn, and facial burns call for prompt examination with fluorescein staining as part of the initial burn assessment. Her lids will swell over the next hours as her facial burns progress, which makes a later examination harder, so delay is the wrong choice. Ointment or patching before the cornea has been examined treats an injury that has not been defined. Topical steroid drops are not started in the emergency department without an ophthalmology assessment, because they can slow epithelial healing.",
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
          "Fibreoptic bronchoscopy through her tube shows the mucosa directly, with redness, soot, ulceration or sloughing, and is the standard way to diagnose and grade inhalation injury. It can also clear secretions and casts. A chest radiograph is often normal early. Chest CT may add detail and help with prognosis but does not replace direct viewing. A blood gas measures gas exchange, which is affected by many other problems. A ventilation perfusion scan has been studied in research but is not a practical test in this setting.",
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
