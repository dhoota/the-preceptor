// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const CAFG1: Source = {
  id: "cafg1",
  citation:
    "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 1. Difficult airway management encountered in an unconscious patient. Can J Anesth. 2021.",
};
const CAFG2: Source = {
  id: "cafg2",
  citation:
    "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021.",
};
const DAS2015: Source = {
  id: "das2015",
  citation:
    "Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth. 2015.",
};
const WALLS: Source = {
  id: "walls",
  citation: "Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023.",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) student course manual. 10th edition. 2018.",
};
const ABLS: Source = {
  id: "abls",
  citation: "American Burn Association. Advanced Burn Life Support course provider manual. 2018 update.",
};
const MOSIER: Source = {
  id: "mosier",
  citation: "Mosier JM, Joshi R, Hypes C, et al. The physiologically difficult airway. West J Emerg Med. 2015.",
};
const WEINGART: Source = {
  id: "weingart",
  citation: "Weingart SD, Levitan RM. Preoxygenation and prevention of desaturation during emergency airway management. Ann Emerg Med. 2012.",
};
const PALS: Source = {
  id: "pals",
  citation: "Heart and Stroke Foundation of Canada. Pediatric Advanced Life Support provider manual. 2020.",
};
const DASTHYROID: Source = {
  id: "das-thyroid",
  citation:
    "Iliff HA, El-Boghdadly K, Ahmad I, et al. Management of haematoma after thyroid surgery. Systematic review and multidisciplinary consensus guidelines from the Difficult Airway Society, the British Association of Endocrine and Thyroid Surgeons and the British Association of Otorhinolaryngology, Head and Neck Surgery. Anaesthesia. 2022.",
};
const EXTRIP: Source = {
  id: "extrip",
  citation:
    "Juurlink DN, Gosselin S, Kielstein JT, et al. Extracorporeal treatment for salicylate poisoning. Systematic review and recommendations from the EXTRIP workgroup. Ann Emerg Med. 2015.",
};
const GINA: Source = {
  id: "gina",
  citation: "Global Initiative for Asthma. Global strategy for asthma management and prevention. 2026 update.",
};
const BTF: Source = {
  id: "btf",
  citation: "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Neurosurgery. 2017.",
};
const NAP4: Source = {
  id: "nap4",
  citation:
    "Cook TM, Woodall N, Frerk C. Major complications of airway management in the UK. Results of the Fourth National Audit Project of the Royal College of Anaesthetists and the Difficult Airway Society. Part 1. Anaesthesia. Br J Anaesth. 2011.",
};
const OAA: Source = {
  id: "oaa-das",
  citation:
    "Mushambi MC, Kinsella SM, Popat M, et al. Obstetric Anaesthetists' Association and Difficult Airway Society guidelines for the management of difficult and failed tracheal intubation in obstetrics. Anaesthesia. 2015.",
};

const VERHEES: Source = {
  id: "verhees-thermal",
  citation:
    "Verhees V, Ketharanathan N, Oen IMMH, Baartmans MGA, Koopman JSHA. Beware of thermal epiglottis! A case report describing teapot syndrome. BMC Anesthesiol. 2018.",
  url: "https://doi.org/10.1186/s12871-018-0665-7",
};
const ALKAABI: Source = {
  id: "alkaabi-thermal",
  citation: "Alkaabi N, Aljahdali N, Algouhi A, Asiri M. Delayed presentation of thermal epiglottitis in a toddler. A case report. Cureus. 2023.",
  url: "https://doi.org/10.7759/cureus.36555",
};
const MAGUIRE: Source = {
  id: "maguire-scalds",
  citation: "Maguire S, Moynihan S, Mann M, Potokar T, Kemp AM. A systematic review of the features that indicate intentional scalds in children. Burns. 2008.",
  url: "https://doi.org/10.1016/j.burns.2008.02.011",
};
const EXTRIPBARB: Source = {
  id: "extrip-barbiturate",
  citation:
    "Mactier R, Laliberté M, Mardini J, et al. Extracorporeal treatment for barbiturate poisoning. Recommendations from the EXTRIP Workgroup. Am J Kidney Dis. 2014.",
  url: "https://doi.org/10.1053/j.ajkd.2014.04.031",
};
const MDAC: Source = {
  id: "aact-mdac",
  citation:
    "American Academy of Clinical Toxicology, European Association of Poisons Centres and Clinical Toxicologists. Position statement and practice guidelines on the use of multi-dose activated charcoal in the treatment of acute poisoning. J Toxicol Clin Toxicol. 1999.",
  url: "https://doi.org/10.1081/clt-100102451",
};
const KODALI: Source = {
  id: "kodali-capnography",
  citation: "Kodali BS. Capnography outside the operating rooms. Anesthesiology. 2013.",
  url: "https://doi.org/10.1097/ALN.0b013e318278c8b6",
};
const MOSIER2: Source = {
  id: "mosier-2015",
  citation: "Mosier JM, Joshi R, Hypes C, Pacheco G, Valenzuela T, Sakles JC. The physiologically difficult airway. West J Emerg Med. 2015.",
  url: "https://doi.org/10.5811/westjem.2015.8.27467",
};
const XIANG: Source = {
  id: "xiang-asthma",
  citation:
    "Xiang L, Tan HL, Miller A, Rotta AT, Lee JH. Respiratory support in pediatric critical and near-fatal asthma. A narrative review. Pulm Ther. 2026.",
  url: "https://doi.org/10.1007/s41030-026-00374-x",
};
const CSCM: Source = {
  id: "cscm-sci",
  citation:
    "Consortium for Spinal Cord Medicine. Early acute management in adults with spinal cord injury. A clinical practice guideline for health-care professionals. J Spinal Cord Med. 2008.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2582434/",
};
const MARTYN: Source = {
  id: "martyn-sux",
  citation:
    "Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Etiologic factors and molecular mechanisms. Anesthesiology. 2006.",
  url: "https://doi.org/10.1097/00000542-200601000-00022",
};
const ERCALS: Source = {
  id: "erc-als-2025",
  citation: "Soar J, Böttiger BW, Carli P, et al. European Resuscitation Council Guidelines 2025. Adult advanced life support. Resuscitation. 2025.",
  url: "https://doi.org/10.1016/j.resuscitation.2025.110769",
};

const AUTHOR = "Preceptor";

export const AIRWAY_SAMPS: Samp[] = [
  {
    id: "airway-01",
    topic: "airway",
    title: "Unresponsive man after a night of drinking",
    stem:
      "A 52-year-old man is brought in by paramedics after being found unresponsive beside an empty bottle of vodka and a bottle of hydromorphone tablets. He vomited en route. He did not wake after naloxone 0.4 mg IV twice. Capillary glucose is 6.2 mmol/L. GCS is 6. He weighs about 110 kg. After suction and bag-mask ventilation with a PEEP valve his SpO2 reaches 97%. You perform rapid sequence intubation with ketamine and rocuronium. On the first attempt with a Macintosh 4 blade you see only the tip of the epiglottis. The attempt is stopped when SpO2 reaches 92%.",
    vitals: { temperature: "36.1°C", pulse: "104/minute", resp: "8/minute", bp: "132/80 mmHg", o2sat: "89% on a nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "He is reoxygenated with the bag-valve mask to 96%.",
        prompt: "What changes would you make to improve your chance of success on the second attempt?",
        required: 3,
        accept: [
          { id: "vl", text: "Switch to a video laryngoscope", match: ["video"], },
          { id: "bougie", text: "Use a bougie", match: ["bougie"], },
          { id: "position", text: "Optimize position (ramped, ear to sternal notch, head elevated)", match: ["position", "reposition", "sniffing"], },
          { id: "elm", text: "External laryngeal manipulation (bimanual laryngoscopy)", match: ["external laryngeal", "burp", "bimanual"], },
          { id: "suction", text: "Suction the airway with a large bore rigid catheter", match: ["suction"], },
          { id: "blade", text: "Change blade size or type", match: ["blade"], },
          { id: "operator", text: "Call for help or a more experienced operator", match: ["help"], },
          { id: "apneic", text: "Apneic oxygenation with nasal cannula at 15 L/min or more", match: ["apneic"], },
        ],
        unacceptable: [{ text: "Blind nasotracheal intubation", match: ["blind nasal", "blind nasotracheal", "blind intubation"], }],
        explanation:
          "Each attempt should change something. A video laryngoscope, bougie, better position, external laryngeal manipulation and suction all improve the next look. Repeating the same attempt with the same tools rarely succeeds and adds airway trauma.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The second attempt with a video laryngoscope and bougie fails because of ongoing vomitus. A third attempt by your most experienced colleague also fails. SpO2 is 86% and falling.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "A fourth attempt at direct laryngoscopy",
          "Blind nasotracheal intubation",
          "Give sugammadex and wait for spontaneous breathing",
          "Insert a second generation supraglottic airway",
          "Needle cricothyroidotomy with jet ventilation",
        ],
        correct: 3,
        explanation:
          "After three failed attempts, declare failed intubation and move to a supraglottic airway to restore oxygenation. A second generation device has a gastric drain port, which helps in a patient who is vomiting. Waiting for spontaneous breathing does not help an unconscious, hypoxemic overdose patient.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Two-person ventilation through the supraglottic airway gives no chest rise and no capnography trace. Two-person face mask ventilation with an oral airway also fails. SpO2 is 72% and HR is 58.",
        prompt: "In this cannot intubate, cannot oxygenate situation, what are the key steps of the rescue technique you would perform now?",
        required: 3,
        accept: [
          { id: "declare", text: "Declare the emergency and call for help", match: ["declare", "help"], },
          { id: "extend", text: "Extend the neck and identify the cricothyroid membrane with a laryngeal handshake", match: ["laryngeal handshake", "extend", "identify cricothyroid", "palpate", "locate"], },
          { id: "vertical", text: "If the membrane is not palpable, make a vertical midline skin incision and use blunt finger dissection", match: ["vertical", "finger"], },
          { id: "incision", text: "Transverse stab incision through the cricothyroid membrane with a size 10 scalpel", match: ["incision", "stab", "cut"], },
          { id: "rotate", text: "Rotate the blade 90 degrees with the sharp edge toward the feet", match: ["rotate", "90 degree", "turn"], },
          { id: "tube", text: "Railroad a 6.0 cuffed tube over the bougie and inflate the cuff", match: ["railroad", "6.0", "cuffed tube"], },
          { id: "bougie", text: "Pass a bougie into the trachea beside the blade", match: ["bougie"], },
          { id: "confirm", text: "Confirm with waveform capnography", match: ["capnography", "etco2", "end tidal"], },
          { id: "nmb", text: "Ensure full neuromuscular blockade", match: ["neuromuscular blockade", "neuromuscular blocker", "paralysis", "paralytic", "paralyze", "rocuronium"], },
        ],
        unacceptable: [
          { text: "Further laryngoscopy or intubation attempts in place of front of neck access", match: ["another attempt", "reattempt", "repeat laryngoscopy", "another intubation", "fourth attempt"] },
          { text: "Needle cricothyroidotomy in an adult", match: ["needle"], },
        ],
        explanation:
          "Canadian and UK guidance favour the scalpel-bougie-tube technique for adult emergency front of neck access. It is fast, uses familiar equipment and gives a cuffed tube that protects the airway. CAFG allows only a single final attempt with a technique not yet tried, done while the neck is being prepared. Here video laryngoscopy has already failed twice, so more laryngoscopy only delays the rescue.",
        keyFeature: { topic: "airway", n: 1 },
        source: "das2015",
      },
    ],
    sources: [CAFG1, DAS2015],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-02",
    topic: "airway",
    alsoTopics: ["burns"],
    title: "A toddler who stopped drinking",
    stem:
      "A 20-month-old boy is brought to the emergency department by his mother 90 minutes after he pulled a teapot of freshly brewed tea off a coffee table. She was in the next room and heard him scream. She found the spout in his mouth and tea on his chin and shirt. He cried hard, then settled. Over the past 30 minutes he has started drooling and his cry sounds muffled. He will not drink. He is previously well and fully immunized. He sits upright on his mother's lap, leaning forward. There is soft inspiratory stridor with suprasternal retractions. His upper lip and the tip of his tongue are blistered. There is a blistered scald on the chin and a 4 cm by 5 cm blistered scald on the upper chest.",
    vitals: { temperature: "37.4°C tympanic", pulse: "156/minute", resp: "38/minute", o2sat: "95% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings in this child suggest thermal injury to his upper airway?",
        required: 3,
        accept: [
          { id: "drool", text: "Drooling", match: ["drooling", "drool", "cannot swallow saliva"] },
          { id: "cry", text: "Muffled or changed cry", match: ["muffled", "hoarse", "cry change", "voice change", "changed cry"] },
          { id: "stridor", text: "Inspiratory stridor", match: ["stridor", "noisy breathing"] },
          { id: "refuse", text: "Refusing to drink or swallow", match: ["refusing", "refuses", "will not drink", "not drinking", "swallow", "dysphagia"] },
          { id: "retract", text: "Suprasternal retractions or increased work of breathing", match: ["retraction", "indrawing", "work of breathing", "respiratory distress"] },
          { id: "posture", text: "Sitting upright and leaning forward", match: ["leaning forward", "sitting forward", "tripod", "sitting upright"] },
          { id: "oral", text: "Blisters of the lip and tongue, or perioral and facial scalds, showing hot liquid reached the mouth", match: ["tongue", "intraoral", "perioral", "oral burn", "oral blister", "lip blister", "blistered lip", "lip burn", "mouth burn", "facial burn", "face burn", "facial scald", "chin burn", "chin scald"] },
          { id: "spout", text: "Mechanism of drinking from the spout of a hot teapot", match: ["spout", "drank hot", "hot liquid in mouth", "ingestion"] },
        ],
        unacceptable: [{ text: "Normal oxygen saturation shows the airway is safe", match: ["airway safe", "saturation reassuring"] }],
        explanation:
          "Drooling, a muffled cry, refusal to drink and stridor with retractions mean the swelling has reached the supraglottis, not just the lips. Hot liquid held in the mouth can scald the epiglottis and arytenoids. The swelling can appear soon after the injury or be delayed for up to 72 hours, so a settled first hour is not reassuring. Blisters on his lip and tongue show that hot liquid entered his mouth. Thermal epiglottitis has also been reported without any intraoral burn.",
        keyFeature: { topic: "airway", n: 2 },
        source: "verhees-thermal",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Over the next 20 minutes his stridor becomes louder at rest and he drools continuously. SpO2 is 93% with blow-by oxygen. Paediatric anesthesia and otolaryngology are in the hospital.",
        prompt: "Which of the following is the most appropriate next step in managing his airway?",
        options: [
          "Admission to the ward with close observation",
          "Controlled intubation in the operating room",
          "Lateral neck X-ray before deciding",
          "Nebulized epinephrine and observation",
          "Rapid sequence intubation in the ED",
        ],
        correct: 1,
        explanation:
          "Stridor that is louder at rest with continuous drooling means the obstruction is progressing, so his airway needs to be secured now in the safest setting available. With paediatric anesthesia and otolaryngology on site, that is the operating room, with the difficult airway plan and a surgical airway ready. After induction and paralysis, bag-mask ventilation can become impossible through a swollen supraglottis, as in the reported case. Nebulized epinephrine may buy a little time but does not treat progressive thermal edema. A lateral neck X-ray delays airway control without changing the decision. Ward admission leaves a worsening airway without a plan.",
        keyFeature: { topic: "airway", n: 2 },
        source: "verhees-thermal",
      },
      {
        id: "q3",
        kind: "short",
        update: "Anesthesia and otolaryngology agree to secure his airway in the operating room now.",
        prompt: "What preparations should be in place for his intubation?",
        required: 3,
        accept: [
          { id: "anes", text: "The most experienced paediatric anesthesiologist as the airway operator", match: ["anesthesia", "anaesthesia", "anesthesiologist", "anaesthetist", "anesthetist", "experienced"] },
          { id: "ent", text: "Otolaryngologist present with a rigid bronchoscope and a tracheostomy or surgical airway set", match: ["otolaryngology", "otolaryngologist", "ent", "rigid bronchoscope", "rigid bronchoscopy", "tracheostomy", "surgical airway"] },
          { id: "small", text: "Tubes a half to one size smaller than predicted for age", match: ["smaller tube", "smaller size", "half size", "3.0 mm", "range of tube"] },
          { id: "spont", text: "Keep him breathing spontaneously during induction, such as an inhalational induction", match: ["spontaneous", "inhalational", "gas induction", "sevoflurane"] },
          { id: "calm", text: "Keep him calm and upright with his mother until induction", match: ["mother", "parent", "calm", "avoid agitation", "upright"] },
          { id: "vl", text: "Video laryngoscope, stylet and bougie ready", match: ["video", "stylet", "bougie"] },
          { id: "brief", text: "Team briefing with a double set-up for front of neck access", match: ["briefing", "double set", "front of neck", "cricothyroid"] },
        ],
        explanation:
          "Thermal edema of the epiglottis and arytenoids can hide the cords and narrow the glottis. In one reported toddler, tubes of 3.5 and 3.0 mm could not be passed and the airway was secured through a rigid bronchoscope by otolaryngology. The most experienced airway team, smaller tubes and a surgical airway set belong in the room before induction. Distress increases turbulent flow through a narrowed airway, so he stays calm with his mother and avoids needless examination until he is asleep.",
        keyFeature: { topic: "burns", n: 2 },
        source: "alkaabi-thermal",
      },
      {
        id: "q4",
        kind: "short",
        update: "After intubation, laryngoscopy shows a swollen, blistered epiglottis and arytenoids. He is admitted to the paediatric ICU.",
        prompt: "What other injuries or concerns would you assess for in this child?",
        required: 2,
        accept: [
          { id: "scald", text: "Extent of the scalds on the face, chest and hands, with a burn size estimate", match: ["chest burn", "chest scald", "hand burn", "hand scald", "chin burn", "chin scald", "face burn", "facial burn", "tbsa", "body surface", "burn size", "burn extent", "extent of burn", "other burn", "other scald"] },
          { id: "esoph", text: "Esophageal thermal injury", match: ["esophagus", "esophageal", "oesophageal", "esophagoscopy"] },
          { id: "pattern", text: "Whether the burn pattern fits a spill and his developmental stage", match: ["pattern", "consistent", "developmental", "fits the history", "spill"] },
          { id: "nai", text: "Signs of inflicted injury, such as bruises, old fractures or immersion burns", match: ["abuse", "maltreatment", "inflicted", "non accidental", "nonaccidental", "bruise", "immersion", "skeletal survey"] },
          { id: "supervise", text: "Supervision at home, with child protection involvement if there are concerns", match: ["supervision", "child protection", "social work"] },
        ],
        explanation:
          "The scalds on his chin and chest need a size estimate and wound care, and the hand that pulled the teapot may be burned too. Swallowed hot liquid follows the path of swallowing, so the esophagus can be injured as well as the airway. Scalds from spills usually involve the upper body with irregular margins and depth, which fits his story. Immersion scalds with symmetrical burns and clear upper margins on the limbs, buttocks or perineum, or old fractures and unrelated injuries, would suggest inflicted injury. A full skin check and a careful history of how he was supervised belong in every scald assessment in a toddler.",
        keyFeature: { topic: "burns", n: 1 },
        source: "maguire-scalds",
      },
    ],
    sources: [VERHEES, ALKAABI, MAGUIRE],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "airway-03",
    topic: "airway",
    title: "Swollen lips and tongue",
    stem:
      "A 68-year-old man presents with 3 hours of progressive swelling of his lips and tongue. He takes ramipril, metformin and atorvastatin. He has no hives or itch. He is sitting upright and drooling. His voice is muffled and his tongue protrudes past his teeth. He has a full beard.",
    vitals: { temperature: "36.9°C", pulse: "92/minute", resp: "20/minute", bp: "154/88 mmHg", o2sat: "95% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features in this patient indicate a threatened airway?",
        required: 3,
        accept: [
          { id: "drool", text: "Drooling or inability to handle secretions", match: ["drooling", "drool", "secretion"], },
          { id: "voice", text: "Muffled voice", match: ["muffled", "voice"], },
          { id: "tongue", text: "Tongue swelling with protrusion", match: ["tongue"], },
          { id: "progress", text: "Rapid progression over a few hours", match: ["progression", "progressive", "progressing", "rapid"], },
          { id: "posture", text: "Sitting upright to maintain his airway", match: ["upright", "posture", "sitting"], },
        ],
        explanation:
          "Tongue and floor of mouth involvement, drooling and a change in voice mark angioedema that threatens the airway. ACE inhibitor angioedema does not respond reliably to epinephrine, steroids or antihistamines, so the airway plan must start early.",
        keyFeature: { topic: "airway", n: 2 },
        source: "cafg2",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What predictors of difficulty with airway management does this patient have?",
        required: 3,
        accept: [
          { id: "tongue", text: "Large swollen tongue obstructing the view", match: ["tongue"], },
          { id: "beard", text: "Beard impairs face mask seal", match: ["beard", "mask seal"], },
          { id: "obstruct", text: "Upper airway obstruction from edema", match: ["obstruction", "edema"], },
          { id: "mouth", text: "Limited mouth opening or unable to assess Mallampati", match: ["mouth opening", "mallampati"], },
          { id: "age", text: "Age over 55", match: ["age"], },
          { id: "secretions", text: "Secretions obscuring the view", match: ["secretion", "drooling", "drool"], },
        ],
        explanation:
          "LEMON and MOANS highlight obstruction, poor mask seal from the beard, age and an unassessable Mallampati view. Each predicts trouble with laryngoscopy, mask ventilation, or both. Several predictors together should push you away from an asleep technique.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q3",
        kind: "single",
        update: "Over 20 minutes his voice becomes more muffled. SpO2 is 94%. Anesthesia is 20 minutes away.",
        prompt: "Which of the following is the most appropriate airway approach for him?",
        options: [
          "Awake flexible bronchoscopic nasotracheal intubation",
          "Blind nasotracheal intubation",
          "Ketamine sedation and insertion of a supraglottic airway",
          "Observation while awaiting a response to icatibant",
          "Rapid sequence intubation with direct laryngoscopy",
        ],
        correct: 0,
        explanation:
          "Awake flexible bronchoscopic nasotracheal intubation is done with topical anesthesia and a prepared neck. When difficulty is predicted and the patient is still oxygenating, an awake technique keeps spontaneous breathing and airway tone. The nasal route avoids the swollen tongue. Paralysis first risks a cannot intubate, cannot oxygenate crisis. Supraglottic airways sit poorly over a swollen tongue and pharynx.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What preparations would you make before starting the awake intubation?",
        required: 3,
        accept: [
          { id: "ctm", text: "Mark the cricothyroid membrane by palpation or ultrasound", match: ["cricothyroid", "mark"], },
          { id: "kit", text: "Open a scalpel, bougie and tube kit at the bedside with a designated operator", match: ["scalpel", "front of neck", "kit"], },
          { id: "help", text: "Call anesthesia or ENT for a double setup", match: ["call anesthesia", "anesthesiologist", "ent", "otolaryngology", "double setup", "help"], },
          { id: "topical", text: "Topical airway anesthesia with lidocaine", match: ["topical", "lidocaine"], },
          { id: "vaso", text: "Nasal vasoconstrictor such as xylometazoline", match: ["vasoconstrictor", "xylometazoline", "oxymetazoline", "decongestant"], },
          { id: "tubes", text: "Small tubes (6.0 or smaller) loaded on the scope", match: ["small tube", "smaller tube", "6.0"], },
          { id: "o2", text: "High flow nasal oxygen during the procedure", match: ["high flow", "oxygen"], },
          { id: "dry", text: "Antisialagogue such as glycopyrrolate", match: ["glycopyrrolate", "antisialagogue"], },
          { id: "sed", text: "Minimal sedation only, such as low dose ketamine", match: ["minimal sedation", "low dose ketamine"], },
        ],
        unacceptable: [
          { text: "Give a paralytic before the airway is secured", match: ["give rocuronium", "give succinylcholine", "rapid sequence"] },
        ],
        explanation:
          "Awake intubation needs topical anesthesia, a dry field and a vasoconstricted nose. Because it may fail or provoke obstruction, a front of neck plan must be ready with the membrane marked before you start. Giving a paralytic removes the patient's own airway and is the step to avoid.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [CAFG2],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-04",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Highway rollover",
    stem:
      "A 24-year-old man is brought in after a highway rollover in which he was ejected. He weighs about 80 kg. GCS is 7 (E1 V2 M4). He has a scalp laceration, blood in the oropharynx and a cervical collar in place. Breath sounds are equal. FAST shows free fluid in the right upper quadrant.",
    vitals: { temperature: "35.6°C", pulse: "128/minute", resp: "28/minute", bp: "86/54 mmHg", o2sat: "91% on a nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What modifications would you make to your intubation technique because of possible cervical spine injury?",
        required: 3,
        accept: [
          { id: "milS", text: "Manual in-line stabilization by an assistant", match: ["in line", "inline", "mils", "manual stabilization"], },
          { id: "collar", text: "Open or remove the front of the collar during laryngoscopy", match: ["collar"], },
          { id: "vl", text: "Use a video laryngoscope", match: ["video"], },
          { id: "bougie", text: "Use a bougie", match: ["bougie"], },
          { id: "tilt", text: "Avoid head tilt and sniffing position", match: ["avoid head tilt", "no head tilt", "avoid sniffing", "no sniffing", "neutral position", "avoid extension", "avoid neck extension", "no neck extension"], },
          { id: "expert", text: "Most experienced operator performs the intubation", match: ["experienced"], },
        ],
        unacceptable: [{ text: "Blind nasotracheal intubation", match: ["blind nasal", "nasotracheal"], }],
        explanation:
          "Manual in-line stabilization with the front of the collar opened lets the mouth open while limiting neck movement. A video laryngoscope and bougie give a view without extension. Blind nasal intubation is unreliable and risky with facial or basal skull injury.",
        keyFeature: { topic: "airway", n: 4 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What actions would improve his hemodynamics before induction?",
        required: 2,
        accept: [
          { id: "blood", text: "Transfuse blood products and activate the massive transfusion protocol", match: ["blood", "transfusion", "transfuse", "massive transfusion", "prbc"], },
          { id: "txa", text: "Tranexamic acid 1 g IV", match: ["tranexamic", "txa"], },
          { id: "binder", text: "Pelvic binder if pelvic injury is suspected", match: ["binder"], },
          { id: "pressor", text: "Push-dose epinephrine or phenylephrine ready as a bridge", match: ["push dose", "phenylephrine", "epinephrine"], },
          { id: "hemostasis", text: "Control external bleeding such as the scalp laceration", match: ["bleeding", "hemorrhage control", "staple"], },
        ],
        unacceptable: [{ text: "Large volume crystalloid", match: ["2 l", "large volume crystalloid"], }],
        explanation:
          "Induction removes sympathetic tone, and a hypovolemic patient can arrest on the tube. Resuscitate first with blood products and hemorrhage control. A small dose of vasopressor can bridge the induction but does not replace blood. Large crystalloid volumes worsen coagulopathy.",
        keyFeature: { topic: "multiple-trauma", n: 6 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following medications and doses are most appropriate for his rapid sequence intubation?",
        options: [
          "Fentanyl 3 mcg/kg IV",
          "Ketamine 2 mg/kg IV",
          "Ketamine 0.5 to 1 mg/kg IV",
          "Midazolam 0.3 mg/kg IV",
          "Propofol 2 mg/kg IV",
          "Rocuronium 1.2 mg/kg IV",
          "Rocuronium 0.3 mg/kg IV",
          "Succinylcholine 0.5 mg/kg IV",
        ],
        select: 2,
        correct: [2, 5],
        explanation:
          "In hemorrhagic shock, ketamine at a reduced dose preserves sympathetic tone better than propofol or midazolam. Rocuronium at 1.2 mg/kg gives reliable intubating conditions even with slow circulation. Rocuronium 0.3 mg/kg and succinylcholine 0.5 mg/kg are underdoses that leave the patient partly paralyzed.",
        keyFeature: { topic: "airway", n: 5 },
        source: "mosier",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "He is intubated with a 7.5 tube at 23 cm at the teeth. Ten minutes later his SpO2 falls from 97% to 84% and the ventilator alarms for high peak pressure. A capnography waveform is present.",
        prompt: "What causes would you assess for immediately?",
        required: 3,
        accept: [
          { id: "displace", text: "Tube displacement, such as mainstem intubation", match: ["displaced", "displacement", "dislodged", "migrated", "mainstem", "dislodge", "migration"], },
          { id: "obstruct", text: "Tube obstruction from blood, secretions, kinking or biting", match: ["obstruction", "obstructed", "blocked", "kinked", "kink", "kinking", "plug", "plugged", "mucus", "biting", "bite"], },
          { id: "ptx", text: "Tension pneumothorax", match: ["pneumothorax"], },
          { id: "equip", text: "Equipment failure such as ventilator, circuit or oxygen supply", match: ["equipment", "ventilator", "circuit", "oxygen supply"], },
          { id: "hemo", text: "Hemothorax", match: ["hemothorax"], },
          { id: "stack", text: "Breath stacking with auto-PEEP", match: ["stacking", "auto peep"], },
          { id: "aspiration", text: "Aspiration", match: ["aspiration"], },
        ],
        explanation:
          "The DOPE approach covers displacement, obstruction, pneumothorax and equipment. A trauma patient on positive pressure may convert a small pneumothorax into a tension pneumothorax. Disconnect from the ventilator, bag by hand with 100% oxygen and work through each cause.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls",
      },
    ],
    sources: [ATLS, MOSIER, WALLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-05",
    topic: "airway",
    alsoTopics: ["seizures"],
    title: "Toddler who will not stop seizing",
    stem:
      "A 2-year-old boy is brought in with a generalized seizure that started 35 minutes ago. He received buccal midazolam at home, then two doses of IV lorazepam and a loading dose of IV levetiracetam in the emergency department. He is still seizing. His breathing is shallow. You decide to intubate.",
    vitals: { temperature: "38.9°C", pulse: "168/minute", resp: "12/minute", bp: "102/64 mmHg", o2sat: "90% on bag-mask support", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What endotracheal tube size and depth at the lips would you choose?",
        required: 2,
        accept: [
          { id: "size", text: "Cuffed tube, internal diameter 4.0 mm (or uncuffed 4.5 mm)", match: ["4.0", "4 mm", "4.5 uncuffed", "uncuffed 4.5"], },
          { id: "depth", text: "Depth about 12 cm at the lips (3 times the tube size)", match: ["12 cm", "12cm", "13 cm", "13cm", "3 times"], },
        ],
        unacceptable: [{ text: "Adult size tube", match: ["6.0", "7.0"], }],
        explanation:
          "For a cuffed tube, internal diameter is age divided by 4 plus 3.5, which gives 4.0 mm at age 2. Depth at the lips is about 3 times the tube size, so 12 cm. Have a half size smaller and larger ready, and use a length based tape to cross check.",
        keyFeature: { topic: "airway", n: 4 },
        source: "pals",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "How would you adapt your intubation technique for a child of this age?",
        required: 3,
        accept: [
          { id: "roll", text: "Shoulder roll to offset the large occiput", match: ["shoulder roll", "occiput"], },
          { id: "blade", text: "Straight blade to lift a floppy epiglottis", match: ["straight blade", "miller", "epiglottis"], },
          { id: "desat", text: "Expect rapid desaturation, so preoxygenate well and stop the attempt early", match: ["desaturation", "desaturate", "preoxygenate", "preoxygenation", "preoxygenating"], },
          { id: "brady", text: "Watch for bradycardia with hypoxia and have atropine ready", match: ["bradycardia", "atropine"], },
          { id: "tape", text: "Length based tape or weight based chart for doses and equipment", match: ["broselow", "length based", "weight based"], },
          { id: "volume", text: "Small tidal volumes with a pediatric bag", match: ["tidal volume", "pediatric bag", "small breath"], },
          { id: "apneic", text: "Apneic oxygenation with nasal cannula", match: ["apneic", "nasal cannula"], },
        ],
        explanation:
          "A toddler has a large occiput, a large tongue and a floppy epiglottis, so a shoulder roll and straight blade help. Higher oxygen consumption and small reserves cause fast desaturation, and hypoxia causes bradycardia. Weight based doses and equipment from a length based tape reduce errors.",
        keyFeature: { topic: "airway", n: 4 },
        source: "pals",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following neuromuscular blockers and doses is most appropriate for this child?",
        options: [
          "Rocuronium 14 mg IV",
          "Rocuronium 4 mg IV",
          "Succinylcholine 6 mg IV",
          "Vecuronium 1 mg IV",
          "No paralytic, induce with propofol alone",
        ],
        correct: 0,
        explanation:
          "Rocuronium 1.2 mg/kg is 14 mg for a 12 kg child and gives reliable intubating conditions. Succinylcholine 6 mg is only 0.5 mg/kg, well below the toddler dose of 1.5 to 2 mg/kg (2 mg/kg in infants). Remember that paralysis hides ongoing seizure activity, so continue anticonvulsant therapy and arrange EEG monitoring.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "After intubation the capnography trace is normal but SpO2 drifts to 88%. Breath sounds are quiet on the left. The tube is at 16 cm at the lips.",
        prompt: "What is the most likely problem and what is your immediate action?",
        required: 1,
        accept: [
          { id: "withdraw", text: "Right mainstem intubation, so withdraw the tube to about 12 cm and reassess", match: ["withdraw", "pull back", "right mainstem", "mainstem"], },
        ],
        unacceptable: [{ text: "Left chest needle decompression without reassessing tube depth", match: ["needle decompression", "needle thoracostomy", "finger thoracostomy", "chest tube"], }],
        explanation:
          "A tube 4 cm deeper than predicted with unilateral left sided quiet breath sounds is a right mainstem intubation. Capnography stays normal because the tube is in the airway. Pulling back to the calculated depth and rechecking is the fix. Decompressing a normal chest adds harm.",
        keyFeature: { topic: "airway", n: 6 },
        source: "pals",
      },
    ],
    sources: [PALS, WALLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-06",
    topic: "airway",
    title: "Drowsy with a fever and heavy breathing",
    stem:
      "A 46-year-old woman with obesity (height 163 cm, BMI 56) and obstructive sleep apnea presents with 4 days of cough and fever. VBG shows pH 7.21 and pCO2 78 mmHg. She is drowsy and tiring despite 45 minutes of BiPAP. She has a short, thick neck and a Mallampati class IV view.",
    vitals: { temperature: "38.7°C", pulse: "116/minute", resp: "32/minute", bp: "142/84 mmHg", o2sat: "84% on a nonrebreather mask", weight: "148 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features in this patient predict difficult bag-mask ventilation?",
        required: 3,
        accept: [
          { id: "obese", text: "Obesity", match: ["obesity", "obese", "bmi"], },
          { id: "osa", text: "Obstructive sleep apnea or snoring", match: ["sleep apnea", "osa", "snoring"], },
          { id: "stiff", text: "Stiff lungs or high resistance from pneumonia and hypoxemia", match: ["stiff", "pneumonia", "compliance"], },
          { id: "neck", text: "Short, thick neck", match: ["neck"], },
          { id: "mall", text: "Mallampati class IV", match: ["mallampati"], },
        ],
        explanation:
          "The MOANS mnemonic covers mask seal, obesity or obstruction, age, no teeth and stiff lungs. Obesity with sleep apnea and pneumonia gives poor compliance and upper airway collapse. Mallampati IV predicts both difficult laryngoscopy and difficult mask ventilation.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What steps would optimize preoxygenation and extend her safe apnea time?",
        required: 3,
        accept: [
          { id: "ramp", text: "Ramped, head up 25 to 30 degrees with ear level to sternal notch", match: ["ramp", "ramped", "head up", "ear to sternal", "sitting"], },
          { id: "niv", text: "Preoxygenate with BiPAP or CPAP to add PEEP", match: ["bipap", "cpap", "niv", "noninvasive", "positive pressure"], },
          { id: "apneic", text: "Apneic oxygenation with nasal cannula at 15 L/min or high flow nasal oxygen", match: ["apneic", "nasal cannula", "high flow", "hfno"], },
          { id: "time", text: "Preoxygenate for at least 3 minutes or to an end tidal oxygen of 85 to 90%", match: ["3 minute", "end tidal oxygen", "eto2"], },
          { id: "bvm", text: "Gentle bag-mask ventilation with PEEP between induction and laryngoscopy", match: ["bag mask", "bvm"], },
        ],
        explanation:
          "Obese patients desaturate within seconds of apnea because of low functional residual capacity. Head up positioning and positive pressure recruit alveoli and raise oxygen stores. Apneic oxygenation extends safe apnea time. Continue BiPAP right up to induction.",
        keyFeature: { topic: "airway", n: 4 },
        source: "weingart",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following steps before induction best prepares for a possible cannot intubate, cannot oxygenate event?",
        options: [
          "Load a 5.0 endotracheal tube on a stylet",
          "Mark the cricothyroid membrane with ultrasound",
          "Place a nasogastric tube before induction",
          "Prepare a transtracheal jet ventilator",
          "Ready a 14 gauge cannula for needle cricothyroidotomy",
        ],
        correct: 1,
        explanation:
          "Identify and mark the cricothyroid membrane with ultrasound while she is positioned. In obese patients the membrane is often impalpable. Ultrasound identifies it before induction so an emergency scalpel technique can start without delay. Needle and jet techniques have high failure and barotrauma rates and are not the recommended adult rescue.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [CAFG2, WEINGART],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-07",
    topic: "airway",
    alsoTopics: ["shock"],
    title: "Fever, confusion and low blood pressure",
    stem:
      "A 71-year-old woman with COPD presents with 2 days of fever and confusion. Lactate is 6.1 mmol/L. Chest X-ray shows right lower lobe consolidation. She has received 1 L of Ringer's lactate. She is increasingly drowsy and you plan to intubate.",
    vitals: { temperature: "39.2°C", pulse: "128/minute", resp: "34/minute", bp: "76/42 mmHg", o2sat: "86% on a nonrebreather mask", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What steps would you take before induction to reduce the risk of peri-intubation cardiac arrest?",
        required: 3,
        accept: [
          { id: "fluid", text: "Further fluid bolus if fluid responsive", match: ["fluid", "bolus"], },
          { id: "norepi", text: "Start a norepinephrine infusion before induction", match: ["norepinephrine", "levophed", "vasopressor", "pressor"], },
          { id: "push", text: "Push-dose epinephrine drawn up", match: ["push dose", "epinephrine"], },
          { id: "preox", text: "Optimize preoxygenation with BiPAP or high flow nasal oxygen", match: ["preoxygenate", "preoxygenation", "preoxygenating", "bipap", "high flow", "niv"], },
          { id: "apneic", text: "Apneic oxygenation", match: ["apneic"], },
          { id: "dose", text: "Reduce the induction drug dose", match: ["reduce", "reduced", "lower dose", "reduced dose"], },
          { id: "art", text: "Arterial line or frequent cycling of the blood pressure cuff", match: ["arterial line", "art line", "blood pressure cuff"], },
          { id: "expert", text: "Most experienced operator for a first pass success", match: ["experienced", "first pass"], },
        ],
        explanation:
          "Hypotension, hypoxemia and metabolic acidosis make this a physiologically difficult airway. Resuscitate before you intubate. Start a vasopressor, maximize preoxygenation and plan a reduced induction dose. Peri-intubation arrest is most often caused by unaddressed shock or hypoxemia.",
        keyFeature: { topic: "airway", n: 3 },
        source: "mosier",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "How should her shock change your choice or dosing of rapid sequence intubation drugs?",
        required: 3,
        accept: [
          { id: "reduce", text: "Reduce the induction dose, for example ketamine 0.5 to 1 mg/kg", match: ["reduce", "reduced", "half", "lower", "0.5 mg/kg"], },
          { id: "ketamine", text: "Choose a hemodynamically stable agent such as ketamine", match: ["ketamine", "etomidate", "stable agent"], },
          { id: "avoidprop", text: "Avoid or greatly reduce propofol and midazolam", match: ["avoid propofol", "avoid midazolam", "no propofol"], },
          { id: "roc", text: "Use full or higher paralytic dose, such as rocuronium 1.2 to 1.6 mg/kg, because circulation is slow", match: ["rocuronium 1.2", "rocuronium 1.6", "higher paralytic", "full paralytic", "increase paralytic", "higher dose rocuronium", "increase rocuronium", "more paralytic", "larger paralytic", "higher dose paralytic"], },
          { id: "nofent", text: "Omit fentanyl pretreatment", match: ["omit fentanyl", "no fentanyl", "avoid fentanyl"], },
        ],
        unacceptable: [
          { text: "Full dose propofol", match: ["propofol 2 mg/kg", "propofol 1.5 mg/kg"] },
        ],
        explanation:
          "Shock prolongs circulation time and magnifies the hypotensive effect of every sedative. Use less induction drug and more paralytic. Ketamine at about half the usual dose is a common Canadian choice. Full dose propofol in this patient risks cardiovascular collapse.",
        keyFeature: { topic: "airway", n: 5 },
        source: "mosier",
      },
      {
        id: "q3",
        kind: "short",
        update: "After intubation her BP is 64/38 and HR 134. The capnography trace is present. SpO2 is 93%.",
        prompt: "What are your immediate management steps?",
        required: 3,
        accept: [
          { id: "norepi", text: "Start or increase norepinephrine", match: ["norepinephrine", "levophed", "vasopressor", "pressor"], },
          { id: "push", text: "Push-dose epinephrine or phenylephrine", match: ["push dose", "phenylephrine", "epinephrine"], },
          { id: "fluid", text: "Fluid bolus", match: ["fluid", "bolus"], },
          { id: "vent", text: "Disconnect briefly and lower rate or tidal volume to relieve auto-PEEP", match: ["disconnect", "auto peep", "breath stacking"], },
          { id: "ptx", text: "Assess for tension pneumothorax with ultrasound or exam", match: ["pneumothorax"], },
          { id: "sedation", text: "Reduce post-intubation sedation doses", match: ["reduce sedation", "lower sedation", "decrease sedation", "less sedation", "reduce propofol", "lower propofol"], },
          { id: "abx", text: "Confirm antibiotics have been given", match: ["antibiotic"], },
        ],
        explanation:
          "Post-intubation hypotension comes from drug effect, loss of sympathetic drive and reduced venous return with positive pressure. In COPD, breath stacking and tension pneumothorax also drop the pressure. Norepinephrine is the first line vasopressor in septic shock.",
        keyFeature: { topic: "shock", n: 7 },
        source: "walls",
      },
    ],
    sources: [MOSIER, WALLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-08",
    topic: "airway",
    title: "Neck swelling after day surgery",
    stem:
      "A 49-year-old woman had a hemithyroidectomy this morning and was discharged home from day surgery 3 hours ago. She returns with neck tightness, difficulty swallowing and shortness of breath. The neck around the incision is tense and swollen. The wound is closed with subcuticular sutures and skin glue. She has soft inspiratory stridor.",
    vitals: { temperature: "36.8°C", pulse: "112/minute", resp: "26/minute", bp: "168/92 mmHg", o2sat: "94% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings in this patient suggest impending airway obstruction?",
        required: 3,
        accept: [
          { id: "stridor", text: "Stridor", match: ["stridor"], },
          { id: "swelling", text: "Tense, expanding neck swelling", match: ["swelling", "tense", "expanding"], },
          { id: "swallow", text: "Difficulty swallowing", match: ["swallowing", "swallow", "dysphagia"], },
          { id: "sob", text: "Shortness of breath and tachypnea", match: ["tachypnea", "shortness of breath", "dyspnea"], },
          { id: "o2", text: "Falling oxygen saturation", match: ["saturation", "hypoxia", "hypoxemia", "spo2"], },
          { id: "hr", text: "Tachycardia and agitation", match: ["tachycardia", "agitation"], },
        ],
        explanation:
          "A post-thyroidectomy hematoma compresses the airway and causes venous congestion and laryngeal edema. Stridor, dysphagia and a tense neck mean obstruction is close. A normal saturation is a late and unreliable reassurance.",
        keyFeature: { topic: "airway", n: 2 },
        source: "das-thyroid",
      },
      {
        id: "q2",
        kind: "single",
        update: "The surgeon is 30 minutes away. Her stridor becomes louder and she cannot lie flat.",
        prompt: "Which of the following is the most appropriate immediate step?",
        options: [
          "CT of the neck before any intervention",
          "Nebulized epinephrine and IV dexamethasone",
          "Needle aspiration of the hematoma",
          "Open the wound at the bedside to evacuate the hematoma",
          "Rapid sequence intubation in the emergency department",
        ],
        correct: 3,
        explanation:
          "Open the wound at the bedside by cutting the sutures and opening the skin and deep layers to evacuate the hematoma. Bedside wound opening decompresses the airway and often relieves obstruction at once. Consensus guidance teaches skin exposure, cutting sutures, opening skin, opening muscle and packing the wound. Intubating through a compressed, edematous airway before decompression is very difficult. Needle aspiration does not remove clot.",
        keyFeature: { topic: "airway", n: 4 },
        source: "das-thyroid",
      },
      {
        id: "q3",
        kind: "short",
        update: "After decompression she improves, but the surgeon asks that she be intubated before transfer to the operating room.",
        prompt: "What are the elements of your airway plan?",
        required: 3,
        accept: [
          { id: "expert", text: "Most experienced airway operator, with anesthesia involved", match: ["experienced", "anesthesia"], },
          { id: "vl", text: "Video laryngoscope", match: ["video"], },
          { id: "small", text: "Smaller tubes ready because of laryngeal edema", match: ["smaller", "small tube"], },
          { id: "awake", text: "Consider an awake technique", match: ["awake"], },
          { id: "fona", text: "Front of neck access kit open, knowing that anatomy may be distorted", match: ["front of neck", "cricothyrotomy", "scalpel"], },
          { id: "preox", text: "Preoxygenate head up with apneic oxygenation", match: ["preoxygenate", "preoxygenation", "preoxygenating", "apneic", "head up"], },
          { id: "sga", text: "Second generation supraglottic airway as a backup", match: ["supraglottic", "sga", "lma"], },
          { id: "bougie", text: "Bougie", match: ["bougie"], },
        ],
        explanation:
          "Edema can persist after the hematoma is drained. Plan for difficulty with the best operator, a video laryngoscope, small tubes and a ready front of neck plan. Swelling and tracheal deviation can make the cricothyroid membrane hard to find, so identify it before induction.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [DASTHYROID, CAFG2],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-09",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Found unresponsive in the morning",
    stem:
      "A 46-year-old woman is brought to the emergency department by ambulance after her husband found her unresponsive in bed at 08:00. She was well when he last saw her at 22:00. An empty bottle of phenobarbital 100 mg tablets was beside her. It was dispensed 5 days ago with 60 tablets. She takes 100 mg each night for epilepsy and has no other medical problems. GCS is 6 (E1 V1 M4). Her pupils are 3 mm and reactive. Her respirations are shallow and snoring, and her gag is weak. Her skin is cool. Capillary glucose is 6.1 mmol/L. Venous gas: pH 7.22, pCO2 68 mmHg. The phenobarbital concentration is 520 umol/L (therapeutic 65 to 170 umol/L).",
    vitals: { temperature: "35.2°C rectal", pulse: "104/minute", resp: "7/minute", bp: "84/46 mmHg", o2sat: "89% on a nonrebreather mask", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What changes to a standard rapid sequence intubation would you make for her?",
        required: 2,
        accept: [
          { id: "fluid", text: "Fluid bolus before induction", match: ["fluid", "bolus", "crystalloid", "saline", "ringer"] },
          { id: "pressor", text: "Vasopressor ready or running, such as norepinephrine or push-dose epinephrine", match: ["vasopressor", "pressor", "norepinephrine", "levophed", "push dose", "epinephrine", "phenylephrine"] },
          { id: "agent", text: "A hemodynamically stable induction agent at a reduced dose", match: ["reduced dose", "lower dose", "half dose", "hemodynamically stable", "ketamine", "etomidate"] },
          { id: "bvm", text: "Assisted bag-mask ventilation with PEEP during preoxygenation because she is hypoventilating", match: ["bag mask", "bvm", "bag valve", "assisted ventilation", "assist ventilation", "peep", "noninvasive", "bipap"] },
        ],
        unacceptable: [{ text: "Full dose propofol", match: ["propofol"] }],
        explanation:
          "She is hypotensive, hypoventilating and acidemic, and each of these makes induction and apnea dangerous. Her shock index is 104 divided by 84, about 1.2, which predicts hypotension after intubation. Give fluid first, have a vasopressor ready or running, and use a hemodynamically stable induction agent. Her slow shallow breathing means a face mask alone will not preoxygenate her, so assist her breaths with a bag-mask and PEEP. Full dose propofol would deepen her hypotension.",
        keyFeature: { topic: "airway", n: 4 },
        source: "mosier-2015",
      },
      {
        id: "q2",
        kind: "short",
        update: "She is intubated and an orogastric tube is placed. After 2 L of crystalloid her BP is 82/44 mmHg and her temperature is 35.0°C.",
        prompt: "What treatments specific to her poisoning and its effects would you start now?",
        required: 2,
        accept: [
          { id: "mdac", text: "Multiple-dose activated charcoal through the orogastric tube", match: ["multiple dose", "multi dose", "repeat dose charcoal", "repeated charcoal", "mdac", "activated charcoal", "charcoal"] },
          { id: "ne", text: "Norepinephrine infusion for persistent hypotension", match: ["norepinephrine", "levophed", "vasopressor", "pressor"] },
          { id: "warm", text: "Active rewarming", match: ["rewarm", "rewarming", "warming", "forced air", "bair", "warm fluid"] },
          { id: "pocus", text: "Bedside ultrasound to guide further fluid", match: ["ultrasound", "pocus", "echo"] },
        ],
        unacceptable: [{ text: "Flumazenil", match: ["flumazenil"] }],
        explanation:
          "Phenobarbital is one of the few drugs whose elimination is increased by multiple-dose activated charcoal, and a life-threatening ingestion justifies it. Charcoal is safe only with an intact or protected airway, which she now has through her endotracheal tube and orogastric tube. Barbiturates have no antidote, so the rest is support. Hypotension after 2 L of fluid needs a vasopressor such as norepinephrine, and she needs active rewarming. Flumazenil acts at the benzodiazepine binding site and does not reverse a barbiturate.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aact-mdac",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Waveform capnography shows a steady square waveform with an end tidal CO2 of 34 mmHg. Peak airway pressure is 22 cmH2O. An arterial gas 20 minutes later shows pH 7.16 and PaCO2 58 mmHg.",
        prompt: "Which of the following best explains the difference between her end tidal and arterial CO2 values?",
        options: [
          "Bronchospasm with air trapping",
          "Esophageal placement of the endotracheal tube",
          "Low cardiac output increasing dead space",
          "Metabolic acidosis from poor perfusion",
          "Overventilation from a high set rate",
        ],
        correct: 2,
        explanation:
          "A steady square waveform confirms that the tube is in the trachea, but the end tidal value is 24 mmHg below the arterial PaCO2. The usual gap is about 5 mmHg. The gap is a marker of physiologic dead space, and a low cardiac output leaves ventilated alveoli poorly perfused. Esophageal placement would not give a sustained waveform. Bronchospasm prolongs the upstroke and steepens the plateau, and she has a square waveform with a normal peak pressure. Overventilation would lower both values together. Metabolic acidosis lowers bicarbonate and does not by itself widen the gap. Her ventilator settings should be guided by arterial gases while her circulation is poor.",
        keyFeature: { topic: "airway", n: 6 },
        source: "kodali-capnography",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "Six hours later she remains unresponsive off sedation and still needs norepinephrine. Her phenobarbital concentration has risen to 580 umol/L despite charcoal every 4 hours.",
        prompt: "What further treatment would you arrange to remove the phenobarbital?",
        required: 1,
        accept: [{ id: "hd", text: "Intermittent hemodialysis, with charcoal continued", match: ["hemodialysis", "dialysis", "extracorporeal", "ectr", "hemoperfusion"] }],
        explanation:
          "Long-acting barbiturates such as phenobarbital are dialyzable. EXTRIP recommends extracorporeal treatment in severe long-acting barbiturate poisoning when there is prolonged coma, respiratory depression needing mechanical ventilation, shock, or a concentration that stays high or rises despite multiple-dose charcoal. She meets all of these. Intermittent hemodialysis is the preferred mode, and charcoal is continued during it.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-barbiturate",
      },
    ],
    sources: [MOSIER2, MDAC, KODALI, EXTRIPBARB],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "airway-10",
    topic: "airway",
    alsoTopics: ["asthma-copd"],
    title: "Tiring on high flow",
    stem:
      "A 9-year-old girl with asthma is brought to the emergency department by her parents with 2 days of cough and wheeze after a cold. Her PRAM score was 11 at triage. In the 2 hours since, she has had nebulized salbutamol without a break, ipratropium, IV methylprednisolone 2 mg/kg and IV magnesium sulfate 50 mg/kg. High flow nasal cannula was started 40 minutes ago. She is now limp and no longer answers her mother, and she breathes more slowly with little chest movement. Breath sounds are barely audible. Venous gas: pH 7.13, pCO2 81 mmHg. The paediatric ICU team is 30 minutes away and agrees that she needs intubation now.",
    vitals: { temperature: "37.6°C", pulse: "172/minute", resp: "24/minute", bp: "96/50 mmHg", o2sat: "87% on high flow nasal cannula with FiO2 1.0", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following neuromuscular blockers and doses is most appropriate for her intubation?",
        options: ["Cisatracurium 0.15 mg/kg IV", "Rocuronium 0.6 mg/kg IV", "Rocuronium 1.2 mg/kg IV", "Succinylcholine 2 mg/kg IV", "Vecuronium 0.1 mg/kg IV"],
        correct: 2,
        explanation:
          "Rocuronium 1.2 mg/kg IV, about 31 mg, is the preferred paralytic in critical asthma in children because it works quickly and has a better side effect profile than succinylcholine. Its longer action also helps, because ventilator synchrony matters in the first hours after intubation. Succinylcholine works as fast but wears off within minutes and can cause bradycardia in children. Rocuronium 0.6 mg/kg, vecuronium and cisatracurium have a slower onset, which lengthens apnea in a child who is already hypoxemic and will desaturate quickly.",
        keyFeature: { topic: "airway", n: 5 },
        source: "xiang-asthma",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Apart from the induction drug, the paralytic and the ventilator settings, what would you prepare before inducing this child?",
        required: 3,
        accept: [
          { id: "fluid", text: "Fluid bolus before induction", match: ["fluid", "bolus", "crystalloid", "saline", "ringer"] },
          { id: "pressor", text: "Epinephrine or another vasopressor drawn up and ready", match: ["epinephrine", "vasopressor", "pressor", "push dose"] },
          { id: "operator", text: "Most experienced operator available, such as paediatric anesthesia or the ICU team", match: ["experienced", "anesthesia", "anaesthesia", "anesthesiologist", "intensivist", "picu"] },
          { id: "vl", text: "Video laryngoscope", match: ["video"] },
          { id: "access", text: "Reliable IV access, with a second line or intraosseous access", match: ["iv access", "vascular access", "second iv", "second line", "two iv", "intraosseous", "io access", "io needle"] },
          { id: "backup", text: "Backup plans and equipment for a failed first attempt", match: ["backup", "back up", "plan b", "difficult airway", "supraglottic", "front of neck", "cricothyroid", "surgical airway"] },
        ],
        unacceptable: [
          { text: "Bag quickly after intubation to bring down the pCO2", match: ["hyperventilate", "fast rate", "high rate", "blow off", "normalize co2", "normalise co2"] },
        ],
        explanation:
          "Children with critical asthma often become hypotensive after intubation because positive pressure and trapped air reduce the return of blood to the heart. Give a fluid bolus first through reliable IV access and have epinephrine or another vasopressor ready. The most experienced person available should intubate, ideally with a video laryngoscope, to limit attempts and apnea in a child who is already hypoxemic. Backup plans and equipment for a failed first attempt belong in the room before induction. Once the tube is in, bagging fast to correct a pCO2 of 81 mmHg worsens air trapping and can cause collapse.",
        keyFeature: { topic: "airway", n: 4 },
        source: "xiang-asthma",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "She is intubated and ventilated slowly. A chest X-ray shows a left pneumothorax with a 2 cm rim, a line of air along the heart border and air in the soft tissues of the neck. BP is 92/50 mmHg and SpO2 is 93%.",
        prompt: "How would you manage these findings?",
        required: 2,
        accept: [
          { id: "tube", text: "Left chest tube now", match: ["chest tube", "chest drain", "thoracostomy", "pigtail", "intercostal drain"] },
          { id: "vent", text: "Keep ventilation slow with a long expiration and low pressures", match: ["slow rate", "low rate", "long expiratory", "expiratory time", "low pressure", "lower pressure", "reduce pressure", "permissive", "minimize pressure", "reduce rate"] },
          { id: "decomp", text: "Needle or finger decompression ready if tension develops", match: ["needle", "finger", "decompress", "decompression"] },
          { id: "pmed", text: "Observe the pneumomediastinum and subcutaneous air without drainage", match: ["observe pneumomediastinum", "observation pneumomediastinum", "monitor pneumomediastinum", "pneumomediastinum benign", "pneumomediastinum conservative", "no drain pneumomediastinum", "no drainage pneumomediastinum", "observe subcutaneous", "subcutaneous emphysema observation", "monitor subcutaneous"] },
        ],
        unacceptable: [
          { text: "Observe the pneumothorax without a drain", match: ["observe pneumothorax", "observation pneumothorax", "repeat x ray only"] },
          { text: "Increase the ventilator rate", match: ["increase rate", "increase respiratory rate", "faster rate"] },
        ],
        explanation:
          "A pneumothorax in a child on positive pressure ventilation can turn into a tension pneumothorax at any moment, so she needs a chest tube now even though she is stable. Keep ventilation slow with a long expiration, because high rates and pressures drive more air leak. Have needle or finger decompression ready in case she deteriorates before the drain is in. Pneumomediastinum and subcutaneous air are usually benign and need watching, not drainage, but they are a signal to look for a pneumothorax, as here.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "xiang-asthma",
      },
    ],
    sources: [XIANG],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "airway-11",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Fall down the stairs",
    stem:
      "A 58-year-old man fell down 12 stairs while intoxicated. GCS is 6 (E1 V1 M4). His left pupil is 6 mm and sluggish. His breathing is irregular. A cervical collar is in place. There are no other injuries on primary survey. You are in a community hospital without neurosurgery.",
    vitals: { temperature: "36.4°C", pulse: "58/minute", resp: "10/minute", bp: "188/102 mmHg", o2sat: "92% on a nonrebreather mask", weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What physiologic targets will you maintain through intubation and afterward?",
        required: 3,
        accept: [
          { id: "o2", text: "Avoid hypoxia, keep SpO2 above 90% and ideally 94% or higher", match: ["hypoxia", "spo2", "saturation", "oxygen", "avoid hypoxia", "no hypoxia", "avoid hypoxemia"], },
          { id: "bp", text: "Avoid hypotension, keep systolic BP at 100 mmHg or higher", match: ["hypotension", "systolic", "blood pressure", "sbp", "map", "avoid hypotension", "no hypotension"], },
          { id: "co2", text: "Normocapnia, PaCO2 35 to 45 mmHg or end tidal CO2 about 35 to 40", match: ["normocapnia", "pco2", "paco2", "etco2", "end tidal", "co2", "avoid hyperventilation", "no hyperventilation", "normoventilation", "normoventilate"], },
          { id: "hob", text: "Head of bed up 30 degrees once the spine is managed", match: ["head of bed", "30 degree", "head up"], },
          { id: "glucose", text: "Normal glucose", match: ["glucose"], },
          { id: "temp", text: "Normothermia", match: ["normothermia", "temperature", "fever"], },
        ],
        unacceptable: [{ text: "Prolonged hyperventilation to a low pCO2", match: ["pco2 25", "co2 25", "pco2 30", "co2 30"], }],
        explanation:
          "A single episode of hypoxia or hypotension raises mortality in severe brain injury. Keep oxygenation and blood pressure up and aim for normal pCO2. Brief hyperventilation is only a bridge for active herniation, and prolonged low pCO2 causes cerebral ischemia.",
        keyFeature: { topic: "airway", n: 4 },
        source: "btf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about induction agents is most accurate for this patient?",
        options: [
          "Full dose propofol is the preferred agent",
          "IV lidocaine pretreatment is required",
          "Ketamine is contraindicated in head injury",
          "Ketamine may be used for induction",
          "Succinylcholine is contraindicated in head injury",
        ],
        correct: 3,
        explanation:
          "Ketamine may be used because it maintains blood pressure and has not been shown to worsen outcome in brain injury. The old concern that ketamine raises intracranial pressure has not held up, and it protects cerebral perfusion by maintaining blood pressure. Propofol lowers pressure, which can drop cerebral perfusion. Lidocaine pretreatment has no proven benefit. Succinylcholine is acceptable in acute head injury.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "After intubation, what methods confirm both tube position and adequate ventilation?",
        required: 2,
        accept: [
          { id: "abg", text: "Arterial blood gas to correlate PaCO2 with end tidal CO2", match: ["blood gas", "abg"], },
          { id: "cap", text: "Continuous waveform capnography", match: ["capnography", "capnograph", "etco2", "end tidal"], },
          { id: "cxr", text: "Chest X-ray for tube depth", match: ["x ray", "xray", "cxr"], },
          { id: "spo2", text: "Pulse oximetry", match: ["oximetry", "spo2", "saturation"], },
        ],
        explanation:
          "Waveform capnography confirms tracheal placement and trends ventilation. An early blood gas calibrates the end tidal value against arterial pCO2, which matters when you are targeting a narrow pCO2 range. A chest X-ray confirms depth, not tracheal placement.",
        keyFeature: { topic: "airway", n: 6 },
        source: "btf",
      },
      {
        id: "q4",
        kind: "short",
        update: "He needs transfer to a neurosurgical centre 2 hours away.",
        prompt: "What airway related steps would you take before he leaves?",
        required: 3,
        accept: [
          { id: "secure", text: "Secure the tube and document its depth", match: ["secure", "depth"], },
          { id: "cxr", text: "Chest X-ray to confirm tube position", match: ["x ray", "xray", "cxr"], },
          { id: "og", text: "Orogastric tube", match: ["orogastric", "og tube", "gastric tube"], },
          { id: "cap", text: "Continuous capnography during transport", match: ["capnography", "capnograph", "etco2", "end tidal"], },
          { id: "sed", text: "Sedation and analgesia infusions running", match: ["sedation", "analgesia", "infusion"], },
          { id: "kit", text: "Spare airway equipment and drugs for reintubation", match: ["spare", "backup", "equipment"], },
          { id: "gas", text: "Blood gas on the transport ventilator settings", match: ["blood gas", "abg", "ventilator"], },
        ],
        explanation:
          "Tubes are dislodged during moves, and reintubation in a moving vehicle is hard. Confirm and document position, decompress the stomach, run sedation and use continuous capnography. Checking a gas on the transport ventilator avoids unplanned hypercapnia or hypocapnia en route.",
        keyFeature: { topic: "multiple-trauma", n: 8 },
        source: "atls",
      },
    ],
    sources: [BTF, WALLS, ATLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-12",
    topic: "airway",
    alsoTopics: ["arrhythmia"],
    title: "Back from the rehabilitation hospital",
    stem:
      "A 31-year-old man is brought to the emergency department by ambulance from a rehabilitation hospital. He had a complete C5 spinal cord injury in a diving accident 3 weeks ago and had cervical fixation. For 2 days he has had fever and a wet cough that he cannot clear. He is tetraplegic and breathes with his abdomen. There are coarse crackles and bronchial breathing over the right lower chest. Chest X-ray shows right lower lobe consolidation. Venous gas: pH 7.26, pCO2 66 mmHg. Assisted coughing and suctioning have not helped and he is tiring. You decide to intubate him.",
    vitals: { temperature: "38.8°C", pulse: "52/minute", resp: "34/minute", bp: "92/54 mmHg", o2sat: "88% on 10 L/minute by face mask", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following complications is most likely if succinylcholine is used for his intubation?",
        options: [
          "Hyperkalemic cardiac arrest",
          "Malignant hyperthermia",
          "Masseter muscle rigidity",
          "Prolonged apnea from slow metabolism",
          "Raised intraocular pressure",
        ],
        correct: 0,
        explanation:
          "Denervated muscle grows acetylcholine receptors across its whole membrane, not only at the junction. Succinylcholine depolarizes all of them at once, and the potassium that leaks out can cause ventricular fibrillation or asystole. This receptor spread follows upper or lower motor denervation and immobilization, and three weeks after a complete cord injury he has both. Malignant hyperthermia needs an inherited susceptibility he is not known to have. Masseter rigidity is uncommon and is not linked to cord injury. Prolonged apnea needs a pseudocholinesterase deficiency, which his injury does not cause. The small rise in intraocular pressure matters only with an open globe injury.",
        keyFeature: { topic: "airway", n: 5 },
        source: "martyn-sux",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What drugs would you choose for his rapid sequence intubation, and what would you have ready?",
        required: 2,
        accept: [
          { id: "roc", text: "Rocuronium 1.2 mg/kg IV, about 86 mg, or another nondepolarizing blocker", match: ["rocuronium", "nondepolarizing", "non depolarizing", "vecuronium"] },
          { id: "atropine", text: "Atropine before laryngoscopy or drawn up, because he is already bradycardic", match: ["atropine", "glycopyrrolate"] },
          { id: "agent", text: "A hemodynamically stable induction agent such as etomidate", match: ["etomidate", "ketamine", "reduced dose", "hemodynamically stable"] },
          { id: "pressor", text: "Norepinephrine or push-dose epinephrine ready", match: ["norepinephrine", "vasopressor", "pressor", "push dose", "epinephrine"] },
          { id: "fluid", text: "Fluid bolus before induction", match: ["fluid", "bolus", "crystalloid"] },
        ],
        unacceptable: [{ text: "Succinylcholine", match: ["succinylcholine", "suxamethonium", "sux", "anectine"], dangerous: true }],
        explanation:
          "The Consortium for Spinal Cord Medicine advises avoiding succinylcholine after the first 48 hours of a cord injury and using a nondepolarizing blocker instead, such as rocuronium 1.2 mg/kg, about 86 mg. Loss of sympathetic tone below C5 leaves him bradycardic and hypotensive, and laryngoscopy or hypoxia can trigger profound bradycardia or arrest. Atropine before airway manipulation is appropriate because his pulse is already 52/minute. Positive pressure ventilation can drop his pressure sharply, so use a hemodynamically stable agent such as etomidate and have a vasopressor with both alpha and beta effects ready, such as norepinephrine.",
        keyFeature: { topic: "airway", n: 5 },
        source: "cscm-sci",
      },
      {
        id: "q3",
        kind: "short",
        update: "He is intubated and ventilated. Two hours later, during tracheal suctioning, his pulse falls to 30/minute and BP to 66/38 mmHg. SpO2 is 90%.",
        prompt: "What are your immediate actions?",
        required: 2,
        accept: [
          { id: "stop", text: "Stop suctioning and ventilate with 100% oxygen", match: ["stop suction", "stop suctioning", "100% oxygen", "100 oxygen", "fio2 1", "hand ventilate", "bag"] },
          { id: "atropine", text: "Atropine IV, 0.5 to 1 mg, repeated", match: ["atropine"] },
          { id: "epi", text: "Epinephrine infusion, 2 to 10 mcg/minute", match: ["epinephrine", "adrenaline", "isoproterenol", "isoprenaline", "dopamine"] },
          { id: "pace", text: "Transcutaneous pacing", match: ["pacing", "pace", "pacer"] },
          { id: "amino", text: "Aminophylline IV", match: ["aminophylline", "theophylline"] },
        ],
        explanation:
          "Tracheal suctioning is a strong vagal stimulus, and after a cervical cord injury no sympathetic outflow opposes it. A pulse of 30/minute with a BP of 66/38 mmHg is unstable bradycardia and needs treatment now. Stop suctioning and give 100% oxygen, then atropine 0.5 mg IV, repeated every 3 to 5 minutes up to 3 mg. If atropine fails, start an epinephrine infusion at 2 to 10 mcg/minute or pace. The European Resuscitation Council also advises considering aminophylline for bradycardia after spinal cord injury.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "erc-als-2025",
      },
    ],
    sources: [MARTYN, CSCM, ERCALS],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "airway-13",
    topic: "airway",
    title: "Checking the tube after a hard intubation",
    stem:
      "A 64-year-old man with a large intracerebral hemorrhage is intubated in your rural emergency department for a GCS of 6 and repeated vomiting. He weighs 90 kg. The laryngoscopy view was poor and you did not see the tube pass through the cords. Breath sounds are heard in both axillae. SpO2 is 95% one minute after intubation. Preintubation vitals were HR 92, BP 176/94, SpO2 98% after preoxygenation.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most reliable immediate test to confirm tracheal placement?",
        options: [
          "Auscultation over both lungs and the epigastrium",
          "Chest X-ray after intubation",
          "Condensation visible in the tube",
          "Continuous capnography with a sustained waveform",
          "Stable pulse oximetry saturation",
        ],
        correct: 3,
        explanation:
          "A sustained waveform on continuous capnography over several breaths is the standard for confirming tracheal placement. Oxygen saturation can stay normal for minutes after an esophageal intubation in a well preoxygenated patient. Auscultation and misting are unreliable. A chest X-ray shows depth, not whether the tube is in the trachea.",
        keyFeature: { topic: "airway", n: 6 },
        source: "nap4",
      },
      {
        id: "q2",
        kind: "short",
        update: "Capnography shows a small waveform that fades to zero over five breaths.",
        prompt: "What is the most likely explanation?",
        required: 1,
        accept: [{ id: "eso", text: "Esophageal intubation", match: ["esophageal", "esophagus", "oesophageal", "oesophagus"], }],
        unacceptable: [{ text: "Cardiac arrest", match: ["arrest"], }],
        explanation:
          "Gas pushed into the stomach during bag-mask ventilation can give a few breaths of CO2 that fade quickly. A trace that disappears means the tube is not in the trachea. This patient has a pulse and a blood pressure, so low cardiac output does not explain it.",
        keyFeature: { topic: "airway", n: 6 },
        source: "nap4",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are your immediate actions?",
        required: 2,
        accept: [
          { id: "remove", text: "Remove the tube", match: ["remove", "pull", "take out"], },
          { id: "bvm", text: "Reoxygenate with bag-mask ventilation or a supraglottic airway", match: ["bag", "bvm", "reoxygenate", "supraglottic"], },
          { id: "reintubate", text: "Reintubate with a video laryngoscope and bougie, seeing the tube pass", match: ["reintubate", "reintubation", "video", "bougie"], },
          { id: "help", text: "Call for help", match: ["help"], },
        ],
        unacceptable: [
          { text: "Leave the tube and wait for a chest X-ray", match: ["leave the tube", "keep the tube", "leave tube in", "wait for chest x ray", "wait for cxr"], dangerous: true },
        ],
        explanation:
          "No trace means wrong place. Remove the tube, reoxygenate and try again with a better view. Leaving an esophageal tube while waiting for an X-ray causes hypoxic arrest, one of the leading causes of airway deaths in audits.",
        keyFeature: { topic: "airway", n: 6 },
        source: "nap4",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "He is reintubated and capnography confirms placement. Twenty minutes later in the CT scanner, the respiratory therapist reports that the capnography trace has disappeared and SpO2 is 88% and falling.",
        prompt: "What are your immediate actions?",
        required: 3,
        accept: [
          { id: "remove", text: "If in doubt, remove the tube and bag-mask ventilate", match: ["remove", "pull"], },
          { id: "hand", text: "Disconnect the ventilator and bag by hand with 100% oxygen", match: ["disconnect", "hand bag", "bag", "bvm"], },
          { id: "pulse", text: "Check for a pulse", match: ["pulse"], },
          { id: "check", text: "Check tube depth and look with a video laryngoscope", match: ["depth", "video", "laryngoscope", "laryngoscopy", "visualize", "visualization"], },
          { id: "suction", text: "Pass a suction catheter to check for obstruction", match: ["suction"], },
          { id: "equip", text: "Check the circuit, oxygen source and capnography line", match: ["circuit", "oxygen source", "equipment", "sampling line", "capnography line", "disconnection"], },
        ],
        explanation:
          "A lost trace after a transfer is displacement until proven otherwise, but also check for arrest and circuit disconnection. Hand ventilation separates ventilator problems from patient problems. If the tube cannot be confirmed in the trachea, take it out and oxygenate.",
        keyFeature: { topic: "airway", n: 6 },
        source: "nap4",
      },
    ],
    sources: [NAP4],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-14",
    topic: "airway",
    alsoTopics: ["pre-eclampsia"],
    title: "Seizure late in pregnancy",
    stem:
      "A 29-year-old woman at 34 weeks gestation presents after a generalized seizure at home. On arrival she has a second seizure lasting 3 minutes. She receives magnesium sulfate 4 g IV. She remains obtunded with GCS 7 and snoring respirations and she has vomited once.",
    vitals: { temperature: "37.0°C", pulse: "118/minute", resp: "22/minute", bp: "178/112 mmHg", o2sat: "91% on a nonrebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most strongly supports intubating her now?",
        options: [
          "Hypertension with a blood pressure of 178/112 mmHg",
          "Persistent GCS 7, airway obstruction and recent vomiting",
          "Pregnancy at a gestational age of 34 weeks",
          "Second generalized seizure lasting 3 minutes",
          "Tachycardia with a heart rate of 118/minute",
        ],
        correct: 1,
        explanation:
          "A persistently low GCS with obstruction and vomiting means she cannot protect her airway. Aspiration is common in pregnancy and the airway will get harder with time. Hypertension and seizures are treated with antihypertensives and magnesium, not intubation alone.",
        keyFeature: { topic: "airway", n: 2 },
        source: "oaa-das",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What adjustments would you make to your airway plan because she is pregnant?",
        required: 3,
        accept: [
          { id: "small", text: "Smaller tube, 6.0 to 7.0 mm, because of airway edema", match: ["smaller", "6.0", "6.5", "small tube"], },
          { id: "lud", text: "Left uterine displacement or left lateral tilt", match: ["uterine displacement", "left lateral", "tilt", "uterus"], },
          { id: "ramp", text: "Head up or ramped position", match: ["head up", "ramp", "ramped"], },
          { id: "preox", text: "Thorough preoxygenation with apneic oxygenation because she desaturates fast", match: ["preoxygenate", "preoxygenation", "preoxygenating", "apneic", "desaturation", "desaturate"], },
          { id: "expert", text: "Most experienced operator and early call to obstetrics and anesthesia", match: ["experienced", "anesthesia", "obstetric"], },
          { id: "vl", text: "Video laryngoscope", match: ["video"], },
          { id: "sga", text: "Second generation supraglottic airway as the rescue device", match: ["supraglottic", "sga", "lma"], },
          { id: "surge", text: "Blunt the hypertensive surge with an opioid such as fentanyl or with labetalol", match: ["fentanyl", "labetalol", "hypertensive surge", "pressor response"], },
          { id: "aspir", text: "Suction ready and plan for aspiration risk", match: ["suction", "aspiration"], },
        ],
        explanation:
          "Pregnancy brings airway edema, fast desaturation, aspiration risk and aortocaval compression. Use a smaller tube, position head up with the uterus displaced left, and preoxygenate fully. In pre-eclampsia, laryngoscopy can spike the blood pressure and cause intracranial hemorrhage, so blunt that response.",
        keyFeature: { topic: "airway", n: 4 },
        source: "oaa-das",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about her rapid sequence intubation drugs is correct?",
        options: [
          "Ketamine is contraindicated in pregnancy",
          "Magnesium is a contraindication to rocuronium",
          "Magnesium may prolong rocuronium blockade",
          "Neuromuscular blockers would paralyze the fetus",
          "Succinylcholine dose must be tripled in pregnancy",
        ],
        correct: 2,
        explanation:
          "Magnesium potentiates nondepolarizing blockers, so rocuronium may last longer. Magnesium prolongs and deepens nondepolarizing blockade, so expect a longer duration and monitor it. Standard doses are still used for intubation. Neuromuscular blockers are highly ionized and cross the placenta very little. Ketamine is not contraindicated, though it can raise blood pressure.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
    ],
    sources: [OAA, WALLS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-15",
    topic: "airway",
    title: "Vomiting blood",
    stem:
      "A 57-year-old man with cirrhosis presents with repeated large volume hematemesis. He is agitated and continues to vomit blood. The gastroenterologist asks you to intubate him before emergency endoscopy.",
    vitals: { temperature: "36.2°C", pulse: "124/minute", resp: "24/minute", bp: "88/50 mmHg", o2sat: "93% on 4 L/minute by nasal cannula", weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What preparations are specific to intubating a patient with massive upper gastrointestinal bleeding?",
        required: 3,
        accept: [
          { id: "suction", text: "Two large bore rigid suction devices ready", match: ["suction"], },
          { id: "resus", text: "Transfuse and resuscitate before induction", match: ["transfusion", "transfuse", "blood product", "prbc", "resuscitate", "resuscitation", "massive transfusion"], },
          { id: "headup", text: "Head up position", match: ["head up", "upright"], },
          { id: "vl", text: "Video laryngoscope, knowing blood may obscure the camera, and a direct laryngoscope ready", match: ["video", "direct laryngoscope"], },
          { id: "dose", text: "Reduced dose of a hemodynamically stable induction agent", match: ["reduced dose", "ketamine", "lower dose"], },
          { id: "pressor", text: "Vasopressor ready", match: ["pressor", "vasopressor", "epinephrine", "norepinephrine", "phenylephrine"], },
          { id: "sga", text: "Second generation supraglottic airway as a backup", match: ["supraglottic", "sga", "lma"], },
          { id: "expert", text: "Most experienced operator", match: ["experienced"], },
        ],
        explanation:
          "Blood in the airway and hemorrhagic shock make this both an anatomically and physiologically difficult airway. Suction and positioning manage the soiling. Resuscitation and a reduced induction dose protect against arrest. Blood can blind a video laryngoscope, so have direct laryngoscopy ready.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg1",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "Three attempts fail because of blood in the airway. A second generation supraglottic airway is inserted. SpO2 recovers to 95% and there is a good capnography trace.",
        prompt: "What are reasonable options for the next step now that oxygenation is restored?",
        required: 3,
        accept: [
          { id: "cont", text: "Continue ventilating through the supraglottic airway until expert help arrives", match: ["continue ventilating", "continue ventilation", "continue ventilate", "continue sga", "continue supraglottic", "continue oxygenation", "continue oxygenating", "keep the sga", "leave the sga"], },
          { id: "final", text: "A single further intubation attempt with a different technique by a more experienced operator", match: ["different technique", "hyperangulated", "expert attempt", "attempt by expert", "attempt by anesthesia"], },
          { id: "help", text: "Call for help from a more experienced airway operator", match: ["help", "experienced", "anesthesia"], },
          { id: "fob", text: "Intubate through the supraglottic airway with a flexible bronchoscope", match: ["bronchoscope", "bronchoscopy", "bronchoscopic", "fiberoptic", "fibreoptic", "flexible scope", "through the sga", "through sga", "via sga"], },
          { id: "fona", text: "Controlled surgical airway", match: ["surgical airway", "cricothyrotomy", "front of neck"], },
          { id: "drain", text: "Pass a gastric tube through the drain port", match: ["gastric tube", "drain port", "ogt"], },
          { id: "wake", text: "Consider waking the patient if feasible", match: ["wake", "waking", "awaken"], },
        ],
        unacceptable: [{ text: "Repeated laryngoscopy attempts by the same operator with the same technique", match: ["same operator", "same technique", "keep trying", "repeated attempts", "blind intubation"], }],
        explanation:
          "Once oxygenation is restored through a supraglottic airway, stop and plan. CAFG options include intubating through the device with a bronchoscope, continuing ventilation until help arrives, one further attempt with a different technique, or a controlled surgical airway. Waking the patient is often not practical in an emergency, but should be considered. More blind attempts cause trauma and bleeding.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg1",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ventilation through the supraglottic airway suddenly fails and SpO2 falls to 75% despite two-person face mask ventilation.",
        prompt: "Which of the following techniques is recommended for emergency front of neck access in an adult?",
        options: [
          "Needle cricothyroidotomy with jet ventilation",
          "Open surgical tracheostomy",
          "Percutaneous Seldinger tracheostomy",
          "Retrograde wire intubation",
          "Scalpel-bougie-tube cricothyrotomy",
        ],
        correct: 4,
        explanation:
          "Current Canadian and UK guidance favours the scalpel-bougie-tube technique for adults. It is quick, uses few steps and places a cuffed tube. Needle techniques fail often and risk barotrauma. Tracheostomy and retrograde techniques take too long in a crisis.",
        keyFeature: { topic: "airway", n: 1 },
        source: "das2015",
      },
    ],
    sources: [CAFG1, DAS2015],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
];
