// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  das: { id: "das-2015", citation: "Frerk C, Mitchell VS, McNarry AF, and colleagues. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth. 2015.", url: "https://academic.oup.com/bja/article/115/6/827/241360" },
  cafg1: { id: "cafg-2021-part1", citation: "Law JA, Duggan LV, Asselin M, and colleagues. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 1. Difficult airway management encountered in an unconscious patient. Can J Anesth. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8212585/" },
  cafg2: { id: "cafg-2021-part2", citation: "Law JA, Duggan LV, Asselin M, and colleagues. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/" },
  hovgaard: { id: "hovgaard-sux-k", citation: "Hovgaard HL, Juhl-Olsen P. Suxamethonium-induced hyperkalemia. A short review of causes and recommendations for clinical applications. Crit Care Res Pract. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7932779/" },
  salad: { id: "root-salad", citation: "Root CW, Mitchell OJL, Brown R, and colleagues. Suction assisted laryngoscopy and airway decontamination (SALAD). A technique for improved emergency airway management. Resusc Plus. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8244406/" },
  bair: { id: "bair-bougie", citation: "Bair AE, Laurin EG, Schmitt BJ. An assessment of a tracheal tube introducer as an endotracheal tube placement confirmation device. Am J Emerg Med. 2005.", url: "https://ajemjournal.com/article/S0735-67570500157-9/fulltext" },
  dasAti: { id: "das-ati-2020", citation: "Ahmad I, El-Boghdadly K, Bhagrath R, and colleagues. Difficult Airway Society guidelines for awake tracheal intubation (ATI) in adults. Anaesthesia. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7078877/" },
} satisfies Record<string, Source>;

export const AIRWAY_S80: Samp[] = [
  /* 48 Bowel obstruction on dialysis --------------------------------------- */
  {
    id: "airway-48",
    topic: "airway",
    title: "Swollen abdomen and dark vomit",
    stem:
      "A 69-year-old woman is brought to the emergency department by ambulance with 3 days of crampy abdominal pain and swelling. She has not passed stool or gas for 2 days and has vomited brown, foul-smelling fluid many times today. She has end-stage kidney disease treated with hemodialysis three times a week and missed her session yesterday. She has had a hysterectomy and a bowel resection. She is drowsy and confused and opens her eyes to voice. Her abdomen is distended and tympanic, and there are crackles at the right lung base. Potassium is 6.9 mmol/L, and the ECG shows peaked T waves. She has received calcium gluconate, insulin and dextrose IV. No nasogastric tube is in place. You decide to intubate her.",
    vitals: { temperature: "37.9°C oral", pulse: "112/minute", resp: "28/minute", bp: "104/62 mmHg", o2sat: "90% on 6 L/minute by nasal prongs", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important step to lower her risk of aspiration before induction?",
        options: ["Head-down tilt for induction", "Metoclopramide 10 mg IV", "Nasogastric tube to suction", "Ondansetron 4 mg IV", "Pantoprazole 40 mg IV"],
        correct: 2,
        explanation:
          "A small bowel obstruction leaves the stomach full of fluid, and she is already vomiting feculent material, so the stomach is emptied with a nasogastric tube on suction before induction. The Difficult Airway Society advises drainage by nasogastric tube in intestinal obstruction, and the Canadian Airway Focus Group advises placing one before induction and attaching it to suction. Metoclopramide cannot empty an obstructed stomach and is contraindicated in mechanical obstruction. Ondansetron may lessen active vomiting but does nothing to the fluid that regurgitates passively once she is paralyzed. Pantoprazole takes time to act and does not reduce the volume she can aspirate. Head-down tilt makes passive regurgitation more likely.",
        keyFeature: { topic: "airway", n: 4 },
        source: "das-2015",
      },
      {
        id: "q2",
        kind: "single",
        update: "The nasogastric tube drains 1.4 L of brown fluid. You plan a rapid sequence intubation with ketamine as the induction agent.",
        prompt: "Which of the following neuromuscular blockers is most appropriate for her intubation?",
        options: ["rocuronium 36 mg IV", "rocuronium 72 mg IV", "succinylcholine 60 mg IV", "succinylcholine 90 mg IV", "vecuronium 6 mg IV"],
        correct: 1,
        explanation:
          "Her potassium of 6.9 mmol/L with peaked T waves has risen over the day since her missed dialysis. Succinylcholine at 1 to 1.5 mg/kg raises serum potassium by 0.5 to 1 mmol/L even in healthy people, and a further rise on top of acute hyperkalemia probably carries a substantial risk of arrhythmia, so neither 60 mg nor 90 mg is safe for her. Rocuronium 1.2 mg/kg, which is 72 mg at 60 kg, gives rapid intubating conditions without raising potassium. Rocuronium 36 mg is 0.6 mg/kg, a dose with a slower onset that is too low for a rapid sequence intubation. Vecuronium 0.1 mg/kg acts slowly and lengthens apnea in a patient at high risk of aspiration.",
        keyFeature: { topic: "airway", n: 5 },
        source: "hovgaard-sux-k",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is positioned head up. A nurse applies cricoid pressure at induction. With a Macintosh videolaryngoscope you see only the tip of the epiglottis. Her O2 saturation is 95%.",
        prompt: "Which of the following is the most appropriate next step to improve your view?",
        options: ["Apply firmer cricoid pressure", "Insert a supraglottic airway", "Release the cricoid pressure", "Switch to a straight blade", "Use a larger blade"],
        correct: 2,
        explanation:
          "Cricoid pressure can push the larynx out of view, and the Difficult Airway Society advises releasing it when laryngoscopy is difficult during a rapid sequence induction, with suction ready, because its protection against aspiration is uncertain. Releasing it is quick, and a saturation of 95% allows the attempt to continue. Firmer pressure is more likely to worsen the view. A supraglottic airway is a rescue after failed intubation, not a fix for a first view that can still be improved. Changing to a straight or a larger blade is a change of technique that belongs to a later attempt, once a simple cause such as cricoid pressure has been removed.",
        keyFeature: { topic: "airway", n: 1 },
        source: "das-2015",
      },
      {
        id: "q4",
        kind: "single",
        update: "As the pressure is released the view improves, but brown fluid wells up from the esophagus and fills the pharynx, hiding the glottis. Her O2 saturation is 93%.",
        prompt: "Which of the following is the most appropriate immediate action?",
        options: ["Bag-mask ventilation with an oral airway", "Blind passage of a bougie", "Insert a supraglottic airway", "Rigid suction ahead of the blade", "Switch to a hyperangulated blade"],
        correct: 3,
        explanation:
          "Fluid filling the pharynx hides the glottis and will be driven into the lungs by any positive pressure breath. Suction assisted laryngoscopy leads with a large-bore rigid suction catheter advanced just ahead of the blade to clear the pharynx under direct vision. The catheter can then be parked in the upper esophagus to keep draining while the tube is passed. Bag-mask ventilation now would force gastric contents into her lungs, and a saturation of 93% allows a few seconds of suction first. A supraglottic airway pushed into a pool of fluid seats poorly and does not clear it. A blind bougie and a camera blade both depend on a view that the fluid has taken away.",
        keyFeature: { topic: "airway", n: 1 },
        source: "root-salad",
      },
    ],
    sources: [S.das, S.hovgaard, S.salad],
    ...META,
  },

  /* 49 Status epilepticus in a large patient ------------------------------ */
  {
    id: "airway-49",
    topic: "airway",
    alsoTopics: ["seizures"],
    title: "Seizing on arrival at a community hospital",
    stem:
      "You are working in a community hospital emergency department. A 44-year-old woman is brought to the emergency department by ambulance with a generalized seizure that began 30 minutes ago. She has epilepsy and ran out of lamotrigine last week. Paramedics gave midazolam 10 mg IM. In the department she has received lorazepam 4 mg IV and levetiracetam 4500 mg IV, and she is still seizing. Her partner says she snores loudly every night and has never been tested for sleep apnea. Her BMI is 47 kg/m2. She has a full set of natural teeth and no facial hair. Her neck is short and thick. There is blood in her mouth from a bitten tongue. You decide to intubate her.",
    vitals: { temperature: "37.8°C oral", pulse: "128/minute", resp: "24/minute", bp: "156/92 mmHg", o2sat: "91% on a nonrebreather mask", weight: "128 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings in her predict difficult face-mask ventilation?",
        options: ["Age of 44 years", "Bitten tongue", "BMI of 47 kg/m2", "Full set of natural teeth", "Loud nightly snoring", "Pulse of 128/minute", "Seizure lasting 30 minutes", "Short, thick neck"],
        select: 3,
        correct: [2, 4, 7],
        explanation:
          "The Canadian Airway Focus Group lists a higher BMI, snoring or sleep apnea, and a thick or short neck among the predictors of difficult face-mask ventilation, and she has all three. Excess soft tissue narrows the pharynx once muscle tone is lost, and a short, thick neck makes a seal and jaw lift harder. Edentulism and facial hair also predict difficulty, so her full set of teeth and lack of a beard work in her favour. Older age is a predictor, but 44 years is not old. Her tachycardia and the length of her seizure show how urgent the intubation is, not how hard the mask will be. A bitten tongue may bleed but is not a recognized predictor.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg-2021-part2",
      },
      {
        id: "q2",
        kind: "single",
        update: "After induction and paralysis, a hyperangulated videolaryngoscope gives a full view of the cords. The tube, on a stylet with a gentle bend at the tip, keeps striking the front of the larynx and will not enter the glottis. Her O2 saturation is 94%.",
        prompt: "Which of the following changes is most likely to let the tube pass?",
        options: ["Apply external laryngeal pressure", "Change to a larger blade", "Insert the blade further", "Rebend the stylet to match the blade", "Remove the stylet from the tube"],
        correct: 3,
        explanation:
          "A hyperangulated blade shows the glottis around a corner, so a tube with a gentle bend aims at the anterior larynx instead of through the cords. The Canadian Airway Focus Group advises shaping the stylet to match the angle or curve of the blade, typically between 60 and 90 degrees. Her view is already full, so external laryngeal pressure and a larger blade fix something that is not the problem. Advancing the blade further lifts the larynx even more and makes the angle of approach harder. Removing the stylet leaves a soft tube that cannot be steered around the curve.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg-2021-part1",
      },
      {
        id: "q3",
        kind: "single",
        update: "The reshaped tube still cannot be directed, and she is reoxygenated with bag-mask ventilation. A colleague uses a Macintosh videolaryngoscope, sees only the epiglottis and the arytenoids, and passes a bougie.",
        prompt: "Which of the following findings best confirms that the bougie has entered the trachea?",
        options: ["Bougie advances 50 cm without resistance", "Clicks over the tracheal rings", "O2 saturation holds steady at 94%", "Silent epigastrium on listening", "Tip seen passing behind the arytenoids"],
        correct: 1,
        explanation:
          "As a bougie slides down the trachea with its angled tip forward, it bumps over the cartilage rings and the operator feels clicks. In a cadaver study, ring clicks were 92% sensitive and 95% specific for tracheal placement. A bougie in the trachea normally meets resistance as it reaches the smaller airways, so passing 50 cm with no resistance suggests the esophagus. A tip seen passing behind the arytenoids is heading into the esophagus. Listening over the epigastrium tests a tube that is being ventilated, and no gas passes through a bougie. Her saturation reflects the reoxygenation just given and lags behind any misplacement.",
        keyFeature: { topic: "airway", n: 6 },
        source: "bair-bougie",
      },
      {
        id: "q4",
        kind: "single",
        update: "Clicks are felt, and the laryngoscope is held in place. As the tube is railroaded over the bougie, it stops at the glottis and will not advance.",
        prompt: "Which of the following is the most appropriate next step?",
        options: ["Advance the tube with firmer pressure", "Remove the laryngoscope blade", "Rotate the tube counterclockwise", "Use a tube one size larger", "Withdraw the bougie 10 cm"],
        correct: 2,
        explanation:
          "A tube railroaded over a bougie often catches its bevel on the right arytenoid. The Difficult Airway Society advises rotating the tube counterclockwise to change the orientation of the bevel so that it slips through the glottis, and notes that keeping the laryngoscope in place improves the chance of success. Removing the blade lets the tongue and epiglottis fall back over the larynx. Firmer pressure can injure the arytenoids or the cords without freeing the tube. A larger tube is harder to pass, not easier. Withdrawing the bougie may pull its tip out of the trachea and lose the guide.",
        keyFeature: { topic: "airway", n: 1 },
        source: "das-2015",
      },
    ],
    sources: [S.cafg2, S.cafg1, S.bair, S.das],
    ...META,
  },

  /* 50 Child in septic shock at a rural hospital --------------------------- */
  {
    id: "airway-50",
    topic: "airway",
    alsoTopics: ["shock"],
    title: "Feverish preschooler at a rural hospital",
    stem:
      "You are working in a rural hospital emergency department. A 3-year-old boy is brought to the emergency department by his parents with 8 hours of fever and vomiting. Over the last hour he has become hard to wake. He is fully immunized and previously well. A purple rash that does not blanch is spreading over his legs and trunk. Through an intraosseous needle he has received 40 mL/kg of crystalloid, ceftriaxone and an epinephrine infusion. He moans and withdraws only to pain. His airway is open and there is no stridor. The nearest paediatric intensive care unit is 2 hours away by air. You decide to intubate him before the flight.",
    vitals: { temperature: "39.6°C rectal", pulse: "172/minute", resp: "40/minute", bp: "72/38 mmHg", o2sat: "93% on a nonrebreather mask", weight: "14 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "After induction with ketamine and rocuronium, your first attempt with a direct laryngoscope fails. A nurse holds the mask with one hand and squeezes the bag. His chest barely rises and his O2 saturation falls to 84%.",
        prompt: "Which of the following is the most appropriate next step to improve his ventilation?",
        options: ["Faster bag squeezes at 40/minute", "Higher bag pressure through the mask", "Insert a supraglottic airway", "Neck flexion on a pillow", "Two-handed hold with an oral airway"],
        correct: 4,
        explanation:
          "Face-mask ventilation has not yet been optimized, because one person is holding a one-handed seal with no airway adjunct. The Canadian Airway Focus Group advises a two-handed mask hold with an exaggerated jaw lift, an assistant squeezing the bag, and an oropharyngeal airway in all emergency airway management. Higher pressure and faster breaths drive gas into the stomach, which the same guidance warns against, and do not open an obstructed airway. Flexing the neck of a young child, whose large occiput already tips the head forward, closes the airway further. A supraglottic airway is the next rescue if an optimized mask still fails.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg-2021-part1",
      },
      {
        id: "q2",
        kind: "single",
        update: "With a two-handed hold and an oral airway, his chest rises and his O2 saturation returns to 96%. A second attempt with the direct laryngoscope also fails, with a view of the epiglottis only.",
        prompt: "Which of the following is the most appropriate next step?",
        options: ["Change to a videolaryngoscope", "Nasotracheal intubation without a scope", "Needle cricothyroidotomy", "Scalpel cricothyrotomy", "Third attempt with a straight blade"],
        correct: 0,
        explanation:
          "He is being oxygenated by mask, so there is time for a different technique, and repeating the one that has failed twice is unlikely to succeed. The Canadian Airway Focus Group recommends limiting direct laryngoscopy in children to two attempts and moving quickly to a videolaryngoscope or a flexible bronchoscope. A straight blade is still direct laryngoscopy. Blind nasal intubation is unreliable in a small child and risks bleeding in a boy whose rash suggests a coagulopathy. Needle cricothyroidotomy is for a cannot intubate, cannot oxygenate emergency, which he does not have. A scalpel cricothyrotomy through the membrane is advised only in older children, above about 8 to 12 years.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg-2021-part1",
      },
      {
        id: "q3",
        kind: "single",
        update: "A cuffed tube is placed with the videolaryngoscope. Ten minutes later his abdomen is tense and distended, each breath needs more pressure, and his BP falls to 62/34 mmHg. Breath sounds are equal and his trachea is midline.",
        prompt: "Which of the following is the most appropriate next step?",
        options: ["Abdominal X-ray before acting", "Bilateral needle thoracostomy", "Increase the ventilator pressure", "Orogastric tube to free drainage", "Pull the tube back 2 cm"],
        correct: 3,
        explanation:
          "Gas forced into the stomach during the difficult mask ventilation has distended it. In a small child a tense stomach pushes up the diaphragm, stiffens the chest and reduces venous return, which raises ventilating pressure and lowers his blood pressure. The Canadian Airway Focus Group advises that gastric distension in a child be considered and treated promptly, and an orogastric tube decompresses it. Equal breath sounds and a midline trachea make a tension pneumothorax unlikely, so bilateral needle thoracostomy is not the first step. Higher pressure adds to the problem, and an X-ray delays treatment. Equal breath sounds also argue against a mainstem tube that needs pulling back.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg-2021-part1",
      },
      {
        id: "q4",
        kind: "single",
        update: "After decompression his ventilation is easier, but his BP is 64/36 mmHg despite the epinephrine infusion. The capnography waveform is small, with a normal shape on every breath, and the end-tidal CO2 is 14 mmHg. A blood gas shows a PaCO2 of 48 mmHg.",
        prompt: "Which of the following best explains his low end-tidal CO2?",
        options: ["Esophageal placement of the tube", "Hyperventilation by the bag", "Partial obstruction of the tube", "Right mainstem intubation", "Shock reducing lung blood flow"],
        correct: 4,
        explanation:
          "A small waveform of normal shape on every breath means the tube is in the trachea, while the gap between an end-tidal CO2 of 14 mmHg and a PaCO2 of 48 mmHg shows that little CO2 is reaching the alveoli to be exhaled. Severe shock lowers pulmonary blood flow, and the Canadian Airway Focus Group notes that capnography stays present but attenuated in low flow states. The fix is better circulation, with ventilation guided by blood gases rather than the end-tidal value. An esophageal tube gives no sustained waveform. Hyperventilation would lower the PaCO2, which is high. Partial obstruction changes the waveform shape, and a mainstem tube would cause unequal breath sounds and falling oxygen saturation.",
        keyFeature: { topic: "airway", n: 6 },
        source: "cafg-2021-part1",
      },
    ],
    sources: [S.cafg1],
    ...META,
  },

  /* 51 Obstructing glottic tumour ----------------------------------------- */
  {
    id: "airway-51",
    topic: "airway",
    title: "Hoarse for months, now noisy breathing",
    stem:
      "You are working in a regional hospital emergency department with otolaryngology and anesthesia on call. A 66-year-old man presents to the emergency department with 2 days of noisy breathing that is worse when he lies down. He has been hoarse for 4 months and has lost 7 kg. He has smoked a pack of cigarettes a day for 45 years and takes no medications. A neck CT ordered by his family physician last week shows a mass arising from the left vocal cord and narrowing the glottis. He sits upright and speaks in short sentences. There is inspiratory stridor at rest. A firm, fixed mass lies to the left of the thyroid cartilage. His cricothyroid membrane is easy to feel.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "24/minute", bp: "148/86 mmHg", o2sat: "94% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for his airway?",
        options: ["Admit to the ward with dexamethasone", "Discharge with an urgent clinic visit", "Heliox and reassess in the morning", "Secure the airway today with otolaryngology", "Transfer to a cancer centre by road"],
        correct: 3,
        explanation:
          "Stridor at rest after months of hoarseness and weight loss points to a malignant glottic obstruction that is still growing, and a small further loss of calibre, swelling or a plug of mucus can close it completely. The Canadian Airway Focus Group recommends securing the obstructed airway when resources allow, and the surgeon and anesthesiologist he needs are available now. Dexamethasone and heliox may buy time but do not treat a tumour, and a ward bed lacks the monitoring and staff to rescue a sudden obstruction overnight. A long road transfer with an unsecured, narrowing airway risks complete obstruction in a vehicle. Discharge is unsafe with stridor at rest.",
        keyFeature: { topic: "airway", n: 2 },
        source: "cafg-2021-part2",
      },
      {
        id: "q2",
        kind: "menu",
        update: "The otolaryngologist and anesthesiologist come to the emergency department to plan his airway with you.",
        prompt: "Which of the following assessments best define his obstruction before the airway plan is made?",
        options: ["Arterial blood gas", "Flexible nasendoscopy", "Flow-volume loop spirometry", "Mallampati assessment", "Neck CT review", "Peak expiratory flow", "Portable chest X-ray", "Thyromental distance"],
        select: 2,
        correct: [1, 4],
        explanation:
          "The Canadian Airway Focus Group advises nasal endoscopic examination of the pharynx and larynx to clarify the nature and extent of a glottic obstruction, and review of any available CT or MRI, which shows the level, length and size of the narrowing and the anatomy below it. Together they show whether a tube can pass and where a tracheostomy can be placed. Mallampati class and thyromental distance predict the view of the mouth and larynx at laryngoscopy but say nothing about a lesion at the cords. A blood gas and a chest X-ray describe gas exchange and the lungs. Peak flow and forced spirometry add effort and risk in a man with stridor at rest and do not show the anatomy.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg-2021-part2",
      },
      {
        id: "q3",
        kind: "single",
        update: "Nasendoscopy shows a bulky tumour of the left cord that leaves a slit-like opening of about 4 mm and bleeds on contact. The CT shows a normal trachea below the cords.",
        prompt: "Which of the following is the most appropriate way to secure his airway?",
        options: ["Awake flexible bronchoscopic intubation", "Awake tracheostomy under local anesthetic", "Inhalational induction in the operating room", "Rapid sequence intubation with a videolaryngoscope", "Supraglottic airway after induction"],
        correct: 1,
        explanation:
          "His obstruction is at the glottis and leaves an opening of about 4 mm, smaller than the outside of any adult tube, while the trachea below is normal. Awake tracheostomy under local anesthetic keeps him breathing on his own and places the airway below the lesion, and the Canadian Airway Focus Group lists awake tracheotomy as a way to secure an obstructed airway. A bronchoscope passed through the slit can bleed the tumour and plug the remaining opening. Induction, by vein or by inhalation, removes the muscle tone holding the airway open and can turn partial obstruction into complete obstruction. Apneic oxygenation does not work past an obstructed airway. A supraglottic airway sits above the lesion and cannot bypass it.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg-2021-part2",
      },
      {
        id: "q4",
        kind: "single",
        update: "While the operating room is prepared, he becomes anxious and asks for something to help him relax. His O2 saturation is 94% on high-flow nasal oxygen and his stridor is unchanged.",
        prompt: "Which of the following is the most appropriate response to his request?",
        options: ["Haloperidol 5 mg IV", "Lorazepam 1 mg IV", "Midazolam 2 mg IV", "Propofol 30 mg IV", "No sedative, with reassurance at his side"],
        correct: 4,
        explanation:
          "For a patient with stridor, the Difficult Airway Society guideline on awake tracheal intubation advises avoiding or minimizing sedation, because oversedation can have critical consequences. Even a small dose of a benzodiazepine or propofol can relax the pharynx and larynx and blunt his drive to breathe, which can close a 4 mm opening. Haloperidol can also sedate and causes dystonic reactions that can involve the airway. A calm explanation, a familiar person or clinician at his side, and high-flow oxygen address his fear without risking his airway. New or worsening anxiety should also prompt a check for rising hypoxemia or hypercapnia.",
        keyFeature: { topic: "airway", n: 5 },
        source: "das-ati-2020",
      },
    ],
    sources: [S.cafg2, S.dasAti],
    ...META,
  },

  /* 52 Confirming the tube without waveform capnography ------------------ */
  {
    id: "airway-52",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Overdose when the monitor fails",
    stem:
      "You are working in a rural hospital emergency department. A 37-year-old woman is brought to the emergency department by ambulance 2 hours after taking an unknown number of quetiapine tablets with alcohol. She has vomited twice. Her BMI is 44 kg/m2. She groans only to pain. Her breathing is snoring and improves with a jaw thrust, and there is vomitus in her mouth. You decide to intubate her. The capnography module of the monitor has failed, and a colorimetric CO2 detector and an esophageal detector bulb are available. The critical care transport team is 3 hours away.",
    vitals: { temperature: "36.6°C oral", pulse: "108/minute", resp: "10/minute", bp: "98/58 mmHg", o2sat: "90% on a nonrebreather mask", weight: "118 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Her mouth is suctioned. She is preoxygenated with her head and torso ramped up, and rapid sequence intubation is planned.",
        prompt: "Which of the following should be added during laryngoscopy for her?",
        options: ["Bag-mask breaths at 30/minute", "Cricoid pressure throughout", "Head of the bed laid flat", "Higher dose of rocuronium", "Nasal cannula oxygen at 15 L/minute"],
        correct: 4,
        explanation:
          "Her obesity reduces her functional residual capacity, so she will desaturate quickly once she is apneic. The Canadian Airway Focus Group recommends apneic oxygenation during laryngoscopy and intubation for all morbidly obese patients, and nasal cannula oxygen at 15 L/minute left on throughout extends her safe apnea time. Bag-mask breaths cannot be given during laryngoscopy, and fast breaths before it would inflate the stomach of a woman who is vomiting. The evidence for cricoid pressure is conflicting and it can worsen the view. Laying the bed flat undoes the ramped position that improves both preoxygenation and the view. A higher dose of rocuronium does not lengthen the time she can tolerate apnea.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg-2021-part2",
      },
      {
        id: "q2",
        kind: "single",
        update: "The view is poor and the tube is passed beyond the epiglottis without seeing the cords. The colorimetric detector turns yellow on the first breath, then stays purple over the next five breaths. Brown fluid rises in the tube.",
        prompt: "Which of the following is the most likely explanation for these detector findings?",
        options: ["Esophageal intubation", "Low cardiac output", "Right mainstem intubation", "Severe bronchospasm", "Tube cuff above the cords"],
        correct: 0,
        explanation:
          "A colorimetric detector turns yellow when it meets CO2 and stays purple when there is none, so a colour that fades back to purple after one breath means the tube is not in the airway. The Canadian Airway Focus Group warns that acidic gastric contents can contaminate the detector and give a false positive change, and that colorimetric capnometry is less specific than waveform capnography, so a sustained change over several breaths is needed. Brown fluid in the tube adds to the evidence. Low cardiac output gives a weak or absent change from the start, not one that fades, and her pulse and BP show a circulation. A mainstem tube, bronchospasm or a high cuff still leave the tube in contact with exhaled CO2.",
        keyFeature: { topic: "airway", n: 6 },
        source: "cafg-2021-part1",
      },
      {
        id: "q3",
        kind: "single",
        update: "The tube is removed and she is reoxygenated. The second tube is seen passing through the cords. The detector stays yellow over six breaths and both sides of the chest rise. The esophageal detector bulb, squeezed and attached, takes 15 seconds to reinflate.",
        prompt: "Which of the following best explains the slow reinflation of the bulb?",
        options: ["Esophageal placement of the second tube", "Expected finding with a tracheal tube", "False result related to her obesity", "Right mainstem bronchus intubation", "Tube cuff resting at the cords"],
        correct: 2,
        explanation:
          "An esophageal detector relies on the rigid trachea staying open when the bulb pulls air back, so it reinflates within seconds from a tracheal tube and slowly from a collapsible esophagus. The Canadian Airway Focus Group lists obesity with a BMI over 35 kg/m2 among the causes of a false esophageal result, because her small functional residual capacity leaves little air to draw back. The tube was seen passing the cords, the detector stays yellow over six breaths and both sides of her chest rise, so the tube is tracheal. Slow refill is not the expected finding with a tracheal tube. A tube in the right main bronchus or with its cuff at the cords still opens onto rigid airway and refills quickly.",
        keyFeature: { topic: "airway", n: 6 },
        source: "cafg-2021-part1",
      },
      {
        id: "q4",
        kind: "single",
        update: "During the first attempt her O2 saturation fell from 98% to 79% within 50 seconds of apnea, although she had been preoxygenated well. Her chest is clear.",
        prompt: "Which of the following best explains her rapid fall in oxygen saturation during apnea?",
        options: ["Lower hemoglobin from the overdose", "Reduced functional residual capacity", "Slower metabolism from quetiapine", "Tube adding dead space", "Vasoconstriction causing oximeter error"],
        correct: 1,
        explanation:
          "Preoxygenation fills the functional residual capacity with oxygen, and that reservoir is what keeps her saturated during apnea. Obesity shrinks it, and the Canadian Airway Focus Group notes that with a reduced functional residual capacity apnea is poorly tolerated, which is why she was ramped and given apneic oxygenation. Quetiapine does not lower hemoglobin. A slower metabolism would use oxygen more slowly and delay desaturation. Dead space matters during ventilation, not during apnea before a tube is placed. Vasoconstriction can blunt the oximeter signal, but her clear chest and the time course fit a small oxygen store, not a measurement error.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg-2021-part2",
      },
    ],
    sources: [S.cafg2, S.cafg1],
    ...META,
  },
];
