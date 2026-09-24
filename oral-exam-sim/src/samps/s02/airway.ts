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
  citation: "Brown CA, Sakles JC, Mick NW, eds. The Walls Manual of Emergency Airway Management. Wolters Kluwer.",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) student course manual. 10th edition. 2018.",
};
const ABLS: Source = {
  id: "abls",
  citation: "American Burn Association. Advanced Burn Life Support provider manual.",
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
  citation: "Heart and Stroke Foundation of Canada. Pediatric Advanced Life Support provider manual.",
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
  citation: "Global Initiative for Asthma. Global strategy for asthma management and prevention.",
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

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

export const AIRWAY_SAMPS: Samp[] = [
  {
    id: "airway-01",
    topic: "airway",
    title: "Unresponsive man after a night of drinking",
    stem:
      "A 52-year-old man is brought in by paramedics after being found unresponsive beside an empty bottle of vodka and a bottle of hydromorphone tablets. He vomited en route. He did not wake after naloxone 0.4 mg IV twice. Vitals: HR 104, BP 132/80, RR 8, SpO2 89% on a nonrebreather mask, temperature 36.1°C, capillary glucose 6.2 mmol/L. GCS is 6. He weighs about 110 kg. After suction and bag-mask ventilation with a PEEP valve his SpO2 reaches 97%. You perform rapid sequence intubation with ketamine and rocuronium. On the first attempt with a Macintosh 4 blade you see only the tip of the epiglottis. The attempt is stopped when SpO2 reaches 92%.",
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "He is reoxygenated with the bag-valve mask to 96%.",
        prompt: "List THREE changes you would make to improve your chance of success on the second attempt.",
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
        prompt: "Which of the following is the most appropriate next step? Select one.",
        options: [
          "A fourth attempt at direct laryngoscopy",
          "Insert a second generation supraglottic airway",
          "Needle cricothyroidotomy with jet ventilation",
          "Blind nasotracheal intubation",
          "Give sugammadex and wait for spontaneous breathing",
        ],
        correct: 1,
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
        prompt: "This is a cannot intubate, cannot oxygenate situation. List THREE key steps of the rescue technique you would perform now.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-02",
    topic: "airway",
    alsoTopics: ["burns"],
    title: "Rescued from a bedroom fire",
    stem:
      "A 34-year-old woman was carried out of a burning house by firefighters after being trapped in a smoke-filled bedroom for about 10 minutes. She arrives 40 minutes after rescue. Vitals: HR 118, BP 128/76, RR 24, SpO2 96% on a nonrebreather mask, temperature 36.8°C. She weighs 65 kg. Her voice is hoarse. She has partial and full thickness burns to the face, anterior neck and both arms. There is soot in her nares and on her tongue. Her lungs are clear.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE findings in this patient that support early intubation.",
        required: 3,
        accept: [
          { id: "hoarse", text: "Hoarse voice", match: ["hoarse", "voice change"], },
          { id: "soot", text: "Soot in the mouth, on the tongue or in the nares", match: ["soot", "carbonaceous"], },
          { id: "face", text: "Full thickness facial burns", match: ["facial", "face"], },
          { id: "neck", text: "Burns to the anterior neck", match: ["neck"], },
          { id: "enclosed", text: "Prolonged smoke exposure in an enclosed space", match: ["enclosed", "closed space", "smoke exposure"], },
          { id: "fluids", text: "Burn size that will need large volume fluid resuscitation and cause swelling", match: ["fluid", "swelling", "edema"], },
        ],
        unacceptable: [{ text: "Normal oxygen saturation", match: ["normal saturation", "normal spo2"], }],
        explanation:
          "Hoarseness, intraoral soot and deep burns of the face and neck predict progressive upper airway edema. Swelling peaks over the next 24 hours and is made worse by fluid resuscitation. A normal saturation now says nothing about the airway in 2 hours.",
        keyFeature: { topic: "airway", n: 2 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her SpO2 remains 96% and she is speaking in full sentences.",
        prompt: "Which is the most appropriate airway plan? Select one.",
        options: [
          "Observe in the emergency department with airway checks every hour",
          "Nebulized epinephrine and reassess in 30 minutes",
          "Intubate now in the emergency department with a front of neck access kit open",
          "Transfer by ground to the burn centre without a secure airway",
          "Noninvasive positive pressure ventilation",
        ],
        correct: 2,
        explanation:
          "Early intubation while the anatomy is still recognizable is far safer than a crash intubation through a swollen airway. Transferring an at-risk airway unsecured risks loss of the airway en route. Nebulized epinephrine does not treat thermal edema.",
        keyFeature: { topic: "airway", n: 2 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO specific considerations about the endotracheal tube in this patient.",
        required: 2,
        accept: [
          { id: "large", text: "Use a large tube, 7.5 or 8.0 mm, to allow bronchoscopy and clearance of secretions", match: ["large", "7.5", "8.0", "8 mm"], },
          { id: "uncut", text: "Leave the tube uncut because facial swelling will increase", match: ["uncut", "do not cut", "don't cut"], },
          { id: "secure", text: "Secure with ties or a commercial holder rather than tape on burned skin", match: ["secure", "tie", "holder"], },
          { id: "depth", text: "Document tube depth and recheck it often as swelling develops", match: ["depth"], },
          { id: "smaller", text: "Have smaller tubes ready in case edema narrows the glottis", match: ["smaller"], },
        ],
        explanation:
          "A larger tube allows later bronchoscopy for inhalation injury and clearance of soot and secretions. Facial and neck swelling can pull a short tube out, so the tube is left long and secured without adhesive on burned skin. Smaller tubes should be ready if the glottis is already swollen.",
        keyFeature: { topic: "burns", n: 2 },
        source: "abls",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO toxic exposures you would assess for in this patient.",
        required: 2,
        accept: [
          { id: "co", text: "Carbon monoxide (carboxyhemoglobin level)", match: ["carbon monoxide", "carboxyhemoglobin", "cohb", "co level", "co poisoning", "co"], },
          { id: "cn", text: "Cyanide (elevated lactate, treat with hydroxocobalamin)", match: ["cyanide", "hydroxocobalamin"], },
        ],
        explanation:
          "Smoke from house fires contains carbon monoxide and hydrogen cyanide. Pulse oximetry reads falsely normal with carboxyhemoglobin, so co-oximetry is needed. A lactate above about 8 to 10 mmol/L in a smoke victim suggests cyanide toxicity and supports hydroxocobalamin.",
        keyFeature: { topic: "burns", n: 1 },
        source: "abls",
      },
    ],
    sources: [ABLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-03",
    topic: "airway",
    title: "Swollen lips and tongue",
    stem:
      "A 68-year-old man presents with 3 hours of progressive swelling of his lips and tongue. He takes ramipril, metformin and atorvastatin. He has no hives or itch. Vitals: HR 92, BP 154/88, RR 20, SpO2 95% on room air, temperature 36.9°C. He weighs 92 kg. He is sitting upright and drooling. His voice is muffled and his tongue protrudes past his teeth. He has a full beard.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features in this patient that indicate a threatened airway.",
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
        prompt: "List THREE predictors of difficulty with airway management in this patient.",
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
        prompt: "Which is the most appropriate airway approach? Select one.",
        options: [
          "Rapid sequence intubation with direct laryngoscopy",
          "Awake flexible bronchoscopic nasotracheal intubation with topical anesthesia and a prepared neck",
          "Blind nasotracheal intubation",
          "Ketamine sedation and insertion of a supraglottic airway",
          "Continued observation while waiting for a response to icatibant",
        ],
        correct: 1,
        explanation:
          "When difficulty is predicted and the patient is still oxygenating, an awake technique keeps spontaneous breathing and airway tone. The nasal route avoids the swollen tongue. Paralysis first risks a cannot intubate, cannot oxygenate crisis. Supraglottic airways sit poorly over a swollen tongue and pharynx.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List THREE preparations you would make before starting the awake intubation.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-04",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Highway rollover",
    stem:
      "A 24-year-old man is brought in after a highway rollover in which he was ejected. Vitals: HR 128, BP 86/54, RR 28, SpO2 91% on a nonrebreather mask, temperature 35.6°C. He weighs about 80 kg. GCS is 7 (E1 V2 M4). He has a scalp laceration, blood in the oropharynx and a cervical collar in place. Breath sounds are equal. FAST shows free fluid in the right upper quadrant.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE modifications to your intubation technique because of possible cervical spine injury.",
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
        prompt: "List TWO actions to improve his hemodynamics before induction.",
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
        prompt: "Which TWO medications and doses are most appropriate for his rapid sequence intubation? Select TWO.",
        options: [
          "Ketamine 0.5 to 1 mg/kg IV",
          "Ketamine 2 mg/kg IV",
          "Propofol 2 mg/kg IV",
          "Midazolam 0.3 mg/kg IV",
          "Fentanyl 3 mcg/kg IV",
          "Rocuronium 0.3 mg/kg IV",
          "Rocuronium 1.2 mg/kg IV",
          "Succinylcholine 0.5 mg/kg IV",
        ],
        select: 2,
        correct: [0, 6],
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
        prompt: "List THREE causes you would assess for immediately.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-05",
    topic: "airway",
    alsoTopics: ["seizures"],
    title: "Toddler who will not stop seizing",
    stem:
      "A 2-year-old boy is brought in with a generalized seizure that started 35 minutes ago. He received buccal midazolam at home, then two doses of IV lorazepam and a loading dose of IV levetiracetam in the emergency department. He is still seizing. Vitals: HR 168, BP 102/64, RR 12 and shallow, SpO2 90% with bag-mask support, temperature 38.9°C. He weighs 12 kg. You decide to intubate.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "State the endotracheal tube you would choose and its depth at the lips. Give TWO answers: size and depth.",
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
        prompt: "List THREE ways you would adapt your intubation technique for a child of this age.",
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
        prompt: "Which neuromuscular blocker and dose is most appropriate for this child? Select one.",
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
        prompt: "What is the most likely problem and what is your immediate action? Give ONE answer.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-06",
    topic: "airway",
    title: "Drowsy with a fever and heavy breathing",
    stem:
      "A 46-year-old woman with obesity (weight 148 kg, height 163 cm, BMI 56) and obstructive sleep apnea presents with 4 days of cough and fever. Vitals: HR 116, BP 142/84, RR 32, SpO2 84% on a nonrebreather mask, temperature 38.7°C. VBG shows pH 7.21 and pCO2 78 mmHg. She is drowsy and tiring despite 45 minutes of BiPAP. She has a short, thick neck and a Mallampati class IV view.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features in this patient that predict difficult bag-mask ventilation.",
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
        prompt: "List THREE steps to optimize preoxygenation and extend her safe apnea time.",
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
        prompt: "Before induction, which step best prepares for a possible cannot intubate, cannot oxygenate event? Select one.",
        options: [
          "Identify and mark the cricothyroid membrane with ultrasound while she is positioned",
          "Have a 14 gauge cannula ready for needle cricothyroidotomy",
          "Place a nasogastric tube",
          "Prepare a transtracheal jet ventilator",
          "Load a 5.0 tube on a stylet",
        ],
        correct: 0,
        explanation:
          "In obese patients the membrane is often impalpable. Ultrasound identifies it before induction so an emergency scalpel technique can start without delay. Needle and jet techniques have high failure and barotrauma rates and are not the recommended adult rescue.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [CAFG2, WEINGART],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-07",
    topic: "airway",
    alsoTopics: ["shock"],
    title: "Fever, confusion and low blood pressure",
    stem:
      "A 71-year-old woman with COPD presents with 2 days of fever and confusion. Vitals: HR 128, BP 76/42, RR 34, SpO2 86% on a nonrebreather mask, temperature 39.2°C. She weighs 58 kg. Lactate is 6.1 mmol/L. Chest X-ray shows right lower lobe consolidation. She has received 1 L of Ringer's lactate. She is increasingly drowsy and you plan to intubate.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE steps you would take before induction to reduce the risk of peri-intubation cardiac arrest.",
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
        prompt: "List THREE ways her shock should change your choice or dosing of rapid sequence intubation drugs.",
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
        prompt: "List THREE immediate management steps.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-08",
    topic: "airway",
    title: "Neck swelling after day surgery",
    stem:
      "A 49-year-old woman had a hemithyroidectomy this morning and was discharged home from day surgery 3 hours ago. She returns with neck tightness, difficulty swallowing and shortness of breath. Vitals: HR 112, BP 168/92, RR 26, SpO2 94% on room air, temperature 36.8°C. She weighs 70 kg. The neck around the incision is tense and swollen. The wound is closed with subcuticular sutures and skin glue. She has soft inspiratory stridor.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE findings in this patient that suggest impending airway obstruction.",
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
        prompt: "What is the most appropriate immediate step? Select one.",
        options: [
          "Rapid sequence intubation in the emergency department",
          "Open the wound at the bedside by cutting the sutures and opening the skin and deep layers to evacuate the hematoma",
          "Needle aspiration of the hematoma",
          "Nebulized epinephrine and IV dexamethasone",
          "CT of the neck",
        ],
        correct: 1,
        explanation:
          "Bedside wound opening decompresses the airway and often relieves obstruction at once. Consensus guidance teaches skin exposure, cutting sutures, opening skin, opening muscle and packing the wound. Intubating through a compressed, edematous airway before decompression is very difficult. Needle aspiration does not remove clot.",
        keyFeature: { topic: "airway", n: 4 },
        source: "das-thyroid",
      },
      {
        id: "q3",
        kind: "short",
        update: "After decompression she improves, but the surgeon asks that she be intubated before transfer to the operating room.",
        prompt: "List THREE elements of your airway plan.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-09",
    topic: "airway",
    alsoTopics: ["tox"],
    title: "Rapid breathing after an overdose",
    stem:
      "A 38-year-old man took about 100 tablets of 325 mg acetylsalicylic acid 8 hours ago. He weighs 80 kg. He is confused and agitated. Vitals: HR 124, BP 138/76, RR 38 and deep, SpO2 96% on room air, temperature 38.4°C. ABG: pH 7.31, pCO2 18 mmHg, HCO3 9 mmol/L. Salicylate level is 6.2 mmol/L. Over the next hour he becomes drowsier.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List TWO reasons that intubation is especially dangerous in this patient.",
        required: 2,
        accept: [
          { id: "comp", text: "Loses his respiratory compensation, so acidemia worsens quickly", match: ["compensation", "acidemia", "acidosis"], },
          { id: "cns", text: "Falling pH drives more salicylate into the brain and causes seizures or death", match: ["brain", "cns", "seizure", "cerebral"], },
          { id: "apnea", text: "Even a short apneic period raises pCO2 sharply", match: ["apnea", "apneic", "pco2", "co2 rise"], },
          { id: "vent", text: "A ventilator rarely matches his very high minute ventilation", match: ["minute ventilation", "ventilator"], },
        ],
        explanation:
          "His pCO2 of 18 mmHg is keeping his pH near normal. Apnea and a ventilator set at usual values raise pCO2 and drop the pH. Acidemia increases the non-ionized fraction of salicylate, which crosses into the brain. Deterioration and death after intubation are well described.",
        keyFeature: { topic: "airway", n: 4 },
        source: "extrip",
      },
      {
        id: "q2",
        kind: "short",
        update: "He becomes obtunded and intubation is now unavoidable.",
        prompt: "List THREE measures to reduce harm around his intubation.",
        required: 3,
        accept: [
          { id: "bicarb", text: "Sodium bicarbonate bolus 1 to 2 mmol/kg IV before induction, then an infusion", match: ["bicarbonate", "bicarb", "nahco3"], },
          { id: "bvm", text: "Bag-mask ventilate at a high rate during apnea", match: ["bag", "bvm"], },
          { id: "apnea", text: "Minimize apnea time with the most experienced operator", match: ["apnea", "experienced", "first pass"], },
          { id: "mv", text: "Set a high minute ventilation to match his pre-intubation pCO2 (rate about 30 or more)", match: ["minute ventilation", "high rate", "respiratory rate", "match"], },
          { id: "gas", text: "Check a blood gas soon after intubation", match: ["blood gas", "abg", "vbg"], },
          { id: "hd", text: "Arrange urgent hemodialysis", match: ["dialysis", "hemodialysis"], },
        ],
        explanation:
          "Alkalinize before induction and keep the apneic period short. Once the tube is in, match his previous minute ventilation with a high rate and check a gas early. Hemodialysis is the definitive treatment and should be arranged in parallel.",
        keyFeature: { topic: "tox", n: 4 },
        source: "extrip",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "After intubation, which is the best way to confirm that his ventilation matches his needs? Select one.",
        options: [
          "Blood gas 15 to 30 minutes after intubation",
          "Pulse oximetry above 94%",
          "Chest X-ray",
          "End tidal CO2 alone",
          "Visible chest rise",
        ],
        correct: 0,
        explanation:
          "A blood gas shows whether pH and pCO2 are where they were before intubation. End tidal CO2 can underestimate arterial pCO2, and oximetry says nothing about ventilation. Adjust the rate to keep pCO2 at or below the pre-intubation value.",
        keyFeature: { topic: "airway", n: 6 },
        source: "walls",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "Name the definitive treatment this patient requires.",
        required: 1,
        accept: [{ id: "hd", text: "Hemodialysis", match: ["dialysis", "hemodialysis", "hd", "extracorporeal"], }],
        explanation:
          "Altered mental status and the need for mechanical ventilation are indications for extracorporeal removal in salicylate poisoning. Hemodialysis removes salicylate and corrects acidosis at the same time. Alkalinization alone is not enough.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip",
      },
    ],
    sources: [EXTRIP, WALLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-10",
    topic: "airway",
    alsoTopics: ["asthma-copd"],
    title: "Quiet chest in a young woman with wheeze",
    stem:
      "A 19-year-old woman with asthma has had 2 days of worsening wheeze. She has had two prior ICU admissions. She has received continuous salbutamol, ipratropium, methylprednisolone 125 mg IV and magnesium sulfate 2 g IV. Vitals: HR 142, BP 108/62, RR 36, SpO2 88% on a nonrebreather mask, temperature 37.1°C. She weighs 60 kg. She is now drowsy with a quiet chest. VBG pCO2 is 68 mmHg. You decide to intubate.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which induction agent and dose is the best choice? Select one.",
        options: [
          "Ketamine 1.5 mg/kg IV",
          "Propofol 2 mg/kg IV",
          "Midazolam 0.1 mg/kg IV",
          "Fentanyl 3 mcg/kg IV",
          "Ketamine 0.2 mg/kg IV",
        ],
        correct: 0,
        explanation:
          "Ketamine at 1 to 2 mg/kg is a bronchodilator and keeps blood pressure up. Propofol also relaxes bronchi but causes hypotension in a dehydrated patient with high intrathoracic pressure. Ketamine 0.2 mg/kg is an analgesic dose, not an induction dose.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE initial ventilator settings or strategies for this patient.",
        required: 3,
        accept: [
          { id: "rate", text: "Low respiratory rate, about 8 to 12 per minute", match: ["low rate", "low respiratory rate", "slow rate", "rate 8", "rate 10", "rr 8", "rr 10", "rr 12", "low rr"], },
          { id: "vt", text: "Tidal volume 6 to 8 mL/kg of ideal body weight", match: ["tidal volume", "6 ml/kg", "8 ml/kg"], },
          { id: "ie", text: "Long expiratory time with an I to E ratio of 1 to 4 or more", match: ["expiratory time", "i e", "1 4", "ie ratio"], },
          { id: "flow", text: "High inspiratory flow, 60 to 100 L/min", match: ["inspiratory flow", "high flow"], },
          { id: "hypercap", text: "Accept permissive hypercapnia", match: ["permissive", "hypercapnia"], },
          { id: "plat", text: "Keep plateau pressure below 30 cmH2O", match: ["plateau"], },
          { id: "peep", text: "Low PEEP", match: ["low peep", "no peep", "zero peep", "minimal peep", "peep 0", "peep 5"], },
        ],
        unacceptable: [{ text: "High respiratory rate to correct the pCO2", match: ["high respiratory rate", "normalize co2", "normalize pco2"], }],
        explanation:
          "Severe asthma traps air. A slow rate, modest tidal volume and long expiratory time let the lungs empty. Accept a high pCO2 rather than chase it with a fast rate, which causes breath stacking, barotrauma and hypotension.",
        keyFeature: { topic: "airway", n: 4 },
        source: "walls",
      },
      {
        id: "q3",
        kind: "short",
        update: "Ten minutes later her BP falls to 62/30 with HR 150 and SpO2 85%. The ventilator alarms for high peak pressure.",
        prompt: "List TWO immediate actions.",
        required: 2,
        accept: [
          { id: "disc", text: "Disconnect from the ventilator to allow full exhalation, with gentle chest compression", match: ["disconnect", "exhale", "exhalation"], },
          { id: "ptx", text: "Assess for tension pneumothorax and decompress if present", match: ["pneumothorax", "decompress", "decompression", "thoracostomy"], },
          { id: "fluid", text: "Fluid bolus", match: ["fluid", "bolus"], },
          { id: "dope", text: "Check the tube for displacement or obstruction", match: ["tube", "dope"], },
          { id: "rate", text: "Reduce the respiratory rate once reconnected", match: ["reduce the respiratory rate", "lower rate", "reduce rate"], },
        ],
        unacceptable: [
          { text: "Increase the rate or minute ventilation to lower the pCO2", match: ["faster rate", "faster respiratory rate", "hyperventilate", "blow off co2", "blow off the co2", "raise the rate", "raise respiratory rate"], dangerous: true },
          { text: "Increase the respiratory rate", match: ["increase respiratory rate", "increase rate", "increase the rate"] },
        ],
        explanation:
          "Sudden hypotension in a ventilated asthmatic is breath stacking or tension pneumothorax until proven otherwise. Disconnecting the circuit lets trapped air escape and often restores the pressure within seconds. If it does not, decompress the chest. Increasing the rate worsens air trapping.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gina",
      },
    ],
    sources: [WALLS, GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-11",
    topic: "airway",
    alsoTopics: ["multiple-trauma"],
    title: "Fall down the stairs",
    stem:
      "A 58-year-old man fell down 12 stairs while intoxicated. GCS is 6 (E1 V1 M4). His left pupil is 6 mm and sluggish. Vitals: HR 58, BP 188/102, RR 10 and irregular, SpO2 92% on a nonrebreather mask, temperature 36.4°C. He weighs 85 kg. A cervical collar is in place. There are no other injuries on primary survey. You are in a community hospital without neurosurgery.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE physiologic targets you will maintain through intubation and afterward.",
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
        prompt: "Which statement about induction agents is most accurate for this patient? Select one.",
        options: [
          "Ketamine is contraindicated because it raises intracranial pressure",
          "Ketamine may be used because it maintains blood pressure and has not been shown to worsen outcome in brain injury",
          "Full dose propofol is preferred because it lowers intracranial pressure",
          "IV lidocaine pretreatment is required",
          "Succinylcholine is contraindicated in head injury",
        ],
        correct: 1,
        explanation:
          "The old concern that ketamine raises intracranial pressure has not held up, and it protects cerebral perfusion by maintaining blood pressure. Propofol lowers pressure, which can drop cerebral perfusion. Lidocaine pretreatment has no proven benefit. Succinylcholine is acceptable in acute head injury.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "After intubation, list TWO methods to confirm both tube position and adequate ventilation.",
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
        prompt: "He needs transfer to a neurosurgical centre 2 hours away. List THREE airway related steps before he leaves.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-12",
    topic: "airway",
    alsoTopics: ["arrhythmia"],
    title: "Missed dialysis and short of breath",
    stem:
      "A 72-year-old man on hemodialysis missed his last two sessions. He presents with confusion and shortness of breath. Vitals: HR 48, BP 148/70, RR 30, SpO2 84% on a nonrebreather mask, temperature 38.1°C. He weighs 70 kg. ECG shows peaked T waves and a QRS of 150 ms. Potassium is 7.6 mmol/L. Chest X-ray shows bilateral pulmonary edema. Calcium, insulin with dextrose and salbutamol have been given. BiPAP fails and he needs intubation.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which neuromuscular blocker is most appropriate? Select one.",
        options: [
          "Succinylcholine 1.5 mg/kg IV",
          "Rocuronium 1.2 mg/kg IV",
          "Succinylcholine 0.6 mg/kg IV",
          "No paralytic, deep sedation with propofol",
          "Rocuronium 0.3 mg/kg IV",
        ],
        correct: 1,
        explanation:
          "Succinylcholine raises serum potassium by about 0.5 mmol/L and can trigger arrest in a patient who is already at 7.6 mmol/L with a wide QRS. Rocuronium 1.2 mg/kg gives rapid intubating conditions without that risk. A low dose of rocuronium gives poor conditions.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE other conditions in which succinylcholine should be avoided.",
        required: 3,
        accept: [
          { id: "mh", text: "Personal or family history of malignant hyperthermia", match: ["malignant hyperthermia", "mh"], },
          { id: "burn", text: "Burns older than about 24 to 72 hours", match: ["burn"], },
          { id: "crush", text: "Crush injury after the first few days", match: ["crush"], },
          { id: "denerv", text: "Denervation such as stroke or spinal cord injury after about 72 hours", match: ["denervation", "spinal cord", "stroke", "paraplegia", "quadriplegia"], },
          { id: "nmd", text: "Neuromuscular disease such as muscular dystrophy, ALS, Guillain-Barre syndrome or multiple sclerosis", match: ["muscular dystrophy", "myopathy", "als", "guillain", "multiple sclerosis", "neuromuscular", "duchenne"], },
          { id: "immob", text: "Prolonged immobilization or critical illness", match: ["immobilization", "immobilized", "immobility", "critical illness", "bedbound"], },
          { id: "rhabdo", text: "Rhabdomyolysis", match: ["rhabdomyolysis", "rhabdo"], },
          { id: "pchE", text: "Pseudocholinesterase deficiency", match: ["pseudocholinesterase", "cholinesterase"], },
        ],
        unacceptable: [{ text: "Acute head injury", match: ["head injury"], }],
        explanation:
          "Denervation, burns, crush injury and prolonged immobility upregulate extrajunctional receptors, so succinylcholine releases large amounts of potassium. Malignant hyperthermia and myopathies are absolute contraindications. Acute head injury is not a contraindication.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
      {
        id: "q3",
        kind: "short",
        update: "Just after intubation his HR falls to 34 and the QRS widens to 190 ms. BP is 70/40.",
        prompt: "List TWO immediate treatments.",
        required: 2,
        accept: [
          { id: "ca", text: "Repeat IV calcium, such as calcium chloride 1 g or calcium gluconate 3 g", match: ["calcium"], },
          { id: "bicarb", text: "Sodium bicarbonate IV", match: ["bicarbonate", "bicarb"], },
          { id: "insulin", text: "Repeat insulin with dextrose", match: ["insulin"], },
          { id: "salb", text: "Salbutamol through the ventilator circuit", match: ["salbutamol", "albuterol"], },
          { id: "pace", text: "Transcutaneous pacing", match: ["pacing", "pace"], },
          { id: "epi", text: "Epinephrine infusion or push-dose epinephrine", match: ["epinephrine"], },
          { id: "hd", text: "Urgent hemodialysis", match: ["dialysis", "hemodialysis"], },
        ],
        explanation:
          "A widening QRS with bradycardia signals imminent arrest from hyperkalemia. Calcium stabilizes the membrane and should be repeated. Shifting potassium and pacing or epinephrine are bridges to dialysis, which is the definitive fix.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "walls",
      },
    ],
    sources: [WALLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
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
        prompt: "Which is the most reliable immediate test to confirm tracheal placement? Select one.",
        options: [
          "Auscultation over both lungs and the epigastrium",
          "A sustained waveform on continuous capnography over several breaths",
          "Chest X-ray",
          "Condensation in the tube",
          "Stable oxygen saturation",
        ],
        correct: 1,
        explanation:
          "Sustained waveform capnography is the standard for confirming tracheal placement. Oxygen saturation can stay normal for minutes after an esophageal intubation in a well preoxygenated patient. Auscultation and misting are unreliable. A chest X-ray shows depth, not whether the tube is in the trachea.",
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
        prompt: "List TWO immediate actions.",
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
        prompt: "List THREE immediate actions.",
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
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-14",
    topic: "airway",
    alsoTopics: ["pre-eclampsia"],
    title: "Seizure late in pregnancy",
    stem:
      "A 29-year-old woman at 34 weeks gestation presents after a generalized seizure at home. On arrival she has a second seizure lasting 3 minutes. She receives magnesium sulfate 4 g IV. She remains obtunded with GCS 7 and snoring respirations and she has vomited once. Vitals: HR 118, BP 178/112, RR 22, SpO2 91% on a nonrebreather mask, temperature 37.0°C. She weighs 82 kg.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which feature most strongly supports intubating her now? Select one.",
        options: [
          "Persistent GCS 7 with airway obstruction and recent vomiting",
          "Blood pressure of 178/112",
          "Heart rate of 118",
          "Second seizure lasting 3 minutes",
          "Gestational age of 34 weeks",
        ],
        correct: 0,
        explanation:
          "A persistently low GCS with obstruction and vomiting means she cannot protect her airway. Aspiration is common in pregnancy and the airway will get harder with time. Hypertension and seizures are treated with antihypertensives and magnesium, not intubation alone.",
        keyFeature: { topic: "airway", n: 2 },
        source: "oaa-das",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE adjustments to your airway plan because she is pregnant.",
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
        prompt: "Which statement about her rapid sequence intubation drugs is correct? Select one.",
        options: [
          "Magnesium potentiates nondepolarizing blockers, so rocuronium may last longer",
          "Magnesium is a contraindication to rocuronium",
          "The succinylcholine dose must be tripled in pregnancy",
          "Ketamine is contraindicated in pregnancy",
          "Neuromuscular blockers should be avoided because they paralyze the fetus",
        ],
        correct: 0,
        explanation:
          "Magnesium prolongs and deepens nondepolarizing blockade, so expect a longer duration and monitor it. Standard doses are still used for intubation. Neuromuscular blockers are highly ionized and cross the placenta very little. Ketamine is not contraindicated, though it can raise blood pressure.",
        keyFeature: { topic: "airway", n: 5 },
        source: "walls",
      },
    ],
    sources: [OAA, WALLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "airway-15",
    topic: "airway",
    title: "Vomiting blood",
    stem:
      "A 57-year-old man with cirrhosis presents with repeated large volume hematemesis. Vitals: HR 124, BP 88/50, RR 24, SpO2 93% on 4 L nasal cannula, temperature 36.2°C. He weighs 95 kg. He is agitated and continues to vomit blood. The gastroenterologist asks you to intubate him before emergency endoscopy.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE preparations specific to intubating a patient with massive upper gastrointestinal bleeding.",
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
        prompt: "List THREE reasonable options for the next step now that oxygenation is restored.",
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
        prompt: "Which technique is recommended for emergency front of neck access in an adult? Select one.",
        options: [
          "Scalpel-bougie-tube cricothyrotomy",
          "Needle cricothyroidotomy with jet ventilation",
          "Percutaneous Seldinger tracheostomy",
          "Open tracheostomy",
          "Retrograde wire intubation",
        ],
        correct: 0,
        explanation:
          "Current Canadian and UK guidance favours the scalpel-bougie-tube technique for adults. It is quick, uses few steps and places a cuffed tube. Needle techniques fail often and risk barotrauma. Tracheostomy and retrograde techniques take too long in a crisis.",
        keyFeature: { topic: "airway", n: 1 },
        source: "das2015",
      },
    ],
    sources: [CAFG1, DAS2015],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
