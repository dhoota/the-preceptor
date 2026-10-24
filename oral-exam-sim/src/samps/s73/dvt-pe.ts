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
  arya: { id: "arya-ivf-jugular-2001", citation: "Arya R, Shehata HA, Patel RK, and colleagues. Internal jugular vein thrombosis after assisted conception therapy. Br J Haematol. 2001.", url: "https://pubmed.ncbi.nlm.nih.gov/11722427/" },
  wellsPe: { id: "wells-pe-2001", citation: "Wells PS, Anderson DR, Rodger M, and colleagues. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001." },
  tcApix: { id: "tc-apixaban", citation: "Thrombosis Canada. Clinical guide: apixaban (Eliquis). Version dated 2 June 2025.", url: "https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf" },
  bellou: { id: "bellou-outpatient-pe", citation: "Bellou E, Keramida E, Karampinis I, and colleagues. Outpatient treatment of pulmonary embolism. Breathe (Sheff). 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7792861/" },
} satisfies Record<string, Source>;

export const DVT_PE_S73: Samp[] = [
  /* 48 Whole leg swelling in a woman who injects into the groin ------------ */
  {
    id: "dvt-pe-48",
    topic: "dvt-pe",
    title: "Swollen leg after months of groin injecting",
    stem:
      "A 31-year-old woman presents to the emergency department with three days of pain and swelling in her right leg. She takes methadone daily but still injects hydromorphone several times a week. Her arm veins are no longer usable, so for the past year she has injected into her right groin. She has untreated hepatitis C and has had several skin abscesses on her arms. She smokes one pack of cigarettes a day. She has had no previous blood clot, surgery, leg injury or cancer. The whole right leg is swollen from the groin to the ankle, with pitting edema. The right calf is 4 cm larger than the left, and there is tenderness along the femoral vein. There are no dilated superficial veins.",
    vitals: { temperature: "37.3°C oral", pulse: "102/minute", resp: "18/minute", bp: "124/76 mmHg", o2sat: "98% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most increases her risk of deep vein thrombosis?",
        options: ["Daily cigarette smoking", "Femoral vein injection", "Hepatitis C infection", "Oral methadone treatment", "Previous skin abscesses"],
        correct: 1,
        explanation:
          "She has injected into her right groin for a year, and it is the right leg that is swollen. Repeated puncture of the femoral vein, with injection of irritant material, damages the vein and is a recognized cause of femoral DVT in people who inject drugs, who made up 48% of patients under 40 with DVT in one series. Hepatitis C, oral methadone and old arm abscesses do not explain a clot in the right femoral vein. Smoking is at most a weak risk factor for venous thrombosis and does not explain a one-sided clot at her injecting site.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "jackman-groin-pwid",
      },
      {
        id: "q2",
        kind: "single",
        update: "You examine her right groin, where there are many puncture marks.",
        prompt: "Which of the following groin findings would most change your immediate management of her?",
        options: ["Dry scaling skin over the thigh", "Healed puncture scars", "Small mobile inguinal nodes", "Tender pulsatile groin mass", "Yellow bruising around the sites"],
        correct: 3,
        explanation:
          "A tender, pulsatile mass at an injecting site suggests a femoral artery pseudoaneurysm, often infected, from accidental arterial puncture. It can be mistaken for an abscess, and attempts to drain an assumed abscess have caused major hemorrhage, so it needs urgent imaging and vascular surgery review before anyone incises it. Not every pseudoaneurysm pulsates, which is why groin imaging matters in this group. Healed puncture scars, old yellow bruising and small mobile nodes are common in people who inject into the groin and do not change the plan. Dry skin over the thigh is not a sign of a vascular complication.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "jackman-groin-pwid",
      },
      {
        id: "q3",
        kind: "single",
        update: "The groin shows healed puncture scars only, with no mass, warmth or pus. You judge DVT to be more likely than any other diagnosis.",
        prompt: "Which of the following is her two level Wells score for deep vein thrombosis?",
        options: ["1 point", "2 points", "3 points", "4 points", "5 points"],
        correct: 3,
        explanation:
          "She scores one point each for localized tenderness along the deep veins, swelling of the entire leg, calf swelling of 3 cm or more and pitting edema confined to the symptomatic leg, for 4 points. She has no active cancer, paralysis or cast, recent bed rest or surgery, collateral superficial veins or previous DVT, and no alternative diagnosis is as likely, so nothing is subtracted. Injecting drug use is not a Wells item, so the score can understate risk in this group. A score of 2 or more places her in the DVT likely category.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt-2003",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for suspected DVT in her?",
        options: ["CT venogram of the pelvis", "D-dimer before any imaging", "Duplex ultrasound of the leg", "Plain X-ray of the groin", "Venography through a foot vein"],
        correct: 2,
        explanation:
          "Her Wells score of 4 makes DVT likely, and Thrombosis Canada recommends compression ultrasound as the first test in that group. Duplex scanning of the leg also shows the femoral artery and soft tissue at her injecting site. A D-dimer cannot exclude DVT when the pretest probability is likely, so ordering it first only adds delay. CT venography is kept for cases where ultrasound cannot answer the question, such as suspected iliac thrombosis. Contrast venography is invasive and needs a usable foot vein. A plain X-ray of the groin can show a retained needle fragment but cannot diagnose DVT.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
    ],
    sources: [S.jackman, S.wellsDvt, S.tcDvtDx],
    ...META,
  },

  /* 49 Breathless ten days after an emergency caesarean -------------------- */
  {
    id: "dvt-pe-49",
    topic: "dvt-pe",
    title: "Breathless new mother",
    stem:
      "A 34-year-old woman presents to the emergency department 10 days after the birth of her first baby, with two days of shortness of breath and right-sided pleuritic chest pain. After 20 hours of labour with an epidural, she had an emergency caesarean section for fetal distress. On day 3 she developed endometritis and received IV antibiotics for 48 hours. She is breastfeeding every 3 hours. Her blood pressure was normal throughout pregnancy. She has no previous VTE and takes only iron and a prenatal vitamin. Her lochia is light and her wound is healing well.",
    vitals: { temperature: "37.2°C oral", pulse: "112/minute", resp: "22/minute", bp: "118/74 mmHg", o2sat: "94% on room air", weight: "78 kg" },
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
        update: "Her lungs are clear, there are no added heart sounds and her calves are normal. A CT pulmonary angiogram is booked. She asks whether she must stop breastfeeding after the scan.",
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
        update: "Imaging confirms a right lower lobe segmental PE with a normal right ventricle. Hemoglobin, platelets, creatinine and liver enzymes are normal. She starts LMWH and would prefer tablets once she is home.",
        prompt: "Which of the following oral anticoagulants is most appropriate for her while she continues to breastfeed?",
        options: ["apixaban", "dabigatran", "edoxaban", "rivaroxaban", "warfarin"],
        correct: 4,
        explanation:
          "Thrombosis Canada states that UFH, LMWH and warfarin are safe for the breastfed infant, so warfarin is the oral choice for her. It is started alongside LMWH, with an overlap of at least 5 days and until the INR is 2.0 or more for over 24 hours. Rivaroxaban and dabigatran have been found in breast milk, and the makers of apixaban, dabigatran, edoxaban and rivaroxaban all advise against their use while breastfeeding. A direct oral anticoagulant becomes an option only for a woman who chooses not to breastfeed.",
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
        update: "His chest is clear, his neck veins are not distended and his temperature is normal. The left leg is swollen around the healing wounds. You think PE is the most likely diagnosis.",
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
      "A 33-year-old woman presents to the emergency department with two days of pain and swelling on the right side of her neck. She is 9 weeks pregnant with a single fetus after in vitro fertilization. Five weeks ago, two weeks after egg retrieval, she was admitted for 4 days with severe ovarian hyperstimulation syndrome, and ascites was drained by paracentesis. She uses vaginal progesterone suppositories and takes a prenatal vitamin with folic acid. She walks briskly every day. She has no previous VTE. She has had no fever, sore throat or dental pain. The right side of her neck is swollen and tender below the angle of the jaw.",
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
        prompt: "Which of the following additional findings would most suggest a cause other than venous thrombosis for her neck swelling?",
        options: ["Dilated veins over the upper chest", "Fluctuant warm mass under the jaw", "Pain on turning her head", "Swelling of the right arm", "Tender cord along the neck"],
        correct: 1,
        explanation:
          "A fluctuant, warm mass under the jaw suggests a collection such as an abscess or a suppurating lymph node, which would need drainage and antibiotics rather than anticoagulation alone. Thrombosis of the upper body veins causes pain and swelling of the neck or arm, discolouration and dilated collateral veins over the arm, neck or upper chest, so arm swelling and chest wall veins support the diagnosis. A tender cord along the neck fits a thrombosed vein. Pain on turning the head is common with a tender, swollen neck from either cause and does not separate them.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "There is no fluctuant mass or redness. A tender cord runs down the right side of her neck, and her right arm is mildly swollen. Her throat and teeth look normal.",
        prompt: "Which of the following is the most appropriate first imaging test for her?",
        options: ["Contrast venography of the arm", "CT venogram of the neck and chest", "Duplex ultrasound of the neck", "MR venogram of the neck", "Ventilation perfusion scan"],
        correct: 2,
        explanation:
          "Women who conceive after ovarian stimulation can present with thrombosis of the internal jugular vein, with neck pain and swelling between 7 and 10 weeks of pregnancy, as she has. Duplex ultrasound images the jugular, subclavian and axillary veins without radiation or contrast, which suits a first trimester pregnancy. CT or MR venography and contrast venography are kept for a negative ultrasound when suspicion stays high, or to see central veins behind the clavicle. A ventilation perfusion scan looks for PE, and she has no chest symptoms.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "arya-ivf-jugular-2001",
      },
      {
        id: "q4",
        kind: "single",
        update: "Ultrasound shows occlusive thrombus in the right internal jugular vein that extends into the subclavian vein. Hemoglobin, platelets and creatinine are normal. She has never had heparin.",
        prompt: "Which of the following is the most appropriate anticoagulant regimen for her now?",
        options: ["dalteparin 200 units/kg SC daily", "edoxaban 60 mg PO daily", "fondaparinux 7.5 mg SC daily", "rivaroxaban 15 mg PO twice daily", "warfarin 5 mg PO daily"],
        correct: 0,
        explanation:
          "LMWH does not cross the placenta and is the drug of choice for VTE in pregnancy, dosed by her actual weight at diagnosis and preferably once daily. At 64 kg, 200 units/kg is 12 800 units, given as the nearest prefilled syringe. Warfarin crosses the placenta and can cause embryopathy, so it is contraindicated in pregnancy. Direct oral anticoagulants such as edoxaban and rivaroxaban are likely to cross the placenta and are avoided. Experience with fondaparinux in early pregnancy is very limited, and it is kept for women with heparin-induced thrombocytopenia.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-vte-tx",
      },
    ],
    sources: [S.tcProph, S.tcDvtDx, S.arya, S.tcPregTx],
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
        update: "His chest X-ray shows a small right pleural effusion. Creatinine is 92 micromol/L, and he has no contrast allergy.",
        prompt: "Which of the following is the most appropriate next step in his assessment for PE?",
        options: ["Age-adjusted D-dimer", "Bilateral leg ultrasound", "CT pulmonary angiogram", "D-dimer, 1000 mcg/L cutoff", "Echocardiogram"],
        correct: 2,
        explanation:
          "With a Wells score of 5.5 his pretest probability is likely, so he goes straight to imaging without a D-dimer. His chest X-ray is abnormal and his kidney function is normal, which favours CT over a ventilation perfusion scan. The age-adjusted cutoff, 760 mcg/L at age 76, applies only when PE is unlikely. A 1000 mcg/L cutoff is used only in the lowest probability group, under YEARS or PEGeD, and he has hemoptysis and PE as the most likely diagnosis. Leg ultrasound is a reasonable first test when there are signs of DVT, which he lacks. An echocardiogram cannot exclude PE.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-pe-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "Imaging confirms a right lower lobe segmental PE with a normal right ventricle. Troponin, CBC and liver enzymes are normal.",
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
