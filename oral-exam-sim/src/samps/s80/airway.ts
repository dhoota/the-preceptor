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
];
