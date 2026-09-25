// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

/* Sources ------------------------------------------------------------- */

const SRC_ESC_PE: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV, et al. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
  url: "https://pubmed.ncbi.nlm.nih.gov/31504429/",
};
const SRC_TC_DVT_DX: Source = {
  id: "tc-dvt-dx",
  citation: "Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf",
};
const SRC_TC_DVT_TX: Source = {
  id: "tc-dvt-tx",
  citation: "Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) treatment. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISTREATMENT_80.pdf",
};
const SRC_ASH_PEDS: Source = {
  id: "ash-peds",
  citation: "Monagle P, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: treatment of pediatric venous thromboembolism. Blood Adv. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30482766/",
};
const SRC_WELLS_DVT: Source = {
  id: "wells-dvt",
  citation: "Wells PS, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003.",
  url: "https://pubmed.ncbi.nlm.nih.gov/14507948/",
};
const SRC_WELLS_PE: Source = {
  id: "wells-pe",
  citation: "Wells PS, et al. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001.",
  url: "https://pubmed.ncbi.nlm.nih.gov/11453709/",
};
const SRC_PEGED: Source = {
  id: "peged",
  citation: "Kearon C, et al. Diagnosis of pulmonary embolism with d-dimer adjusted to clinical probability (PEGeD). N Engl J Med. 2019.",
  url: "https://pubmed.ncbi.nlm.nih.gov/31774957/",
};
const SRC_PREG_YEARS: Source = {
  id: "preg-years",
  citation: "van der Pol LM, et al. Pregnancy-adapted YEARS algorithm for diagnosis of suspected pulmonary embolism. N Engl J Med. 2019.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30893534/",
};
const SRC_ASH_PREG: Source = {
  id: "ash-preg",
  citation: "Bates SM, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: venous thromboembolism in the context of pregnancy. Blood Adv. 2018.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/",
};
const SRC_TC_PREG_TX: Source = {
  id: "tc-preg-tx",
  citation: "Thrombosis Canada. Clinical guide: pregnancy, venous thromboembolism treatment. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf",
};
const SRC_TC_PREG_PROPH: Source = {
  id: "tc-preg-proph",
  citation: "Thrombosis Canada. Clinical guide: pregnancy, thromboprophylaxis. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/THROMBOPROPHYLAXISINPREGNANCY_43.pdf",
};
const SRC_TC_PE_TX: Source = {
  id: "tc-pe-tx",
  citation: "Thrombosis Canada. Clinical guide: pulmonary embolism (PE) treatment. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/44_60.pdf",
};
const SRC_SPESI: Source = {
  id: "spesi",
  citation: "Jimenez D, et al. Simplification of the pulmonary embolism severity index for prognostication in patients with acute symptomatic pulmonary embolism. Arch Intern Med. 2010.",
  url: "https://pubmed.ncbi.nlm.nih.gov/20696966/",
};
const SRC_TC_CANCER: Source = {
  id: "tc-cancer",
  citation: "Thrombosis Canada. Clinical guide: cancer and thrombosis. 2024.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/CANCERANDTHROMBOSIS_51.pdf",
};
const SRC_ISTH_OBESITY: Source = {
  id: "isth-obesity",
  citation: "Martin KA, et al. Use of direct oral anticoagulants in patients with obesity for treatment and prevention of venous thromboembolism: updated communication from the ISTH SSC Subcommittee on Control of Anticoagulation. J Thromb Haemost. 2021.",
  url: "https://pubmed.ncbi.nlm.nih.gov/34259389/",
};
const SRC_ASH_TX: Source = {
  id: "ash-tx",
  citation: "Ortel TL, et al. American Society of Hematology 2020 guidelines for management of venous thromboembolism: treatment of deep vein thrombosis and pulmonary embolism. Blood Adv. 2020.",
  url: "https://pubmed.ncbi.nlm.nih.gov/33007077/",
};
const SRC_EHRA: Source = {
  id: "ehra",
  citation: "Steffel J, et al. 2021 European Heart Rhythm Association practical guide on the use of non-vitamin K antagonist oral anticoagulants in patients with atrial fibrillation. Europace. 2021.",
  url: "https://pubmed.ncbi.nlm.nih.gov/33895845/",
};
const SRC_HESTIA: Source = {
  id: "hestia",
  citation: "Zondag W, et al. Outpatient treatment in patients with acute pulmonary embolism: the Hestia Study. J Thromb Haemost. 2011.",
  url: "https://pubmed.ncbi.nlm.nih.gov/21645235/",
};
const SRC_ASH_HIT: Source = {
  id: "ash-hit",
  citation: "Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30482768/",
};
const SRC_ASH_DX: Source = {
  id: "ash-dx",
  citation: "Lim W, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: diagnosis of venous thromboembolism. Blood Adv. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30482764/",
};
const SRC_PERC: Source = {
  id: "perc",
  citation: "Kline JA, et al. Clinical criteria to prevent unnecessary diagnostic testing in emergency department patients with suspected pulmonary embolism. J Thromb Haemost. 2004.",
  url: "https://pubmed.ncbi.nlm.nih.gov/15304025/",
};
const SRC_ADJUST_PE: Source = {
  id: "adjust-pe",
  citation: "Righini M, et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism: the ADJUST-PE study. JAMA. 2014.",
  url: "https://pubmed.ncbi.nlm.nih.gov/24643601/",
};
const SRC_CHILD_PUGH: Source = {
  id: "child-pugh",
  citation: "Tsoris A, Marlar CA. Use of the Child Pugh score in liver disease. StatPearls. 2023.",
  url: "https://pubmed.ncbi.nlm.nih.gov/31194448/",
};
const SRC_ASH_PEDS_2024: Source = {
  id: "ash-peds-2024",
  citation: "Monagle P, et al. American Society of Hematology/International Society on Thrombosis and Haemostasis 2024 updated guidelines for treatment of venous thromboembolism in pediatric patients. Blood Adv. 2025.",
  url: "https://pubmed.ncbi.nlm.nih.gov/40423983/",
};
const SRC_VIRCHOW: Source = {
  id: "virchow",
  citation: "Aghedo BO, Kasi A. Virchow node. StatPearls. 2025.",
  url: "https://pubmed.ncbi.nlm.nih.gov/32310560/",
};

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

export const DVT_PE_S33_SAMPS: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-16",
    topic: "dvt-pe",
    title: "Swollen calf in a teenager",
    stem:
      "A 16-year-old girl presents to the emergency department with four days of left calf pain and swelling. She plays competitive basketball and had arthroscopic repair of a torn left knee meniscus 12 days ago. She used crutches and kept weight off the leg for the first week. She takes a combined estrogen and progestin oral contraceptive. She does not smoke.\n\nThe left calf is 4 cm larger than the right, with pitting edema and tenderness along the deep veins. The knee incisions are clean. The examination is otherwise normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "16/minute", bp: "112/68 mmHg", o2sat: "99% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following additional history items would most increase her baseline risk of venous thromboembolism?",
        options: [
          "Age at first menstrual period",
          "Creatine supplement use",
          "Family history of hemophilia",
          "Known inherited thrombophilia",
          "Previous venous thromboembolism",
          "Recent influenza vaccination",
          "Seasonal allergic rhinitis",
          "Topical acne treatment",
        ],
        select: 2,
        correct: [3, 4],
        explanation:
          "A previous VTE is one of the strongest risk factors for a new event, and a known thrombophilia is a recognized moderate risk factor. Either would add to her current risks from arthroscopic knee surgery, reduced weight bearing and a combined oral contraceptive. Hemophilia in a relative is a bleeding disorder and does not raise her clot risk. Age at menarche, allergic rhinitis, influenza vaccination, topical acne treatment and creatine use are not recognized VTE risk factors.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first diagnostic test for her?",
        options: [
          "Compression ultrasound of the left leg",
          "Contrast venography of the left leg",
          "CT venography of the pelvis and leg",
          "Magnetic resonance venography of the leg",
          "Quantitative D-dimer level",
        ],
        correct: 0,
        explanation:
          "Clinical decision rules and D-dimer testing have not been validated in children, so the diagnosis of DVT in a child starts with compression ultrasound. Her calf swelling, pitting edema and deep vein tenderness make ultrasound the right first test. A D-dimer would also be raised by her surgery 12 days ago. CT or MR venography is considered only if ultrasound is negative and suspicion stays high, and contrast venography is invasive.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a noncompressible left popliteal and femoral vein. Hemoglobin, platelets, creatinine and coagulation tests are normal.",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for her?",
        options: [
          "ASA 81 mg PO daily",
          "enoxaparin 60 mg SC every 12 hours",
          "enoxaparin 40 mg SC once daily",
          "heparin 5000 units SC every 12 hours",
          "warfarin 5 mg PO daily",
        ],
        correct: 1,
        explanation:
          "Therapeutic enoxaparin is dosed on actual weight at 1 mg/kg SC every 12 hours, which is 58 mg for 58 kg, rounded to the nearest 60 mg prefilled syringe. Enoxaparin 40 mg daily and heparin 5000 units SC every 12 hours are prophylactic doses and will not treat an established proximal DVT. Warfarin alone has no immediate effect and must overlap with a heparin for at least 5 days. ASA is not a treatment for acute DVT.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q4",
        kind: "single",
        update: "She stops the combined oral contraceptive and now walks normally. Ultrasound at 6 weeks shows persistent occlusive thrombus in the popliteal vein.",
        prompt: "Which of the following is the most appropriate total duration of anticoagulation for her?",
        options: [
          "Six months",
          "Six weeks",
          "Three months",
          "Twelve months",
          "Until age 18 years",
        ],
        correct: 2,
        explanation:
          "Her DVT was provoked by knee surgery, reduced weight bearing and an estrogen contraceptive, and all of these have resolved. The 2024 ASH/ISTH update suggests 6 weeks rather than 3 months for selected children with provoked VTE, but persistent occlusive thrombus at 6 weeks excludes her, so she should complete 3 months. Stopping at 6 weeks ignores that residual occlusion. Six to 12 months is the suggested course for unprovoked events, so six and twelve months are too long. Treating until age 18 years ties the duration to age rather than to her risk of recurrence.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-peds-2024",
      },
    ],
    sources: [SRC_ESC_PE, SRC_TC_DVT_DX, SRC_TC_DVT_TX, SRC_ASH_PEDS_2024],
    ...META,
  },
  /* 17 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-17",
    topic: "dvt-pe",
    title: "Arm swelling after a workout",
    stem:
      "A 27-year-old man presents to the emergency department with two days of right arm swelling, heaviness and aching. The symptoms began the morning after a long session of overhead weightlifting and rowing. He is right handed. He has no central venous catheter, pacemaker or cancer, and he has never had a blood clot. He takes no medications.\n\nThe right arm is mildly swollen from the forearm to the shoulder, without discolouration. Radial pulses are equal. Sensation and power in the hand are normal.",
    vitals: { temperature: "36.7°C oral", pulse: "78/minute", resp: "14/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional examination findings would most support venous thrombosis as the cause?",
        options: [
          "Absent radial pulse when the arm is abducted",
          "Dilated collateral veins over the shoulder",
          "Ptosis and miosis on the right side",
          "Tender fluctuant swelling in the axilla",
          "Wasting of the thenar muscles",
        ],
        correct: 1,
        explanation:
          "Dilated collateral veins over the arm, neck or upper chest are a recognized sign of upper extremity DVT and reflect obstruction of the axillary or subclavian vein. His swelling after repeated overhead exertion fits effort thrombosis. Loss of the radial pulse with abduction points to arterial compression at the thoracic outlet. Ptosis with miosis suggests a Horner syndrome from an apical lung tumour. A fluctuant axillary swelling suggests an abscess, and thenar wasting suggests nerve compression.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first diagnostic test for him?",
        options: [
          "Contrast venography of the right arm",
          "CT venography of the chest",
          "Duplex ultrasound of the right arm",
          "Magnetic resonance venography",
          "X-ray of the cervical spine and ribs",
        ],
        correct: 2,
        explanation:
          "His history and findings give a high pretest probability of upper extremity DVT, and duplex ultrasound, combining compression and colour Doppler flow, should be done first. If it is negative and suspicion remains high, contrast venography, CT venography or MRI can follow. Those tests are second line because of contrast, radiation or access. Cervical spine and rib films may show a cervical rib later in a thoracic outlet workup but cannot diagnose venous thrombosis.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "Duplex ultrasound shows occlusive thrombus in the right axillary and subclavian veins. CBC, creatinine and liver enzymes are normal.",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen?",
        options: [
          "apixaban 10 mg PO twice daily",
          "apixaban 5 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "rivaroxaban 20 mg PO once daily",
          "warfarin 5 mg PO once daily",
        ],
        correct: 0,
        explanation:
          "Upper extremity DVT is treated on the same principles as leg DVT. Apixaban can be started alone at 10 mg twice daily for 7 days, then 5 mg twice daily. Starting at 5 mg twice daily omits the first week of higher dosing. Dabigatran needs 5 to 10 days of LMWH first, and rivaroxaban starts at 15 mg twice daily for 21 days before 20 mg daily. Warfarin alone is not an appropriate initial treatment because it has no immediate effect.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit for IV unfractionated heparin",
          "Admit for urgent first rib resection",
          "Arrange catheter directed thrombolysis this evening",
          "Discharge on apixaban with thrombosis follow-up",
          "Observe on telemetry for 24 hours",
        ],
        correct: 3,
        explanation:
          "He is stable with mild symptoms and normal labs, and outpatient treatment is preferred unless the DVT is limb threatening, bleeding risk is high or another reason for admission exists. Follow-up should look for a thoracic outlet cause of his effort thrombosis. Catheter directed thrombolysis is considered only case by case for extensive, very symptomatic upper extremity DVT. First rib resection is not an emergency. IV heparin and telemetry add nothing for a stable patient who can take an oral agent.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_TC_DVT_DX, SRC_TC_DVT_TX],
    ...META,
  },
  /* 18 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-18",
    topic: "dvt-pe",
    title: "Calf swelling after an operation",
    stem:
      "A 44-year-old woman presents to the emergency department with three days of left calf pain and swelling. Five weeks ago she had a laparoscopic Roux-en-Y gastric bypass under general anesthesia and went home on day 2. She takes a multivitamin, calcium, vitamin B12 and a combined oral contraceptive. She has no previous VTE or cancer. Her body mass index is 41 kg/m2.\n\nThe left calf is 3.5 cm larger than the right, with pitting edema confined to the left leg. There is no tenderness along the deep veins. The thigh is not swollen, and there are no collateral veins. No other diagnosis seems as likely as DVT. The department uses the two level Wells score.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "128/76 mmHg", o2sat: "98% on room air", weight: "112 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her two level Wells score for deep vein thrombosis?",
        options: [
          "1 point",
          "2 points",
          "3 points",
          "4 points",
          "5 points",
        ],
        correct: 2,
        explanation:
          "She scores 1 point for major surgery under general anesthesia within 12 weeks, 1 point for calf swelling of 3 cm or more, and 1 point for pitting edema confined to the symptomatic leg, for 3 points. A score of 2 or more makes DVT likely. The contraceptive and her obesity raise her risk but are not Wells items. She has no deep vein tenderness, whole leg swelling, collateral veins, cancer, paralysis or previous DVT, and no points are subtracted because no other diagnosis is as likely.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt",
      },
      {
        id: "q2",
        kind: "single",
        update: "A high sensitivity D-dimer drawn by the triage nurse is below the laboratory cutoff.",
        prompt: "Which of the following is the most appropriate next step in her assessment for DVT?",
        options: [
          "Compression ultrasound of the left leg",
          "CT venography of both legs",
          "Discharge with DVT excluded",
          "Repeat the D-dimer in 24 hours",
          "Start anticoagulation without imaging",
        ],
        correct: 0,
        explanation:
          "With a likely pretest probability, Thrombosis Canada makes compression ultrasound the first line test. A negative D-dimer excludes DVT without imaging only when the pretest probability is unlikely, so discharging her now would be unsafe. In a likely patient, the D-dimer is used after a negative proximal ultrasound, to decide on a repeat scan. Repeating the D-dimer adds nothing. CT venography is not a first line test for leg DVT. Treating without imaging commits her to months of anticoagulation on an unconfirmed diagnosis.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Testing confirms thrombus in the left popliteal and femoral veins. Hemoglobin 124 g/L, platelets 268 x 10^9/L, creatinine 58 micromol/L. She is tolerating food and her usual pills.",
        prompt: "Which of the following anticoagulants is most appropriate to start for her now?",
        options: [
          "apixaban by mouth",
          "dabigatran by mouth after a lead-in",
          "enoxaparin by injection",
          "rivaroxaban by mouth",
          "warfarin by mouth alone",
        ],
        correct: 2,
        explanation:
          "Her gastric bypass was only five weeks ago, so absorption of an oral anticoagulant is unpredictable. The ISTH guidance on obesity advises against DOACs for VTE in the early period after bariatric surgery and suggests parenteral anticoagulation instead. Apixaban and rivaroxaban are good choices after most DVTs, but not while absorption is uncertain. Dabigatran needs a parenteral lead-in and has the same absorption problem. Warfarin alone takes days to work and must be overlapped with a parenteral agent.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "isth-obesity",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following treatment orders is most appropriate for her?",
        options: [
          "apixaban 10 mg PO twice daily",
          "enoxaparin 80 mg SC every 12 hours",
          "enoxaparin 120 mg SC every 12 hours",
          "enoxaparin 150 mg SC every 12 hours",
          "rivaroxaban 15 mg PO twice daily",
        ],
        correct: 2,
        explanation:
          "Treatment dose enoxaparin is 1 mg/kg every 12 hours. At 112 kg that is 112 mg, rounded to the nearest prefilled syringe of 120 mg. Thrombosis Canada bases LMWH doses on actual body weight, rounded to the nearest prefilled syringe, so capping at 80 mg underdoses her. 150 mg every 12 hours is about 1.3 mg/kg per dose, which overdoses her. Apixaban and rivaroxaban at their starting doses depend on absorption, which is unreliable in the first weeks after a gastric bypass.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_WELLS_DVT, SRC_TC_DVT_DX, SRC_ISTH_OBESITY, SRC_TC_DVT_TX],
    ...META,
    version: 2,
  },
  /* 19 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-19",
    topic: "dvt-pe",
    title: "Pleuritic pain after abdominal surgery",
    stem:
      "A 38-year-old woman presents to the emergency department with one day of right sided pleuritic chest pain and mild shortness of breath. She had a laparoscopic cholecystectomy 18 days ago and went home the next day. She has no leg symptoms, hemoptysis, cancer or previous VTE. She takes no medications.\n\nHer lungs are clear and her calves are soft and symmetric. The port sites are healing well. ECG shows sinus tachycardia. You think another diagnosis is more likely than PE.",
    vitals: { temperature: "37.1°C oral", pulse: "106/minute", resp: "18/minute", bp: "122/76 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her Wells score for pulmonary embolism?",
        options: [
          "1.5 points",
          "3.0 points",
          "4.5 points",
          "6.0 points",
          "7.5 points",
        ],
        correct: 1,
        explanation:
          "She scores 1.5 for a heart rate above 100/minute and 1.5 for surgery within the past 4 weeks, for a total of 3.0. She has no signs of DVT, hemoptysis, cancer or previous VTE. PE is not the most likely diagnosis, so that item scores zero. A total of 4.0 or less falls in the low clinical probability group used by PEGeD.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to assess her for PE?",
        options: [
          "Age adjusted D-dimer cutoff",
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "D-dimer with a 1000 mcg/L cutoff",
          "Ventilation perfusion lung scan",
        ],
        correct: 3,
        explanation:
          "With a low clinical pretest probability, PEGeD showed that a D-dimer below 1000 mcg/L FEU safely excludes PE without imaging. Going straight to CT or VQ imaging exposes her to radiation that a negative D-dimer could avoid. Leg ultrasound has a low yield with no leg symptoms. An age adjusted cutoff applies only above age 50 and would give her the lower standard cutoff of 500 mcg/L, sending more patients to imaging.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "peged",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her D-dimer is 820 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step for suspected PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Repeat D-dimer in 24 hours",
          "Ventilation perfusion lung scan",
          "No further testing for PE",
        ],
        correct: 4,
        explanation:
          "In PEGeD, patients with a low clinical pretest probability and a D-dimer below 1000 mcg/L FEU had PE excluded without imaging and were not anticoagulated, with a very low rate of VTE at 3 months. Her 820 mcg/L result is below that threshold. CT or VQ imaging would add radiation without benefit, and leg ultrasound is not needed without leg symptoms. A repeat D-dimer adds nothing. Another cause for her pleuritic pain should now be sought.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "peged",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following additional history findings would move her into the moderate clinical probability group?",
        options: [
          "Active cancer on treatment",
          "Estrogen containing contraceptive",
          "Hemoptysis this morning",
          "Previous proximal DVT",
          "Smoking 10 cigarettes daily",
        ],
        correct: 3,
        explanation:
          "A previous DVT or PE adds 1.5 points, raising her Wells score from 3.0 to 4.5, which is moderate probability, 4.5 to 6.0, in PEGeD. Moderate probability lowers the D-dimer threshold for excluding PE to 500 mcg/L FEU, so her 820 mcg/L result would then need imaging. Hemoptysis and active cancer add 1 point each, giving 4.0, which stays in the low group. Estrogen use and smoking do not score in the Wells rule.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "peged",
      },
    ],
    sources: [SRC_WELLS_PE, SRC_PEGED],
    ...META,
  },
  /* 20 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-20",
    topic: "dvt-pe",
    title: "Pleuritic pain and a new tremor",
    stem:
      "A 36-year-old woman presents to the emergency department with two days of right pleuritic chest pain and shortness of breath, and one episode of blood streaked sputum this morning. Three weeks ago she had a laparoscopic ovarian cystectomy. Five days ago her family physician diagnosed Graves disease. She started methimazole 3 days ago and takes propranolol 20 mg three times daily. She has no previous VTE.\n\nShe has a fine tremor, warm moist skin and a diffuse goitre. Her lungs are clear. Her legs are not swollen or tender. TSH is below 0.01 mU/L and free T4 is 48 pmol/L. Creatinine is 54 micromol/L. The chest X-ray is normal. You judge PE to be the most likely diagnosis.",
    vitals: { temperature: "37.4°C oral", pulse: "112/minute", resp: "22/minute", bp: "128/70 mmHg", o2sat: "95% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following imaging tests is most appropriate to diagnose PE in her?",
        options: [
          "Catheter pulmonary angiography",
          "CT pulmonary angiogram",
          "Magnetic resonance angiography",
          "Transthoracic echocardiography",
          "Ventilation perfusion lung scan",
        ],
        correct: 4,
        explanation:
          "Her free T4 of 48 pmol/L with a suppressed TSH is manifest hyperthyroidism. The European Society of Urogenital Radiology states that iodine-based contrast media should not be given to patients with manifest hyperthyroidism, because the iodine load can worsen thyrotoxicosis. Her chest X-ray is normal, so a ventilation perfusion scan is likely to be diagnostic. A CT pulmonary angiogram needs iodinated contrast, and catheter angiography needs contrast and is invasive. Echocardiography does not diagnose PE in a stable patient. Magnetic resonance angiography is not an emergency test for PE.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "esur",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following additional findings would make leg ultrasound the best first test for her?",
        options: [
          "Hemoptysis on a second occasion",
          "Oxygen saturation falling to 91%",
          "Pleural rub at the right base",
          "Swollen, tender right calf",
          "Tachycardia above 120/minute",
        ],
        correct: 3,
        explanation:
          "The ESC guideline accepts a proximal DVT found on compression ultrasound in a patient with suspected PE as enough to start treatment. Leg ultrasound becomes the best first test when there are signs of DVT, and it also avoids contrast and radiation. Without leg signs its yield is low. More hemoptysis, a lower saturation, a pleural rub or a faster pulse raise concern for PE but do not point to a clot in the legs, so they do not change the first test.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "PE is confirmed in a right lower lobe segmental artery, with a normal right ventricle. Hemoglobin 128 g/L and platelets 236 x 10^9/L. She wants tablets rather than injections.",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for her?",
        options: [
          "apixaban 5 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "edoxaban 60 mg PO daily",
          "rivaroxaban 15 mg PO twice daily",
          "warfarin 5 mg PO daily",
        ],
        correct: 3,
        explanation:
          "Rivaroxaban can be started alone at 15 mg twice daily with food for 21 days, then 20 mg daily, so she needs no injections. Thrombosis Canada notes that dabigatran and edoxaban need 5 to 10 days of LMWH first, so starting either alone undertreats her in the first days. Warfarin alone is not an acceptable start because it must be overlapped with a rapid acting agent until the INR is above 2.0. Apixaban 5 mg twice daily is the maintenance dose and omits the 10 mg twice daily loading week.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to a medical ward on anticoagulation",
          "Admit to the ICU for thrombolysis",
          "Discharge, early clinic review",
          "Discharge, review in 3 months",
          "Observe for 6 hours, then discharge home",
        ],
        correct: 0,
        explanation:
          "A pulse of 110/minute or more is an item of the simplified PESI, so she is not in the low risk group, and she has active untreated thyrotoxicosis that needs monitoring as methimazole takes effect. Thrombosis Canada lists other medical factors as reasons to begin treatment in hospital. Discharge, early or late follow-up, or a short observation period all rely on a low risk score she does not have. Thrombolysis is for high risk PE with hypotension, and her BP is 128/70 mmHg.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "spesi",
      },
    ],
    sources: [
      { id: "esur", citation: "European Society of Urogenital Radiology Contrast Media Safety Committee. ESUR guidelines on contrast agents, version 10.0. 2018.", url: "https://www.esur.org/wp-content/uploads/2022/03/ESUR-Guidelines-10_0-Final-Version.pdf" },
      SRC_ESC_PE,
      SRC_TC_PE_TX,
      SRC_SPESI,
    ],
    ...META,
    version: 2,
  },
  /* 21 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-21",
    topic: "dvt-pe",
    title: "Leg swelling during treatment for a blood cancer",
    stem:
      "A 67-year-old man presents to the emergency department with two days of swelling of his whole right leg. Two months ago he was diagnosed with multiple myeloma. Six weeks ago he started bortezomib injections with lenalidomide and dexamethasone by mouth. He also takes ASA 81 mg daily prescribed by his hematologist, acyclovir, pantoprazole and monthly zoledronic acid. He has no previous VTE, recent surgery or travel. He walks his dog daily.\n\nThe right leg is swollen from the groin to the ankle, with pitting edema and tenderness along the femoral vein. He has no chest pain or shortness of breath. Hemoglobin is 104 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "86/minute", resp: "16/minute", bp: "134/78 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of his history most increase his risk of venous thromboembolism?",
        select: 2,
        options: [
          "Acyclovir prophylaxis",
          "Bortezomib injections",
          "Hemoglobin of 104 g/L",
          "Lenalidomide with dexamethasone",
          "Monthly zoledronic acid",
          "Myeloma diagnosed 2 months ago",
          "Pantoprazole daily",
        ],
        correct: [3, 5],
        explanation:
          "The International Myeloma Working Group names a recent myeloma diagnosis as a disease related risk factor, and thalidomide or lenalidomide, especially combined with dexamethasone, as the treatment that raises VTE risk most. That is why he was given ASA prophylaxis. The same group notes that bortezomib does not carry this risk. Acyclovir, pantoprazole and zoledronic acid are supportive drugs with no link to thrombosis. Mild anemia does not raise his VTE risk.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "imwg",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Ultrasound shows a noncompressible right common femoral vein. Platelets 168 x 10^9/L, creatinine 96 micromol/L, estimated creatinine clearance 73 mL/minute. Liver enzymes are normal.",
        prompt: "Which of the following is the most appropriate anticoagulant regimen for him now?",
        options: [
          "apixaban 10 mg PO twice daily",
          "ASA 325 mg PO daily",
          "dalteparin 5 000 units SC daily",
          "rivaroxaban 10 mg PO daily",
          "warfarin 5 mg PO daily",
        ],
        correct: 0,
        explanation:
          "He has a proximal DVT with active cancer and needs a full treatment dose. Thrombosis Canada recommends LMWH or an anti-Xa DOAC for cancer associated thrombosis, and apixaban is started at 10 mg twice daily for a week, then 5 mg twice daily. He has no GI or GU tumour, and his platelets and kidney function allow a DOAC. A higher dose of ASA does not treat a DVT. Dalteparin 5 000 units daily and rivaroxaban 10 mg daily are prophylactic doses. Warfarin alone takes days to act and must be overlapped with a rapid acting agent.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit for an IVC filter",
          "Admit for IV heparin",
          "Discharge, hematology review within days",
          "Discharge, recheck ultrasound in 3 months",
          "Observe for 24 hours, then discharge",
        ],
        correct: 2,
        explanation:
          "His vital signs are normal, he has no symptoms of PE, and his platelets and kidney function are adequate, so Thrombosis Canada supports outpatient treatment of his DVT. His hematologist needs to know promptly because the DVT occurred on prophylaxis and bears on his myeloma plan. IV heparin in hospital offers no advantage over an oral agent he can take at home. A filter is only for patients who cannot be anticoagulated. Observation for a day adds nothing, and waiting 3 months for review is too long for a patient on active cancer treatment.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate planned duration of his anticoagulation?",
        options: [
          "Six weeks, then stop",
          "Three months, then stop",
          "Until the D-dimer is normal",
          "Until the leg swelling resolves",
          "While myeloma therapy continues",
        ],
        correct: 4,
        explanation:
          "Thrombosis Canada advises at least 3 to 6 months of anticoagulation for cancer associated thrombosis, then continuing while the patient receives systemic cancer therapy or has active disease, with review every 3 to 6 months. He is on lenalidomide based treatment, so a fixed stop at 6 weeks or 3 months leaves him unprotected while his risk remains high. Resolution of swelling and a normal D-dimer do not show that the risk has passed.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
    ],
    sources: [
      { id: "imwg", citation: "Palumbo A, et al. Prevention of thalidomide- and lenalidomide-associated thrombosis in myeloma. International Myeloma Working Group. Leukemia. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18094721/" },
      SRC_TC_CANCER,
      SRC_TC_DVT_TX,
    ],
    ...META,
    version: 2,
  },
  /* 22 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-22",
    topic: "dvt-pe",
    title: "A finding on a baseline scan",
    stem:
      "A 61-year-old woman is sent to the emergency department by her oncologist because of a CT result. She has high grade serous ovarian cancer. Six weeks ago she had a hysterectomy, removal of both ovaries and omentectomy, with no bowel resection. She is due to start carboplatin and paclitaxel next week. A baseline CT of the chest and abdomen done yesterday shows no visible residual tumour and a filling defect in a right lower lobe segmental pulmonary artery, with a normal right ventricle.\n\nShe has no chest pain, shortness of breath or leg symptoms. She walks 30 minutes a day and is eating normally. She has no bleeding. Her lungs are clear. Hemoglobin 112 g/L, platelets 232 x 10^9/L, creatinine 64 micromol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "124/74 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her simplified pulmonary embolism severity index (sPESI) score?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 1,
        explanation:
          "Active cancer is one of the six sPESI items, so she scores 1 point. She is under 80 years old, has no chronic heart or lung disease, and her pulse is below 110/minute, her systolic BP is above 100 mmHg and her O2 saturation is above 90%. A score of 0 would ignore her cancer. Scores of 2 or more would need a second item, such as tachycardia or hypoxemia, which she does not have.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "spesi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of this incidental embolus most determines whether it needs anticoagulation?",
        options: [
          "Absence of symptoms",
          "Detection on a staging CT",
          "Normal O2 saturation",
          "Normal right ventricle size",
          "Segmental artery location",
        ],
        correct: 4,
        explanation:
          "Thrombosis Canada decides by the most proximal artery involved. An incidental embolus in a segmental or more proximal artery warrants the same anticoagulant regimen as symptomatic PE, so hers needs full treatment. The lack of symptoms and its discovery on a staging scan are how most incidental emboli present, and neither lowers the risk of recurrence in active cancer. A normal right ventricle and a normal O2 saturation help decide where she is treated, not whether she is treated.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for her?",
        options: [
          "apixaban 2.5 mg PO twice daily",
          "apixaban 10 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "edoxaban 60 mg PO daily",
          "rivaroxaban 20 mg PO daily",
        ],
        correct: 1,
        explanation:
          "Apixaban was compared with LMWH for cancer associated thrombosis in the Caravaggio trial, and Thrombosis Canada gives it without initial LMWH at 10 mg twice daily for 1 week, then 5 mg twice daily. She has no GI or GU tumour in place, and her platelets and kidney function allow a DOAC. Edoxaban needs 5 days of LMWH first. Rivaroxaban 20 mg daily skips the 21 days of 15 mg twice daily. Dabigatran has not been studied in cancer associated thrombosis and needs a parenteral lead-in. Apixaban 2.5 mg twice daily is an extended phase dose.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "She is discharged on an oral anticoagulant. Twelve days later she returns after her first chemotherapy cycle. She has vomited after most meals and tablets for 2 days. She has no bleeding. Creatinine is 70 micromol/L and platelets are 190 x 10^9/L.",
        prompt: "Which of the following is the most appropriate change to her anticoagulation now?",
        options: [
          "Continue her oral anticoagulant",
          "dalteparin 5 000 units SC daily",
          "dalteparin 15 000 units SC daily",
          "Hold anticoagulation until she can eat",
          "rivaroxaban 20 mg PO daily",
        ],
        correct: 2,
        explanation:
          "Thrombosis Canada prefers LMWH for patients with significant nausea and vomiting, because oral absorption becomes unreliable. Dalteparin 200 units/kg at 70 kg is 14 000 units, rounded to the 15 000 unit syringe. Continuing a tablet she keeps vomiting up, or switching to another tablet, leaves her unprotected. Holding treatment two weeks after a PE, during chemotherapy, risks recurrence. Dalteparin 5 000 units daily is a prophylactic dose.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q5",
        kind: "single",
        update:
          "After IV ondansetron and 1 L of saline she stops vomiting and drinks fluids. Her pulse is 82/minute, her BP is 122/72 mmHg and her O2 saturation is 97%. She can self-inject and lives with her husband.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to a medical ward for her PE",
          "Admit until chemotherapy is finished",
          "Discharge, oncology follow-up this week",
          "Discharge, thrombosis clinic in 3 months",
          "Observe 24 hours on the short stay unit",
        ],
        correct: 2,
        explanation:
          "Her only sPESI point comes from cancer, she has normal vital signs and no oxygen need, her vomiting is controlled and she has support at home. Thrombosis Canada allows outpatient care judged by PESI, the Hestia criteria or clinical judgment, and she meets no Hestia reason for admission. Her oncologist needs to know about the switch before the next cycle. Admission for the PE or for the whole course of chemotherapy is unnecessary. A 24 hour stay adds nothing now that she drinks, and waiting 3 months for review is too long.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-pe-tx",
      },
    ],
    sources: [SRC_SPESI, SRC_TC_CANCER, SRC_TC_PE_TX],
    ...META,
    version: 2,
  },
  /* 23 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-23",
    topic: "dvt-pe",
    title: "A low platelet count on routine blood work",
    stem:
      "A 57-year-old woman is sent to the emergency department from the chemotherapy clinic because her platelet count today is 38 x 10^9/L. She has breast cancer with liver and bone metastases and receives chemotherapy every 3 weeks, most recently 10 days ago. Three months ago she had a right femoral DVT and has since injected dalteparin 10 000 units daily. She has no bleeding, bruising, black stools or blood in her urine.\n\nShe looks well. There are no petechiae, and her gums are not bleeding. The right leg is slightly fuller than the left, with no tenderness. Hemoglobin 98 g/L, white cells 2.4 x 10^9/L, neutrophils 1.6 x 10^9/L, creatinine 62 micromol/L.",
    vitals: { temperature: "36.6°C oral", pulse: "88/minute", resp: "16/minute", bp: "118/70 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to her anticoagulation today?",
        options: [
          "Continue dalteparin 10 000 units daily",
          "dalteparin 5 000 units SC daily",
          "Hold dalteparin until platelets recover",
          "Platelet transfusion to allow full dose",
          "Switch to apixaban 5 mg twice daily",
        ],
        correct: 1,
        explanation:
          "Thrombosis Canada recommends half dose LMWH for a platelet count between 25 and 50 x 10^9/L, so her 10 000 units becomes 5 000 units daily. Full dose is continued only while the count stays at 50 or more. Stopping altogether is usually reserved for counts below 20. Platelet transfusion to allow full dosing is used for acute proximal VTE, and her DVT is 3 months old. A DOAC is less suitable than LMWH when the platelet count is between 25 and 50.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following platelet counts would usually lead to anticoagulation being withheld for her?",
        options: [
          "Below 20 x 10^9/L",
          "Below 50 x 10^9/L",
          "Below 75 x 10^9/L",
          "Below 100 x 10^9/L",
          "Below 150 x 10^9/L",
        ],
        correct: 0,
        explanation:
          "Thrombosis Canada states that anticoagulants are usually withheld when the platelet count falls below 20 x 10^9/L, until it rises again. Between 25 and 50 x 10^9/L half dose LMWH is used, and full dose can continue while the count is 50 or more. Counts of 75, 100 or 150 x 10^9/L do not call for any change in dose, and stopping at those levels would leave her exposed to recurrent VTE while she has metastatic cancer on chemotherapy.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit for daily platelet counts",
          "Admit for IV heparin by infusion",
          "Discharge, CBC before the next cycle",
          "Discharge, CBC in 2 to 3 days",
          "Observe 24 hours for bleeding",
        ],
        correct: 3,
        explanation:
          "She has normal vital signs, no bleeding and no neutropenic fever, so she can continue treatment at home. Her count is 10 days after chemotherapy and may still be falling, so a CBC within 2 to 3 days shows whether the dose must change again. Thrombosis Canada advises consulting a thrombosis expert or hematologist, which can happen as an outpatient. Waiting 11 days for the next cycle is too long if the count drops below 20. Admission for platelet counts, a heparin infusion or observation adds nothing while she is well and not bleeding.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-cancer",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Before discharge she mentions that her left calf has ached since yesterday. She has not injured it.",
        prompt: "Which of the following examination findings would most support a new DVT in her left leg?",
        options: [
          "Bruises at abdominal injection sites",
          "Left calf 3 cm larger with pitting edema",
          "Petechiae scattered over both shins",
          "Tenderness over a tibial bone metastasis",
          "Warm red plaque with a raised border",
        ],
        correct: 1,
        explanation:
          "Calf swelling of 3 cm or more compared with the other leg and pitting edema confined to the symptomatic leg are both items of the Wells score for DVT, and together they point to a new clot needing ultrasound. Bruising at injection sites and petechiae reflect her low platelets and LMWH, not thrombosis. Focal bony tenderness points to a metastasis as the cause of pain. A warm red plaque with a raised border suggests cellulitis or erysipelas.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "wells-dvt",
      },
    ],
    sources: [SRC_TC_CANCER, SRC_WELLS_DVT],
    ...META,
    version: 2,
  },
  /* 24 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-24",
    topic: "dvt-pe",
    title: "Pleuritic pain during a gout flare",
    stem:
      "A 68-year-old man presents to the emergency department with two days of right pleuritic chest pain and shortness of breath on stairs. Six years ago he had a left leg DVT after knee surgery and was treated for 3 months. For the past week he has taken naproxen 500 mg twice daily for a gout flare in his right big toe. He also takes allopurinol, atorvastatin, ramipril and ASA 81 mg daily, which he started on his own for prevention. He has no coronary or cerebrovascular disease, cancer, hemoptysis, recent surgery or leg pain.\n\nHis lungs are clear. The legs are not swollen or tender. The right first toe joint is red and swollen. The department uses the revised Geneva score.",
    vitals: { temperature: "37.2°C oral", pulse: "92/minute", resp: "20/minute", bp: "142/84 mmHg", o2sat: "95% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his revised Geneva score for pulmonary embolism?",
        options: [
          "4 points",
          "5 points",
          "6 points",
          "7 points",
          "8 points",
        ],
        correct: 3,
        explanation:
          "He scores 1 point for age over 65 years, 3 points for a previous DVT and 3 points for a heart rate of 75 to 94/minute, for 7 points. That places him in the intermediate probability group of 4 to 10 points. He has no recent surgery or fracture, cancer, hemoptysis, unilateral leg pain or signs of DVT on palpation, so none of those points apply. The gout flare and naproxen are not Geneva items.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "geneva",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his assessment for PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram without D-dimer",
          "D-dimer with an age-adjusted cutoff",
          "PERC rule to exclude PE",
          "Ventilation perfusion lung scan",
        ],
        correct: 2,
        explanation:
          "With an intermediate revised Geneva score, a D-dimer comes first. In ADJUST-PE, patients with a nonhigh probability by Wells or revised Geneva had PE excluded when the D-dimer was below age x 10 mcg/L, which is 680 mcg/L for him. Going straight to CT is for a high probability, and imaging first exposes him to radiation he may not need. The PERC rule cannot be used because he is over 50 and has a previous DVT. Leg ultrasound has low yield without leg signs.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "adjust-pe",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "Further testing confirms right lower lobe segmental and subsegmental PE with a normal right ventricle. Troponin is normal. Creatinine 88 micromol/L, estimated creatinine clearance 84 mL/minute. CBC is normal.",
        prompt: "Which of the following of his current medications should be stopped when anticoagulation starts?",
        select: 2,
        options: [
          "allopurinol 300 mg daily",
          "ASA 81 mg daily",
          "atorvastatin 20 mg daily",
          "naproxen 500 mg twice daily",
          "ramipril 5 mg daily",
          "None",
        ],
        correct: [1, 3],
        explanation:
          "In the EINSTEIN DVT and PE trials, patients who took an NSAID with their anticoagulant had clinically relevant bleeding at 1.77 times the rate on anticoagulant alone, and those who took ASA had 1.70 times the rate. His ASA has no indication, because he has no coronary or cerebrovascular disease, and his gout flare can be treated without an NSAID. Allopurinol, atorvastatin and ramipril do not raise bleeding risk and treat his chronic conditions.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "davidson",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for him?",
        options: [
          "apixaban 2.5 mg PO twice daily",
          "apixaban 5 mg PO twice daily",
          "apixaban 10 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "edoxaban 60 mg PO daily",
        ],
        correct: 2,
        explanation:
          "Thrombosis Canada starts apixaban at 10 mg twice daily for 7 days, then 5 mg twice daily, with no LMWH needed first and no dose change for a creatinine clearance of 30 mL/minute or more. 5 mg twice daily is the maintenance dose and omits the loading week. 2.5 mg twice daily is a reduced dose considered only after 6 months of treatment. Dabigatran and edoxaban are started only after 5 to 10 days of LMWH.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit to a medical ward",
          "Admit to a monitored bed",
          "Discharge with early follow-up",
          "Discharge without follow-up",
          "Observe 24 hours, then discharge",
        ],
        correct: 2,
        explanation:
          "His simplified PESI is 0. He is under 80 years old, has no cancer or chronic heart or lung disease, his pulse is below 110/minute, his systolic BP is above 100 mmHg and his O2 saturation is 90% or more. Thrombosis Canada supports outpatient treatment for such low risk PE, with rapid and reliable follow-up. A ward or monitored bed adds cost and risk without benefit. A 24 hour stay adds nothing, and discharge without follow-up leaves no check on bleeding or recovery.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-pe-tx",
      },
    ],
    sources: [
      { id: "geneva", citation: "Le Gal G, et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16461960/" },
      SRC_ADJUST_PE,
      { id: "davidson", citation: "Davidson BL, et al. Bleeding risk of patients with acute venous thromboembolism taking nonsteroidal anti-inflammatory drugs or aspirin. JAMA Intern Med. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24733305/" },
      SRC_TC_PE_TX,
    ],
    ...META,
    version: 2,
  },
  /* 25 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-25",
    topic: "dvt-pe",
    title: "Leg swelling during rehabilitation",
    stem:
      "A 78-year-old woman is sent to the emergency department from a rehabilitation unit with two days of right leg swelling. Nine days ago she had a hemiarthroplasty for a right hip fracture. She has received enoxaparin 40 mg SC daily since the day after surgery and had no heparin before this admission. She has no bleeding and takes no other new medications.\n\nThe right leg is swollen to the groin. Ultrasound shows a new right femoral vein DVT. Her platelet count was 240 x 10^9/L on the day of surgery, 256 x 10^9/L six days after surgery and 88 x 10^9/L today. She has no signs of infection.",
    vitals: { temperature: "37.0°C oral", pulse: "92/minute", resp: "16/minute", bp: "138/74 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her 4Ts score for heparin induced thrombocytopenia?",
        options: [
          "4 points",
          "5 points",
          "6 points",
          "7 points",
          "8 points",
        ],
        correct: 4,
        explanation:
          "Her platelets fell from a peak of 256 to 88 x 10^9/L, a fall of 66% with a nadir of 20 x 10^9/L or more, which scores 2. The count was normal after 5 days of enoxaparin and had fallen by day 8, with no heparin before this admission, a clear onset within the 5 to 10 day window, which scores 2. A new proven DVT scores 2, and with no other apparent cause she scores 2 more. The total of 8 is in the high probability range of 6 to 8.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-hit",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following actions are most appropriate for her now?",
        options: [
          "Give vitamin K 10 mg IV",
          "Insert an IVC filter",
          "Send a HIT immunoassay",
          "Start ASA 81 mg daily",
          "Start warfarin today",
          "Stop enoxaparin",
          "Switch to dalteparin",
          "Transfuse platelets",
        ],
        select: 2,
        correct: [2, 5],
        explanation:
          "With a high probability 4Ts score, all heparin including LMWH must stop, and an immunoassay for HIT antibodies is recommended. Switching to dalteparin keeps her exposed to a cross reacting heparin. Warfarin should not start until the platelet count recovers, and routine platelet transfusion is suggested against. Vitamin K is only needed if she is already taking a vitamin K antagonist, and neither a filter nor ASA treats HIT.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-hit",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate anticoagulant for her now?",
        options: [
          "argatroban IV infusion",
          "dalteparin 12 500 units SC daily",
          "enoxaparin 60 mg SC every 12 hours",
          "heparin IV infusion",
          "warfarin 5 mg PO daily",
        ],
        correct: 0,
        explanation:
          "Acute HIT with thrombosis needs a non-heparin anticoagulant, and argatroban is one of the recommended options, along with bivalirudin, danaparoid, fondaparinux or a DOAC. Dalteparin, enoxaparin and IV unfractionated heparin all expose her to heparin and can worsen HIT. Warfarin started during acute HIT can cause venous limb gangrene and should wait until the platelet count recovers.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-hit",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following examination findings would most strengthen the diagnosis of HIT?",
        options: [
          "Bruising around the hip incision",
          "Petechiae on both shins",
          "Pitting edema of the right ankle",
          "Skin necrosis at injection sites",
          "Splinter hemorrhages in the nails",
        ],
        correct: 3,
        explanation:
          "Skin necrosis at heparin injection sites is a thrombotic complication of HIT and scores in the thrombosis item of the 4Ts. HIT is prothrombotic, and bleeding signs such as petechiae are unusual despite the low platelet count. Bruising near a recent hip incision is expected after surgery. Ankle edema reflects her known DVT, and splinter hemorrhages suggest endocarditis or trauma.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "ash-hit",
      },
    ],
    sources: [SRC_ASH_HIT],
    ...META,
  },
  /* 26 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-26",
    topic: "dvt-pe",
    title: "A blue, swollen leg",
    stem:
      "A 61-year-old man with metastatic pancreatic cancer presents to the emergency department with 18 hours of rapidly increasing left leg pain and swelling. The tumour invades the duodenal wall. He stopped his apixaban five days ago because of cost. He has no recent bleeding or surgery.\n\nThe entire left leg is massively swollen, tense and mottled blue from the foot to the groin. Pedal pulses are faint by Doppler. Light touch sensation is reduced over the foot. The right leg is normal. CBC, INR and creatinine are normal.",
    vitals: { temperature: "37.4°C oral", pulse: "118/minute", resp: "20/minute", bp: "104/66 mmHg", o2sat: "95% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following diagnoses best describes this presentation of leg swelling?",
        options: [
          "Acute arterial embolism",
          "Necrotizing fasciitis",
          "Phlegmasia alba dolens",
          "Phlegmasia cerulea dolens",
          "Ruptured popliteal cyst",
        ],
        correct: 3,
        explanation:
          "Massive swelling of the whole leg with cyanosis, pain and reduced distal perfusion, in a patient with cancer who stopped anticoagulation, is phlegmasia cerulea dolens, a limb threatening extensive DVT. Phlegmasia alba dolens presents with a white, blanched leg. An arterial embolism causes a pale, cold limb without massive swelling. Necrotizing fasciitis causes severe pain with skin changes and toxicity rather than a blue leg swollen to the groin, and a ruptured popliteal cyst causes calf swelling only.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-dvt-tx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant for him?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin 200 units/kg SC daily",
          "heparin IV bolus and infusion",
          "rivaroxaban 15 mg PO twice daily",
          "warfarin with LMWH overlap",
        ],
        correct: 2,
        explanation:
          "Limb threatening DVT may need catheter directed thrombolysis or mechanical thrombectomy, and IV unfractionated heparin suits this setting because its effect can be reversed quickly around a procedure and it is used close to thrombolytic therapy. Dalteparin, usually preferred in cancer, gives a longer effect after each daily dose. Apixaban, rivaroxaban and warfarin are oral agents with longer effects that complicate an urgent intervention.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit and consult interventional radiology",
          "Admit to medicine for anticoagulation alone",
          "Discharge on dalteparin with follow-up",
          "Observe in the ED and repeat ultrasound",
          "Transfer for vena cava filter insertion",
        ],
        correct: 0,
        explanation:
          "Phlegmasia cerulea dolens is limb threatening, so he needs admission and urgent assessment for catheter directed thrombolysis or thrombectomy, as long as his bleeding risk is acceptable. Outpatient treatment is not appropriate for limb threatening DVT. Anticoagulation alone may not relieve the venous obstruction fast enough to save the limb, and repeating ultrasound only delays care. A vena cava filter is used when anticoagulation is contraindicated, which is not the case here.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
      {
        id: "q4",
        kind: "single",
        update: "After thrombectomy his leg improves. He is ready to choose a long term anticoagulant.",
        prompt: "Which of the following is the most appropriate long term anticoagulant for him?",
        options: [
          "ASA 81 mg PO daily",
          "dalteparin 200 units/kg SC daily",
          "edoxaban 60 mg PO once daily",
          "rivaroxaban 20 mg PO once daily",
          "warfarin with INR 2.0 to 3.0",
        ],
        correct: 1,
        explanation:
          "His pancreatic tumour invades the duodenal wall, and LMWH is preferred over a DOAC for malignancy involving the GI tract. Dalteparin 200 units/kg daily for the first month, then about 150 units/kg, is the recommended regimen. Edoxaban and rivaroxaban caused more GI bleeding in patients with upper GI cancers. Warfarin is less effective than LMWH or DOACs in cancer associated thrombosis. ASA does not treat VTE.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
    ],
    sources: [SRC_TC_DVT_TX, SRC_TC_CANCER],
    ...META,
  },
  /* 27 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-27",
    topic: "dvt-pe",
    title: "Sudden breathlessness after bowel surgery",
    stem:
      "A 64-year-old man is brought to the emergency department by ambulance with 2 hours of sudden shortness of breath. He nearly fainted when it started. Nine days ago he had a laparoscopic right hemicolectomy for colon cancer with no spread, and he went home on day 4. He has been eating and passing stool normally. He takes no anticoagulant.\n\nHe is anxious and diaphoretic. His lungs are clear. The abdomen is mildly tender around the port sites, which are clean. The calves are soft. The ECG shows sinus tachycardia with T wave inversion in V1 to V3.",
    vitals: { temperature: "37.3°C oral", pulse: "118/minute", resp: "28/minute", bp: "104/68 mmHg", o2sat: "90% on 4 L/minute by nasal prongs", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional findings would most suggest a cause other than PE for his presentation?",
        options: [
          "Diffuse abdominal rigidity with fever",
          "Distended neck veins",
          "Left parasternal heave",
          "Loud pulmonary component of S2",
          "Tachypnea with clear lung fields",
        ],
        correct: 0,
        explanation:
          "After bowel surgery, an anastomotic leak with sepsis can also cause sudden tachycardia, tachypnea and hypotension. Diffuse rigidity with fever would point to peritonitis and change the plan. Distended neck veins, a parasternal heave and a loud pulmonary component of S2 are signs of right ventricular pressure overload, which support PE. Tachypnea with clear lungs and hypoxemia also fits PE. His mild tenderness around clean port sites is expected 9 days after surgery.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for suspected PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "High sensitivity D-dimer first",
          "Transthoracic echocardiogram only",
          "Ventilation perfusion lung scan",
        ],
        correct: 1,
        explanation:
          "His pretest probability is high, with recent major surgery, sudden dyspnea, near syncope, hypoxemia and right sided ECG changes, and he is not hypotensive, so he can go to CT. The ESC guideline advises CT pulmonary angiography without D-dimer testing when probability is high. A D-dimer is expected to be raised 9 days after surgery and cannot exclude PE here. A perfusion scan is slower, and leg ultrasound without leg signs has low yield. Echocardiography alone does not confirm PE in a patient stable enough for CT.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Imaging confirms a saddle embolus extending into both main pulmonary arteries, with a dilated right ventricle. Troponin is raised. His BP is 100/64 mmHg. Creatinine is 84 micromol/L.",
        prompt: "Which of the following anticoagulant orders is most appropriate for him now?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin 200 units/kg SC daily",
          "fondaparinux 7.5 mg SC daily",
          "heparin 80 units/kg IV, then infusion",
          "rivaroxaban 15 mg PO twice daily",
        ],
        correct: 3,
        explanation:
          "He has intermediate high risk PE with RV dilation, a raised troponin and a borderline BP, so he may soon need rescue reperfusion. Thrombosis Canada prefers IV unfractionated heparin in the short term when thrombolysis is being considered, because its short half-life limits bleeding if a thrombolytic is added, and it can be stopped quickly after his recent surgery. LMWH, fondaparinux and the DOACs are long acting and cannot be switched off quickly. They suit stable patients who are unlikely to need reperfusion.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Twenty minutes after the anticoagulant is started, he becomes unresponsive and pulseless. The monitor shows pulseless electrical activity. CPR is started, and no other cause is found.",
        prompt: "Which of the following thrombolytic orders is most appropriate now?",
        options: [
          "alteplase 50 mg IV bolus",
          "alteplase 100 mg IV over 2 hours",
          "alteplase 0.6 mg/kg IV over 15 minutes",
          "heparin 5 000 units IV bolus",
          "No thrombolysis after recent surgery",
        ],
        correct: 0,
        explanation:
          "Cardiac arrest from a confirmed saddle embolus is high risk PE, and Thrombosis Canada lists alteplase 50 mg as a bolus over 1 minute for a patient in cardiac arrest. The ESC guideline counts major surgery in the past 3 weeks as an absolute contraindication to thrombolysis, but notes that absolute contraindications may become relative in immediately life threatening high risk PE. Without reperfusion his arrest is likely fatal, and surgical embolectomy cannot be arranged during CPR, so withholding lysis is the greater risk. A 2 hour or 15 minute infusion is too slow for a patient without a pulse. More heparin does not dissolve a saddle embolus.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
    ],
    sources: [SRC_ESC_PE, SRC_TC_PE_TX],
    ...META,
    version: 2,
  },
  /* 28 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-28",
    topic: "dvt-pe",
    title: "Calf swelling late in the evening",
    stem:
      "You are working in a community hospital emergency department where ultrasound is not available until 08:00. At 21:00, a 46-year-old woman presents with three days of left calf pain and swelling. Two weeks ago she was admitted for four days with pneumonia and spent most of that time in bed. She has no cancer, previous VTE or bleeding history and takes no medications.\n\nThe left calf is 3 cm larger than the right, with pitting edema and tenderness along the deep veins. The thigh is not swollen, and there are no collateral veins. DVT is the most likely diagnosis.",
    vitals: { temperature: "36.9°C oral", pulse: "86/minute", resp: "16/minute", bp: "126/78 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her two level Wells score for deep vein thrombosis?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 4,
        explanation:
          "She scores 1 point each for being recently bedridden for 3 days or more, calf swelling of 3 cm or more, pitting edema confined to the symptomatic leg and tenderness along the deep veins, for 4 points. She has no cancer, paralysis or cast, whole leg swelling, collateral veins or previous DVT. No points are subtracted because DVT is the most likely diagnosis. A score of 2 or more makes DVT likely.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her tonight?",
        options: [
          "Admit for IV heparin until ultrasound",
          "D-dimer, and discharge if it is negative",
          "Discharge and book ultrasound without treatment",
          "Start LMWH and book ultrasound for tomorrow",
          "Transfer tonight for ultrasound elsewhere",
        ],
        correct: 3,
        explanation:
          "With a likely pretest probability and a delay to ultrasound of more than 4 hours, a rapidly acting anticoagulant such as LMWH should start until testing is done, unless bleeding risk is high. A likely score calls for ultrasound, and a negative D-dimer alone is not the recommended way to exclude DVT in this group. Discharge without treatment leaves a probable DVT untreated overnight. Admission for IV heparin or a night transfer adds cost and risk without benefit.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate LMWH regimen for her?",
        options: [
          "dalteparin 5000 units SC daily",
          "enoxaparin 40 mg SC once daily",
          "enoxaparin 80 mg SC once daily",
          "tinzaparin 14 000 units SC daily",
          "tinzaparin 4500 units SC daily",
        ],
        correct: 3,
        explanation:
          "Therapeutic tinzaparin is 175 units/kg once daily, which for 80 kg is 14 000 units. Enoxaparin 40 mg daily, tinzaparin 4500 units daily and dalteparin 5000 units daily are prophylactic doses. Therapeutic enoxaparin is 1 mg/kg twice daily or 1.5 mg/kg once daily, so 80 mg once daily gives her only two thirds of the once daily dose of 120 mg.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q4",
        kind: "single",
        update: "The next morning, proximal compression ultrasound is normal. D-dimer is 1600 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Continue tinzaparin for 3 months",
          "Contrast venography of the left leg",
          "CT venography of the left leg",
          "Repeat proximal ultrasound in 5 to 7 days",
          "No further testing for DVT",
        ],
        correct: 3,
        explanation:
          "A negative proximal ultrasound does not exclude a calf DVT that may extend, and with a likely pretest probability and a positive D-dimer, proximal ultrasound should be repeated in 5 to 7 days. Treating for 3 months without a diagnosis exposes her to unnecessary bleeding risk. Venography is not needed at this stage. Stopping all testing would be reasonable only with a negative D-dimer.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
    ],
    sources: [SRC_WELLS_DVT, SRC_TC_DVT_DX, SRC_TC_DVT_TX],
    ...META,
  },
  /* 29 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-29",
    topic: "dvt-pe",
    title: "Calf pain after a previous clot",
    stem:
      "A 57-year-old man presents to the emergency department with three days of mild aching in the left calf. He started a new running program last week. Fourteen months ago he had a left popliteal DVT after knee surgery, treated with rivaroxaban for three months. He has had no recent surgery, travel, injury or immobilization. He has no cancer and takes no medications. The report of an ultrasound done when treatment ended is available.\n\nThe left calf is 1 cm larger than the right, with tenderness along the deep veins. There is no pitting edema. You think a calf muscle strain is as likely as DVT.",
    vitals: { temperature: "36.7°C oral", pulse: "72/minute", resp: "14/minute", bp: "128/78 mmHg", o2sat: "98% on room air", weight: "81 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his two level Wells score for deep vein thrombosis?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 0,
        explanation:
          "He scores 1 point for tenderness along the deep veins and 1 point for a previously documented DVT. He loses 2 points because a muscle strain is as likely as DVT, for a total of 0. His calf swelling is under 3 cm, and he has no pitting edema, cancer, recent immobilization or surgery. A score below 2 means DVT is unlikely.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for suspected recurrent DVT?",
        options: [
          "Contrast venography of the left leg",
          "CT venography of the left leg",
          "D-dimer, with ultrasound if positive",
          "Empirical rivaroxaban for 3 months",
          "Proximal ultrasound now and in 1 week",
        ],
        correct: 2,
        explanation:
          "For suspected recurrent DVT with an unlikely pretest probability, the ASH guideline suggests starting with a D-dimer, with ultrasound only if it is positive. A negative D-dimer spares him imaging that can be hard to interpret after a previous DVT. Starting rivaroxaban without a diagnosis exposes him to bleeding. CT and contrast venography are not first line tests.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "ash-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "D-dimer is 1900 mcg/L FEU. Ultrasound shows a noncompressible left popliteal vein. The earlier report described residual thrombus in the same segment.",
        prompt: "Which of the following comparisons with the earlier ultrasound would confirm recurrent DVT?",
        options: [
          "Diameter increase of 1 mm or more",
          "Diameter increase of 4 mm or more",
          "Noncompressible popliteal segment alone",
          "Reduced respiratory phasic flow",
          "Thrombus that now appears echogenic",
        ],
        correct: 1,
        explanation:
          "Residual compression abnormalities often persist after a DVT, so a noncompressible popliteal vein alone does not prove a new clot in a segment that was abnormal before. Recurrence is confirmed by an increase of at least 4 mm in the compressed vein diameter compared with the prior study, or by noncompressibility in a previously normal segment. A 1 mm change is too small to count. Echogenic thrombus and reduced phasic flow do not show that the clot is new.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "tc-dvt-dx",
      },
      {
        id: "q4",
        kind: "single",
        update: "The compressed diameter is now 9 mm, compared with 3 mm before. His bleeding risk is low.",
        prompt: "Which of the following is the most appropriate plan for anticoagulation?",
        options: [
          "Anticoagulation for 3 months, then stop",
          "Anticoagulation with no planned stop date",
          "ASA 81 mg PO daily indefinitely",
          "IVC filter without anticoagulation",
          "Rivaroxaban for 6 weeks, then stop",
        ],
        correct: 1,
        explanation:
          "This second DVT has no transient provoking factor, so it is unprovoked. For unprovoked VTE, the ASH guideline suggests indefinite anticoagulation after primary treatment, with periodic review of bleeding risk. Stopping after 3 months or 6 weeks leaves him at high risk of recurrence. Anticoagulation is suggested over ASA for secondary prevention, and a filter without anticoagulation is only for patients who cannot be anticoagulated.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-tx",
      },
    ],
    sources: [SRC_WELLS_DVT, SRC_ASH_DX, SRC_TC_DVT_DX, SRC_ASH_TX],
    ...META,
  },
  /* 30 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-30",
    topic: "dvt-pe",
    title: "Whole leg swelling in late pregnancy",
    stem:
      "A 29-year-old woman, G2P1 at 31 weeks gestation, presents to the emergency department with two days of swelling of the whole left leg, with left buttock and flank pain. She has no shortness of breath or chest pain. She has no previous VTE, and her pregnancy has been uncomplicated.\n\nThe left thigh is 4 cm larger than the right, with pitting edema to the groin. The calf is soft. There is no costovertebral angle tenderness, and urinalysis is normal. The fetal heart rate is normal.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "16/minute", bp: "116/72 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first diagnostic test for her?",
        options: [
          "Compression ultrasound of the left leg",
          "Contrast venography of the left leg and pelvis",
          "CT venography of the pelvis",
          "D-dimer before any imaging",
          "MR venography of the pelvis",
        ],
        correct: 0,
        explanation:
          "Compression ultrasound is the first test for suspected DVT in pregnancy and avoids radiation. Her whole leg swelling with buttock and flank pain raises concern for iliac vein thrombosis, so the study should include the proximal veins with Doppler flow. D-dimer rises through normal pregnancy and is not relied on here. CT and contrast venography expose the fetus to radiation, and MR venography is reserved for when ultrasound is negative or inconclusive.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "ash-preg",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ultrasound of the femoral and popliteal veins is normal, and the iliac veins are poorly seen. MR venography is booked for 09:00 tomorrow.",
        prompt: "Which of the following is the most appropriate management while she awaits MR venography?",
        options: [
          "apixaban 10 mg PO now",
          "dalteparin 5000 units SC now",
          "dalteparin 15 000 units SC now",
          "heparin 5000 units SC now",
          "No anticoagulation until imaging",
        ],
        correct: 2,
        explanation:
          "Her suspicion of DVT is high and imaging is delayed well beyond 4 hours, so a rapidly acting therapeutic anticoagulant should start now unless bleeding risk is high. LMWH is the choice in pregnancy, and dalteparin 200 units/kg for 80 kg is 16 000 units, rounded to the nearest 15 000 unit syringe. Dalteparin 5000 units and heparin 5000 units SC are prophylactic doses. Apixaban is avoided in pregnancy. Withholding treatment overnight leaves a possible iliofemoral DVT untreated.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "The MR scanner is out of service for a week.",
        prompt: "Which of the following is the most appropriate diagnostic plan for her?",
        options: [
          "Contrast venography of the left leg",
          "CT venography of the pelvis",
          "D-dimer to decide on treatment",
          "Serial ultrasound with iliac Doppler",
          "No further testing and stop LMWH",
        ],
        correct: 3,
        explanation:
          "When the first ultrasound is negative but suspicion persists in pregnancy, the ASH guideline suggests further testing with serial compression ultrasound or MR venography. With MR unavailable, serial ultrasound that includes Doppler assessment of the iliac veins is the right choice. CT and contrast venography add fetal radiation. D-dimer is raised in normal pregnancy, and stopping all testing leaves an iliac DVT undiagnosed.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "ash-preg",
      },
    ],
    sources: [SRC_ASH_PREG, SRC_TC_DVT_DX],
    ...META,
  },
  /* 31 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-31",
    topic: "dvt-pe",
    title: "Sudden breathlessness with a swollen calf",
    stem:
      "A 44-year-old man presents to the emergency department with six hours of sudden shortness of breath and right pleuritic chest pain. Two weeks ago he had arthroscopic surgery on his right knee and has used crutches since. His right calf has been swollen for four days, and he coughed up a small amount of blood this morning. He has no cancer, previous VTE or bleeding history.\n\nThe right calf is 3 cm larger than the left and tender along the deep veins. His lungs are clear. You think PE is the most likely diagnosis. The CT scanner is down for repair for about four hours.",
    vitals: { temperature: "37.2°C oral", pulse: "112/minute", resp: "24/minute", bp: "134/82 mmHg", o2sat: "93% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: [
          "6.0 points",
          "7.5 points",
          "8.5 points",
          "9.0 points",
          "10.0 points",
        ],
        correct: 4,
        explanation:
          "He scores 3 for clinical signs of DVT, 3 for PE as the most likely diagnosis, 1.5 for a heart rate above 100/minute, 1.5 for surgery within 4 weeks and 1 for hemoptysis, for 10.0. He has no cancer or previous VTE. A score above 6.0 is high clinical probability.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate use of D-dimer testing for him?",
        options: [
          "Age adjusted D-dimer cutoff",
          "D-dimer to guide anticoagulation",
          "D-dimer with a 1000 mcg/L cutoff",
          "D-dimer with a 500 mcg/L cutoff",
          "No D-dimer, proceed to imaging",
        ],
        correct: 4,
        explanation:
          "With a high pretest probability, the ASH guideline suggests starting with CT pulmonary angiography rather than D-dimer, because a negative result does not lower the probability of PE enough to avoid imaging. Higher cutoffs apply only to low or moderate probability patients, and an age adjusted cutoff applies only to those older than 50. A D-dimer does not guide anticoagulation in a patient this likely to have PE.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "ash-dx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment while he awaits imaging?",
        options: [
          "apixaban 10 mg PO now",
          "ASA 325 mg PO now",
          "heparin 5000 units SC now",
          "warfarin 10 mg PO now",
          "No anticoagulation until CT",
        ],
        correct: 0,
        explanation:
          "Unless bleeding risk is high, a rapid acting anticoagulant should start while a patient with a high pretest probability of PE awaits imaging, and he has no bleeding history. Apixaban acts within hours and needs no parenteral lead-in. Heparin 5000 units SC is a prophylactic dose, and warfarin takes days to act. ASA is not a treatment for acute VTE. Waiting four hours for CT leaves a probable PE untreated.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
      {
        id: "q4",
        kind: "single",
        update: "Bedside compression ultrasound shows a noncompressible right popliteal vein.",
        prompt: "Which of the following is the most appropriate next step to confirm the diagnosis of PE?",
        options: [
          "CT pulmonary angiogram when available",
          "Repeat leg ultrasound in one week",
          "Transthoracic echocardiography",
          "Ventilation perfusion lung scan",
          "No further imaging to confirm PE",
        ],
        correct: 4,
        explanation:
          "In a patient with suspected PE, finding a proximal DVT on compression ultrasound is enough to confirm VTE and start anticoagulation without further testing for PE, because treatment would be the same. CT or VQ imaging to confirm PE would add radiation without changing management while he is stable. Echocardiography can assess the RV but does not diagnose PE. A repeat leg ultrasound is not needed once a proximal DVT is proven.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "esc-pe",
      },
    ],
    sources: [SRC_WELLS_PE, SRC_ASH_DX, SRC_TC_PE_TX, SRC_ESC_PE],
    ...META,
  },
  /* 32 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-32",
    topic: "dvt-pe",
    title: "Breathless woman in her eighties",
    stem:
      "An 84-year-old woman presents to the emergency department with three days of shortness of breath and fatigue. She lives alone and walks with a cane. She has osteoarthritis and hypertension. She has no heart failure, lung disease, cancer or bleeding history.\n\nCT pulmonary angiogram shows bilateral segmental PE with a normal RV to LV ratio. Troponin is normal. Creatinine 76 micromol/L, estimated creatinine clearance 40 mL/minute. Hemoglobin 128 g/L, platelets 230 x 10^9/L. Liver enzymes are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "22/minute", bp: "134/78 mmHg", o2sat: "88% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her simplified pulmonary embolism severity index (sPESI) score?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 3,
        explanation:
          "She scores 1 point for age over 80 years, 1 point for a heart rate of 110/minute or more and 1 point for an oxygen saturation below 90%, for a total of 3. She has no cancer and no chronic heart or lung disease, and her systolic BP is 100 mmHg or more. Any score of 1 or more places her outside the low risk group.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "spesi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to a medical ward",
          "Admit to ICU for thrombolysis",
          "Discharge after 6 hours of observation",
          "Discharge home on apixaban",
          "Discharge with home care nursing",
        ],
        correct: 0,
        explanation:
          "Her oxygen saturation of 88% means she needs supplemental oxygen, which is a Hestia criterion for admission, and her sPESI of 3 also excludes her from the low risk group. Living alone is a further social reason to admit her. Thrombolysis is not indicated because she is normotensive, with a normal RV to LV ratio and troponin. Any form of discharge, even with nursing support, ignores her hypoxemia and tachycardia.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "hestia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for her?",
        options: [
          "apixaban 2.5 mg PO twice daily",
          "apixaban 5 mg PO twice daily",
          "apixaban 10 mg PO twice daily",
          "dabigatran 110 mg PO twice daily",
          "edoxaban 30 mg PO once daily",
        ],
        correct: 2,
        explanation:
          "For acute PE, apixaban starts at 10 mg twice daily for 7 days, then 5 mg twice daily, and no dose change is needed for a creatinine clearance of 30 mL/minute or more. Her age, weight of 52 kg and creatinine clearance of 40 mL/minute do not change this. The 2.5 mg and 5 mg doses reflect atrial fibrillation or later maintenance dosing. Edoxaban 30 mg suits her weight but needs 5 to 10 days of LMWH first, and dabigatran, even at the 110 mg dose considered at age 80 or older, also needs LMWH first.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
    ],
    sources: [SRC_SPESI, SRC_HESTIA, SRC_TC_PE_TX],
    ...META,
  },
  /* 33 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-33",
    topic: "dvt-pe",
    title: "Pain with every breath after an operation",
    stem:
      "A 34-year-old man presents to the emergency department with one day of severe right lower chest pain on breathing in, and mild shortness of breath. Three weeks ago he had a laparoscopic appendectomy, and his wounds have healed. He has no medical history and takes no medications. He has no bleeding.\n\nCT pulmonary angiogram shows a right lower lobe segmental PE with a peripheral wedge shaped opacity and a small pleural effusion, in keeping with pulmonary infarction. The RV to LV diameter ratio is normal, and troponin is normal. Creatinine and CBC are normal. He has received two doses of hydromorphone 1 mg IV, but his pain is still 7 out of 10 and he cannot take a deep breath. He lives with his partner.",
    vitals: { temperature: "37.6°C oral", pulse: "104/minute", resp: "22/minute", bp: "132/80 mmHg", o2sat: "94% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his simplified pulmonary embolism severity index (sPESI) score?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 0,
        explanation:
          "He scores 0. He is under 80 years old, has no cancer and no chronic heart or lung disease, his pulse of 104/minute is below the 110/minute threshold, his systolic BP is above 100 mmHg and his O2 saturation of 94% is 90% or more. A score of 1 would wrongly count a heart rate that is raised but below the threshold. Scores of 2 or more need items he does not have. A score of 0 predicts a low risk of death but does not by itself make home treatment safe.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "spesi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings in his case most argues against outpatient treatment today?",
        options: [
          "Appendectomy 3 weeks ago",
          "Heart rate of 104/minute",
          "O2 saturation of 94% on room air",
          "Pain needing repeated IV opioid doses",
          "Pulmonary infarct with a small effusion",
        ],
        correct: 3,
        explanation:
          "Thrombosis Canada lists a need for parenteral pain control as a reason to start PE treatment in hospital even when the risk score is low. He still has pain of 7 out of 10 after two IV doses. His pulse is below the 110/minute threshold of the simplified PESI and his O2 saturation is above 90%, so neither is a reason to admit. Infarction with a small effusion explains his pain but does not by itself need admission. His surgery was 3 weeks ago, his wounds have healed and he is not bleeding.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-pe-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit to a medical ward",
          "Admit to the ICU for monitoring",
          "Discharge, recheck in 3 days",
          "Discharge with oral opioids",
          "Observe 6 hours, then discharge",
        ],
        correct: 0,
        explanation:
          "Uncontrolled pain after two IV doses means he cannot yet manage at home, and poor pain control with shallow breathing can lead to atelectasis and pneumonia. A ward bed lets him start anticoagulation and titrate analgesia until oral treatment works. He has a normal RV and troponin and is not hypotensive, so he does not need the ICU. Discharge with oral opioids, or a short observation stay, sends him home before his pain is controlled. A recheck in 3 days leaves the problem unaddressed.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-pe-tx",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for him?",
        options: [
          "dabigatran 150 mg PO twice daily",
          "rivaroxaban 10 mg PO daily",
          "rivaroxaban 20 mg PO daily",
          "rivaroxaban 15 mg PO twice daily",
          "warfarin 5 mg PO daily",
        ],
        correct: 3,
        explanation:
          "Rivaroxaban is started without LMWH at 15 mg twice daily with food for 21 days, then 20 mg daily, according to Thrombosis Canada. Starting at 20 mg daily skips the higher initial dose. 10 mg daily is a dose considered only for extended treatment after 6 months. Dabigatran needs 5 to 10 days of LMWH first. Warfarin alone takes days to work and must be overlapped with a rapid acting agent until the INR is above 2.0.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-pe-tx",
      },
    ],
    sources: [SRC_SPESI, SRC_TC_PE_TX],
    ...META,
    version: 2,
  },
  /* 34 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-34",
    topic: "dvt-pe",
    title: "A red, painful shin",
    stem:
      "A 58-year-old woman with type 2 diabetes presents to the emergency department with two days of right lower leg pain, redness and fever. She scraped her shin while gardening five days ago. She has no previous VTE or cancer and has not been immobilized.\n\nA warm, tender, well demarcated area of erythema spreads from a crusted abrasion on the right shin. Red streaks extend up the medial thigh, and a right inguinal node is tender. The right calf is 3 cm larger than the left and tender along the deep veins, with no pitting edema. You think cellulitis is at least as likely as DVT.",
    vitals: { temperature: "38.6°C oral", pulse: "104/minute", resp: "18/minute", bp: "136/78 mmHg", o2sat: "98% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination findings most favours an alternative diagnosis to DVT?",
        options: [
          "Calf swelling of 3 cm",
          "Dilated superficial collateral veins",
          "Lymphangitic streaking up the thigh",
          "Pitting edema confined to the leg",
          "Tenderness along the deep veins",
        ],
        correct: 2,
        explanation:
          "Red streaks tracking up the leg from a skin wound are lymphangitis, which with fever, spreading erythema from an abrasion and a tender inguinal node points to cellulitis. Calf swelling, pitting edema, deep vein tenderness and non-varicose collateral veins are Wells criteria that support DVT. Cellulitis and DVT can coexist, so the alternative diagnosis lowers but does not remove the need to test for DVT.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is her two level Wells score for deep vein thrombosis?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 0,
        explanation:
          "She scores 1 point for calf swelling of 3 cm or more and 1 point for tenderness along the deep veins. She loses 2 points because cellulitis is at least as likely as DVT, for a total of 0. She has no cancer, paralysis, cast, bed rest, recent surgery, whole leg swelling, pitting edema, collateral veins or previous DVT. A score below 2 means DVT is unlikely.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her D-dimer is 1400 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step for suspected DVT?",
        options: [
          "Compression ultrasound of the right leg",
          "CT venography of the right leg",
          "Repeat D-dimer after antibiotics",
          "Start apixaban for presumed DVT",
          "Treat the cellulitis only and discharge",
        ],
        correct: 0,
        explanation:
          "With an unlikely pretest probability, a negative D-dimer would have excluded DVT, but a positive result must be followed by compression ultrasound. Inflammation and infection raise D-dimer, so the result cannot simply be attributed to cellulitis. Treating only the cellulitis could miss a coexisting DVT, and starting apixaban without imaging could treat a DVT she does not have. Repeating the D-dimer delays the diagnosis, and CT venography is not a first line test.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q4",
        kind: "single",
        update: "Proximal compression ultrasound of the right leg is normal.",
        prompt: "Which of the following is the most appropriate next step for suspected DVT now?",
        options: [
          "Contrast venography of the right leg",
          "CT venography of the right leg",
          "Repeat ultrasound in 5 to 7 days",
          "Start apixaban while awaiting results",
          "No further testing for DVT",
        ],
        correct: 4,
        explanation:
          "In a patient with an unlikely pretest probability, a positive D-dimer followed by a negative compression ultrasound excludes DVT. A repeat ultrasound in 5 to 7 days is for patients with a likely score whose first proximal study is negative. Venography by CT or contrast is not needed. Anticoagulation is not indicated once DVT is excluded, and her cellulitis should now be treated.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
    ],
    sources: [SRC_WELLS_DVT, SRC_TC_DVT_DX],
    ...META,
  },
  /* 35 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-35",
    topic: "dvt-pe",
    title: "New breathlessness on an anticoagulant",
    stem:
      "A 63-year-old man presents to the emergency department with two days of shortness of breath and right pleuritic chest pain. Four months ago he had an unprovoked left femoral DVT and started warfarin. His INR has been 2.1 to 2.8 at every weekly check and is 2.4 today. He reports taking every dose. He has lost 6 kg in two months without trying, and his family physician found iron deficiency anemia last week.\n\nCT pulmonary angiogram shows a new right lower lobe segmental PE with a normal RV to LV ratio. Hemoglobin 112 g/L, platelets 290 x 10^9/L, creatinine 82 micromol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "96/minute", resp: "18/minute", bp: "128/80 mmHg", o2sat: "95% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following underlying conditions is most important to look for next?",
        options: [
          "Antithrombin deficiency",
          "Factor V Leiden mutation",
          "Heparin induced thrombocytopenia",
          "Nephrotic syndrome",
          "Occult malignancy",
        ],
        correct: 4,
        explanation:
          "VTE that recurs despite a consistently therapeutic INR, with unexplained weight loss and new iron deficiency anemia, points to an occult cancer, possibly of the GI tract. Active cancer is an important VTE risk factor and changes the choice and duration of anticoagulation. Inherited thrombophilias such as factor V Leiden or antithrombin deficiency do not explain weight loss or anemia. HIT occurs during heparin exposure and his platelet count is normal, and nephrotic syndrome would not explain iron deficiency anemia.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate anticoagulant regimen for him now?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin 15 000 units SC daily",
          "rivaroxaban 15 mg PO twice daily",
          "warfarin with an added IVC filter",
          "warfarin with INR target 3.0 to 4.0",
        ],
        correct: 1,
        explanation:
          "For VTE that recurs during therapeutic warfarin, the ASH guideline suggests LMWH over a DOAC. Dalteparin 200 units/kg for 74 kg is 14 800 units, rounded to the 15 000 unit syringe, and LMWH also suits him if cancer is confirmed. Raising the INR target is not advised, since the ASH guideline recommends an INR range of 2.0 to 3.0 for VTE. Adding a vena cava filter to anticoagulation is not suggested and does not address the cause of the recurrence.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following examination findings would most support an underlying cancer?",
        options: [
          "Hard left supraclavicular lymph node",
          "Pitting edema of the left ankle",
          "Pleural rub at the right base",
          "Tender varicose veins in the left calf",
          "Warm, tender left calf",
        ],
        correct: 0,
        explanation:
          "A hard left supraclavicular node, the Virchow node, suggests metastatic abdominal cancer, classically gastric, and fits his weight loss and iron deficiency anemia. Cancer associated thrombosis would then change his long term treatment toward LMWH or an anti-Xa DOAC. Ankle edema after a femoral DVT is common with post-thrombotic changes. A pleural rub fits pulmonary infarction from his PE. Tender varicose veins suggest superficial thrombophlebitis, and a warm tender calf suggests DVT or cellulitis.",
        keyFeature: { topic: "dvt-pe", n: 2 },
        source: "virchow",
      },
    ],
    sources: [SRC_ESC_PE, SRC_ASH_TX, SRC_VIRCHOW],
    ...META,
  },
  /* 36 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-36",
    topic: "dvt-pe",
    title: "Leg swelling in a wheelchair user",
    stem:
      "A 48-year-old man presents to the emergency department with three days of swelling of his left leg, which he noticed while dressing. He has complete T10 paraplegia from a car crash 6 years ago, uses a manual wheelchair and lives on his own. He has no sensation below the umbilicus. Three years ago an X-ray showed heterotopic ossification around his left hip. Two years ago, during an admission for a pressure injury, he had confirmed heparin-induced thrombocytopenia. He takes baclofen and a bowel routine.\n\nThe whole left leg is swollen, the calf is 4 cm larger than the right, and there is pitting edema to the knee. The left hip region is warm, without redness. Tenderness cannot be assessed. You think a flare of heterotopic ossification is as likely as DVT.",
    vitals: { temperature: "37.0°C oral", pulse: "80/minute", resp: "16/minute", bp: "118/72 mmHg", o2sat: "97% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his two level Wells score for deep vein thrombosis?",
        options: [
          "0 points",
          "1 point",
          "2 points",
          "3 points",
          "4 points",
        ],
        correct: 2,
        explanation:
          "He scores 1 point each for paralysis of the legs, swelling of the entire leg, calf swelling of 3 cm or more and pitting edema confined to the symptomatic leg, for 4 points. Two points are subtracted because an alternative diagnosis, heterotopic ossification, is as likely as DVT, leaving 2 points. A score of 2 or more still makes DVT likely. He gets no point for tenderness, because he cannot feel it, and he has no cancer, collateral veins or previous DVT.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-dvt",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for him?",
        options: [
          "Compression ultrasound of the left leg",
          "CT venography of the pelvis and legs",
          "D-dimer to decide on imaging",
          "Plain X-ray of the left hip",
          "Three phase bone scan",
        ],
        correct: 0,
        explanation:
          "With a likely Wells score, Thrombosis Canada makes compression ultrasound the first test, without a D-dimer first. A D-dimer is only used alone to exclude DVT when the probability is unlikely. Imaging of the hip may later explain his swelling if the ultrasound is normal, but it does not exclude a DVT, which is the more dangerous diagnosis. CT venography is not a first line test for leg DVT.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Testing confirms thrombus in the left femoral and popliteal veins. Platelets 244 x 10^9/L, creatinine 52 micromol/L. Liver enzymes are normal.",
        prompt: "Which of the following is the most appropriate anticoagulant regimen for him?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin, then dabigatran",
          "dalteparin 200 units/kg SC daily",
          "enoxaparin, then edoxaban",
          "enoxaparin with warfarin overlap",
        ],
        correct: 0,
        explanation:
          "His past heparin-induced thrombocytopenia decides the choice. The American Society of Hematology recommends a non-heparin anticoagulant, such as apixaban, rivaroxaban, dabigatran, edoxaban, fondaparinux or a VKA, rather than UFH or LMWH, for a patient with remote HIT who needs VTE treatment. Apixaban needs no parenteral lead-in, so he avoids heparin entirely. Dalteparin exposes him to heparin directly. Dabigatran, edoxaban and warfarin are usually started with LMWH, which would re-expose him to heparin.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-hit",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit for IV argatroban",
          "Admit for IVC filter insertion",
          "Discharge with thrombosis follow-up",
          "Discharge without follow-up",
          "Observe 24 hours on the ward",
        ],
        correct: 2,
        explanation:
          "His vital signs are normal, his O2 saturation is 97%, he has no chest symptoms, and he manages independently at home, so Thrombosis Canada supports outpatient treatment of his DVT with follow-up. IV argatroban is used for acute HIT, which he does not have now, as his platelets are normal. A filter is for patients who cannot be anticoagulated. A 24 hour stay adds nothing, and discharge without follow-up leaves no check on his response or on the swelling around his hip.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_WELLS_DVT, SRC_TC_DVT_DX, SRC_ASH_HIT, SRC_TC_DVT_TX],
    ...META,
    version: 2,
  },
  /* 37 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-37",
    topic: "dvt-pe",
    title: "Leg swelling after a stroke",
    stem:
      "A 71-year-old man is brought to the emergency department from a rehabilitation hospital with one day of right leg swelling. Eleven days ago he had a left basal ganglia intracerebral hemorrhage with dense right hemiparesis, and he cannot yet walk. He has been using intermittent pneumatic compression but has had no anticoagulant. He has treated hypertension, normal kidney function and no previous VTE. He is a lifelong nonsmoker.\n\nHe cannot lift the right leg off the bed, and the right thigh and calf are swollen. Compression ultrasound shows a noncompressible right common femoral vein. He has no chest pain.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "148/84 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most increases his risk of VTE?",
        options: [
          "Lifelong nonsmoking",
          "Normal kidney function",
          "Paralysis of the right leg",
          "Pneumatic compression use",
          "Treated hypertension",
        ],
        correct: 2,
        explanation:
          "Paralytic stroke is a recognized moderate risk factor for VTE, and his right leg paralysis after the hemorrhage leaves him unable to walk. Intermittent pneumatic compression lowers VTE risk rather than raising it. Treated hypertension, normal kidney function and not smoking do not increase his risk of VTE.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update: "His neurologist advises that therapeutic anticoagulation is unsafe for at least another 2 weeks.",
        prompt: "Which of the following is the most appropriate management of this DVT now?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin 200 units/kg SC daily",
          "Retrievable IVC filter insertion",
          "Serial ultrasound without treatment",
          "Thigh high compression stockings",
        ],
        correct: 2,
        explanation:
          "Therapeutic anticoagulation 11 days after an intracerebral hemorrhage carries a high risk of rebleeding, and his neurologist judges it unsafe for at least 2 more weeks. When a patient with proximal DVT cannot be safely anticoagulated in the acute setting, a thrombosis specialist should be consulted and a retrievable IVC filter placed. Apixaban and therapeutic dalteparin carry the bleeding risk that makes anticoagulation unsafe now. Serial ultrasound without treatment is an option only for isolated distal DVT, and compression stockings do not treat a femoral vein clot.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate long term plan for the filter?",
        options: [
          "Keep it in place permanently",
          "Remove it after 72 hours",
          "Remove it once anticoagulation is safe",
          "Remove it when his leg swelling resolves",
          "Replace it with ASA 81 mg daily",
        ],
        correct: 2,
        explanation:
          "A retrievable filter is a bridge: once therapeutic anticoagulation is safe and established, the filter should be removed, and anticoagulation continues for at least 3 months for the proximal DVT. Removing it at 72 hours or when the swelling settles ignores whether he can yet be anticoagulated. Leaving it permanently offers no benefit once he is anticoagulated. ASA does not replace anticoagulation for proximal DVT.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_ESC_PE, SRC_TC_DVT_TX],
    ...META,
  },
  /* 38 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-38",
    topic: "dvt-pe",
    title: "Breathless after a hospital stay",
    stem:
      "A 52-year-old man presents to the emergency department with two days of left pleuritic chest pain and shortness of breath. Three weeks ago he was admitted for 5 days with cellulitis of the right leg and spent most of that time in bed. The cellulitis has resolved. He has obesity, type 2 diabetes treated with metformin and hypertension treated with amlodipine. He has no previous VTE, cancer, hemoptysis or recent surgery. His body mass index is 54 kg/m2.\n\nThere is dullness at the left base. Both legs look normal, with no swelling or tenderness. The chest X-ray shows a small left pleural effusion with an opacity at the left base. Creatinine is 82 micromol/L. You judge PE to be the most likely diagnosis.",
    vitals: { temperature: "37.2°C oral", pulse: "106/minute", resp: "22/minute", bp: "148/86 mmHg", o2sat: "93% on room air", weight: "168 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: [
          "3.0 points",
          "4.5 points",
          "6.0 points",
          "7.5 points",
          "9.0 points",
        ],
        correct: 2,
        explanation:
          "He scores 3 points because PE is the most likely diagnosis, 1.5 points for a heart rate above 100/minute and 1.5 points for immobilization of 3 days or more within the past 4 weeks, for 6.0 points. That makes PE likely on the two level score. Immobilization and surgery share one item, so his bed rest cannot score twice, and 7.5 points counts it twice. He has no signs of DVT, previous VTE, hemoptysis or cancer. Obesity and diabetes are not Wells items.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging test for PE in him?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "High sensitivity D-dimer first",
          "Transthoracic echocardiogram",
          "Ventilation perfusion lung scan",
        ],
        correct: 1,
        explanation:
          "His chest X-ray shows an effusion and a basal opacity, and a ventilation perfusion scan is most likely to be diagnostic only when the chest X-ray is normal. A CT pulmonary angiogram gives a clear answer and can also show another cause, such as pneumonia. His creatinine is normal, so contrast is safe. A D-dimer cannot exclude PE when the probability is likely. Leg ultrasound has low yield without leg signs. Echocardiography does not diagnose PE in a stable patient.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Imaging confirms left lower lobe segmental PE. Hemoglobin 146 g/L, platelets 254 x 10^9/L, estimated creatinine clearance above 100 mL/minute. He says he was once told that blood thinner pills do not work at his weight.",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for him?",
        options: [
          "apixaban 5 mg PO twice daily",
          "apixaban 10 mg PO twice daily",
          "apixaban 20 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "enoxaparin 100 mg SC every 12 hours",
        ],
        correct: 1,
        explanation:
          "The 2021 ISTH guidance supports standard doses of apixaban or rivaroxaban for VTE treatment regardless of high BMI or weight, replacing its 2016 advice to avoid DOACs above 120 kg. Apixaban starts at 10 mg twice daily for 7 days, then 5 mg twice daily, with no change for weight. Doubling to 20 mg twice daily has no supporting evidence and adds bleeding risk. 5 mg twice daily omits the loading week. The same guidance advises against dabigatran at his weight because data are limited. Enoxaparin is dosed on actual weight at 1 mg/kg every 12 hours, so 100 mg underdoses him.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "isth-obesity",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following additional findings would most argue against treating him at home?",
        options: [
          "D-dimer above 4 000 mcg/L FEU",
          "Emboli in both lower lobes",
          "Glucose of 12 mmol/L",
          "Low grade temperature of 37.8°C",
          "RV dilation with a raised troponin",
        ],
        correct: 4,
        explanation:
          "His simplified PESI is 0, but Thrombosis Canada advises caution in low risk patients who have other markers of higher mortality, such as RV dilation on imaging or a raised troponin. Together these would move him out of the low risk group and call for admission with monitoring. The height of the D-dimer and the number of segments involved do not predict early death as RV function does. A low grade temperature is common with PE and pulmonary infarction. A glucose of 12 mmol/L needs follow-up but does not bar treatment at home.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-pe-tx",
      },
    ],
    sources: [SRC_WELLS_PE, SRC_ESC_PE, SRC_ISTH_OBESITY, SRC_TC_PE_TX],
    ...META,
    version: 3,
  },
  /* 39 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-39",
    topic: "dvt-pe",
    title: "Fainting spell in a young man",
    stem:
      "A 29-year-old man presents to the emergency department after he fainted while climbing stairs at work. He has felt short of breath for two days. He has no chest pain, leg symptoms or hemoptysis. He has no medical history, recent surgery, trauma or previous VTE and takes no medications.\n\nHe looks anxious. His lungs are clear and his calves are soft and symmetric. ECG shows sinus rhythm with T wave inversion in V1 to V3. You think PE is more likely than any other diagnosis, with a gestalt probability of about 30%.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "22/minute", bp: "118/74 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the use of the PERC rule for him?",
        options: [
          "All criteria met, and PE is excluded",
          "All criteria met, but PERC does not apply",
          "Fails the age criterion",
          "Fails the heart rate criterion",
          "Fails the oxygen saturation criterion",
        ],
        correct: 1,
        explanation:
          "He meets all eight PERC criteria: age under 50, heart rate below 100/minute, oxygen saturation of 95% or more, no hemoptysis, no estrogen use, no previous VTE, no unilateral leg swelling and no recent surgery or trauma. PERC was designed to rule out PE only when clinical gestalt is low, below about 15%, and his estimate is 30%. So PE is not excluded and he needs further testing. His age of 29, pulse of 96/minute and saturation of 96% all meet the criteria.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "perc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: [
          "0 points",
          "1.5 points",
          "3.0 points",
          "4.5 points",
          "6.0 points",
        ],
        correct: 2,
        explanation:
          "He scores 3 because no other diagnosis is more likely than PE. His heart rate of 96/minute does not exceed 100/minute, and he has no signs of DVT, hemoptysis, recent surgery or immobilization, cancer or previous VTE. The total of 3.0 places him in the low clinical probability group of PEGeD, which is a Wells score of 4.0 or less.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the highest D-dimer threshold validated to exclude PE in him?",
        options: [
          "Below 250 mcg/L FEU",
          "Below 500 mcg/L FEU",
          "Below 750 mcg/L FEU",
          "Below 1000 mcg/L FEU",
          "Below 1500 mcg/L FEU",
        ],
        correct: 3,
        explanation:
          "In PEGeD, patients with a low clinical pretest probability, a Wells score of 4.0 or less, had PE excluded by a D-dimer below 1000 mcg/L FEU, and he scores 3.0. The 500 mcg/L threshold applies to moderate probability, a score of 4.5 to 6.0. Lower thresholds would still be safe but send more patients to imaging, and a 1500 mcg/L threshold has not been validated.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "peged",
      },
      {
        id: "q4",
        kind: "single",
        update: "His D-dimer is 2300 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Exercise stress test",
          "Repeat D-dimer in 6 hours",
          "Transthoracic echocardiography",
        ],
        correct: 1,
        explanation:
          "His D-dimer is above the 1000 mcg/L FEU threshold for low clinical probability, so PE is not excluded and CT pulmonary angiography is needed. Leg ultrasound has a low yield without leg symptoms, and a negative study would not exclude PE. Repeating the D-dimer only delays the diagnosis. Echocardiography cannot exclude PE, and an exercise test is unsafe before PE is excluded in a patient who fainted on exertion.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "peged",
      },
    ],
    sources: [SRC_PERC, SRC_WELLS_PE, SRC_PEGED],
    ...META,
  },
  /* 40 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-40",
    topic: "dvt-pe",
    title: "Contractions on an anticoagulant",
    stem:
      "A 30-year-old woman, G2P1 at 37 weeks gestation, presents to the emergency department with three hours of regular, painful contractions. At 25 weeks she had a left femoral DVT and has since taken dalteparin 15 000 units SC once daily. Her last dose was at 08:00 today, and it is now 14:00. Her first delivery was vaginal and uncomplicated.\n\nShe is contracting every 4 minutes. There is no vaginal bleeding. The fetal heart tracing is normal.",
    vitals: { temperature: "36.9°C oral", pulse: "94/minute", resp: "18/minute", bp: "118/70 mmHg", o2sat: "99% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her dalteparin?",
        options: [
          "Give half the dose at 08:00 tomorrow",
          "Give the full dose at 08:00 tomorrow",
          "protamine 50 mg IV now",
          "Switch to heparin 5000 units SC now",
          "Withhold it until after delivery",
        ],
        correct: 4,
        explanation:
          "Women on therapeutic LMWH who believe they are in labour should withhold further injections. Another dose would add anticoagulant effect during delivery and further delay neuraxial anesthesia. A half dose still leaves anticoagulant effect at delivery, and switching to SC heparin simply adds another anticoagulant in labour. Protamine is not needed in a woman who is not bleeding. Therapeutic LMWH restarts after delivery when bleeding risk allows, usually within 12 to 24 hours.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-tx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the earliest time after her last dose that neuraxial anesthesia can be placed?",
        options: [
          "3 hours after the last dose",
          "6 hours after the last dose",
          "12 hours after the last dose",
          "18 hours after the last dose",
          "24 hours after the last dose",
        ],
        correct: 4,
        explanation:
          "Neuraxial anesthesia should not be used within 24 hours of a therapeutic dose of LMWH, so with her last dose at 08:00 the earliest time is 08:00 tomorrow. Placing a neuraxial catheter 3, 6, 12 or 18 hours after a therapeutic dose risks a spinal or epidural hematoma, because the anticoagulant effect is still present. If she delivers before 08:00 tomorrow, she will need another form of analgesia.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the minimum duration of anticoagulation after delivery for her?",
        options: [
          "2 weeks after delivery",
          "4 weeks after delivery",
          "6 weeks after delivery",
          "12 weeks after delivery",
          "26 weeks after delivery",
        ],
        correct: 2,
        explanation:
          "Anticoagulation for pregnancy associated VTE continues for at least 6 weeks postpartum, with a minimum total duration of 3 months. Her DVT was diagnosed at 25 weeks and she is now at 37 weeks, so she has had 12 weeks of treatment, and 6 weeks postpartum will take her well past 3 months. Two or 4 weeks would stop during the high risk postpartum period. Twelve or 26 weeks postpartum is longer than the minimum.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-preg-tx",
      },
    ],
    sources: [SRC_TC_PREG_TX],
    ...META,
  },
  /* 41 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-41",
    topic: "dvt-pe",
    title: "Calf swelling with a heart valve",
    stem:
      "A 66-year-old man presents to the emergency department with three days of right calf pain and swelling. He has a mechanical mitral valve and takes warfarin, with a target INR of 2.5 to 3.5. He stopped warfarin for 5 days for a dental extraction and restarted it 4 days ago without bridging. He has no bleeding.\n\nThe right calf is 3 cm larger than the left, with pitting edema. Ultrasound shows a right popliteal vein DVT. INR 1.5, hemoglobin 138 g/L, platelets 220 x 10^9/L, creatinine 90 micromol/L, estimated creatinine clearance 82 mL/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "76/minute", resp: "16/minute", bp: "136/80 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate anticoagulant plan for him?",
        options: [
          "Continue warfarin alone",
          "enoxaparin with ongoing warfarin",
          "Switch to apixaban 10 mg twice daily",
          "Switch to dabigatran after LMWH",
          "Switch to rivaroxaban 15 mg twice daily",
        ],
        correct: 1,
        explanation:
          "A mechanical heart valve requires a vitamin K antagonist, so DOACs such as apixaban, dabigatran and rivaroxaban are not options. His INR of 1.5 is below range, so warfarin alone gives no immediate protection against the new DVT. Therapeutic enoxaparin, 1 mg/kg every 12 hours or 80 mg for 82 kg, should overlap warfarin for at least 5 days and until the INR is in range.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following INR ranges should his warfarin now target?",
        options: [
          "INR 1.5 to 2.0",
          "INR 2.0 to 3.0",
          "INR 2.5 to 3.5",
          "INR 3.0 to 4.0",
          "INR 3.5 to 4.5",
        ],
        correct: 2,
        explanation:
          "The ASH guideline recommends an INR range of 2.0 to 3.0 for VTE, but his mechanical mitral valve already needs his higher target of 2.5 to 3.5. That range also treats the DVT, so it should not be lowered. A range of 1.5 to 2.0 would undertreat both conditions, and targets above 3.5 add bleeding risk without added benefit for his valve or his DVT.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit for IV heparin until INR is in range",
          "Admit for vena cava filter insertion",
          "Discharge on warfarin with INR in 1 week",
          "Discharge with enoxaparin and INR checks",
          "Observe 24 hours on telemetry",
        ],
        correct: 3,
        explanation:
          "He has an uncomplicated popliteal DVT with normal vital signs, kidney function and blood counts, so the ASH guideline suggests home treatment over hospital treatment. He can inject enoxaparin at home while warfarin is adjusted with frequent INR checks. Warfarin alone with an INR in a week leaves him inadequately treated for days. IV heparin, telemetry and a filter add nothing for a stable patient.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "ash-tx",
      },
    ],
    sources: [SRC_TC_DVT_TX, SRC_ASH_TX],
    ...META,
  },
  /* 42 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-42",
    topic: "dvt-pe",
    title: "Blood streaked sputum and breathlessness",
    stem:
      "A 52-year-old woman presents to the emergency department with three days of shortness of breath on exertion and one episode of blood streaked sputum. She takes oral estradiol and progesterone for menopausal symptoms. She had a DVT after a tibial fracture 10 years ago. She has had a mild cough for a week.\n\nHer lungs are clear, and the calves are soft and symmetric without tenderness. Chest X-ray is normal. You think PE is more likely than viral bronchitis.",
    vitals: { temperature: "37.3°C oral", pulse: "94/minute", resp: "18/minute", bp: "128/80 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her Wells score for pulmonary embolism?",
        options: [
          "2.5 points",
          "3.0 points",
          "4.0 points",
          "4.5 points",
          "5.5 points",
        ],
        correct: 4,
        explanation:
          "She scores 3 because PE is more likely than the alternative diagnosis, 1.5 for a previous DVT and 1 for hemoptysis, for 5.5. Her heart rate of 94/minute does not score, and she has no DVT signs, cancer, recent surgery or immobilization. In PEGeD, a score of 4.5 to 6.0 is moderate clinical probability.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her D-dimer is 720 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Repeat D-dimer in 24 hours",
          "Transthoracic echocardiography",
          "No further testing for PE",
        ],
        correct: 1,
        explanation:
          "With moderate clinical probability, PEGeD excludes PE only with a D-dimer below 500 mcg/L FEU. Her 720 mcg/L result is above that threshold, so she needs CT pulmonary angiography. The 1000 mcg/L threshold applies only to low probability patients. Leg ultrasound has a low yield without leg symptoms, echocardiography cannot exclude PE, and a repeat D-dimer delays the diagnosis.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "peged",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings raises her VTE risk without adding Wells points?",
        options: [
          "Blood streaked sputum",
          "Heart rate of 94/minute",
          "Normal chest X-ray",
          "Oral menopausal hormone therapy",
          "Previous DVT after a fracture",
        ],
        correct: 3,
        explanation:
          "Oral estrogen hormone replacement therapy is a recognized moderate risk factor for VTE, but it is not one of the Wells items. Hemoptysis and a previous DVT each add Wells points, 1 and 1.5. A heart rate of 94/minute scores nothing and does not raise VTE risk. A normal chest X-ray is common in PE and does not change her risk.",
        keyFeature: { topic: "dvt-pe", n: 1 },
        source: "esc-pe",
      },
    ],
    sources: [SRC_WELLS_PE, SRC_PEGED, SRC_ESC_PE],
    ...META,
  },
  /* 43 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-43",
    topic: "dvt-pe",
    title: "Arm swelling after a new device",
    stem:
      "A 74-year-old man presents to the emergency department with two days of heaviness and aching in his left upper arm. Three weeks ago a dual chamber pacemaker was placed through his left subclavian vein for complete heart block. He takes ASA 81 mg daily, ramipril and atorvastatin. He has no previous VTE or cancer.\n\nThere is a large yellow and purple bruise over the pacemaker pocket that extends onto the upper arm. The left upper arm is 2 cm larger than the right, without pitting edema. There are no dilated veins over the shoulder or chest. Radial pulses are equal. You think the bruising from the pocket is as likely as DVT to explain his symptoms. A D-dimer drawn at triage is 1 450 mcg/L FEU, with a laboratory cutoff of 500 mcg/L FEU. The department uses the Constans score for suspected arm DVT.",
    vitals: { temperature: "36.8°C oral", pulse: "72/minute", resp: "16/minute", bp: "136/78 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Constans score for upper extremity deep vein thrombosis?",
        options: [
          "-1 point",
          "0 points",
          "1 point",
          "2 points",
          "3 points",
        ],
        correct: 2,
        explanation:
          "The Constans score gives 1 point for venous material such as a pacemaker or catheter, 1 point for localized pain and 1 point for unilateral pitting edema, and subtracts 1 point when another diagnosis is at least as plausible. He scores 1 for the pacemaker and 1 for his aching arm, has no pitting edema, and loses 1 point for the pocket bruising, for 1 point. In the original score that is intermediate probability, and in the two level version used with D-dimer in later management studies, a score of 1 or less counts as unlikely. Scores of 2 or 3 would need pitting edema or no competing diagnosis.",
        keyFeature: { topic: "dvt-pe", n: 3 },
        source: "constans",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his D-dimer result is most accurate?",
        options: [
          "It confirms an arm DVT",
          "It excludes DVT at his Constans score",
          "It is explained by the bruise, so ignore it",
          "It means he needs arm imaging",
          "It should be repeated in 1 week",
        ],
        correct: 3,
        explanation:
          "With an unlikely Constans score, Thrombosis Canada suggests a D-dimer first, with duplex ultrasound if it is positive. His result is above the cutoff, so DVT is not excluded and he needs imaging. A D-dimer is sensitive but not specific, so it cannot confirm DVT, and his recent procedure and bruising may raise it. It excludes DVT only when it is negative. Dismissing it because of the bruise, or repeating it later, would leave a possible DVT untested.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following imaging tests is first line for suspected deep vein thrombosis of the arm?",
        options: [
          "Chest X-ray for lead position",
          "Contrast venography of the arm",
          "CT venography of the arm and chest",
          "Duplex ultrasound of both arms",
          "Duplex ultrasound of the left arm",
        ],
        correct: 4,
        explanation:
          "Thrombosis Canada uses combined compression and colour Doppler flow, called duplex ultrasound, as the standard test for suspected arm DVT. Only the symptomatic arm needs scanning. Contrast venography is invasive, and CT venography adds contrast and radiation, so both are kept for cases where ultrasound cannot answer the question. A chest X-ray shows lead position but cannot show thrombus in a vein.",
        keyFeature: { topic: "dvt-pe", n: 4 },
        source: "tc-dvt-dx",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "The first imaging test finds no thrombus. Over the next 6 hours his arm swelling increases, and dilated veins appear over the left shoulder.",
        prompt: "Which of the following is the most appropriate next step to look for arm DVT?",
        options: [
          "Chest X-ray to check the leads",
          "CT venography of the arm and chest",
          "Discharge with arm DVT excluded",
          "Doppler of the right arm for comparison",
          "Empiric anticoagulation for 3 months",
        ],
        correct: 1,
        explanation:
          "Duplex ultrasound can miss thrombus in the central veins, because the subclavian vein is poorly seen behind the clavicle. With worsening swelling and new collateral veins, his clinical suspicion is now high. Thrombosis Canada advises further testing in this situation, such as CT venography, MRI or venography. Discharge would ignore the high suspicion. Empiric treatment commits him to months of anticoagulation without a diagnosis. A chest X-ray and imaging of the normal arm do not assess the subclavian vein.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "tc-dvt-dx",
      },
    ],
    sources: [
      { id: "constans", citation: "Constans J, et al. A clinical prediction score for upper extremity deep venous thrombosis. Thromb Haemost. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18217155/" },
      SRC_TC_DVT_DX,
    ],
    ...META,
    version: 2,
  },
  /* 44 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-44",
    topic: "dvt-pe",
    title: "Leg swelling in a man with liver disease",
    stem:
      "You are working in a community hospital emergency department. A 59-year-old man with alcohol related cirrhosis presents with four days of left leg swelling. He stopped drinking a year ago. He has mild ascites controlled with spironolactone and furosemide, and takes nadolol for small varices. He has had no GI bleeding or confusion.\n\nThe left calf is 4 cm larger than the right. Ultrasound shows a noncompressible left popliteal and femoral vein. INR 1.8 off anticoagulants, platelets 92 x 10^9/L, bilirubin 58 micromol/L, albumin 26 g/L, creatinine 92 micromol/L, estimated creatinine clearance 82 mL/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "78/minute", resp: "16/minute", bp: "112/68 mmHg", o2sat: "97% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Child-Pugh class and score?",
        options: [
          "Class A, 6 points",
          "Class B, 7 points",
          "Class B, 8 points",
          "Class B, 9 points",
          "Class C, 11 points",
        ],
        correct: 4,
        explanation:
          "He scores 3 for bilirubin above 51 micromol/L, 3 for albumin below 28 g/L, 2 for an INR of 1.8 in the 1.7 to 2.3 band, 2 for mild ascites controlled with diuretics and 1 for no encephalopathy. The total is 3 + 3 + 2 + 2 + 1 = 11, and 10 to 15 points is class C. Class A covers 5 to 6 points and class B covers 7 to 9 points, so each of those totals undercounts his findings.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "child-pugh",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate anticoagulant regimen for him?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dalteparin 15 000 units SC daily",
          "edoxaban 60 mg PO once daily",
          "rivaroxaban 15 mg PO twice daily",
          "warfarin 5 mg PO once daily",
        ],
        correct: 1,
        explanation:
          "Apixaban is contraindicated and edoxaban is not recommended in liver disease with coagulopathy, and rivaroxaban is contraindicated in Child-Pugh class B and C cirrhosis. His INR of 1.8 before any anticoagulant also makes warfarin unreliable to monitor, and warfarin alone has no immediate effect. LMWH dosed on weight is the practical choice, and dalteparin 200 units/kg for 76 kg is 15 200 units, rounded to 15 000 units.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit for catheter directed thrombolysis",
          "Admit to start LMWH and assess bleeding risk",
          "Discharge with dalteparin and clinic follow-up",
          "Transfer for vena cava filter insertion",
          "No anticoagulation, discharge home",
        ],
        correct: 1,
        explanation:
          "Outpatient treatment is preferred for most DVT, but patients at high bleeding risk are an exception. Child-Pugh C cirrhosis with varices, an INR of 1.8 and platelets of 92 x 10^9/L give him a high bleeding risk, so LMWH should start in hospital with thrombosis specialist input. A filter is for patients who cannot be anticoagulated. Thrombolysis is not indicated for a DVT that is not limb threatening, and no treatment leaves a proximal DVT untreated.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_CHILD_PUGH, SRC_TC_DVT_TX],
    ...META,
  },
  /* 45 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-45",
    topic: "dvt-pe",
    title: "Arm swelling in a child with a central line",
    stem:
      "A 9-year-old boy with cystic fibrosis is brought to the emergency department by his mother with one day of left arm swelling and pain. A left arm peripherally inserted central catheter was placed 10 days ago for a planned 14 day course of IV antibiotics at home. The line flushes and draws back well. He has no fever, chest pain or shortness of breath.\n\nThe left upper arm and forearm are swollen and mildly tender. The insertion site is clean. Radial pulse and hand perfusion are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "20/minute", bp: "104/64 mmHg", o2sat: "97% on room air", weight: "28 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first diagnostic test for him?",
        options: [
          "Contrast venography through the line",
          "CT venography of the chest",
          "D-dimer with a 500 mcg/L cutoff",
          "Duplex ultrasound of the left arm",
          "MR venography of the chest",
        ],
        correct: 3,
        explanation:
          "Clinical decision rules and D-dimer have not been validated in children, so testing for DVT starts with ultrasound, and duplex ultrasound suits the arm veins around a catheter. A D-dimer would also be raised by his lung disease. CT or MR venography may be considered if ultrasound is negative and suspicion stays high, and CT adds radiation for a child. Contrast venography is invasive.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ultrasound shows occlusive thrombus in the left brachial and axillary veins around the catheter. He needs four more days of IV antibiotics.",
        prompt: "Which of the following is the most appropriate management of the catheter?",
        options: [
          "Instil alteplase into the catheter",
          "Keep the functioning catheter in place",
          "Remove it and finish oral antibiotics",
          "Remove it before starting anticoagulation",
          "Replace it over a guidewire",
        ],
        correct: 1,
        explanation:
          "For children with symptomatic catheter related thrombosis who still need venous access, the ASH guideline suggests not removing a functioning catheter, which spares a child with limited access sites a new line. His catheter flushes and draws well, and he needs four more days of IV antibiotics. Removal, with or without a guidewire exchange, leaves him needing new access. Switching to oral antibiotics changes his planned treatment, and alteplase in the lumen treats catheter occlusion rather than a DVT around it.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-peds",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant regimen for him?",
        options: [
          "ASA 81 mg PO daily",
          "enoxaparin 42 mg SC every 12 hours",
          "enoxaparin 28 mg SC every 12 hours",
          "enoxaparin 14 mg SC every 12 hours",
          "warfarin 5 mg PO once daily",
        ],
        correct: 2,
        explanation:
          "Children start with a parenteral anticoagulant, and the pediatric DOAC trials gave at least 5 days of it before rivaroxaban or dabigatran, which the 2024 ASH/ISTH update now suggests for ongoing treatment. For children aged 2 months or older, the starting enoxaparin dose is 1 mg/kg every 12 hours, which is 28 mg for 28 kg. A dose of 14 mg is half the therapeutic dose, and 42 mg is about 1.5 mg/kg, a starting dose for infants under 2 months. Warfarin started alone has no immediate effect, and ASA does not treat VTE.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "ash-peds-2024",
      },
    ],
    sources: [SRC_TC_DVT_DX, SRC_ASH_PEDS, SRC_ASH_PEDS_2024],
    ...META,
  },
  /* 46 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-46",
    topic: "dvt-pe",
    title: "Calf pain during chemotherapy",
    stem:
      "You are working in a community hospital emergency department. A 72-year-old woman presents with four days of left calf pain and swelling. She has metastatic lung adenocarcinoma and receives chemotherapy every three weeks. She has no previous VTE or bleeding history.\n\nThe left calf is 3 cm larger than the right, with pitting edema and tenderness along the deep veins. Whole leg ultrasound shows a 6 cm thrombus in the left posterior tibial and peroneal veins, ending 10 cm below the popliteal vein. The popliteal and femoral veins are normal. CBC and creatinine are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "124/74 mmHg", o2sat: "97% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of her case raise the risk of proximal extension of this calf DVT?",
        options: [
          "Active lung cancer on chemotherapy",
          "Age of 72 years",
          "Left sided location",
          "Normal popliteal vein",
          "Pitting edema of the calf",
          "Thrombus in two deep calf veins",
          "Thrombus length of 6 cm",
        ],
        select: 3,
        correct: [0, 5, 6],
        explanation:
          "Risk factors for extension of an isolated distal DVT include a thrombus longer than 5 cm, involvement of more than one deep vein, active cancer, a clot close to the popliteal vein, no reversible provoking factor, previous VTE, inpatient status and a positive D-dimer. She has active cancer on chemotherapy, a 6 cm thrombus and two involved calf veins. Her age, the side affected, a normal popliteal vein and calf edema are not listed risk factors for extension.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-dvt-tx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of this DVT?",
        options: [
          "apixaban 10 mg PO twice daily",
          "ASA 81 mg PO daily",
          "dalteparin 5000 units SC daily",
          "edoxaban 60 mg PO once daily",
          "Repeat ultrasound in one week",
        ],
        correct: 0,
        explanation:
          "With several risk factors for extension, anticoagulation is suggested rather than serial ultrasound. For cancer associated thrombosis outside the GI tract, apixaban can start without LMWH at 10 mg twice daily for 1 week, then 5 mg twice daily. Dalteparin 5000 units is a prophylactic dose, since the therapeutic dose is 200 units/kg. Edoxaban needs 5 days of LMWH first and would be reduced to 30 mg at her weight of 58 kg. ASA does not treat VTE.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "tc-cancer",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit for IV heparin infusion",
          "Admit until oncology review",
          "Discharge on apixaban with follow-up",
          "Observe for 24 hours for PE",
          "Transfer for vena cava filter",
        ],
        correct: 2,
        explanation:
          "She has stable vital signs, no chest symptoms, normal labs and no bleeding history, so outpatient treatment is preferred, with early oncology and thrombosis follow-up. Hospital treatment is kept for limb threatening DVT, high bleeding risk or another reason for admission, and she has none. A filter is only for patients who cannot be anticoagulated. Observation or IV heparin adds nothing for a patient who can take apixaban at home.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "tc-dvt-tx",
      },
    ],
    sources: [SRC_TC_DVT_TX, SRC_TC_CANCER],
    ...META,
  },
  /* 47 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-47",
    topic: "dvt-pe",
    title: "Collapse after brain surgery",
    stem:
      "A 57-year-old woman is brought to the emergency department by ambulance after collapsing at home. Six days ago she had a craniotomy for resection of a meningioma and went home yesterday. She now has severe shortness of breath and is confused.\n\nShe is pale and diaphoretic. Her neck veins are distended and her lungs are clear. Bedside echocardiography shows a severely dilated right ventricle and a mobile thrombus in the right atrium. Her BP does not improve after a 500 mL fluid bolus, and norepinephrine is started.",
    vitals: { temperature: "36.6°C oral", pulse: "128/minute", resp: "30/minute", bp: "78/50 mmHg", o2sat: "87% on a non-rebreather mask", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate reperfusion strategy for her?",
        options: [
          "alteplase 50 mg IV bolus",
          "alteplase 100 mg IV over 2 hours",
          "Retrievable IVC filter insertion",
          "Surgical pulmonary embolectomy",
          "tenecteplase weight based IV bolus",
        ],
        correct: 3,
        explanation:
          "She has high risk PE with shock needing norepinephrine, and her craniotomy six days ago is an absolute contraindication to systemic thrombolysis, which rules out alteplase and tenecteplase in any regimen. Surgical pulmonary embolectomy is recommended for high risk PE when thrombolysis is contraindicated or has failed. An IVC filter does not relieve the pulmonary artery obstruction that is causing her shock.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings defines her PE as high risk?",
        options: [
          "Hypotension needing norepinephrine",
          "Mobile right atrial thrombus",
          "Oxygen saturation below 90%",
          "Respiratory rate of 30/minute",
          "Severe dilation of the right ventricle",
        ],
        correct: 0,
        explanation:
          "High risk PE is defined by hemodynamic instability, here hypotension that persists after fluid and needs a vasopressor. RV dilation and a right heart thrombus are markers of severity, but without instability they would place a patient in the intermediate risk group. Hypoxemia and tachypnea are common in PE and do not define the risk class.",
        keyFeature: { topic: "dvt-pe", n: 7 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following history items, if present, would be absolute contraindications to systemic thrombolysis?",
        options: [
          "Allergy to penicillin",
          "Controlled hypertension",
          "Craniotomy six days ago",
          "Hip replacement eight weeks ago",
          "Ischemic stroke four months ago",
          "Previous DVT two years ago",
          "Type 2 diabetes on metformin",
        ],
        select: 2,
        correct: [2, 4],
        explanation:
          "Absolute contraindications to thrombolysis include ischemic stroke within 6 months, a central nervous system neoplasm, and major surgery, trauma or head injury within 3 weeks, so both a craniotomy six days ago and a stroke four months ago qualify. A hip replacement eight weeks ago is outside the 3 week window. Controlled hypertension, diabetes, a penicillin allergy and a previous DVT are not contraindications.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "esc-pe",
      },
    ],
    sources: [SRC_ESC_PE],
    ...META,
  },
];
