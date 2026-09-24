// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const CAFG1: Source = {
  id: "cafg1",
  citation:
    "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 1. Difficult airway management encountered in an unconscious patient. Can J Anesth. 2021.",
  url: "https://doi.org/10.1007/s12630-021-02007-0",
};
const CAFG2: Source = {
  id: "cafg2",
  citation:
    "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021.",
  url: "https://doi.org/10.1007/s12630-021-02008-z",
};
const WALLS_CH1: Source = {
  id: "walls-ch1",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 1, The Decision to Intubate.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH2: Source = {
  id: "walls-ch2",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 2, Identification of the Anatomically Difficult Airway.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH9: Source = {
  id: "walls-ch9",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 9, Non-Invasive Positive Pressure Ventilation and High-Flow Nasal Oxygen.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH10: Source = {
  id: "walls-ch10",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 10, Mechanical Ventilation.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH11: Source = {
  id: "walls-ch11",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 11, Oxygen and Carbon Dioxide Monitoring.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH21: Source = {
  id: "walls-ch21",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 21, Sedative-Induction Agents.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH22: Source = {
  id: "walls-ch22",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 22, Neuromuscular Blocking Agents.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH26: Source = {
  id: "walls-ch26",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 26, Pediatric Airway Techniques.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH28: Source = {
  id: "walls-ch28",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 28, Foreign Body in the Pediatric Airway.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH33: Source = {
  id: "walls-ch33",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 33, The Unstable Patient: Cardiopulmonary Optimization for Emergency Airway Management.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH34: Source = {
  id: "walls-ch34",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 34, The Trauma Airway.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH36: Source = {
  id: "walls-ch36",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 36, Reactive Airways Disease.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH37: Source = {
  id: "walls-ch37",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 37, Distorted Airways and Acute Upper Airway Obstruction.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const WALLS_CH39: Source = {
  id: "walls-ch39",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. Chapter 39, Cardiovascular Emergencies.",
  url: "https://emergency.lwwhealthlibrary.com/book.aspx?bookid=3233",
};
const NRP_L5: Source = {
  id: "nrp-l5",
  citation: "Weiner GM, Zaichkin J, editors. Textbook of Neonatal Resuscitation (NRP). 8th ed. American Academy of Pediatrics and American Heart Association. 2021. Lesson 5, Alternative Airways: Endotracheal Tubes and Laryngeal Masks.",
};
const NRP_L6: Source = {
  id: "nrp-l6",
  citation: "Weiner GM, Zaichkin J, editors. Textbook of Neonatal Resuscitation (NRP). 8th ed. American Academy of Pediatrics and American Heart Association. 2021. Lesson 6, Chest Compressions.",
};
const BERGER: Source = {
  id: "berger-epiglottitis",
  citation: "Berger G, Landau T, Berger S, et al. The rising incidence of adult acute epiglottitis and epiglottic abscess. Am J Otolaryngol. 2003.",
  url: "https://doi.org/10.1016/s0196-0709(03)00083-8",
};
const TRAN: Source = {
  id: "tran-rocuronium",
  citation: "Tran DT, Newton EK, Mount VA, Lee JS, Wells GA, Perry JJ. Rocuronium versus succinylcholine for rapid sequence induction intubation. Cochrane Database Syst Rev. 2015.",
  url: "https://doi.org/10.1002/14651858.CD002788.pub3",
};
const DMD: Source = {
  id: "dmd-care-2018",
  citation:
    "Birnkrant DJ, Bushby K, Bann CM, et al. Diagnosis and management of Duchenne muscular dystrophy, part 2. Respiratory, cardiac, bone health, and orthopaedic management. Lancet Neurol. 2018.",
  url: "https://doi.org/10.1016/S1474-4422(18)30025-5",
};
const GOODMAN: Source = {
  id: "goodman-ett",
  citation: "Goodman LR, Conrardy PA, Laing F, Singer MM. Radiographic evaluation of endotracheal tube position. AJR Am J Roentgenol. 1976.",
  url: "https://doi.org/10.2214/ajr.127.3.433",
};
const COHEN: Source = {
  id: "cohen-ketamine-icp",
  citation:
    "Cohen L, Athaide V, Wickham ME, Doyle-Waters MM, Rose NG, Hohl CM. The effect of ketamine on intracranial and cerebral perfusion pressure and health outcomes. A systematic review. Ann Emerg Med. 2015.",
  url: "https://doi.org/10.1016/j.annemergmed.2014.06.018",
};
const BTFPEDS: Source = {
  id: "btf-peds-tbi",
  citation:
    "Kochanek PM, Tasker RC, Carney N, et al. Guidelines for the management of pediatric severe traumatic brain injury, third edition. Update of the Brain Trauma Foundation guidelines. Pediatr Crit Care Med. 2019.",
  url: "https://doi.org/10.1097/PCC.0000000000001735",
};
const NTSP: Source = {
  id: "ntsp",
  citation:
    "McGrath BA, Bates L, Atkinson D, Moore JA. Multidisciplinary guidelines for the management of tracheostomy and laryngectomy airway emergencies. Anaesthesia. 2012.",
  url: "https://doi.org/10.1111/j.1365-2044.2012.07217.x",
};
const DASATI: Source = {
  id: "das-ati",
  citation: "Ahmad I, El-Boghdadly K, Bhagrath R, et al. Difficult Airway Society guidelines for awake tracheal intubation (ATI) in adults. Anaesthesia. 2020.",
  url: "https://doi.org/10.1111/anae.14904",
};
const PREOXI: Source = {
  id: "preoxi",
  citation: "Gibbs KW, Semler MW, Driver BE, et al. Noninvasive ventilation for preoxygenation during emergency intubation. N Engl J Med. 2024.",
  url: "https://doi.org/10.1056/NEJMoa2313680",
};
const PREVENT: Source = {
  id: "prevent",
  citation: "Casey JD, Janz DR, Russell DW, et al. Bag-mask ventilation during tracheal intubation of critically ill adults. N Engl J Med. 2019.",
  url: "https://doi.org/10.1056/NEJMoa1812405",
};
const DSI: Source = {
  id: "dsi",
  citation: "Weingart SD, Trueger NS, Wong N, Scofi J, Singh N, Rudolph SS. Delayed sequence intubation. A prospective observational study. Ann Emerg Med. 2015.",
};
const SAM: Source = {
  id: "sam",
  citation:
    "Kornas RL, Owyang CG, Sakles JC, Foley LJ, Mosier JM. Evaluation and management of the physiologically difficult airway. Consensus recommendations from Society for Airway Management. Anesth Analg. 2021.",
  url: "https://doi.org/10.1213/ANE.0000000000005233",
};
const MEDIASTINAL: Source = {
  id: "mediastinal",
  citation: "Blank RS, de Souza DG. Anesthetic management of patients with an anterior mediastinal mass. Continuing professional development. Can J Anesth. 2011.",
  url: "https://doi.org/10.1007/s12630-011-9539-x",
};
const LAWN: Source = {
  id: "lawn",
  citation: "Lawn ND, Fletcher DD, Henderson RD, Wolter TD, Wijdicks EF. Anticipating mechanical ventilation in Guillain-Barre syndrome. Arch Neurol. 2001.",
};
const MARTYN: Source = {
  id: "martyn",
  citation:
    "Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Etiologic factors and molecular mechanisms. Anesthesiology. 2006.",
};
const MG: Source = {
  id: "mg",
  citation: "Blichfeldt-Lauridsen L, Hansen BD. Anesthesia and myasthenia gravis. Acta Anaesthesiol Scand. 2012.",
  url: "https://doi.org/10.1111/j.1399-6576.2011.02558.x",
};
const HEMOPTYSIS: Source = {
  id: "hemoptysis",
  citation: "Davidson K, Shojaee S. Managing massive hemoptysis. Chest. 2020.",
};
const TONSIL: Source = {
  id: "tonsil",
  citation: "Fields RG, Gencorelli FJ, Litman RS. Anesthetic management of the pediatric bleeding tonsil. Paediatr Anaesth. 2010.",
  url: "https://doi.org/10.1111/j.1460-9592.2010.03426.x",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) student course manual. 11th edition. 2025.",
};
const ALS2025: Source = {
  id: "als2025",
  citation:
    "American Heart Association. Part 9. Adult advanced life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.",
  url: "https://doi.org/10.1161/CIR.0000000000001376",
};
const PALS2025: Source = {
  id: "pals2025",
  citation:
    "American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.",
  url: "https://doi.org/10.1161/CIR.0000000000001368",
};
const ASCOLLAR: Source = {
  id: "as-collar",
  citation: "Clarke A, James S, Ahuja S. Ankylosing spondylitis. Inadvertent application of a rigid collar after cervical fracture, leading to neurological complications and death. Acta Orthop Belg. 2010.",
  url: "https://pubmed.ncbi.nlm.nih.gov/20698467/",
};
const SCI: Source = {
  id: "sci",
  citation: "Kwon BK, Tetreault LA, Martin AR, et al. A clinical practice guideline for the management of patients with acute spinal cord injury. Recommendations on hemodynamic management. Global Spine J. 2024.",
  url: "https://doi.org/10.1177/21925682231202348",
};
const WTA: Source = {
  id: "wta",
  citation: "Sperry JL, Moore EE, Coimbra R, et al. Western Trauma Association critical decisions in trauma. Penetrating neck trauma. J Trauma Acute Care Surg. 2013.",
};
const ARDSNET: Source = {
  id: "ardsnet",
  citation:
    "Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med. 2000.",
  url: "https://doi.org/10.1056/NEJM200005043421801",
};
const CROUP: Source = {
  id: "croup",
  citation: "Ortiz-Alvarez O, Mikrogianakis A. Acute management of croup in the emergency department. Canadian Paediatric Society position statement. Paediatr Child Health. 2017.",
};
const WAO: Source = {
  id: "wao",
  citation: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.",
  url: "https://doi.org/10.1016/j.waojou.2020.100472",
};
const PADIS: Source = {
  id: "padis",
  citation:
    "Devlin JW, Skrobik Y, Gelinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation/sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med. 2018.",
};

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

export const AIRWAY_S21_SAMPS: Samp[] = [
  {
    id: "airway-16",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Stab wound to the side of the neck",
    stem:
      "You are working in a community hospital emergency department with no on-site surgeon. A 27-year-old man is brought to the emergency department by ambulance 20 minutes after being stabbed once in the left side of the neck. He is anxious and speaks in short phrases with a hoarse voice. He has no past medical history and takes no medications. There is a 2 cm wound over the left anterior neck below the angle of the mandible, deep to the platysma. A firm hematoma extends toward the midline and has grown over the last 10 minutes. He is spitting blood-stained saliva. The trachea is midline.",
    vitals: { pulse: "118/minute", resp: "26/minute", bp: "104/68 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this patient most strongly indicates that he needs a definitive airway now?",
        options: [
          "Anxiety with rapid breathing",
          "Expanding hematoma with hoarseness",
          "O2 saturation of 95% on room air",
          "Pulse of 118/minute",
          "Wound deep to the platysma",
        ],
        correct: 1,
        explanation:
          "A hematoma that has grown over 10 minutes and a hoarse voice show that the airway is being compressed and distorted, and both will get worse with time. Securing the airway early, before the anatomy is lost, is safer than waiting for stridor. Anxiety and tachypnea have many causes after a stabbing and do not by themselves mark airway compromise. A saturation of 95% is reassuring now but is a late marker of obstruction. Tachycardia points to blood loss. Penetration of the platysma calls for surgical assessment, not intubation.",
        keyFeature: { topic: "airway", n: 2 },
        source: "wta",
      },
      {
        id: "q2",
        kind: "single",
        update: "You decide to intubate him in the emergency department before transfer. The hematoma continues to enlarge. Two suction catheters and a video laryngoscope are ready.",
        prompt: "Which of the following is the most important additional preparation before induction?",
        options: [
          "Apply a cervical collar",
          "Insert a nasogastric tube",
          "Mark the cricothyroid membrane",
          "Prepare a needle cricothyroidotomy kit",
          "Remove the wound dressing to inspect",
        ],
        correct: 2,
        explanation:
          "An expanding neck hematoma can distort the larynx so that laryngoscopy and ventilation both fail after induction. Identifying and marking the cricothyroid membrane beforehand, by palpation or ultrasound, is the double setup that lets a scalpel-bougie-tube airway start at once. A cervical collar is not indicated for a stab wound without neurologic deficit and hides the neck. A nasogastric tube provokes gagging and can dislodge clot. In an adult, the Canadian Airway Focus Group favours a scalpel technique over needle cricothyroidotomy. Removing the dressing or probing the wound can restart bleeding.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After induction, the video laryngoscope shows pooled blood and a larynx pushed to the right. Two attempts fail. Two-person bag-mask ventilation and a supraglottic airway give no capnography trace. O2 saturation is 76%.",
        prompt: "Which of the following is the most appropriate next action?",
        options: [
          "Direct laryngoscopy by a colleague",
          "Flexible bronchoscopic intubation",
          "Needle cricothyroidotomy with jet ventilation",
          "Scalpel-bougie-tube cricothyrotomy",
          "sugammadex 16 mg/kg IV for reversal",
        ],
        correct: 3,
        explanation:
          "Failed intubation, failed face mask ventilation and a failed supraglottic airway with falling saturation is a cannot intubate, cannot oxygenate emergency. The membrane was marked before induction, so a scalpel-bougie-tube cricothyrotomy should start now. More laryngoscopy, by any operator, delays oxygenation in a bloody and distorted airway. A flexible scope is useless with pooled blood and no time. Needle cricothyroidotomy with jet ventilation fails often in adults and risks barotrauma. Sugammadex does not open an airway that is compressed by a hematoma.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "A 6.0 cuffed tube is passed over the bougie through the cricothyroid membrane. Capnography shows a sustained waveform and O2 saturation rises to 92%. Breath sounds are heard on the right only.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Advance the tube 2 cm further",
          "Insert a left chest tube",
          "Remove it and attempt laryngoscopy",
          "Withdraw until breath sounds are equal",
          "X-ray before any change",
        ],
        correct: 3,
        explanation:
          "The trachea below the cricothyroid membrane is short, so a tube railroaded over a bougie easily enters the right main bronchus. A sustained capnography waveform confirms the tube is in the airway, and breath sounds on the right only point to endobronchial placement. The tube should be withdrawn until the cuff sits just inside the trachea and breath sounds are equal, and advancing it makes the problem worse. A chest X-ray can confirm the depth later but should not delay a simple correction. A left chest tube treats a pneumothorax, which is less likely than a deep tube. Removing a working surgical airway to return to failed laryngoscopy is unsafe.",
        keyFeature: { topic: "airway", n: 6 },
        source: "cafg1",
      },
    ],
    sources: [WTA, CAFG2, CAFG1],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-17",
    topic: "airway",
    title: "Noisy breathing through a new tracheostomy",
    stem:
      "A 66-year-old man is brought to the emergency department by ambulance with 30 minutes of worsening shortness of breath. He had a percutaneous tracheostomy 9 days ago during an ICU stay for pneumonia and moved to a rehabilitation unit yesterday. He has a normal upper airway and no head and neck surgery. His cuffed tracheostomy tube has an inner cannula. Staff report thick secretions overnight. He is sitting up and using his accessory muscles, with noisy breathing through the tube. A paramedic could not pass a suction catheter more than 5 cm into the tube.",
    vitals: { temperature: "37.6°C oral", pulse: "124/minute", resp: "34/minute", bp: "158/92 mmHg", o2sat: "84% on 15 L/minute by face and tracheostomy masks" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step to relieve the obstruction?",
        options: [
          "Deflate the tracheostomy cuff",
          "Instill saline and repeat suction",
          "Intubate orally from above",
          "Remove the inner cannula",
          "Remove the tracheostomy tube",
        ],
        correct: 3,
        explanation:
          "A suction catheter that will not pass means the tube is blocked or displaced. The National Tracheostomy Safety Project algorithm removes the inner cannula first, because a blocked inner cannula is the commonest and most easily fixed cause. Cuff deflation and removal of the whole tube come next, only if the inner cannula is clear and he does not improve. Saline and more suction repeat an attempt that has already failed. Oral intubation is a later step, after the tracheostomy tube problem is dealt with.",
        keyFeature: { topic: "airway", n: 1 },
        source: "ntsp",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The inner cannula is clear of secretions. A suction catheter still cannot pass. The cuff is deflated, but he does not improve. O2 saturation is 78%.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bag ventilate through the tracheostomy",
          "Flexible scope check through the tube",
          "Insert a new tracheostomy tube",
          "Oral intubation with a video laryngoscope",
          "Remove the tracheostomy tube",
        ],
        correct: 4,
        explanation:
          "A clear inner cannula, a catheter that will not pass and no response to cuff deflation mean the tube is probably displaced into the tissues. The algorithm then removes the tracheostomy tube so that he can be oxygenated from above or through the stoma. Bagging through a displaced tube forces gas into the neck and does not ventilate. A 9-day-old percutaneous tract may not be mature, so blind insertion of a new tube can make a false passage. A scope check is useful only when it causes no delay, and he is hypoxemic now. Oral intubation comes after removal and primary oxygenation.",
        keyFeature: { topic: "airway", n: 1 },
        source: "ntsp",
      },
      {
        id: "q3",
        kind: "single",
        update: "The tracheostomy tube is removed. He stops breathing but has a pulse. O2 saturation is 70%.",
        prompt: "Which of the following is the most appropriate way to oxygenate him now?",
        options: [
          "Bag-mask to face with stoma occluded",
          "Blind reinsertion of the old tube",
          "High-flow nasal oxygen at 60 L/minute",
          "Needle cricothyroidotomy",
          "Supraglottic airway with stoma open",
        ],
        correct: 0,
        explanation:
          "His upper airway is normal, so he can be ventilated from above with a bag and face mask while the stoma is covered with a gloved hand or gauze. Covering the stoma stops the gas escaping through it. A supraglottic airway also works from above, but only if the stoma is sealed, and left open the gas leaks out of the neck. Blind reinsertion of the old tube can recreate the false passage. High-flow nasal oxygen does not ventilate a patient who is apneic. Needle cricothyroidotomy is not needed when a stoma already gives access to the trachea.",
        keyFeature: { topic: "airway", n: 4 },
        source: "ntsp",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Saturation rises to 93%. The ICU team passes a cuffed tracheostomy tube through the stoma over a bougie. Bagging moves the chest, but capnography is flat and subcutaneous air spreads across the neck.",
        prompt: "Which of the following is the most likely explanation for these findings?",
        options: [
          "Bronchospasm with air trapping",
          "Disconnected sampling line",
          "False passage anterior to the trachea",
          "Right mainstem bronchus intubation",
          "Tension pneumothorax",
        ],
        correct: 2,
        explanation:
          "A flat capnography trace with spreading subcutaneous air means gas is going into the neck tissues, not the trachea. A 9-day-old percutaneous tract is not yet mature, so a tube passed through it can easily enter a pretracheal false passage, and chest movement can come from tissue inflation. Bronchospasm gives a sloped, shark fin trace, not a flat one. A disconnected sampling line would not cause subcutaneous air. A mainstem intubation and a tension pneumothorax both still give a capnography trace. The tube should come out and oxygenation should continue from above.",
        keyFeature: { topic: "airway", n: 6 },
        source: "ntsp",
      },
    ],
    sources: [NTSP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-18",
    topic: "airway",
    title: "Short of breath at dinner with a neck stoma",
    stem:
      "A 71-year-old woman is brought to the emergency department by ambulance with sudden shortness of breath that began while eating dinner. She had a total laryngectomy for laryngeal cancer 4 years ago and breathes through a permanent neck stoma. She has a voice prosthesis. Paramedics placed a nonrebreather mask over her face. She is anxious, points at her neck and cannot speak. A crust partly covers the stoma, and there is a high-pitched noise with each breath. There is no rash and no facial swelling.",
    vitals: { pulse: "122/minute", resp: "30/minute", bp: "164/90 mmHg", o2sat: "86% on 15 L/minute by face mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate step in her care?",
        options: [
          "Apply oxygen to the neck stoma",
          "Bag-mask ventilation over the mouth",
          "Intubate orally with a video laryngoscope",
          "Nasal high-flow oxygen at 60 L/minute",
          "Nebulized salbutamol by face mask",
        ],
        correct: 0,
        explanation:
          "After a total laryngectomy the trachea ends at the neck stoma and no longer connects with the mouth or nose. Oxygen must go to the stoma, with the crust removed and the stoma suctioned. Her face mask delivers almost nothing to her lungs, which explains the low saturation. Bag-mask ventilation over the mouth, nasal high-flow oxygen and a face mask nebulizer all act on an upper airway that no longer leads to the trachea. Oral intubation is not possible because the larynx has been removed.",
        keyFeature: { topic: "airway", n: 4 },
        source: "ntsp",
      },
      {
        id: "q2",
        kind: "single",
        update: "Oxygen is applied to the stoma and a crust is removed. She then stops breathing but has a pulse. O2 saturation is 74%.",
        prompt: "Which of the following is the most appropriate way to ventilate her?",
        options: [
          "Adult face mask over mouth and nose",
          "Infant face mask sealed over the stoma",
          "Needle cricothyroidotomy",
          "Oral endotracheal intubation",
          "Supraglottic airway through the mouth",
        ],
        correct: 1,
        explanation:
          "The stoma is her only airway, so bag ventilation must be delivered there. A small round infant or pediatric face mask, or a supraglottic airway pressed over the stoma, seals well on the neck. A face mask over the mouth and nose, a supraglottic airway through the mouth and oral intubation all ventilate a pharynx that is no longer connected to the trachea. Needle cricothyroidotomy has no role, because the larynx is gone and the stoma already opens into the trachea.",
        keyFeature: { topic: "airway", n: 4 },
        source: "ntsp",
      },
      {
        id: "q3",
        kind: "single",
        update: "Bagging through the stoma gives poor chest rise and high resistance. You notice that the voice prosthesis is missing from the back wall of the stoma.",
        prompt: "Which of the following is the most likely cause of her airway obstruction?",
        options: [
          "Anaphylaxis to food",
          "Bronchospasm from aspiration",
          "Food bolus in the esophagus",
          "Pneumothorax from coughing",
          "Voice prosthesis in the airway",
        ],
        correct: 4,
        explanation:
          "A voice prosthesis sits in a puncture between the back wall of the trachea and the esophagus. When it is missing from the stoma, it has often been dislodged into the trachea or a bronchus, which fits her sudden onset and the high resistance to bagging. A food bolus in the esophagus does not block a trachea that is separate from the pharynx. She has no rash or facial swelling and is hypertensive, which argues against anaphylaxis. Bronchospasm and pneumothorax do not explain the missing prosthesis. Bronchoscopic retrieval is needed.",
        keyFeature: { topic: "airway", n: 1 },
        source: "ntsp",
      },
      {
        id: "q4",
        kind: "single",
        update: "The prosthesis is retrieved from the right main bronchus by bronchoscopy. She remains drowsy and you intubate through the stoma with a 6.0 cuffed tube.",
        prompt: "Which of the following is the main risk specific to intubating through this stoma?",
        options: [
          "Dental injury during insertion",
          "Endobronchial tube placement",
          "Laryngospasm on insertion",
          "Recurrent laryngeal nerve injury",
          "Vocal cord trauma",
        ],
        correct: 1,
        explanation:
          "The distance from a laryngectomy stoma to the carina is short, so a tube pushed in to the usual oral depth easily enters a main bronchus. The tube should be advanced only until the cuff is just inside the trachea, then checked with capnography and equal breath sounds. She has no larynx, so laryngospasm, vocal cord trauma and recurrent laryngeal nerve injury cannot happen during stoma intubation. A stoma approach does not pass the teeth.",
        keyFeature: { topic: "airway", n: 6 },
        source: "ntsp",
      },
    ],
    sources: [NTSP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-19",
    topic: "airway",
    alsoTopics: ["infectious-diseases"],
    title: "Sore throat and a muffled voice",
    stem:
      "A 48-year-old man presents to the emergency department with 14 hours of severe sore throat, painful swallowing and a muffled voice. He has type 2 diabetes treated with metformin. He is sitting forward and drooling into a basin, and he does not want to lie down. There is no stridor at rest. The oropharynx looks nearly normal. He has marked tenderness over the hyoid bone when the larynx is moved gently.",
    vitals: { temperature: "39.1°C oral", pulse: "116/minute", resp: "22/minute", bp: "138/84 mmHg", o2sat: "96% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this patient most strongly predicts that he will need airway intervention?",
        options: [
          "Nearly normal oropharyngeal exam",
          "Pulse of 116/minute",
          "Temperature of 39.1°C orally",
          "Tenderness over the hyoid",
          "Upright posture with drooling",
        ],
        correct: 4,
        explanation:
          "Drooling in a patient who sits forward and will not lie down means he cannot swallow his own secretions and is protecting a narrowed supraglottic airway. It is one of the strongest predictors of the need for airway intervention in adult supraglottitis. A nearly normal oropharynx and tenderness over the hyoid point toward the diagnosis but do not measure the degree of obstruction. Fever and tachycardia reflect infection and are common to many throat infections.",
        keyFeature: { topic: "airway", n: 2 },
        source: "berger-epiglottitis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to confirm the diagnosis in this patient?",
        options: [
          "Contrast CT of the neck lying supine",
          "Direct laryngoscopy after IV sedation",
          "Flexible nasendoscopy sitting upright",
          "Lateral soft tissue X-ray of the neck",
          "Rapid streptococcal antigen throat swab",
        ],
        correct: 2,
        explanation:
          "Flexible nasendoscopy with topical anesthesia, done with him sitting upright, shows the epiglottis and arytenoids directly and grades the obstruction without sedation or a change in position. Lying him flat for CT can turn a partial obstruction into a complete one. Sedation for direct laryngoscopy can remove the muscle tone that keeps his airway open. A lateral neck X-ray can show a swollen epiglottis but misses many cases and delays the look that matters. A streptococcal swab does not address the supraglottis.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Nasendoscopy shows a swollen, red epiglottis and swollen arytenoids, with about half of the airway open. Ceftriaxone 2 g IV and dexamethasone 10 mg IV are given. Anesthesia and otolaryngology are called.",
        prompt: "Which of the following is the most appropriate plan for securing his airway?",
        options: [
          "Awake flexible intubation with ENT present",
          "Blind nasotracheal intubation",
          "Ketamine sedation and direct laryngoscopy",
          "Rapid sequence intubation with a bougie",
          "Ward admission with nebulized epinephrine",
        ],
        correct: 0,
        explanation:
          "Supraglottic swelling makes both laryngoscopy and bag-mask ventilation likely to fail after induction. Awake flexible intubation keeps him breathing on his own, and an otolaryngologist ready for a surgical airway provides the backup if the attempt fails. Rapid sequence intubation removes his own airway tone, with no reliable rescue if the view is lost. Blind nasal intubation can traumatize the swollen tissue and provoke complete obstruction. Ketamine sedation still risks laryngospasm and loss of the airway. A ward bed without airway monitoring is unsafe for this degree of swelling.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q4",
        kind: "single",
        update: "Airway topical anesthesia with lidocaine is planned for the awake intubation. His estimated lean body weight is 70 kg.",
        prompt: "Which of the following is the maximum total dose of topical lidocaine for this procedure?",
        options: ["315 mg", "490 mg", "630 mg", "738 mg", "1050 mg"],
        correct: 2,
        explanation:
          "The Difficult Airway Society advises that topical lidocaine for awake intubation should not exceed 9 mg/kg of lean body weight. For a lean body weight of 70 kg that is 9 x 70 = 630 mg. The 738 mg option uses his actual weight of 82 kg, which overestimates the safe dose. The 315 mg and 490 mg options are the infiltration limits of 4.5 and 7 mg/kg applied to lean weight, which are more restrictive than needed for topical use. The 1050 mg option is 15 mg/kg and risks lidocaine toxicity.",
        keyFeature: { topic: "airway", n: 3 },
        source: "das-ati",
      },
    ],
    sources: [BERGER, CAFG2, DASATI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-20",
    topic: "airway",
    alsoTopics: ["infectious-diseases"],
    title: "Swelling under the jaw after a toothache",
    stem:
      "A 39-year-old woman presents to the emergency department with 3 days of right lower molar pain and 1 day of swelling under her jaw. She injects drugs and has not seen a dentist in years. Her voice is muffled and she cannot open her mouth fully. She sits upright and spits out her saliva. There is firm, woody swelling of both submandibular areas and the submental area. The floor of the mouth is raised and pushes the tongue up and back. Her interincisor opening is 1.5 cm. There is no stridor.",
    vitals: { temperature: "38.8°C oral", pulse: "112/minute", resp: "22/minute", bp: "118/72 mmHg", o2sat: "95% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings in this patient predict difficult laryngoscopy?",
        select: 2,
        options: [
          "Age of 39 years",
          "Dental source of infection",
          "Firm swelling of the mouth floor",
          "History of injection drug use",
          "Interincisor opening of 1.5 cm",
          "Pulse of 112/minute",
          "Right-sided molar pain",
          "Temperature of 38.8°C",
        ],
        correct: [2, 4],
        explanation:
          "Laryngoscopy works by displacing the tongue into the submandibular space. Firm, woody swelling of the floor of the mouth leaves no room for that, and it pushes the tongue up and back. An interincisor opening of 1.5 cm is well under the three fingerbreadths expected for laryngoscopy, so a blade may not even fit. Her age, the dental source and the side of the pain describe the illness, not the airway. Injection drug use predicts difficult IV access. Fever and tachycardia reflect sepsis.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to securing her airway?",
        options: [
          "Awake flexible nasotracheal intubation",
          "Blind nasotracheal intubation",
          "Ketamine sedation and direct laryngoscopy",
          "Rapid sequence intubation with a video laryngoscope",
          "Supraglottic airway after induction",
        ],
        correct: 0,
        explanation:
          "Limited mouth opening and a rigid floor of the mouth predict failure of laryngoscopy, and the swelling may also defeat bag-mask ventilation. An awake flexible scope through the nose avoids the mouth, keeps her breathing and keeps her airway tone. Rapid sequence intubation gives up her own airway when every rescue is likely to fail. A supraglottic airway will not pass a 1.5 cm opening. Blind nasal intubation can rupture an abscess or cause bleeding in a swollen airway. Ketamine sedation still risks laryngospasm and apnea without improving the view.",
        keyFeature: { topic: "airway", n: 3 },
        source: "das-ati",
      },
      {
        id: "q3",
        kind: "single",
        update: "While topical anesthesia is prepared, she becomes anxious and keeps pulling off her oxygen mask. You decide to give sedation.",
        prompt: "Which of the following is the most appropriate sedation for her awake intubation?",
        options: [
          "dexmedetomidine IV infusion",
          "fentanyl 200 mcg IV push",
          "hydromorphone 2 mg IV push",
          "midazolam 5 mg IV push",
          "propofol 1.5 mg/kg IV push",
        ],
        correct: 0,
        explanation:
          "Sedation for awake intubation should be light and should keep spontaneous breathing and airway tone. A dexmedetomidine infusion gives calm, rousable sedation with little respiratory depression. Propofol 1.5 mg/kg is an induction dose and would make her apneic with a swollen airway. Midazolam 5 mg, fentanyl 200 mcg and hydromorphone 2 mg given as boluses to a 60 kg woman can each depress breathing and relax the airway before it is secured.",
        keyFeature: { topic: "airway", n: 5 },
        source: "das-ati",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "The flexible scope cannot pass the nasopharynx because of swelling, and pus now obscures the view. She is breathing on her own with an O2 saturation of 94% on a face mask.",
        prompt: "Which of the following is the most appropriate next step to secure her airway?",
        options: [
          "Blind nasal intubation attempt",
          "Needle cricothyroidotomy",
          "Rapid sequence intubation with a bougie ready",
          "Supraglottic airway after induction",
          "Tracheostomy by ENT under local anesthetic",
        ],
        correct: 4,
        explanation:
          "The awake technique has failed but she is still oxygenating and breathing on her own. That leaves time for a planned awake surgical airway, which does not depend on the swollen upper airway. Otolaryngology can perform a tracheostomy under local anesthetic while she keeps breathing. Inducing her now removes her airway tone when laryngoscopy, mask ventilation and a supraglottic airway are all predicted to fail. Needle cricothyroidotomy is a temporizing rescue for a patient who cannot be oxygenated, not a planned definitive airway. Blind nasal attempts risk bleeding and abscess rupture.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg2",
      },
    ],
    sources: [CAFG2, DASATI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-21",
    topic: "airway",
    alsoTopics: ["sob"],
    title: "Young infant with cough and pauses in breathing",
    stem:
      "A 6-week-old boy born at 35 weeks gestation is brought to the emergency department by his parents with 3 days of cough and nasal congestion and poor feeding today. His mother saw him stop breathing and turn blue twice this morning. In the department he has a further 20 second apneic spell with bradycardia that needs stimulation and bag-mask ventilation. He has subcostal retractions and diffuse crackles and wheezes. A capillary blood gas shows pH 7.18 and pCO2 78 mmHg.",
    vitals: { temperature: "37.9°C rectal", pulse: "172/minute", resp: "64/minute", o2sat: "88% on 2 L/minute by nasal prongs", weight: "4.2 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his respiratory support?",
        options: [
          "Caffeine citrate 20 mg/kg IV",
          "Heated humidified high-flow nasal cannula",
          "Intubation and mechanical ventilation",
          "Nasal suction and observation",
          "Nebulized epinephrine",
        ],
        correct: 2,
        explanation:
          "Repeated apnea with bradycardia that needed bag-mask ventilation, together with a pH of 7.18 and pCO2 of 78 mmHg, shows failing ventilation, not only poor oxygenation. He needs a secure airway and controlled ventilation before the next apneic spell. High-flow nasal cannula helps work of breathing but does not prevent central apnea or correct this degree of acidosis. Caffeine has limited evidence in bronchiolitis and does not treat hypercapnia. Suction and nebulized epinephrine do not address recurrent apnea.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch1",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following endotracheal tubes is most appropriate for this infant?",
        options: ["2.5 mm cuffed", "3.0 mm cuffed", "3.5 mm cuffed", "4.0 mm cuffed", "4.0 mm uncuffed"],
        correct: 1,
        explanation:
          "A cuffed tube with an internal diameter of 3.0 mm suits an infant beyond the newborn period who weighs more than 3 kg, as he does at 4.2 kg. Cuffed tubes reduce tube changes and leaks and allow the higher pressures that stiff, wet lungs may need. A 2.5 mm tube is sized for very small preterm newborns and would add resistance and leak. A 3.5 mm cuffed tube is usually chosen at about 1 to 2 years of age. A 4.0 mm tube is too large for a 6-week-old airway.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch26",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Ketamine and rocuronium are planned. The resident suggests rocuronium 2 mg IV to limit how long he stays paralyzed.",
        prompt: "Which of the following rocuronium doses is most appropriate for this infant?",
        options: ["rocuronium 1 mg IV", "rocuronium 2 mg IV", "rocuronium 5 mg IV", "rocuronium 10 mg IV", "rocuronium 20 mg IV"],
        correct: 2,
        explanation:
          "The rapid sequence dose of rocuronium is about 1.2 mg/kg, and 1.2 x 4.2 kg = 5.0 mg. That dose gives good intubating conditions within about a minute, which matters in an infant who desaturates quickly. The 2 mg dose is under 0.5 mg/kg and gives a slow, incomplete block. The 1 mg dose is lower still. The 10 mg and 20 mg doses, about 2.4 and 4.8 mg/kg, prolong paralysis without improving conditions.",
        keyFeature: { topic: "airway", n: 5 },
        source: "tran-rocuronium",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "He is intubated with a 3.0 mm cuffed tube secured at 12 cm at the lips. Capnography shows a waveform. O2 saturation is 84%, and breath sounds are louder on the right. Perfusion is normal.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Change to a 3.5 mm cuffed tube",
          "Increase the ventilator rate",
          "Needle decompression of the left chest",
          "Suction the tube for secretions",
          "Withdraw the tube to 9 cm at the lips",
        ],
        correct: 4,
        explanation:
          "A common depth estimate at the lips is 3 times the tube size, which is 3 x 3.0 = 9 cm. At 12 cm the tip has probably entered the right main bronchus, which explains louder right-sided breath sounds and hypoxemia with a normal capnography trace. Withdrawing to 9 cm and listening again is the first step. A left pneumothorax is less likely with normal perfusion and a tube this deep, and decompression is for a patient who stays unwell after the tube is repositioned. Suction treats an obstruction, which would reduce breath sounds on both sides. A larger tube and a faster rate do not correct the position.",
        keyFeature: { topic: "airway", n: 6 },
        source: "pals2025",
      },
    ],
    sources: [WALLS_CH1, WALLS_CH26, TRAN, PALS2025],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-22",
    topic: "airway",
    alsoTopics: ["ems"],
    title: "Unexpected delivery in a small hospital",
    stem:
      "You are working in a rural hospital emergency department with no obstetric or pediatric service. A 24-year-old woman arrives in advanced labour and delivers a baby boy 5 minutes later. She had no prenatal care and believes she is about 33 weeks pregnant. The baby is limp and not breathing. He is dried and stimulated, and bag-mask ventilation is started with 30% oxygen. The mask is adjusted, the airway is suctioned and the pressure is increased until the chest rises with each breath. After 30 seconds of ventilation that moves the chest, his heart rate is still below 60/minute.",
    vitals: { pulse: "50/minute", o2sat: "58% on 30% oxygen by bag-mask", weight: "1.9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his resuscitation?",
        options: [
          "Chest compressions with mask ventilation",
          "Continue mask ventilation for 60 seconds",
          "Endotracheal intubation",
          "Normal saline 10 mL/kg bolus",
          "Umbilical venous epinephrine",
        ],
        correct: 2,
        explanation:
          "The Neonatal Resuscitation Program calls for an alternative airway, an endotracheal tube or a laryngeal mask, when the heart rate stays below 60/minute after 30 seconds of ventilation that moves the chest. A secure airway makes ventilation more reliable before compressions begin, and the oxygen is then raised to 100%. Compressions through a face mask make coordinated ventilation harder. Another 60 seconds of mask ventilation delays a needed step. Epinephrine comes after 60 seconds of compressions with good ventilation. Volume is for suspected blood loss, which this history does not suggest.",
        keyFeature: { topic: "airway", n: 4 },
        source: "nrp-l5",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following endotracheal tube sizes is most appropriate for this newborn?",
        options: ["2.5 mm", "3.0 mm", "3.5 mm", "4.0 mm", "4.5 mm"],
        correct: 1,
        explanation:
          "The Neonatal Resuscitation Program sizes the tube by weight or gestational age. A newborn of 1 to 2 kg at about 28 to 34 weeks takes a 3.0 mm tube, and he weighs about 1.9 kg at about 33 weeks. A 2.5 mm tube is for babies under 1 kg and would add resistance. A 3.5 mm tube is for babies over 2 kg and would be tight in this airway. The 4.0 mm and 4.5 mm tubes are too large for any preterm newborn.",
        keyFeature: { topic: "airway", n: 4 },
        source: "nrp-l5",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He is intubated and a CO2 detector changes colour. After 30 seconds of ventilation through the tube that moves the chest, his heart rate is 50/minute.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Chest compressions with 100% oxygen",
          "Epinephrine through the endotracheal tube",
          "Normal saline 10 mL/kg bolus",
          "Umbilical venous epinephrine",
          "Withdraw the tube by 1 cm",
        ],
        correct: 0,
        explanation:
          "A heart rate below 60/minute after 30 seconds of effective ventilation through a confirmed airway calls for chest compressions, coordinated 3 to 1 with ventilation, and oxygen raised to 100%. Epinephrine by either route is given only if the heart rate stays below 60/minute after 60 seconds of compressions with good ventilation. There is no history of blood loss to justify volume. The colour change and chest rise support tracheal placement, so withdrawing the tube is not the priority.",
        keyFeature: { topic: "airway", n: 4 },
        source: "nrp-l6",
      },
    ],
    sources: [NRP_L5, NRP_L6],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-23",
    topic: "airway",
    title: "Child choking at lunch",
    stem:
      "A 4-year-old girl is carried into the emergency department by her father after choking on a whole grape at lunch 5 minutes ago. He gave back blows and abdominal thrusts at home without success. She is now pale and floppy and has stopped crying. There are no breath sounds and no chest rise with her efforts. A difficult airway cart is at the bedside.",
    vitals: { pulse: "70/minute", o2sat: "62% on 15 L/minute by face mask", weight: "16 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate step in her management?",
        options: [
          "Abdominal thrusts in the supine position",
          "Blind finger sweep of the mouth",
          "Laryngoscopy with Magill forceps",
          "Needle cricothyroidotomy",
          "Rapid sequence intubation",
        ],
        correct: 2,
        explanation:
          "She has complete obstruction and is losing consciousness, and airway equipment is at the bedside. Direct laryngoscopy can show an object above or at the cords, and Magill forceps can remove it at once. Thrusts have already failed at home, and in a child who becomes unresponsive the lay sequence moves on to CPR, not more thrusts. A blind finger sweep can push the grape deeper. Rapid sequence intubation adds drugs and delay to a floppy child. Needle cricothyroidotomy comes only if the object cannot be seen or removed and oxygenation fails.",
        keyFeature: { topic: "airway", n: 1 },
        source: "walls-ch28",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Laryngoscopy shows no object above the cords. Bag-mask ventilation gives no chest rise. Her pulse is 58/minute. You decide to intubate her to reach the obstruction.",
        prompt: "Which of the following endotracheal tubes does the PALS cuffed tube formula give for her age?",
        options: ["3.5 mm cuffed", "4.0 mm cuffed", "4.5 mm cuffed", "5.0 mm cuffed", "5.5 mm cuffed"],
        correct: 2,
        explanation:
          "The PALS formula for a cuffed tube in a child aged 2 years or more is 3.5 + age in years divided by 4. For a 4-year-old that is 3.5 + 1 = 4.5 mm. A tube half a size smaller and half a size larger should also be at hand. The 4.0 mm tube is that smaller backup, and an older formula of 3.0 + age divided by 4 gives it, but it is not the PALS starting size. The 3.5 mm tube suits a child of about 1 to 2 years. The 5.0 mm and 5.5 mm cuffed tubes are sized for older children and risk subglottic injury.",
        keyFeature: { topic: "airway", n: 4 },
        source: "pals2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "The tube passes the cords but meets firm resistance in the trachea. Ventilation through it gives no chest rise and no capnography trace. O2 saturation is 48%.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Needle cricothyroidotomy with jet ventilation",
          "Push the object distally with the tube",
          "Repeat back blows and chest thrusts",
          "Scalpel cricothyrotomy",
          "Supraglottic airway insertion",
        ],
        correct: 1,
        explanation:
          "The obstruction lies below the cords, in the trachea. Advancing the tube pushes the grape into one main bronchus, usually the right, and the tube is then pulled back to its usual depth so the other lung can be ventilated. Cricothyroidotomy by needle or scalpel enters the airway above a tracheal obstruction and does not bypass it. A supraglottic airway sits above the cords. Back blows and thrusts have already failed and waste the time she has left.",
        keyFeature: { topic: "airway", n: 1 },
        source: "walls-ch28",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "After the tube is withdrawn to its usual depth, the left chest rises, capnography shows a waveform and O2 saturation climbs to 88%. Breath sounds are absent on the right.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Advance the tube into the right bronchus",
          "Chest X-ray and observation",
          "Extubate when saturation recovers",
          "Insert a right chest tube",
          "Urgent rigid bronchoscopy for removal",
        ],
        correct: 4,
        explanation:
          "Ventilating one lung is a bridge. The grape is still lodged in the right main bronchus and must be removed by rigid bronchoscopy, which is the definitive treatment for an airway foreign body in a child. Advancing the tube into the right bronchus would ventilate the blocked lung and lose the open one. Absent right breath sounds come from the obstruction, not a pneumothorax, so a chest tube does not help. Observation or early extubation leaves the object in place.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch28",
      },
    ],
    sources: [WALLS_CH28, PALS2025],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-24",
    topic: "airway",
    alsoTopics: ["sob"],
    title: "Weakness and trouble swallowing after an infection",
    stem:
      "A 68-year-old woman with myasthenia gravis presents to the emergency department with 2 days of worsening weakness, double vision and difficulty swallowing. Her urinary tract infection was treated with ciprofloxacin last week. She takes pyridostigmine 60 mg four times daily and prednisone 10 mg daily. She speaks in short phrases with a nasal voice and coughs weakly after sips of water. She cannot hold her head up. She is using her accessory muscles. Bedside spirometry shows a forced vital capacity of 1.1 L.",
    vitals: { temperature: "37.2°C oral", pulse: "104/minute", resp: "28/minute", bp: "142/80 mmHg", o2sat: "95% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this patient most strongly supports intubating her now?",
        options: [
          "Double vision for 2 days",
          "Forced vital capacity of 1.1 L",
          "O2 saturation of 95% on room air",
          "Pulse of 104/minute",
          "Recent ciprofloxacin use",
        ],
        correct: 1,
        explanation:
          "A forced vital capacity of 1.1 L in a 70 kg woman is 1100 / 70 = 15.7 mL/kg, below the 20 mL/kg threshold used for neuromuscular respiratory failure. With bulbar weakness and accessory muscle use, she is at risk of sudden decompensation. Her saturation of 95% is reassuring only on the surface, because hypoxemia is a late sign in neuromuscular failure. Double vision shows ocular involvement, not respiratory reserve. Ciprofloxacin may have triggered the crisis but does not decide the timing of intubation. Tachycardia is nonspecific.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch1",
      },
      {
        id: "q2",
        kind: "single",
        update: "The respiratory therapist suggests a trial of BiPAP instead of intubation.",
        prompt: "Which of the following features makes noninvasive ventilation unsafe for her?",
        options: [
          "Her age of 68 years",
          "Neck flexor weakness with head drop",
          "Prednisone 10 mg daily",
          "Pulse of 104/minute",
          "Swallowing and cough weakness",
        ],
        correct: 4,
        explanation:
          "She coughs weakly after sips of water and has a nasal voice, so she cannot protect her airway or clear secretions. A tight BiPAP mask on a patient with bulbar weakness risks aspiration and hides progression. Neck flexor weakness tracks with diaphragm weakness and signals the need for ventilatory support, but it is not by itself a reason to avoid a mask. Her age, her dose of prednisone and a pulse of 104/minute do not rule out noninvasive ventilation.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch9",
      },
      {
        id: "q3",
        kind: "single",
        update: "You decide to perform rapid sequence intubation with rocuronium after preoxygenation.",
        prompt: "Which of the following best describes how her myasthenia gravis is expected to change the effect of rocuronium?",
        options: [
          "Normal onset and duration",
          "Prolonged block at usual doses",
          "Resistance needing double the dose",
          "Shorter block than usual",
          "Unpredictable reversal by sugammadex",
        ],
        correct: 1,
        explanation:
          "Myasthenia gravis reduces the number of working acetylcholine receptors, so nondepolarizing blockers such as rocuronium act more strongly and last longer. A usual dose will give a prolonged block, so a lower dose can be used, and prolonged ventilation should be expected. Resistance is the pattern seen with succinylcholine, not rocuronium. The block is longer, not shorter. Sugammadex binds rocuronium directly and reverses it effectively in myasthenia gravis.",
        keyFeature: { topic: "airway", n: 5 },
        source: "mg",
      },
    ],
    sources: [WALLS_CH1, WALLS_CH9, MG],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-25",
    topic: "airway",
    title: "Rising weakness after a bout of diarrhea",
    stem:
      "A 34-year-old man presents to the emergency department with 5 days of tingling in his feet and 2 days of leg weakness that is now spreading to his arms. He had diarrhea 2 weeks ago. He is short of breath when lying flat. He has symmetric weakness, graded 3 of 5 in the legs and 4 of 5 in the arms, and his reflexes are absent. His neck flexion is weak. Bedside spirometry shows a forced vital capacity of 1.4 L. His negative inspiratory force is minus 26 cmH2O.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "26/minute", bp: "146/92 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan for this patient?",
        options: [
          "Admission with continuous oximetry",
          "BiPAP with repeat spirometry in 4 hours",
          "Early controlled intubation",
          "Intubation if O2 saturation drops",
          "IVIG and spirometry again tomorrow",
        ],
        correct: 2,
        explanation:
          "His forced vital capacity is 1400 / 80 = 17.5 mL/kg, below 20 mL/kg, and his inspiratory force of minus 26 cmH2O is weaker than minus 30 cmH2O. Both cross the thresholds, a vital capacity under 20 mL/kg and an inspiratory pressure weaker than minus 30 cmH2O, that predict respiratory failure in Guillain-Barre syndrome. Rapid progression, orthopnea and neck weakness add to the risk, so a controlled intubation now is safer than a crash intubation later. Oximetry and waiting for a saturation drop miss failure until it is late. BiPAP does not stop the progression. IVIG treats the disease but will not protect his breathing tonight.",
        keyFeature: { topic: "airway", n: 2 },
        source: "lawn",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following neuromuscular blockers is most appropriate for his intubation?",
        options: [
          "cisatracurium 8 mg IV",
          "rocuronium 40 mg IV",
          "rocuronium 100 mg IV",
          "succinylcholine 80 mg IV",
          "succinylcholine 120 mg IV",
        ],
        correct: 2,
        explanation:
          "Denervation in Guillain-Barre syndrome spreads acetylcholine receptors across the muscle membrane, and succinylcholine can then cause a sudden, dangerous rise in potassium, whatever the dose. Rocuronium at about 1.2 mg/kg, which is 1.2 x 80 = 96 mg rounded to 100 mg, gives fast intubating conditions without that risk. Rocuronium 40 mg is only 0.5 mg/kg and gives slow, incomplete relaxation. Cisatracurium at 0.1 mg/kg takes several minutes to work and is poorly suited to rapid sequence intubation.",
        keyFeature: { topic: "airway", n: 5 },
        source: "martyn",
      },
      {
        id: "q3",
        kind: "single",
        update: "During preparation his pulse varies between 58/minute and 124/minute, and his BP swings between 88/50 mmHg and 176/98 mmHg.",
        prompt: "Which of the following preparations is most important before induction in this patient?",
        options: [
          "Higher induction dose of propofol",
          "Labetalol for his blood pressure first",
          "Nasogastric tube before induction",
          "Topical lidocaine to the pharynx",
          "Vasopressor and atropine at the bedside",
        ],
        correct: 4,
        explanation:
          "Swinging heart rate and blood pressure show autonomic dysfunction, which is common in severe Guillain-Barre syndrome. Induction and positive pressure ventilation can then cause profound hypotension or bradycardia, so a vasopressor and atropine must be drawn up before induction. Treating the high readings with labetalol risks severe hypotension when the swing reverses. A larger propofol dose adds to the hypotension. A nasogastric tube and topical lidocaine do not address the main danger.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch33",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "He is intubated uneventfully. Three hours later his O2 saturation falls to 85%. Peak pressure has risen but plateau pressure is unchanged. A suction catheter stops 4 cm into the tube. Capnography shows a small waveform.",
        prompt: "Which of the following is the most likely cause of his deterioration?",
        options: [
          "Bronchospasm from the ventilator",
          "Displacement into the esophagus",
          "Right mainstem migration",
          "Secretions blocking the tube",
          "Tension pneumothorax",
        ],
        correct: 3,
        explanation:
          "A suction catheter that stops 4 cm into the tube shows that the tube itself is blocked, and a ventilated patient with neuromuscular weakness is prone to retained secretions. A rise in peak pressure with an unchanged plateau pressure is a resistance problem, which fits a blocked tube. Esophageal displacement would abolish the capnography waveform and let the catheter pass. A mainstem tube and a tension pneumothorax also let the catheter pass, and a pneumothorax raises plateau pressure. Bronchospasm raises resistance but would not stop the catheter.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls-ch10",
      },
    ],
    sources: [LAWN, MARTYN, WALLS_CH33, WALLS_CH10],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-26",
    topic: "airway",
    alsoTopics: ["infectious-diseases"],
    title: "Teenager with a weak cough and fever",
    stem:
      "A 15-year-old boy with Duchenne muscular dystrophy is brought to the emergency department by his parents with 3 days of fever and productive cough. He uses a wheelchair and uses BiPAP at night. He takes deflazacort. An echocardiogram last year showed an ejection fraction of 30%. His cough is weak and he cannot clear his secretions. He is drowsy but rousable. A chest X-ray shows left lower lobe consolidation. A venous blood gas shows pH 7.24 and pCO2 72 mmHg after 1 hour on his home BiPAP. He and his parents want full treatment, including intubation.",
    vitals: { temperature: "38.6°C oral", pulse: "128/minute", resp: "32/minute", bp: "104/62 mmHg", o2sat: "89% on BiPAP with 10 L/minute oxygen", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his respiratory management?",
        options: [
          "Chest physiotherapy and suction",
          "Higher BiPAP pressures for 1 hour",
          "Intubation and mechanical ventilation",
          "Mechanical cough assist device",
          "Nasal high-flow at 50 L/minute",
        ],
        correct: 2,
        explanation:
          "He is drowsy, cannot clear secretions and remains acidotic with a pCO2 of 72 mmHg after an hour of BiPAP. He also wants full treatment. Noninvasive support is failing, and a drowsy patient who cannot cough is at high risk of aspiration and arrest, so he needs intubation. Another hour of higher pressures delays a needed step. Cough assist and chest physiotherapy help secretion clearance but do not correct failing ventilation in a drowsy patient. High-flow nasal oxygen gives less ventilatory support than BiPAP.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch9",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following induction doses is most appropriate for this patient?",
        options: [
          "ketamine 40 mg IV",
          "ketamine 150 mg IV",
          "midazolam 10 mg IV",
          "propofol 80 mg IV",
          "propofol 120 mg IV",
        ],
        correct: 0,
        explanation:
          "His shock index is 128 / 104 = 1.2, and he has sepsis with an ejection fraction of 30%, so he is at high risk of post-intubation hypotension and arrest. Ketamine at about 1 mg/kg, 40 mg for 38 kg, keeps sympathetic tone better than other agents and is a reduced dose suited to his physiology. Ketamine 150 mg is about 4 mg/kg and can depress a failing heart once his catecholamine reserve is spent. Propofol causes vasodilation and myocardial depression. Midazolam 10 mg is a large, slow dose that also drops blood pressure.",
        keyFeature: { topic: "airway", n: 5 },
        source: "sam",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following neuromuscular blockers is most appropriate for his intubation?",
        options: [
          "rocuronium 20 mg IV",
          "rocuronium 45 mg IV",
          "succinylcholine 40 mg IV",
          "succinylcholine 60 mg IV",
          "No neuromuscular blocker",
        ],
        correct: 1,
        explanation:
          "Succinylcholine can cause rhabdomyolysis and hyperkalemic cardiac arrest in boys with Duchenne muscular dystrophy, so it is avoided at any dose. Rocuronium at about 1.2 mg/kg, 1.2 x 38 = 45.6 mg rounded to 45 mg, gives rapid intubating conditions. Rocuronium 20 mg is about 0.5 mg/kg and is too low for rapid sequence intubation. Intubating without a blocker lowers first pass success and adds the risk of aspiration in a patient with secretions.",
        keyFeature: { topic: "airway", n: 5 },
        source: "dmd-care-2018",
      },
    ],
    sources: [WALLS_CH9, SAM, DMD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-27",
    topic: "airway",
    alsoTopics: ["dvt-pe"],
    title: "Breathless and faint after knee surgery",
    stem:
      "A 58-year-old woman presents to the emergency department with 2 days of worsening shortness of breath and a near faint today. She had a total knee replacement 3 weeks ago. She is anxious and diaphoretic, and her jugular venous pressure is raised. POCUS shows a right ventricle larger than the left, with a flattened septum and a small, underfilled left ventricle. CT pulmonary angiography shows saddle pulmonary emboli. Alteplase is being prepared.",
    vitals: { temperature: "37.0°C oral", pulse: "124/minute", resp: "32/minute", bp: "88/56 mmHg", o2sat: "86% on 15 L/minute by nonrebreather mask", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to her oxygenation while thrombolysis is given?",
        options: [
          "Awake intubation with light sedation",
          "Immediate rapid sequence intubation",
          "Noninvasive ventilation with high PEEP",
          "Oxygen by high-flow nasal cannula",
          "Sedation to reduce oxygen demand",
        ],
        correct: 3,
        explanation:
          "Her failing right ventricle depends on preload and tolerates added afterload badly. Positive pressure ventilation raises intrathoracic pressure, cuts venous return and increases right ventricular afterload, and induction drugs lower systemic tone, so intubation can precipitate arrest. High-flow nasal oxygen improves oxygenation without positive pressure ventilation while alteplase works. Noninvasive ventilation with high PEEP carries the same hemodynamic risk as intubation. Awake intubation still ends in positive pressure ventilation. Sedation can drop her blood pressure and blunt her respiratory drive.",
        keyFeature: { topic: "airway", n: 4 },
        source: "sam",
      },
      {
        id: "q2",
        kind: "single",
        update: "Alteplase is given. Twenty minutes later she is obtunded, with O2 saturation 78% and BP 76/44 mmHg. You decide that she must be intubated.",
        prompt: "Which of the following is the most appropriate step immediately before induction?",
        options: [
          "Crystalloid bolus of 2 L",
          "milrinone 50 mcg/kg IV bolus",
          "nitroglycerin infusion for preload",
          "norepinephrine infusion first",
          "propofol infusion for sedation",
        ],
        correct: 3,
        explanation:
          "She is hypotensive with right ventricular failure, and the Society for Airway Management advises correcting hemodynamics before induction in a physiologically difficult airway. A norepinephrine infusion raises systemic pressure and perfusion of the right coronary artery, which helps the right ventricle through induction and the start of positive pressure. A 2 L crystalloid bolus overdistends the right ventricle and pushes the septum further into the left. Milrinone and nitroglycerin both lower blood pressure. A propofol infusion adds vasodilation and myocardial depression.",
        keyFeature: { topic: "airway", n: 5 },
        source: "sam",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is intubated with reduced dose induction and remains on norepinephrine. BP is 92/58 mmHg.",
        prompt: "Which of the following ventilator strategies is most appropriate for her right ventricular failure?",
        options: [
          "High PEEP of 15 cmH2O",
          "Higher tidal volume of 12 mL/kg",
          "Low tidal volume with permissive hypercapnia",
          "Normocapnia with modest PEEP",
          "Prolonged inspiratory time",
        ],
        correct: 3,
        explanation:
          "Hypoxemia, hypercapnia and acidosis all raise pulmonary vascular resistance, and high intrathoracic pressure raises right ventricular afterload. Normal pCO2 with modest PEEP avoids both problems. Permissive hypercapnia suits lung protection in ARDS but worsens pulmonary vasoconstriction here. High PEEP, large tidal volumes and a long inspiratory time all raise mean airway pressure and strain the right ventricle.",
        keyFeature: { topic: "airway", n: 4 },
        source: "sam",
      },
    ],
    sources: [SAM],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-28",
    topic: "airway",
    alsoTopics: ["pulmonary-edema"],
    title: "Frothy sputum in an older man with a heart murmur",
    stem:
      "An 81-year-old man presents to the emergency department with 6 hours of worsening breathlessness. He has known severe aortic stenosis, with a valve area of 0.7 cm2, and was awaiting valve replacement. He is coughing frothy pink sputum and has crackles to both apices. BiPAP was started 40 minutes ago. He has received furosemide 40 mg IV. He is now drowsy and hard to rouse. A venous blood gas shows pH 7.16 and pCO2 68 mmHg.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "34/minute", bp: "96/64 mmHg", o2sat: "86% on BiPAP with FiO2 1.0", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "furosemide 80 mg IV and continue BiPAP",
          "High-dose nitroglycerin infusion",
          "Increase BiPAP pressures",
          "Prepare for intubation now",
          "Switch to high-flow nasal oxygen",
        ],
        correct: 3,
        explanation:
          "He is drowsy and hard to rouse, with a pH of 7.16, a pCO2 of 68 mmHg and a saturation of 86% after 40 minutes of BiPAP, so noninvasive ventilation is failing and he can no longer protect his airway. He needs intubation. More furosemide or higher BiPAP pressures delay a needed step in a patient who is already obtunded. High-dose nitroglycerin can drop his pressure dangerously, because a fixed aortic valve cannot let cardiac output rise when preload and afterload fall. High-flow nasal oxygen gives less support than BiPAP.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch9",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following hemodynamic goals is most important during his induction and intubation?",
        options: [
          "Deliberate hypotension to systolic 80 mmHg",
          "Heart rate above 120/minute",
          "Lower afterload with a vasodilator",
          "Maintain systemic vascular resistance",
          "Reduce preload before induction",
        ],
        correct: 3,
        explanation:
          "With severe aortic stenosis the stroke volume is fixed, so blood pressure depends on systemic vascular resistance, and coronary perfusion of a thick left ventricle depends on diastolic pressure. Keeping vascular tone up, with a vasopressor running and a reduced induction dose, prevents the spiral of hypotension and ischemia. A vasodilator or deliberate hypotension removes that support. Tachycardia shortens diastole and worsens ischemia. Reducing preload lowers the filling that a stiff ventricle needs.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls-ch39",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "One minute after intubation his BP is 64/40 mmHg. Capnography shows a sustained waveform. Breath sounds are equal on both sides, and there is no rash or wheeze. The tube is at 23 cm at the teeth.",
        prompt: "Which of the following is the most likely cause of his hypotension?",
        options: [
          "Anaphylaxis to rocuronium",
          "Esophageal intubation",
          "Right mainstem intubation",
          "Tension pneumothorax",
          "Vasodilation and lower preload",
        ],
        correct: 4,
        explanation:
          "Induction drugs remove sympathetic tone and positive pressure ventilation reduces venous return, and a stenotic aortic valve cannot compensate for either. That is the commonest cause of hypotension just after intubation in a patient like him. A sustained capnography waveform excludes esophageal intubation. Equal breath sounds and a tube at 23 cm make mainstem intubation and tension pneumothorax unlikely. There is no rash or wheeze to suggest anaphylaxis. A vasopressor is the immediate treatment.",
        keyFeature: { topic: "airway", n: 6 },
        source: "sam",
      },
    ],
    sources: [WALLS_CH9, WALLS_CH39, SAM],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-29",
    topic: "airway",
    alsoTopics: ["infectious-diseases"],
    title: "Tiring on high-flow oxygen",
    stem:
      "A 57-year-old man presents to the emergency department with 5 days of fever, cough and worsening shortness of breath. He has hypertension treated with amlodipine. His height is 178 cm. A chest X-ray shows bilateral airspace disease. He speaks in short phrases. After 30 minutes of high-flow nasal oxygen at 60 L/minute with FiO2 1.0, his O2 saturation is 86% and he is tiring. He is alert and cooperative. You decide to intubate him.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "36/minute", bp: "132/78 mmHg", o2sat: "86% on high-flow nasal oxygen at 60 L/minute and FiO2 1.0", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most effective method to preoxygenate him before induction?",
        options: [
          "BiPAP with FiO2 1.0 for 3 minutes",
          "Nonrebreather mask at 15 L/minute",
          "Nonrebreather plus nasal prongs at 15 L/minute",
          "Simple face mask at 10 L/minute",
          "Venturi mask at 60% oxygen",
        ],
        correct: 0,
        explanation:
          "He has shunt physiology from bilateral airspace disease and is only 86% on high-flow oxygen, so extra oxygen alone will not raise his saturation much. Noninvasive positive pressure recruits collapsed alveoli and, in the PREOXI trial, reduced hypoxemia during emergency intubation compared with an oxygen mask. A nonrebreather mask, with or without nasal prongs, delivers oxygen without PEEP. A simple face mask and a Venturi mask give even lower oxygen concentrations.",
        keyFeature: { topic: "airway", n: 3 },
        source: "preoxi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following, used between induction and laryngoscopy, best reduces his risk of severe hypoxemia?",
        options: [
          "Cricoid pressure throughout",
          "Flat supine positioning",
          "succinylcholine instead of rocuronium",
          "Ventilation by bag-mask after induction",
          "No ventilation until the tube is placed",
        ],
        correct: 3,
        explanation:
          "In the PreVent trial, bag-mask ventilation between induction and laryngoscopy in critically ill adults halved the rate of severe hypoxemia without increasing aspiration. That matters in a patient who starts at 86% and will desaturate within seconds of apnea. Traditional apnea without ventilation removes that margin. Cricoid pressure can worsen the view and make mask ventilation harder. Lying flat reduces functional residual capacity compared with head elevation. Changing to succinylcholine does not lengthen the safe apnea time.",
        keyFeature: { topic: "airway", n: 3 },
        source: "prevent",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is intubated on the first attempt. Capnography shows a sustained waveform. You set up the ventilator.",
        prompt: "Which of the following is the most appropriate initial tidal volume for this patient?",
        options: ["220 mL", "440 mL", "540 mL", "720 mL", "900 mL"],
        correct: 1,
        explanation:
          "Lung protective ventilation uses 6 mL/kg of predicted body weight, which depends on height and sex, not actual weight. For a man 178 cm tall, predicted body weight is 50 + 0.91 x (178 - 152.4) = 73.3 kg, and 6 x 73.3 = 440 mL. The 540 mL option is 6 mL/kg of his actual weight of 90 kg. The 720 mL and 900 mL options are 8 and 10 mL/kg of actual weight and risk ventilator injury. The 220 mL option is 3 mL/kg of predicted weight and will cause severe hypercapnia.",
        keyFeature: { topic: "airway", n: 4 },
        source: "ardsnet",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Thirty minutes later, with a rate of 16/minute, an arterial blood gas shows pH 7.21, pCO2 58 mmHg and pO2 62 mmHg. End-tidal CO2 is 34 mmHg. Plateau pressure is 26 cmH2O.",
        prompt: "Which of the following ventilator changes is most appropriate now?",
        options: [
          "Add sodium bicarbonate 100 mmol IV",
          "Increase tidal volume to 8 mL/kg",
          "Lower PEEP to reduce dead space",
          "Raise the set respiratory rate",
          "No change to the settings",
        ],
        correct: 3,
        explanation:
          "The end-tidal CO2 of 34 mmHg underestimates his arterial pCO2 of 58 mmHg by 24 mmHg, because injured lungs add dead space, so the blood gas must guide ventilation. A pH of 7.21 is below the target of 7.30, and the ARDS Network protocol raises the rate first while keeping tidal volume at 6 mL/kg. Raising tidal volume gives up lung protection. Lowering PEEP would worsen his oxygenation. Bicarbonate does not fix a respiratory acidosis, and leaving the settings unchanged accepts avoidable acidosis.",
        keyFeature: { topic: "airway", n: 6 },
        source: "ardsnet",
      },
    ],
    sources: [PREOXI, PREVENT, ARDSNET],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-30",
    topic: "airway",
    alsoTopics: ["tox", "delirium-agitation"],
    title: "Combative man who will not keep his mask on",
    stem:
      "A 31-year-old man is brought to the emergency department by paramedics after smoking methamphetamine. His partner reports 2 days of cough and fever. He is combative, pulls off every oxygen mask and does not follow commands. His skin is hot and sweaty. He has crackles over the right lower chest. No IV medications have been given, and one IV line is in place. You plan to intubate him.",
    vitals: { temperature: "39.4°C rectal", pulse: "138/minute", resp: "34/minute", bp: "162/94 mmHg", o2sat: "82% on 15 L/minute by nonrebreather mask", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following medications is most appropriate to allow effective preoxygenation before paralysis?",
        options: [
          "dexmedetomidine 75 mcg IV",
          "fentanyl 100 mcg IV",
          "haloperidol 10 mg IV",
          "ketamine 75 mg IV",
          "midazolam 10 mg IV",
        ],
        correct: 3,
        explanation:
          "Ketamine at about 1 mg/kg, 75 mg for 75 kg, gives dissociation within a minute while keeping his respiratory drive and airway reflexes. He can then tolerate a mask for several minutes of preoxygenation before the paralytic, which is delayed sequence intubation. Midazolam 10 mg can depress his breathing and may not calm him. Haloperidol acts slowly and does not reliably settle stimulant agitation in time. Fentanyl 100 mcg does not treat agitation and can cause apnea. A dexmedetomidine bolus acts slowly and can cause bradycardia.",
        keyFeature: { topic: "airway", n: 5 },
        source: "dsi",
      },
      {
        id: "q2",
        kind: "single",
        update: "After ketamine he is calm, breathing on his own and tolerates a mask. O2 saturation is 88% on a nonrebreather mask.",
        prompt: "Which of the following is the most appropriate next step before giving the paralytic?",
        options: [
          "BiPAP until saturation plateaus",
          "Give the paralytic immediately",
          "Insert a nasogastric tube",
          "Obtain an arterial blood gas",
          "Repeat ketamine to deepen sedation",
        ],
        correct: 0,
        explanation:
          "The point of the ketamine dose is to allow preoxygenation. With his saturation only 88%, noninvasive positive pressure, continued until the saturation stops rising, gives the best oxygen reserve before the paralytic. Giving the paralytic now wastes the window that ketamine created. More ketamine is not needed while he is calm. A nasogastric tube and a blood gas do not improve oxygen reserve and delay the plan.",
        keyFeature: { topic: "airway", n: 3 },
        source: "dsi",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 3 minutes of BiPAP his O2 saturation plateaus at 95%. His potassium and creatine kinase results are still pending.",
        prompt: "Which of the following neuromuscular blockers is most appropriate for his intubation?",
        options: [
          "rocuronium 40 mg IV",
          "rocuronium 90 mg IV",
          "succinylcholine 110 mg IV",
          "succinylcholine 150 mg IV",
          "No paralytic after ketamine",
        ],
        correct: 1,
        explanation:
          "Methamphetamine toxicity with agitation and a temperature of 39.4°C puts him at risk of rhabdomyolysis and hyperkalemia, and his potassium is not yet known, so succinylcholine at any dose could raise potassium further. Rocuronium at 1.2 mg/kg, 1.2 x 75 = 90 mg, gives rapid intubating conditions without that risk. Rocuronium 40 mg is only about 0.5 mg/kg and acts slowly. Ketamine alone does not give reliable intubating conditions and leaves him able to fight the tube.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls-ch22",
      },
      {
        id: "q4",
        kind: "single",
        update: "He is intubated on the first attempt. He needs a CT of the head and chest, which means moving him twice.",
        prompt: "Which of the following is the best way to detect tube displacement during his transfers?",
        options: [
          "Chest X-ray after each move",
          "Cuff pressure checks each hour",
          "Pulse oximetry alone",
          "Repeated auscultation of the chest",
          "Waveform capnography throughout",
        ],
        correct: 4,
        explanation:
          "Continuous waveform capnography shows displacement within a breath or two, because the trace disappears when the tube leaves the trachea. Pulse oximetry falls only after the oxygen reserve is used up, which may be minutes later. Auscultation is unreliable in a noisy CT suite and misses early displacement. A chest X-ray after each move is slow and shows only the moment it was taken. Cuff pressure checks do not detect a tube that has moved.",
        keyFeature: { topic: "airway", n: 6 },
        source: "cafg1",
      },
    ],
    sources: [DSI, WALLS_CH22, CAFG1],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-31",
    topic: "airway",
    alsoTopics: ["anaphylaxis"],
    title: "Child with hives and a hoarse cry",
    stem:
      "A 5-year-old boy is brought to the emergency department by his mother 20 minutes after eating a cookie that contained peanuts. He has a known peanut allergy. He has hives over his trunk, swollen lips and a hoarse cry, and he is drooling. He has soft inspiratory stridor at rest and wheeze in both lungs. He vomited once. He has not received epinephrine.",
    vitals: { temperature: "37.0°C tympanic", pulse: "156/minute", resp: "40/minute", bp: "76/44 mmHg", o2sat: "91% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication and dose for this child?",
        options: [
          "epinephrine 1 mg IM",
          "epinephrine 0.5 mg IM",
          "epinephrine 0.2 mg IM",
          "epinephrine 0.01 mg IM",
          "epinephrine 0.2 mg IV push",
        ],
        correct: 2,
        explanation:
          "Stridor, wheeze, hypotension and hives after peanut exposure are anaphylaxis, and IM epinephrine is the first treatment. The dose is 0.01 mg/kg of the 1 mg/mL solution, so 0.01 x 20 kg = 0.2 mg, into the anterolateral thigh. The 0.01 mg option confuses the per kilogram dose with the total dose. The 0.5 mg option is the adult maximum and 1 mg is five times his dose. An undiluted IV push of 0.2 mg risks arrhythmia and severe hypertension, and IV epinephrine is given as a titrated infusion when IM doses fail.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "He receives two doses of IM epinephrine and an epinephrine infusion is started. Ten minutes later his stridor is louder, his voice is muffled and his O2 saturation is 88% on a nonrebreather mask.",
        prompt: "Which of the following is the most appropriate airway action now?",
        options: [
          "dexamethasone 12 mg IV and observe",
          "Nebulized salbutamol and reassess",
          "Needle cricothyroidotomy now",
          "Prompt intubation by a skilled operator",
          "Trial of nebulized epinephrine",
        ],
        correct: 3,
        explanation:
          "Stridor that worsens despite IM and IV epinephrine, a muffled voice and falling saturation show progressive upper airway swelling. Every minute of delay makes intubation harder, so the most skilled available operator should secure the airway now. Steroids act over hours and do not treat the swelling in time. Nebulized salbutamol treats wheeze, not laryngeal edema. Nebulized epinephrine can be an adjunct but does not replace a definitive airway when systemic epinephrine has failed. Needle cricothyroidotomy is a rescue for failed oxygenation, not the first plan.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch37",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following preparations are most appropriate for intubating this child?",
        select: 2,
        options: [
          "Blind nasotracheal intubation kit",
          "Cricoid pressure during induction",
          "ENT surgeon at the bedside",
          "Larger tube to limit airway resistance",
          "Lying flat for preoxygenation",
          "Nasal route for the tube",
          "propofol 3 mg/kg IV for induction",
          "Smaller tubes than the age formula",
        ],
        correct: [2, 7],
        explanation:
          "Laryngeal swelling narrows the glottis, so tubes half a size or more below the age formula should be ready, alongside the usual size. A surgeon able to perform an emergency surgical airway should be at the bedside, because a swollen airway can defeat both intubation and mask ventilation. A larger tube will not pass the swollen glottis. Propofol at 3 mg/kg would worsen his shock. Lying flat worsens obstruction and preoxygenation, and cricoid pressure can distort an already narrow view. Blind and nasal approaches traumatize swollen tissue.",
        keyFeature: { topic: "airway", n: 3 },
        source: "walls-ch37",
      },
    ],
    sources: [WAO, WALLS_CH37],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-32",
    topic: "airway",
    alsoTopics: ["sob"],
    title: "Young woman who can no longer lie flat",
    stem:
      "A 19-year-old woman presents to the emergency department with 3 weeks of cough, night sweats and weight loss, and 2 days of worsening shortness of breath. She can no longer lie flat and has been sleeping sitting in a chair. Her face looks puffy each morning. She has no past medical history. She is sitting upright, and soft stridor appears when she leans back. There are firm, nontender nodes above both clavicles. A chest X-ray shows a large anterior mediastinal mass with narrowing of the trachea.",
    vitals: { temperature: "37.8°C oral", pulse: "116/minute", resp: "26/minute", bp: "124/78 mmHg", o2sat: "94% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features in this patient predict a high risk of collapse under general anesthesia?",
        select: 3,
        options: [
          "Age of 19 years",
          "Cough for 3 weeks",
          "Facial puffiness each morning",
          "Low-grade fever",
          "Night sweats",
          "Recent weight loss",
          "Stridor when leaning back",
          "Supraclavicular lymph nodes",
          "Unable to lie flat",
        ],
        correct: [2, 6, 8],
        explanation:
          "Orthopnea, stridor that appears with a change of position and signs of superior vena cava obstruction, such as morning facial swelling, predict airway or cardiovascular collapse when an anterior mediastinal mass is anesthetized. They show that the mass already compresses the airway or great vessels and that only her own muscle tone and posture keep them open. Night sweats, fever, weight loss and supraclavicular nodes point to lymphoma but do not grade the compression. Her age and the length of her cough do not predict collapse.",
        keyFeature: { topic: "airway", n: 3 },
        source: "mediastinal",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following principles should guide her airway management?",
        options: [
          "Deep sedation to allow CT imaging",
          "Lie her flat for preoxygenation",
          "Paralysis to improve intubating conditions",
          "Preserve her spontaneous breathing",
          "Rapid sequence intubation now",
        ],
        correct: 3,
        explanation:
          "Spontaneous breathing keeps negative intrathoracic pressure and muscle tone, which hold the compressed trachea and vessels open. Sedation, paralysis and positive pressure can all let the mass collapse the airway beyond the tip of an endotracheal tube, where no laryngoscope or surgical airway can reach. She should stay upright, imaging should be done in her position of comfort, and tissue diagnosis should be sought under local anesthesia. Rapid sequence intubation, paralysis, deep sedation and lying flat each remove the protection she relies on.",
        keyFeature: { topic: "airway", n: 4 },
        source: "mediastinal",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "She is given midazolam 2 mg IV by another team for anxiety and reclines for a procedure. She suddenly cannot move air, and bag-mask ventilation gives no chest rise.",
        prompt: "Which of the following is the most appropriate immediate action?",
        options: [
          "Give rocuronium and intubate",
          "Needle decompression of the chest",
          "Reposition her upright or lateral",
          "Scalpel cricothyrotomy",
          "Supraglottic airway insertion",
        ],
        correct: 2,
        explanation:
          "The obstruction is inside the chest, caused by the mass pressing on the trachea once she lost tone and reclined. Sitting her up or turning her to the side or prone can shift the mass off the airway and restore ventilation, while rigid bronchoscopy is sought as the next step. A cricothyrotomy and a supraglottic airway both enter the airway above the obstruction. Paralysis removes the last muscle tone holding the airway open. There is no sign of pneumothorax to justify decompression.",
        keyFeature: { topic: "airway", n: 1 },
        source: "mediastinal",
      },
      {
        id: "q4",
        kind: "single",
        update: "Rigid bronchoscopy and cardiopulmonary bypass teams are called. Her breathing worsens and she will need a secure airway.",
        prompt: "Which of the following approaches to intubation is safest for her?",
        options: [
          "Awake flexible intubation, no paralysis",
          "Inhaled induction then paralysis",
          "Ketamine then rocuronium after mask check",
          "Propofol and rocuronium rapid sequence",
          "Sedation with midazolam and fentanyl",
        ],
        correct: 0,
        explanation:
          "Keeping her awake and breathing on her own preserves the tone and negative pressure that hold the airway open. A flexible scope lets the tube be placed under direct view, ideally beyond the narrowed segment, with rigid bronchoscopy and bypass teams ready. Any plan that ends in paralysis, including a mask check first, can let the mass collapse the airway below the tube. Propofol and rocuronium do so at once. Midazolam and fentanyl sedation reduces tone and breathing before the airway is secured.",
        keyFeature: { topic: "airway", n: 5 },
        source: "mediastinal",
      },
    ],
    sources: [MEDIASTINAL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-33",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Older man with a stiff neck after a fall",
    stem:
      "A 76-year-old man is brought to the emergency department by ambulance after falling forward down 3 stairs and striking his forehead. He has ankylosing spondylitis with a fixed, flexed neck and wears a soft collar at home. He now has new neck pain and tingling in both hands. He is alert and speaking. There is a forehead abrasion. Paramedics padded under his head to support his usual posture. His mouth opens 2 fingerbreadths. CT shows a fracture through the C6 vertebral body that crosses all three columns.",
    vitals: { temperature: "36.4°C oral", pulse: "62/minute", resp: "22/minute", bp: "108/64 mmHg", o2sat: "93% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to restrict motion of his cervical spine?",
        options: [
          "Padding to hold his usual flexed posture",
          "Rigid collar in neutral alignment",
          "Sandbags with the head flat",
          "Traction to straighten the neck",
          "No spinal motion restriction",
        ],
        correct: 0,
        explanation:
          "In ankylosing spondylitis the spine is fused and brittle, and a fracture behaves like a break in a long bone. Forcing the neck into neutral with a rigid collar, flat positioning or traction can displace the fracture and injure the cord. The spine should be supported in the flexed posture he had before the fall, as the paramedics did with padding. A three-column fracture with new hand tingling is unstable, so he needs motion restriction.",
        keyFeature: { topic: "airway", n: 4 },
        source: "as-collar",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings in this patient predict difficult laryngoscopy?",
        select: 2,
        options: [
          "Abrasion on the forehead",
          "Alert and speaking clearly",
          "Fixed flexion of the neck",
          "His age of 76 years",
          "Mouth opens 2 fingerbreadths",
          "Resting pulse of 62/minute",
          "Tingling in both hands",
          "Wears a soft collar at home",
        ],
        correct: [2, 4],
        explanation:
          "Laryngoscopy needs head and neck movement to align the view, and a fixed flexion deformity allows none. A mouth opening of 2 fingerbreadths is less than the three expected for laryngoscopy and limits the space for a blade. His age and the forehead abrasion do not affect the view. Hand tingling points to cord injury and a pulse of 62/minute may reflect neurogenic effects, but neither predicts a hard laryngoscopy. His soft collar reflects the deformity already counted, and being alert and speaking is reassuring.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "single",
        update: "Over the next 2 hours his breathing becomes shallow and his forced vital capacity falls to 0.9 L. He remains alert and cooperative. You decide to intubate him.",
        prompt: "Which of the following is the most appropriate intubation technique for this patient?",
        options: [
          "Awake flexible bronchoscopic intubation",
          "Blind nasotracheal intubation",
          "Direct laryngoscopy after induction",
          "Supraglottic airway as the definitive airway",
          "Video laryngoscopy with neck extension",
        ],
        correct: 0,
        explanation:
          "A fixed flexed neck, a small mouth opening and an unstable fracture predict difficult laryngoscopy and make neck movement dangerous. He is alert and cooperative, so an awake flexible scope can pass the tube without moving his neck, keeps him breathing and allows a neurologic check after intubation. Direct laryngoscopy needs alignment that his spine cannot give. Extension for video laryngoscopy could displace the fracture. A supraglottic airway is not a definitive airway for a patient with failing ventilation. Blind nasal intubation often fails and repeated attempts cause bleeding.",
        keyFeature: { topic: "airway", n: 3 },
        source: "das-ati",
      },
      {
        id: "q4",
        kind: "single",
        update: "The tube is passed with the awake flexible scope and capnography confirms tracheal placement. He is still awake.",
        prompt: "Which of the following should be done before he is given deeper sedation?",
        options: [
          "Chest X-ray before any sedation",
          "Cuff pressure check at 40 cmH2O",
          "Deep sedation right after passage",
          "Hand movement and sensation check",
          "Remove the padding under his head",
        ],
        correct: 3,
        explanation:
          "One advantage of awake intubation in an unstable spine is that the neurologic examination can be repeated after the tube is placed. Checking movement and sensation in his hands shows whether the cord injury has changed before sedation hides it. Removing the padding would force the fused neck toward neutral. A chest X-ray is useful but need not delay a brief examination. A cuff pressure of 40 cmH2O is too high. Deep sedation right away loses the chance to examine him.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch34",
      },
    ],
    sources: [ASCOLLAR, CAFG2, DASATI, WALLS_CH34],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-34",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Beaten in the face with a bat",
    stem:
      "A 23-year-old man is brought to the emergency department by ambulance after being struck repeatedly in the face with a baseball bat. He is agitated, sitting forward and spitting blood. His upper jaw and midface move when the upper teeth are grasped. Both sides of the mandible are tender and mobile. Blood is pooling in the back of his pharynx despite suction. Clear fluid mixed with blood drips from his nose. GCS is 13. A cervical collar is in place.",
    vitals: { pulse: "112/minute", resp: "28/minute", bp: "138/86 mmHg", o2sat: "92% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan for this patient?",
        options: [
          "Awake flexible bronchoscopy through the nose",
          "Bag-mask ventilation until CT",
          "Blind nasotracheal intubation",
          "Rapid sequence intubation with a double setup",
          "Supraglottic airway after sedation and induction",
        ],
        correct: 3,
        explanation:
          "He is agitated, with blood pooling in the pharynx and an unstable midface, so he needs a definitive airway now and cannot cooperate with an awake technique. Rapid sequence intubation with suction and video laryngoscopy, and with the neck prepared for a scalpel cricothyrotomy, is the safest plan. Blood obscures a flexible scope, and the nasal route is dangerous with midface fractures and clear fluid from the nose. Bag-mask ventilation fails with an unstable midface and pushes blood into the lungs. A supraglottic airway does not protect against aspiration of ongoing bleeding.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings makes the nasal route for any tube most dangerous in this patient?",
        options: [
          "Agitation and spitting blood",
          "Bilateral mobile mandible",
          "Glasgow Coma Scale of 13",
          "Nasal leak of clear fluid",
          "Pulse of 112/minute",
        ],
        correct: 3,
        explanation:
          "Clear fluid mixed with blood from the nose suggests a cerebrospinal fluid leak from a fracture of the skull base, and a nasal tube can pass through the cribriform plate into the cranial vault. With a mobile midface, the same applies to nasogastric tubes and nasal airways. A mobile mandible, agitation and blood in the mouth make oral intubation harder but do not make the nose more dangerous. His GCS and pulse do not affect the choice of route.",
        keyFeature: { topic: "airway", n: 4 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following should be ready at the bedside before induction?",
        select: 2,
        options: [
          "Nasal flexible bronchoscope",
          "Nasogastric tube",
          "Nasopharyngeal airway",
          "Needle and jet ventilator",
          "Scalpel, bougie and tube kit",
          "Topical nasal decongestant",
          "Two large-bore rigid suctions",
          "Uncuffed endotracheal tube",
        ],
        correct: [4, 6],
        explanation:
          "Blood pooling despite suction calls for two large-bore rigid suction catheters, one to lead the laryngoscope and one to clear rebleeding. A scalpel, bougie and cuffed tube kit, with the cricothyroid membrane marked, is the rescue if intubation and oxygenation fail. The nasal bronchoscope, nasopharyngeal airway, nasogastric tube and decongestant all use a route that is dangerous with a possible skull base fracture. Needle jet ventilation is not the preferred adult rescue. An uncuffed tube does not protect the lungs from blood.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [ATLS, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-35",
    topic: "airway",
    alsoTopics: ["asthma-copd"],
    title: "Drowsy care home resident with a cough",
    stem:
      "An 84-year-old man is brought to the emergency department by ambulance from a care home with 2 days of fever, cough and increasing drowsiness. He has COPD and uses home oxygen at 2 L/minute. He has no teeth, and his dentures were left at the home. He has a full beard. He is thin, and he responds only to pain. His advance directive, confirmed by his daughter, requests full treatment including intubation. A venous blood gas shows pH 7.14, pCO2 92 mmHg and HCO3 30 mmol/L.",
    vitals: { temperature: "38.4°C oral", pulse: "108/minute", resp: "30/minute", bp: "126/70 mmHg", o2sat: "84% on 4 L/minute by nasal prongs", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings in this patient predict difficult bag-mask ventilation?",
        select: 4,
        options: [
          "Age of 84 years",
          "COPD on home oxygen",
          "Cough for 2 days",
          "Edentulous mouth",
          "Fever of 38.4°C",
          "Full beard",
          "Low body weight",
          "Responds only to pain",
        ],
        correct: [0, 1, 3, 5],
        explanation:
          "His beard breaks the mask seal, and without teeth his cheeks collapse so the mask cannot seal against them. Age over 55 years and high airway resistance from COPD also predict difficult bag-mask ventilation, and he is 84. Obesity predicts difficult mask ventilation, but low body weight does not. Fever, a short cough and his level of consciousness do not affect mask ventilation.",
        keyFeature: { topic: "airway", n: 3 },
        source: "walls-ch2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate backup if bag-mask ventilation fails after induction?",
        options: [
          "Blind nasotracheal intubation",
          "Nasal high-flow oxygen alone",
          "Needle cricothyroidotomy",
          "Oxygen by nonrebreather mask",
          "Second-generation supraglottic airway",
        ],
        correct: 4,
        explanation:
          "A supraglottic airway does not depend on a face mask seal, so it works well in a patient with no teeth and a beard, and a second-generation device adds a gastric drain. It is the next step in the Canadian Airway Focus Group sequence when face mask ventilation fails. Nasal high-flow oxygen and a nonrebreather mask do not ventilate an apneic patient. Blind nasal intubation is slow and unreliable. Front of neck access follows only if a supraglottic airway also fails, and a scalpel technique is preferred over a needle in adults.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He is ventilated at a rate of 24/minute and a tidal volume of 450 mL. Thirty minutes later his BP is 84/50 mmHg and expiratory flow does not reach zero between breaths. An arterial gas shows pH 7.52, pCO2 38 mmHg and HCO3 30 mmol/L.",
        prompt: "Which of the following ventilator changes is most appropriate for this patient?",
        options: [
          "Increase PEEP to 15 cmH2O",
          "Increase tidal volume to 600 mL",
          "Raise the rate to 30/minute",
          "Reduce the set respiratory rate",
          "Shorten the expiratory time",
        ],
        correct: 3,
        explanation:
          "A rate of 24/minute leaves too little time to exhale through obstructed airways, so gas is trapped, as shown by expiratory flow that does not reach zero. The trapped gas raises intrathoracic pressure and drops his blood pressure. His blood gas also shows alkalemia, a pH of 7.52, because his pCO2 of 38 mmHg is far below his usual level, which his HCO3 of 30 mmol/L suggests is chronically high. A lower rate lengthens expiration and allows his pCO2 to rise toward baseline. A faster rate, a larger tidal volume or a shorter expiratory time all worsen air trapping. High PEEP adds to intrathoracic pressure.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls-ch36",
      },
    ],
    sources: [WALLS_CH2, CAFG1, WALLS_CH36],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-36",
    topic: "airway",
    alsoTopics: ["arrhythmia"],
    title: "Collapse at a hockey game",
    stem:
      "A 63-year-old man is brought to the emergency department by paramedics in cardiac arrest. He collapsed while watching a hockey game, and a bystander started CPR within a minute. An automated external defibrillator delivered two shocks. Paramedics have been ventilating him with a bag-mask and an oral airway, with good chest rise, at 30 compressions to 2 breaths. On arrival the monitor shows ventricular fibrillation, and a third shock is given. He weighs about 95 kg.",
    vitals: { weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important principle when an advanced airway is placed in this patient?",
        options: [
          "Airway placement during ongoing compressions",
          "Cricoid pressure during bag-mask ventilation",
          "Intubate before the next shock",
          "Pause CPR to auscultate after intubation",
          "Ventilate at 20 breaths per minute",
        ],
        correct: 0,
        explanation:
          "In a witnessed ventricular fibrillation arrest, survival depends most on high-quality compressions and early defibrillation. Bag-mask ventilation is already working, so an advanced airway should be placed without interrupting compressions, and never at the cost of a shock. Pausing CPR to listen for breath sounds wastes perfusion time and is less reliable than waveform capnography. Once an advanced airway is in, ventilation is 1 breath every 6 seconds, and 20 breaths per minute raises intrathoracic pressure and cuts venous return. Routine cricoid pressure is not recommended.",
        keyFeature: { topic: "airway", n: 4 },
        source: "als2025",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "A tube is placed with a video laryngoscope while compressions continue. The capnography monitor shows no waveform and an end-tidal CO2 of 2 mmHg. Faint breath sounds are heard over both sides of the chest.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Accept the tube because breath sounds are heard",
          "Increase the ventilation rate",
          "Order a chest X-ray to confirm position",
          "Remove the tube and resume bag-mask ventilation",
          "Wait for circulation before confirming placement",
        ],
        correct: 3,
        explanation:
          "Minutes into a witnessed arrest with good compressions, a tube in the trachea should give a capnography waveform. No waveform means the tube is in the esophagus until proven otherwise, so it should come out and bag-mask ventilation should resume. Breath sounds heard over the chest can be transmitted from the stomach. A chest X-ray is slow and cannot exclude esophageal placement. A faster ventilation rate only inflates the stomach. Waiting leaves him without ventilation.",
        keyFeature: { topic: "airway", n: 6 },
        source: "als2025",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The tube is replaced and shows a waveform with an end-tidal CO2 of 12 mmHg during compressions. No medications are given over the next 4 minutes. The end-tidal CO2 then rises abruptly to 42 mmHg.",
        prompt: "Which of the following is the most likely explanation for the rise in end-tidal CO2?",
        options: [
          "Circulation has returned",
          "Displacement of the tube",
          "Hypoventilation with CO2 retention",
          "Improved compression depth",
          "Tension pneumothorax",
        ],
        correct: 0,
        explanation:
          "End-tidal CO2 during CPR reflects pulmonary blood flow. An abrupt rise from 12 to 42 mmHg, with no bicarbonate given, is a reliable early sign of return of spontaneous circulation, and a pulse check is due. Displacement of the tube would make the trace fall or disappear. Better compressions raise the value modestly, not to a near normal level. Hypoventilation raises CO2 gradually, and a tension pneumothorax reduces cardiac output and end-tidal CO2.",
        keyFeature: { topic: "airway", n: 6 },
        source: "als2025",
      },
      {
        id: "q4",
        kind: "single",
        update: "Circulation returns. He remains unresponsive and ventilated by hand through the endotracheal tube.",
        prompt: "Which of the following best describes the ventilation he needed during CPR once the tube was in place?",
        options: [
          "1 breath every 3 seconds",
          "1 breath every 6 seconds",
          "1 breath every 12 seconds",
          "2 breaths after each 15 compressions",
          "2 breaths after each 30 compressions",
        ],
        correct: 1,
        explanation:
          "Once an advanced airway is in place during CPR, compressions continue without pauses and ventilation is given at 1 breath every 6 seconds, which is 10 breaths per minute. One breath every 3 seconds is 20 per minute, which raises intrathoracic pressure and cuts venous return. One breath every 12 seconds underventilates. Pausing for 2 breaths after 30 compressions is the sequence before an advanced airway, and 15 to 2 is the two-rescuer ratio for children.",
        keyFeature: { topic: "airway", n: 4 },
        source: "als2025",
      },
    ],
    sources: [ALS2025],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-37",
    topic: "airway",
    alsoTopics: ["suicide-risk"],
    title: "Cut down from a rope",
    stem:
      "A 42-year-old man is brought to the emergency department by ambulance after being found hanging by a rope from a basement beam. His brother cut him down within about 2 minutes, and he was breathing when paramedics arrived. He has a ligature mark across the upper neck, petechiae on his face and a hoarse voice. He has pain on swallowing and crepitus over the front of the neck. GCS is 14 (E4 V4 M6). He is awake and cooperative but slightly confused. A cervical collar is in place.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "24/minute", bp: "146/88 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly indicates that he needs early airway control?",
        options: [
          "Crepitus and a hoarse voice",
          "Facial petechiae",
          "Glasgow Coma Scale of 14",
          "Ligature mark on the upper neck",
          "Pulse of 104/minute",
        ],
        correct: 0,
        explanation:
          "Hoarseness, painful swallowing and crepitus over the front of the neck are signs of laryngeal or tracheal injury, and swelling around that injury can close the airway over the next hours. Early controlled intubation is safer than waiting for stridor. Facial petechiae come from venous congestion and are common after hanging. A GCS of 14 is near normal. The ligature mark shows the mechanism, not the airway injury, and tachycardia is nonspecific.",
        keyFeature: { topic: "airway", n: 2 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate intubation technique for this patient?",
        options: [
          "Blind nasotracheal intubation",
          "Flexible scope intubation while awake",
          "Observation with repeat examinations",
          "Rapid sequence intubation with a bougie",
          "Supraglottic airway as the definitive airway",
        ],
        correct: 1,
        explanation:
          "A suspected laryngeal injury can be made worse, or completely disrupted, by a tube or bougie passed without seeing the path. He is awake and cooperative, so an awake flexible scope can show the injury and guide the tube beyond it while he keeps breathing, with a surgeon ready for a tracheostomy. Rapid sequence intubation with a bougie risks a false passage through a torn larynx. Blind nasal intubation has the same risk. A supraglottic airway sits on the injured larynx. Observation leaves an airway that may swell shut.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "single",
        update: "The scope passes a small mucosal tear just below the cords, and the tube is advanced over it. Capnography shows a waveform.",
        prompt: "Which of the following best confirms that the tube tip lies in the trachea beyond the injury?",
        options: [
          "Bilateral breath sounds",
          "Carina seen through the scope",
          "Chest X-ray tube position",
          "Condensation in the tube",
          "Rising O2 saturation",
        ],
        correct: 1,
        explanation:
          "Capnography confirms that the tube is in the airway, but only direct sight of tracheal rings and the carina through the scope, as it is withdrawn through the tube, shows that the tip lies beyond the tear. The Difficult Airway Society calls this pairing of capnography and visual confirmation a two-point check after awake intubation. Breath sounds, condensation and a rising saturation cannot locate the tip relative to the injury. A chest X-ray shows depth but not whether the tip has passed the tear.",
        keyFeature: { topic: "airway", n: 6 },
        source: "das-ati",
      },
    ],
    sources: [ATLS, CAFG2, DASATI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-38",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Swallowed drain cleaner",
    stem:
      "A 26-year-old woman is brought to the emergency department 40 minutes after deliberately swallowing liquid drain cleaner that contains sodium hydroxide. She vomited once at home. She is drooling and has burns on her lips and tongue. Her voice is hoarse, and she has soft inspiratory stridor. She has pain behind the sternum. She is alert, anxious and cooperative.",
    vitals: { temperature: "37.1°C oral", pulse: "118/minute", resp: "26/minute", bp: "128/80 mmHg", o2sat: "96% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly indicates the need for early airway control?",
        options: [
          "Alkali ingestion",
          "Hoarse voice with stridor",
          "Lip and tongue burns",
          "Retrosternal chest pain",
          "Vomiting once at home",
        ],
        correct: 1,
        explanation:
          "A hoarse voice and stridor mean the caustic has injured the larynx and epiglottis, and that swelling can progress over hours to complete obstruction. Burns of the lips and tongue do not predict laryngeal or esophageal injury reliably. Alkali causes deep esophageal injury, which matters for endoscopy, not for the airway decision. Retrosternal pain and vomiting point to esophageal injury.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch37",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to secure her airway?",
        options: [
          "Awake flexible intubation with ENT ready",
          "Blind nasotracheal intubation",
          "Nasogastric tube then observation",
          "Neutralize with oral vinegar first",
          "Supraglottic airway after induction",
        ],
        correct: 0,
        explanation:
          "Supraglottic swelling makes laryngoscopy and mask ventilation unreliable after induction. She is alert and cooperative, so an awake flexible scope can pass the tube under direct view while she keeps breathing, with a surgeon ready for a surgical airway. Blind nasal intubation can injure friable, burned tissue. A supraglottic airway sits on the injured structures and does not bypass the swelling. A blind nasogastric tube risks esophageal perforation. Neutralizing an alkali with acid causes heat and more injury.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following preparations are most appropriate before her awake intubation?",
        select: 2,
        options: [
          "activated charcoal 50 g PO",
          "Blind nasal tube kit",
          "Cricothyroid membrane marked",
          "Milk to dilute the alkali",
          "Nasogastric tube",
          "Oral vinegar to neutralize",
          "propofol 2 mg/kg IV bolus",
          "Topical lidocaine for the airway",
        ],
        correct: [2, 7],
        explanation:
          "Topical lidocaine to the airway makes an awake flexible intubation tolerable without heavy sedation. Marking the cricothyroid membrane beforehand lets a surgical airway start at once if the swollen airway obstructs. Charcoal does not bind alkali and obscures endoscopy. Milk and vinegar are not given to a patient with airway compromise, and acid neutralization adds heat injury. A propofol bolus removes the spontaneous breathing that the awake plan depends on. A nasogastric tube risks perforation, and a blind nasal kit has no role in a burned airway.",
        keyFeature: { topic: "airway", n: 3 },
        source: "das-ati",
      },
    ],
    sources: [WALLS_CH37, CAFG2, DASATI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-39",
    topic: "airway",
    alsoTopics: ["pediatric-fever"],
    title: "Barky cough that is not settling",
    stem:
      "A 2-year-old boy is brought to the emergency department by his parents with 2 days of barky cough and 6 hours of noisy breathing. He received dexamethasone 0.6 mg/kg PO 3 hours ago and three doses of nebulized epinephrine over the past 90 minutes. He has stridor at rest and marked sternal retractions. He is now drowsy and pale, and air entry is reduced on both sides. His stridor is quieter than an hour ago.",
    vitals: { temperature: "38.2°C rectal", pulse: "178/minute", resp: "56/minute", o2sat: "89% on 10 L/minute by face mask", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this child most strongly indicates impending respiratory failure?",
        options: [
          "Barky cough for the past 2 days",
          "Drowsiness with poor air entry",
          "Fever of 38.2°C rectally",
          "Heart rate of 178/minute",
          "Stridor heard at rest",
        ],
        correct: 1,
        explanation:
          "A child with croup who becomes drowsy with reduced air entry is tiring, and quieter stridor in that setting means less air is moving, not improvement. The Canadian Paediatric Society identifies decreased level of consciousness and poor air entry as signs of impending respiratory failure. Stridor at rest marks moderate to severe croup but is present in many children who recover with treatment. A barky cough and fever are part of typical croup. Tachycardia follows distress, fever and epinephrine.",
        keyFeature: { topic: "airway", n: 2 },
        source: "croup",
      },
      {
        id: "q2",
        kind: "single",
        update: "You decide to intubate him in the resuscitation room with the most experienced operator and an otolaryngologist present.",
        prompt: "Which of the following endotracheal tubes should be the first choice for this child?",
        options: ["3.5 mm cuffed", "4.0 mm cuffed", "4.5 mm cuffed", "5.0 mm cuffed", "5.5 mm cuffed"],
        correct: 0,
        explanation:
          "The formula for a cuffed tube is 3.5 + age in years divided by 4, which gives 3.5 + 0.5 = 4.0 mm at 2 years. Croup narrows the subglottis, so the first tube should be at least half a size smaller than the formula, a 3.5 mm cuffed tube, with a smaller one ready. A 4.0 mm tube is the size for a normal airway at his age. The 4.5 mm and larger tubes are too large even for a normal 2-year-old.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch37",
      },
      {
        id: "q3",
        kind: "single",
        update: "The 3.5 mm tube passes the cords but will not pass the subglottis. Bag-mask ventilation between attempts keeps his O2 saturation at 94%.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Downsize to a 3.0 mm tube",
          "Force the tube with firm rotation",
          "Insert a supraglottic airway",
          "Nebulized epinephrine and retry",
          "Use a 4.0 mm tube with a stylet",
        ],
        correct: 0,
        explanation:
          "The subglottis is narrower than the glottis in croup, so a tube that stops there needs to be smaller, and a 3.0 mm tube should pass. Mask ventilation is keeping him oxygenated, so there is time for one more planned attempt with the smaller tube. Forcing the tube injures the swollen subglottic mucosa and can cause stenosis. A larger tube with a stylet makes the problem worse. A supraglottic airway is not needed while mask ventilation works and does not treat subglottic narrowing. Another nebulizer delays the airway.",
        keyFeature: { topic: "airway", n: 1 },
        source: "walls-ch37",
      },
    ],
    sources: [CROUP, WALLS_CH37],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-40",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Dive into a shallow lake",
    stem:
      "A 22-year-old man is brought to the emergency department by ambulance 40 minutes after diving into a shallow lake. He could not move his arms or legs when he was pulled from the water. He is alert and anxious. He can shrug his shoulders but has no other movement and no sensation below the clavicles. His breathing is rapid and shallow, his voice is weak, and his skin is warm and dry. A cervical collar is in place. His forced vital capacity is 0.9 L.",
    vitals: { temperature: "35.9°C oral", pulse: "52/minute", resp: "30/minute", bp: "82/48 mmHg", o2sat: "93% on 10 L/minute by nonrebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly supports early intubation in this patient?",
        options: [
          "Blood pressure of 82/48 mmHg",
          "Forced vital capacity of 0.9 L",
          "Pulse of 52/minute",
          "Temperature of 35.9°C",
          "Warm and dry skin below the injury",
        ],
        correct: 1,
        explanation:
          "A forced vital capacity of 0.9 L is 900 / 80 = 11 mL/kg, well below the 20 mL/kg level at which ventilation starts to fail. With an injury at about C4, diaphragm function is weak and will fatigue, and cord swelling can raise the level over the next days, so early controlled intubation is safer than a crash intubation. Hypotension, bradycardia and warm, dry skin are features of neurogenic shock, which needs vasopressors but does not by itself decide the airway. His temperature of 35.9°C is only slightly low, reflecting the cold water and lost vasomotor control, and does not bear on the airway.",
        keyFeature: { topic: "airway", n: 2 },
        source: "walls-ch34",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is most important to have ready before laryngoscopy in this patient?",
        options: [
          "atropine and a vasopressor",
          "labetalol 10 mg IV",
          "methylprednisolone 30 mg/kg IV",
          "Normal saline 4 L rapid infusion",
          "propofol 2 mg/kg IV for induction",
        ],
        correct: 0,
        explanation:
          "A high cervical cord injury leaves vagal tone unopposed, so laryngoscopy and suctioning can cause severe bradycardia or asystole in a patient whose pulse is already 52/minute. Atropine and a vasopressor should be drawn up. The 2024 AO Spine and Praxis guideline suggests keeping the mean arterial pressure at least 75 to 80 mmHg and no higher than 90 to 95 mmHg for 3 to 7 days. Methylprednisolone is not a routine treatment and does nothing for the vagal response to laryngoscopy. A 4 L saline load risks pulmonary edema when vascular tone is lost. Labetalol would deepen the bradycardia and hypotension, and a full dose of propofol would worsen his shock.",
        keyFeature: { topic: "airway", n: 5 },
        source: "sci",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate laryngoscopy technique for this patient?",
        options: [
          "Awake blind nasal intubation",
          "Direct laryngoscopy with neck extension",
          "Keep the collar closed during laryngoscopy",
          "Traction applied along the spine axis",
          "Video laryngoscopy with inline stabilization",
        ],
        correct: 4,
        explanation:
          "Manual inline stabilization, with the front of the collar opened, limits neck movement while allowing the mouth to open. A video laryngoscope gives a good view with less cervical extension than direct laryngoscopy. Extension for direct laryngoscopy moves the injured segment. Axial traction can pull apart an unstable injury. A closed collar restricts mouth opening and makes laryngoscopy harder. Blind nasal intubation has low success and provokes coughing and movement.",
        keyFeature: { topic: "airway", n: 4 },
        source: "atls",
      },
    ],
    sources: [WALLS_CH34, SCI, ATLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-41",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Waiting for transport after an overdose",
    stem:
      "You are working in a rural hospital emergency department. A 45-year-old woman was intubated 20 minutes ago for a decreased level of consciousness after an overdose of amitriptyline. Her ECG before intubation showed a QRS duration of 136 ms, and she received sodium bicarbonate 100 mmol IV. She is on a transport ventilator at a rate of 12/minute with a tidal volume of 450 mL. Rocuronium was used for intubation, and no sedation has been given since. The critical care transport team will arrive in 90 minutes.",
    vitals: { temperature: "37.4°C oral", pulse: "118/minute", bp: "102/64 mmHg", o2sat: "98% on FiO2 0.5 by ventilator", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "An arterial blood gas shows pH 7.28, pCO2 52 mmHg and HCO3 24 mmol/L. The QRS duration is now 112 ms.",
        prompt: "Which of the following ventilator changes is most appropriate for this patient?",
        options: [
          "Decrease the tidal volume to 350 mL",
          "Increase PEEP to 10 cmH2O",
          "Increase the rate to 20/minute",
          "Lower FiO2 to 0.3",
          "No change to ventilator settings",
        ],
        correct: 2,
        explanation:
          "Her blood gas shows a respiratory acidosis, and acidemia increases sodium channel blockade from a tricyclic overdose, so ventilation must match her needs. Arterial pCO2 varies inversely with minute ventilation, so raising the rate from 12 to 20/minute should lower it to about 52 x 12 / 20 = 31 mmHg and bring her pH into the alkalemic range the treatment aims for. A smaller tidal volume would worsen the acidosis. PEEP and FiO2 changes do not address the pCO2. Leaving the settings unchanged accepts an acidosis that increases toxicity.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls-ch10",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ventilator rate is increased to 20/minute. Her pulse remains 118/minute and her BP is 104/66 mmHg.",
        prompt: "Which of the following is the most important addition to her care before transport?",
        options: [
          "Additional rocuronium to prevent movement",
          "physostigmine for anticholinergic effects",
          "Repeat sodium bicarbonate 100 mmol IV",
          "Soft wrist restraints only",
          "Start analgesia and sedation infusions",
        ],
        correct: 4,
        explanation:
          "She received rocuronium 20 minutes ago and nothing since, so she may be paralyzed and aware, and her pulse of 118/minute can be a sign of that. An analgesia first sedation plan with infusions should start now and continue through transport. More rocuronium without sedation deepens the risk of awareness. Physostigmine is dangerous in tricyclic overdose because it can cause bradycardia, asystole and seizures. Her QRS has narrowed from 136 to 112 ms, and the faster ventilator rate brings her pH toward 7.5, so further bicarbonate is titrated to the QRS and pH and does not replace sedation. Restraints do not treat awareness or pain.",
        keyFeature: { topic: "airway", n: 5 },
        source: "padis",
      },
      {
        id: "q3",
        kind: "single",
        update: "A chest X-ray shows the tube tip 1 cm above the carina. The tube is at 25 cm at the teeth.",
        prompt: "Which of the following is the most appropriate action before she is moved?",
        options: [
          "Advance the tube by 2 cm",
          "Deflate the cuff and reassess",
          "Pull the tube back by 3 cm",
          "Replace it with a smaller tube",
          "No change before transport",
        ],
        correct: 2,
        explanation:
          "A tube tip 1 cm above the carina is too deep. Neck flexion during moves can push the tip further down into a main bronchus. Withdrawing 3 cm to 22 cm at the teeth places the tip about 4 cm above the carina, within the usual target. Advancing the tube would enter a bronchus. A smaller tube or deflating the cuff does not change the depth. Leaving it risks a mainstem intubation in transit.",
        keyFeature: { topic: "airway", n: 6 },
        source: "goodman-ett",
      },
    ],
    sources: [WALLS_CH10, PADIS, GOODMAN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-42",
    topic: "airway",
    title: "Bleeding a week after tonsil surgery",
    stem:
      "A 6-year-old girl is brought to the emergency department by her mother with 1 hour of fresh bleeding from her mouth, 7 days after a tonsillectomy for sleep apnea. She has vomited dark blood twice at home and is spitting bright red blood. She is pale and anxious. There is a clot with active oozing in the right tonsillar fossa. The otolaryngologist is 30 minutes away.",
    vitals: { temperature: "37.3°C oral", pulse: "146/minute", resp: "26/minute", bp: "86/52 mmHg", o2sat: "97% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following positions is most appropriate for her while awaiting the surgeon?",
        options: [
          "Flat supine with a pillow",
          "Reclined at 45 degrees",
          "Sitting up and leaning forward",
          "Supine with the head turned",
          "Trendelenburg on her back",
        ],
        correct: 2,
        explanation:
          "An awake child who is bleeding from the tonsillar bed protects her own airway best sitting up and leaning forward, so blood drains out of the mouth instead of down into the larynx. Lying flat, reclining or turning only the head lets blood pool in the pharynx and be aspirated. Trendelenburg on her back also lets blood run to the back of the throat. If she becomes drowsy, a lateral head-down position is used.",
        keyFeature: { topic: "airway", n: 4 },
        source: "tonsil",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important step before induction for her intubation?",
        options: [
          "Inhalational induction by mask",
          "Nasogastric tube to empty the stomach",
          "Sedation with midazolam first",
          "Suction the clot from the fossa",
          "Volume resuscitation before induction",
        ],
        correct: 4,
        explanation:
          "She has swallowed an unknown amount of blood, so her losses are larger than they appear, and her pulse of 146/minute and pallor show compensated shock. Induction can cause cardiovascular collapse unless volume, with blood if needed, is restored first. Suctioning the clot or passing a nasogastric tube can dislodge the clot and restart brisk bleeding. Midazolam sedation risks loss of airway reflexes with a pharynx full of blood. Inhalational induction by mask leaves a stomach full of blood unprotected.",
        keyFeature: { topic: "airway", n: 5 },
        source: "tonsil",
      },
      {
        id: "q3",
        kind: "single",
        update: "She receives 20 mL/kg of crystalloid and packed red cells are on the way. Her pulse is 128/minute and BP 94/58 mmHg.",
        prompt: "Which of the following rapid sequence intubation regimens is most appropriate for her?",
        options: [
          "ketamine 20 mg and rocuronium 6 mg IV",
          "ketamine 20 mg and rocuronium 24 mg IV",
          "ketamine 80 mg and rocuronium 24 mg IV",
          "midazolam 5 mg IV without a paralytic",
          "propofol 60 mg and rocuronium 24 mg IV",
        ],
        correct: 1,
        explanation:
          "Ketamine at 1 mg/kg, 20 mg for 20 kg, keeps her blood pressure better than other agents in a child who is still hypovolemic. Rocuronium at 1.2 mg/kg, 1.2 x 20 = 24 mg, gives fast intubating conditions and shortens the time the airway is unprotected. Ketamine 80 mg is 4 mg/kg. Rocuronium 6 mg is only 0.3 mg/kg and gives a slow, incomplete block. Propofol at 3 mg/kg would drop her blood pressure. Midazolam without a paralytic gives poor conditions and risks aspiration of blood.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls-ch21",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following should be prepared for her intubation?",
        select: 2,
        options: [
          "Blind nasal intubation kit",
          "Cuffed tubes a half size smaller",
          "Inhalational induction circuit",
          "Nasogastric tube before induction",
          "Nasopharyngeal airway",
          "Supraglottic airway as first plan",
          "Two rigid suction catheters",
          "Uncuffed tube only",
        ],
        correct: [1, 6],
        explanation:
          "Two rigid suction catheters let one clear the pharynx while the other stays ready for rebleeding during laryngoscopy. Cuffed tubes, with sizes a half size below the age formula also ready, protect the lungs from blood and allow for swelling after recent surgery. An uncuffed tube alone leaves the lungs exposed to blood. A nasopharyngeal airway, a nasogastric tube and a blind nasal kit risk new bleeding. A supraglottic airway does not protect against aspiration of ongoing bleeding. An inhalational induction leaves a full stomach unprotected.",
        keyFeature: { topic: "airway", n: 3 },
        source: "tonsil",
      },
    ],
    sources: [TONSIL, WALLS_CH21],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-43",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Boy struck while cycling",
    stem:
      "An 8-year-old boy is brought to the emergency department by ambulance after being struck by a car while riding his bicycle without a helmet. GCS is 7 (E1 V2 M4). His pupils are equal and reactive. He has a large scalp hematoma and vomited once. His airway stays open with a jaw thrust. A cervical collar is in place. The primary survey shows no other injuries.",
    vitals: { temperature: "36.6°C tympanic", pulse: "128/minute", resp: "18/minute", bp: "104/62 mmHg", o2sat: "94% on 15 L/minute by nonrebreather mask", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this child is the strongest indication for a definitive airway?",
        options: [
          "Absence of a helmet",
          "Glasgow Coma Scale of 7",
          "Pulse of 128/minute",
          "Scalp hematoma",
          "Single episode of vomiting",
        ],
        correct: 1,
        explanation:
          "A GCS of 8 or less after head injury calls for a definitive airway, because the child cannot protect his airway and hypoxia or hypercapnia worsens secondary brain injury. His GCS is 7. The lack of a helmet and the scalp hematoma describe the mechanism and injury. One episode of vomiting is common after head injury. Tachycardia at 128/minute needs a search for bleeding but does not decide the airway.",
        keyFeature: { topic: "airway", n: 2 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following induction doses is most appropriate for his intubation?",
        options: [
          "dexmedetomidine 26 mcg IV",
          "fentanyl 100 mcg IV alone",
          "ketamine 40 mg IV",
          "midazolam 5 mg IV",
          "propofol 80 mg IV",
        ],
        correct: 2,
        explanation:
          "Hypotension after traumatic brain injury worsens outcome, so the induction agent should keep blood pressure stable. Ketamine at about 1.5 mg/kg, 40 mg for 26 kg, does that, and with controlled ventilation it does not raise intracranial pressure in a way that harms outcome. Propofol at about 3 mg/kg can cause hypotension. Midazolam acts slowly and also lowers blood pressure. Fentanyl alone does not give reliable intubating conditions. A dexmedetomidine bolus acts slowly and can cause bradycardia.",
        keyFeature: { topic: "airway", n: 5 },
        source: "cohen-ketamine-icp",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is intubated. A paramedic is bagging rapidly at about 40 breaths/minute. End-tidal CO2 is 22 mmHg with a normal waveform. His pupils remain equal.",
        prompt: "Which of the following is the most appropriate action now?",
        options: [
          "Continue at the current rate",
          "Give mannitol before any change",
          "Increase the tidal volume",
          "Slow to an age-normal rate",
          "Switch to a larger tube",
        ],
        correct: 3,
        explanation:
          "An end-tidal CO2 of 22 mmHg means he is being hyperventilated. Hypocapnia constricts cerebral vessels and can cause ischemia in an injured brain, and without signs of herniation it has no role. The rate should slow to normal for his age, aiming for a normal pCO2 checked by blood gas, because end-tidal CO2 can differ from arterial values. More volume or a faster rate lowers CO2 further. Mannitol is for signs of raised intracranial pressure, which he does not have. A larger tube does not change ventilation.",
        keyFeature: { topic: "airway", n: 6 },
        source: "btf-peds-tbi",
      },
    ],
    sources: [ATLS, COHEN, BTFPEDS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-44",
    topic: "airway",
    alsoTopics: ["sob"],
    title: "Coughing up large amounts of blood",
    stem:
      "A 67-year-old man presents to the emergency department after coughing up about 300 mL of bright red blood over the past hour. He has a known cavity in the left upper lobe from old tuberculosis. He is still coughing blood. He is anxious and speaks in short sentences. Breath sounds are coarse over the left upper chest. A chest X-ray shows a left upper lobe cavity with surrounding opacity. He takes no anticoagulants.",
    vitals: { temperature: "37.3°C oral", pulse: "116/minute", resp: "28/minute", bp: "118/70 mmHg", o2sat: "88% on 15 L/minute by nonrebreather mask", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following positions is most appropriate for this patient?",
        options: [
          "Flat supine position",
          "Head-down tilt while supine",
          "Left lateral decubitus position",
          "Right lateral decubitus position",
          "Sitting upright at 45 degrees",
        ],
        correct: 2,
        explanation:
          "The bleeding comes from the left upper lobe cavity. Lying on the left side keeps the bleeding lung dependent, so blood stays on that side instead of flooding the healthy right lung. Lying on the right side would drain blood into the good lung. Flat supine and head-down positions let blood spread to both lungs and the larynx. Sitting upright does not protect the right lung.",
        keyFeature: { topic: "airway", n: 4 },
        source: "hemoptysis",
      },
      {
        id: "q2",
        kind: "single",
        update: "He keeps bleeding and his O2 saturation falls to 84%. You decide to intubate him.",
        prompt: "Which of the following endotracheal tube sizes is most appropriate for this patient?",
        options: ["6.0 mm", "6.5 mm", "7.0 mm", "7.5 mm", "8.5 mm"],
        correct: 4,
        explanation:
          "A large tube, 8.5 mm or more, lets a therapeutic flexible bronchoscope with a wide suction channel pass to find and control the bleeding, and it is less easily blocked by clot. Tubes of 7.5 mm or smaller restrict the bronchoscope, slow suction of blood and raise airway resistance. Smaller tubes suit a small airway or subglottic narrowing, which he does not have.",
        keyFeature: { topic: "airway", n: 3 },
        source: "hemoptysis",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After intubation, blood keeps filling the tube and his O2 saturation falls to 80% despite suction. A bronchoscope will not be available for 30 minutes.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Deflate the cuff to let blood drain",
          "Increase PEEP to 20 cmH2O",
          "Instill cold saline through the tube",
          "Pull the tube back above the cords",
          "Selective right mainstem intubation",
        ],
        correct: 4,
        explanation:
          "Advancing the tube into the right main bronchus isolates the healthy right lung from the bleeding left lung and allows it to be ventilated, which buys time until bronchoscopy or embolization. Deflating the cuff lets blood run around the tube into the lungs. High PEEP does not stop bleeding from a cavity vessel and can drop his blood pressure. Cold saline is a bronchoscopic technique and poured blindly down the tube it floods the airway further. Pulling the tube above the cords loses the airway.",
        keyFeature: { topic: "airway", n: 1 },
        source: "hemoptysis",
      },
    ],
    sources: [HEMOPTYSIS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-45",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Three failed attempts after an overdose",
    stem:
      "A 44-year-old man is brought to the emergency department by paramedics after an overdose of quetiapine and alcohol. GCS is 7, and he has vomited. His BMI is 41 kg/m2. His neck is short, and the distance from his chin to his thyroid notch is 1 fingerbreadth. After suction and preoxygenation, rapid sequence intubation with rocuronium is performed. Three attempts by two operators, including two with a video laryngoscope and a bougie, show nothing beyond the tip of the epiglottis. Between attempts, two-person bag-mask ventilation with an oral airway keeps his O2 saturation at 93%.",
    vitals: { temperature: "36.2°C oral", pulse: "112/minute", bp: "108/66 mmHg", o2sat: "93% on bag-mask ventilation with oxygen", weight: "128 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings in this patient predicted difficult laryngoscopy?",
        select: 2,
        options: [
          "Age of 44 years",
          "BMI of 41 kg/m2",
          "Glasgow Coma Scale of 7",
          "Pulse of 112/minute",
          "Quetiapine ingestion",
          "Recent alcohol intake",
          "Short thyromental distance",
          "Vomiting before arrival",
        ],
        correct: [1, 6],
        explanation:
          "A distance of only one fingerbreadth from chin to thyroid notch, where about three fingerbreadths or 6 cm are expected, means the larynx sits high and anterior and the tongue has little room to be displaced. Obesity also predicts a difficult view and makes positioning and mask ventilation harder. His age and pulse are not predictors. Alcohol and quetiapine explain his level of consciousness but not his anatomy. A GCS of 7 is the reason to intubate, not a predictor of a hard view. Vomiting soils the airway, but suction before induction had cleared it and the view still failed.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his airway management?",
        options: [
          "Fourth attempt by the same operator",
          "Fourth attempt with a smaller tube",
          "Halt laryngoscopy and declare failure",
          "Needle cricothyroidotomy",
          "sugammadex to wake the patient",
        ],
        correct: 2,
        explanation:
          "The Canadian Airway Focus Group limits intubation attempts to three before failure is declared, because each attempt adds swelling and bleeding and brings closer the loss of the oxygenation that bag-mask ventilation still provides. Declaring failure moves the team to a planned exit strategy while he is oxygenated. A fourth attempt, with the same operator or a smaller tube, repeats what has failed. The guideline allows one further attempt only with a different technique, as an exit option. Waking him is not a real option, because his overdose will leave him unable to protect his airway after the rocuronium is reversed. Needle cricothyroidotomy is for a patient who cannot be oxygenated.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q3",
        kind: "single",
        update: "A second-generation supraglottic airway is placed. Capnography shows a normal waveform, and his O2 saturation rises to 97%.",
        prompt: "Which of the following is the most appropriate way to obtain a definitive airway?",
        options: [
          "Blind intubation through the device",
          "Flexible scope intubation through the device",
          "Keep the device for 48 hours",
          "Remove it for more laryngoscopy",
          "Swap for a first-generation device",
        ],
        correct: 1,
        explanation:
          "With oxygenation restored through the supraglottic airway, intubation through it with a flexible bronchoscope, often over an exchange catheter, is a recommended exit strategy that keeps ventilation going during the attempt. Blind passage of a tube through the device has a low success rate. Removing the device for more laryngoscopy gives up oxygenation for a technique that has already failed three times. A supraglottic airway is not a definitive airway for days of ventilation in a patient who vomited. A first-generation device lacks the gastric drain that protects him.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
    ],
    sources: [CAFG2, CAFG1],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-46",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Ventilator alarm after a motorcycle crash",
    stem:
      "A 36-year-old man was intubated in the emergency department 40 minutes ago for a GCS of 6 after a motorcycle crash. A chest X-ray after intubation showed the tube tip 4 cm above the carina, fractures of the left fourth to seventh ribs and no pneumothorax. The tube remains at 23 cm at the teeth. He is on volume control ventilation with a tidal volume of 500 mL and PEEP of 5 cmH2O. The ventilator now alarms. Peak pressure has risen from 24 to 48 cmH2O and plateau pressure from 18 to 44 cmH2O.",
    vitals: { pulse: "134/minute", bp: "78/40 mmHg", o2sat: "82% on FiO2 1.0 by ventilator", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following does the change in his airway pressures most likely indicate?",
        options: [
          "Increased airway resistance",
          "Kinked or bitten tube",
          "Leak in the ventilator circuit",
          "Oversedation of the patient",
          "Reduced respiratory compliance",
        ],
        correct: 4,
        explanation:
          "Peak pressure reflects resistance plus compliance, and plateau pressure reflects compliance alone. Both have risen by a similar amount, from 24 to 48 and from 18 to 44 cmH2O, so the problem is stiffness of the lung or chest wall, such as a pneumothorax. Increased resistance from a kinked tube, secretions or bronchospasm raises peak pressure with little change in plateau pressure. A circuit leak lowers pressures. Oversedation does not raise airway pressures.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls-ch10",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step?",
        options: [
          "Give a 1 L crystalloid bolus",
          "Hand-bag with 100% oxygen",
          "Increase PEEP to 15 cmH2O",
          "Increase the sedation infusion",
          "Order a portable chest X-ray",
        ],
        correct: 1,
        explanation:
          "In a ventilated patient who desaturates suddenly, disconnecting the ventilator and bagging by hand with 100% oxygen removes the ventilator as a cause and lets you feel how stiff the lungs are while the tube, the chest and the equipment are checked. A chest X-ray takes time he does not have. Raising PEEP adds to intrathoracic pressure in a hypotensive patient. Fluid and sedation do not address the cause of the pressure rise.",
        keyFeature: { topic: "airway", n: 1 },
        source: "walls-ch10",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Hand bagging is very stiff. Capnography shows a waveform. A suction catheter passes easily down the tube. Breath sounds are absent on the left, and the trachea is deviated to the right.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Chest X-ray before any procedure",
          "Decompress the left pleural space",
          "Pull the tube back by 2 cm",
          "Replace the endotracheal tube",
          "Suction the tube for a mucus plug",
        ],
        correct: 1,
        explanation:
          "A capnography waveform and an unchanged depth of 23 cm make displacement unlikely, and an easily passed suction catheter excludes obstruction. Absent left breath sounds, tracheal deviation to the right, hypotension and left rib fractures under positive pressure point to a tension pneumothorax. The left chest needs immediate decompression by finger thoracostomy or needle, then a chest tube. A chest X-ray delays treatment. Pulling back or replacing the tube and suctioning do not treat a pneumothorax.",
        keyFeature: { topic: "airway", n: 6 },
        source: "atls",
      },
    ],
    sources: [WALLS_CH10, ATLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-47",
    topic: "airway",
    alsoTopics: ["shock"],
    title: "Light-headed with distended neck veins",
    stem:
      "A 58-year-old woman with metastatic lung cancer presents to the emergency department with 3 days of increasing shortness of breath and light-headedness. She speaks in full sentences while sitting up. Her neck veins are distended and her heart sounds are muffled. Her pulsus paradoxus is 22 mmHg. POCUS shows a large circumferential pericardial effusion with collapse of the right ventricle in diastole. A colleague suggests intubating her because she looks unwell.",
    vitals: { temperature: "37.2°C oral", pulse: "128/minute", resp: "28/minute", bp: "86/64 mmHg", o2sat: "93% on 4 L/minute by nasal prongs", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "BiPAP to reduce her work of breathing",
          "furosemide 40 mg IV for congestion",
          "nitroglycerin spray for dyspnea",
          "Rapid sequence intubation with ketamine",
          "Urgent pericardiocentesis first",
        ],
        correct: 4,
        explanation:
          "She has cardiac tamponade, and her circulation depends on high venous pressure filling a compressed heart. Positive pressure from intubation or BiPAP raises intrathoracic pressure, cuts venous return and can cause arrest, so the effusion should be drained first while she breathes on her own. She is speaking in full sentences, so her airway is not the immediate threat. Furosemide and nitroglycerin reduce the preload that keeps her heart filling and can precipitate collapse.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls-ch33",
      },
      {
        id: "q2",
        kind: "single",
        update: "While the pericardiocentesis is being set up, she becomes obtunded and her O2 saturation falls to 82%. She must be intubated before drainage.",
        prompt: "Which of the following strategies is most appropriate for her intubation?",
        options: [
          "High PEEP to recruit the lungs",
          "Induction with propofol 2 mg/kg",
          "Ketamine in a reduced dose, low PEEP",
          "Large tidal volumes of 10 mL/kg",
          "Supine flat before induction",
        ],
        correct: 2,
        explanation:
          "Every part of the intubation should protect venous return and sympathetic tone. A reduced dose of ketamine keeps vascular tone better than other agents, and low PEEP with small tidal volumes keeps intrathoracic pressure down. Propofol at 2 mg/kg causes vasodilation and would likely precipitate arrest. High PEEP and large tidal volumes both raise intrathoracic pressure. She should stay as upright as possible until induction, because lying flat worsens her breathing and does not help her circulation.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls-ch33",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following should be ready at the bedside before her induction?",
        select: 2,
        options: [
          "Extra propofol drawn up",
          "furosemide 40 mg IV ready",
          "Nasogastric tube in place",
          "nitroglycerin infusion running",
          "norepinephrine infusion running",
          "PEEP valve set at 15 cmH2O",
          "Pericardiocentesis set up",
        ],
        correct: [4, 6],
        explanation:
          "Induction and positive pressure may cause arrest in tamponade, so a norepinephrine infusion should be running and the pericardiocentesis kit should be open and ready, with the operator scrubbed to drain the effusion at once if her pressure falls. Extra propofol adds vasodilation. Furosemide and nitroglycerin reduce the preload she depends on. A PEEP of 15 cmH2O raises intrathoracic pressure. A nasogastric tube does not address the main danger.",
        keyFeature: { topic: "airway", n: 3 },
        source: "walls-ch33",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "She is intubated with the ventilator on small tidal volumes and unchanged settings. Over 2 minutes her end-tidal CO2 falls from 34 to 12 mmHg with a normal-shaped but smaller waveform, and her BP falls to 60/40 mmHg.",
        prompt: "Which of the following best explains the fall in her end-tidal CO2?",
        options: [
          "Bronchospasm after intubation",
          "Esophageal tube migration",
          "Hyperventilation by the ventilator",
          "Leak around the cuff",
          "Reduced cardiac output",
        ],
        correct: 4,
        explanation:
          "End-tidal CO2 depends on the blood carrying CO2 to the lungs. With unchanged ventilator settings and a normal-shaped waveform, a fall from 34 to 12 mmHg alongside a BP of 60/40 mmHg means her cardiac output has collapsed, so the effusion must be drained now. An esophageal tube would lose the waveform altogether. Bronchospasm changes the shape of the waveform to a sloped upstroke. The settings have not changed, so the fall is not from hyperventilation. A cuff leak causes low volumes and alarms, not this pattern with hypotension.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls-ch11",
      },
    ],
    sources: [WALLS_CH33, WALLS_CH11],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
