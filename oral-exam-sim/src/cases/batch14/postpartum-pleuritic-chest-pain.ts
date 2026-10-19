// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const postpartumPleuriticChestPain: OralCase = {
  id: "postpartum-pleuritic-chest-pain",
  title: "Chest pain with a newborn in the car seat",
  blueprint: "cardio",
  alsoCovers: ["obgyn", "comm"],
  priorityTopic: "dvt-pe",
  keyFeatures: [
    { topic: "dvt-pe", n: 1 },
    { topic: "dvt-pe", n: 2 },
    { topic: "dvt-pe", n: 3 },
    { topic: "dvt-pe", n: 4 },
    { topic: "dvt-pe", n: 5 },
    { topic: "dvt-pe", n: 6 },
    { topic: "dvt-pe", n: 7 },
  ],
  summary: "A woman a few weeks after giving birth has chest pain on breathing and wants to get home to feed her baby.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 33 year old woman has pain in the right side of her chest when she breathes in and is short of breath. Her 3 week old son is with her in his car seat.",
  card: {
    vitals: {
      temperature: "37.4°C oral",
      pulse: "108/minute",
      resp: "22/minute",
      bp: "128/78 mmHg",
      o2sat: "94% on room air",
      weight: "88 kg (194 lb)",
    },
    medications: "Ibuprofen, acetaminophen, ferrous fumarate, prenatal vitamin",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Sharp right sided chest pain on breathing in since last evening. Short of breath climbing the stairs since this morning. Her left calf has ached for 5 days, which she blamed on carrying the baby. " +
        "Dry cough. No hemoptysis, no fainting, no palpitations, no fever.",
    },
    {
      id: "obstetric",
      label: "Pregnancy and delivery",
      result:
        "Second baby. Emergency caesarean section 3 weeks ago at 40 weeks for arrest of labour. Blood loss 900 mL, no transfusion. Normal blood pressures throughout pregnancy and after. " +
        "No thromboprophylaxis after discharge. Light lochia now. Exclusively breastfeeding every 2 to 3 hours.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "No previous clots. Migraine without aura. No heart or lung disease. Body mass index 33.",
    },
    {
      id: "meds",
      label: "Medications and contraception plan",
      result:
        "Ibuprofen 400 mg three times daily for wound pain. Acetaminophen as needed. Ferrous fumarate. Prenatal vitamin. Her obstetrician gave her a prescription for a combined oral contraceptive to start at 6 weeks.",
    },
    {
      id: "family",
      label: "Family history",
      result: "Her mother had a leg clot at age 28 while on the birth control pill and took rivaroxaban for 3 months. No thrombophilia testing that she knows of.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Lives 15 minutes away with her partner, who is at work, and a 3 year old daughter. Smoked 10 cigarettes a day before pregnancy and restarted at 5 a day last week. " +
        "Has a family doctor. Drug coverage through her partner's work plan, which needs special authorization for some drugs.",
    },
    {
      id: "general",
      label: "General and cardiorespiratory exam",
      result:
        "Mild distress, speaking in full sentences. Neck veins not distended. Normal heart sounds, no murmur, no loud second sound. Breath sounds slightly reduced at the right base, no crackles. No calf or ankle swelling on the right.",
    },
    {
      id: "legs",
      label: "Leg exam",
      result: "Left calf 3.5 cm larger than the right, measured 10 cm below the tibial tuberosity. Pitting edema to the left knee. Tender along the left popliteal fossa and inner thigh.",
    },
    {
      id: "wound-breasts",
      label: "Wound, abdomen and breasts",
      result: "Pfannenstiel incision healed, no redness or discharge. Uterus not palpable. Breasts soft with no redness or tenderness.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 106/minute. Normal axis. No ST changes. No right bundle branch block. No right ventricular strain pattern.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 104 g/L. Platelets 412 x 10^9/L. White cells 9.8 x 10^9/L. Creatinine 64 µmol/L. INR 1.0. High sensitivity troponin 6 ng/L. NT-proBNP 140 pg/mL. ALT normal.",
    },
    {
      id: "ddimer",
      label: "D-dimer sent from triage",
      result: "2840 µg/L FEU.",
    },
    {
      id: "cxr",
      label: "Chest X-ray",
      result: "Small right pleural effusion. No consolidation. No pneumothorax. Normal heart size.",
    },
    {
      id: "us",
      label: "Leg compression ultrasound and cardiac ultrasound",
      result:
        "Left common femoral and popliteal veins are not compressible with echogenic thrombus. Right leg normal. Cardiac view: right ventricle smaller than the left, normal left ventricular function, no pericardial effusion.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "CT pulmonary angiography is available 24 hours. Ventilation perfusion scanning runs weekdays only. It is Saturday at 13:00. A thrombosis clinic sees urgent referrals within 72 hours. Hospital pharmacy can supply starter doses.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "13:00",
      text:
        "She is in a monitored bed with the baby asleep in his car seat beside her. She says, 'I need to be home in two hours to feed him. My partner cannot leave work.'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What history do you want?",
      seconds: 75,
      modelAnswer: [
        "Pain, breathlessness, leg symptoms and their timing. Hemoptysis, syncope, palpitations, fever.",
        "Delivery date and mode, blood loss, postpartum complications, thromboprophylaxis.",
        "Previous clots, family history of clots, obesity, smoking, immobility.",
        "Breastfeeding status and feeding plan.",
        "Medications including NSAIDs, bleeding risks, drug coverage and contraception plans.",
        "Symptoms of alternatives: orthopnea and edema, tearing chest pain, headache and visual change.",
      ],
      rubric: ["pe-h1", "pe-h2", "pe-h3", "pe-h4"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and probability",
      prompt: "What do you look for on examination, and how likely is a pulmonary embolism?",
      seconds: 75,
      modelAnswer: [
        "Leg circumference and edema, deep vein tenderness.",
        "Signs of right heart strain: raised neck veins, loud second sound, hypotension.",
        "Wound, breasts and uterus for other causes of fever or pain.",
        "Wells: signs of DVT 3, PE most likely 3, heart rate over 100 1.5, surgery within 4 weeks 1.5. Total 9. PE likely.",
        "Differential: peripartum cardiomyopathy, spontaneous coronary artery dissection, pneumonia, postpartum pre-eclampsia, anemia.",
      ],
      rubric: ["pe-a1", "pe-a2", "pe-a3"],
      next: "q-testing",
    },
    {
      kind: "question",
      id: "q-testing",
      phase: "Testing",
      prompt: "The triage nurse sent a D-dimer, which is 2840 µg/L. How do you confirm the diagnosis?",
      seconds: 90,
      modelAnswer: [
        "With a Wells score of 9, PE is likely. D-dimer adds nothing, and it is often raised after delivery.",
        "Start LMWH now while imaging is arranged, if there is no bleeding contraindication.",
        "She has signs of a left leg DVT. Compression ultrasound of the legs first. A proximal DVT confirms venous thromboembolism and needs the same treatment.",
        "CT pulmonary angiography if the leg ultrasound is negative. V/Q is not available until Monday.",
        "Breastfeeding can continue after iodinated contrast.",
        "Troponin, BNP and a cardiac ultrasound for right ventricular strain.",
      ],
      rubric: ["pe-a2", "pe-m1", "pe-m2"],
      choices: [
        {
          id: "c-leg-first",
          label:
            "I ignored the D-dimer because her Wells score is 9, gave a first dose of dalteparin, and did a leg compression ultrasound first. I would go to CT only if the legs were negative.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Correct. When PE is likely, skip the D-dimer and treat while you image. With signs of a left leg DVT, a positive leg ultrasound confirms VTE without radiation to her breasts. CT is needed only if the legs are negative.",
        },
        {
          id: "c-ct-pump",
          label: "I ordered a CT pulmonary angiogram and told her to pump and discard her milk for 24 hours after the contrast. I started treatment once the CT was reported.",
          next: "s-ct",
          quality: "partial",
          feedback:
            "CT is a reasonable test, but her leg signs make ultrasound a good first step with no radiation. She does not need to interrupt breastfeeding after iodinated contrast. With a Wells score of 9, start LMWH while waiting for imaging.",
        },
        {
          id: "c-ddimer-vq",
          label: "I told her the D-dimer was positive and booked a V/Q scan for Monday, and sent her home without anticoagulation in the meantime.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "A likely PE with a proximal DVT left untreated for two days risks a fatal embolism. Empiric anticoagulation is started while imaging is arranged. Imaging should happen today, not Monday.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "13:40",
      text:
        "The charge nurse points out the swollen left leg and asks whether a leg ultrasound would answer the question faster. You give a first dose of dalteparin and do a compression ultrasound.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "14:00",
      text:
        "The left common femoral and popliteal veins are not compressible. Her right ventricle looks normal. Troponin is 6 ng/L and NT-proBNP 140 pg/mL. Creatinine 64 µmol/L, hemoglobin 104 g/L, platelets 412 x 10^9/L. " +
        "After acetaminophen her heart rate is 94/minute and her saturation 95 percent on room air.",
      next: "q-site",
    },
    {
      kind: "question",
      id: "q-site",
      phase: "Where to treat",
      prompt: "She asks to go home. Can she be treated as an outpatient?",
      seconds: 90,
      modelAnswer: [
        "Confirmed VTE: proximal left leg DVT with a clinically likely PE.",
        "Hemodynamically stable. No oxygen needed. Pain controlled with oral drugs.",
        "No right ventricular strain on ultrasound. Normal troponin and BNP.",
        "Hestia criteria all negative. sPESI 0, with a heart rate under 110, saturation 90 percent or more and no cancer or cardiopulmonary disease.",
        "Both tools were derived in confirmed PE. Here the leg study confirms VTE and the treatment is the same.",
        "No active bleeding. Normal creatinine and platelets.",
        "Reliable follow up and a phone. Outpatient treatment is appropriate.",
      ],
      rubric: ["pe-a4", "pe-d1"],
      choices: [
        {
          id: "c-outpatient",
          label:
            "I checked the Hestia criteria and sPESI, which were all negative, confirmed no right ventricular strain, normal troponin and BNP and no oxygen need, and agreed she could go home with treatment and close follow up.",
          next: "s-cost",
          quality: "strong",
          feedback:
            "Correct. Hestia and sPESI identify low risk PE patients who can be treated at home. She is stable on room air with no right heart strain and has follow up. Outpatient care keeps her with her baby.",
        },
        {
          id: "c-admit",
          label: "I admitted her because every patient with a PE should be monitored in hospital for the first few days.",
          next: "s-admit",
          quality: "partial",
          feedback:
            "Admission is safe but not needed for a low risk patient. Hestia and sPESI are both negative and she has no right ventricular strain. Admission separates a breastfeeding mother from her baby without benefit.",
        },
        {
          id: "c-discharge-nothing",
          label: "I sent her home with a thrombosis clinic referral and planned to start anticoagulation at the clinic visit.",
          next: "s-admit",
          quality: "unsafe",
          feedback:
            "Confirmed VTE needs immediate anticoagulation. The first 3 months carry the highest risk of recurrence. Outpatient treatment means treatment that starts now, at home.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-admit",
      phase: "14:30",
      text:
        "The internist on call reviews her and says she meets low risk criteria and can be treated at home, starting anticoagulation today. She asks you to arrange it.",
      next: "s-cost",
    },
    {
      kind: "say",
      id: "s-cost",
      phase: "14:45",
      text:
        "The pharmacist calls. Her plan will not cover dalteparin without special authorization, which takes up to two weeks. Out of pocket it costs about 1100 dollars a month. " +
        "The patient says, 'My mother took rivaroxaban. It was one pill a day and no needles. Can I have that?'",
      next: "q-drug",
    },
    {
      kind: "question",
      id: "q-drug",
      phase: "Which anticoagulant",
      prompt: "What anticoagulant do you prescribe?",
      seconds: 90,
      modelAnswer: [
        "DOACs such as rivaroxaban and apixaban are not recommended while breastfeeding.",
        "LMWH and warfarin are both compatible with breastfeeding.",
        "Dalteparin 200 units/kg once daily, so 17,600 units, rounded up to the 18,000 unit syringe.",
        "Start warfarin today. Overlap with LMWH for at least 5 days and until the INR is 2 or more on 2 consecutive days. Target 2.5.",
        "Ask the pharmacist about starter supply and special authorization. Warfarin is inexpensive.",
        "At least 3 months of treatment.",
      ],
      rubric: ["pe-m3", "pe-m4", "pe-l1"],
      choices: [
        {
          id: "c-lmwh-warfarin",
          label:
            "I explained that rivaroxaban is not recommended while breastfeeding. I prescribed dalteparin 18,000 units once daily with warfarin started today, overlapping for at least 5 days until two INRs of 2 or more, and asked the pharmacist to supply the starter doses and apply for coverage.",
          next: "q-meds",
          quality: "strong",
          feedback:
            "Correct. LMWH and warfarin are both safe in breastfeeding and DOACs are not. Bridging to warfarin limits the cost of LMWH to about a week. The overlap ends only after 2 consecutive INRs of 2 or more.",
        },
        {
          id: "c-rivaroxaban-stop-bf",
          label: "I prescribed rivaroxaban 15 mg twice daily and advised her to stop breastfeeding.",
          next: "s-rivaroxaban",
          quality: "partial",
          feedback:
            "Rivaroxaban would be first line if she were not breastfeeding. But there are safe alternatives, so she should not have to stop breastfeeding. The examiner wanted LMWH, with or without warfarin, and a plan for the cost.",
        },
        {
          id: "c-rivaroxaban",
          label: "I prescribed rivaroxaban 15 mg twice daily and told her she could keep breastfeeding.",
          next: "s-rivaroxaban",
          quality: "unsafe",
          feedback:
            "There are too few safety data on DOACs in breastfed infants, and guidelines recommend against them while breastfeeding. LMWH and warfarin are the safe choices.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-rivaroxaban",
      phase: "15:00",
      text:
        "The pharmacist calls back and says the drug information service advises against rivaroxaban in a breastfeeding mother. You change to dalteparin 18,000 units daily and start warfarin, and she agrees.",
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Her other medicines",
      prompt: "Look at her medication list and plans. What else do you change?",
      seconds: 60,
      modelAnswer: [
        "Stop ibuprofen. NSAIDs with an anticoagulant raise bleeding risk. Use acetaminophen.",
        "Do not start the combined oral contraceptive. Estrogen raises the risk of recurrence.",
        "Progestin only methods or an IUD are suitable.",
        "Smoking cessation support.",
        "Breastfeeding continues as normal.",
      ],
      rubric: ["pe-m5", "pe-c1"],
      next: "q-discharge",
    },
    {
      kind: "question",
      id: "q-discharge",
      phase: "Discharge",
      prompt: "How do you discharge her safely?",
      seconds: 75,
      modelAnswer: [
        "Teach injection technique, or have the nurse give and observe the first self injection.",
        "INR on day 3 to 5 with a named person to adjust warfarin.",
        "Thrombosis clinic within 72 hours and her family doctor.",
        "Return for worse breathlessness, fainting, chest pain, bleeding, heavy lochia or black stools.",
        "At least 3 months of anticoagulation for a pregnancy provoked VTE.",
        "Written plan and contact numbers. Help at home with the children.",
      ],
      rubric: ["pe-d1", "pe-c1"],
      next: "q-team",
    },
    {
      kind: "question",
      id: "q-team",
      phase: "Closing the loop",
      prompt: "Who else needs to know, and what do you tell them?",
      seconds: 60,
      modelAnswer: [
        "Her obstetrician: VTE diagnosis, cancel the combined pill prescription.",
        "Her family doctor: anticoagulant plan, INR monitoring, duration.",
        "Future pregnancies need a prophylaxis plan with thrombosis and obstetrics.",
        "Pharmacist: special authorization request and warfarin dosing.",
        "Document Wells score, risk stratification and the reason for avoiding a DOAC.",
      ],
      rubric: ["pe-c2", "pe-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She goes home at 16:00 with her son. Her INR is 2.4 and 2.6 on days 6 and 7 and the dalteparin stops. She breastfeeds throughout and finishes 3 months of warfarin. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pe-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about VTE risk factors: delivery date and mode, thromboprophylaxis, previous clots, family history, obesity, smoking and estrogen plans.",
      points: 2,
      teaching: "Pregnancy and the first 6 to 12 weeks after birth carry a high VTE risk. Caesarean delivery, obesity, smoking and a family history add to it.",
      source: "bc-vte",
    },
    {
      id: "pe-h2",
      competency: "assessment",
      criterion: "history",
      text: "Characterizes the chest pain, breathlessness and leg symptoms, and asks about hemoptysis, syncope and palpitations.",
      points: 1,
      teaching: "Leg symptoms before chest symptoms point to a DVT as the source. Syncope suggests a large clot burden.",
      source: "bc-vte",
    },
    {
      id: "pe-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks whether she is breastfeeding and how she is feeding her baby.",
      points: 2,
      teaching: "Breastfeeding changes the choice of anticoagulant and how imaging is explained. It must be asked early.",
      source: "ash-preg",
    },
    {
      id: "pe-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about medications including NSAIDs, bleeding risks such as lochia and anemia, drug coverage and contraception plans.",
      points: 2,
      teaching: "NSAIDs, a recent operation and postpartum bleeding all affect bleeding risk. Drug coverage often decides which anticoagulant she can actually take.",
      source: "bc-vte",
    },
    {
      id: "pe-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Measures both calves, looks for edema and deep vein tenderness, and examines for right heart strain and other sources of pain.",
      points: 2,
      teaching: "A calf more than 3 cm larger than the other side is a sign of DVT. Raised neck veins, a loud second sound or hypotension suggest right heart strain.",
      source: "bc-vte",
    },
    {
      id: "pe-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Calculates the Wells score as 9, PE likely, and does not rely on the D-dimer, which is often raised after delivery.",
      points: 3,
      critical: true,
      teaching: "A Wells score of 4.5 or more makes PE likely. Do not use a D-dimer in that group. Go straight to imaging and start anticoagulation.",
      source: "bc-vte",
    },
    {
      id: "pe-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers peripartum cardiomyopathy, spontaneous coronary artery dissection, pneumonia, postpartum pre-eclampsia and anemia.",
      points: 2,
      teaching: "Breathlessness after delivery has several serious causes. A normal ECG, troponin, BNP and blood pressure make the main alternatives unlikely.",
      source: "bc-vte",
    },
    {
      id: "pe-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Uses Hestia or sPESI with vital signs, oxygen need, troponin, BNP and right ventricular size to judge whether outpatient care is safe.",
      points: 2,
      teaching: "Patients with no Hestia criteria had low rates of recurrence and bleeding with home treatment. Right heart strain or an oxygen need calls for admission.",
      source: "hestia",
    },
    {
      id: "pe-m1",
      competency: "management",
      criterion: "management",
      text: "Starts LMWH empirically while imaging is arranged, since PE is likely and she has no contraindication.",
      points: 3,
      critical: true,
      teaching: "When PE is likely and imaging is not immediate, start anticoagulation first. An untreated proximal DVT can embolize again.",
      source: "bc-vte",
    },
    {
      id: "pe-m2",
      competency: "management",
      criterion: "management",
      text: "Chooses a leg compression ultrasound first because of her leg signs, and keeps CT for a negative leg study.",
      points: 2,
      teaching: "A proximal DVT in a patient with chest symptoms confirms VTE and the treatment is the same. This avoids breast radiation in a lactating woman.",
      source: "bc-vte",
    },
    {
      id: "pe-m3",
      competency: "management",
      criterion: "management",
      text: "Chooses an anticoagulant compatible with breastfeeding, LMWH or LMWH with warfarin, and does not prescribe a DOAC.",
      points: 3,
      critical: true,
      teaching: "LMWH, unfractionated heparin and warfarin are safe in breastfeeding. Guidelines recommend against DOACs in breastfeeding women.",
      source: "ash-preg",
    },
    {
      id: "pe-m4",
      competency: "management",
      criterion: "management",
      text: "Doses dalteparin at 200 units/kg once daily, 18,000 units, and overlaps warfarin for at least 5 days until 2 consecutive INRs of 2 or more, target 2.5.",
      points: 2,
      teaching: "Dose LMWH by actual weight and round up to the next prefilled syringe. Stopping LMWH before the INR is therapeutic twice leaves her unprotected.",
      source: "bc-vte",
    },
    {
      id: "pe-m5",
      competency: "management",
      criterion: "management",
      text: "Stops ibuprofen, cancels the combined oral contraceptive and offers progestin only or IUD contraception.",
      points: 1,
      teaching: "The 2024 U.S. MEC rates combined hormonal contraception category 4 under 21 days after birth and category 3 during anticoagulation for DVT or PE. Progestin only methods and IUDs are suitable.",
      source: "us-mec",
    },
    {
      id: "pe-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges outpatient treatment with injection teaching, an INR check on day 3 to 5, thrombosis clinic follow up within 72 hours, return precautions and at least 3 months of treatment.",
      points: 2,
      teaching: "Most patients with hemodynamically stable VTE can be treated as outpatients with a clear follow up plan. Every acute VTE needs at least 3 months of anticoagulation.",
      source: "bc-vte",
    },
    {
      id: "pe-c1",
      competency: "communication",
      criterion: "process",
      text: "Explains that she can keep breastfeeding, including after any contrast, and explains why rivaroxaban is not the right choice for her now.",
      points: 2,
      teaching: "Less than 1 percent of iodinated contrast reaches breast milk and the baby absorbs almost none of it. Interrupting breastfeeding is not needed.",
      source: "cmaj-contrast",
    },
    {
      id: "pe-c2",
      competency: "communication",
      criterion: "process",
      text: "Informs her obstetrician and family doctor about the VTE, the cancelled combined pill and the need for prophylaxis in future pregnancies.",
      points: 1,
      teaching: "A pregnancy associated VTE changes care in every future pregnancy. The obstetric team needs to know.",
      source: "ash-preg",
    },
    {
      id: "pe-l1",
      competency: "leadership",
      criterion: "process",
      text: "Works with the pharmacist on starter doses and coverage, makes timely decisions and keeps mother and baby together.",
      points: 2,
      teaching: "A plan the patient cannot afford is not a plan. Pharmacists can often bridge coverage gaps on the day.",
      source: "bc-vte",
    },
  ],
  sources: [
    {
      id: "bc-vte",
      citation: "British Columbia Guidelines and Protocols Advisory Committee. Venous thromboembolism. Diagnosis and management. BC Guidelines. 2024.",
      url: "https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf",
    },
    {
      id: "ash-preg",
      citation:
        "Bates SM, Rajasekhar A, Middeldorp S, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism. Venous thromboembolism in the context of pregnancy. Blood Advances. 2018.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/",
    },
    {
      id: "hestia",
      citation: "Zondag W, Mos IC, Creemers-Schild D, et al. Outpatient treatment in patients with acute pulmonary embolism. The Hestia Study. Journal of Thrombosis and Haemostasis. 2011.",
    },
    {
      id: "us-mec",
      citation: "Nguyen AT, Curtis KM, Tepper NK, et al. U.S. Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports. 2024.",
      url: "https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm",
    },
    {
      id: "cmaj-contrast",
      citation: "Singh N, McLean K. Intravascular contrast media for imaging in breastfeeding women. CMAJ. 2012.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3470645/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
