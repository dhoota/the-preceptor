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
    title: "Confused man with a cough",
    stem: "A 48-year-old man is brought to the emergency department by ambulance with 3 days of cough, fever and right-sided chest pain. He drinks about 10 beers a day and takes no medications. He is confused and mottled over both knees. Crackles and bronchial breath sounds are heard at the right base. Capillary refill is 5 seconds. Lactate 5.6 mmol/L, WBC 21.4 x 10^9/L, creatinine 186 umol/L. The chest X-ray shows right lower lobe consolidation.",
    vitals: {
      temperature: "39.1°C oral",
      pulse: "128/minute",
      resp: "32/minute",
      bp: "76/40 mmHg",
      o2sat: "90% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial crystalloid volume over the first 3 hours?",
        options: [
          "800 mL",
          "1 200 mL",
          "2 400 mL",
          "4 000 mL",
          "5 600 mL"
        ],
        correct: 2,
        explanation: "He has septic shock with hypotension and a lactate of 5.6 mmol/L, and the guideline suggests at least 30 mL/kg of crystalloid in the first 3 hours. For 80 kg that is 30 x 80 = 2 400 mL, given in boluses with reassessment. Volumes of 800 and 1 200 mL (10 and 15 mL/kg) under-resuscitate him. Volumes of 4 000 and 5 600 mL (50 and 70 mL/kg) as a fixed first order risk fluid overload in a patient with pneumonia and an O2 sat of 90%.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q2",
        kind: "single",
        update: "After 2.4 L his BP is 80/44 mmHg, a mean arterial pressure of 56 mmHg. He has one 18 gauge forearm IV. A central line will take 45 minutes.",
        prompt: "Which of the following is the most appropriate next step for his blood pressure?",
        options: [
          "Another 2.4 L of crystalloid",
          "dopamine through the peripheral IV",
          "norepinephrine through the peripheral IV",
          "phenylephrine push doses until central access",
          "Wait for central access to start a vasopressor"
        ],
        correct: 2,
        explanation: "His mean arterial pressure of 56 mmHg is below the target of 65 mmHg after 30 mL/kg, so he needs a vasopressor. Norepinephrine is first line, and the guideline suggests starting it peripherally rather than delaying for a central line, with checks of the site. Waiting 45 minutes prolongs hypoperfusion. Dopamine causes more arrhythmias than norepinephrine. Push dose phenylephrine is a bridge only and does not replace an infusion. A second 2.4 L without signs of fluid response risks pulmonary edema.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "A central line is placed. Norepinephrine is at 0.3 mcg/kg/minute and his mean arterial pressure is 60 mmHg.",
        prompt: "Which of the following agents is most appropriate to add to his norepinephrine now?",
        options: [
          "dobutamine infusion",
          "epinephrine infusion",
          "milrinone infusion",
          "phenylephrine infusion",
          "vasopressin infusion"
        ],
        correct: 4,
        explanation: "The guideline suggests adding vasopressin for a patient on escalating doses of norepinephrine whose mean arterial pressure is still below target. It is usually added at a norepinephrine dose of 0.25 to 0.5 mcg/kg/minute, and his dose is 0.3 mcg/kg/minute. Epinephrine is suggested next if the pressure stays low on both. Dobutamine and milrinone are inotropes for cardiac dysfunction, and nothing in his case shows it. Phenylephrine is a pure alpha agonist with no advantage here.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q4",
        kind: "single",
        update: "Four hours later he still needs norepinephrine 0.3 mcg/kg/minute and vasopressin 0.03 units/minute.",
        prompt: "Which of the following additional treatments is suggested for his ongoing vasopressor need?",
        options: [
          "dexamethasone 10 mg IV once",
          "fludrocortisone 50 mcg PO alone",
          "hydrocortisone 50 mg IV every 6 hours",
          "methylprednisolone 1 g IV daily",
          "prednisone 50 mg PO daily"
        ],
        correct: 2,
        explanation: "The guideline suggests IV corticosteroids for septic shock with an ongoing need for vasopressors. They are usually started when norepinephrine is at least 0.25 mcg/kg/minute for at least 4 hours, as here. The usual regimen is hydrocortisone 200 mg a day, given as 50 mg IV every 6 hours. A single dexamethasone dose and pulse methylprednisolone are not the studied regimens. Prednisone depends on gut absorption in a patient in shock. Fludrocortisone alone gives no glucocorticoid.",
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
  },
  {
    id: "shock-23",
    topic: "shock",
    title: "Fever after chemotherapy",
    stem: "A 61-year-old woman presents to the emergency department with fever and shaking chills that began 4 hours ago. She finished her second cycle of chemotherapy for breast cancer 9 days ago. She has a tunnelled central venous catheter. She has no allergies. She is drowsy and flushed. The catheter exit site is clean and her chest is clear. Absolute neutrophil count 0.2 x 10^9/L. Lactate 4.4 mmol/L. Creatinine 102 umol/L.",
    vitals: {
      temperature: "39.4°C oral",
      pulse: "124/minute",
      resp: "26/minute",
      bp: "84/46 mmHg",
      o2sat: "95% on room air",
      weight: "66 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate for this patient?",
        options: [
          "ceftriaxone and azithromycin IV",
          "ciprofloxacin and amoxicillin-clavulanate PO",
          "meropenem and fluconazole IV",
          "piperacillin-tazobactam and vancomycin IV",
          "vancomycin and gentamicin IV"
        ],
        correct: 3,
        explanation: "Febrile neutropenia needs an antipseudomonal beta-lactam such as piperacillin-tazobactam. Vancomycin is added for hemodynamic instability, and she is hypotensive with a lactate of 4.4 mmol/L and a tunnelled catheter. Ceftriaxone and azithromycin do not cover Pseudomonas. The oral regimen is only for low risk outpatients, and she is in shock. Empiric fluconazole is not started at the first fever. Vancomycin with gentamicin lacks an antipseudomonal beta-lactam.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa-fn"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the target time from recognition of her shock to the first antibiotic dose?",
        options: [
          "After blood culture results",
          "After the neutrophil count",
          "Within 1 hour",
          "Within 3 hours",
          "Within 6 hours"
        ],
        correct: 2,
        explanation: "For possible septic shock, the guideline recommends antibiotics immediately, ideally within 1 hour of recognition. Blood cultures should be drawn first only if they cause no delay, and waiting for culture results would take days. Her neutropenia does not need to be confirmed before the first dose, because fever after chemotherapy with hypotension is enough to treat. A 3 hour window is suggested only for possible sepsis without shock, and 6 hours is too long.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 L of crystalloid her BP is 82/44 mmHg, a mean arterial pressure of 57 mmHg. Her lungs remain clear.",
        prompt: "Which of the following vasopressors is the most appropriate first choice for her?",
        options: [
          "dopamine infusion",
          "epinephrine infusion",
          "norepinephrine infusion",
          "phenylephrine infusion",
          "vasopressin infusion"
        ],
        correct: 2,
        explanation: "Norepinephrine is the first-line vasopressor for septic shock and is titrated to a mean arterial pressure of 65 mmHg. Dopamine causes more arrhythmias. Vasopressin is added when norepinephrine needs rise, not used first. Epinephrine is suggested when the pressure stays low despite norepinephrine and vasopressin. Phenylephrine lacks the beta effects that help cardiac output.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc"
      },
      {
        id: "q4",
        kind: "single",
        update: "After 1 hour on norepinephrine her mean arterial pressure is 68 mmHg. Lactate is 3.1 mmol/L. The team debates more fluid.",
        prompt: "Which of the following best guides whether she should receive further fluid boluses?",
        options: [
          "Central venous pressure target",
          "Dynamic response to passive leg raise",
          "Fixed bolus of 1 L every hour",
          "Hemoglobin every 2 hours",
          "Urine specific gravity"
        ],
        correct: 1,
        explanation: "The guideline suggests dynamic measures, such as the change in stroke volume or pulse pressure with a passive leg raise, to decide whether more fluid will help. Capillary refill time and falling lactate are useful adjuncts. Central venous pressure predicts fluid response poorly. Fixed hourly boluses ignore her response and risk overload. Hemoglobin and urine specific gravity do not show whether her cardiac output will rise with fluid.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc"
      }
    ],
    sources: [
      {
        id: "idsa-fn",
        citation: "Freifeld AG, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer. 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011."
      },
      {
        id: "ssc",
        citation: "Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
      }
    ],
    ...META,
  },
  {
    id: "shock-24",
    topic: "shock",
    title: "Painful thigh after a small cut",
    stem: "A 44-year-old man presents to the emergency department with severe pain in his left thigh for 18 hours. He cut his knee on a fence 3 days ago. He has type 2 diabetes treated with metformin. He is anxious and sweaty. The thigh is swollen and tense with dusky purple patches and a few blisters. The pain is far worse than the skin findings suggest and extends beyond the redness. There is no crepitus. Sodium 129 mmol/L, glucose 16.2 mmol/L, creatinine 164 umol/L, CK 2 400 units/L, lactate 4.9 mmol/L.",
    vitals: {
      temperature: "38.9°C oral",
      pulse: "132/minute",
      resp: "26/minute",
      bp: "82/48 mmHg",
      o2sat: "96% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following examination findings best distinguish a necrotizing infection from cellulitis in this patient?",
        options: [
          "Absence of crepitus",
          "Blisters over the thigh",
          "Dusky purple skin patches",
          "Pain beyond the area of redness",
          "Swelling of the thigh",
          "Warmth of the skin"
        ],
        select: 3,
        correct: [
          1,
          2,
          3
        ],
        explanation: "Pain out of proportion that extends beyond the visible redness, dusky or purple skin and bullae are features that point to necrotizing infection rather than cellulitis. With his shock, CK of 2 400 units/L and low sodium, they call for urgent surgical assessment. Swelling and warmth occur in simple cellulitis as well. Crepitus is a late and inconsistent sign, so its absence does not exclude necrotizing fasciitis.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa-ssti"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important step to control the source of his septic shock?",
        options: [
          "CT of the thigh before surgery",
          "Emergency surgical debridement",
          "Hyperbaric oxygen therapy",
          "IV immune globulin infusion",
          "MRI of the thigh with gadolinium"
        ],
        correct: 1,
        explanation: "Pain out of proportion, dusky skin, blisters, a high CK and shock point to necrotizing fasciitis, and prompt surgical debridement is the key treatment. Imaging should not delay surgery when the findings are this clear, and the absence of crepitus does not exclude the diagnosis. Hyperbaric oxygen is not recommended because it has no proven benefit and can delay surgery. Immune globulin does not replace debridement, and its benefit is uncertain.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa-ssti"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate before the organism is known?",
        options: [
          "cefazolin and metronidazole IV",
          "ceftriaxone and azithromycin IV",
          "cephalexin and clindamycin PO",
          "clindamycin and gentamicin IV",
          "vancomycin and piperacillin-tazobactam IV"
        ],
        correct: 4,
        explanation: "Necrotizing infection may be polymicrobial or caused by group A Streptococcus or MRSA, so the guideline recommends vancomycin plus piperacillin-tazobactam, or a carbapenem, as empiric therapy. Cefazolin with metronidazole misses MRSA and many gram negative organisms. Ceftriaxone with azithromycin is a pneumonia regimen with no MRSA or anaerobic cover. Oral antibiotics are not appropriate in shock. Clindamycin with gentamicin is not a recommended regimen and is unreliable against MRSA because of clindamycin resistance.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa-ssti"
      },
      {
        id: "q4",
        kind: "single",
        update: "He goes to the operating room. Tissue cultures grow group A Streptococcus. He remains on norepinephrine.",
        prompt: "Which of the following antibiotics should be given with penicillin for its effect on toxin production?",
        options: [
          "azithromycin",
          "clindamycin",
          "doxycycline",
          "gentamicin",
          "metronidazole"
        ],
        correct: 1,
        explanation: "For necrotizing fasciitis from group A Streptococcus, the guideline recommends penicillin plus clindamycin. Clindamycin suppresses streptococcal toxin production and works regardless of bacterial growth phase. Azithromycin and doxycycline are not recommended for this role. Gentamicin adds no streptococcal benefit. Metronidazole covers anaerobes only.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "idsa-ssti"
      }
    ],
    sources: [
      {
        id: "idsa-ssti",
        citation: "Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections. 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014."
      }
    ],
    ...META,
  },
  {
    id: "shock-25",
    topic: "shock",
    title: "Floppy child at a birthday party",
    stem: "A 4-year-old boy is brought to the emergency department 15 minutes after eating a cookie at a birthday party. He has a known peanut allergy and takes no daily medications. His auto-injector was left at home. He has vomited twice and now has hives over his face and trunk, a hoarse cry and noisy breathing. He is pale and floppy on his father's lap. Capillary refill is 4 seconds. There is diffuse wheeze.",
    vitals: {
      temperature: "37.0°C tympanic",
      pulse: "168/minute",
      resp: "40/minute",
      bp: "64/38 mmHg",
      o2sat: "91% on room air",
      weight: "18 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication and dose for this child?",
        options: [
          "diphenhydramine 18 mg IV",
          "epinephrine 0.5 mg IM",
          "epinephrine 0.18 mg IM",
          "epinephrine 1.8 mg IM",
          "epinephrine 0.18 mg IV push"
        ],
        correct: 2,
        explanation: "He has anaphylaxis with shock, and his systolic pressure of 64 mmHg is below the pediatric limit of 70 + (2 x 4) = 78 mmHg. The first treatment is epinephrine 0.01 mg/kg of the 1 mg/mL solution IM in the anterolateral thigh, so 0.01 x 18 = 0.18 mg. A dose of 1.8 mg is a tenfold error, and 0.5 mg is the maximum single dose for an adolescent or adult. Undiluted IV push epinephrine risks dysrhythmia and is kept for cardiac arrest. Diphenhydramine does not treat airway swelling or shock.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "cps-anaph"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following fluid orders is most appropriate alongside the epinephrine?",
        options: [
          "albumin 25% 90 mL IV",
          "dextrose 5% in water 360 mL IV",
          "normal saline 90 mL IV",
          "normal saline 360 mL IV",
          "normal saline 1 000 mL IV"
        ],
        correct: 3,
        explanation: "Anaphylactic shock causes large fluid shifts from vasodilation and capillary leak, so he needs a rapid isotonic bolus of 20 mL/kg: 20 x 18 = 360 mL, repeated as needed. A bolus of 90 mL is only 5 mL/kg. A litre is about 55 mL/kg as one order, well beyond a first bolus with reassessment. Dextrose 5% in water leaves the vessels quickly and does not restore volume. Albumin 25% offers no advantage over isotonic saline.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "cps-anaph"
      },
      {
        id: "q3",
        kind: "single",
        update: "He has had two IM epinephrine doses 5 minutes apart and 40 mL/kg of saline. BP is 66/36 mmHg and he is drowsy.",
        prompt: "Which of the following is the most appropriate next vasoactive treatment for this child?",
        options: [
          "dopamine infusion IV",
          "epinephrine infusion IV",
          "glucagon infusion IV",
          "norepinephrine infusion IV",
          "vasopressin infusion IV"
        ],
        correct: 1,
        explanation: "Anaphylaxis that persists after repeated IM epinephrine and fluid needs an IV epinephrine infusion, titrated with continuous monitoring. Epinephrine treats both the vasodilation and the bronchospasm and mediator release. Norepinephrine and vasopressin are considered only if shock persists despite an epinephrine infusion. Glucagon is for patients on beta-blockers, and he takes none. Dopamine has no role here.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "wao"
      },
      {
        id: "q4",
        kind: "single",
        update: "His BP improves on the infusion, but he still has wheeze.",
        prompt: "Which of the following second-line medications is most likely to relieve his ongoing wheeze?",
        options: [
          "dexamethasone 0.6 mg/kg PO",
          "diphenhydramine 1 mg/kg IV",
          "famotidine 0.5 mg/kg IV",
          "montelukast 4 mg PO",
          "salbutamol 2.5 mg nebulized"
        ],
        correct: 4,
        explanation: "An inhaled beta-2 agonist such as salbutamol is a useful second-line treatment for bronchospasm that persists after epinephrine. H1 and H2 blockers such as diphenhydramine and famotidine help hives and itch but do not relieve bronchospasm. Corticosteroids act over hours and do not treat acute wheeze. Montelukast has no role in acute anaphylaxis.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "cps-anaph"
      }
    ],
    sources: [
      {
        id: "cps-anaph",
        citation: "Cheng A. Canadian Paediatric Society, Acute Care Committee. Emergency treatment of anaphylaxis in infants and children. Paediatr Child Health. 2011.",
        url: "https://academic.oup.com/pch/article/16/1/35/2639430"
      },
      {
        id: "wao",
        citation: "Cardona V, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020."
      }
    ],
    ...META,
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
        source: "rosen"
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
        explanation: "A benzodiazepine such as lorazepam is the first treatment for a toxin induced seizure. Phenytoin is a sodium channel blocker and can worsen conduction in a sodium channel blocking overdose, and it works poorly for toxic seizures. Levetiracetam and valproic acid are second-line agents after a benzodiazepine. Carbamazepine is oral and has no role in an active seizure.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "rosen"
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
        source: "rosen"
      }
    ],
    sources: [
      {
        id: "bb-review",
        citation: "Rotella JA, Greene SL, Koutsogiannis Z, et al. Treatment for beta-blocker poisoning. A systematic review. Clin Toxicol (Phila). 2020."
      },
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."
      }
    ],
    ...META,
  },
  {
    id: "shock-27",
    topic: "shock",
    title: "Seizure after a pill ingestion",
    stem: "A 34-year-old woman is brought to the emergency department by ambulance 90 minutes after she was found with an empty bottle of amitriptyline 50 mg. The bottle held 60 tablets. She takes it for chronic pain. She had a brief generalized seizure in the ambulance. She now responds only to pain. Her pupils are dilated and her skin is dry and warm. The ECG shows sinus tachycardia with a QRS of 142 ms.",
    vitals: {
      temperature: "37.9°C oral",
      pulse: "136/minute",
      resp: "12/minute",
      bp: "78/44 mmHg",
      o2sat: "93% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following ECG findings best predicts seizures and ventricular dysrhythmia in this poisoning?",
        options: [
          "PR interval prolongation",
          "QRS duration of 142 ms",
          "Sinus tachycardia",
          "ST depression in V5 and V6",
          "U waves in V2 and V3"
        ],
        correct: 1,
        explanation: "Tricyclic antidepressants block fast sodium channels, and a QRS of 100 ms or more predicts seizures while 160 ms or more predicts ventricular dysrhythmia. Her QRS of 142 ms and her seizure show serious toxicity. Sinus tachycardia comes from the anticholinergic effect and is common even in mild poisoning. PR prolongation, ST depression and U waves do not predict these outcomes.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "bicarb"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for her QRS widening?",
        options: [
          "calcium gluconate 3 g IV",
          "lidocaine 1.5 mg/kg IV",
          "physostigmine 1 mg IV",
          "procainamide 1 g IV",
          "sodium bicarbonate 100 mmol IV"
        ],
        correct: 4,
        explanation: "Hypertonic sodium bicarbonate, 1 to 2 mmol/kg IV (60 to 120 mmol for her), narrows the QRS by raising serum sodium and pH. The dose of 100 mmol is 1.7 mmol/kg and can be repeated to effect. Lidocaine is used only for dysrhythmia that persists after bicarbonate. Procainamide is a class Ia drug that blocks sodium channels and worsens toxicity. Physostigmine can cause asystole in tricyclic poisoning. Calcium does not reverse sodium channel blockade.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "bicarb"
      },
      {
        id: "q3",
        kind: "single",
        update: "After two doses of bicarbonate her QRS is 112 ms. After 2 L of crystalloid, BP is 80/46 mmHg.",
        prompt: "Which of the following vasopressors is most appropriate for her persistent hypotension?",
        options: [
          "dobutamine infusion",
          "dopamine infusion",
          "isoproterenol infusion",
          "milrinone infusion",
          "norepinephrine infusion"
        ],
        correct: 4,
        explanation: "Tricyclic antidepressants block alpha-1 receptors and deplete norepinephrine stores, so a direct acting alpha agonist such as norepinephrine is preferred. Dopamine acts partly by releasing norepinephrine and may fail when stores are depleted. Dobutamine, isoproterenol and milrinone cause vasodilation and can worsen hypotension from alpha blockade.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "rosen"
      },
      {
        id: "q4",
        kind: "single",
        update: "She is intubated. Bicarbonate therapy continues and blood gases are checked.",
        prompt: "Which of the following is the usual target range for her arterial pH during treatment?",
        options: [
          "7.25 to 7.35",
          "7.35 to 7.45",
          "7.45 to 7.55",
          "7.55 to 7.65",
          "7.65 to 7.75"
        ],
        correct: 2,
        explanation: "Bicarbonate therapy for sodium channel blockade usually targets an arterial pH of 7.45 to 7.55. Mild alkalemia reduces drug binding to sodium channels. A pH above 7.55 risks hypokalemia, hypocalcemia and reduced cerebral blood flow. A pH below 7.45 gives up part of the protective alkalemia, and acidemia below 7.35 increases toxicity.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "bicarb"
      }
    ],
    sources: [
      {
        id: "bicarb",
        citation: "Bruccoleri RE, Burns MM. A literature review of the use of sodium bicarbonate for the treatment of QRS widening. J Med Toxicol. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26159649/"
      },
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."
      }
    ],
    ...META,
  },
  {
    id: "shock-28",
    topic: "shock",
    title: "Breathless man with COPD on the bag",
    stem: "You are working in a rural hospital emergency department with no CT. A 67-year-old man with severe COPD is brought by ambulance after 2 hours of sudden right-sided chest pain and breathlessness. Paramedics started bag-valve-mask ventilation 10 minutes ago when he tired. He uses inhaled tiotropium and salbutamol. He is now drowsy and sweaty. His neck veins are distended. Breath sounds are absent on the right and the right chest is hyperresonant. The trachea is midline.",
    vitals: {
      pulse: "142/minute",
      resp: "36/minute",
      bp: "70/40 mmHg",
      o2sat: "78% on bag-valve-mask ventilation",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following types of shock is most likely in this patient?",
        options: [
          "Cardiogenic shock",
          "Distributive shock",
          "Hypovolemic shock",
          "Neurogenic shock",
          "Obstructive shock"
        ],
        correct: 4,
        explanation: "Sudden pain, absent breath sounds, hyperresonance, distended neck veins and hypotension during positive pressure ventilation point to tension pneumothorax. Rising intrathoracic pressure obstructs venous return, which is obstructive shock. Tracheal deviation is a late sign, so a midline trachea does not exclude it. Hypovolemic shock gives flat neck veins. Nothing in the case suggests cardiogenic, distributive or neurogenic shock.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following bedside ultrasound findings would best support the suspected diagnosis?",
        options: [
          "Absent lung sliding on the right",
          "B lines throughout both lungs",
          "Collapsing inferior vena cava",
          "Free fluid in the hepatorenal space",
          "Hyperdynamic left ventricle alone",
          "Lung point on the right chest",
          "Pericardial effusion"
        ],
        select: 2,
        correct: [
          0,
          5
        ],
        explanation: "Absent lung sliding on the right supports pneumothorax in the RUSH approach, and a lung point, where sliding lung meets the pneumothorax, confirms it. B lines throughout both lungs suggest pulmonary edema, and B lines at a site exclude pneumothorax there. In tension pneumothorax the inferior vena cava is plethoric, not collapsing. Free fluid in the hepatorenal space suggests bleeding into the abdomen. A hyperdynamic left ventricle alone suggests hypovolemia or sepsis. A pericardial effusion would point to tamponade, another cause of obstructive shock.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "rush"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate intervention for this patient?",
        options: [
          "Chest X-ray to confirm first",
          "Crystalloid bolus of 1 L IV",
          "Decompression of the right chest",
          "norepinephrine infusion IV",
          "Rapid sequence intubation"
        ],
        correct: 2,
        explanation: "Tension pneumothorax is a clinical diagnosis, and he needs immediate decompression by needle or finger thoracostomy followed by a chest tube. Waiting for an X-ray delays life saving treatment. Fluid and a vasopressor do not relieve the obstruction to venous return. Intubation adds positive pressure and can worsen the tension before the chest is decompressed.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the recommended site for needle decompression in this adult?",
        options: [
          "Fifth intercostal space, anterior to midaxillary line",
          "Fifth intercostal space, midclavicular line",
          "Second intercostal space, midclavicular line",
          "Seventh intercostal space, posterior axillary line",
          "Third intercostal space, parasternal"
        ],
        correct: 0,
        explanation: "Current trauma guidance for adults is the fourth or fifth intercostal space just anterior to the midaxillary line, where the chest wall is thinner and a needle is more likely to reach the pleural space. The second space in the midclavicular line, the older adult site, is still used for children, but the chest wall there is often too thick in adults. The fifth space in the midclavicular line is not a recommended site. A parasternal site risks the internal mammary vessels. The seventh space posteriorly risks the diaphragm and spleen or liver.",
        keyFeature: {
          topic: "shock",
          n: 5
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
        id: "rush",
        citation: "Perera P, et al. The RUSH exam. Rapid ultrasound in shock in the evaluation of the critically ill. Emerg Med Clin North Am. 2010."
      }
    ],
    ...META,
  },
  {
    id: "shock-29",
    topic: "shock",
    title: "Older man who collapsed with back pain",
    stem: "A 74-year-old man is brought to the emergency department by ambulance after collapsing at home. He has had sudden severe back and left flank pain for 1 hour. He has hypertension and smokes. He takes amlodipine, and his usual systolic pressure is about 170 mmHg. He is pale and sweaty but answers questions. His abdomen is mildly distended and tender with a pulsatile mass above the umbilicus. Femoral pulses are weak. Hemoglobin 108 g/L.",
    vitals: {
      temperature: "36.1°C oral",
      pulse: "112/minute",
      resp: "24/minute",
      bp: "84/52 mmHg",
      o2sat: "96% on room air",
      weight: "88 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside investigations is the most useful first test in this patient?",
        options: [
          "Abdominal X-ray series",
          "Bedside aortic ultrasound",
          "Bedside urinalysis for blood",
          "Serum lipase level",
          "Serum troponin level"
        ],
        correct: 1,
        explanation: "An older smoker with flank pain, collapse, a pulsatile mass and hypotension has a ruptured abdominal aortic aneurysm until proven otherwise. Bedside ultrasound quickly shows whether an aneurysm is present and allows immediate vascular surgery referral. Blood in the urine is common in renal colic and also occurs with a leaking aneurysm, so it does not separate them. An abdominal X-ray, lipase and troponin do not show the aorta.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "esvs"
      },
      {
        id: "q2",
        kind: "single",
        update: "Bedside ultrasound shows an infrarenal aorta measuring 7.2 cm. No free intraperitoneal fluid is seen.",
        prompt: "Which of the following aortic diameters defines an abdominal aortic aneurysm on ultrasound?",
        options: [
          "Diameter of 2.0 cm or more",
          "Diameter of 2.5 cm or more",
          "Diameter of 3.0 cm or more",
          "Diameter of 4.0 cm or more",
          "Diameter of 5.5 cm or more"
        ],
        correct: 2,
        explanation: "An abdominal aortic aneurysm is an infrarenal aorta of 3.0 cm or more, so his 7.2 cm aorta is a large aneurysm. A diameter of 5.5 cm is the usual threshold for elective repair in men, not the definition. Most ruptures bleed into the retroperitoneum, which ultrasound shows poorly, so the absence of free fluid does not exclude rupture.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "esvs"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following blood pressure strategies is most appropriate while repair is arranged?",
        options: [
          "Crystalloid to a systolic of 120 mmHg",
          "Nitroglycerin to lower his pressure",
          "norepinephrine to a systolic of 140 mmHg",
          "Permissive hypotension, minimal fluid",
          "Pressure restored to his usual level"
        ],
        correct: 3,
        explanation: "For ruptured aneurysm, the guideline recommends permissive hypotension. A lower pressure that keeps him conscious limits further bleeding, and blood is given rather than large volumes of crystalloid. Pushing the systolic pressure to 120 or 140 mmHg or to his usual 170 mmHg with fluid or a vasopressor can worsen bleeding and dilute clotting factors. Nitroglycerin would drop an already low pressure in hemorrhagic shock.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "esvs"
      }
    ],
    sources: [
      {
        id: "esvs",
        citation: "Wanhainen A, et al. European Society for Vascular Surgery (ESVS) 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms. Eur J Vasc Endovasc Surg. 2024.",
        url: "https://pubmed.ncbi.nlm.nih.gov/38307694/"
      }
    ],
    ...META,
  },
  {
    id: "shock-30",
    topic: "shock",
    title: "Boy scalded by a pot of water",
    stem: "A 6-year-old boy is brought to the emergency department by ambulance 1 hour after he pulled a pot of boiling water onto himself. Paramedics did not give fluid. He is crying and alert. He has blistered, moist, painful partial thickness burns over the front of his chest and abdomen, the front of both arms and the front of his left thigh. There are no facial burns and his voice is normal. Using a Lund and Browder chart, the burns cover 25% of total body surface area. Capillary refill is 2 seconds in unburned skin.",
    vitals: {
      temperature: "37.0°C tympanic",
      pulse: "132/minute",
      resp: "26/minute",
      bp: "104/62 mmHg",
      o2sat: "99% on room air",
      weight: "20 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his total burn resuscitation volume for the first 24 hours after injury?",
        options: [
          "750 mL",
          "1 000 mL",
          "1 500 mL",
          "3 000 mL",
          "4 500 mL"
        ],
        correct: 2,
        explanation: "The pediatric burn formula is 3 mL x weight in kg x percent total body surface area of partial and full thickness burn. For him, 3 x 20 x 25 = 1 500 mL over 24 hours. A volume of 1 000 mL uses the adult figure of 2 mL/kg per percent. A volume of 750 mL uses 1.5 mL, and 3 000 and 4 500 mL use 6 and 9 mL, which would overload him. Children also need maintenance fluid with dextrose on top of this volume.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "abls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is his burn fluid rate for the rest of the first 8 hours after injury?",
        options: [
          "47 mL/hour",
          "63 mL/hour",
          "94 mL/hour",
          "107 mL/hour",
          "188 mL/hour"
        ],
        correct: 3,
        explanation: "Half of the 24 hour volume, 750 mL, is given in the first 8 hours counted from the time of the burn, not from arrival. One hour has passed with no fluid, so 750 mL must run over 7 hours, about 107 mL/hour. A rate of 94 mL/hour ignores the hour already lost. A rate of 63 mL/hour spreads the total evenly over 24 hours, 47 mL/hour is the rate for the last 16 hours, and 188 mL/hour gives the whole volume in 8 hours.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "abls"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following targets is best used to adjust his burn fluid rate over the first day?",
        options: [
          "Central venous pressure of 12 mmHg",
          "Lactate below 2 mmol/L within an hour",
          "Urine output of 0.5 mL/kg/hour",
          "Urine output of 1 mL/kg/hour",
          "Urine output of 3 mL/kg/hour"
        ],
        correct: 3,
        explanation: "The formula gives only a starting rate, and the rate is then adjusted hour by hour to urine output. For a child under 30 kg the target is about 1 mL/kg/hour, which is 20 mL/hour for him. A target of 0.5 mL/kg/hour is the adult target. Aiming for 3 mL/kg/hour drives over-resuscitation, with edema and compartment syndrome. Central venous pressure and early lactate clearance are not the standard titration targets.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "abls"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following fluids is recommended for his initial burn resuscitation?",
        options: [
          "albumin 5% solution",
          "dextrose 5% in water",
          "hydroxyethyl starch 6%",
          "Ringer's lactate",
          "0.45% sodium chloride"
        ],
        correct: 3,
        explanation: "Ringer's lactate is the recommended crystalloid for burn resuscitation because it is isotonic and causes less hyperchloremic acidosis than large volumes of saline. Dextrose 5% in water and 0.45% sodium chloride are hypotonic and leave the circulation. Starch solutions increase kidney injury. Albumin may be added later in some burn centres as rescue for rising fluid needs, not as the initial fluid.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "abls"
      }
    ],
    sources: [
      {
        id: "abls",
        citation: "American Burn Association. Advanced Burn Life Support Course Provider Manual. 2018."
      }
    ],
    ...META,
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
        explanation: "Ceftriaxone IV treats the gram negative organisms that cause pyelonephritis and is safe in pregnancy. Fluoroquinolones such as ciprofloxacin and tetracyclines such as doxycycline are avoided in pregnancy. Nitrofurantoin and fosfomycin do not reach adequate levels in kidney tissue or blood, so they are used for cystitis, not for pyelonephritis with septic shock.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "rosen"
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
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."
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
    title: "Girl hit by a car while cycling",
    stem: "A 9-year-old girl is brought to the emergency department by ambulance 40 minutes after she was struck by a car while cycling. She was wearing a helmet. She complains of pain in her left upper abdomen and left shoulder. She is alert but anxious and pale. There is a tire mark across the left lower chest and upper abdomen, with tenderness in the left upper quadrant. Her chest is clear with equal air entry and her pelvis is stable. Capillary refill is 4 seconds.",
    vitals: {
      temperature: "36.5°C tympanic",
      pulse: "142/minute",
      resp: "28/minute",
      bp: "96/60 mmHg",
      o2sat: "98% on room air",
      weight: "30 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her circulatory state on arrival?",
        options: [
          "Compensated hemorrhagic shock",
          "Decompensated hemorrhagic shock",
          "Neurogenic shock",
          "Obstructive shock",
          "No shock, pain explains her pulse"
        ],
        correct: 0,
        explanation: "A pulse of 142/minute, capillary refill of 4 seconds, pallor and anxiety after a blow to the spleen show hemorrhagic shock. Her systolic pressure of 96 mmHg is still normal, so the shock is compensated. Children keep a normal systolic pressure after large losses and become hypotensive only after losing about 45% of their blood volume, which makes hypotension a late sign. Pain alone does not explain delayed capillary refill. Her clear chest with equal air entry makes obstructive shock unlikely, and her tachycardia argues against neurogenic shock, which causes bradycardia.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the lowest acceptable systolic blood pressure for a child of her age?",
        options: [
          "60 mmHg",
          "70 mmHg",
          "76 mmHg",
          "80 mmHg",
          "88 mmHg"
        ],
        correct: 4,
        explanation: "For children aged 1 to 10 years, the lowest acceptable systolic pressure is 70 mmHg plus twice the age in years. For her, 70 + (2 x 9) = 88 mmHg. A value of 70 mmHg is the limit for infants, and 60 mmHg is the limit for term newborns. Values of 76 and 80 mmHg do not come from the formula for a 9-year-old and would accept a pressure that is already too low.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "She has received one 20 mL/kg bolus of crystalloid. Her pulse is 148/minute and capillary refill is 4 seconds.",
        prompt: "Which of the following is the most appropriate next fluid for this child?",
        options: [
          "albumin 5% 600 mL IV",
          "Crystalloid 1 800 mL IV",
          "dextrose 5% in water 600 mL IV",
          "hydroxyethyl starch 300 mL IV",
          "Red cells 300 mL IV"
        ],
        correct: 4,
        explanation: "A child with hemorrhagic shock who does not respond to the first crystalloid bolus needs blood, at 10 to 20 mL/kg. For 30 kg, 10 mL/kg is 300 mL of red cells, repeated as needed while surgery is involved. A further 1 800 mL of crystalloid is 60 mL/kg and would dilute her clotting factors. Albumin and starch carry no oxygen, and starch harms clotting and kidneys. Dextrose 5% in water leaves the circulation quickly.",
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
      }
    ],
    ...META,
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
    title: "Chest pain and light-headed after a spray",
    stem: "A 69-year-old man presents to the emergency department with 90 minutes of crushing chest pain and nausea. He has diabetes treated with metformin and he smokes. Paramedics gave him ASA 160 mg and one spray of nitroglycerin, after which he became light-headed. He is pale and clammy. His neck veins are distended and his lungs are clear. The ECG shows ST elevation in II, III and aVF, greater in III than in II, with ST depression in I and aVL. Your hospital has a cardiac catheterization laboratory.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "58/minute",
      resp: "20/minute",
      bp: "78/50 mmHg",
      o2sat: "96% on room air",
      weight: "84 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional ECG leads would best confirm the suspected complication of this infarct?",
        options: [
          "Lewis lead configuration",
          "Posterior leads V7 to V9",
          "Repeat standard leads in 1 hour",
          "Right-sided lead V4R",
          "Signal-averaged ECG"
        ],
        correct: 3,
        explanation: "Inferior ST elevation greater in III than in II, hypotension after nitroglycerin, distended neck veins and clear lungs suggest right ventricular infarction. ST elevation of 1 mm or more in right-sided lead V4R confirms it, and the guideline recommends right-sided leads in inferior infarction. Posterior leads V7 to V9 detect posterior infarction. A Lewis lead helps find atrial activity. A repeat in 1 hour delays the answer, and signal averaging has no role.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "esc-acs"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his hypotension with clear lungs and distended neck veins?",
        options: [
          "Anterior wall infarction",
          "Papillary muscle rupture",
          "Pulmonary edema from LV failure",
          "Right ventricular infarction",
          "Ventricular septal rupture"
        ],
        correct: 3,
        explanation: "An infarcted right ventricle cannot pump enough blood through the lungs to fill the left ventricle, so the neck veins are full while the lungs stay clear. The drop in pressure after nitroglycerin shows how much he depends on preload. Left ventricular failure, papillary muscle rupture and septal rupture cause pulmonary edema, and the last two usually appear days after the infarct with a new murmur. His ECG shows an inferior, not an anterior, infarct.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "esc-acs"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for his hypotension?",
        options: [
          "Crystalloid bolus of 500 mL IV",
          "furosemide 40 mg IV",
          "morphine 5 mg IV",
          "nitroglycerin infusion IV",
          "norepinephrine before any fluid"
        ],
        correct: 0,
        explanation: "Right ventricular infarction is preload dependent, so hypotension with clear lungs is treated first with a crystalloid bolus, with reassessment, while he goes for reperfusion. Nitrates and diuretics lower preload and worsen hypotension. Morphine can also drop the pressure. A vasopressor or inotrope is added if pressure stays low after fluid, not before it.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "esc-acs"
      }
    ],
    sources: [
      {
        id: "esc-acs",
        citation: "Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023."
      }
    ],
    ...META,
  },
  {
    id: "shock-36",
    topic: "shock",
    title: "Older woman who is slow and dizzy",
    stem: "A 79-year-old woman is brought to the emergency department from home with 2 days of weakness and dizziness. She has had diarrhea for 4 days and has eaten little. She has hypertension, heart failure and chronic kidney disease. She takes metoprolol 100 mg twice daily, ramipril 10 mg daily and spironolactone 25 mg daily, and she has taken no extra tablets. She is drowsy but rousable. Her mucous membranes are dry. Potassium 6.4 mmol/L, creatinine 248 umol/L (baseline 130), bicarbonate 18 mmol/L. The ECG shows a junctional bradycardia at 34/minute with a narrow QRS and no ST elevation.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "34/minute",
      resp: "18/minute",
      bp: "74/40 mmHg",
      o2sat: "95% on room air",
      weight: "62 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her bradycardia and shock?",
        options: [
          "Acute inferior myocardial infarction",
          "Hyperkalemia with AV nodal blockade",
          "Myxedema crisis from hypothyroidism",
          "Overdose of her metoprolol",
          "Sick sinus syndrome progression"
        ],
        correct: 1,
        explanation: "Diarrhea has caused volume loss and acute kidney injury, and with ramipril and spironolactone her potassium has risen to 6.4 mmol/L. Moderate hyperkalemia and an AV nodal blocker act together to cause severe bradycardia, which lowers kidney perfusion further. This cycle is called BRASH syndrome. There is no history of taking extra tablets. Her ECG shows no ST elevation, and nothing in the case suggests hypothyroidism or prior sinus node disease.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "brash"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication for this patient?",
        options: [
          "calcium gluconate 3 g IV",
          "glucagon 5 mg IV",
          "insulin 10 units IV alone",
          "patiromer 8.4 g PO",
          "salbutamol 10 mg nebulized"
        ],
        correct: 0,
        explanation: "IV calcium is the first treatment in BRASH syndrome because it stabilizes the myocardium and often improves the heart rate within minutes. Insulin lowers potassium but must be given with dextrose to avoid hypoglycemia, and it does not act as fast as calcium on the heart. Patiromer acts over hours. Salbutamol lowers potassium but is not the first step in a patient with a pulse of 34/minute and shock. Glucagon is for beta-blocker overdose, and she has taken her usual doses.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "brash"
      },
      {
        id: "q3",
        kind: "single",
        update: "After calcium and a 500 mL crystalloid bolus, her pulse is 40/minute and BP is 78/42 mmHg.",
        prompt: "Which of the following agents is most appropriate to start next for her shock?",
        options: [
          "dobutamine infusion",
          "epinephrine infusion",
          "milrinone infusion",
          "phenylephrine infusion",
          "vasopressin infusion"
        ],
        correct: 1,
        explanation: "Epinephrine raises heart rate and blood pressure and also shifts potassium into cells, so it treats several parts of BRASH syndrome at once. Phenylephrine and vasopressin raise vascular resistance without increasing the heart rate. Milrinone and dobutamine cause vasodilation, which risks lowering her pressure further.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "brash"
      }
    ],
    sources: [
      {
        id: "brash",
        citation: "Farkas JD, Long B, Koyfman A, Menson K. BRASH syndrome. Bradycardia, renal failure, AV blockade, shock, and hyperkalemia. J Emerg Med. 2020."
      }
    ],
    ...META,
  },
  {
    id: "shock-37",
    topic: "shock",
    title: "Man with cirrhosis vomiting blood",
    stem: "A 58-year-old man is brought to the emergency department by ambulance after vomiting about 500 mL of bright red blood twice this morning. He has alcohol-related cirrhosis and drinks daily. He takes no medications. He is pale, jaundiced and drowsy. He has spider angiomas, a distended abdomen with shifting dullness and a palpable spleen tip. Hemoglobin 72 g/L, platelets 64 x 10^9/L, INR 1.9, albumin 26 g/L, bilirubin 68 umol/L, creatinine 104 umol/L.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "122/minute",
      resp: "22/minute",
      bp: "86/54 mmHg",
      o2sat: "96% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following medications are most appropriate to start before his endoscopy?",
        options: [
          "albumin 25% 100 mL IV",
          "ceftriaxone 1 g IV",
          "Frozen plasma 15 mL/kg IV",
          "furosemide 40 mg IV",
          "octreotide 50 mcg IV then infusion",
          "Platelets, one adult dose",
          "propranolol 40 mg PO"
        ],
        select: 2,
        correct: [
          1,
          4
        ],
        explanation: "Suspected variceal bleeding in cirrhosis calls for a vasoactive drug such as octreotide as soon as possible, and for antibiotic prophylaxis such as ceftriaxone 1 g every 24 hours, which lowers infection, rebleeding and death. Frozen plasma is not recommended to correct the INR, which poorly reflects bleeding risk in cirrhosis and adds volume that raises portal pressure. A nonselective beta-blocker such as propranolol is held during acute bleeding with hypotension. Furosemide worsens shock. Albumin and platelets are not part of the initial treatment of variceal bleeding.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "baveno"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following hemoglobin ranges should his red cell transfusions aim to reach?",
        options: [
          "50 to 60 g/L",
          "70 to 80 g/L",
          "90 to 100 g/L",
          "110 to 120 g/L",
          "130 to 140 g/L"
        ],
        correct: 1,
        explanation: "A restrictive strategy, transfusing at about 70 g/L to a target of 70 to 80 g/L, is recommended in variceal bleeding. Transfusing to higher levels raises portal pressure and increases rebleeding and death. A range of 50 to 60 g/L leaves an actively bleeding patient with too little oxygen carrying capacity. Ranges from 90 g/L upward over-transfuse him.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "baveno"
      },
      {
        id: "q3",
        kind: "single",
        update: "Endoscopy fails to control bleeding from a large esophageal varix. He is on octreotide and has received 4 units of red cells.",
        prompt: "Which of the following is the most appropriate rescue treatment while definitive therapy is arranged?",
        options: [
          "Balloon tamponade as a bridge to TIPS",
          "Double the octreotide infusion rate",
          "Frozen plasma to correct the INR",
          "Oral propranolol loading dose",
          "Transfusion to hemoglobin 120 g/L"
        ],
        correct: 0,
        explanation: "When endoscopic therapy fails, balloon tamponade, kept in place for no more than 24 hours, or an esophageal stent can control bleeding as a bridge to a transjugular intrahepatic portosystemic shunt (TIPS). Increasing octreotide beyond the standard dose is not an effective rescue. Frozen plasma and a hemoglobin of 120 g/L raise portal pressure. Propranolol would worsen shock in active bleeding.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "baveno"
      }
    ],
    sources: [
      {
        id: "baveno",
        citation: "de Franchis R, et al. Baveno VII. Renewing consensus in portal hypertension. J Hepatol. 2022."
      }
    ],
    ...META,
  },
  {
    id: "shock-38",
    topic: "shock",
    title: "Feverish baby who will not feed",
    stem: "You are working in a rural hospital emergency department. The nearest pediatric intensive care unit is 3 hours away by transfer. A 7-week-old girl is brought in with fever since last night and poor feeding. She has had one wet diaper today. She is lethargic with a weak cry. Her hands and feet are cool and mottled. Capillary refill is 4 seconds. The fontanelle is flat. Two IV attempts fail, and an intraosseous needle is placed in the tibia.",
    vitals: {
      temperature: "38.9°C rectal",
      pulse: "204/minute",
      resp: "58/minute",
      bp: "74/40 mmHg",
      o2sat: "95% on room air",
      weight: "4.6 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing for her first antibiotic dose?",
        options: [
          "After a lumbar puncture",
          "After the chest X-ray",
          "After transfer to the PICU",
          "After urine by catheter",
          "Now, through the IO needle"
        ],
        correct: 4,
        explanation: "She is in septic shock, and the guideline recommends antibiotics as soon as possible, within 1 hour of recognition. Blood culture can be drawn from the intraosseous needle first if it causes no delay. A lumbar puncture is unsafe in a child in shock and should be deferred rather than delay treatment. Waiting for a chest X-ray, a catheter urine or a 3 hour transfer delays a time critical treatment.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc-peds"
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives two 10 mL/kg boluses of balanced crystalloid. Her pulse is 188/minute and capillary refill is 3 seconds.",
        prompt: "Which of the following findings should lead you to stop giving further fluid boluses?",
        options: [
          "Capillary refill of 3 seconds",
          "Heart rate still 188/minute",
          "Lactate of 3 mmol/L",
          "New crackles and liver enlargement",
          "Urine output of 1 mL/kg/hour"
        ],
        correct: 3,
        explanation: "Fluid is given in 10 to 20 mL/kg boluses with reassessment after each, and boluses stop when signs of fluid overload appear, such as crackles or an enlarging liver. Ongoing tachycardia, a capillary refill of 3 seconds and a lactate of 3 mmol/L show continuing shock and are reasons to reassess, not signs of overload. A urine output of 1 mL/kg/hour shows improving perfusion.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "ssc-peds"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 40 mL/kg she remains mottled with a pulse of 196/minute. You start epinephrine. The transport team is 3 hours away.",
        prompt: "Which of the following routes is most appropriate for her epinephrine infusion at this time?",
        options: [
          "Femoral central line only",
          "Intraosseous needle already placed",
          "Subcutaneous infusion",
          "Umbilical venous catheter",
          "Wait for transport team access"
        ],
        correct: 1,
        explanation: "The guideline suggests starting vasoactive infusions through peripheral access, or an intraosseous needle already in place, rather than delaying until a central line is placed. Her intraosseous needle is already working. Waiting 3 hours for the transport team prolongs shock. A femoral central line is difficult in a small infant and should not delay treatment. The umbilical vein closes in the first weeks of life, so it is not usable at 7 weeks. Subcutaneous epinephrine is not absorbed reliably in shock.",
        keyFeature: {
          topic: "shock",
          n: 7
        },
        source: "ssc-peds"
      }
    ],
    sources: [
      {
        id: "ssc-peds",
        citation: "Weiss SL, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Intensive Care Med. 2026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/41870559/"
      }
    ],
    ...META,
  },
  {
    id: "shock-39",
    topic: "shock",
    title: "Light-headed after two days of vomiting",
    stem: "A 34-year-old woman presents to the emergency department with light-headedness and a near faint when she stood up this morning. She has had vomiting and watery diarrhea for 2 days, and her partner has the same illness. She has obstructive hypertrophic cardiomyopathy and takes metoprolol 50 mg PO twice daily, but she has vomited her last three doses. A clinic letter from last year records a resting outflow gradient of 40 mmHg. She takes no other medications. Her mucous membranes are dry. A harsh grade 3/6 systolic murmur is heard at the left lower sternal border. Her lungs are clear. Her ECG shows sinus tachycardia with left ventricular hypertrophy.",
    vitals: {
      temperature: "37.3°C oral",
      pulse: "118/minute",
      resp: "20/minute",
      bp: "82/50 mmHg",
      o2sat: "98% on room air",
      weight: "62 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Bedside ultrasound shows a small, vigorously contracting left ventricle with systolic anterior motion of the mitral valve. The right ventricle is normal, there is no pericardial effusion and the IVC is collapsed.",
        prompt: "Which of the following best explains the severity of her hypotension?",
        options: [
          "Acute adrenal insufficiency",
          "Beta blocker toxicity",
          "Cardiac tamponade",
          "Dynamic outflow tract obstruction",
          "Left ventricular systolic failure"
        ],
        correct: 3,
        explanation: "Systolic anterior motion of the mitral valve in a small, hyperdynamic left ventricle shows dynamic outflow tract obstruction. Two days of vomiting and diarrhea have left her ventricle underfilled, and a smaller cavity narrows the outflow tract, so her known 40 mmHg gradient can rise sharply and cardiac output falls. A pulse of 118/minute shortens filling and adds to the obstruction. The vigorous contraction excludes systolic failure, and there is no effusion to cause tamponade. She has vomited her metoprolol and is tachycardic, which does not fit beta blocker toxicity. She takes no steroids, and nothing in her history points to adrenal disease.",
        keyFeature: { topic: "shock", n: 5 },
        source: "ommen-hcm"
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives 2 L of Ringer's lactate. Her BP is 84/52 mmHg, her pulse is 112/minute and the murmur is unchanged.",
        prompt: "Which of the following vasopressors is most appropriate for her now?",
        options: [
          "dobutamine infusion",
          "dopamine infusion",
          "epinephrine infusion",
          "norepinephrine infusion",
          "phenylephrine infusion"
        ],
        correct: 4,
        explanation: "In obstructive hypertrophic cardiomyopathy with hypotension that has not responded to fluid, the AHA and ACC recommend IV phenylephrine or another vasoconstrictor without inotropic activity. Raising afterload widens the outflow tract and lowers the gradient, and phenylephrine does not make the ventricle contract harder. Norepinephrine, epinephrine and dopamine all have beta-1 inotropic and chronotropic effects that can worsen the obstruction and her tachycardia. Dobutamine is an inotrope that also lowers vascular resistance, so it would deepen both the obstruction and the hypotension.",
        keyFeature: { topic: "shock", n: 7 },
        source: "ommen-hcm"
      },
      {
        id: "q3",
        kind: "single",
        update: "On phenylephrine and a third litre of fluid, her BP is 104/64 mmHg and her pulse is 108/minute in sinus rhythm. Her vomiting has settled and she can swallow tablets.",
        prompt: "Which of the following medications is most appropriate to give her now?",
        options: [
          "amiodarone 150 mg IV",
          "digoxin 0.25 mg IV",
          "furosemide 20 mg IV",
          "metoprolol 25 mg PO",
          "verapamil 5 mg IV"
        ],
        correct: 3,
        explanation: "Her tachycardia shortens diastolic filling and worsens the obstruction, and she has missed three doses of metoprolol. A beta blocker is first line in obstructive hypertrophic cardiomyopathy, and the AHA and ACC support one alongside phenylephrine for acute hypotension, so restarting metoprolol at a lower dose is appropriate now that she can swallow. The guideline lists verapamil as potentially harmful in obstructive disease with hypotension, because its vasodilating effect can raise the gradient. Digoxin increases contractility and furosemide reduces preload, and both can worsen obstruction. She is in sinus rhythm, so amiodarone has no arrhythmia to treat.",
        keyFeature: { topic: "shock", n: 8 },
        source: "ommen-hcm"
      }
    ],
    sources: [
      {
        id: "ommen-hcm",
        citation: "Ommen SR, Ho CY, Asif IM, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR guideline for the management of hypertrophic cardiomyopathy. Circulation. 2024.",
        url: "https://doi.org/10.1161/CIR.0000000000001250"
      }
    ],
    ...META,
  },
  {
    id: "shock-40",
    topic: "shock",
    title: "Young man stabbed in the abdomen",
    stem: "A 23-year-old man is brought to the emergency department by ambulance 25 minutes after being stabbed in the left upper abdomen. Paramedics gave 1 L of crystalloid. He takes no medications. He is agitated and cold to touch. There is a 3 cm wound below the left costal margin with omentum protruding. His chest is clear with equal air entry. He has no head injury. POCUS shows free fluid in the left upper quadrant. The massive hemorrhage protocol is activated and the operating room is being prepared.",
    vitals: {
      temperature: "35.4°C tympanic",
      pulse: "138/minute",
      resp: "28/minute",
      bp: "74/48 mmHg",
      o2sat: "97% on room air",
      weight: "75 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following systolic pressure targets is most appropriate until his bleeding is controlled?",
        options: [
          "60 to 70 mmHg",
          "80 to 90 mmHg",
          "100 to 110 mmHg",
          "120 to 130 mmHg",
          "140 to 150 mmHg"
        ],
        correct: 1,
        explanation: "Without a brain injury, the guideline recommends a target systolic pressure of 80 to 90 mmHg until major bleeding is stopped. This restricted volume approach limits further bleeding and dilution of clotting factors. He has no head injury, which would call for a higher mean pressure. A target of 60 to 70 mmHg risks organ ischemia, and targets of 100 mmHg or more encourage bleeding from the injured vessels.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "euro-bleed"
      },
      {
        id: "q2",
        kind: "single",
        update: "He has received 6 units of red cells and 6 units of plasma. Ionized calcium is 0.82 mmol/L.",
        prompt: "Which of the following is the most appropriate treatment for this laboratory result?",
        options: [
          "calcium chloride 1 g IV",
          "magnesium sulfate 2 g IV",
          "potassium chloride 10 mmol IV",
          "sodium bicarbonate 50 mmol IV",
          "vitamin K 10 mg IV"
        ],
        correct: 0,
        explanation: "Citrate in stored blood products binds calcium, and low ionized calcium impairs clotting and cardiac contraction. The guideline recommends monitoring ionized calcium during massive transfusion and keeping it in the normal range. His level of 0.82 mmol/L is well below normal, so he needs IV calcium. Bicarbonate is not recommended to correct acidosis from hypoperfusion. Magnesium and potassium do not correct his calcium. He takes no warfarin, so vitamin K has no role.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "euro-bleed"
      },
      {
        id: "q3",
        kind: "menu",
        update: "His temperature is now 34.9°C. Fibrinogen is 1.1 g/L. He is on his way to the operating room.",
        prompt: "Which of the following measures are most appropriate to treat his developing coagulopathy?",
        options: [
          "Active warming of patient and products",
          "Crystalloid to a normal pressure",
          "desmopressin 0.3 mcg/kg IV",
          "Fibrinogen replacement",
          "hydroxyethyl starch 500 mL IV",
          "Recombinant factor VIIa",
          "vitamin K 10 mg IV"
        ],
        select: 2,
        correct: [
          0,
          3
        ],
        explanation: "Hypothermia slows clotting enzymes, so the guideline recommends early measures to reduce heat loss and to warm the patient and all fluids. A fibrinogen of 1.1 g/L is below the treatment threshold of 1.5 g/L, so he needs fibrinogen concentrate or cryoprecipitate. Crystalloid and starch dilute clotting factors, and starch impairs clot formation. Recombinant factor VIIa is not a first-line treatment. Desmopressin is for platelet dysfunction or von Willebrand disease, and vitamin K reverses warfarin, which he does not take.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "euro-bleed"
      }
    ],
    sources: [
      {
        id: "euro-bleed",
        citation: "Rossaint R, et al. The European guideline on management of major bleeding and coagulopathy following trauma. Sixth edition. Crit Care. 2023.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/"
      }
    ],
    ...META,
  },
  {
    id: "shock-41",
    topic: "shock",
    title: "Confused older man with rigors",
    stem: "An 83-year-old man is brought to the emergency department from his retirement home because he is confused and had rigors this morning. He has had right upper abdominal pain for 2 days. He has gallstones and declined surgery last year. He takes amlodipine and atorvastatin. He is jaundiced and tender in the right upper quadrant. Bilirubin 92 umol/L, ALP 410 units/L, ALT 240 units/L, WBC 18.8 x 10^9/L, platelets 88 x 10^9/L, creatinine 150 umol/L, INR 1.2, lactate 4.1 mmol/L.",
    vitals: {
      temperature: "38.6°C oral",
      pulse: "116/minute",
      resp: "24/minute",
      bp: "82/44 mmHg",
      o2sat: "94% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside ultrasound findings would best support the suspected source of his sepsis?",
        options: [
          "B lines in both lungs",
          "Dilated common bile duct",
          "Free fluid in the pelvis",
          "Pericardial effusion",
          "Right hydronephrosis"
        ],
        correct: 1,
        explanation: "Fever with rigors, jaundice and right upper quadrant pain in a patient with gallstones suggest acute cholangitis. A dilated common bile duct on ultrasound shows biliary obstruction and supports the diagnosis. Hydronephrosis would point to an obstructed urinary source instead. B lines, free pelvic fluid and a pericardial effusion do not identify a biliary source.",
        keyFeature: {
          topic: "shock",
          n: 6
        },
        source: "tg18"
      },
      {
        id: "q2",
        kind: "menu",
        update: "After 2 L of crystalloid his BP is 84/46 mmHg and norepinephrine is started.",
        prompt: "Which of the following findings in this patient meet the criteria for severe (grade III) acute cholangitis?",
        options: [
          "Acute confusion",
          "Age of 83 years",
          "Bilirubin of 92 umol/L",
          "Creatinine of 150 umol/L",
          "Hypotension on norepinephrine",
          "Platelets of 88 x 10^9/L",
          "Temperature of 38.6°C",
          "WBC of 18.8 x 10^9/L"
        ],
        select: 3,
        correct: [
          0,
          4,
          5
        ],
        explanation: "Severe cholangitis is defined by dysfunction of at least one organ system. His confusion (neurological), hypotension that needs norepinephrine (cardiovascular) and platelets below 100 x 10^9/L (hematological) each qualify. Age of 75 or more, a WBC above 12 x 10^9/L and a bilirubin of about 86 umol/L or more are criteria for moderate, not severe, disease. His temperature is below the moderate threshold of 39°C. His creatinine of 150 umol/L is below the severe renal threshold of about 177 umol/L (2.0 mg/dL).",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "tg18"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important step to control the source of his sepsis?",
        options: [
          "Antibiotics alone for 14 days",
          "Elective cholecystectomy in 6 weeks",
          "Emergency open cholecystectomy",
          "Hepatobiliary scan confirmation",
          "Urgent endoscopic biliary drainage"
        ],
        correct: 4,
        explanation: "Severe cholangitis needs antibiotics, organ support and urgent biliary drainage, usually by endoscopic retrograde cholangiopancreatography, once initial resuscitation is under way. Antibiotics alone do not relieve an obstructed, infected duct. Cholecystectomy removes the gallbladder, not the stone in the duct, and emergency open surgery carries a high risk in this unstable older man. A hepatobiliary scan delays drainage and adds nothing to his ultrasound findings.",
        keyFeature: {
          topic: "shock",
          n: 4
        },
        source: "tg18"
      }
    ],
    sources: [
      {
        id: "tg18",
        citation: "Miura F, et al. Tokyo Guidelines 2018. Initial management of acute biliary infection and flowchart for acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
      }
    ],
    ...META,
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
    title: "Older woman with sudden palpitations",
    stem: "A 72-year-old woman presents to the emergency department with palpitations and breathlessness that began suddenly 3 hours ago. She has hypertension treated with hydrochlorothiazide. She has never had palpitations before. She is pale, sweaty and confused. Crackles are heard at both lung bases. The ECG shows atrial fibrillation with a ventricular rate of 172/minute, a narrow QRS and no ST elevation. Potassium 4.0 mmol/L.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "172/minute irregular",
      resp: "30/minute",
      bp: "76/44 mmHg",
      o2sat: "89% on room air",
      weight: "68 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best shows that her arrhythmia is causing hemodynamic instability?",
        options: [
          "Confusion and hypotension",
          "Hydrochlorothiazide for hypertension",
          "Narrow QRS on the ECG",
          "Onset 3 hours before arrival",
          "Potassium of 4.0 mmol/L"
        ],
        correct: 0,
        explanation: "Confusion with a BP of 76/44 mmHg, along with crackles and an O2 sat of 89%, shows that the rapid rate is causing shock and pulmonary edema. These signs of instability decide the treatment. A narrow QRS and a potassium of 4.0 mmol/L describe the rhythm and her chemistry, not her stability. The time of onset matters for stroke risk in a stable patient, not for instability. Her diuretic does not show instability.",
        keyFeature: {
          topic: "shock",
          n: 1
        },
        source: "ccs-af"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment for this patient?",
        options: [
          "amiodarone 150 mg IV",
          "Crystalloid 1 L IV bolus",
          "diltiazem 20 mg IV",
          "metoprolol 5 mg IV",
          "Synchronized cardioversion"
        ],
        correct: 4,
        explanation: "Atrial fibrillation with hemodynamic instability, here shock and pulmonary edema, calls for urgent synchronized electrical cardioversion. Diltiazem and metoprolol lower blood pressure and depress contractility, which can worsen her shock. Amiodarone acts too slowly to be the first treatment for an unstable patient. A litre of fluid would worsen her pulmonary edema and does not treat the cause.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "ccs-af"
      },
      {
        id: "q3",
        kind: "single",
        update: "Two synchronized shocks restore sinus rhythm briefly, but atrial fibrillation at 160/minute returns. Her BP is 82/48 mmHg.",
        prompt: "Which of the following drugs is most appropriate to control her rate at this point?",
        options: [
          "amiodarone 150 mg IV",
          "diltiazem 0.25 mg/kg IV",
          "metoprolol 5 mg IV",
          "procainamide 1 g IV",
          "verapamil 5 mg IV"
        ],
        correct: 0,
        explanation: "In atrial fibrillation with hypotension and heart failure, IV amiodarone can slow the rate with less effect on blood pressure than other agents, and it may help sinus rhythm return. Diltiazem and verapamil are calcium channel blockers that depress contractility and lower pressure, so they are avoided in decompensated heart failure. Metoprolol also lowers pressure in shock. Procainamide causes hypotension and is avoided in heart failure.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "ccs-af"
      }
    ],
    sources: [
      {
        id: "ccs-af",
        citation: "Andrade JG, et al. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society comprehensive guidelines for the management of atrial fibrillation. Can J Cardiol. 2020."
      }
    ],
    ...META,
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
    title: "Toddler with bloody vomit and diarrhea",
    stem: "A 3-year-old boy is brought to the emergency department 5 hours after he was found with an open bottle of his mother's ferrous sulfate 300 mg tablets. Each tablet contains 60 mg of elemental iron. About 12 tablets are missing. He has vomited several times with streaks of blood and has had bloody diarrhea. He is drowsy and pale. His hands and feet are cool, and capillary refill is 4 seconds. Venous pH 7.18, bicarbonate 11 mmol/L, glucose 9.8 mmol/L. An abdominal X-ray shows several radiopaque tablets in the stomach.",
    vitals: {
      temperature: "37.2°C tympanic",
      pulse: "164/minute",
      resp: "34/minute",
      bp: "80/44 mmHg",
      o2sat: "98% on room air",
      weight: "15 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best estimate of the elemental iron he has ingested?",
        options: [
          "4 mg/kg",
          "20 mg/kg",
          "24 mg/kg",
          "48 mg/kg",
          "240 mg/kg"
        ],
        correct: 3,
        explanation: "Twelve tablets of 60 mg elemental iron are 720 mg, and 720 / 15 kg = 48 mg/kg. Serious toxicity is expected above about 60 mg/kg, but his shock, acidosis and bloody losses show that he is already severely poisoned, and the tablet count is only an estimate. A figure of 240 mg/kg uses the 300 mg salt weight instead of elemental iron. A figure of 24 mg/kg counts only half the tablets. Figures of 4 and 20 mg/kg are the elemental and salt content of a single tablet per kilogram.",
        keyFeature: {
          topic: "shock",
          n: 5
        },
        source: "iron"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following antidotes is most appropriate for his poisoning?",
        options: [
          "activated charcoal 15 g PO",
          "deferoxamine 15 mg/kg/hour IV",
          "N-acetylcysteine IV",
          "penicillamine 10 mg/kg PO",
          "succimer 10 mg/kg PO"
        ],
        correct: 1,
        explanation: "Shock, metabolic acidosis and lethargy after iron ingestion are indications for IV deferoxamine, started at 15 mg/kg/hour. Deferoxamine binds free iron to form ferrioxamine, which is excreted in the urine. Activated charcoal does not bind iron. Succimer and penicillamine are oral chelators for lead and copper and have no role in acute iron poisoning. N-acetylcysteine treats acetaminophen poisoning.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "iron"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial fluid bolus for this child?",
        options: [
          "albumin 25% 75 mL IV",
          "dextrose 5% in water 300 mL IV",
          "normal saline 300 mL IV",
          "0.45% saline 300 mL IV",
          "sodium bicarbonate 15 mmol IV"
        ],
        correct: 2,
        explanation: "Iron corrodes the gut and causes large fluid and blood losses, so his cool hands, capillary refill of 4 seconds and pulse of 164/minute call for an isotonic bolus of 20 mL/kg: 20 x 15 kg = 300 mL, repeated as needed. Restoring perfusion also helps clear his acidosis. Sodium bicarbonate does not restore volume and does not treat the cause of the acidosis. Dextrose 5% in water and 0.45% saline are hypotonic and leave the circulation. Albumin 25% offers no advantage over isotonic saline.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "iron"
      },
      {
        id: "q4",
        kind: "single",
        update: "After two saline boluses and the start of deferoxamine, his pulse is 126/minute, BP is 98/60 mmHg and capillary refill is 2 seconds. He is awake, has stopped vomiting and passes no more blood. A repeat X-ray still shows tablets.",
        prompt: "Which of the following methods of gut decontamination is most appropriate for this child now?",
        options: [
          "Activated charcoal 1 g/kg",
          "Gastric lavage with bicarbonate",
          "Ipecac-induced vomiting",
          "Whole bowel irrigation with PEG",
          "No gut decontamination"
        ],
        correct: 3,
        explanation: "Radiopaque tablets that remain in the gut after a toxic iron ingestion are an indication for whole bowel irrigation with polyethylene glycol solution, usually by nasogastric tube, to clear them before more iron is absorbed. It is contraindicated while a patient is hemodynamically unstable, has significant gastrointestinal bleeding or cannot protect his airway, which is why it waits until he is resuscitated and awake. Activated charcoal does not bind iron. Lavage with bicarbonate is no longer recommended and tablets are often too large to pass through a lavage tube. Ipecac delays other treatment and is not recommended. Leaving visible tablets in the gut allows ongoing absorption.",
        keyFeature: {
          topic: "shock",
          n: 8
        },
        source: "opc-wbi"
      }
    ],
    sources: [
      {
        id: "iron",
        citation: "Chang TP, Rangan C. Iron poisoning. A literature-based review of epidemiology, diagnosis, and management. Pediatr Emerg Care. 2011.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21975503/"
      },
      {
        id: "opc-wbi",
        citation: "Ontario Poison Centre. Whole bowel irrigation protocol. 2025.",
        url: "https://www.ontariopoisoncentre.ca/siteassets/pdfs/english/patient-care-resources-documents/whole-bowel-irrigation-protocol-feb-2025.pdf"
      }
    ],
    ...META,
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
        source: "rosen"
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
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."
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
    title: "Woman with epigastric pain and vomiting",
    stem: "A 52-year-old woman presents to the emergency department with 12 hours of severe epigastric pain radiating to her back, with repeated vomiting. She has known gallstones and takes no medications. She is uncomfortable and her mucous membranes are dry. Her epigastrium is tender with guarding. Lipase 2 840 units/L, hematocrit 0.49, urea 11.2 mmol/L, creatinine 118 umol/L, calcium 2.08 mmol/L. A chest X-ray is clear.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "116/minute",
      resp: "22/minute",
      bp: "102/64 mmHg",
      o2sat: "96% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following results best indicates that she has lost significant intravascular volume?",
        options: [
          "Calcium of 2.08 mmol/L",
          "Chest X-ray that is clear",
          "Lipase of 2 840 units/L",
          "Raised hematocrit of 0.49",
          "Temperature of 37.8°C"
        ],
        correct: 3,
        explanation: "A hematocrit of 0.49 in a woman shows hemoconcentration from fluid lost into the retroperitoneum and from vomiting. Hemoconcentration and a rising urea are also markers of more severe pancreatitis. The lipase level confirms the diagnosis but does not reflect severity or volume. A calcium of 2.08 mmol/L is mildly low and relates to fat necrosis, not volume. A clear chest X-ray and a temperature of 37.8°C say nothing about her volume.",
        keyFeature: {
          topic: "shock",
          n: 2
        },
        source: "rosen"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following initial Ringer's lactate orders for her is best supported by current trial evidence?",
        options: [
          "350 mL bolus, then 70 mL/hour",
          "700 mL bolus, then 105 mL/hour",
          "1 400 mL bolus, then 210 mL/hour",
          "2 100 mL bolus, then 350 mL/hour",
          "2 800 mL bolus, then 280 mL/hour"
        ],
        correct: 1,
        explanation: "In the WATERFALL trial, moderate resuscitation with Ringer's lactate, a 10 mL/kg bolus for hypovolemia and then 1.5 mL/kg/hour, caused less fluid overload than aggressive resuscitation and no worse outcomes. For 70 kg that is 700 mL, then 105 mL/hour. The aggressive arm, a 20 mL/kg bolus then 3 mL/kg/hour, is 1 400 mL then 210 mL/hour, and it was stopped early for harm. Larger volumes carry even more risk, and 350 mL then 70 mL/hour under-treats her hypovolemia.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "waterfall"
      },
      {
        id: "q3",
        kind: "single",
        update: "Twelve hours later her pulse is 92/minute and urine output is 0.8 mL/kg/hour. She is now short of breath with crackles at both bases.",
        prompt: "Which of the following is the most appropriate change to her fluid therapy now?",
        options: [
          "Add albumin 25% to her fluids",
          "Give a further 20 mL/kg bolus",
          "Increase to 3 mL/kg/hour",
          "Reduce or stop IV fluid and reassess",
          "Switch to hydroxyethyl starch"
        ],
        correct: 3,
        explanation: "Her pulse has settled and her urine output is above 0.5 mL/kg/hour, so her volume is restored, and new crackles show fluid overload. Fluids should be reduced or stopped and her breathing reassessed. More boluses or a higher rate would worsen pulmonary edema, the main harm seen with aggressive fluid in pancreatitis. Albumin and starch do not treat fluid overload, and starch harms the kidneys.",
        keyFeature: {
          topic: "shock",
          n: 3
        },
        source: "waterfall"
      }
    ],
    sources: [
      {
        id: "waterfall",
        citation: "de-Madaria E, et al. Aggressive or moderate fluid resuscitation in acute pancreatitis. N Engl J Med. 2022."
      },
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023."
      }
    ],
    ...META,
  },
];
