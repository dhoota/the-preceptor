// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  nice: {
    id: "nice-ng133",
    citation: "National Institute for Health and Care Excellence. Hypertension in pregnancy: diagnosis and management. NICE guideline NG133. 2019, updated 2023.",
    url: "https://www.nice.org.uk/guidance/ng133/chapter/Recommendations",
  },
  who: {
    id: "who-pe-2011",
    citation: "World Health Organization. WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia. 2011.",
  },
  brookfield: {
    id: "brookfield-im-mg",
    citation: "Brookfield K, Galadanci H, Du L, and colleagues. Magnesium sulfate pharmacokinetics after intramuscular dosing in women with preeclampsia. AJOG Glob Rep. 2021.",
  },
  sogc426: {
    id: "sogc-426",
    citation:
      "Magee LA, Smith GN, Bloch C, et al. Guideline No. 426: Hypertensive disorders of pregnancy: diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022.",
  },
  sogc364: {
    id: "sogc-364",
    citation: "Skoll A, Boutin A, Bujold E, et al. No. 364: Antenatal corticosteroid therapy for improving neonatal outcomes. J Obstet Gynaecol Can. 2018.",
  },
  acog222: {
    id: "acog-222",
    citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 222: Gestational hypertension and preeclampsia. Obstet Gynecol. 2020.",
  },
  simerville: {
    id: "simerville-urinalysis",
    citation: "Simerville JA, Maxted WC, Pahira JJ. Urinalysis: a comprehensive review. Am Fam Physician. 2005.",
    url: "https://www.aafp.org/pubs/afp/issues/2005/0315/p1153.html",
  },
  tamir: {
    id: "tamir-hydronephrosis",
    citation:
      "Tamir S, Hermann D, Bekhor E, and colleagues. Physiologic hydronephrosis as a cause of emergent right abdominal pain in pregnancy: truth or myth? Quant Imaging Med Surg. 2025.",
  },
  wao: {
    id: "wao-2020",
    citation: "Cardona V, Ansotegui IJ, Ebisawa M, and colleagues. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
  },
  conde: {
    id: "conde-agudelo-smoking",
    citation:
      "Conde-Agudelo A, Althabe F, Belizan JM, Kafury-Goeta AC. Cigarette smoking during pregnancy and risk of preeclampsia: a systematic review. Am J Obstet Gynecol. 1999.",
  },
  leffert: {
    id: "soap-anticoagulants",
    citation:
      "Leffert L, Butwick A, Carvalho B, and colleagues. The Society for Obstetric Anesthesia and Perinatology consensus statement on the anesthetic management of pregnant and postpartum women receiving thromboprophylaxis or higher dose anticoagulants. Anesth Analg. 2018.",
  },
} satisfies Record<string, Source>;

export const PRE_ECLAMPSIA_S82: Samp[] = [
  /* 39 Remote nursing station during an influenza outbreak ---------------- */
  {
    id: "pre-eclampsia-39",
    topic: "pre-eclampsia",
    title: "Aches during a household flu outbreak",
    stem:
      "You are working at a nursing station in a fly-in community in northern Ontario. Blood samples go out on the scheduled flight, and results take about 24 hours. A 24-year-old woman, G3P2 at 31 weeks and 5 days, presents with 2 days of body aches, fatigue and nausea. She has vomited twice today and has a dull ache under her right ribs. Three people in her household have had influenza this week. Her two earlier pregnancies were normotensive. At 20 weeks her BP was 104 mmHg systolic and 66 mmHg diastolic. She takes a prenatal vitamin.\n\nShe has epigastric and right upper quadrant tenderness without guarding. The uterus is soft and nontender. Reflexes are 3+ without clonus. The fetal heart rate is 144/minute by Doppler. Urine dipstick shows 2+ protein. Capillary glucose is 5.2 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "96/minute", resp: "18/minute", bp: "158/104 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly argues against influenza as the full explanation for her illness?",
        options: [
          "Body aches and fatigue",
          "Household influenza contacts",
          "Pulse of 96/minute",
          "Two episodes of vomiting",
          "Urine protein of 2+ on dipstick",
        ],
        correct: 4,
        explanation:
          "A dipstick reading of 2+ protein, which NICE accepts as proteinuria, alongside a new BP of 158/104 mmHg after 20 weeks meets the definition of pre-eclampsia, and influenza does not cause proteinuria of this degree. Her BP at 20 weeks was 104/66 mmHg, so the rise is new. Body aches, fatigue and vomiting occur with influenza and with pre-eclampsia, so they do not separate the two. Household contacts make influenza more likely but do not explain her hypertension or right upper quadrant pain. A pulse of 96/minute is common to both and is near normal for late pregnancy.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "nice-ng133",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following diagnoses is most important to exclude first in this patient?",
        options: ["Acute cholecystitis", "Biliary colic", "HELLP syndrome", "Pyelonephritis", "Viral hepatitis"],
        correct: 2,
        explanation:
          "Right upper quadrant and epigastric pain with nausea and vomiting in a woman with new hypertension and proteinuria at 31 weeks is pre-eclampsia with liver involvement until proven otherwise, and HELLP syndrome must be excluded before any other cause is accepted. HELLP can progress within hours to bleeding, liver hematoma or eclampsia. Acute cholecystitis is less likely without fever or guarding, and neither cholecystitis nor biliary colic explains her BP or proteinuria. Pyelonephritis would bring fever and urinary symptoms she does not have. Viral hepatitis does not cause new hypertension.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "nice-ng133",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "You cannot measure her platelets or liver enzymes at the station. The obstetrician on call at the referral centre asks how you plan to proceed.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to the nursing station overnight",
          "Fly out on tomorrow's scheduled flight",
          "Reassess her BP and symptoms in 4 hours",
          "Request an urgent medevac now",
          "Send bloodwork and await results",
        ],
        correct: 3,
        explanation:
          "She has pre-eclampsia with right upper quadrant pain at 31 weeks, possible HELLP, and no way to measure platelets or liver enzymes for 24 hours. She needs care in a centre with obstetrics and a neonatal intensive care unit, so an urgent medevac is requested now. The WHO advises that where full care cannot be given, a woman with severe pre-eclampsia receives a magnesium sulfate loading dose and is transferred at once. Waiting for results, a reassessment in 4 hours or tomorrow's scheduled flight all lose time in which HELLP can progress. A nursing station cannot manage eclampsia, hemorrhage or an urgent birth overnight.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "who-pe-2011",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "You give magnesium sulfate 4 g IV over 20 minutes by syringe. The station has no infusion pump, and the plane will arrive in about 3 hours.",
        prompt: "Which of the following is the most appropriate way to continue magnesium sulfate until the plane arrives?",
        options: [
          "magnesium sulfate 5 g IM every 12 hours",
          "magnesium sulfate 5 g IM into each buttock",
          "magnesium sulfate 10 g IV over 20 minutes",
          "magnesium sulfate 2 g IV push every hour",
          "magnesium sulfate 1 g/hour by gravity drip",
        ],
        correct: 1,
        explanation:
          "Without an infusion pump, the intramuscular regimen completes her loading dose. It is 4 g IV over 20 minutes plus 10 g IM, given as 5 g into each buttock, then 5 g IM every 4 hours. This regimen reaches levels used for seizure prophylaxis. Before each IM dose, reflexes, breathing and urine output are checked. A drip by gravity cannot be controlled and risks toxicity. Hourly 2 g IV pushes give repeated peaks without a controlled rate, and 10 g IV is more than twice the usual IV loading dose, so both risk respiratory depression. Dosing every 12 hours leaves long gaps without protection.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "brookfield-im-mg",
      },
    ],
    sources: [S.nice, S.who, S.brookfield],
    ...META,
  },

  /* 40 Flank pain in a woman who has passed a stone before ---------------- */
  {
    id: "pre-eclampsia-40",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain"],
    title: "Flank pain with a history of stones",
    stem:
      "You are working in a community hospital emergency department. A 35-year-old woman, G2P1 at 32 weeks and 1 day, presents with 10 hours of right flank and right upper abdominal pain with nausea. She passed a kidney stone 4 years ago and says this pain feels similar. She has no dysuria, fever, vaginal bleeding or contractions. Her first pregnancy was normotensive. At 28 weeks her BP was 112 mmHg systolic and 70 mmHg diastolic. She takes a prenatal vitamin.\n\nShe is tender in the right flank and right upper quadrant. The uterus is soft and nontender. Reflexes are 3+. The fetal heart rate is 150/minute. Urine dipstick shows 3+ blood and 2+ protein, with no leukocytes or nitrites. Bedside ultrasound shows mild right hydronephrosis with no stone seen and a normal left kidney.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "150/98 mmHg", o2sat: "98% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following diagnoses is most important to exclude before her pain is attributed to a kidney stone?",
        options: ["Acute appendicitis", "Placental abruption", "Pre-eclampsia", "Pyelonephritis", "Ruptured ovarian cyst"],
        correct: 2,
        explanation:
          "Her BP has risen from 112/70 mmHg at 28 weeks to 150/98 mmHg, she has 2+ proteinuria and brisk reflexes, and her pain extends into the right upper quadrant, so pre-eclampsia with liver involvement must be excluded before a stone is accepted. A past stone and a similar pain make anchoring easy. Pyelonephritis is unlikely with no fever and no leukocytes or nitrites. Placental abruption is less likely with a soft, nontender uterus, no bleeding and a normal fetal heart rate. Appendicitis and a ruptured ovarian cyst would not explain the new hypertension and proteinuria.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "nice-ng133",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Urine microscopy shows 0 to 2 red cells per high-power field. Hemoglobin 101 g/L, platelets 92 x 10^9/L, AST 186 U/L, ALT 160 U/L and LDH 690 U/L. Haptoglobin is below the detection limit.",
        prompt: "Which of the following best explains the strongly positive dipstick test for blood?",
        options: [
          "Bleeding from a ureteric stone",
          "Free hemoglobin from hemolysis",
          "Glomerular bleeding from nephritis",
          "Myoglobinuria from muscle injury",
          "Vaginal blood contaminating the sample",
        ],
        correct: 1,
        explanation:
          "The dipstick test for blood detects peroxidase activity, which free hemoglobin and myoglobin also produce, so a 3+ reading with only 0 to 2 red cells on microscopy means pigment in the urine rather than hematuria. Her undetectable haptoglobin, LDH of 690 U/L and hemoglobin of 101 g/L show intravascular hemolysis, which with platelets of 92 x 10^9/L and an AST of 186 U/L makes HELLP syndrome the cause. A stone, nephritis and vaginal blood would all show intact red cells on microscopy. Myoglobinuria needs muscle injury, which she does not have, and would not explain the low haptoglobin.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "simerville-urinalysis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best explains the mild right hydronephrosis on her bedside ultrasound?",
        options: [
          "Expected change of later pregnancy",
          "Obstructing right ureteric stone",
          "Pyonephrosis from a blocked ureter",
          "Ureteric compression by a hematoma",
          "Ureteric spasm from pyelonephritis",
        ],
        correct: 0,
        explanation:
          "Mild right-sided hydronephrosis is common in later pregnancy because the enlarging uterus and hormonal effects dilate the right collecting system. An MRI study found right hydronephrosis in about 45% of pregnant women without symptoms, and it was no more common in women with unexplained right-sided pain. With no stone seen and almost no red cells in the urine, an obstructing stone is unlikely, and HELLP already explains her pain. Pyonephrosis and pyelonephritis need fever and pyuria, which she does not have. Nothing in her history or scan suggests a retroperitoneal hematoma.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "tamir-hydronephrosis",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Obstetrics plans birth within 24 hours, once she is stable. Magnesium sulfate and labetalol have been started.",
        prompt: "Which of the following is the most appropriate corticosteroid plan for her?",
        options: [
          "betamethasone 12 mg IM, repeated in 24 hours",
          "dexamethasone 10 mg IV every 12 hours",
          "hydrocortisone 100 mg IV every 8 hours",
          "methylprednisolone 1 g IV once daily",
          "No corticosteroid until after the birth",
        ],
        correct: 0,
        explanation:
          "At 32 weeks with birth expected within 7 days, antenatal corticosteroids reduce neonatal respiratory distress and death. The SOGC recommends them from 24 to 34 weeks and 6 days, and betamethasone 12 mg IM, repeated in 24 hours, is a standard course. Starting it now is worthwhile even if birth comes before the second dose. Dexamethasone 10 mg IV every 12 hours is the high-dose regimen once used to raise platelets in HELLP, and NICE advises against corticosteroids to treat HELLP because they do not improve maternal outcomes. Hydrocortisone and methylprednisolone do not give the fetal lung benefit. Withholding steroids gives up a proven benefit at 32 weeks.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-364",
      },
    ],
    sources: [S.nice, S.simerville, S.tamir, S.sogc364],
    ...META,
  },

  /* 41 Agitation six days after birth ------------------------------------- */
  {
    id: "pre-eclampsia-41",
    topic: "pre-eclampsia",
    title: "Restless and not sleeping after the birth",
    stem:
      "A 27-year-old woman is brought to the emergency department by her mother 6 days after a vaginal birth at 39 weeks. Since last night she has been restless and has not slept. She keeps saying the hospital switched her baby. Her sister has bipolar disorder. She had a headache yesterday. Her BP was normal throughout the pregnancy, and there was no hemorrhage at the birth. She does not drink alcohol or use drugs. She is breastfeeding and takes only ibuprofen as needed.\n\nShe is distractible and oriented to person only, and her attention drifts during the interview. She has no focal neurological deficit. Reflexes are 3+ with 3 beats of ankle clonus. Capillary glucose is 5.6 mmol/L. The triage nurse has paged psychiatry.",
    vitals: { temperature: "37.0°C oral", pulse: "104/minute", resp: "18/minute", bp: "158/104 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following conditions is most important to exclude before she is assessed by psychiatry?",
        options: ["Alcohol withdrawal", "Postpartum blues", "Postpartum pre-eclampsia", "Serotonin syndrome", "Sheehan syndrome"],
        correct: 2,
        explanation:
          "A new BP of 158/104 mmHg 6 days after birth, in a woman who was normotensive in pregnancy, with a headache, confusion and clonus points to postpartum pre-eclampsia. NICE counts altered mental status and clonus as neurological complications of pre-eclampsia, and they put her at risk of eclampsia. A family history of bipolar disorder makes postpartum psychosis tempting, but a medical cause must be excluded first. Serotonin syndrome also causes agitation and clonus, but she takes no serotonergic drug. Sheehan syndrome follows a major hemorrhage, which she did not have. She does not drink, and postpartum blues does not cause disorientation.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "nice-ng133",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Urine protein to creatinine ratio is 18 mg/mmol. Platelets, creatinine, AST and ALT are normal. Her BP is 156/102 mmHg on repeat.",
        prompt: "Which of the following best classifies her condition, given these results?",
        options: [
          "Postpartum pre-eclampsia",
          "Postpartum psychosis alone",
          "Severe gestational hypertension",
          "Uncontrolled chronic hypertension",
          "White coat hypertension",
        ],
        correct: 0,
        explanation:
          "Proteinuria is not required for pre-eclampsia. NICE defines it as new hypertension with proteinuria or another maternal organ problem, and neurological complications such as altered mental status and clonus qualify on their own. Her ratio of 18 mg/mmol is below 30 mg/mmol, but her confusion and clonus with a new BP above 140/90 mmHg still meet the definition. Gestational hypertension means new hypertension without organ involvement, so it does not fit her neurological findings. She was normotensive in pregnancy, so this is not chronic hypertension. Two raised readings with confusion are not white coat hypertension, and psychosis alone would not explain the clonus or BP.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "nice-ng133",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her first?",
        options: [
          "droperidol 2.5 mg IM",
          "haloperidol 5 mg IM",
          "lorazepam 1 mg IV",
          "magnesium sulfate 4 g IV",
          "olanzapine 5 mg IM",
        ],
        correct: 3,
        explanation:
          "Postpartum pre-eclampsia with neurological features carries a risk of eclampsia, and ACOG recommends magnesium sulfate after birth as before it, as a 4 to 6 g IV load over about 20 minutes and then 1 to 2 g/hour. A 4 g load is the usual first dose. Sedation is not needed unless her agitation threatens her safety. Droperidol, haloperidol and olanzapine would sedate her and cloud the neurological examination that tracks her response, and they do not prevent eclamptic seizures. Benzodiazepines such as lorazepam are less effective than magnesium sulfate against eclamptic seizures. Her BP is below the severe range of 160/110 mmHg, but it still needs treatment.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-222",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Her confusion clears over 12 hours, and psychiatry finds no psychotic disorder. Her BP stays near 150/100 mmHg. She wishes to keep breastfeeding.",
        prompt: "Which of the following is the most appropriate oral antihypertensive for her while she is breastfeeding?",
        options: [
          "hydrochlorothiazide 25 mg PO daily",
          "losartan 50 mg PO daily",
          "methyldopa 250 mg PO three times daily",
          "nifedipine XL 30 mg PO daily",
          "spironolactone 25 mg PO daily",
        ],
        correct: 3,
        explanation:
          "Long-acting nifedipine controls BP with one daily dose and is compatible with breastfeeding, and NICE names nifedipine and enalapril for postnatal hypertension and favours once-daily drugs. NICE advises avoiding diuretics, such as hydrochlorothiazide and spironolactone, and angiotensin receptor blockers, such as losartan, in women who are breastfeeding. Methyldopa causes sedation and low mood, and NICE advises stopping it within 2 days after the birth and switching to another drug. After a confusional episode, a drug that sedates her would also make her mental state harder to judge.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "nice-ng133",
      },
    ],
    sources: [S.nice, S.acog222],
    ...META,
  },
];
