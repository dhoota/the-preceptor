// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

export const SHOCK_SAMPS_S50: Samp[] = [
  {
    id: "shock-16",
    topic: "shock",
    title: "Bleeding after a home birth",
    stem: "You are working in a community hospital emergency department. A 29-year-old woman is brought by ambulance 40 minutes after an unplanned home birth of her third child. The placenta delivered 25 minutes ago. Paramedics estimate 1 200 mL of blood on the bedding. She feels light-headed and thirsty. Her pregnancy was uncomplicated and she takes only prenatal vitamins. She has no history of asthma or hypertension. She is pale and anxious. Her uterus is soft and boggy at the level of the umbilicus. There is steady bright red vaginal bleeding. The placenta, brought in a bag, appears complete.",
    vitals: {
      temperature: "37.1°C oral",
      pulse: "124/minute",
      resp: "24/minute",
      bp: "96/60 mmHg",
      o2sat: "98% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her shock index, calculated from her pulse and blood pressure on arrival?",
        options: [
          "0.8",
          "1.0",
          "1.3",
          "1.6",
          "2.1"
        ],
        correct: 2,
        explanation: "Shock index is pulse divided by systolic BP: 124 / 96 = 1.29, which rounds to 1.3. An obstetric shock index above 1 points to significant blood loss and a likely need for blood products, even while her systolic pressure is above 90 mmHg. The expanded blood volume of pregnancy lets a postpartum woman lose a large volume before her pressure falls. A value of 0.8 sits in the normal postpartum range of 0.7 to 0.9, and 1.0 would need a pulse no faster than her systolic pressure. Values of 1.6 or 2.1 would need a faster pulse or a lower pressure than she has.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "obstetric-si"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following medications is the first-line uterotonic to give with uterine massage for her bleeding?",
        options: [
          "carboprost IM",
          "ergonovine IM",
          "misoprostol PR",
          "oxytocin IV",
          "terbutaline SC"
        ],
        correct: 3,
        explanation: "A soft, boggy uterus with ongoing bleeding and a complete placenta points to uterine atony, and oxytocin is the first-line uterotonic for it. Carboprost and ergonovine are second-line agents for bleeding that continues despite oxytocin. Misoprostol is an adjunct, not a first-line treatment, and the rectal route has the slowest onset and poorest absorption, so the guideline advises against it. Terbutaline is a tocolytic that relaxes the uterus and would worsen atony.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "sogc-pph"
      },
      {
        id: "q3",
        kind: "single",
        update: "Oxytocin is running and the uterus is being massaged. Bleeding continues. It is now 70 minutes since the birth.",
        prompt: "Which of the following adjunct medications reduces death from bleeding when given at this time after birth?",
        options: [
          "desmopressin 0.3 mcg/kg IV",
          "fibrinogen concentrate 4 g IV",
          "protamine 50 mg IV",
          "tranexamic acid 1 g IV",
          "vitamin K 10 mg IV"
        ],
        correct: 3,
        explanation: "In the WOMAN trial, tranexamic acid 1 g IV given within 3 hours of birth reduced death from bleeding in postpartum hemorrhage. She is 70 minutes from birth, so she is inside that window. Fibrinogen concentrate is given for a measured low fibrinogen, and no level is available yet. Vitamin K and protamine reverse anticoagulants she does not take. Desmopressin treats von Willebrand disease or platelet dysfunction, and nothing in her history suggests either.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "woman"
      },
      {
        id: "q4",
        kind: "menu",
        update: "She has received 2 L of crystalloid. Her pulse is 138/minute and BP is 74/40 mmHg. Blood loss is now about 2 000 mL. The blood bank holds uncrossmatched O RhD negative red cells.",
        prompt: "Which of the following are the most appropriate next steps in her resuscitation?",
        options: [
          "albumin 5% 500 mL IV",
          "Bimanual uterine compression",
          "Crystalloid 2 L IV bolus",
          "hydroxyethyl starch 500 mL IV",
          "Massive hemorrhage protocol activation",
          "norepinephrine infusion IV",
          "O RhD negative red cells IV"
        ],
        select: 3,
        correct: [
          1,
          4,
          6
        ],
        explanation: "She is in hemorrhagic shock after 2 L of crystalloid, so she needs blood now. Uncrossmatched O RhD negative red cells protect a woman of childbearing age from RhD sensitization, and activating the massive hemorrhage protocol brings plasma, platelets and fibrinogen in a fixed ratio. Bimanual compression slows atonic bleeding while definitive treatment is arranged. More crystalloid dilutes clotting factors and worsens coagulopathy. Albumin and starch carry no oxygen, and starch harms clotting and kidneys. A vasopressor does not replace lost volume in hemorrhage.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "sogc-pph"
      }
    ],
    sources: [
      {
        id: "obstetric-si",
        citation: "Le Bas A, Chandraharan E, Addei A, Arulkumaran S. Use of the obstetric shock index as an adjunct in identifying significant blood loss in patients with massive postpartum hemorrhage. Int J Gynaecol Obstet. 2014."
      },
      {
        id: "sogc-pph",
        citation: "Robinson D, et al. Guideline No. 431. Postpartum hemorrhage and hemorrhagic shock. J Obstet Gynaecol Can. 2022.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36567097/"
      },
      {
        id: "woman",
        citation: "WOMAN Trial Collaborators. Effect of early tranexamic acid administration on mortality, hysterectomy, and other morbidities in women with post-partum haemorrhage (WOMAN). Lancet. 2017."
      }
    ],
    ...META,
  },
  {
    id: "shock-17",
    topic: "shock",
    title: "Young woman who collapsed on the stairs",
    stem: "A 20-year-old woman is brought to the emergency department by ambulance after she became light-headed and collapsed while climbing the stairs to her apartment. She has had 2 hours of left upper abdominal pain. Twelve days ago a walk-in clinic diagnosed infectious mononucleosis. She recalls no injury. She is a competitive rower, and her usual resting pulse is 52/minute. She takes no medications. Her last menstrual period ended 1 week ago, and a urine pregnancy test is negative. She is pale and anxious. The left upper quadrant is tender with guarding.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "96/minute",
      resp: "22/minute",
      bp: "104/66 mmHg",
      o2sat: "99% on room air",
      weight: "62 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests early hemorrhagic shock in her?",
        options: [
          "BP of 104/66 mmHg",
          "Oxygen saturation of 99%",
          "Pulse of 96/minute",
          "Respiratory rate of 22/minute",
          "Temperature of 37.4°C"
        ],
        correct: 2,
        explanation: "Her pulse of 96/minute looks close to normal, but it is almost double her usual resting rate of 52/minute. Trained athletes start from a slow baseline and compensate well, so a modest rise in pulse can mark substantial blood loss. Her systolic pressure of 104 mmHg is still in the normal range, as expected early in bleeding while vasoconstriction holds the pressure up. A respiratory rate of 22/minute fits pain and anxiety as well as blood loss, so it is less specific. A saturation of 99% says nothing about perfusion. A temperature of 37.4°C fits her viral illness.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        update: "Bedside ultrasound shows free fluid around the spleen and in the pelvis. The uterus and ovaries look normal.",
        prompt: "Which of the following is the most likely cause of her shock?",
        options: [
          "Atraumatic splenic rupture",
          "Hemorrhagic ovarian cyst",
          "Perforated peptic ulcer",
          "Ruptured ectopic pregnancy",
          "Splenic infarction"
        ],
        correct: 0,
        explanation: "Free fluid around the spleen, left upper quadrant pain and collapse 12 days after a diagnosis of infectious mononucleosis point to splenic rupture. In published cases it happened on average 14 days into the illness, and only 14% of patients recalled any trauma, so the lack of an injury does not exclude it. A negative urine pregnancy test argues strongly against a ruptured ectopic pregnancy. A bleeding ovarian cyst usually arises from a corpus luteum in the second half of the cycle, her period ended a week ago, and the fluid centres on the spleen. A perforated ulcer usually causes sudden epigastric pain, and she takes no NSAID. Splenic infarction causes pain but not bleeding into the abdomen.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "bartlett-mono-spleen"
      },
      {
        id: "q3",
        kind: "single",
        update: "Her first hemoglobin is 121 g/L.",
        prompt: "Which of the following best explains her hemoglobin level at this point in her illness?",
        options: [
          "Blood loss has been minor so far",
          "Hemoconcentration from vomiting",
          "Hemodilution has not yet occurred",
          "Hemolysis from her viral illness",
          "Sample drawn from a hemolyzed tube"
        ],
        correct: 2,
        explanation: "Early in acute bleeding, whole blood is lost, so the hemoglobin concentration changes little until fluid shifts into the vessels or crystalloid is given. A near normal hemoglobin therefore does not measure acute loss. Collapse, a pulse almost double her baseline and free fluid around the spleen show that her loss is not minor. The case gives no vomiting to suggest hemoconcentration. Hemolysis from the virus would lower the hemoglobin, not keep it near normal. Hemolysis in the tube does not change the hemoglobin a CBC reports, because the analyzer breaks open the red cells anyway, so it cannot explain the value.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "After 1 L of crystalloid her pulse is 128/minute and her BP is 82/50 mmHg. The surgeon is on the way.",
        prompt: "Which of the following is the most appropriate treatment while she waits for the operating room?",
        options: [
          "albumin 5% 500 mL IV",
          "Crystalloid 2 L IV bolus",
          "norepinephrine infusion IV",
          "Platelet transfusion",
          "Red blood cell transfusion"
        ],
        correct: 4,
        explanation: "She is in hemorrhagic shock from a ruptured spleen, so she needs red cells now while the surgeon prepares to control the bleeding. Another 2 L of crystalloid dilutes clotting factors and carries no oxygen, and albumin also carries no oxygen. A vasopressor raises the pressure without replacing the lost volume. Nothing in the case shows a low platelet count to justify a platelet transfusion.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018."
      },
      {
        id: "bartlett-mono-spleen",
        citation: "Bartlett A, Williams R, Hilton M. Splenic rupture in infectious mononucleosis: a systematic review of published case reports. Injury. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26563483/"
      }
    ],
    ...META,
  },
  {
    id: "shock-18",
    topic: "shock",
    title: "Hungry infant who keeps vomiting",
    stem: "A 5-week-old boy is brought to the emergency department with forceful vomiting after every feed for 4 days. The vomit is milky and not green. He feeds hungrily right after vomiting. He has had two wet diapers in the past 24 hours. He weighed 4.2 kg at a clinic visit 6 days ago. He is sleepy but rousable. His fontanelle is sunken and his mucous membranes are dry. Capillary refill is 3 seconds. Sodium 131 mmol/L, potassium 2.9 mmol/L, chloride 84 mmol/L, bicarbonate 34 mmol/L, glucose 3.8 mmol/L.",
    vitals: {
      temperature: "36.9°C rectal",
      pulse: "178/minute",
      resp: "40/minute",
      bp: "78/46 mmHg",
      weight: "3.8 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best estimate of his current fluid deficit, based on his recorded weights?",
        options: [
          "40 mL",
          "100 mL",
          "200 mL",
          "400 mL",
          "800 mL"
        ],
        correct: 3,
        explanation: "He has lost 4.2 minus 3.8 kg, which is 0.4 kg in 6 days. Short-term weight loss in an infant is mostly water, and 1 kg equals about 1 L, so the deficit is about 400 mL. That is 0.4 / 4.2, or about 10 percent, which fits his sunken fontanelle, dry mucosa and oliguria. A deficit of 40 or 100 mL ignores the measured loss, and 800 mL would be about 20 percent of his weight.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "pyloric"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial IV fluid bolus for this infant?",
        options: [
          "albumin 5% 20 mL/kg IV",
          "dextrose 5% in water 20 mL/kg IV",
          "normal saline 20 mL/kg IV",
          "Ringer's lactate 20 mL/kg IV",
          "0.45% saline 20 mL/kg IV"
        ],
        correct: 2,
        explanation: "He is dehydrated with a hypochloremic, hypokalemic metabolic alkalosis from gastric losses, so the bolus should be isotonic and rich in chloride. Normal saline restores volume and gives the chloride he needs to excrete bicarbonate. Ringer's lactate holds less chloride, and its lactate is converted to bicarbonate, which adds to the alkalosis. Dextrose 5% in water and 0.45% saline are hypotonic and will lower his sodium of 131 mmol/L. Albumin offers no advantage over saline for dehydration.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "pyloric"
      },
      {
        id: "q3",
        kind: "single",
        update: "After the bolus his capillary refill is 2 seconds and he voids. Surgery is planned once his electrolytes improve.",
        prompt: "Which of the following is the most appropriate maintenance fluid while he waits for surgery?",
        options: [
          "D5 0.2% saline with KCl 20 mmol/L",
          "D5 0.9% saline with KCl 20 mmol/L",
          "D5 0.9% saline without potassium",
          "D10W without added electrolytes",
          "Ringer's lactate without dextrose"
        ],
        correct: 1,
        explanation: "Isotonic saline with dextrose and added potassium supplies chloride and potassium to correct his alkalosis, glucose for an infant who is not feeding, and a low risk of hyponatremia. Potassium is safe to add now that he has voided, and his potassium is only 2.9 mmol/L. D10W and 0.2% saline are hypotonic and risk hyponatremia. Saline without potassium leaves the hypokalemia and alkalosis uncorrected. Ringer's lactate gives no glucose and its lactate becomes bicarbonate.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "cps-fluids"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains his low chloride and high bicarbonate?",
        options: [
          "Adrenal salt wasting",
          "Bicarbonate loss in stool",
          "Renal tubular acidosis",
          "Sodium bicarbonate ingestion",
          "Vomiting of gastric acid"
        ],
        correct: 4,
        explanation: "Forceful non-bilious vomiting from pyloric obstruction removes hydrochloric acid, which leaves a hypochloremic metabolic alkalosis, seen in his chloride of 84 mmol/L and bicarbonate of 34 mmol/L. Volume depletion then makes the kidneys hold sodium and bicarbonate and waste potassium, which explains his potassium of 2.9 mmol/L. Adrenal salt wasting causes a high potassium and acidosis. Bicarbonate loss in stool and renal tubular acidosis cause a metabolic acidosis. Nothing in the history suggests bicarbonate ingestion.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "pyloric"
      }
    ],
    sources: [
      {
        id: "pyloric",
        citation: "Aspelund G, Langer JC. Current management of hypertrophic pyloric stenosis. Semin Pediatr Surg. 2007."
      },
      {
        id: "cps-fluids",
        citation: "Sniderman J, Buba M, Chan K. Canadian Paediatric Society, Acute Care Committee. Risk of acute hyponatremia in hospitalized children and youth receiving maintenance intravenous fluids. Position statement. 2024.",
        url: "https://cps.ca/en/documents/position/acute-hyponatremia-in-hospitalized-children-and-youth"
      }
    ],
    ...META,
  },
  {
    id: "shock-19",
    topic: "shock",
    title: "Girl who cannot keep fluids down",
    stem: "A 13-year-old girl is brought to the emergency department with vomiting and diarrhea for 3 days. She has vomited every drink today, including after a dose of oral ondansetron 2 hours ago. She has not voided for 10 hours. She has no past history. She is tired but interactive. Her eyes are sunken, her lips are dry and she has no tears. Capillary refill is 3 seconds. Glucose 3.6 mmol/L, sodium 134 mmol/L, potassium 3.4 mmol/L, bicarbonate 15 mmol/L, creatinine 88 umol/L.",
    vitals: {
      temperature: "37.6°C oral",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "98/60 mmHg",
      weight: "45 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best estimate of her fluid deficit, allowing for her age and moderate dehydration?",
        options: [
          "900 mL",
          "1 350 mL",
          "2 700 mL",
          "4 500 mL",
          "6 750 mL"
        ],
        correct: 2,
        explanation: "Her sunken eyes, dry lips, absent tears, oliguria and capillary refill of 3 seconds with a normal level of alertness fit moderate dehydration. Body water is a smaller share of weight in an adolescent than in an infant, so moderate dehydration is about 5 to 6 percent at her age, not the 10 percent used for infants. The deficit is 0.06 x 45 kg = 2.7 kg, or 2 700 mL. Using the infant figure of 10 percent gives 4 500 mL, and 15 percent gives 6 750 mL. Volumes of 900 and 1 350 mL (2 and 3 percent) fit mild dehydration.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "merck-dehyd"
      },
      {
        id: "q2",
        kind: "single",
        update: "A trial of small frequent sips of oral rehydration solution has failed. An IV is placed.",
        prompt: "Which of the following is the most appropriate first IV fluid order for her rehydration?",
        options: [
          "albumin 5% 20 mL/kg IV",
          "Dextrose 5% in water 20 mL/kg IV",
          "Isotonic crystalloid 20 mL/kg IV",
          "Isotonic crystalloid 60 mL/kg IV",
          "Two-thirds and one-third 20 mL/kg IV"
        ],
        correct: 2,
        explanation: "A child with moderate dehydration who fails oral rehydration needs an isotonic crystalloid bolus of 20 mL/kg, here 900 mL, followed by reassessment. Isotonic fluid lowers the risk of hyponatremia. Dextrose 5% in water and two-thirds and one-third are hypotonic and are not used to replace volume. Albumin offers no benefit over crystalloid in gastroenteritis. A fixed 60 mL/kg is a shock regimen and she is not in shock.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "trekk-ge"
      },
      {
        id: "q3",
        kind: "single",
        update: "After the bolus she is more alert and voids. She will stay on IV fluids overnight.",
        prompt: "Which of the following is her hourly maintenance fluid rate by the Holliday-Segar method?",
        options: [
          "45 mL/hour",
          "85 mL/hour",
          "90 mL/hour",
          "135 mL/hour",
          "180 mL/hour"
        ],
        correct: 1,
        explanation: "The hourly Holliday-Segar rate is 4 mL/kg for the first 10 kg, 2 mL/kg for the next 10 kg and 1 mL/kg for each kg above 20. For 45 kg that is 40 + 20 + 25 = 85 mL/hour. A rate of 45 mL/hour is 1 mL/kg for every kilogram, and 90 mL/hour is 2 mL/kg for every kilogram. A rate of 135 mL/hour is 3 mL/kg, and 180 mL/hour is 4 mL/kg for every kilogram, both too high for maintenance.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "holliday"
      }
    ],
    sources: [
      {
        id: "merck-dehyd",
        citation: "Cellucci MF. Dehydration in children. Merck Manual Professional Version. 2025.",
        url: "https://www.merckmanuals.com/professional/pediatrics/dehydration-and-fluid-therapy-in-children/dehydration-in-children"
      },
      {
        id: "trekk-ge",
        citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Gastroenteritis. Version 5.0. 2025.",
        url: "https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis"
      },
      {
        id: "holliday",
        citation: "Holliday MA, Segar WE. The maintenance need for water in parenteral fluid therapy. Pediatrics. 1957."
      }
    ],
    ...META,
  },
  {
    id: "shock-20",
    topic: "shock",
    title: "Grey newborn who is breathing fast",
    stem: "A 9-day-old boy is brought to the emergency department because he has been breathing fast and feeding poorly for a day. He was born at term after a normal pregnancy and went home at 36 hours. His mother says he looks grey. He is lethargic. His hands and feet are cool. The liver edge is 4 cm below the right costal margin. Brachial pulses are palpable but femoral pulses are absent. There is a soft systolic murmur at the left upper sternal border. Glucose 4.1 mmol/L. Lactate 6.8 mmol/L.",
    vitals: {
      temperature: "36.6°C rectal",
      pulse: "196/minute",
      resp: "72/minute",
      bp: "58/32 mmHg",
      o2sat: "93% on room air",
      weight: "3.4 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly points to a cardiac cause of this infant's shock?",
        options: [
          "Absent femoral pulses",
          "Lactate of 6.8 mmol/L",
          "Poor feeding for a day",
          "Respiratory rate of 72/minute",
          "Temperature of 36.6°C"
        ],
        correct: 0,
        explanation: "Absent femoral pulses with palpable brachial pulses mean flow to the lower body depends on a closing ductus arteriosus, as in critical coarctation. The age of 9 days fits the time when the duct closes. A high lactate, poor feeding and tachypnea occur in sepsis and metabolic disease as well as in heart disease. A normal temperature does not separate cardiac shock from sepsis in a neonate.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "yee-cardiac"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following treatments directly addresses the cause of his shock?",
        options: [
          "alprostadil 0.05 mcg/kg/minute IV",
          "ampicillin 100 mg/kg IV",
          "dobutamine 5 mcg/kg/minute IV",
          "furosemide 1 mg/kg IV",
          "indomethacin 0.2 mg/kg IV"
        ],
        correct: 0,
        explanation: "Prostaglandin E1 (alprostadil) reopens the ductus arteriosus and restores blood flow to the body below the coarctation. It should start as soon as a duct dependent lesion is suspected, before echocardiography. Antibiotics are reasonable in a sick neonate but do not reopen the duct. Dobutamine and furosemide support a failing heart without relieving the obstruction. Indomethacin closes the ductus and would be harmful.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "yee-cardiac"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following adverse effects of this infusion calls for the closest monitoring?",
        options: [
          "Apnea episodes",
          "Hypertension",
          "Hypothermia",
          "Polycythemia",
          "Thrombocytosis"
        ],
        correct: 0,
        explanation: "Apnea is the most important adverse effect of prostaglandin E1 and is more common at higher doses. The infant needs continuous cardiorespiratory monitoring, and staff ready to manage his airway, especially before transport. The infusion also causes fever, flushing and hypotension, the opposite of hypothermia and hypertension. Polycythemia and thrombocytosis are not effects of the infusion, which inhibits platelet aggregation.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "yee-cardiac"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following fluid approaches is most appropriate while the infusion is started?",
        options: [
          "albumin 25% 4 mL/kg IV",
          "Cautious 10 mL/kg crystalloid bolus",
          "Crystalloid 20 mL/kg to 60 mL/kg",
          "Dextrose 10% 10 mL/kg IV",
          "No fluid until echocardiography"
        ],
        correct: 1,
        explanation: "His liver edge 4 cm below the costal margin shows venous congestion from a failing heart, so large boluses can worsen pulmonary edema. A small crystalloid bolus of 10 mL/kg with reassessment of the liver, work of breathing and perfusion is reasonable because he has also fed poorly. Repeated 20 mL/kg boluses to 60 mL/kg suit septic or hypovolemic shock, not this heart. His glucose of 4.1 mmol/L does not call for a dextrose bolus. Withholding all fluid until an echocardiogram ignores his poor intake.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "yee-cardiac"
      }
    ],
    sources: [
      {
        id: "yee-cardiac",
        citation: "Yee L. Cardiac emergencies in the first year of life. Emerg Med Clin North Am. 2007.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17950133/"
      }
    ],
    ...META,
  },
  {
    id: "shock-21",
    topic: "shock",
    title: "Vomiting newborn with odd electrolytes",
    stem: "A 12-day-old boy is brought to the emergency department with vomiting after every feed for 2 days. The vomit is not green. He was born at term weighing 3.5 kg and has fewer wet diapers. He is lethargic and mottled. His fontanelle is sunken. Capillary refill is 4 seconds. Femoral pulses are present. The genitals are normal in form, and the scrotum is darkly pigmented. Sodium 121 mmol/L, potassium 7.6 mmol/L, glucose 2.4 mmol/L, bicarbonate 14 mmol/L. The ECG shows peaked T waves with a normal QRS.",
    vitals: {
      temperature: "36.4°C rectal",
      pulse: "188/minute",
      resp: "48/minute",
      bp: "60/34 mmHg",
      weight: "3.2 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this infant's shock?",
        options: [
          "Congenital adrenal hyperplasia",
          "Group B streptococcal sepsis",
          "Hypoplastic left heart",
          "Midgut volvulus",
          "Pyloric stenosis"
        ],
        correct: 0,
        explanation: "Low sodium, high potassium, low glucose, acidosis and a pigmented scrotum at 12 days of age fit a salt wasting adrenal crisis from congenital adrenal hyperplasia. Boys have normal genitals, so the diagnosis is often missed until crisis in the second week. Pyloric stenosis causes a hypochloremic, hypokalemic alkalosis. Midgut volvulus causes bilious vomiting. Hypoplastic left heart causes weak pulses and would not explain his electrolytes. Sepsis must still be considered, but it does not explain this electrolyte pattern and pigmentation.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "cah"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following steroids is most appropriate for his crisis?",
        options: [
          "dexamethasone IV",
          "fludrocortisone PO",
          "hydrocortisone IV",
          "methylprednisolone IV",
          "prednisone PO"
        ],
        correct: 2,
        explanation: "Hydrocortisone IV is the steroid for adrenal crisis, dosed at 50 mg/m2 in children. At stress doses it replaces cortisol and also has mineralocorticoid action that helps correct his sodium and potassium. Dexamethasone and methylprednisolone have little or no mineralocorticoid effect. Fludrocortisone and prednisone are oral, and he is vomiting and in shock. Fludrocortisone also gives no glucocorticoid cover.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "pai-guideline"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial fluid bolus for this infant?",
        options: [
          "albumin 25% 64 mL IV",
          "dextrose 5% in water 64 mL IV",
          "normal saline 64 mL IV",
          "normal saline 320 mL IV",
          "0.45% saline 64 mL IV"
        ],
        correct: 2,
        explanation: "He is in shock with a sodium of 121 mmol/L, so he needs isotonic saline at 20 mL/kg: 20 x 3.2 kg = 64 mL, repeated after reassessment. Normal saline restores volume and replaces the sodium he has lost. Dextrose 5% in water and 0.45% saline are hypotonic and would lower his sodium further. A bolus of 320 mL is 100 mL/kg, far more than one bolus. Albumin 25% does not replace his salt and water loss.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "pai-guideline"
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following blood tests should be drawn before hydrocortisone to confirm the suspected diagnosis, if this causes no delay?",
        options: [
          "17-hydroxyprogesterone level",
          "Cortisol level",
          "Plasma ammonia level",
          "Serum lipase level",
          "Thyroid stimulating hormone",
          "Urine organic acid screen"
        ],
        select: 2,
        correct: [
          0,
          1
        ],
        explanation: "A markedly raised 17-hydroxyprogesterone with a low cortisol confirms 21-hydroxylase deficiency, the cause of most congenital adrenal hyperplasia. Both should be drawn before hydrocortisone, which alters the results, but treatment must not wait for them. Ammonia and urine organic acids screen for inborn errors of metabolism, which do not cause this pattern of low sodium, high potassium and pigmentation. Lipase and thyroid stimulating hormone do not explain his findings.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "cah"
      }
    ],
    sources: [
      {
        id: "cah",
        citation: "Speiser PW, et al. Congenital adrenal hyperplasia due to steroid 21-hydroxylase deficiency. An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2018.",
        url: "https://academic.oup.com/jcem/article/103/11/4043/5107759"
      },
      {
        id: "pai-guideline",
        citation: "Bornstein SR, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2016."
      }
    ],
    ...META,
  },
  {
    id: "shock-22",
    topic: "shock",
    title: "Fever and chills after a day of aches",
    stem: "A 46-year-old man is brought to the emergency department by ambulance with 14 hours of fever, shaking chills, vomiting and muscle aches. His spleen was removed after a car crash 20 years ago, and he is not sure which vaccines he has had since. He takes no medications. He is drowsy but answers questions. His skin is mottled over both knees and his capillary refill is 5 seconds. His chest is clear, and there is no rash or neck stiffness. Lactate is 6.8 mmol/L and platelets are 64 x 10^9/L. Blood cultures are drawn, and ceftriaxone and vancomycin are given within 30 minutes of arrival.",
    vitals: {
      temperature: "39.4°C oral",
      pulse: "128/minute",
      resp: "28/minute",
      bp: "78/40 mmHg",
      o2sat: "94% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Over 2 hours he has received 4 L of Ringer's lactate and norepinephrine has been started. A passive leg raise still increases his stroke volume. His lungs remain clear.",
        prompt: "Which of the following fluids is most appropriate for his further volume resuscitation?",
        options: [
          "albumin 5% 500 mL IV",
          "dextrose 5% 500 mL IV",
          "hydroxyethyl starch 6% 500 mL IV",
          "sodium chloride 0.45% 500 mL IV",
          "sodium chloride 3% 500 mL IV"
        ],
        correct: 0,
        explanation: "He has already received 4 L of crystalloid, which is 50 mL/kg at 80 kg, and the passive leg raise shows he still responds to volume. The 2026 Surviving Sepsis guideline suggests crystalloid alone as the routine fluid, but notes that supplemental albumin may be appropriate once large volumes of crystalloid have been given. No isotonic crystalloid is offered here, so 5% albumin is the best choice. The guideline recommends against starches, which increase the need for renal replacement therapy. Half-normal saline and 5% dextrose are hypotonic, so most of the volume leaves the circulation. Hypertonic 3% saline is not a resuscitation fluid for septic shock and raises the sodium quickly.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q2",
        kind: "single",
        update: "Norepinephrine is now running at 0.3 mcg/kg/minute. His mean arterial pressure is 58 mmHg.",
        prompt: "Which of the following is the most appropriate next change to his vasoactive treatment?",
        options: [
          "Add dopamine infusion",
          "Add epinephrine infusion",
          "Add vasopressin infusion",
          "Double the norepinephrine dose",
          "Start milrinone infusion"
        ],
        correct: 2,
        explanation: "His MAP stays below 65 mmHg on norepinephrine 0.3 mcg/kg/minute. The guideline suggests adding vasopressin for patients on escalating doses of norepinephrine. In practice it is usually added once norepinephrine reaches 0.25 to 0.5 mcg/kg/minute, at a fixed dose of 0.03 units/minute. Doubling norepinephrine adds more adrenergic load without that benefit. Epinephrine is the agent the guideline suggests only after norepinephrine and vasopressin have failed. Dopamine carries a higher risk of arrhythmia than norepinephrine. Milrinone dilates blood vessels and would lower his pressure further.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "Vasopressin 0.03 units/minute is added and his MAP is now 67 mmHg. Bedside echocardiography shows a severely reduced left ventricular ejection fraction with a normal-sized right ventricle and no effusion. Lactate is 7.4 mmol/L and his capillary refill is still 5 seconds.",
        prompt: "Which of the following is the most appropriate addition for his persistent hypoperfusion?",
        options: [
          "dobutamine infusion IV",
          "dopamine infusion IV",
          "levosimendan infusion IV",
          "milrinone infusion IV",
          "phenylephrine infusion IV"
        ],
        correct: 0,
        explanation: "His blood pressure has reached target, yet his lactate is rising and his capillary refill stays at 5 seconds with a poorly contracting left ventricle. This is septic shock with cardiac dysfunction and persistent hypoperfusion despite an adequate pressure. The guideline suggests an inotrope over no inotrope, and specifically adding dobutamine to norepinephrine or using epinephrine alone. Dobutamine is short acting and easy to titrate. The guideline suggests against levosimendan, which gave no benefit in a randomized trial in septic shock and caused more tachyarrhythmias. Milrinone is a longer-acting vasodilating inotrope that is cleared by the kidneys and often drops the pressure. Dopamine adds arrhythmia risk. Phenylephrine raises afterload on a failing ventricle and gives no inotropy.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q4",
        kind: "single",
        update: "Six hours after norepinephrine was started, he still needs norepinephrine 0.28 mcg/kg/minute with vasopressin to keep his MAP at 65 mmHg.",
        prompt: "Which of the following corticosteroid regimens is most appropriate for him now?",
        options: [
          "dexamethasone 10 mg IV once",
          "fludrocortisone 50 mcg PO alone",
          "hydrocortisone 50 mg IV every 6 hours",
          "methylprednisolone 1 g IV daily",
          "prednisone 50 mg PO daily"
        ],
        correct: 2,
        explanation: "He has septic shock that still needs two vasopressors 6 hours after norepinephrine was started. The guideline suggests IV corticosteroids for septic shock, and the usual regimen is hydrocortisone 200 mg a day, given as 50 mg IV every 6 hours. A single dose of dexamethasone is not the studied regimen and has no mineralocorticoid effect. Fludrocortisone alone gives no glucocorticoid. Pulse methylprednisolone is a much higher dose with no proven benefit in septic shock. Oral prednisone depends on absorption in a vomiting patient in shock.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-23",
    topic: "shock",
    title: "Rigors two days after a clinic procedure",
    stem: "A 67-year-old man presents to the emergency department with 6 hours of rigors, fever and confusion. Two days ago he had a transrectal prostate biopsy after a single dose of oral ciprofloxacin. Since this morning he has passed only small dribbles of urine and has lower abdominal pain. Six months ago a urine culture grew an extended-spectrum beta-lactamase (ESBL) producing E. coli. He has hypertension treated with amlodipine. He is drowsy and oriented to person only. The suprapubic area is tender and dull to percussion. Lactate is 5.6 mmol/L and creatinine is 212 umol/L (baseline 88 umol/L).",
    vitals: {
      temperature: "39.8°C oral",
      pulse: "124/minute",
      resp: "26/minute",
      bp: "82/36 mmHg",
      o2sat: "96% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following empiric antibiotics is most appropriate for him?",
        options: [
          "ceftriaxone 2 g IV",
          "ciprofloxacin 400 mg IV",
          "gentamicin 5 mg/kg IV",
          "meropenem 1 g IV",
          "piperacillin-tazobactam 4.5 g IV"
        ],
        correct: 3,
        explanation: "He is in septic shock from a urinary source and has a documented ESBL-producing E. coli. For complicated urinary infection the IDSA guidance prefers trimethoprim-sulfamethoxazole or a fluoroquinolone only when susceptibility is shown, and a carbapenem when they cannot be relied on. It prefers meropenem or imipenem over ertapenem when the patient is critically ill. Ceftriaxone is broken down by ESBL enzymes. His infection began despite ciprofloxacin prophylaxis, so ciprofloxacin cannot be relied on. The guidance lists piperacillin-tazobactam as an alternative for ESBL complicated urinary infection only in patients who are not critically ill and have no bacteremia, and he is in septic shock. Aminoglycosides such as gentamicin are also alternatives, but they are nephrotoxic and his creatinine is already more than twice his baseline.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa"
      },
      {
        id: "q2",
        kind: "single",
        update: "Meropenem has been given. A bedside bladder scan shows about 950 mL of urine.",
        prompt: "Which of the following is the most appropriate next step to control the source of his infection?",
        options: [
          "Bladder drainage by catheter now",
          "CT of the abdomen and pelvis first",
          "Oral tamsulosin and a voiding trial",
          "Repeat bladder scan in 4 hours",
          "Urology review in the morning"
        ],
        correct: 0,
        explanation: "His bladder holds about 950 mL of retained, infected urine, which is an undrained source in a patient in septic shock. The guideline suggests early source control, ideally within 6 hours, and a bladder catheter drains it now at the bedside. A CT delays drainage and adds contrast to a kidney that is already injured. Tamsulosin works over days and a voiding trial leaves the source in place. Rescanning in 4 hours or waiting for a morning review both delay a simple step that should happen now.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 L of Ringer's lactate over 30 minutes his BP is 80/34 mmHg. He has an 18-gauge IV in the right antecubital fossa.",
        prompt: "Which of the following is the most appropriate timing for starting norepinephrine in him?",
        options: [
          "After 1 hour of urine output",
          "After 30 mL/kg of fluid is complete",
          "Now, alongside further fluid boluses",
          "Only if lactate rises on repeat",
          "Only if MAP falls below 40 mmHg"
        ],
        correct: 2,
        explanation: "His diastolic pressure of 34 mmHg reflects very low vascular tone, and his MAP is about (80 + 2 x 34) / 3 = 49 mmHg after his first litre. In the CENSER trial, low-dose norepinephrine started early alongside fluids gave better shock control at 6 hours than standard care, with less cardiogenic pulmonary edema and fewer new arrhythmias. Finishing 30 mL/kg first, which is 2 700 mL for him, prolongs severe hypotension. Watching urine output for an hour also leaves a MAP near 49 mmHg untreated. Waiting for a rising lactate or for a MAP below 40 mmHg accepts perfusion well below the guideline target of 65 mmHg.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "censer"
      },
      {
        id: "q4",
        kind: "single",
        update: "Two hours later he is on norepinephrine 0.15 mcg/kg/minute. Arterial pH is 7.14, bicarbonate 11 mmol/L and lactate 7.2 mmol/L. Creatinine is now 298 umol/L and he has passed 40 mL of urine since the catheter was placed.",
        prompt: "Which of the following is the most appropriate treatment for his acidemia?",
        options: [
          "Add dobutamine for cardiac output",
          "Observe until the lactate clears",
          "sodium bicarbonate infusion IV",
          "sodium chloride 0.9% 2 L IV",
          "Switch Ringer's lactate to saline"
        ],
        correct: 2,
        explanation: "His pH is 7.14, below 7.2, and he has severe acute kidney injury, with a creatinine of 298 umol/L, about 3.4 times his baseline of 88, and almost no urine. The guideline suggests sodium bicarbonate for septic shock with a pH of 7.2 or less and stage 2 or 3 kidney injury. Observation fits milder acidemia, where the guideline suggests against bicarbonate. Large volumes of 0.9% saline add chloride and can worsen the acidosis, and he is already oliguric. Switching from Ringer's lactate to saline has the same chloride problem. Nothing suggests cardiac dysfunction, so dobutamine has no indication.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "idsa",
        citation: "Tamma PD, Bonomo RA, Heil EL, Justo JA, Satlin MJ, Mathers AJ. Infectious Diseases Society of America 2026 guidance on the treatment of antimicrobial-resistant gram-negative infections. Clin Infect Dis. 2026.",
        url: "https://www.idsociety.org/practice-guideline/amr-guidance/"
      },
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      },
      {
        id: "censer",
        citation: "Permpikul C, Tongyoo S, Viarasilpa T, et al. Early use of norepinephrine in septic shock resuscitation (CENSER): a randomized trial. Am J Respir Crit Care Med. 2019.",
        url: "https://doi.org/10.1164/rccm.201806-1034OC"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-24",
    topic: "shock",
    title: "Sweats and pain under the right ribs",
    stem: "A 64-year-old man presents to the emergency department with 5 days of fever, sweats and right upper abdominal pain. Today he became light-headed and confused. He has type 2 diabetes treated with metformin. He has not been in hospital, has not travelled and has never injected drugs. He is flushed and drowsy. The right upper quadrant is tender and the liver edge is 3 cm below the costal margin. There is no jaundice. Lactate is 5.1 mmol/L and capillary glucose is 17.8 mmol/L. Bedside ultrasound shows a 7 cm fluid-filled lesion in the right lobe of the liver. The gallbladder is normal and the bile ducts are not dilated.",
    vitals: {
      temperature: "39.5°C oral",
      pulse: "126/minute",
      resp: "26/minute",
      bp: "80/44 mmHg",
      o2sat: "95% on room air",
      weight: "88 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        update: "Blood cultures have been drawn and a balanced crystalloid bolus is running.",
        prompt: "Which of the following are the most appropriate next steps in his care?",
        options: [
          "Add gentamicin as a second gram-negative agent",
          "Add vancomycin for MRSA cover",
          "Broad-spectrum IV antibiotics now",
          "CT abdomen before starting antibiotics",
          "hydrocortisone 50 mg IV every 6 hours",
          "Percutaneous drainage of the liver lesion",
          "Surgical open drainage tonight"
        ],
        select: 2,
        correct: [
          2,
          5
        ],
        explanation: "A large liver abscess with septic shock needs antibiotics immediately and source control as soon as it is practical. The guideline recommends antimicrobials immediately, ideally within 1 hour, for possible septic shock, so waiting for a CT is wrong. It suggests early source control, ideally within 6 hours. The least invasive method that works is preferred, which for a single 7 cm abscess is percutaneous drainage rather than open surgery. He has no hospital stay, travel or other risk factor for MRSA or for multidrug-resistant gram-negative organisms, so vancomycin or a second gram-negative agent adds toxicity without benefit. Corticosteroids are suggested for septic shock that needs vasopressors, and he has not yet had his fluid bolus or a vasopressor.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q2",
        kind: "single",
        update: "Piperacillin-tazobactam is running and norepinephrine has been started. His capillary glucose is now 18.4 mmol/L.",
        prompt: "Which of the following is the most appropriate approach to his blood glucose?",
        options: [
          "Hold insulin until glucose exceeds 20",
          "Insulin infusion aiming for 4.4 to 6.1",
          "Insulin infusion aiming for 8 to 10",
          "Restart his metformin today",
          "Sliding-scale SC insulin only"
        ],
        correct: 2,
        explanation: "His glucose is 18.4 mmol/L, well above the threshold of 10 mmol/L (180 mg/dL) at which the guideline recommends starting insulin in sepsis. After insulin is started, the typical target is 8 to 10 mmol/L. Tight control to 4.4 to 6.1 mmol/L did not reduce mortality in multicentre trials and caused more hypoglycemia. Waiting until the glucose exceeds 20 mmol/L leaves him hyperglycemic, which is linked to higher mortality. Subcutaneous insulin is absorbed unpredictably when skin perfusion is poor in shock. Metformin should not be restarted while he is in shock with a lactate of 5.1 mmol/L.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "Three hours later he is on norepinephrine 0.1 mcg/kg/minute. His pH is 7.26, bicarbonate 16 mmol/L and lactate 4.0 mmol/L. His creatinine is 94 umol/L and he is passing 60 mL of urine an hour.",
        prompt: "Which of the following is the most appropriate approach to his metabolic acidosis?",
        options: [
          "sodium bicarbonate infusion IV",
          "sodium bicarbonate 1 mmol/kg IV",
          "Switch fluids to 0.9% saline",
          "tromethamine infusion IV",
          "No bicarbonate or buffer therapy"
        ],
        correct: 4,
        explanation: "His acidemia comes from hypoperfusion, his pH is 7.26, and his kidneys are working, with a creatinine of 94 umol/L and good urine output. The guideline suggests against sodium bicarbonate for hypoperfusion-related lactic acidemia to improve hemodynamics or reduce vasopressor needs. It reserves bicarbonate for a pH of 7.2 or less with stage 2 or 3 acute kidney injury, which he does not have. A bolus or an infusion of bicarbonate is therefore not indicated. Tromethamine is a buffer with no evidence of benefit here. Switching to 0.9% saline adds chloride and would tend to worsen the acidosis.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q4",
        kind: "single",
        update: "Percutaneous drainage yields pus. On day 2, blood and pus cultures grow Klebsiella pneumoniae susceptible to ceftriaxone. He is off norepinephrine and his fever is settling.",
        prompt: "Which of the following is the most appropriate change to his antibiotic treatment?",
        options: [
          "Add vancomycin to the regimen",
          "Change to ceftriaxone IV",
          "Change to oral ciprofloxacin today",
          "Continue piperacillin-tazobactam",
          "Stop antibiotics after drainage"
        ],
        correct: 1,
        explanation: "The organism and its susceptibility are now known, and he is improving after drainage. The guideline recommends de-escalation once the organism and its susceptibility are known, so a narrower agent that covers the isolate, such as ceftriaxone, replaces piperacillin-tazobactam. Continuing the broader drug adds no benefit and more resistance pressure. Vancomycin covers gram-positive organisms that were not found. Drainage alone does not treat a bacteremic abscess, so antibiotics must continue. A switch to an oral agent on day 2, just after shock, is premature while he still needs close IV treatment.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-25",
    topic: "shock",
    title: "Chills during a planned infusion",
    stem: "A 68-year-old man with myelodysplastic syndrome is receiving a planned unit of apheresis platelets in the emergency department. This morning his platelet count was 8 x 10^9/L, his neutrophil count 0.4 x 10^9/L and his hemoglobin 96 g/L. His temperature, pulse and blood pressure were normal before the transfusion started. Twenty minutes into the unit he develops shaking chills and feels faint. He has no itch, hives, wheeze or lip swelling. He has no back pain and his urine is clear. His chest is clear and his JVP is not raised.",
    vitals: {
      temperature: "39.7°C oral",
      pulse: "136/minute",
      resp: "26/minute",
      bp: "76/40 mmHg",
      o2sat: "95% on room air",
      weight: "74 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shock?",
        options: [
          "Anaphylactic transfusion reaction",
          "Bacterial contamination of the unit",
          "Febrile non-hemolytic reaction",
          "Transfusion-associated circulatory overload",
          "Transfusion-related acute lung injury"
        ],
        correct: 1,
        explanation: "He developed a high fever, rigors, tachycardia and hypotension minutes into a platelet transfusion. Platelets are stored at room temperature, and bacterial contamination presents with fever, tachycardia and hypotension. A febrile non-hemolytic reaction causes fever and chills without shock. Anaphylaxis would be expected to bring urticaria, wheeze or angioedema, and he has none. Circulatory overload causes breathlessness with signs of volume overload, but his chest is clear and his JVP is not raised. Acute lung injury causes respiratory failure with pulmonary edema, and his lungs are clear.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "cbs"
      },
      {
        id: "q2",
        kind: "single",
        update: "The transfusion is stopped. The bag and tubing are clamped and sent to the blood bank, and blood cultures are drawn from the other arm.",
        prompt: "Which of the following is the most appropriate fluid for his hypotension now?",
        options: [
          "albumin 25% 100 mL IV",
          "hydroxyethyl starch 500 mL IV",
          "red cells 1 unit IV",
          "Resume the same platelet unit",
          "Ringer's lactate 1 L IV"
        ],
        correct: 4,
        explanation: "He is in distributive shock from bacteremia, and crystalloid is the first-line resuscitation fluid, with a balanced solution preferred over saline. The implicated platelet unit must not be restarted, and it goes to the blood bank for culture. Red cells do not treat septic hypotension, and his hemoglobin of 96 g/L is above a restrictive threshold. Hyperoncotic 25% albumin gives little volume and is not a first-line fluid. The guideline recommends against starches because they increase the need for renal replacement therapy.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 L of Ringer's lactate his BP is 80/42 mmHg, a mean arterial pressure of 55 mmHg. There is still no rash, wheeze or angioedema.",
        prompt: "Which of the following vasoactive treatments is most appropriate for him now?",
        options: [
          "dopamine infusion IV",
          "epinephrine 0.5 mg IM",
          "norepinephrine infusion IV",
          "phenylephrine infusion IV",
          "vasopressin infusion IV"
        ],
        correct: 2,
        explanation: "His MAP of 55 mmHg is below 65 mmHg after 2 L of crystalloid, so he needs a vasopressor for septic shock. The guideline recommends norepinephrine as the first-line agent over dopamine and suggests it over vasopressin. Intramuscular epinephrine treats anaphylaxis, and he has no skin, airway or wheezing features of it. Dopamine causes more arrhythmias. Vasopressin is an added agent once norepinephrine is running, not the first choice. Phenylephrine is not among the agents the guideline recommends for septic shock.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q4",
        kind: "single",
        update: "The blood bank calls. A Gram stain of the platelet bag shows gram-positive cocci in clusters.",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate for him?",
        options: [
          "cefazolin plus gentamicin IV",
          "ceftriaxone plus metronidazole IV",
          "piperacillin-tazobactam alone IV",
          "vancomycin plus ceftriaxone IV",
          "vancomycin plus piperacillin-tazobactam IV"
        ],
        correct: 4,
        explanation: "Gram-positive cocci in clusters point to staphylococci, which include methicillin-resistant strains, so vancomycin is needed. He is also neutropenic, with neutrophils of 0.4 x 10^9/L, and in shock, so he needs broad gram-negative cover that includes Pseudomonas. Vancomycin with piperacillin-tazobactam covers both. The blood services guide advises broad-spectrum antibiotics for suspected contamination. Ceftriaxone does not cover Pseudomonas, and cefazolin does not cover MRSA. Piperacillin-tazobactam alone misses MRSA. Ceftriaxone with metronidazole misses both MRSA and Pseudomonas.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "cbs"
      }
    ],
    sources: [
      {
        id: "cbs",
        citation: "Laureano M, Khandelwal A, Yan M. Transfusion reactions. In: Clinical guide to transfusion, chapter 10. Canadian Blood Services. 2022.",
        url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions"
      },
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-26",
    topic: "shock",
    title: "Drowsy woman with a slow pulse",
    stem: "A 57-year-old woman is brought to the emergency department by ambulance 2 hours after taking about 40 tablets of her husband's propranolol 40 mg. She has depression. She is drowsy and responds to voice. Her skin is cool. Glucose 3.2 mmol/L, potassium 4.1 mmol/L. The ECG shows sinus bradycardia with a QRS of 128 ms and no ST changes.",
    vitals: {
      temperature: "36.2°C oral",
      pulse: "38/minute",
      resp: "14/minute",
      bp: "72/40 mmHg",
      o2sat: "95% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings is most specific to propranolol among the beta-blockers in overdose?",
        options: [
          "Bradycardia of 38/minute",
          "Cool peripheral skin",
          "Glucose of 3.2 mmol/L",
          "QRS duration of 128 ms",
          "Respiratory rate of 14/minute"
        ],
        correct: 3,
        explanation: "Propranolol blocks fast sodium channels as well as beta receptors, so it widens the QRS and causes seizures, which most other beta-blockers do not. Her QRS of 128 ms reflects this. Bradycardia, hypotension with cool skin and low glucose occur with any beta-blocker in overdose. A respiratory rate of 14/minute is normal.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "reith-bb"
      },
      {
        id: "q2",
        kind: "menu",
        update: "She receives atropine, 2 L of crystalloid and sodium bicarbonate. Her pulse is 42/minute and BP 70/38 mmHg. Her QRS is 110 ms.",
        prompt: "Which of the following treatments are most appropriate for her persistent shock?",
        options: [
          "digoxin immune fab IV",
          "epinephrine infusion IV",
          "flumazenil 0.2 mg IV",
          "High-dose insulin with dextrose",
          "physostigmine 1 mg IV",
          "Urgent hemodialysis"
        ],
        select: 2,
        correct: [
          1,
          3
        ],
        explanation: "In beta-blocker poisoning with shock after atropine and fluid, catecholamines such as epinephrine improve heart rate and pressure, and high-dose insulin euglycemic therapy improves contractility. Both are standard treatments for shock that persists after atropine and fluid. Propranolol is highly protein bound and lipophilic, so hemodialysis does not remove it. Digoxin immune fab treats digoxin toxicity, and flumazenil and physostigmine treat other poisonings. Flumazenil can also provoke seizures.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "bb-review"
      },
      {
        id: "q3",
        kind: "single",
        update: "Twenty minutes later she has a generalized tonic clonic seizure that is still going after 3 minutes.",
        prompt: "Which of the following is the most appropriate first treatment for her seizure?",
        options: [
          "carbamazepine 200 mg PO",
          "levetiracetam 60 mg/kg IV",
          "lorazepam 4 mg IV",
          "phenytoin 20 mg/kg IV",
          "valproic acid 40 mg/kg IV"
        ],
        correct: 2,
        explanation: "A benzodiazepine such as lorazepam is the first treatment for a toxin induced seizure. Phenytoin works poorly for toxin induced seizures and is not a first treatment for them. Levetiracetam and valproic acid are second-line agents after a benzodiazepine. Carbamazepine is oral and has no role in an active seizure.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "rosen-ch142"
      },
      {
        id: "q4",
        kind: "single",
        update: "After the seizure stops, a repeat capillary glucose is 2.6 mmol/L. She has a working IV.",
        prompt: "Which of the following is the most appropriate treatment for her low glucose now?",
        options: [
          "dextrose 25 g IV",
          "glucagon 1 mg IM",
          "glucose gel 15 g PO",
          "hydrocortisone 100 mg IV",
          "octreotide 50 mcg SC"
        ],
        correct: 0,
        explanation: "Beta-blockers impair glycogen breakdown and the warning signs of hypoglycemia, and a glucose of 2.6 mmol/L after a seizure needs prompt correction. With a working IV, dextrose 25 g IV acts within minutes, followed by an infusion and frequent checks. She is drowsy after a seizure, so oral glucose gel risks aspiration. IM glucagon at this dose is slower and less reliable than IV dextrose. Octreotide treats sulfonylurea induced hypoglycemia, and hydrocortisone treats adrenal crisis, neither of which fits her case.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "dc-hypoglycemia"
      }
    ],
    sources: [
      {
        id: "bb-review",
        citation: "Rotella JA, Greene SL, Koutsogiannis Z, et al. Treatment for beta-blocker poisoning. A systematic review. Clin Toxicol (Phila). 2020."
      },
      {
        id: "reith-bb",
        citation: "Reith DM, Dawson AH, Epid D, Whyte IM, Buckley NA, Sayer GP. Relative toxicity of beta blockers in overdose. J Toxicol Clin Toxicol. 1996.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8667464/"
      },
      {
        id: "rosen-ch142",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 142, Cardiovascular Drugs.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "dc-hypoglycemia",
        citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Yale JF, Paty B, Senior PA. Hypoglycemia. Can J Diabetes. 2018.",
        url: "https://guidelines.diabetes.ca/cpg/chapter14"
      }
    ],
    ...META,
  },
  {
    id: "shock-27",
    topic: "shock",
    title: "Swollen legs and a racing heart",
    stem: "A 54-year-old man is brought to the emergency department by his brother with 4 days of increasing breathlessness, leg swelling and vomiting. For 2 months he has eaten very little and has drunk about 20 standard drinks a day. He takes no medications. He is restless but oriented. His hands and feet are warm and his pulses are bounding. The JVP is 8 cm above the sternal angle. He has crackles at both lung bases and pitting edema to the knees. Lactate is 11.2 mmol/L and venous pH is 7.12. Troponin and TSH are normal, and hemoglobin is 138 g/L.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "128/minute",
      resp: "30/minute",
      bp: "78/32 mmHg",
      o2sat: "92% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside ultrasound findings best fits his clinical picture?",
        options: [
          "Hyperdynamic LV, dilated RV and plethoric IVC",
          "Hyperdynamic LV with a collapsed IVC",
          "Large pericardial effusion with RV collapse",
          "Normal LV with absent lung sliding",
          "Poorly contracting LV with a plethoric IVC"
        ],
        correct: 0,
        explanation: "He is hypotensive yet warm, with bounding pulses, a wide pulse pressure, a raised JVP, crackles and edema. This is high-output heart failure with right-sided congestion, which fits a vigorously contracting left ventricle with a dilated right ventricle and a full IVC. A hyperdynamic ventricle with a collapsed IVC suggests hypovolemia or early sepsis, which his raised JVP and edema argue against. A large effusion with right ventricular collapse is tamponade, which would not give bounding pulses. Absent lung sliding suggests pneumothorax, not a cause of his edema. A poorly contracting ventricle means low-output failure, which brings cool limbs and a narrow pulse pressure, not the warm limbs he has.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "beriberi"
      },
      {
        id: "q2",
        kind: "single",
        update: "Ultrasound shows a hyperdynamic left ventricle, a dilated right ventricle and a plethoric IVC.",
        prompt: "Which of the following treatments most directly addresses the cause of his shock?",
        options: [
          "dextrose 50% 50 mL IV",
          "hydrocortisone 100 mg IV",
          "levothyroxine 200 mcg IV",
          "sodium bicarbonate 100 mmol IV",
          "thiamine 200 mg IV"
        ],
        correct: 4,
        explanation: "Two months of heavy drinking with almost no food, high-output heart failure with right-sided congestion, and severe lactic acidosis with a normal troponin point to Shoshin beriberi, the fulminant form of wet beriberi from thiamine deficiency. The review of beriberi recommends immediate parenteral thiamine, commonly 100 to 300 mg a day, with hemodynamic support. Dextrose alone raises the thiamine requirement and can worsen the illness. Nothing in his case suggests adrenal insufficiency. His TSH is normal, so levothyroxine has no role. Bicarbonate treats the pH, not the cause.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "beriberi"
      },
      {
        id: "q3",
        kind: "single",
        update: "Thiamine is given. After 500 mL of crystalloid his crackles are worse and his mean arterial pressure is 50 mmHg. The left ventricle still contracts vigorously.",
        prompt: "Which of the following vasoactive agents is most appropriate while the thiamine takes effect?",
        options: [
          "dobutamine infusion IV",
          "dopamine infusion IV",
          "milrinone infusion IV",
          "nitroglycerin infusion IV",
          "norepinephrine infusion IV"
        ],
        correct: 4,
        explanation: "Wet beriberi lowers vascular resistance through peripheral vasodilation, and his heart is already contracting vigorously. A vasoconstrictor such as norepinephrine supports his pressure while thiamine acts, and more fluid is worsening his crackles. Dobutamine adds inotropy that a hyperdynamic ventricle does not need and lowers vascular resistance further. Milrinone is also a vasodilating inotrope. Nitroglycerin would drop a MAP that is already 50 mmHg. Dopamine drives the heart rate higher when he is already at 128/minute.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "beriberi"
      },
      {
        id: "q4",
        kind: "single",
        update: "The pharmacist asks how to prepare his ongoing IV thiamine doses.",
        prompt: "Which of the following is the most appropriate diluent for his IV thiamine infusion?",
        options: [
          "dextrose 5% in 0.45% saline 100 mL",
          "dextrose 10% 100 mL",
          "dextrose 5% 100 mL",
          "sodium chloride 0.9% 100 mL",
          "sterile water 100 mL"
        ],
        correct: 3,
        explanation: "The beriberi review advises that IV thiamine be diluted in saline without added glucose. Carbohydrate metabolism uses thiamine and raises the requirement, which can worsen a deficient patient. For that reason every dextrose-containing diluent, whether 5%, 10% or mixed with half-normal saline, is a poor choice. Sterile water given IV is markedly hypotonic and can cause hemolysis. Normal saline carries the dose without adding glucose.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "beriberi"
      }
    ],
    sources: [
      {
        id: "beriberi",
        citation: "Pereira AG, Cunha LNP, Paiva SAR, et al. An overview of beriberi. Med Princ Pract. 2026.",
        url: "https://doi.org/10.1159/000547719"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-28",
    topic: "shock",
    title: "Sudden gasp in the trauma bay",
    stem: "A 52-year-old man is in the resuscitation room 40 minutes after a motorcycle crash. He has a splinted open fracture of the left femur. CT of his head, spine, chest, abdomen and pelvis shows no other injury. After 2 units of uncrossmatched red cells by pressure bag through a large-bore right antecubital catheter, his blood pressure improved. During the third unit a nurse sees that the pressurized bag has emptied and the tubing is full of air. Moments later he gasps, grabs at his chest and becomes agitated. He takes no medications. His neck veins are now distended. A loud churning murmur is heard over the precordium. Breath sounds are equal and the trachea is midline. He has no hives or wheeze. The femur dressing is dry.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "132/minute",
      resp: "34/minute",
      bp: "74/40 mmHg",
      o2sat: "85% on 4 L/minute by nasal prongs",
      weight: "84 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his sudden deterioration?",
        options: [
          "Anaphylactic transfusion reaction",
          "Fat embolism syndrome",
          "Hemorrhage from the femur fracture",
          "Tension pneumothorax",
          "Venous air embolism"
        ],
        correct: 4,
        explanation: "He collapsed seconds after an emptied pressure bag pushed air down the tubing into his vein. A large volume of air lodges in the right ventricle and its outflow tract and blocks forward flow, which fits his sudden hypoxemia, hypotension, distended neck veins and churning murmur. Bleeding from the femur would flatten his neck veins, and the dressing is dry. A tension pneumothorax gives unequal breath sounds or a shifted trachea, and he has neither. Fat embolism syndrome usually appears 12 to 72 hours after a long-bone fracture, not seconds after an event. Anaphylaxis to the blood would be expected to bring hives or wheeze rather than a churning murmur.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "gordy"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following bedside findings would best support this diagnosis?",
        options: [
          "Absent lung sliding on the right",
          "Bright echogenic foci in the right heart",
          "Diffuse bilateral B lines",
          "Dilated right ventricle",
          "Flat IVC collapsing with breathing",
          "Large pericardial effusion",
          "ST elevation in the inferior leads"
        ],
        select: 2,
        correct: [
          1,
          3
        ],
        explanation: "Air in the right heart appears on ultrasound as bright echogenic foci, and Doppler ultrasonography is a sensitive way to detect intracardiac air. The air obstructs right ventricular outflow, much like a large pulmonary embolus, so the right ventricle dilates. Absent lung sliding points to a pneumothorax. Diffuse B lines suggest pulmonary edema, not right heart obstruction. A flat, collapsing IVC suggests hypovolemia, which his distended neck veins contradict. A pericardial effusion would suggest tamponade. Inferior ST elevation suggests infarction, which does not explain a collapse seconds after air entered his vein.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "gordy"
      },
      {
        id: "q3",
        kind: "single",
        update: "The infusion is stopped and the tubing is clamped. He is given 100% oxygen by non-rebreather mask. Echocardiography shows bright echoes in a dilated right ventricle and no pericardial effusion.",
        prompt: "Which of the following positions is most appropriate for him now?",
        options: [
          "Left lateral decubitus, head down",
          "Right lateral decubitus, head down",
          "Sitting upright at 90 degrees",
          "Supine with legs raised",
          "Supine with the head raised"
        ],
        correct: 0,
        explanation: "Placing him in the left lateral decubitus position with the head down, known as Durant's manoeuvre, lets the trapped air rise toward the apex of the right ventricle. That moves the air lock away from the pulmonary outflow tract and relieves the obstruction. His spine has been cleared on CT, so he can be turned. The right lateral position does not hold the air away from the outflow tract in this way. Sitting upright or raising the head does not trap the air in the ventricular apex and drops his venous return further. Supine with the legs raised helps venous return but leaves the air in the outflow tract.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "gordy"
      },
      {
        id: "q4",
        kind: "single",
        update: "In the left lateral head-down position his BP is 78/44 mmHg. A right subclavian central venous catheter placed on arrival has its tip at the junction of the superior vena cava and right atrium.",
        prompt: "Which of the following is the most appropriate next step to relieve his obstruction?",
        options: [
          "Aspirate air through the central catheter",
          "Bilateral needle decompression",
          "Pericardiocentesis under ultrasound",
          "Rapid transfusion by pressure bag",
          "Return him to the supine position"
        ],
        correct: 0,
        explanation: "The reviews of vascular air embolism list three first steps: stop further air entry, aspirate air from the right heart through a central catheter when one is in place, and use the left lateral head-down position. His catheter tip lies at the right atrium, so aspirating through it can withdraw trapped air. More blood by pressure bag treats hypovolemia, which his distended neck veins argue against, and it risks more air. Needle decompression treats tension pneumothorax, and his breath sounds are equal. Pericardiocentesis treats tamponade, and echocardiography showed no effusion. Returning him to the supine position lets the air move back into the outflow tract.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "mirski"
      }
    ],
    sources: [
      {
        id: "gordy",
        citation: "Gordy S, Rowell S. Vascular air embolism. Int J Crit Illn Inj Sci. 2013.",
        url: "https://doi.org/10.4103/2229-5151.109428"
      },
      {
        id: "mirski",
        citation: "Mirski MA, Lele AV, Fitzsimmons L, Toung TJ. Diagnosis and treatment of vascular air embolism. Anesthesiology. 2007.",
        url: "https://doi.org/10.1097/00000542-200701000-00026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-29",
    topic: "shock",
    title: "Light-headed three days after a fall",
    stem: "A 79-year-old woman is brought to the emergency department by ambulance because she became light-headed and short of breath while getting out of bed. Three days ago she fell against a kitchen counter and was discharged from this department with fractures of the left 7th to 9th ribs. Her chest X-ray then showed no pneumothorax or effusion. She takes apixaban 5 mg twice daily for atrial fibrillation, and her last dose was this morning. She is pale and anxious, and her pulse is irregular. Breath sounds are reduced at the left base, which is dull to percussion. Her neck veins are flat.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "118/minute",
      resp: "28/minute",
      bp: "84/52 mmHg",
      o2sat: "91% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following focused cardiac and IVC ultrasound findings would most support a hypovolemic cause for her shock?",
        options: [
          "Dilated right ventricle with a plethoric IVC",
          "Large effusion with right atrial collapse",
          "Normal LV size with a plethoric IVC",
          "Poor LV function with a plethoric IVC",
          "Small hyperdynamic LV with a flat IVC"
        ],
        correct: 4,
        explanation: "In the RUSH approach to shock, hypovolemia shows a small, vigorously contracting heart with a flat IVC. That fits her flat neck veins and a possible bleed after rib fractures while on apixaban. A dilated right ventricle with a full IVC points to obstruction such as a large pulmonary embolism. A large effusion with chamber collapse is tamponade. Poor left ventricular function with a full IVC is cardiogenic shock. A plethoric IVC with a normal left ventricle does not suggest low volume and points away from hemorrhage.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "rush"
      },
      {
        id: "q2",
        kind: "single",
        update: "The heart is small and hyperdynamic and the IVC is flat. A curvilinear probe over the left lower chest shows a large anechoic collection with swirling echoes above the diaphragm. Lung sliding is present at the apex.",
        prompt: "Which of the following is the most likely cause of these thoracic ultrasound findings?",
        options: [
          "Consolidation of the left lower lobe",
          "Diaphragmatic rupture with bowel",
          "Large left hemothorax",
          "Splenic laceration with hemoperitoneum",
          "Subpulmonic pneumothorax"
        ],
        correct: 2,
        explanation: "A large anechoic collection with swirling echoes above the diaphragm is pleural fluid, and in a hypovolemic patient on an anticoagulant with recent rib fractures it is most likely blood. Chest ultrasound is accurate for detecting hemothorax in trauma. Consolidation appears as tissue-like lung with air bronchograms, not a free anechoic collection. Bowel in the chest would show gut wall and peristalsis. A splenic bleed collects below the diaphragm in the left upper quadrant. A pneumothorax shows absent sliding with A lines, not fluid, and her lung sliding is present.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "staub"
      },
      {
        id: "q3",
        kind: "single",
        update: "A chest tube drains 1 400 mL of blood. Her BP is 82/50 mmHg. She has had 1 L of crystalloid. Crossmatched blood will take 40 minutes.",
        prompt: "Which of the following is the most appropriate fluid to give her now?",
        options: [
          "albumin 5% 500 mL IV",
          "frozen plasma 2 units IV",
          "O RhD negative red cells IV",
          "O RhD positive red cells IV",
          "Ringer's lactate 2 L IV"
        ],
        correct: 3,
        explanation: "She is in hemorrhagic shock after 1 L of crystalloid and needs red cells now. The blood services guide advises limiting crystalloid to about 1 L before switching to blood, so another 2 L of Ringer's lactate is wrong. It reserves group O RhD negative red cells for females of childbearing age, children and patients known to be alloimmunized. At 79 she can safely receive uncrossmatched O RhD positive red cells, which spares the scarce negative supply. Albumin carries no oxygen. Plasma alone does not restore oxygen delivery, and it does not reverse apixaban.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "cbs"
      }
    ],
    sources: [
      {
        id: "rush",
        citation: "Elbaih AH, Housseini AM, Khalifa MEM. Accuracy and outcome of rapid ultrasound in shock and hypotension (RUSH) in Egyptian polytrauma patients. Chin J Traumatol. 2018.",
        url: "https://doi.org/10.1016/j.cjtee.2017.06.009"
      },
      {
        id: "staub",
        citation: "Staub LJ, Biscaro RRM, Kaszubowski E, Maurici R. Chest ultrasonography for the emergency diagnosis of traumatic pneumothorax and haemothorax: a systematic review and meta-analysis. Injury. 2018.",
        url: "https://doi.org/10.1016/j.injury.2018.01.033"
      },
      {
        id: "cbs",
        citation: "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical guide to transfusion, chapter 11. Canadian Blood Services. 2021.",
        url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-30",
    topic: "shock",
    title: "Dizzy weeks after bowel surgery",
    stem: "An 81-year-old woman presents to the emergency department with 3 days of dizziness and weakness. Three weeks ago she had a colectomy with an end ileostomy for colon cancer. Her daughter has measured the stoma output at about 2.4 L of watery fluid a day. To keep up, she has been drinking large amounts of water and tea. She takes ramipril and no other medications. She is drowsy but oriented. Her mucous membranes are dry and she has no leg edema. She weighed 63 kg at discharge. Sodium is 129 mmol/L, potassium 3.1 mmol/L and creatinine 178 umol/L (baseline 70 umol/L).",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "112/minute",
      resp: "20/minute",
      bp: "94/58 mmHg",
      o2sat: "97% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following daily maintenance fluid volumes is most appropriate for her, before adding deficits or losses?",
        options: [
          "900 to 1 200 mL",
          "1 200 to 1 500 mL",
          "1 500 to 1 800 mL",
          "2 400 to 3 000 mL",
          "3 600 to 4 200 mL"
        ],
        correct: 1,
        explanation: "The NICE guideline on IV fluids gives routine maintenance as 25 to 30 mL/kg/day, and suggests less, such as 20 to 25 mL/kg/day, for patients who are older or frail. At 81 years and 60 kg, that is 1 200 to 1 500 mL a day. The range of 1 500 to 1 800 mL uses the standard adult rate without adjusting for her age. The range of 900 to 1 200 mL is only 15 to 20 mL/kg/day. The larger ranges, 40 to 50 and 60 to 70 mL/kg/day, would only be right if her deficit and stoma losses were folded into maintenance.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "nice"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best way to account for her stoma output in her fluid plan?",
        options: [
          "Add the measured output to maintenance",
          "Count the output within maintenance",
          "Encourage more water to match it",
          "Ignore output below 3 L a day",
          "Replace half of the measured output"
        ],
        correct: 0,
        explanation: "The NICE guideline advises adding to maintenance to account for ongoing losses, so her measured output of about 2.4 L a day is replaced on top of maintenance. Counting it within maintenance or replacing only half leaves her falling further behind. An output above 1.5 to 2 L a day already defines a high-output stoma, so there is no reason to ignore it below 3 L. Drinking more water or tea is part of the problem, because the best-evidence summary for high-output ileostomy advises limiting hypotonic drinks to 0.5 to 1 L a day and using glucose-electrolyte solutions instead.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "stoma"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following tests is recommended to monitor sodium and water depletion in a patient with an ileostomy?",
        options: [
          "Hemoglobin concentration",
          "Random urine sodium",
          "Serum albumin",
          "Serum sodium",
          "Urea to creatinine ratio"
        ],
        correct: 1,
        explanation: "The best-evidence summary for high-output ileostomy recommends monitoring random urine sodium with serum electrolytes, urea and creatinine. Stoma fluid is rich in sodium, and a low urine sodium shows the kidneys are conserving it. The same summary notes that the urea to creatinine ratio rises only once dehydration is severe. Serum sodium mainly reflects water balance, and hers is low partly because she drinks hypotonic fluids. Hemoglobin and albumin are affected by bleeding, nutrition and inflammation and are poor measures of volume.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "stoma"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following IV fluids is most appropriate to begin replacing her deficit and stoma losses?",
        options: [
          "albumin 5% 500 mL IV",
          "dextrose 5% in water 1 L IV",
          "sodium chloride 0.18% in 4% glucose IV",
          "sodium chloride 0.45% 1 L IV",
          "sodium chloride 0.9% with KCl 1 L IV"
        ],
        correct: 4,
        explanation: "Ileostomy fluid is rich in sodium, and she is hyponatremic at 129 mmol/L and hypokalemic at 3.1 mmol/L. Isotonic 0.9% saline with added potassium replaces both. Dextrose 5% in water and 0.45% saline are hypotonic and would lower her sodium further. The 0.18% saline in 4% glucose solution is a maintenance fluid in the NICE guideline, not a replacement for sodium-rich losses. Albumin does not replace sodium or potassium and has no role in simple volume depletion.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "nice"
      }
    ],
    sources: [
      {
        id: "nice",
        citation: "National Institute for Health and Care Excellence. Intravenous fluid therapy in adults in hospital (CG174). 2013.",
        url: "https://www.nice.org.uk/guidance/cg174"
      },
      {
        id: "stoma",
        citation: "Wang Y, Peng H, Cui C, Zou Q, Yang M. Summary of best evidence for the dietary management in patients with high-output ileostomy. J Multidiscip Healthc. 2025.",
        url: "https://europepmc.org/article/PMC/PMC11842286"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-31",
    topic: "shock",
    title: "Pregnant woman with flank pain and fever",
    stem: "A 27-year-old woman at 30 weeks gestation presents to the emergency department with 2 days of right flank pain, fever and vomiting. She has had no vaginal bleeding or fluid loss. She takes prenatal vitamins. She is drowsy but oriented. Her right costovertebral angle is tender. The uterus is soft and non tender. Fetal heart rate by Doppler is 176/minute. Lactate 3.8 mmol/L, WBC 19.6 x 10^9/L, creatinine 96 umol/L. Urinalysis shows many white cells and nitrites.",
    vitals: {
      temperature: "39.3°C oral",
      pulse: "124/minute",
      resp: "28/minute",
      bp: "88/50 mmHg",
      o2sat: "95% on room air",
      weight: "78 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following results is most concerning for organ dysfunction, given that she is pregnant?",
        options: [
          "Creatinine of 96 umol/L",
          "Nitrites on urinalysis",
          "Temperature of 39.3°C",
          "Tenderness at the right flank",
          "WBC of 19.6 x 10^9/L"
        ],
        correct: 0,
        explanation: "Glomerular filtration rises by about half in pregnancy, so creatinine normally falls. A value of 96 umol/L would be normal outside pregnancy but shows kidney injury at 30 weeks. A mild rise in white cell count is normal in pregnancy, so her count is less specific for organ dysfunction. Fever, nitrites and flank tenderness show infection, not organ dysfunction.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "smfm-sepsis"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following positions is best for her while she is hypotensive?",
        options: [
          "Left lateral tilt",
          "Prone position",
          "Right lateral decubitus",
          "Semi-seated at 45 degrees",
          "Supine with legs raised"
        ],
        correct: 0,
        explanation: "At 30 weeks the uterus compresses the inferior vena cava when she lies supine, which lowers venous return and cardiac output. Tilting her to the left, or displacing the uterus to the left, relieves this. Supine positions, even with the legs raised, leave the vena cava compressed. The right side places the uterus over the vena cava. Prone and semi-seated positions do not reliably relieve compression and hinder monitoring.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "smfm-sepsis"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following empiric antibiotics is most appropriate for her infection in pregnancy?",
        options: [
          "ceftriaxone IV",
          "ciprofloxacin IV",
          "doxycycline IV",
          "fosfomycin PO",
          "nitrofurantoin PO"
        ],
        correct: 0,
        explanation: "Ceftriaxone IV treats the gram negative organisms that cause pyelonephritis and is a first-line choice in pregnancy. Fluoroquinolones such as ciprofloxacin and tetracyclines such as doxycycline are generally avoided in pregnancy when other options exist. Nitrofurantoin and fosfomycin do not reach adequate levels in kidney tissue, so they are used for cystitis, not for pyelonephritis with septic shock.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "acog-uti"
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following tests should be sent before her first antibiotic dose, if they cause no delay?",
        options: [
          "Blood cultures",
          "D-dimer level",
          "Kleihauer-Betke test",
          "Lumbar puncture",
          "Serum lipase level",
          "Urine culture"
        ],
        select: 2,
        correct: [
          0,
          5
        ],
        explanation: "Blood and urine cultures drawn before antibiotics identify the organism in pyelonephritis with septic shock and guide later narrowing of therapy, as long as they do not delay the first dose. A D-dimer is expected to be raised in pregnancy and does not help here. The Kleihauer-Betke test measures fetal cells in maternal blood after trauma or bleeding. Nothing suggests meningitis or pancreatitis, so a lumbar puncture and lipase add nothing.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "smfm-sepsis"
      },
      {
        id: "q5",
        kind: "single",
        update: "After 2 L of crystalloid her BP is 84/46 mmHg, a mean arterial pressure of 59 mmHg. Crackles are now heard at both bases.",
        prompt: "Which of the following vasopressors is the most appropriate first choice for her?",
        options: [
          "dopamine infusion",
          "ephedrine boluses",
          "norepinephrine infusion",
          "phenylephrine infusion",
          "vasopressin infusion"
        ],
        correct: 2,
        explanation: "Norepinephrine is the first-line vasopressor for septic shock in pregnancy, as it is outside pregnancy. Her new crackles show that more fluid risks pulmonary edema, to which pregnant patients are prone. Ephedrine and phenylephrine treat hypotension from spinal anesthesia, not septic shock. Dopamine causes more arrhythmias. Vasopressin is a second agent, added to norepinephrine.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "smfm-sepsis"
      }
    ],
    sources: [
      {
        id: "smfm-sepsis",
        citation: "Society for Maternal-Fetal Medicine, Plante LA, Pacheco LD, Louis JM. SMFM Consult Series #47. Sepsis during pregnancy and the puerperium. Am J Obstet Gynecol. 2019.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30684460/"
      },
      {
        id: "acog-uti",
        citation: "American College of Obstetricians and Gynecologists. Urinary tract infections in pregnant individuals. Clinical Consensus No. 4. Obstet Gynecol. 2023.",
        url: "https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals"
      }
    ],
    ...META,
  },
  {
    id: "shock-32",
    topic: "shock",
    title: "Weak older woman with flank bruising",
    stem: "An 81-year-old woman is brought to the emergency department by her daughter because she is weak and confused and fell today. She has had right groin and back pain for a day. She has atrial fibrillation treated with warfarin, and hypertension treated with metoprolol 50 mg twice daily. Her usual systolic pressure is about 150 mmHg. She is pale. There is a large bruise over the right flank and she holds her right hip flexed. INR 4.8. Hemoglobin 78 g/L (124 g/L two months ago). Lactate 3.6 mmol/L. CT shows a large right retroperitoneal hematoma with active contrast extravasation.",
    vitals: {
      temperature: "36.0°C oral",
      pulse: "84/minute irregular",
      resp: "22/minute",
      bp: "104/60 mmHg",
      o2sat: "95% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings is the best measure of tissue hypoperfusion in her?",
        options: [
          "Hemoglobin of 78 g/L",
          "INR of 4.8",
          "Lactate of 3.6 mmol/L",
          "Pulse of 84/minute",
          "Temperature of 36.0°C"
        ],
        correct: 2,
        explanation: "A lactate of 3.6 mmol/L shows that her tissues are not getting enough oxygen, and the European bleeding guideline recommends lactate to estimate and monitor the extent of bleeding and hypoperfusion. Her confusion and a systolic pressure of 104 mmHg, well below her usual 150 mmHg, point the same way. The fall in hemoglobin from 124 to 78 g/L measures the blood she has lost, not whether her tissues are still perfused. The INR of 4.8 explains why she is bleeding. Her pulse of 84/minute is held down by metoprolol and age, so it understates her shock. A temperature of 36.0°C does not measure perfusion.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "euro-bleed"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to reverse her anticoagulation?",
        options: [
          "andexanet alfa IV bolus",
          "Frozen plasma and vitamin K IV",
          "idarucizumab 5 g IV",
          "PCC and vitamin K 10 mg IV",
          "vitamin K 10 mg IV alone"
        ],
        correct: 3,
        explanation: "Life threatening bleeding on warfarin needs prothrombin complex concentrate (PCC), which corrects the INR within minutes. For her INR of 4.8 the INR-based dose is 2 000 units, or 35 units/kg (about 2 000 units at 58 kg), below the single-dose cap of 3 000 units. IV vitamin K is given with it to sustain the correction once the concentrate wears off. Plasma is not appropriate for warfarin reversal because it needs thawing and a large volume and corrects the INR more slowly and less completely. Vitamin K alone takes several hours to lower the INR, which is too slow for active hemorrhage. Idarucizumab reverses dabigatran and andexanet reverses factor Xa inhibitors, not warfarin.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "nac-pcc"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to transfusion for her right now?",
        options: [
          "albumin 25% 100 mL IV",
          "Crystalloid 2 L then reassess",
          "Hold red cells until below 70 g/L",
          "Platelet transfusion, one adult dose",
          "Red cells for active bleeding"
        ],
        correct: 4,
        explanation: "She is actively bleeding with signs of hypoperfusion, so she needs red cells now rather than waiting for a number. A restrictive threshold of 70 g/L applies to stable patients, not to one with ongoing hemorrhage and a lactate of 3.6 mmol/L. Large volumes of crystalloid dilute clotting factors and worsen bleeding. Albumin carries no oxygen. The case gives no low platelet count or antiplatelet drug to justify platelets.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "euro-bleed"
      }
    ],
    sources: [
      {
        id: "nac-pcc",
        citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022.",
        url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada"
      },
      {
        id: "euro-bleed",
        citation: "Rossaint R, et al. The European guideline on management of major bleeding and coagulopathy following trauma. Sixth edition. Crit Care. 2023.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/"
      }
    ],
    ...META,
  },
  {
    id: "shock-33",
    topic: "shock",
    title: "Pale and sleepy after a cold",
    stem: "A 2-year-old boy with sickle cell anemia (HbSS) is brought to the emergency department because he became pale and sleepy over the afternoon. He has had a runny nose for 2 days. He takes penicillin prophylaxis and folic acid. His usual hemoglobin is 84 g/L. He is pale and lethargic but rousable. His hands and feet are cool, his pulses are weak and his capillary refill is 4 seconds. His spleen is palpable 6 cm below the left costal margin. At his last clinic visit it was 2 cm below. Hemoglobin is 42 g/L with a raised reticulocyte count.",
    vitals: {
      temperature: "37.8°C tympanic",
      pulse: "176/minute",
      resp: "36/minute",
      bp: "92/56 mmHg",
      o2sat: "97% on room air",
      weight: "12 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best shows that he is in shock despite his normal blood pressure?",
        options: [
          "Cool limbs, refill of 4 seconds",
          "Hemoglobin of 42 g/L",
          "Respiratory rate of 36/minute",
          "Spleen palpable 6 cm below the margin",
          "Temperature of 37.8°C"
        ],
        correct: 0,
        explanation: "The 2026 pediatric sepsis guideline lists heart rate, capillary refill, extremity temperature, pulse quality, level of consciousness and urine output alongside blood pressure as markers of cardiac output. He has cool limbs, a capillary refill of 4 seconds, weak pulses, a pulse of 176/minute and lethargy, so he is in shock even though his systolic pressure is normal for his age. His hemoglobin and spleen size explain the cause, which is acute splenic sequestration, but they do not measure perfusion. A respiratory rate of 36/minute is only mildly raised for a 2-year-old. A temperature of 37.8°C is a low-grade rise and says nothing about perfusion.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "sscp"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following systolic pressures marks the threshold for hypotension at his age?",
        options: [
          "66 mmHg",
          "74 mmHg",
          "80 mmHg",
          "86 mmHg",
          "90 mmHg"
        ],
        correct: 1,
        explanation: "From 1 to 10 years of age, a systolic pressure below 70 + (2 x age in years) is low. At 2 years that is 70 + (2 x 2) = 74 mmHg. His pressure of 92/56 mmHg is above it, so his perfusion signs, not his blood pressure, show his shock, and waiting for hypotension would delay treatment. The value of 66 mmHg subtracts the age term instead of adding it. The values of 80 and 86 mmHg are the thresholds at 5 and 8 years, and 90 mmHg applies from 11 years.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "lowbp"
      },
      {
        id: "q3",
        kind: "single",
        update: "Crossmatched red cells are ready. He has one IV in place.",
        prompt: "Which of the following transfusion approaches is most appropriate for him?",
        options: [
          "albumin 5% 20 mL/kg IV",
          "Crystalloid 60 mL/kg before any blood",
          "Exchange transfusion only",
          "Red cells in small aliquots, then reassess",
          "Red cells to a hemoglobin of 120 g/L"
        ],
        correct: 3,
        explanation: "His hemoglobin has fallen by 42 g/L from baseline while his spleen has grown by 4 cm. A fall of at least 20 g/L with an acutely enlarging spleen and a normal or raised reticulocyte count defines acute splenic sequestration. He needs red cells to restore oxygen delivery. In the cohort study, children with sequestration were treated with small aliquots of red cells. Giving blood in small amounts with reassessment matters because the spleen can release trapped cells as it shrinks and push the hemoglobin higher. Transfusing to 120 g/L risks overshooting and overloading his circulation. Crystalloid and albumin do not carry oxygen. Exchange transfusion is not needed to treat sequestration.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "assc"
      }
    ],
    sources: [
      {
        id: "sscp",
        citation: "Weiss SL, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Intensive Care Med. 2026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/41870559/"
      },
      {
        id: "lowbp",
        citation: "Sampson HA, Munoz-Furlong A, Campbell RL, et al. Second symposium on the definition and management of anaphylaxis: summary report. J Allergy Clin Immunol. 2006.",
        url: "https://doi.org/10.1016/j.jaci.2005.12.1303"
      },
      {
        id: "assc",
        citation: "Zayed AM, Almohaimeed S, Alotaibi T, et al. Splenic sequestration crisis in children with sickle cell disease in the Eastern region of Saudi Arabia. BMC Pediatr. 2025.",
        url: "https://doi.org/10.1186/s12887-025-06020-w"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-34",
    topic: "shock",
    title: "Teen who nearly fainted on the stairs",
    stem: "A 15-year-old boy is brought to the emergency department with 2 days of worsening shortness of breath and vomiting. He had a cold with fever a week ago. Today he felt faint climbing stairs. He takes no medications. He is pale and sweaty with cool hands. His neck veins are distended. There are crackles at both lung bases and a gallop rhythm. The liver edge is 3 cm below the costal margin. Troponin I is markedly elevated. The ECG shows sinus tachycardia with low voltage and diffuse T wave inversion.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "138/minute",
      resp: "30/minute",
      bp: "80/54 mmHg",
      o2sat: "92% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shock?",
        options: [
          "Acute viral myocarditis",
          "Dehydration from vomiting",
          "Kawasaki disease",
          "Pulmonary embolism",
          "Septic shock from pneumonia"
        ],
        correct: 0,
        explanation: "A recent viral illness followed by heart failure, a gallop, distended neck veins, hepatomegaly, a high troponin and low voltage ECG changes point to acute myocarditis with cardiogenic shock. Vomiting is a common presenting symptom in children with myocarditis and is easily mistaken for gastroenteritis. Dehydration would give flat neck veins and clear lungs. Kawasaki disease is rare at 15 years. Nothing suggests pneumonia or pulmonary embolism.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "aha-myocarditis"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following bedside ultrasound findings would most support this diagnosis?",
        options: [
          "Absent lung sliding bilaterally",
          "Collapsing inferior vena cava",
          "Free fluid in the hepatorenal space",
          "Hyperdynamic small left ventricle",
          "Poor global left ventricular function"
        ],
        correct: 4,
        explanation: "In the RUSH approach, a poorly contracting, often dilated left ventricle with a plethoric inferior vena cava points to cardiogenic shock. A hyperdynamic small ventricle and a collapsing vena cava suggest hypovolemia or sepsis instead. Absent lung sliding suggests pneumothorax. Free fluid in the hepatorenal space suggests bleeding into the abdomen.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "rush"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following vasoactive agents is most appropriate to start first for this patient?",
        options: [
          "dobutamine infusion",
          "epinephrine infusion",
          "milrinone infusion",
          "phenylephrine infusion",
          "vasopressin infusion"
        ],
        correct: 1,
        explanation: "He has cardiogenic shock with a systolic pressure of 80 mmHg, so he needs an agent that supports contractility and blood pressure together, and low-dose epinephrine does both. Milrinone is the usual first-line inotrope in pediatric myocarditis, but it causes vasodilation, so inotropes with vasopressor action such as epinephrine are reserved for hypotension and cardiogenic shock, as here. Dobutamine also vasodilates and can drop an already low pressure. Phenylephrine and vasopressin constrict vessels without inotropy and raise the afterload on a failing ventricle.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "aha-myocarditis"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most important next step in his care?",
        options: [
          "Cardiac MRI before admission",
          "Discharge with cardiology follow-up",
          "Early transfer to a centre with ECMO",
          "Furosemide and ward admission",
          "Oral beta-blocker today"
        ],
        correct: 2,
        explanation: "Children with fulminant myocarditis can deteriorate quickly, and early transfer to a centre with pediatric cardiac intensive care and mechanical circulatory support such as ECMO is recommended. Cardiac MRI helps diagnosis later but must not delay stabilization. A ward bed is not safe for a patient in shock. A beta-blocker would worsen cardiogenic shock. Discharge is unsafe for a patient in shock.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "aha-myocarditis"
      }
    ],
    sources: [
      {
        id: "aha-myocarditis",
        citation: "Law YM, et al. Diagnosis and management of myocarditis in children. A scientific statement from the American Heart Association. Circulation. 2021.",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001001"
      },
      {
        id: "rush",
        citation: "Perera P, et al. The RUSH exam. Rapid ultrasound in shock in the evaluation of the critically ill. Emerg Med Clin North Am. 2010."
      }
    ],
    ...META,
  },
  {
    id: "shock-35",
    topic: "shock",
    title: "Collapse minutes after a quick delivery",
    stem: "You are working in a community hospital emergency department with no obstetric unit. A 34-year-old woman, G2P1 at 39 weeks, arrives in active labour and delivers a healthy baby 10 minutes later. The placenta delivers complete and the uterus is firm. Five minutes after the placenta, she becomes agitated, says she cannot breathe and then becomes drowsy. Her pregnancy was uncomplicated, she has no allergies and she has received no medications. She is cyanotic and mottled. Blood begins to ooze from her IV site. Vaginal bleeding is modest.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "138/minute",
      resp: "34/minute",
      bp: "64/30 mmHg",
      o2sat: "78% on 15 L/minute by non-rebreather mask"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside echocardiography findings is most likely in her?",
        options: [
          "Dilated, hypokinetic RV with a small LV",
          "Hyperdynamic LV with a collapsed IVC",
          "Large pericardial effusion with RA collapse",
          "Normal heart size and function",
          "Poor LV function with regional wall loss"
        ],
        correct: 0,
        explanation: "Sudden hypoxia, collapse and oozing within 30 minutes of delivery point to amniotic fluid embolism, and the SMFM checklist notes that pulmonary hypertension and right ventricular dysfunction commonly characterize it. The failing right ventricle dilates and underfills the left ventricle. A hyperdynamic ventricle with a flat IVC would suggest hemorrhage, but her uterus is firm and bleeding is modest so far. A pericardial effusion with chamber collapse is tamponade, which has no link to delivery. A normal heart would not explain her collapse. Regional wall motion loss suggests myocardial infarction, which is rare at her age and does not explain the coagulopathy.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "smfm26"
      },
      {
        id: "q2",
        kind: "single",
        update: "Echocardiography shows a dilated, poorly contracting right ventricle and a small left ventricle. Fibrinogen is 0.9 g/L, platelets are 62 x 10^9/L and INR is 2.0.",
        prompt: "Which of the following is the most likely cause of her shock?",
        options: [
          "Amniotic fluid embolism",
          "Anaphylactic shock",
          "Eclampsia-related collapse",
          "Hemorrhage from uterine atony",
          "Pulmonary thromboembolism"
        ],
        correct: 0,
        explanation: "She collapsed with hypoxia and hypotension within 30 minutes of delivery, has acute right heart failure and has disseminated intravascular coagulation, with a fibrinogen of 0.9 g/L, platelets of 62 x 10^9/L and an INR of 2.0, and no fever. That triad fits amniotic fluid embolism, which the SMFM guideline says should be considered in sudden cardiorespiratory collapse in a recently delivered woman. Her uterus is firm with modest bleeding, so atony does not explain the shock. Anaphylaxis needs an exposure, and she received nothing. A thrombotic embolus can dilate the right ventricle but does not cause this rapid coagulopathy. Eclampsia causes seizures with hypertension, not hypotension.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "smfm16"
      },
      {
        id: "q3",
        kind: "single",
        update: "She is intubated. Her BP is 72/40 mmHg on norepinephrine and dobutamine. She is now bleeding heavily from the vagina and her hemoglobin is 88 g/L.",
        prompt: "Which of the following fluids is most appropriate for her ongoing volume resuscitation?",
        options: [
          "albumin 5% 1 L IV",
          "frozen plasma 4 units IV",
          "hydroxyethyl starch 1 L IV",
          "Red cells and cryoprecipitate IV",
          "Ringer's lactate 2 L IV"
        ],
        correct: 3,
        explanation: "Her failing right ventricle tolerates volume poorly, and she has active bleeding with a fibrinogen of 0.9 g/L. The SMFM guidance says to avoid excessive fluid, to use blood products rather than crystalloid or colloid for volume, and to favour cryoprecipitate over plasma so coagulopathy is treated with less volume. Red cells with cryoprecipitate meet both needs. Two litres of Ringer's lactate, albumin or starch add volume without oxygen carriage or clotting factors. Frozen plasma corrects clotting factors but delivers more volume than cryoprecipitate for the same fibrinogen.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "smfm26"
      }
    ],
    sources: [
      {
        id: "smfm16",
        citation: "Society for Maternal-Fetal Medicine. Amniotic fluid embolism: diagnosis and management. Am J Obstet Gynecol. 2016.",
        url: "https://doi.org/10.1016/j.ajog.2016.03.012"
      },
      {
        id: "smfm26",
        citation: "Society for Maternal-Fetal Medicine, Martinez-King LC, et al. Special statement: checklist for initial management of amniotic fluid embolism, updated 2026. Pregnancy. 2026.",
        url: "https://doi.org/10.1002/pmf2.70364"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-36",
    topic: "shock",
    title: "Fever days after a cancer treatment",
    stem: "A 58-year-old man with relapsed large B-cell lymphoma presents to the emergency department with fever since last night and light-headedness today. Five days ago he received an infusion of CAR T cells at a regional cancer centre and was discharged the next day with a wallet card and a care plan. He takes acyclovir and levofloxacin prophylaxis. He is flushed and alert, and he writes his name and follows commands normally. His chest is clear and there is no rash. His central line site is clean. Neutrophils are 0.6 x 10^9/L, C-reactive protein is 186 mg/L and ferritin is 4 200 mcg/L.",
    vitals: {
      temperature: "39.6°C oral",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "82/44 mmHg",
      o2sat: "95% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following conditions, alongside infection, most likely explains his fever and hypotension?",
        options: [
          "Adrenal insufficiency",
          "Anaphylaxis to the cell infusion",
          "Cytokine release syndrome",
          "Heart failure from cardiomyopathy",
          "Tumour lysis syndrome"
        ],
        correct: 2,
        explanation: "Fever and hypotension within days of CAR T-cell therapy, with a very high CRP and ferritin, fit cytokine release syndrome. The review notes that it must be separated from infection, which remains likely in a neutropenic patient, so both are treated at once. Anaphylaxis occurs during or soon after an infusion, not 5 days later, and he has no rash or wheeze. Nothing in his history suggests adrenal insufficiency. Heart failure would bring congestion rather than a warm, flushed, febrile picture with a clear chest. Tumour lysis causes electrolyte and kidney problems rather than fever with vasodilatory shock.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "crs"
      },
      {
        id: "q2",
        kind: "single",
        update: "Blood cultures are drawn and piperacillin-tazobactam is given. After 2 L of Ringer's lactate his BP is 86/48 mmHg. The cancer centre's on-call physician agrees this is cytokine release syndrome.",
        prompt: "Which of the following treatments is most appropriate now for his cytokine release syndrome?",
        options: [
          "hydrocortisone IV",
          "immune globulin IV",
          "methylprednisolone pulse IV",
          "tocilizumab IV",
          "vancomycin IV"
        ],
        correct: 3,
        explanation: "His cytokine release syndrome now includes hypotension, which is grade 2 or higher. The review states that grade 2 and above is treated with the interleukin-6 receptor blocker tocilizumab, and that corticosteroids, particularly dexamethasone, are second-line agents for refractory or grade 4 disease. Pulse methylprednisolone is therefore not the first step. Hydrocortisone is the low-dose steroid used for septic shock and is not the treatment for the cytokine storm. Immune globulin is not among the treatments the review lists for the syndrome. Vancomycin adds gram-positive cover but does not treat the syndrome itself.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "crs"
      },
      {
        id: "q3",
        kind: "single",
        update: "Tocilizumab has been given. His mean arterial pressure is now 58 mmHg. His lungs remain clear.",
        prompt: "Which of the following vasoactive agents is most appropriate to start first for him?",
        options: [
          "dopamine infusion IV",
          "milrinone infusion IV",
          "norepinephrine infusion IV",
          "phenylephrine infusion IV",
          "vasopressin infusion IV"
        ],
        correct: 2,
        explanation: "He has distributive shock from cytokine release syndrome, and bacterial sepsis has not been excluded. The Surviving Sepsis guideline recommends norepinephrine as the first-line vasopressor over dopamine and suggests it over vasopressin. Dopamine brings more arrhythmias. Vasopressin is added once norepinephrine is running rather than started alone. Milrinone is a vasodilating inotrope that would lower his pressure. Phenylephrine is not among the agents the guideline recommends for septic shock.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "crs",
        citation: "Arvanitis P, Tziotis A, Papadimatos S, Farmakiotis D. Pathogenesis, diagnosis, and management of cytokine release syndrome in patients with cancer: focus on infectious disease considerations. Curr Oncol. 2025.",
        url: "https://doi.org/10.3390/curroncol32040198"
      },
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-37",
    topic: "shock",
    title: "Flank pain on a new blood thinner",
    stem: "A 76-year-old woman presents to the emergency department with 6 hours of worsening right flank and groin pain and light-headedness. Five days ago she started enoxaparin 70 mg SC twice daily for a deep vein thrombosis, and her last dose was 3 hours ago. She has chronic kidney disease. She has had no injury. She is pale and sweaty and holds her right hip flexed. There is tender fullness in the right flank and lower quadrant. Hemoglobin is 72 g/L, down from 118 g/L five days ago. Creatinine clearance is 24 mL/minute. CT shows a large right retroperitoneal hematoma with active contrast extravasation.",
    vitals: {
      temperature: "36.5°C oral",
      pulse: "116/minute",
      resp: "22/minute",
      bp: "84/50 mmHg",
      o2sat: "96% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following is the most appropriate agent to reverse her anticoagulant?",
        options: [
          "andexanet alfa IV",
          "desmopressin 0.3 mcg/kg IV",
          "idarucizumab 5 g IV",
          "protamine 50 mg IV",
          "protamine 100 mg IV",
          "prothrombin complex concentrate IV",
          "vitamin K 10 mg IV"
        ],
        select: 1,
        correct: [
          3
        ],
        explanation: "Protamine is the approved reversal agent for enoxaparin. Her last dose was 3 hours ago, within 8 hours, so the dose is 1 mg of protamine per 1 mg of enoxaparin, which is 70 mg, capped at the maximum of 50 mg. It neutralizes only about half of the enoxaparin effect. The larger dose of 100 mg exceeds the maximum, and excess protamine can itself impair clotting. Andexanet alfa and idarucizumab are specific reversal agents for the direct oral anticoagulants. Prothrombin complex concentrate and vitamin K reverse warfarin. Desmopressin does not reverse heparins.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "reversal"
      },
      {
        id: "q2",
        kind: "single",
        update: "Protamine is given. She has received 1 L of Ringer's lactate and her BP is 86/52 mmHg. Crossmatched red cells are ready.",
        prompt: "Which of the following is the most appropriate fluid to give her now?",
        options: [
          "albumin 5% 500 mL IV",
          "frozen plasma 2 units IV",
          "hydroxyethyl starch 500 mL IV",
          "red cells 1 unit IV",
          "Ringer's lactate 2 L IV"
        ],
        correct: 3,
        explanation: "She is in hemorrhagic shock with a hemoglobin of 72 g/L and ongoing bleeding, and she has already received 1 L of crystalloid. The blood services guide advises limiting crystalloid to about 1 L before switching to blood, so red cells are next. Another 2 L of Ringer's lactate dilutes her clotting factors and carries no oxygen. Albumin and starch also carry no oxygen. Frozen plasma does not reverse enoxaparin and is not indicated without a clotting factor deficit.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "cbs"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 units of red cells her BP is 88/54 mmHg. Her hemoglobin is 70 g/L and her pain and flank swelling are increasing.",
        prompt: "Which of the following is the most appropriate next step to control her bleeding?",
        options: [
          "Observation with serial hemoglobin",
          "Open surgical evacuation",
          "Repeat CT in 6 hours",
          "tranexamic acid 1 g IV",
          "Transarterial embolization"
        ],
        correct: 4,
        explanation: "She has a spontaneous retroperitoneal hematoma with active extravasation on CT and continues to bleed despite reversal and transfusion. Transarterial embolization had high technical success and relatively few complications for life-threatening spontaneous retroperitoneal hematoma in a systematic review. Observation and a repeat CT leave an arterial bleed untreated. Open surgery on a retroperitoneal hematoma in an unstable, anticoagulated older woman carries far more risk than a catheter procedure. Tranexamic acid does not stop a bleeding artery that is visibly leaking contrast.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "tae"
      }
    ],
    sources: [
      {
        id: "reversal",
        citation: "Aldhaeefi M, Badreldin HA, Alsuwayyid F, et al. Practical guide for anticoagulant and antiplatelet reversal in clinical practice. Pharmacy (Basel). 2023.",
        url: "https://doi.org/10.3390/pharmacy11010034"
      },
      {
        id: "cbs",
        citation: "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical guide to transfusion, chapter 11. Canadian Blood Services. 2021.",
        url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
      },
      {
        id: "tae",
        citation: "Tiralongo F, Toscano S, Mosconi C, et al. Spontaneous retroperitoneal hematoma treated with transarterial embolization: a systematic review and metanalysis. CVIR Endovasc. 2024.",
        url: "https://doi.org/10.1186/s42155-024-00462-6"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-38",
    topic: "shock",
    title: "Faint with a swollen forearm",
    stem: "A 34-year-old man presents to the emergency department with 2 days of fever and a painful, swollen right forearm. Today he feels faint. He injects fentanyl, and 6 months ago a wound swab from his left arm grew methicillin-resistant Staphylococcus aureus (MRSA). He takes no other medications. He is drowsy but oriented. On the right forearm, at an injection site, there is a 6 cm fluctuant, tender swelling with surrounding redness. There is no crepitus and his pain matches the findings. He has no heart murmur. Lactate is 4.8 mmol/L.",
    vitals: {
      temperature: "39.2°C oral",
      pulse: "122/minute",
      resp: "24/minute",
      bp: "84/46 mmHg",
      o2sat: "97% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following empiric antibiotics is most appropriate for him?",
        options: [
          "cefazolin 2 g IV",
          "ceftriaxone 2 g IV",
          "clindamycin 900 mg IV",
          "cloxacillin 2 g IV",
          "vancomycin 25 mg/kg IV"
        ],
        correct: 4,
        explanation: "He has septic shock from a skin source and is at high risk of MRSA, with injection drug use and a previous MRSA isolate. The guideline suggests empiric cover for a resistant organism when the patient is at high risk, such as after a previous infection with it, and vancomycin covers MRSA. At 72 kg, a 25 mg/kg loading dose is 1 800 mg. Cefazolin, cloxacillin and ceftriaxone do not cover MRSA. Clindamycin covers only some MRSA strains, so it is not reliable as the single agent in septic shock.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q2",
        kind: "single",
        update: "Blood cultures are drawn and vancomycin is running. Bedside ultrasound shows a 5 cm fluid collection under the skin of the forearm.",
        prompt: "Which of the following is the most appropriate management of the forearm collection now?",
        options: [
          "Antibiotics alone for 48 hours",
          "Incision and drainage now",
          "MRI before any drainage",
          "Needle aspiration tomorrow",
          "Operating room debridement tomorrow"
        ],
        correct: 1,
        explanation: "An undrained abscess is the source of his septic shock. The guideline suggests early source control, ideally within 6 hours. Bedside incision and drainage of a superficial 5 cm collection is the least invasive method that works, and it can be done now. Antibiotics alone do not penetrate an undrained abscess well enough to control the source. An MRI delays drainage and adds nothing when ultrasound has shown the collection. Waiting until tomorrow for aspiration or the operating room delays source control in a patient who is already in shock.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "The abscess is drained. He has received 30 mL/kg of crystalloid. On norepinephrine 0.5 mcg/kg/minute and vasopressin 0.03 units/minute, his mean arterial pressure is 58 mmHg. Bedside echocardiography shows normal ventricular function.",
        prompt: "Which of the following is the most appropriate next change to his vasoactive treatment?",
        options: [
          "Add dobutamine infusion",
          "Add dopamine infusion",
          "Add epinephrine infusion",
          "Add milrinone infusion",
          "Double the vasopressin dose"
        ],
        correct: 2,
        explanation: "His MAP stays below 65 mmHg on norepinephrine and vasopressin. For this situation the guideline suggests adding epinephrine. Vasopressin is not titrated, and it is usually given at a fixed dose of 0.03 units/minute because higher doses are linked to cardiac, digital and splanchnic ischemia. His ventricles contract normally, so dobutamine is not indicated, and it lowers vascular resistance. Milrinone is also a vasodilator. Dopamine carries more arrhythmia risk and is not the suggested third agent.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-39",
    topic: "shock",
    title: "Drowsy beside an empty sleep aid bottle",
    stem: "A 71-year-old woman is brought to the emergency department by her son, who found her drowsy 3 hours after she took about 30 tablets of trazodone 100 mg. She takes trazodone for sleep and amlodipine for hypertension, and the amlodipine blister pack is intact. She has no fever, cough, urinary symptoms, vomiting or diarrhea. She responds to voice and is oriented to person. Her skin is warm and her chest is clear. Glucose is 6.4 mmol/L and lactate is 2.8 mmol/L. The ECG shows sinus tachycardia with a QRS of 92 ms and a QTc of 540 ms. She has received 1 L of 0.9% saline.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "106/minute",
      resp: "16/minute",
      bp: "78/40 mmHg",
      o2sat: "95% on room air",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following mechanisms best explains her persistent hypotension after 1 L of saline?",
        options: [
          "Alpha-1 receptor blockade",
          "Calcium channel blockade",
          "Hypovolemia from poor intake",
          "Septic vasodilation",
          "Sodium channel blockade"
        ],
        correct: 0,
        explanation: "Trazodone blocks alpha-1 adrenergic receptors, and hypotension from this blockade is a recognized complication of overdose. She took about 3 g, and her warm skin and tachycardia fit vasodilation. Her amlodipine pack is intact, so calcium channel blockade is unlikely. Her QRS of 92 ms is normal, which argues against sodium channel blockade. She has no fever or source of infection. She has had no vomiting or diarrhea, and hypovolemia would not explain hypotension that persists after 1 L of saline.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "trazodone"
      },
      {
        id: "q2",
        kind: "single",
        update: "After a second litre of saline her BP is 80/42 mmHg, a mean arterial pressure of 55 mmHg.",
        prompt: "Which of the following vasoactive agents is most appropriate for her?",
        options: [
          "dobutamine infusion IV",
          "dopamine infusion IV",
          "epinephrine infusion IV",
          "milrinone infusion IV",
          "norepinephrine infusion IV"
        ],
        correct: 4,
        explanation: "Her hypotension comes from blocked alpha-1 receptors, so she needs a direct vasoconstrictor. Norepinephrine is a strong alpha-1 agonist, and in the reported case of trazodone overdose with severe hypotension, peripheral norepinephrine restored the pressure. Epinephrine and dopamine add beta-2 vasodilation and more tachycardia, and their beta effects act unopposed when alpha-1 receptors are blocked. Dobutamine and milrinone are inotropes that lower vascular resistance, which is the wrong direction for her.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "trazodone"
      },
      {
        id: "q3",
        kind: "single",
        update: "On norepinephrine her MAP is 68 mmHg. A repeat ECG shows a QTc of 560 ms with occasional ventricular ectopic beats. Potassium is 3.9 mmol/L.",
        prompt: "Which of the following is the most appropriate treatment for her ECG findings?",
        options: [
          "amiodarone 150 mg IV",
          "magnesium sulfate 2 g IV",
          "procainamide 1 g IV",
          "sodium bicarbonate 100 mmol IV",
          "sotalol 80 mg PO"
        ],
        correct: 1,
        explanation: "Trazodone can prolong the QT interval by blocking potassium channels, and her QTc has risen to 560 ms with ectopy. The case review advises IV magnesium when the QT is prolonged, along with continuous cardiac monitoring. Amiodarone, procainamide and sotalol all prolong the QT interval further. Sodium bicarbonate treats sodium channel blockade with a wide QRS, and her QRS is normal.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "trazodone"
      }
    ],
    sources: [
      {
        id: "trazodone",
        citation: "Camacho LD, Stearns J, Amini R. Management of trazodone overdose with severe hypotension. Case Rep Emerg Med. 2019.",
        url: "https://doi.org/10.1155/2019/2470592"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-40",
    topic: "shock",
    title: "Bright red blood from a neck tube",
    stem: "A 67-year-old man is brought to the emergency department by ambulance from his long-term care home because bright red blood is pouring through and around his tracheostomy tube. The tracheostomy was placed 10 weeks ago after a long ICU stay for pneumonia. Two days ago staff saw a small amount of fresh blood when suctioning, and it stopped by itself. He breathes through a cuffed tracheostomy tube. He takes no anticoagulant or antiplatelet drugs. He is pale and anxious and is coughing blood through the tube.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "134/minute",
      resp: "30/minute",
      bp: "82/46 mmHg",
      o2sat: "88% on 10 L/minute by tracheostomy mask",
      weight: "76 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A point-of-care hemoglobin is 131 g/L. Blood is on its way from the blood bank.",
        prompt: "Which of the following is the most appropriate approach to his fluid resuscitation?",
        options: [
          "albumin 5% 1 L IV bolus",
          "hydroxyethyl starch 1 L IV",
          "Red cells as soon as available",
          "Ringer's lactate 2 L IV",
          "Transfuse when hemoglobin is below 70"
        ],
        correct: 2,
        explanation: "He is in hemorrhagic shock with brisk, ongoing bleeding. A single hemoglobin in the normal range can mask early bleeding, because the concentration does not fall until fluid shifts or crystalloid dilute the blood, so it should not delay transfusion. Waiting for a hemoglobin below 70 g/L ignores his shock. The blood services guide advises limiting crystalloid to about 1 L before switching to blood, so 2 L of Ringer's lactate is too much. Albumin and starch carry no oxygen and do not replace clotting factors.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "rossaint"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate step to control his bleeding?",
        options: [
          "Bronchoscopy to find the source",
          "Overinflate the tracheostomy cuff",
          "Remove the tracheostomy tube",
          "Suction and observe for 15 minutes",
          "tranexamic acid 1 g IV"
        ],
        correct: 1,
        explanation: "Massive bleeding weeks after a tracheostomy, preceded by a small sentinel bleed, suggests a tracheo-innominate artery fistula. In a systematic review of 148 cases, a sentinel bleed occurred in about 44%, and overinflating the tracheostomy cuff alone controlled the hemorrhage in about 71%. Removing the tube in a patient who breathes through it risks losing his airway before any other control is in place. Bronchoscopy found the fistula in only about 31% of cases in the review, less often than imaging, and it delays control. Suction and observation leave an arterial bleed untreated. Tranexamic acid cannot seal a fistula into a major artery.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "tif"
      },
      {
        id: "q3",
        kind: "menu",
        update: "Cuff overinflation slows the bleeding. Vascular surgery and interventional radiology are on their way, and the massive hemorrhage protocol is activated.",
        prompt: "Which of the following should the massive hemorrhage protocol provide for his resuscitation?",
        options: [
          "albumin 25% 100 mL IV",
          "Frozen plasma in a fixed ratio",
          "hydroxyethyl starch 500 mL IV",
          "Platelets in a fixed ratio",
          "recombinant factor VIIa IV",
          "Red cells in a fixed ratio",
          "Ringer's lactate 2 L IV"
        ],
        select: 3,
        correct: [
          1,
          3,
          5
        ],
        explanation: "Modern massive hemorrhage protocols provide red cells, plasma and platelets in a ratio that approximates whole blood, about one unit of each. This replaces oxygen-carrying capacity and clotting factors together. Large volumes of crystalloid dilute clotting factors, so the guide advises switching to blood after about 1 L. Albumin and starch carry no oxygen or clotting factors. The European bleeding guideline does not recommend recombinant factor VIIa as first-line treatment.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "cbs"
      }
    ],
    sources: [
      {
        id: "tif",
        citation: "Joshi KD, Singh A, Singh DK, et al. Tracheo-innominate artery fistula: a systematic review of diagnostic and management strategies. Otolaryngol Head Neck Surg. 2025.",
        url: "https://doi.org/10.1002/ohn.1333"
      },
      {
        id: "cbs",
        citation: "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical guide to transfusion, chapter 11. Canadian Blood Services. 2021.",
        url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
      },
      {
        id: "rossaint",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://doi.org/10.1186/s13054-023-04327-7"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-41",
    topic: "shock",
    title: "Confused at 30 weeks with a cough",
    stem: "A 31-year-old woman at 30 weeks gestation is brought to the emergency department by her partner with 3 days of cough and right-sided chest pain. This morning he noticed she was confused. Her pregnancy has been uncomplicated and she takes prenatal vitamins. She is drowsy and oriented to person only. There are crackles and bronchial breath sounds at the right base, and mild swelling of both ankles. The fetal heart rate is 165/minute. Lactate is 4.4 mmol/L, WBC 3.1 x 10^9/L, hemoglobin 108 g/L and platelets 96 x 10^9/L.",
    vitals: {
      temperature: "36.1°C oral",
      pulse: "124/minute",
      resp: "30/minute",
      bp: "88/48 mmHg",
      o2sat: "90% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first imaging test to find the source of her shock?",
        options: [
          "CT pulmonary angiography",
          "MRI of the chest",
          "Portable chest X-ray now",
          "Ventilation-perfusion scan",
          "No X-ray until after delivery"
        ],
        correct: 2,
        explanation: "Her cough, pleuritic pain and focal crackles point to pneumonia, and a portable chest X-ray is the fastest way to confirm the source at the bedside. The ACOG opinion states that the radiation from radiography is far below the dose associated with fetal harm and that needed imaging should not be withheld in pregnancy. Delaying the X-ray until after delivery delays diagnosis in a critically ill woman. MRI is impractical in an unstable patient and is not the first test for pneumonia. CT pulmonary angiography and a ventilation-perfusion scan look for pulmonary embolism, not for the infection her examination suggests.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "acog"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings indicate sepsis with organ dysfunction or hypoperfusion in her?",
        options: [
          "Hemoglobin of 108 g/L",
          "Lactate of 4.4 mmol/L",
          "Mild swelling of both ankles",
          "New confusion and drowsiness",
          "Platelets of 96 x 10^9/L",
          "Temperature of 36.1°C"
        ],
        select: 3,
        correct: [
          1,
          3,
          4
        ],
        explanation: "Her confusion shows brain dysfunction, her platelets of 96 x 10^9/L show coagulation dysfunction, and her lactate of 4.4 mmol/L shows tissue hypoperfusion. The SMFM guidance recommends considering sepsis in a pregnant patient with unexplained end-organ damage and an infection, regardless of fever, and measuring lactate. Her normal temperature does not exclude sepsis, but it is not a sign of organ dysfunction. A hemoglobin of 108 g/L and mild ankle swelling are common in the third trimester and do not indicate organ failure.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "smfm"
      },
      {
        id: "q3",
        kind: "single",
        update: "Her chest X-ray shows right lower lobe consolidation. She has received 2 L of crystalloid and antibiotics, and norepinephrine is running. There are no obstetric complications, and the fetal heart tracing is stable. The obstetric resident asks whether to deliver the baby now.",
        prompt: "Which of the following is the most appropriate plan for delivery?",
        options: [
          "Caesarean delivery within the hour",
          "Deliver if still on norepinephrine tomorrow",
          "Deliver once the lactate is normal",
          "Deliver only for obstetric reasons",
          "Induce labour tonight"
        ],
        correct: 3,
        explanation: "The SMFM guidance recommends against immediate delivery for the sole indication of sepsis and says delivery should be dictated by obstetric indications. The priority is treating the infection and supporting her circulation. An urgent caesarean or an induction adds surgical or labour stress to a woman in septic shock without improving her sepsis. Tying delivery to a vasopressor duration or a normal lactate uses markers of sepsis, not obstetric indications, to time the birth.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "smfm"
      }
    ],
    sources: [
      {
        id: "acog",
        citation: "American College of Obstetricians and Gynecologists. Committee opinion no. 723: guidelines for diagnostic imaging during pregnancy and lactation. Obstet Gynecol. 2017.",
        url: "https://doi.org/10.1097/AOG.0000000000002355"
      },
      {
        id: "smfm",
        citation: "Society for Maternal-Fetal Medicine. SMFM consult series no. 47: sepsis during pregnancy and the puerperium. Am J Obstet Gynecol. 2019.",
        url: "https://doi.org/10.1016/j.ajog.2019.01.216"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-42",
    topic: "shock",
    title: "Fever during dialysis",
    stem: "A 66-year-old woman on hemodialysis three times a week presents to the emergency department with fever and chills that started during dialysis today. Dialysis was stopped after 1 hour. She has diabetes and heart failure with an ejection fraction of 30%. She dialyzes through a tunnelled right internal jugular catheter. The catheter exit site is red with pus. She makes no urine. She is alert. Crackles are heard at both lung bases. Potassium 5.4 mmol/L, lactate 3.2 mmol/L.",
    vitals: {
      temperature: "39.0°C oral",
      pulse: "118/minute",
      resp: "26/minute",
      bp: "84/48 mmHg",
      o2sat: "90% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial approach to her blood pressure?",
        options: [
          "albumin 25% 200 mL IV",
          "Crystalloid 30 mL/kg over 1 hour",
          "furosemide 80 mg IV",
          "norepinephrine early, cautious fluid",
          "Urgent ultrafiltration by dialysis"
        ],
        correct: 3,
        explanation: "She has septic shock but also anuric kidney failure, an ejection fraction of 30%, crackles and an O2 sat of 90%, so a fixed 30 mL/kg bolus risks pulmonary edema. Small boluses with reassessment and early norepinephrine suit her better. Furosemide does nothing in an anuric patient. Ultrafiltration would remove volume and worsen her hypotension. Albumin 25% offers no advantage over crystalloid.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following bedside ultrasound findings would most strongly argue against giving her more fluid?",
        options: [
          "A lines with lung sliding",
          "Collapsing inferior vena cava",
          "Hyperdynamic left ventricle",
          "Multiple B lines in both lungs",
          "Small right ventricle"
        ],
        correct: 3,
        explanation: "Multiple B lines in both lungs show interstitial fluid, which in this patient means pulmonary edema and a low tolerance for more fluid. An A line pattern with lung sliding suggests dry lungs. A collapsing inferior vena cava and a hyperdynamic left ventricle suggest she may still respond to fluid. A small right ventricle does not show fluid overload.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "lus"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate for her likely source?",
        options: [
          "cefazolin IV alone",
          "ciprofloxacin PO alone",
          "clindamycin IV alone",
          "metronidazole IV alone",
          "vancomycin and ceftazidime IV"
        ],
        correct: 4,
        explanation: "Pus at a tunnelled dialysis catheter with septic shock points to a catheter-related bloodstream infection. Empiric therapy covers Staphylococcus aureus, including MRSA, with vancomycin, plus gram negative organisms, with a drug such as ceftazidime chosen by local resistance. Cefazolin alone misses MRSA and gram negative organisms. Clindamycin and metronidazole alone miss gram negative organisms, and oral ciprofloxacin is not appropriate in shock and misses MRSA. The infected catheter usually needs removal.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "mermel"
      }
    ],
    sources: [
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      },
      {
        id: "lus",
        citation: "Volpicelli G, et al. International evidence-based recommendations for point-of-care lung ultrasound. 2025 focused update of the 2012 recommendations. Intensive Care Med. 2026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/42257880/"
      },
      {
        id: "mermel",
        citation: "Mermel LA, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection. 2009 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009."
      }
    ],
    ...META,
  },
  {
    id: "shock-43",
    topic: "shock",
    title: "Vomiting girl with an old brain tumour",
    stem: "A 9-year-old girl is brought to the emergency department with 2 days of vomiting and loose stools. Three years ago a craniopharyngioma was removed, and since then she has taken hydrocortisone, levothyroxine and desmopressin. She has vomited each hydrocortisone dose since yesterday, and her family has no injection kit at home. She is lethargic but rousable. Her hands and feet are cool, her pulses are weak and her capillary refill is 4 seconds. She has passed urine once today. Glucose is 2.8 mmol/L, sodium 128 mmol/L and potassium 4.2 mmol/L.",
    vitals: {
      temperature: "37.9°C oral",
      pulse: "146/minute",
      resp: "28/minute",
      bp: "98/60 mmHg",
      o2sat: "98% on room air",
      weight: "28 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following measures should guide her fluid resuscitation?",
        options: [
          "Blood pressure alone",
          "Heart rate, refill and urine output",
          "Serum sodium every 30 minutes",
          "Spot urine specific gravity",
          "Weight change over the first day"
        ],
        correct: 1,
        explanation: "Her pressure is normal for a 9-year-old, yet she is in shock, with cool limbs, weak pulses, a capillary refill of 4 seconds and little urine. The 2026 pediatric sepsis guideline advises titrating fluid boluses to clinical markers of cardiac output, including heart rate, capillary refill and urine output, and stopping if shock resolves or fluid overload develops. Blood pressure alone falls late in children and would miss her shock. Serum sodium and urine specific gravity guide electrolyte care, not moment-to-moment perfusion. Weight change is too slow to guide boluses in the first hour.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "sscp"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains why she is in shock?",
        options: [
          "Adrenal crisis from missed hydrocortisone",
          "Diabetes insipidus from missed desmopressin",
          "Hypothyroidism from missed levothyroxine",
          "Septic shock from gastroenteritis",
          "Volume loss from gastroenteritis alone"
        ],
        correct: 0,
        explanation: "She has adrenal insufficiency after pituitary surgery and has not kept down her hydrocortisone. Vomiting, hypotension or shock, hyponatremia and hypoglycemia are features of adrenal crisis, and hypoglycemia is more common in children than adults. Her glucose is 2.8 mmol/L and her sodium is 128 mmol/L. Her potassium is normal because the mineralocorticoid axis is intact in pituitary disease. Volume loss or infection from gastroenteritis would not explain her hypoglycemia. Missed desmopressin would cause dilute urine and a high sodium, not hyponatremia. Missing levothyroxine for a day or two does not cause shock.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "crisis"
      },
      {
        id: "q3",
        kind: "single",
        update: "An IV is placed and a 20 mL/kg bolus of 0.9% saline is running. Dextrose is given for her hypoglycemia.",
        prompt: "Which of the following is the most appropriate glucocorticoid dose for her now?",
        options: [
          "dexamethasone 4 mg IV",
          "fludrocortisone 0.1 mg PO",
          "hydrocortisone 25 mg IV",
          "hydrocortisone 100 mg IV",
          "prednisone 10 mg PO"
        ],
        correct: 3,
        explanation: "The pediatric review gives practical bolus doses of hydrocortisone by age and weight: 25 mg under 2 years or under 15 kg, 50 mg from 2 to 6 years or 15 to 25 kg, and 100 mg over 6 years or over 25 kg. At 9 years and 28 kg she needs 100 mg IV now. The 25 mg dose is for children under 2 years or under 15 kg. Fludrocortisone replaces mineralocorticoid, which her pituitary disease leaves intact, and it has no role in the crisis dose. The review advises avoiding long-acting synthetic steroids such as dexamethasone in children. Oral prednisone will not stay down while she is vomiting and is far below a crisis dose.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "crisis"
      }
    ],
    sources: [
      {
        id: "sscp",
        citation: "Weiss SL, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Intensive Care Med. 2026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/41870559/"
      },
      {
        id: "crisis",
        citation: "Camtosun E, Sangun O. Treatment and prevention of adrenal crisis and family education. J Clin Res Pediatr Endocrinol. 2025.",
        url: "https://doi.org/10.4274/jcrpe.galenos.2024.2024-6-12-s"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-44",
    topic: "shock",
    title: "Sleepy newborn who is not feeding",
    stem: "A 6-day-old girl is brought to the emergency department because she is sleepy and not waking for feeds. She is exclusively breastfed, and her mother, a first-time parent, feels her milk has not come in. The baby has had one wet diaper in the past day. Her birth weight was 3.5 kg. She is lethargic and irritable when handled. Her skin feels doughy and her fontanelle is slightly sunken. Capillary refill is 3 seconds. Sodium 162 mmol/L, glucose 3.1 mmol/L, creatinine 110 umol/L.",
    vitals: {
      temperature: "37.6°C rectal",
      pulse: "176/minute",
      resp: "48/minute",
      bp: "64/38 mmHg",
      weight: "3.0 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her weight loss as a percentage of her birth weight?",
        options: [
          "5%",
          "8%",
          "10%",
          "14%",
          "20%"
        ],
        correct: 3,
        explanation: "She has lost 3.5 minus 3.0 kg, which is 0.5 kg. Divided by her birth weight, 0.5 / 3.5 = 0.143, or about 14%. Breastfed newborns commonly lose up to about 7% in the first days, and a loss of 10% or more is abnormal and is the setting in which breastfeeding-associated hypernatremia occurs. Most of this short-term loss is water, so it also estimates her fluid deficit of about 500 mL.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "hypernat-bf"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains why her circulation looks better than her degree of dehydration?",
        options: [
          "Fever raises her heart rate",
          "Neonates have little body water",
          "Normal glucose masks shock",
          "Stool losses are hidden in diapers",
          "Water shifts from cells to vessels"
        ],
        correct: 4,
        explanation: "In hypernatremic dehydration the high sodium draws water out of cells into the extracellular space, which supports the circulating volume. Signs of poor perfusion therefore appear later than in isotonic dehydration, and the weight loss is a better guide. Newborns have a higher, not lower, share of body water than older children. Her temperature of 37.6°C is not a fever. Glucose does not mask shock, and the stem describes no diarrhea.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "merck-dehyd"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial IV fluid for this infant?",
        options: [
          "albumin 25% 15 mL IV",
          "dextrose 5% in water 60 mL IV",
          "normal saline 60 mL IV",
          "0.45% saline 60 mL IV",
          "Sterile water 60 mL IV"
        ],
        correct: 2,
        explanation: "A newborn with poor perfusion is resuscitated first with isotonic saline at 20 mL/kg, which is 60 mL for 3.0 kg, with reassessment. Isotonic fluid restores volume without a rapid fall in sodium. Dextrose 5% in water and 0.45% saline as a bolus can drop the sodium too fast and cause cerebral edema. Sterile water given IV causes hemolysis. Albumin 25% does not replace her water loss.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "merck-dehyd"
      }
    ],
    sources: [
      {
        id: "hypernat-bf",
        citation: "Lavagno C, et al. Breastfeeding-associated hypernatremia. A systematic review of the literature. J Hum Lact. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26530059/"
      },
      {
        id: "merck-dehyd",
        citation: "Cellucci MF. Dehydration in children. Merck Manual Professional Version. 2025.",
        url: "https://www.merckmanuals.com/professional/pediatrics/dehydration-and-fluid-therapy-in-children/dehydration-in-children"
      }
    ],
    ...META,
  },
  {
    id: "shock-45",
    topic: "shock",
    title: "Bitten while moving hay bales",
    stem: "You are working in a rural hospital emergency department in southern Alberta. A 38-year-old man is brought in 50 minutes after a rattlesnake bit his left hand while he moved hay bales. He has severe pain and swelling that has spread to the mid forearm. He has vomited twice, has a metallic taste and feels light-headed. He takes no medications and has no allergies. There are two fang marks on the back of the hand. He has no hives, wheeze or lip swelling, and no bleeding. Hemoglobin is 148 g/L, platelets 64 x 10^9/L, fibrinogen 0.8 g/L and INR 2.1.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "124/minute",
      resp: "22/minute",
      bp: "76/42 mmHg",
      o2sat: "97% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following mechanisms best explains his hypotension at this stage?",
        options: [
          "Anaphylaxis to snake venom",
          "Dehydration from vomiting",
          "Hemorrhage from venom coagulopathy",
          "Vasovagal reaction to pain",
          "Venom vasodilation and capillary leak"
        ],
        correct: 4,
        explanation: "Crotaline venom causes systemic effects that include hypotension from direct cardiovascular toxicity, third spacing and vasodilation, along with nausea, vomiting and a metallic taste. His low platelets and fibrinogen show a systemic hematologic venom effect as well. He has no hives, wheeze or angioedema, so anaphylaxis is unlikely. He has no bleeding and a hemoglobin of 148 g/L, so hemorrhage does not explain his shock. Two episodes of vomiting cannot cause this degree of shock. A vasovagal reaction slows the pulse, and his pulse is 124/minute.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "lavonas"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his envenomation?",
        options: [
          "epinephrine 0.5 mg IM",
          "Fab antivenom 8 to 12 vials IV",
          "Fab antivenom 2 vials IV",
          "frozen plasma 4 units IV",
          "methylprednisolone 125 mg IV"
        ],
        correct: 1,
        explanation: "Hypotension is a systemic venom effect, and the unified treatment algorithm says patients with hypotension should receive antivenom emergently. For immediately life-threatening effects such as shock, the panel recommended raising the initial Fab antivenom dose from the usual 4 to 6 vials to 8 to 12 vials. Two vials is below any studied initial dose. Epinephrine treats anaphylaxis, which he does not have. Corticosteroids are reserved for hypersensitivity reactions and do not neutralize venom. Frozen plasma is a blood product that the algorithm advises against using routinely.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "lavonas"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following fluids should be given with his antivenom infusion?",
        options: [
          "albumin 5% 500 mL IV",
          "frozen plasma 4 units IV",
          "platelets 1 adult dose IV",
          "red cells 2 units IV",
          "sodium chloride 0.9% 1 L IV"
        ],
        correct: 4,
        explanation: "The algorithm recommends routine IV crystalloid for any pit viper victim who needs antivenom, because venom causes vasodilation and capillary leak and the antivenom infusion can release histamine. Normal saline is the standard diluent and resuscitation fluid. He is not bleeding and his hemoglobin is 148 g/L, so red cells are not indicated. Platelets and plasma are blood products the algorithm advises against giving routinely, because antivenom, not replacement, reverses the venom coagulopathy. Albumin is not part of the algorithm.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "lavonas"
      },
      {
        id: "q4",
        kind: "single",
        update: "One hour after the first antivenom dose, swelling has reached the elbow. Platelets are 41 x 10^9/L and fibrinogen is below 0.5 g/L. His BP is 92/58 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his treatment?",
        options: [
          "Fasciotomy of the forearm",
          "frozen plasma 4 units IV",
          "Observe and recheck in 6 hours",
          "platelets 1 adult dose IV",
          "Repeat the initial antivenom dose"
        ],
        correct: 4,
        explanation: "Initial control means the local swelling stops progressing and the hematologic and systemic effects improve. His swelling is spreading and his platelets and fibrinogen are worse, so control has not been achieved. The algorithm says to repeat the initial dose of antivenom when the first dose fails. Observation leaves venom effects progressing. Plasma and platelets are not routine because antivenom corrects the coagulopathy. The algorithm recommends against prophylactic fasciotomy.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "lavonas"
      }
    ],
    sources: [
      {
        id: "lavonas",
        citation: "Lavonas EJ, Ruha AM, Banner W, et al. Unified treatment algorithm for the management of crotaline snakebite in the United States: results of an evidence-informed consensus workshop. BMC Emerg Med. 2011.",
        url: "https://doi.org/10.1186/1471-227X-11-2"
      }
    ],
    ...META,
    version: 2,
  },
  {
    id: "shock-46",
    topic: "shock",
    title: "Dizzy older man with diarrhea",
    stem: "A 76-year-old man presents to the emergency department with 3 days of watery diarrhea and poor oral intake. He feels dizzy when he stands, and his systolic pressure falls by 28 mmHg on standing. His usual weight is 84 kg. He has type 2 diabetes, hypertension and heart failure. He takes metformin 1 000 mg twice daily, empagliflozin 10 mg daily, ramipril 10 mg daily, furosemide 40 mg daily, atorvastatin 40 mg daily and ASA 81 mg daily. He is alert. His mucous membranes are dry. Sodium 136 mmol/L, potassium 5.8 mmol/L, creatinine 212 umol/L (baseline 98), glucose 9.4 mmol/L.",
    vitals: {
      temperature: "37.2°C oral",
      pulse: "98/minute",
      resp: "18/minute",
      bp: "96/58 mmHg",
      o2sat: "97% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best estimate of his fluid deficit, based on his weights?",
        options: [
          "0.5 L",
          "1 L",
          "2 L",
          "4 L",
          "8 L"
        ],
        correct: 3,
        explanation: "He weighs 80 kg today against a usual 84 kg, a loss of 4 kg over 3 days of diarrhea. Short-term weight loss is mostly water, and 1 kg is about 1 L, so his deficit is about 4 L, or about 5% of his usual weight. His orthostatic drop of 28 mmHg and dry mucosa fit this. Volumes of 0.5 to 2 L underestimate the measured loss, and 8 L would be about 10% of his weight.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "rosen-ch80"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following of his medications should be held until he is eating and drinking normally?",
        options: [
          "ASA 81 mg PO",
          "atorvastatin 40 mg PO",
          "empagliflozin 10 mg PO",
          "furosemide 40 mg PO",
          "metformin 1 000 mg PO",
          "ramipril 10 mg PO"
        ],
        select: 4,
        correct: [
          2,
          3,
          4,
          5
        ],
        explanation: "The sick day medication list advises holding sulfonylureas, ACE inhibitors, diuretics, direct renin inhibitors, metformin, angiotensin receptor blockers, NSAIDs and SGLT2 inhibitors during illness with dehydration. For him that means ramipril, furosemide, metformin and empagliflozin. These drugs can worsen kidney injury, raise potassium or cause lactic acidosis or ketoacidosis when he is volume depleted. Low dose ASA and atorvastatin do not worsen kidney injury and can continue.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "dc-sickday"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial IV fluid for his volume depletion?",
        options: [
          "albumin 25% 100 mL IV",
          "Balanced crystalloid 1 L IV",
          "dextrose 5% in water 1 L IV",
          "hydroxyethyl starch 500 mL IV",
          "0.45% saline 1 L IV"
        ],
        correct: 1,
        explanation: "He needs isotonic crystalloid to replace a 4 L extracellular deficit, and a balanced crystalloid such as Ringer's lactate reduced major kidney events compared with saline in critically ill adults. Its small potassium content does not raise a serum potassium of 5.8 mmol/L, and correcting his volume and kidney function will help lower it. Dextrose 5% in water and 0.45% saline are hypotonic and do not stay in the circulation. Starch harms the kidneys, and albumin 25% does not replace salt and water losses.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "smart"
      }
    ],
    sources: [
      {
        id: "rosen-ch80",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 80, Gastroenteritis.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "dc-sickday",
        citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Chronic kidney disease in diabetes. Can J Diabetes. 2018."
      },
      {
        id: "smart",
        citation: "Semler MW, et al. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018."
      }
    ],
    ...META,
  },
  {
    id: "shock-47",
    topic: "shock",
    title: "Watery diarrhea after a trip abroad",
    stem: "A 27-year-old man presents to the emergency department 2 days after returning from volunteering at a clinic in a country with an active cholera outbreak. Since last night he has had more than 20 large, painless, watery stools that look like rice water, and he has vomited several times. He takes no medications. He is lethargic and cannot drink. His eyes are sunken, a skin pinch goes back very slowly and his radial pulse is weak. His abdomen is soft. Sodium is 136 mmol/L, potassium 3.0 mmol/L, bicarbonate 13 mmol/L and creatinine 168 umol/L.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "132/minute",
      resp: "28/minute",
      bp: "78/50 mmHg",
      o2sat: "98% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the total IV volume he should receive over the first 3 hours?",
        options: [
          "2 100 mL",
          "3 500 mL",
          "4 900 mL",
          "7 000 mL",
          "10 500 mL"
        ],
        correct: 3,
        explanation: "He meets the cholera flowchart definition of severe dehydration: he is lethargic, cannot drink, has sunken eyes and a very slow skin pinch, and has a weak pulse. Plan C for anyone aged 1 year or older is 30 mL/kg in 30 minutes, then 70 mL/kg over the next 2.5 hours, which is 100 mL/kg in 3 hours. At 70 kg that is 2 100 mL plus 4 900 mL, or 7 000 mL. The figures of 2 100 and 4 900 mL are each only one phase of the plan. The figure of 3 500 mL is half the deficit. The figure of 10 500 mL is 150 mL/kg. Infants under 1 year receive the same 100 mL/kg more slowly, over 6 hours.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "gtfcc"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following IV fluids is the first choice for rehydrating him?",
        options: [
          "albumin 5% IV",
          "dextrose 5% in water IV",
          "hydroxyethyl starch IV",
          "Ringer's lactate IV",
          "sodium chloride 0.45% IV"
        ],
        correct: 3,
        explanation: "The cholera field manual names Ringer's lactate as the first-choice IV fluid for severe dehydration. Cholera stool is rich in sodium, potassium and bicarbonate, and he has a potassium of 3.0 mmol/L and a bicarbonate of 13 mmol/L. Ringer's lactate supplies sodium and potassium, and lactate acts as a source of bicarbonate. The manual advises against plain 5% dextrose. Half-normal saline is hypotonic and replaces too little sodium. Albumin and starch are not among the fluids the manual lists for cholera.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "manual"
      },
      {
        id: "q3",
        kind: "single",
        update: "Ninety minutes into Plan C he is awake and alert, his pulse is stronger and he asks for a drink.",
        prompt: "Which of the following is the most appropriate change to his rehydration now?",
        options: [
          "Continue IV fluids alone for 24 hours",
          "Give ORS by mouth alongside the IV",
          "Give plain water only by mouth",
          "Stop all fluids and observe him",
          "Switch the IV to dextrose 5% water"
        ],
        correct: 1,
        explanation: "The field manual says to give oral rehydration solution as soon as the patient can drink, in addition to IV fluids, and to reassess at 3 hours in anyone older than 1 year before moving to an oral plan. He is now alert and able to drink. Continuing IV fluid alone for a day ignores a safer route that also replaces ongoing losses. Plain water lacks the sodium and glucose that drive absorption. Stopping all fluids ignores his ongoing stool losses. Plain 5% dextrose is not recommended.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "manual"
      }
    ],
    sources: [
      {
        id: "gtfcc",
        citation: "Global Task Force on Cholera Control. Cholera patient treatment flowchart, version 1.0. 2024.",
        url: "https://www.gtfcc.org/wp-content/uploads/2025/03/gtfcc-cholera-patient-treatment-flowchart-en.pdf"
      },
      {
        id: "manual",
        citation: "Global Task Force on Cholera Control. Cholera outbreak response field manual, section 7: case management in treatment facilities. 2019.",
        url: "https://www.choleraoutbreak.org/book-page/section-7-case-management-treatment-facilities.html"
      }
    ],
    ...META,
    version: 2,
  },
];
