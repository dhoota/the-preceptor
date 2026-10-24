// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  jackman: { id: "jackman-groin-pwid", citation: "Jackman J, Guthrie GJK, Suttie SA. The groin and people who inject drugs: management and pitfalls. Br J Hosp Med (Lond). 2026.", url: "https://www.imrpress.com/journal/BJHM/87/5/10.31083/BJHM54135" },
  wellsDvt: { id: "wells-dvt-2003", citation: "Wells PS, Anderson DR, Rodger M, and colleagues. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003." },
  tcDvtDx: { id: "tc-dvt-dx", citation: "Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf" },
  tcProph: { id: "tc-preg-prophylaxis", citation: "Thrombosis Canada. Clinical guide: pregnancy, thromboprophylaxis. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/THROMBOPROPHYLAXISINPREGNANCY_43.pdf" },
  ppcm: { id: "hfa-ppcm-2019", citation: "Bauersachs J, and colleagues. Pathophysiology, diagnosis and management of peripartum cardiomyopathy: a position statement from the Heart Failure Association of the European Society of Cardiology Study Group on peripartum cardiomyopathy. Eur J Heart Fail. 2019." },
  abm: { id: "abm-protocol-31", citation: "Mitchell KB, Fleming MM, Anderson PO, Giesbrandt JG, Academy of Breastfeeding Medicine. ABM clinical protocol 31: radiology and nuclear medicine studies in lactating women. Breastfeed Med. 2019.", url: "https://www.bfmed.org/assets/DOCUMENTS/PROTOCOLS/Protocol%20%2331%20-%20English%20Translation.pdf" },
  tcPregTx: { id: "tc-preg-vte-tx", citation: "Thrombosis Canada. Clinical guide: pregnancy, venous thromboembolism treatment. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf" },
  tcPeDx: { id: "tc-pe-dx", citation: "Thrombosis Canada. Clinical guide: pulmonary embolism (PE) diagnosis. 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf" },
  biss: { id: "biss-peds-pe-2009", citation: "Biss TT, Brandão LR, Kahr WH, Chan AK, Williams S. Clinical probability score and D-dimer estimation lack utility in the diagnosis of childhood pulmonary embolism. J Thromb Haemost. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19682234/" },
  wellsPe: { id: "wells-pe-2001", citation: "Wells PS, Anderson DR, Rodger M, and colleagues. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001." },
  tcApix: { id: "tc-apixaban", citation: "Thrombosis Canada. Clinical guide: apixaban (Eliquis). Version dated 2 June 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf" },
  bellou: { id: "bellou-outpatient-pe", citation: "Bellou E, Keramida E, Karampinis I, and colleagues. Outpatient treatment of pulmonary embolism. Breathe (Sheff). 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7792861/" },
} satisfies Record<string, Source>;

export const DVT_PE_S73: Samp[] = [
  /* 48 Whole leg swelling in a man who injects into the groin -------------- */
  {
    id: "dvt-pe-48",
    topic: "dvt-pe",
    title: "Swollen leg after months of groin injecting",
    stem:
      "A 46-year-old man presents to the emergency department with four days of aching and swelling in his left leg. He injects fentanyl daily and has done so for eight years. For the past six months he has injected into his left groin because he can no longer find veins in his arms or feet. He is on a waiting list for opioid agonist treatment. He has had cellulitis of both forearms in the past and drinks two beers most days. He has had no previous blood clot, surgery, leg injury or cancer. He sleeps at a shelter, has no phone and missed his last two clinic appointments. The whole left leg is swollen from the groin to the ankle, with pitting edema. The left calf is 4 cm larger than the right, and there is tenderness along the femoral vein. There are no dilated superficial veins. The right leg is normal.",
    vitals: { temperature: "37.1°C oral", pulse: "98/minute", resp: "16/minute", bp: "132/84 mmHg", o2sat: "97% on room air", weight: "71 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most increases his risk of deep vein thrombosis?",
        options: ["Daily alcohol use", "Femoral vein injection", "Fentanyl as the drug used", "Past forearm cellulitis", "Sleeping at a shelter"],
        correct: 1,
        explanation:
          "He has injected into his left groin for six months, and it is the left leg that is swollen. Repeated puncture of the femoral vein, with injection of irritant material, damages the vein and is a recognized cause of femoral DVT in people who inject drugs, who made up 48% of patients under 40 with DVT in one series. The route and site of injection matter more than the drug itself, so fentanyl is not the reason. Old forearm cellulitis does not explain a clot in the left femoral vein. Moderate alcohol use and sleeping at a shelter are not recognized risk factors for DVT.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "jackman-groin-pwid",
      },
      {
        id: "q2",
        kind: "single",
        update: "You examine his left groin, where there are many puncture marks.",
        prompt: "Which of the following additional findings would most suggest that the thrombosed femoral vein is infected?",
        options: ["Fever with rigors and a groin sinus", "Healed puncture scars at the groin", "Mild warmth of the swollen leg", "Pitting edema to the knee", "Tenderness along the femoral vein"],
        correct: 0,
        explanation:
          "Septic thrombophlebitis most often affects the large proximal veins of people who have injected frequently for a long time, and severe cases bring fever, chills, rigors and a draining sinus. Finding these changes the plan, because he would need blood cultures, CT or duplex imaging of the infected segment and IV antibiotics that cover Staphylococcus aureus as well as anticoagulation. Tenderness along the vein, pitting edema and mild warmth of the leg are expected with an uninfected DVT. Healed puncture scars only confirm where he injects.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "jackman-groin-pwid",
      },
      {
        id: "q3",
        kind: "single",
        update: "The rest of his examination is unremarkable. You judge DVT to be more likely than any other diagnosis.",
        prompt: "Which of the following is his two level Wells score for deep vein thrombosis?",
        options: ["1 point", "2 points", "3 points", "4 points", "5 points"],
        correct: 3,
        explanation:
          "He scores one point each for localized tenderness along the deep veins, swelling of the entire leg, calf swelling of 3 cm or more and pitting edema confined to the symptomatic leg, for 4 points. He has no active cancer, paralysis or cast, recent bed rest or surgery, collateral superficial veins or previous DVT, and no alternative diagnosis is as likely, so nothing is subtracted. Injecting drug use is not a Wells item, so the score can understate risk in this group. A score of 2 or more places him in the DVT likely category.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt-2003",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following ultrasound strategies is most appropriate for him, given his likelihood of returning for follow-up?",
        options: ["Bedside two point ultrasound only", "Proximal ultrasound, repeat in 5 to 7 days", "Proximal ultrasound, repeat in 2 weeks", "Proximal ultrasound, then D-dimer", "Whole leg compression ultrasound"],
        correct: 4,
        explanation:
          "With a likely pretest probability, Thrombosis Canada accepts either proximal or whole leg compression ultrasound as the first test. A negative proximal study must be followed by a D-dimer and a repeat scan in 5 to 7 days, to catch a calf clot that has extended. A negative whole leg study needs no D-dimer or repeat scan, which matters for a man with no phone who has missed appointments. A two point bedside scan is a proximal study with the same need for follow-up. A repeat at 2 weeks is later than the guide advises.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
    ],
    sources: [S.jackman, S.wellsDvt, S.tcDvtDx],
    ...META,
  },

  /* 49 Breathless sixteen days after an emergency caesarean ---------------- */
  {
    id: "dvt-pe-49",
    topic: "dvt-pe",
    title: "Breathless new mother",
    stem:
      "A 34-year-old woman presents to the emergency department 16 days after the birth of her first baby, with 12 hours of shortness of breath on climbing stairs and sharp pain under the left breast that is worse on deep breathing. After 20 hours of labour with an epidural, she had an emergency caesarean section for fetal distress. On day 3 she developed endometritis and received IV antibiotics for 48 hours. She is breastfeeding every 3 hours. Her blood pressure was normal throughout pregnancy. She has no previous VTE and takes only iron and a prenatal vitamin. Her lochia is light and her wound is healing well.",
    vitals: { temperature: "37.0°C oral", pulse: "106/minute", resp: "20/minute", bp: "124/78 mmHg", o2sat: "95% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of her history most increase her risk of venous thromboembolism?",
        options: ["Age of 34 at delivery", "Breastfeeding every 3 hours", "Emergency caesarean section", "Endometritis needing IV antibiotics", "Epidural analgesia in labour", "First pregnancy and birth"],
        select: 2,
        correct: [2, 3],
        explanation:
          "Thrombosis Canada lists emergency caesarean section and serious postpartum infection among the clinical risk factors for pregnancy-associated VTE, and she has both on top of the early postpartum period, when the daily risk of VTE is 15 to 35 times that of women who are not pregnant. An uncomplicated planned caesarean has not been linked to extra risk compared with vaginal birth, which is why the emergency setting matters. The age threshold the guide lists is 40 years, so 34 does not count. Epidural analgesia, breastfeeding and a first birth are not listed risk factors.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "tc-preg-prophylaxis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings would most suggest a diagnosis other than PE in her?",
        options: ["Bibasal crackles with an S3", "Loud pulmonary second sound", "Right ventricular heave", "Swollen tender left calf", "Tachycardia at rest"],
        correct: 0,
        explanation:
          "Crackles at both lung bases with a third heart sound point to left ventricular failure, and in the weeks after delivery that raises peripartum cardiomyopathy, which needs natriuretic peptides, an ECG and an echocardiogram. Breathlessness and leg swelling are common after birth, so this diagnosis is easily missed, and PE is its leading mimic. A loud pulmonary second sound and a right ventricular heave are signs of right heart strain that support PE. A swollen, tender calf suggests a DVT and also supports PE. Tachycardia at rest occurs in both conditions and does not separate them.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "hfa-ppcm-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "The rest of her examination is unremarkable. A CT pulmonary angiogram is booked. She asks whether she must stop breastfeeding after the scan.",
        prompt: "Which of the following is the most appropriate advice about breastfeeding after her contrast CT scan?",
        options: ["Express and discard milk for 12 hours", "Express and discard milk for 24 hours", "Feed only stored milk for 24 hours", "Formula feed for 48 hours", "No interruption to breastfeeding"],
        correct: 4,
        explanation:
          "Less than 1% of a maternal dose of IV iodinated contrast passes into breast milk, and less than 1% of that is absorbed from the infant's gut, so the infant's systemic dose is below 0.01% of the mother's. The Academy of Breastfeeding Medicine advises against interrupting breastfeeding after contrast CT. Expressing and discarding milk for 12 to 24 hours, feeding stored milk or switching to formula protects the baby from nothing and can upset her milk supply. Worry about breastfeeding should never delay the imaging she needs.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "abm-protocol-31",
      },
      {
        id: "q4",
        kind: "single",
        update: "Imaging confirms a left lower lobe segmental PE with a normal right ventricle. She starts weight-based LMWH and asks how long she will need treatment.",
        prompt: "Which of the following is the minimum total duration of anticoagulation for this postpartum PE?",
        options: ["Lifelong anticoagulation", "Six months in total", "Three months in total", "Twelve months in total", "Until 6 weeks after delivery"],
        correct: 2,
        explanation:
          "Thrombosis Canada advises at least 3 months of treatment in total for pregnancy-associated VTE, with treatment also continued for at least 6 weeks after delivery. Her PE began 16 days after birth, so stopping 6 weeks after delivery would give her less than 4 weeks of treatment, and the 3 month minimum is the longer of the two limits. A clot provoked by pregnancy, an emergency caesarean and infection does not call for 6 or 12 months, or lifelong treatment, as a minimum.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-vte-tx",
      },
    ],
    sources: [S.tcProph, S.ppcm, S.abm, S.tcPregTx],
    ...META,
  },

  /* 50 Pleuritic pain in a teenager after a fracture ------------------------ */
  {
    id: "dvt-pe-50",
    topic: "dvt-pe",
    title: "Teenager home from a ski trip",
    stem:
      "A 15-year-old boy is brought to the emergency department by his father with one day of right-sided pleuritic chest pain and shortness of breath. This morning he coughed up a streak of blood. Sixteen days ago he fractured his left tibia snowboarding in another province. He had intramedullary nailing, stayed in hospital for 3 days and then flew home on a 9 hour flight. He walks with crutches and takes ibuprofen for pain. He has mild asthma and uses salbutamol about once a month. He has no previous VTE and no family history of clots. He is anxious and sits upright.",
    vitals: { temperature: "37.1°C oral", pulse: "118/minute", resp: "24/minute", bp: "114/68 mmHg", o2sat: "93% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of his history most increase his risk of venous thromboembolism?",
        options: ["Age of 15 years", "Asthma with salbutamol use", "Ibuprofen for fracture pain", "Nine hour flight home", "Snowboarding as a sport", "Tibial nailing 16 days ago"],
        select: 2,
        correct: [3, 5],
        explanation:
          "Thrombosis Canada names surgery, especially orthopedic surgery, hospitalization and air travel of more than 8 hours as common provoking factors for PE. He had intramedullary nailing of the tibia with a 3 day admission 16 days ago, then a 9 hour flight, and he still walks on crutches. Mild asthma, ibuprofen and snowboarding as a sport do not raise his VTE risk. His age lowers rather than raises his baseline risk, which is why a provoking factor matters so much in a teenager with these symptoms.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "tc-pe-dx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings would most support PE as the cause of his symptoms?",
        options: ["Chest wall tenderness", "Diffuse expiratory wheeze", "Distended neck veins", "Fever of 38.6°C", "Unilateral bronchial breathing"],
        correct: 2,
        explanation:
          "Distended neck veins are a sign of right ventricular strain, which Thrombosis Canada lists among the signs of PE together with tachypnea, tachycardia and hypoxemia. Diffuse wheeze would point to his asthma. Bronchial breathing on one side with a fever of 38.6°C would point to pneumonia. Tenderness of the chest wall favours a musculoskeletal cause, although it does not exclude PE in a patient with his risk factors and hemoptysis.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-pe-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "His chest examination is otherwise unremarkable. The left leg is swollen around the healing wounds. You think PE is the most likely diagnosis.",
        prompt: "Which of the following best describes the use of the Wells score for PE in a patient of his age?",
        options: ["Excludes PE when below 2 points", "Not studied in patients his age", "Reliable once heart rate is age adjusted", "Valid when used with a D-dimer", "Weakly separates children with PE"],
        correct: 4,
        explanation:
          "In a Toronto cohort of children tested for PE, the median Wells score was 4.5 with PE and 4 without it, a small difference, and the authors concluded that the score may lack utility in children. The score has therefore been studied in children, but no pediatric cutoff is validated. Using pediatric heart rate norms improved the difference only slightly. A low score does not exclude PE in a child, and pairing it with a D-dimer has not been validated, because a normal D-dimer was as common in children with PE as in those without. His imaging decision rests on his strong clinical picture.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "biss-peds-pe-2009",
      },
      {
        id: "q4",
        kind: "single",
        update: "A D-dimer drawn at triage is 420 mcg/L FEU. The laboratory cutoff is 500 mcg/L FEU. His chest X-ray is normal.",
        prompt: "Which of the following is the most appropriate next step in his assessment for PE?",
        options: ["CT pulmonary angiogram", "Discharge with return advice", "Echocardiogram", "Repeat D-dimer in 24 hours", "Troponin and BNP levels"],
        correct: 0,
        explanation:
          "He has hemoptysis, a pulse of 118/minute, an O2 sat of 93%, recent orthopedic surgery and a long flight, and PE is your leading diagnosis, so he needs pulmonary imaging. In children with proven PE, 15% had a D-dimer in the normal range, so a normal result cannot exclude PE when suspicion is high. Even in adults, a negative D-dimer is used only when the pretest probability is low or moderate. Discharge would miss PE. Repeating the D-dimer only delays the diagnosis. An echocardiogram, troponin and BNP help judge severity once PE is found but cannot confirm or exclude it.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "biss-peds-pe-2009",
      },
    ],
    sources: [S.tcPeDx, S.biss],
    ...META,
  },

  /* 51 Neck swelling in early pregnancy after fertility treatment ---------- */
  {
    id: "dvt-pe-51",
    topic: "dvt-pe",
    title: "Painful neck early in pregnancy",
    stem:
      "A 33-year-old woman presents to the emergency department with two days of pain and swelling on the right side of her neck. She is 9 weeks pregnant with a single fetus after in vitro fertilization. Five weeks ago, two weeks after egg retrieval, she was admitted for 4 days with severe ovarian hyperstimulation syndrome, and ascites was drained by paracentesis. She uses vaginal progesterone suppositories and takes a prenatal vitamin with folic acid. She walks briskly every day. She has no previous VTE. She has had no fever, sore throat or dental pain, and she has no chest pain or shortness of breath. The right side of her neck is swollen and tender below the angle of the jaw.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "16/minute", bp: "112/70 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most increases her risk of venous thromboembolism?",
        options: ["Age of 33 years at conception", "Daily brisk walking for exercise", "Prenatal vitamin with folic acid", "Severe ovarian hyperstimulation", "Vaginal progesterone suppositories"],
        correct: 3,
        explanation:
          "Thrombosis Canada lists severe ovarian hyperstimulation syndrome after assisted reproduction among the clinical risk factors for pregnancy-associated VTE, and her admission five weeks ago needed paracentesis. The age threshold the guide lists is 40 years, so 33 does not count. Progesterone support, a prenatal vitamin and regular walking are not listed risk factors, and activity lowers rather than raises risk.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "tc-preg-prophylaxis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to estimate her pretest probability of upper extremity DVT?",
        options: ["PE rule-out criteria", "Physician gestalt", "Pregnancy-adapted YEARS", "Revised Geneva score", "Two level Wells DVT score"],
        correct: 1,
        explanation:
          "Thrombosis Canada states that pretest probability for DVT of the arm and neck veins is typically set by clinical gestalt. The one dedicated score, from Constans, has had only limited validation in a single prospective study. The two level Wells score was built and validated for suspected leg DVT. The PE rule-out criteria, the revised Geneva score and the pregnancy-adapted YEARS algorithm estimate the probability of PE, not of a clot in the neck. With her neck swelling after severe ovarian hyperstimulation, her gestalt probability is high and she needs objective imaging.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "Duplex ultrasound shows occlusive thrombus in the right internal jugular vein that extends into the subclavian vein.",
        prompt: "Which of the following findings, if present, would most suggest that she also has a pulmonary embolism?",
        options: ["Pain on turning her head", "Respiratory rate of 26/minute", "Swelling of the right arm", "Tender cord along the neck", "Warm, swollen right neck"],
        correct: 1,
        explanation:
          "Thrombosis Canada lists tachypnea, tachycardia, hypoxemia, hypotension and signs of right ventricular strain among the signs of PE, so a respiratory rate of 26/minute would call for assessment for PE. At triage she breathes 16 times a minute with an O2 sat of 98% and has no chest pain or shortness of breath. Arm swelling, a tender cord, warmth and pain on turning the head are local effects of the jugular and subclavian clot itself and say nothing about embolism to the lungs.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-pe-dx",
      },
      {
        id: "q4",
        kind: "single",
        update: "She starts treatment-dose LMWH based on her weight today. Her creatinine and platelet count are normal. She asks how her treatment will be checked as the pregnancy goes on.",
        prompt: "Which of the following laboratory monitoring plans is most appropriate for her LMWH during the pregnancy?",
        options: ["aPTT every 2 weeks", "Monthly peak anti-Xa levels", "Platelet count twice weekly", "Trough anti-Xa levels each week", "No routine laboratory monitoring"],
        correct: 4,
        explanation:
          "Thrombosis Canada does not recommend routine peak anti-Xa monitoring of LMWH in pregnancy, because it brings no proven benefit and the target range is uncertain. It may be considered at extremes of body weight, after a breakthrough clot or at very high thrombotic risk, and none applies to her at 64 kg. Trough anti-Xa levels check for build-up in severe renal dysfunction, and her creatinine is normal. Heparin-induced thrombocytopenia is rare with LMWH in pregnancy, so routine platelet counts are not suggested. The aPTT guides unfractionated heparin, not LMWH. Dosing on her weight at diagnosis without later adjustment is an accepted approach.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-vte-tx",
      },
    ],
    sources: [S.tcProph, S.tcDvtDx, S.tcPeDx, S.tcPregTx],
    ...META,
  },

  /* 52 Pleuritic pain in an older man on apixaban ------------------------- */
  {
    id: "dvt-pe-52",
    topic: "dvt-pe",
    title: "Older man with chest pain on a blood thinner",
    stem:
      "You are working in a rural hospital emergency department with CT available. A 76-year-old man presents with two days of right-sided pleuritic chest pain and shortness of breath. This morning he coughed up a streak of blood. He has atrial fibrillation and takes apixaban 5 mg twice daily from a pharmacy blister pack, and his daughter confirms that he has missed no doses. He also takes metoprolol 50 mg twice daily, atorvastatin 40 mg daily, pantoprazole 40 mg daily and acetaminophen 500 mg as needed. Since his wife died 6 weeks ago, he has taken St John's wort 300 mg three times daily for low mood. He has no cancer, recent surgery, immobilization or previous VTE. His legs are not swollen or tender. You think PE is the most likely diagnosis.",
    vitals: { temperature: "37.0°C oral", pulse: "112/minute irregular", resp: "22/minute", bp: "138/82 mmHg", o2sat: "93% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: ["4.5 points", "5.5 points", "7.0 points", "8.5 points", "10.0 points"],
        correct: 1,
        explanation:
          "He scores 3 points because PE is the most likely diagnosis, 1.5 points for a heart rate over 100/minute and 1 point for hemoptysis, for 5.5 points. An irregular rhythm still counts if the rate is over 100/minute. He has no clinical signs of DVT, recent surgery or immobilization, previous VTE or cancer, so he earns nothing more. Taking an anticoagulant is not a Wells item. A score above 4 places him in the PE likely group.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe-2001",
      },
      {
        id: "q2",
        kind: "single",
        update: "Imaging confirms a right lower lobe segmental PE with a normal right ventricle. Troponin, CBC and liver enzymes are normal. His daughter asks whether a blood test can show if the apixaban is working.",
        prompt: "Which of the following blood tests best measures the amount of apixaban in his blood?",
        options: ["Apixaban-calibrated anti-Xa level", "Fibrinogen by Clauss method", "Partial thromboplastin time", "Prothrombin time with INR", "Thrombin clotting time"],
        correct: 0,
        explanation:
          "Some laboratories offer anti-factor Xa assays calibrated with apixaban, which estimate its plasma concentration. They are not standardized across centres and no safe or therapeutic range has been set against outcomes, but a low level in a man who takes every dose supports reduced drug exposure. Thrombosis Canada notes that the INR and the aPTT are often normal in patients taking apixaban and do not reliably reflect its effect. Fibrinogen and the thrombin clotting time do not measure factor Xa inhibition.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-apixaban",
      },
      {
        id: "q3",
        kind: "single",
        update: "You review his medications with him and his daughter.",
        prompt: "Which of the following items in his medication history best explains a PE despite his apixaban?",
        options: ["acetaminophen 500 mg as needed", "atorvastatin 40 mg daily", "metoprolol 50 mg twice daily", "pantoprazole 40 mg daily", "St John's wort 300 mg three times daily"],
        correct: 4,
        explanation:
          "St John's wort is a strong inducer of the enzymes and transporter that clear apixaban, and Thrombosis Canada warns that strong inducers such as rifampin, carbamazepine, phenytoin and St John's wort can reduce apixaban levels. He started it 6 weeks ago and has taken every dose of apixaban, so low drug levels are the likely reason for this breakthrough embolus. Herbal products are often left off a medication list unless the patient is asked about them directly. Metoprolol, atorvastatin, pantoprazole and acetaminophen do not lower apixaban levels in a meaningful way.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "tc-apixaban",
      },
      {
        id: "q4",
        kind: "single",
        update: "His pain settles with acetaminophen and his pulse falls to 92/minute. His O2 sat is 93% on room air and his BP is 134/80 mmHg. His daughter can stay with him at home.",
        prompt: "Which of the following findings makes him unsuitable for outpatient treatment under the Hestia criteria?",
        options: ["Age of 76 years", "Atrial fibrillation", "O2 saturation of 93%", "PE while on apixaban", "Small pleural effusion"],
        correct: 3,
        explanation:
          "A PE diagnosed while the patient is already taking an anticoagulant is one of the Hestia exclusions, because a breakthrough embolus needs its cause found and treatment changed under close watch. The Hestia oxygen item is a need for supplemental oxygen for more than 24 hours to keep the saturation above 90%, and he is at 93% on room air. Age is not a Hestia criterion, although it counts in other scores. Atrial fibrillation and a small pleural effusion are not Hestia criteria either.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "bellou-outpatient-pe",
      },
    ],
    sources: [S.wellsPe, S.tcPeDx, S.tcApix, S.bellou],
    ...META,
  },
];
