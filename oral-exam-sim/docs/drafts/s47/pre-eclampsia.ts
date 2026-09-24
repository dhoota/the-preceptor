// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  sogc: {
    id: "sogc-426",
    citation:
      "Magee LA, Smith GN, Bloch C, et al. Guideline No. 426: Hypertensive disorders of pregnancy: diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022.",
  },
  isshp: {
    id: "isshp-2021",
    citation:
      "Magee LA, Brown MA, Hall DR, et al. The 2021 International Society for the Study of Hypertension in Pregnancy classification, diagnosis and management recommendations for international practice. Pregnancy Hypertens. 2022.",
  },
  acog222: {
    id: "acog-222",
    citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 222: Gestational hypertension and preeclampsia. Obstet Gynecol. 2020.",
  },
  acog767: {
    id: "acog-767",
    citation:
      "American College of Obstetricians and Gynecologists. Committee Opinion No. 767: Emergent therapy for acute-onset, severe hypertension during pregnancy and the postpartum period. Obstet Gynecol. 2019.",
  },
  sogc364: {
    id: "sogc-364",
    citation: "Skoll A, Boutin A, Bujold E, et al. No. 364: Antenatal corticosteroid therapy for improving neonatal outcomes. J Obstet Gynaecol Can. 2018.",
  },
  sogc376: {
    id: "sogc-376",
    citation: "Magee LA, De Silva DA, Sawchuck D, Synnes A, von Dadelszen P. No. 376: Magnesium sulphate for fetal neuroprotection. J Obstet Gynaecol Can. 2019.",
  },
  chips: {
    id: "chips",
    citation: "Magee LA, von Dadelszen P, Rey E, et al. Less-tight versus tight control of hypertension in pregnancy. N Engl J Med. 2015.",
  },
  sibai: {
    id: "sibai-hellp",
    citation:
      "Sibai BM. Diagnosis, controversies, and management of the syndrome of hemolysis, elevated liver enzymes, and low platelet count. Obstet Gynecol. 2004.",
  },
  zeisler: {
    id: "prognosis",
    citation: "Zeisler H, Llurba E, Chantraine F, et al. Predictive value of the sFlt-1:PlGF ratio in women with suspected preeclampsia. N Engl J Med. 2016.",
  },
  martin: {
    id: "martin-stroke",
    citation:
      "Martin JN Jr, Thigpen BD, Moore RC, et al. Stroke and severe preeclampsia and eclampsia: a paradigm shift focusing on systolic blood pressure. Obstet Gynecol. 2005.",
  },
  acog207: {
    id: "acog-207",
    citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 207: Thrombocytopenia in pregnancy. Obstet Gynecol. 2019.",
  },
  scully: {
    id: "scully-ttp",
    citation:
      "Scully M, Thomas M, Underwood M, et al. Thrombotic thrombocytopenic purpura and pregnancy: presentation, management, and subsequent pregnancy outcomes. Blood. 2014.",
  },
  magpie: {
    id: "magpie",
    citation:
      "Magpie Trial Collaborative Group. Do women with pre-eclampsia, and their babies, benefit from magnesium sulphate? The Magpie Trial: a randomised placebo-controlled trial. Lancet. 2002.",
  },
  acogHa: {
    id: "acog-headache",
    citation: "American College of Obstetricians and Gynecologists. Clinical Practice Guideline No. 3: Headaches in pregnancy and postpartum. Obstet Gynecol. 2022.",
  },
  eclampsiaTrial: {
    id: "eclampsia-trial",
    citation: "Eclampsia Trial Collaborative Group. Which anticonvulsant for women with eclampsia? Evidence from the Collaborative Eclampsia Trial. Lancet. 1995.",
  },
  tintinalli: {
    id: "tintinalli",
    citation:
      "Tintinalli JE, Ma OJ, Yealy DM, et al, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. Chapters on maternal emergencies after 20 weeks of pregnancy and in the postpartum period.",
  },
} satisfies Record<string, Source>;

export const PRE_ECLAMPSIA_S47_SAMPS: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-16",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain"],
    title: "Heartburn that antacids did not settle",
    stem:
      "A 38-year-old woman, G3P2 at 31 weeks and 2 days, presents to the emergency department with 10 hours of epigastric pain and nausea. She has vomited twice. She thinks it is reflux, which she had in her last pregnancy, but antacids have not helped. This pregnancy has been uncomplicated. At her 28-week visit her BP was 118 mmHg systolic and 72 mmHg diastolic. She takes a prenatal vitamin. She has no headache or visual change. The abdomen is soft with epigastric and right upper quadrant tenderness. The uterus is nontender and the fundal height is 31 cm. Reflexes are normal. There is no edema.",
    vitals: { temperature: "36.9°C oral", pulse: "94/minute", resp: "18/minute", bp: "134/86 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her evaluation?",
        options: [
          "Discharge with pantoprazole and follow-up",
          "Gastrointestinal cocktail and reassessment",
          "Lipase to exclude pancreatitis",
          "Platelets, AST, ALT, creatinine and LDH",
          "Urine dipstick for protein",
        ],
        correct: 3,
        explanation:
          "Epigastric and right upper quadrant pain after 20 weeks must be treated as possible HELLP syndrome until blood work shows otherwise, even with a BP of 134/86 mmHg. HELLP can appear before hypertension or proteinuria. Platelets, AST, ALT, creatinine and LDH answer the question within an hour. A gastrointestinal cocktail or pantoprazole with discharge risks missing HELLP, because pain relief does not exclude it. A lipase or a dipstick alone cannot detect hemolysis, low platelets or raised liver enzymes.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sibai-hellp",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Hemoglobin 104 g/L, platelets 88 x 10^9/L, AST 236 U/L, ALT 198 U/L, LDH 812 U/L, creatinine 64 umol/L, glucose 5.2 mmol/L and INR 1.0. The film shows schistocytes. At 1540 her BP is 138/88 mmHg.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: ["Acute cholangitis", "Fatty liver of pregnancy", "HELLP syndrome", "Immune thrombocytopenia", "Viral hepatitis"],
        correct: 2,
        explanation:
          "Schistocytes with an LDH of 812 U/L, an AST of 236 U/L and platelets of 88 x 10^9/L complete the triad of hemolysis, raised liver enzymes and low platelets. HELLP can occur with a BP below 140/90 mmHg, as here. Fatty liver of pregnancy usually brings hypoglycemia, coagulopathy or renal failure, and her glucose, INR and creatinine are normal. Immune thrombocytopenia does not raise liver enzymes or fragment red cells. Viral hepatitis and cholangitis do not explain microangiopathic hemolysis, and she has no fever.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following results is the most specific evidence of hemolysis in her?",
        options: ["ALT 198 U/L", "AST 236 U/L", "Hemoglobin 104 g/L", "Platelets 88 x 10^9/L", "Schistocytes on film"],
        correct: 4,
        explanation:
          "Schistocytes are red cell fragments sheared in damaged small vessels, so they show microangiopathic hemolysis directly. LDH also rises with hemolysis, but liver injury raises it too. A hemoglobin of 104 g/L is common in the third trimester from dilution and iron deficiency, so it does not prove hemolysis. The AST and ALT show liver injury, and platelets of 88 x 10^9/L show consumption rather than red cell destruction.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following corticosteroid regimens is most appropriate for her now?",
        options: [
          "betamethasone 12 mg IM, repeat in 24 hours",
          "dexamethasone 10 mg IV every 12 hours",
          "hydrocortisone 100 mg IV every 8 hours",
          "methylprednisolone 1 g IV daily",
          "prednisone 50 mg PO daily",
        ],
        correct: 0,
        explanation:
          "HELLP at 31 weeks and 2 days makes birth within 7 days likely, and SOGC recommends antenatal corticosteroids between 24 and 34 weeks and 6 days in that situation. Betamethasone 12 mg IM, repeated after 24 hours, reduces neonatal death, respiratory distress and intraventricular hemorrhage. Dexamethasone 10 mg IV every 12 hours is not the antenatal regimen, and high doses given to raise the platelet count in HELLP have not improved outcomes. Hydrocortisone and prednisone are largely inactivated by the placenta. Methylprednisolone 1 g is an immunosuppressive pulse.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-364",
      },
    ],
    sources: [S.sibai, S.sogc364],
    ...META,
  },
  /* 17 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-17",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Sparkles in her vision far from a perinatal centre",
    stem:
      "You are working in a rural hospital emergency department 3 hours by road from the regional perinatal centre. The hospital stocks no IV antihypertensive drugs. A 24-year-old woman, G1P0 at 34 weeks and 3 days, presents at 1402 with a frontal headache for 6 hours and seeing sparkles. Her family physician follows the pregnancy. At 30 weeks her BP was 116 mmHg systolic and 74 mmHg diastolic. She has no medical history and takes no medications. She is alert and oriented. Reflexes are 3+ with 2 beats of ankle clonus. There is mild pitting edema of both ankles. The fetal heart rate by Doppler is 140/minute.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "168/112 mmHg", o2sat: "98% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to confirm severe hypertension in her before treatment?",
        options: [
          "Ambulatory BP monitoring for 24 hours",
          "Home BP readings for 2 days",
          "Repeat BP after 4 hours of rest",
          "Repeat BP within 15 minutes",
          "Supine BP after 10 minutes",
        ],
        correct: 3,
        explanation:
          "SOGC defines severe hypertension as a systolic of 160 mmHg or more or a diastolic of 110 mmHg or more, confirmed by a repeat reading within 15 minutes in the same arm. Her triage reading of 168/112 mmHg with neurological symptoms needs quick confirmation so that treatment is not delayed. Waiting 4 hours is the ACOG interval for diagnosing non-severe hypertension. Home or ambulatory readings delay urgent care. Lying supine late in pregnancy lowers BP through aortocaval compression and breaks standard technique.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
      {
        id: "q2",
        kind: "single",
        update: "A repeat BP at 1412 is 166/110 mmHg. An IV is in place.",
        prompt: "Which of the following is the most appropriate first antihypertensive for her?",
        options: ["captopril 25 mg PO", "furosemide 40 mg IV", "hydrochlorothiazide 25 mg PO", "methyldopa 250 mg PO", "nifedipine 10 mg PO"],
        correct: 4,
        explanation:
          "Immediate-release oral nifedipine 10 mg, swallowed whole, is a first-line drug for severe hypertension in pregnancy and needs no IV drug, which suits a site without IV antihypertensives. It can be repeated at 30 minutes if her BP stays at 160/110 mmHg or higher. Captopril, like other ACE inhibitors, is fetotoxic. Methyldopa 250 mg acts slowly and is well below the 1 000 mg ISSHP urgent dose. Furosemide and hydrochlorothiazide do not lower severe hypertension quickly, and diuresis worsens the contracted plasma volume of pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "At 1445 her BP is 152/102 mmHg. The headache persists.",
        prompt: "Which of the following magnesium sulfate regimens is most appropriate for her?",
        options: [
          "1 g IV over 20 minutes, then 1 g/hour",
          "2 g IV over 20 minutes, then 1 g/hour",
          "4 g IV over 20 minutes, then 1 g/hour",
          "4 g IV over 20 minutes, then 4 g/hour",
          "10 g IV over 20 minutes, then 1 g/hour",
        ],
        correct: 2,
        explanation:
          "Hypertension with headache, visual sparkles, 3+ reflexes and clonus is pre-eclampsia with neurological features, and ISSHP recommends magnesium sulfate for eclampsia prevention. The Magpie and Eclampsia Trial regimen is 4 g IV over 20 minutes, then 1 g/hour. Loads of 1 or 2 g are too small to reach a protective level quickly. A 10 g IV load or a 4 g/hour infusion risks toxicity, with loss of reflexes, respiratory depression and cardiac arrest.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her delivery?",
        options: [
          "Admit locally and deliver at 37 weeks",
          "Discharge with home BP monitoring",
          "Expectant care at the perinatal centre",
          "Steroid course, then delivery in 48 hours",
          "Transfer for delivery once stabilized",
        ],
        correct: 4,
        explanation:
          "A severe headache with repeated visual symptoms and clonus is an abnormal neurological feature, which ISSHP lists as an indication for delivery at any gestational age. So she needs transfer to the perinatal centre for delivery once her BP is controlled and magnesium is running. Expectant care or delivery at 37 weeks ignores that indication. Betamethasone may be started before 34 weeks and 6 days, but waiting 48 hours for its full effect should not delay a maternal indication for birth. Discharge would be unsafe.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.sogc, S.isshp],
    ...META,
  },
  /* 18 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-18",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Teenager with headache and vomiting",
    stem:
      "A 16-year-old girl is brought to the emergency department by her mother with 2 days of headache and 3 episodes of vomiting today. She says she has never been sexually active. Her periods have been irregular and she cannot recall the last one. She has no medical history and takes no medications. She is alert and oriented. Pupils are equal and reactive, and there is no neck stiffness or focal deficit. Reflexes are brisk. The abdomen is protuberant, with a firm, nontender midline mass rising 4 cm above the umbilicus.",
    vitals: { temperature: "37.0°C oral", pulse: "102/minute", resp: "18/minute", bp: "162/106 mmHg", o2sat: "98% on room air", weight: "94 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is the most urgent for her?",
        options: ["Bedside pregnancy test", "CT head without contrast", "Lumbar puncture", "Plasma metanephrines", "Serum drug screen"],
        correct: 0,
        explanation:
          "A firm midline mass above the umbilicus with irregular periods is a gravid uterus until proven otherwise, whatever she reports about sexual activity. Headache, vomiting and a BP of 162/106 mmHg in a pregnancy beyond 20 weeks would mean pre-eclampsia. A bedside pregnancy test takes minutes and changes the whole workup. CT head may still be needed but would not explain her hypertension. Lumbar puncture is premature before a diagnosis. Metanephrines and a drug screen look for rarer causes and take longer.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The pregnancy test is positive. Bedside ultrasound shows a live singleton of about 32 weeks. At 0215 her BP is 164/108 mmHg. Urine protein to creatinine ratio (PCR) is 92 mg/mmol. Platelets 182 x 10^9/L, ALT 24 U/L, creatinine 58 umol/L.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: ["Gestational hypertension", "Lupus nephritis", "Pheochromocytoma", "Pre-eclampsia", "Renal artery stenosis"],
        correct: 3,
        explanation:
          "Hypertension at about 32 weeks with a PCR of 92 mg/mmol, above the SOGC threshold of 30 mg/mmol, plus headache, is pre-eclampsia. Gestational hypertension means hypertension after 20 weeks without proteinuria or adverse conditions, so her PCR excludes it. Lupus nephritis, renal artery stenosis and pheochromocytoma are rare in a healthy 16-year-old and need not be pursued before treating the common cause. No earlier BP is on record, but pre-eclampsia is diagnosed and managed the same way.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following treatments are the most appropriate to give her now?",
        options: [
          "betamethasone 12 mg IM",
          "enalaprilat 1.25 mg IV",
          "furosemide 40 mg IV",
          "ketorolac 30 mg IV",
          "labetalol 20 mg IV",
          "magnesium sulfate 4 g IV",
          "normal saline 1 L IV",
          "phenytoin 20 mg/kg IV",
        ],
        correct: [0, 4, 5],
        explanation:
          "Two systolic readings of 160 mmHg or more mean severe hypertension, so labetalol 20 mg IV starts BP control. Pre-eclampsia with severe hypertension and headache calls for magnesium sulfate 4 g IV, then 1 g/hour. At 32 weeks with severe features, birth within 7 days is likely, so betamethasone 12 mg IM, repeated in 24 hours, reduces neonatal morbidity. Enalaprilat is fetotoxic. Furosemide and a saline bolus are not given without pulmonary edema or hypovolemia. Phenytoin prevents eclampsia less well than magnesium. NSAIDs such as ketorolac are avoided after 20 weeks because of fetal renal and ductal effects.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate fetal monitoring while magnesium sulfate is infusing?",
        options: [
          "Biophysical profile in 24 hours",
          "Continuous cardiotocography",
          "Doppler auscultation every 4 hours",
          "Fetal kick counts by the patient",
          "No fetal monitoring until transfer",
        ],
        correct: 1,
        explanation:
          "At about 32 weeks the fetus is viable, and ISSHP advises continuous cardiotocography from 26 weeks in women receiving magnesium sulfate. Severe pre-eclampsia puts the fetus at risk of placental insufficiency and abruption, which a continuous tracing detects early. Doppler checks every 4 hours or kick counts miss acute decelerations. A biophysical profile tomorrow is too late to guide decisions tonight. Deferring monitoring delays recognition of fetal compromise.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.tintinalli, S.sogc, S.isshp],
    ...META,
  },
  /* 19 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-19",
    topic: "pre-eclampsia",
    title: "Referral from the midwifery clinic",
    stem:
      "You are working in a community hospital emergency department. A 31-year-old woman, G2P1 at 36 weeks and 1 day, is sent by her midwife after two clinic readings above 140 mmHg systolic. She feels well. She has no headache, visual change, chest pain or abdominal pain. Fetal movements are normal. Her prenatal BP readings were normal until this week, and her first pregnancy was normotensive. She takes no medications. Her BMI is 41 kg/m2 and her mid-upper arm circumference is 42 cm. The triage BP was taken with a standard adult cuff. Her examination is otherwise normal.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "156/98 mmHg", o2sat: "99% on room air", weight: "112 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in measuring her BP?",
        options: [
          "Automated reading lying on her back",
          "Large cuff, seated, after rest",
          "Repeat standard cuff in the left arm",
          "Standard cuff with the arm raised",
          "Thigh cuff with patient supine",
        ],
        correct: 1,
        explanation:
          "A standard cuff on an arm of 42 cm overestimates BP, so her triage reading may be falsely high. ISSHP advises a large cuff when the mid-upper arm circumference is 33 cm or more, with the patient seated, feet flat, and after rest. Repeating the same small cuff in the other arm repeats the same error. Raising the arm above the heart lowers the reading. Lying supine late in pregnancy alters BP through aortocaval compression, and a thigh cuff is not standard when an arm cuff fits.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "With a large cuff her BP is 146/94 mmHg at 1020 and 144/92 mmHg at 1040. PCR is 14 mg/mmol. Platelets 212 x 10^9/L, ALT 18 U/L, creatinine 52 umol/L. The fetal heart tracing is normal.",
        prompt: "Which of the following is the most accurate diagnosis using SOGC 2022 definitions?",
        options: ["Chronic hypertension", "Gestational hypertension", "Pre-eclampsia", "Transient hypertension", "White coat hypertension"],
        correct: 1,
        explanation:
          "With the right cuff, two readings 20 minutes apart average 145/93 mmHg, above the SOGC threshold of 140/90 mmHg, and the hypertension began after 20 weeks. A PCR of 14 mg/mmol is below the 30 mg/mmol proteinuria threshold. Her symptoms, platelets, ALT, creatinine and fetal tracing are normal, so there is no adverse condition to make this pre-eclampsia. Chronic hypertension predates pregnancy or 20 weeks, and her earlier readings were normal. Transient and white coat hypertension settle on repeat or out-of-office readings, and hers did not.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following new findings at a later visit would reclassify her condition as pre-eclampsia?",
        options: [
          "ALT rising to 96 U/L",
          "BP 150/98 mmHg",
          "Hemoglobin 108 g/L",
          "Mid-shin ankle edema",
          "New persistent headache",
          "Platelets 162 x 10^9/L",
          "Urine PCR 24 mg/mmol",
          "Weight gain of 2 kg in a week",
        ],
        correct: [0, 4],
        explanation:
          "SOGC defines pre-eclampsia as gestational hypertension with new proteinuria or at least one adverse condition of end-organ or uteroplacental dysfunction. A new persistent headache is a neurological adverse condition, and an ALT rising to 96 U/L shows liver involvement. A PCR of 24 mg/mmol stays below the 30 mg/mmol threshold. Edema and weight gain are common in normal pregnancy and are no longer diagnostic. Platelets of 162 x 10^9/L are normal, a hemoglobin of 108 g/L is not an adverse condition, and 150/98 mmHg is still non-severe.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate diastolic BP target if she starts oral labetalol?",
        options: ["75 mmHg", "85 mmHg", "95 mmHg", "100 mmHg", "105 mmHg"],
        correct: 1,
        explanation:
          "In the CHIPS trial, a diastolic target of 85 mmHg, compared with 100 mmHg, reduced progression to severe hypertension without harming the baby, and SOGC and ISSHP adopt 85 mmHg. ISSHP advises reducing therapy when the diastolic falls to 80 mmHg or below, so 75 mmHg overshoots and risks reduced placental perfusion. A target of 100 mmHg was the less-tight arm of CHIPS, and 95 or 105 mmHg similarly allow more severe hypertension.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "chips",
      },
    ],
    sources: [S.isshp, S.sogc, S.chips],
    ...META,
  },
  /* 20 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-20",
    topic: "pre-eclampsia",
    title: "Early pregnancy on an ACE inhibitor",
    stem:
      "A 31-year-old woman presents to the emergency department with a bifrontal headache for 1 day. It has now settled with acetaminophen. She is 13 weeks pregnant, dated by an 8-week ultrasound. She has had hypertension for 4 years, treated with ramipril 10 mg daily, and type 2 diabetes treated with metformin. Her BMI is 36 kg/m2. Her first pregnancy ended in caesarean birth at 33 weeks for pre-eclampsia. She has no visual symptoms. Her neurological examination is normal.",
    vitals: { temperature: "36.6°C oral", pulse: "80/minute", resp: "14/minute", bp: "146/92 mmHg", o2sat: "99% on room air", weight: "98 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best classifies her hypertension in this pregnancy?",
        options: ["Chronic hypertension", "Gestational hypertension", "Pre-eclampsia", "Superimposed pre-eclampsia", "White coat hypertension"],
        correct: 0,
        explanation:
          "Hypertension diagnosed before pregnancy, and still present at 13 weeks, is chronic or pre-existing hypertension. Gestational hypertension and pre-eclampsia arise at or after 20 weeks, so neither fits at 13 weeks. Superimposed pre-eclampsia would need new proteinuria or adverse conditions after 20 weeks. White coat hypertension needs normal out-of-office readings, and she has a 4-year treated history.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
      {
        id: "q2",
        kind: "menu",
        select: 4,
        prompt: "Which of the following features in her history raise her risk of pre-eclampsia in this pregnancy?",
        options: [
          "Age of 31 years",
          "BMI of 36 kg/m2",
          "Chronic hypertension",
          "Headache today",
          "Metformin use",
          "Pre-eclampsia at 33 weeks",
          "Previous caesarean birth",
          "Type 2 diabetes",
        ],
        correct: [1, 2, 5, 7],
        explanation:
          "Previous pre-eclampsia, chronic hypertension, pregestational diabetes and a BMI above 30 kg/m2 are all listed risk factors for pre-eclampsia. An age of 31 years is below the 35-year threshold. The caesarean itself does not raise her risk, and metformin is a treatment, not a risk factor. Her headache settled with acetaminophen and, at 13 weeks, is not a feature of pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-222",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate therapy to start now to lower her risk of pre-eclampsia?",
        options: [
          "ASA 162 mg PO at bedtime",
          "enoxaparin 40 mg SC daily",
          "magnesium oxide 400 mg PO daily",
          "vitamin C 1 000 mg PO daily",
          "vitamin E 400 units PO daily",
        ],
        correct: 0,
        explanation:
          "With previous pre-eclampsia, chronic hypertension and diabetes she is at high risk. ISSHP recommends low-dose ASA 100 to 162 mg at bedtime, started preferably before 16 weeks and stopped by 36 weeks. At 13 weeks she is inside that window. Low-molecular-weight heparin such as enoxaparin is not recommended for pre-eclampsia prevention. Vitamins C and E have not reduced pre-eclampsia in trials and are not recommended. Magnesium supplements have not shown a protective effect either.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to her antihypertensive therapy?",
        options: [
          "Continue ramipril 10 mg PO",
          "Hold all antihypertensives",
          "Switch to atenolol 50 mg PO",
          "Switch to losartan 50 mg PO",
          "Switch to nifedipine XL 30 mg PO",
        ],
        correct: 4,
        explanation:
          "ACE inhibitors and angiotensin receptor blockers should not be used once pregnancy is known because of fetal renal toxicity and its consequences, including stillbirth, so ramipril must stop and losartan is no safer. Her BP of 146/92 mmHg still needs treatment toward a diastolic of 85 mmHg, so holding all drugs is wrong. Long-acting nifedipine is a first-line oral agent in pregnancy, as are labetalol and methyldopa. Atenolol is not a first-line agent and has been linked to lower birth weight.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.sogc, S.acog222, S.isshp],
    ...META,
  },
  /* 21 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-21",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Evening headache at term",
    stem:
      "A 29-year-old woman, G1P0 at 38 weeks and 2 days, presents to the emergency department at 2230 with a dull occipital headache since the afternoon. She has taken no analgesics. Her prenatal care has been routine. At her 36-week visit her BP was 126 mmHg systolic and 80 mmHg diastolic. She has no medical history and takes no medications. She has no visual symptoms or abdominal pain. She is alert and oriented. Reflexes are 2+ without clonus. The fetal heart rate is 145/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "16/minute", bp: "164/96 mmHg", o2sat: "99% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A repeat BP at 2240 in the same arm is 166/94 mmHg.",
        prompt: "Which of the following is the most appropriate management of her BP now?",
        options: [
          "Oral labetalol if diastolic reaches 110 mmHg",
          "Recheck BP in 4 hours before treating",
          "Treat now with labetalol 20 mg IV",
          "Treat once proteinuria is confirmed",
          "Treat only if headache persists",
        ],
        correct: 2,
        explanation:
          "A systolic of 160 mmHg or more is severe hypertension even when the diastolic is below 110 mmHg, and it needs treatment within 30 to 60 minutes. Stroke in pre-eclampsia tracks systolic pressure. In the largest case series, almost all women had a systolic of 160 mmHg or more just before their stroke, and few had a diastolic of 110 mmHg or more. Waiting for a diastolic of 110 mmHg, for 4 hours, for proteinuria results or for the headache to persist delays treatment of that risk.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "martin-stroke",
      },
      {
        id: "q2",
        kind: "single",
        update: "At 2310, 30 minutes after labetalol 20 mg IV, her BP is 162/98 mmHg and her pulse is 78/minute.",
        prompt: "Which of the following is the most appropriate next antihypertensive dose for her?",
        options: ["labetalol 10 mg IV", "labetalol 40 mg IV", "labetalol 120 mg IV", "labetalol 200 mg IV", "labetalol 300 mg IV"],
        correct: 1,
        explanation:
          "ISSHP suggests doubling IV labetalol when BP is still severe 30 minutes after the first dose, so 40 mg follows her 20 mg, and doses of 40 to 80 mg can follow every 30 minutes. A 10 mg dose is smaller than the dose that has already failed. Boluses of 120 to 300 mg exceed any recommended single bolus, and 300 mg is the maximum total for a whole treatment course. Her pulse of 78/minute leaves room for further beta blockade.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "By 2350 her BP is 148/92 mmHg and the headache has resolved. PCR 58 mg/mmol, platelets 168 x 10^9/L, ALT 30 U/L, creatinine 66 umol/L. The fetal tracing is normal.",
        prompt: "Which of the following is the most appropriate plan for her pregnancy?",
        options: [
          "Arrange delivery after stabilization",
          "Deliver at 40 weeks if stable",
          "Discharge with weekly lab tests",
          "Outpatient care until spontaneous labour",
          "Repeat PCR and decide in 24 hours",
        ],
        correct: 0,
        explanation:
          "Hypertension with a PCR of 58 mg/mmol at 38 weeks and 2 days is pre-eclampsia, and SOGC recommends initiating delivery at 37 weeks or later. At term the baby gains nothing from waiting, while she stays exposed to eclampsia, abruption and HELLP. Waiting to 40 weeks, outpatient care until labour or weekly tests all accept that risk. A repeat PCR adds nothing, because SOGC advises against measuring proteinuria again once pre-eclampsia is diagnosed.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-426",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate use of magnesium sulfate for her?",
        options: [
          "Give only if a seizure occurs",
          "Give only if clonus develops",
          "Start after delivery only",
          "Start now, stop at delivery",
          "Start now, until 24 hours postpartum",
        ],
        correct: 4,
        explanation:
          "She has proteinuria with severe systolic hypertension and had a headache, and ISSHP recommends magnesium sulfate for eclampsia prevention in that setting. It is given as 4 g IV, then 1 g/hour, and continued until 24 hours after birth because eclampsia can occur during labour and after delivery. Waiting for clonus or a seizure gives up prevention, and magnesium roughly halves the risk of eclampsia. Stopping at delivery or starting only afterward leaves her unprotected in labour or the postpartum period.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.martin, S.isshp, S.sogc],
    ...META,
  },
  /* 22 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-22",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain", "shock"],
    title: "Sudden pain five days after a hypertension diagnosis",
    stem:
      "A 33-year-old woman, G4P3 at 30 weeks and 4 days, is brought to the emergency department by ambulance with 40 minutes of sudden, constant lower abdominal pain and vaginal bleeding. Pre-eclampsia was diagnosed 5 days ago, and she was sent home on nifedipine XL 30 mg daily for outpatient monitoring. Two days ago her clinic BP was 152 mmHg systolic and 100 mmHg diastolic. Her three previous births were vaginal. She smokes half a pack a day. She is pale and anxious. The uterus is firm and tender between contractions. Her pad holds about 50 mL of dark blood.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute", resp: "22/minute", bp: "104/68 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her abdominal pain?",
        options: ["Hepatic capsule hematoma", "Placenta previa", "Placental abruption", "Preterm labour", "Uterine rupture"],
        correct: 2,
        explanation:
          "Sudden constant pain with a firm, tender uterus and dark bleeding in a woman with pre-eclampsia is placental abruption, a uteroplacental complication of pre-eclampsia, and smoking adds to the risk. A pulse of 118/minute and a BP of 104/68 mmHg, far below her recent readings, suggest concealed blood loss. Placenta previa bleeds painlessly from a soft uterus. Preterm labour gives intermittent pain with relaxation between contractions. Uterine rupture is rare without a uterine scar, and a hepatic hematoma causes upper abdominal pain.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following investigations are the most important to send now?",
        options: [
          "CBC with platelets",
          "Fibrinogen level",
          "Group and crossmatch",
          "Lipase level",
          "Repeat urine PCR",
          "Serum D-dimer",
          "Ultrasound for abruption",
          "Uric acid level",
        ],
        correct: [0, 1, 2],
        explanation:
          "Abruption can cause heavy concealed bleeding and consumptive coagulopathy, so she needs a CBC with platelets, a fibrinogen level and a group and crossmatch now. A low fibrinogen predicts severe hemorrhage and guides replacement. Ultrasound misses many abruptions, so a normal scan cannot exclude one and must not delay care. D-dimer is raised in normal pregnancy and adds nothing. A repeat PCR, uric acid and lipase do not change management.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "The fetal heart rate is 90/minute and has not recovered over 3 minutes. Her pulse is now 124/minute.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Betamethasone, then delivery in 48 hours",
          "Emergency caesarean delivery",
          "Induction of labour with oxytocin",
          "Repeat ultrasound in 1 hour",
          "Tocolysis with nifedipine",
        ],
        correct: 1,
        explanation:
          "Prolonged fetal bradycardia at 90/minute with a rising maternal pulse after an abruption means fetal compromise and ongoing blood loss. ISSHP lists abruption with maternal or fetal compromise as an indication for delivery at any gestational age, and emergency caesarean is the fastest route. Induction with oxytocin takes hours that a bradycardic fetus does not have. Tocolysis is contraindicated in abruption. Waiting 48 hours for betamethasone or an hour for a scan delays delivery of a compromised fetus.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "Hemoglobin 88 g/L, platelets 74 x 10^9/L, fibrinogen 1.1 g/L, INR 1.6. She is going to the operating room.",
        prompt: "Which of the following blood products best addresses her most severe coagulation deficit?",
        options: ["Albumin 5% infusion", "Cryoprecipitate", "Platelets only", "Protamine sulfate", "Vitamin K IV"],
        correct: 1,
        explanation:
          "A fibrinogen of 1.1 g/L with an INR of 1.6 is consumptive coagulopathy from abruption, and fibrinogen falls first and furthest. Cryoprecipitate replaces fibrinogen, given with red cells and plasma as bleeding requires. Platelets alone leave the fibrinogen deficit, and a count of 74 x 10^9/L is not the main problem. Vitamin K corrects deficiency, not consumption. Protamine reverses heparin, which she has not received. Albumin adds volume without clotting factors.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [S.tintinalli, S.isshp],
    ...META,
  },
  /* 23 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-23",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain", "shock"],
    title: "Shoulder pain and collapse at 35 weeks",
    stem:
      "A 36-year-old woman, G2P1 at 35 weeks and 5 days, is brought to the emergency department by ambulance with sudden severe right upper quadrant pain spreading to the right shoulder 1 hour ago, followed by lightheadedness. Yesterday a walk-in clinic diagnosed gastritis for epigastric pain and nausea. At that visit her BP was 150 mmHg systolic and 100 mmHg diastolic, and no blood work was done. She is pale and diaphoretic. The abdomen is distended, with right upper quadrant guarding. The uterus is soft and nontender. The fetal heart rate is 150/minute.",
    vitals: { temperature: "36.4°C oral", pulse: "128/minute", resp: "24/minute", bp: "92/58 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her deterioration?",
        options: [
          "Acute cholecystitis",
          "Hepatic capsule rupture",
          "Placental abruption",
          "Pulmonary embolism",
          "Splenic artery aneurysm rupture",
        ],
        correct: 1,
        explanation:
          "Epigastric pain with a BP of 150/100 mmHg yesterday was probably HELLP syndrome, and sudden right upper quadrant pain spreading to the shoulder, then shock with a distended abdomen, points to rupture of a subcapsular liver hematoma. The soft, nontender uterus and normal fetal heart rate argue against abruption. Splenic artery aneurysm rupture also causes hemoperitoneum in pregnancy but gives left upper quadrant pain. Cholecystitis does not cause shock this quickly. Pulmonary embolism causes dyspnea and hypoxemia, and her O2 sat is 97%.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Hemoglobin 82 g/L, platelets 46 x 10^9/L, AST 1 240 U/L, ALT 980 U/L, LDH 2 100 U/L, INR 1.4, fibrinogen 1.6 g/L. Her BP is 88/54 mmHg after 1 L of crystalloid.",
        prompt: "Which of the following is the most appropriate first imaging for her?",
        options: [
          "Bedside ultrasound for free fluid",
          "CT abdomen with contrast",
          "Hepatobiliary scintigraphy",
          "MRI of the liver",
          "Upright abdominal x-ray",
        ],
        correct: 0,
        explanation:
          "She remains hypotensive, so imaging must come to the bedside. Point-of-care ultrasound quickly shows free intraperitoneal fluid and may show the liver hematoma, which with shock supports immediate laparotomy. CT gives detail but moving an unstable patient to the scanner risks arrest, so it is kept for stable patients. Hepatobiliary scintigraphy and MRI take far too long. A plain film cannot show blood or liver injury.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a large volume of free fluid and a heterogeneous collection over the right lobe of the liver.",
        prompt: "Which of the following is the most appropriate definitive management for her?",
        options: [
          "Embolization before any delivery",
          "Induction of labour and transfusion",
          "Laparotomy with caesarean and packing",
          "Nonoperative care with serial CT",
          "Platelet transfusion and observation",
        ],
        correct: 2,
        explanation:
          "A ruptured liver hematoma with shock needs immediate laparotomy, with caesarean delivery and perihepatic packing by a surgeon able to manage liver hemorrhage, under a massive transfusion protocol. Nonoperative care with serial imaging suits only an unruptured hematoma in a stable patient. Embolization can help selected stable patients but must not delay surgery in shock. Induction takes hours and does not control intra-abdominal bleeding. Platelets are needed for a count of 46 x 10^9/L, but transfusion alone does not stop bleeding from a ruptured capsule.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
    ],
    sources: [S.sibai, S.tintinalli],
    ...META,
  },
  /* 24 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-24",
    topic: "pre-eclampsia",
    title: "Bruising and dark urine at 23 weeks",
    stem:
      "A 27-year-old woman, G1P0 at 23 weeks and 4 days, presents to the emergency department with 2 days of fatigue, headache and dark urine. This morning her partner noticed 10 minutes of word-finding difficulty that resolved. She has new bruises on her legs. She has no medical history and takes a prenatal vitamin. At her 20-week visit her BP was 112 mmHg systolic and 70 mmHg diastolic. She is pale, with scattered petechiae on her shins. Her speech and neurological examination are now normal. The abdomen is nontender.",
    vitals: { temperature: "37.8°C oral", pulse: "108/minute", resp: "18/minute", bp: "132/82 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "Hemoglobin 72 g/L, platelets 14 x 10^9/L, LDH 1 680 U/L, bilirubin 52 umol/L, AST 48 U/L, ALT 36 U/L, creatinine 102 umol/L, INR 1.1, fibrinogen 3.8 g/L. The film shows many schistocytes. PCR is 20 mg/mmol.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute fatty liver of pregnancy",
          "HELLP syndrome with pre-eclampsia",
          "Hemolytic uremic syndrome",
          "Immune thrombocytopenic purpura",
          "Thrombotic thrombocytopenic purpura",
        ],
        correct: 4,
        explanation:
          "Platelets of 14 x 10^9/L with many schistocytes, an LDH of 1 680 U/L, transient neurological symptoms and low-grade fever at 23 weeks point to thrombotic thrombocytopenic purpura, which pregnancy can unmask. HELLP rarely drives platelets this low with near-normal liver enzymes, and she has neither hypertension nor proteinuria, with a BP of 132/82 mmHg and a PCR of 20 mg/mmol. Fatty liver of pregnancy causes liver failure with coagulopathy, and her INR and fibrinogen are normal. Hemolytic uremic syndrome causes more severe kidney injury. Immune thrombocytopenia does not cause hemolysis.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "scully-ttp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests best distinguishes her condition from HELLP syndrome?",
        options: ["ADAMTS13 activity", "Direct antiglobulin test", "Haptoglobin level", "Repeat urine PCR", "Serum uric acid"],
        correct: 0,
        explanation:
          "Severely reduced ADAMTS13 activity, usually below 10%, confirms thrombotic thrombocytopenic purpura and separates it from HELLP, in which activity is at most mildly reduced. The sample should be drawn before plasma therapy begins. Haptoglobin is low in any hemolysis, so it cannot tell them apart. A direct antiglobulin test detects immune hemolysis and is negative in both. Uric acid and proteinuria overlap between the two and are not diagnostic.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "scully-ttp",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to start for her now?",
        options: ["Emergency delivery", "Magnesium infusion", "Plasma exchange", "Platelet transfusion", "Rituximab alone"],
        correct: 2,
        explanation:
          "Thrombotic thrombocytopenic purpura is often fatal without prompt plasma exchange, which replaces ADAMTS13 and removes the inhibiting antibody, usually with corticosteroids. Unlike HELLP, it does not resolve with delivery, so emergency delivery at 23 weeks would not treat her. Platelet transfusion may worsen microvascular thrombosis and is avoided unless bleeding is life-threatening. Magnesium prevents eclampsia, which she does not have. Rituximab is an adjunct and cannot replace plasma exchange.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "scully-ttp",
      },
    ],
    sources: [S.scully],
    ...META,
  },
  /* 25 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-25",
    topic: "pre-eclampsia",
    title: "A call about a platelet count",
    stem:
      "A 30-year-old woman, G2P1 at 37 weeks and 3 days, presents to the emergency department after her family physician's office called about a platelet count of 104 x 10^9/L on routine blood work 2 days ago. She feels well. She has no headache, visual change, epigastric pain, bleeding or bruising. Her platelets were 188 x 10^9/L at 12 weeks. In her first pregnancy her platelets fell to about 110 x 10^9/L near term and were normal after the birth. She takes a prenatal vitamin. Her examination is normal, with no petechiae.",
    vitals: { temperature: "36.7°C oral", pulse: "80/minute", resp: "14/minute", bp: "118/74 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is the most appropriate for her now?",
        options: [
          "ADAMTS13 activity",
          "Bone marrow aspirate",
          "CBC, liver enzymes and LDH",
          "Platelet antibody testing",
          "No further testing today",
        ],
        correct: 2,
        explanation:
          "Before mild thrombocytopenia at term is called benign, HELLP and pre-eclampsia must be excluded, because a falling platelet count can be their first sign. A repeat CBC with film, liver enzymes and LDH, along with creatinine and a urine PCR, does that within hours. Platelet antibody tests do not separate gestational from immune thrombocytopenia and are not recommended. A bone marrow aspirate and ADAMTS13 are not justified for a mild isolated fall. Sending her home untested risks missing HELLP.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "acog-207",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Platelets 106 x 10^9/L, hemoglobin 118 g/L, AST 22 U/L, ALT 17 U/L, LDH 190 U/L, creatinine 54 umol/L. The film shows normal red cells and no platelet clumps. PCR is 12 mg/mmol. At 1400 her BP is 116/72 mmHg.",
        prompt: "Which of the following is the most likely cause of her low platelet count?",
        options: [
          "Gestational thrombocytopenia",
          "HELLP syndrome",
          "Immune thrombocytopenia",
          "Pseudothrombocytopenia",
          "Thrombotic microangiopathy",
        ],
        correct: 0,
        explanation:
          "A mild fall to about 105 x 10^9/L late in pregnancy, after a normal count at 12 weeks and the same pattern last pregnancy, with no bleeding and normal BP, liver enzymes, LDH and film, fits gestational thrombocytopenia, the commonest cause of low platelets in pregnancy. HELLP is excluded for now by the normal AST, ALT, LDH and red cells. Immune thrombocytopenia usually shows a low count earlier in pregnancy. Pseudothrombocytopenia would show platelet clumps on the film. Thrombotic microangiopathy needs hemolysis, which is absent.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "acog-207",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "If she later develops new hypertension, which of the following platelet counts meets the ACOG severe feature threshold?",
        options: ["Below 50 x 10^9/L", "Below 75 x 10^9/L", "Below 100 x 10^9/L", "Below 125 x 10^9/L", "Below 150 x 10^9/L"],
        correct: 2,
        explanation:
          "ACOG counts a platelet count below 100 x 10^9/L as a severe feature of pre-eclampsia. ISSHP instead treats any count below 150 x 10^9/L with new hypertension as a hematological complication that establishes pre-eclampsia, and a count below 50 x 10^9/L as an indication for delivery. So her count of 106 x 10^9/L would not be a severe feature under ACOG, but with new hypertension it would meet the ISSHP definition of pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-222",
      },
    ],
    sources: [S.acog207, S.acog222],
    ...META,
  },
  /* 26 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-26",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Four days after a caesarean birth",
    stem:
      "A 34-year-old woman presents to the emergency department 4 days after a caesarean birth at 37 weeks for pre-eclampsia, with a headache for 6 hours. The birth was complicated by a postpartum hemorrhage of 1 200 mL. She went home yesterday on nifedipine XL 30 mg daily. For incision pain she takes ibuprofen 600 mg and acetaminophen 1 g, each every 6 hours. She is breastfeeding. Her creatinine at discharge was 68 umol/L. She has no visual symptoms. Her neurological examination is normal and reflexes are 2+. The incision is clean.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "16/minute", bp: "158/102 mmHg", o2sat: "98% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Platelets 188 x 10^9/L, ALT 34 U/L, creatinine 132 umol/L, potassium 4.4 mmol/L.",
        prompt: "Which of the following changes to her analgesic or antihypertensive medications is most appropriate?",
        options: [
          "Add hydrochlorothiazide 25 mg PO",
          "Double the ibuprofen dose",
          "Replace acetaminophen with codeine",
          "Stop ibuprofen, continue acetaminophen",
          "Switch ibuprofen to naproxen",
        ],
        correct: 3,
        explanation:
          "Her creatinine has nearly doubled, from 68 to 132 umol/L, after a 1 200 mL hemorrhage while she takes regular ibuprofen. ISSHP supports NSAIDs after pre-eclampsia only when BP is controlled and there is no acute kidney injury or risk factor such as postpartum hemorrhage. Stopping ibuprofen and relying on acetaminophen removes the renal insult. Naproxen or a higher ibuprofen dose carries the same risk. Codeine is avoided in breastfeeding because ultrarapid maternal metabolism can cause infant opioid toxicity. A thiazide adds volume depletion to an injured kidney.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "A repeat BP at 1510 in the same arm is 162/104 mmHg.",
        prompt: "Which of the following is the most appropriate treatment for her BP now?",
        options: ["enalapril 10 mg PO", "furosemide 40 mg IV", "hydrochlorothiazide 25 mg PO", "labetalol 20 mg IV", "methyldopa 500 mg PO"],
        correct: 3,
        explanation:
          "Her two readings average 160/103 mmHg, so she has severe hypertension, which after birth carries the same stroke risk as before and needs treatment within 30 to 60 minutes with IV labetalol, oral immediate-release nifedipine or IV hydralazine. Enalapril is compatible with breastfeeding but acts too slowly for severe hypertension and is best avoided while her kidney injury evolves. Methyldopa is slow and usually avoided after birth because of concern about depression. Diuretics do not control severe hypertension quickly and would worsen her kidney injury.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-767",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following postpartum intervals is when BP after pre-eclampsia most often peaks?",
        options: ["Days 0 to 1", "Days 3 to 7", "Days 10 to 14", "Days 21 to 28", "Days 35 to 42"],
        correct: 1,
        explanation:
          "BP after a hypertensive pregnancy usually peaks 3 to 7 days after birth, as fluid moves from the tissues back into the circulation. That is often after discharge, so ISSHP advises checking BP at least once between days 3 and 7 and having a treatment plan in place. She is on day 4, squarely in that window. The first day after birth, days 10 to 14 and the later weeks are not the usual peak, although pre-eclampsia and eclampsia can still appear up to 6 weeks postpartum.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp, S.acog767],
    ...META,
  },
  /* 27 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-27",
    topic: "pre-eclampsia",
    title: "Little urine while awaiting obstetrics",
    stem:
      "A 26-year-old woman, G1P0 at 33 weeks and 1 day, presented to the emergency department at 1200 with headache and visual scotomata. Her BP was confirmed at 172 mmHg systolic and 114 mmHg diastolic, and her urine PCR was 310 mg/mmol. She received IV labetalol. Magnesium sulfate 4 g IV over 20 minutes was started at 1300, then 1 g/hour. A urinary catheter was placed at 1300. It is now 1700 and the obstetrician is finishing a caesarean. Urine output since 1300 is 60 mL. Creatinine is 168 umol/L, up from 60 umol/L at 28 weeks. Potassium is 4.6 mmol/L. She is awake and oriented. Patellar reflexes are 1+. The lungs are clear.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "14/minute", bp: "150/98 mmHg", o2sat: "97% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to her magnesium sulfate now?",
        options: [
          "Continue 1 g/hour unchanged",
          "Give a 2 g IV bolus",
          "Increase to 2 g/hour",
          "Pause infusion, check serum level",
          "Stop and switch to phenytoin",
        ],
        correct: 3,
        explanation:
          "Magnesium is cleared by the kidneys, and 60 mL of urine over 4 hours, or 15 mL/hour, with a creatinine of 168 umol/L means it will accumulate. ISSHP lists urine output below 30 mL/hour for 4 hours as a toxicity warning and advises stopping the infusion and measuring the serum magnesium level when toxicity is a concern. Her reflexes are already down to 1+. Continuing or increasing the rate risks loss of reflexes and respiratory arrest. An extra 2 g bolus is for a seizure during maintenance. Phenytoin prevents eclampsia less well than magnesium.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate fluid management for her oliguria?",
        options: [
          "Albumin 25% 100 mL IV",
          "Crystalloid 1 L IV bolus",
          "Furosemide 40 mg IV",
          "Total fluids about 80 mL/hour",
          "Total fluids 20 mL/hour",
        ],
        correct: 3,
        explanation:
          "Oliguria in pre-eclampsia reflects renal vasoconstriction in a contracted, leaky circulation rather than simple dehydration, and fluid boluses risk pulmonary edema. ISSHP recommends against routine plasma volume expansion and notes that total intake is usually limited to about 80 mL/hour to avoid pulmonary edema without raising the risk of kidney injury. Albumin and a crystalloid bolus expand plasma volume, and the largest trial of volume expansion found more pulmonary edema. Her lungs are clear, so furosemide treats nothing. Cutting intake to 20 mL/hour risks worsening her kidney injury.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her delivery?",
        options: [
          "Delay birth 48 hours for steroids",
          "Delivery once maternally stable",
          "Dialysis before any delivery",
          "Expectant care to 34 weeks",
          "Expectant care with daily labs",
        ],
        correct: 1,
        explanation:
          "A creatinine rising from 60 to 168 umol/L is abnormal and rising renal function, and headache with scotomata is an abnormal neurological feature. ISSHP lists both as indications for delivery at any gestational age once she is stable. Betamethasone should still be given at 33 weeks, but waiting 48 hours for its full effect is not justified while she deteriorates. Expectant care leaves the cause in place. She has no indication for dialysis, with a potassium of 4.6 mmol/L and clear lungs, and delivery is what reverses the injury.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp],
    ...META,
  },
  /* 28 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-28",
    topic: "pre-eclampsia",
    title: "Borderline readings after IVF",
    stem:
      "A 44-year-old woman, G1P0 at 27 weeks and 2 days with a singleton pregnancy conceived by IVF with donor eggs, presents to the emergency department with a mild headache since yesterday and a home BP reading above 140 mmHg systolic. The headache settled with acetaminophen. She has hypothyroidism treated with levothyroxine. Her BMI is 32 kg/m2. She has no visual symptoms, chest pain or abdominal pain. Fetal movements are normal. Her neurological examination is normal and reflexes are 2+.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "142/92 mmHg", o2sat: "99% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "At 1120 her BP is 144/90 mmHg. PCR is 22 mg/mmol. Platelets 164 x 10^9/L, ALT 26 U/L, creatinine 58 umol/L. The fetal heart tracing is normal. She is now symptom free.",
        prompt: "Which of the following tests best helps rule out pre-eclampsia developing over the next week?",
        options: ["Fetal fibronectin", "Serum uric acid", "sFlt-1 to PlGF ratio", "Timed urine collection", "Uterine artery Doppler"],
        correct: 2,
        explanation:
          "In the PROGNOSIS study of women with suspected pre-eclampsia between 24 and 37 weeks, an sFlt-1 to PlGF ratio of 38 or less ruled out pre-eclampsia within the next week with a negative predictive value of 99.3%. That helps decide whether a woman with borderline BP and PCR can safely go home. Uric acid does not diagnose or predict pre-eclampsia reliably. A timed urine collection repeats what the PCR already measured. Fetal fibronectin predicts preterm labour. Uterine artery Doppler is a screening test used earlier in pregnancy.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "prognosis",
      },
      {
        id: "q2",
        kind: "single",
        update: "The sFlt-1 to PlGF ratio is 21.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admission until 37 weeks",
          "Delivery after steroids",
          "Discharge to routine prenatal care",
          "Outpatient care with close follow-up",
          "Repeat ratio in 4 hours",
        ],
        correct: 3,
        explanation:
          "A ratio of 21 is below 38, so pre-eclampsia within the next week is very unlikely, and her PCR, platelets, ALT, creatinine and fetal tracing are reassuring. With readings averaging 143/91 mmHg she has gestational hypertension, which can be managed as an outpatient with treatment, home BP readings and obstetric review within days. Admission until 37 weeks is not needed. Routine prenatal care alone does not watch closely enough for progression. Delivery has no indication at 27 weeks. Repeating the ratio within hours adds nothing.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "prognosis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate antihypertensive to start for her?",
        options: [
          "atenolol 25 mg PO daily",
          "enalapril 5 mg PO daily",
          "hydrochlorothiazide 12.5 mg PO daily",
          "labetalol 200 mg PO BID",
          "spironolactone 25 mg PO daily",
        ],
        correct: 3,
        explanation:
          "ISSHP recommends treating hypertension in pregnancy toward a diastolic of 85 mmHg, and oral labetalol is a first-line agent, along with nifedipine and methyldopa. Enalapril and other ACE inhibitors are fetotoxic. Spironolactone has antiandrogenic effects on a male fetus. Hydrochlorothiazide is not a first-line agent in pregnancy. Atenolol is not first-line either and has been linked to lower birth weight.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.zeisler, S.isshp],
    ...META,
  },
  /* 29 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-29",
    topic: "pre-eclampsia",
    alsoTopics: ["cva", "headache"],
    title: "Sudden headache and arm weakness at 36 weeks",
    stem:
      "A 32-year-old woman, G2P1 at 36 weeks and 4 days, is brought to the emergency department by ambulance 40 minutes after a sudden severe headache while making dinner, followed by vomiting and right arm weakness. Her prenatal care has been routine. At 34 weeks her BP was 122 mmHg systolic and 78 mmHg diastolic. She takes no medications and does not use drugs. Her GCS is 13 (E3 V4 M6). She has a right arm drift. Reflexes are 3+ with bilateral ankle clonus. A catheter urine dipstick shows 3+ protein. The fetal heart rate is 150/minute.",
    vitals: { temperature: "37.0°C oral", pulse: "64/minute", resp: "18/minute", bp: "194/118 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following underlying conditions most likely explains her presentation?",
        options: ["Arteriovenous malformation", "Cocaine intoxication", "Pheochromocytoma", "Pre-eclampsia", "Reversible vasoconstriction"],
        correct: 3,
        explanation:
          "New severe hypertension at 36 weeks after normal readings at 34 weeks, with hyperreflexia, clonus and 3+ proteinuria, makes pre-eclampsia the most likely cause, and stroke is a leading cause of death in pre-eclampsia. She does not use drugs, and cocaine would not explain proteinuria. Pheochromocytoma causes paroxysms with tachycardia, and her pulse is 64/minute. An arteriovenous malformation can bleed in pregnancy but does not cause proteinuria or clonus. Reversible cerebral vasoconstriction occurs mostly after birth and does not cause proteinuria.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "martin-stroke",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first investigation for her?",
        options: [
          "Carotid Doppler ultrasound",
          "Electroencephalogram",
          "Lumbar puncture",
          "MRI brain with venography",
          "Noncontrast CT head",
        ],
        correct: 4,
        explanation:
          "Sudden severe headache with vomiting, a GCS of 13 and a new arm drift suggest intracerebral hemorrhage, and noncontrast CT of the head confirms it within minutes. The fetal radiation dose from head CT is negligible. MRI with venography takes longer and is better suited to stable patients or to cerebral venous thrombosis. Lumbar puncture is unsafe before a mass lesion is excluded. An EEG and carotid Doppler do not assess hemorrhage.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT shows a 3 cm left basal ganglia hemorrhage without hydrocephalus. Platelets 176 x 10^9/L and INR 1.0. Her BP is 196/120 mmHg and she has vomited twice more.",
        prompt: "Which of the following is the most appropriate antihypertensive for her now?",
        options: [
          "enalaprilat 1.25 mg IV",
          "hydralazine 20 mg IV",
          "labetalol 20 mg IV",
          "nifedipine 10 mg PO",
          "nitroprusside 0.5 mcg/kg/minute IV",
        ],
        correct: 2,
        explanation:
          "Labetalol 20 mg IV lowers BP within minutes and can be repeated at double the dose every 30 minutes, and her pulse of 64/minute allows it. Oral nifedipine is first-line for severe hypertension, but she is vomiting with a GCS of 13, so an oral drug is unreliable and risks aspiration. Hydralazine starts at 5 mg IV, and 20 mg is the maximum total dose, so a 20 mg bolus risks abrupt hypotension. Enalaprilat is fetotoxic. Nitroprusside is reserved for refractory hypertension because of fetal cyanide toxicity.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "menu",
        select: 3,
        prompt: "Which of the following are the most appropriate additional steps in her management now?",
        options: [
          "dexamethasone 10 mg IV",
          "levetiracetam 1 000 mg IV",
          "Lumbar puncture",
          "magnesium sulfate 4 g IV",
          "Neurosurgery consultation",
          "Obstetric consultation",
          "Platelet transfusion",
          "tranexamic acid 1 g IV",
        ],
        correct: [3, 4, 5],
        explanation:
          "Pre-eclampsia complicated by stroke needs magnesium sulfate to prevent eclampsia, neurosurgical input for the hematoma, and obstetric care to plan delivery once she is stable, since stroke is an indication for delivery at any gestational age. Levetiracetam does not prevent eclampsia the way magnesium does. With platelets of 176 x 10^9/L and an INR of 1.0, platelet transfusion and tranexamic acid have no coagulopathy to correct. Dexamethasone does not help edema around a hemorrhage. Lumbar puncture is unsafe with a mass lesion.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.martin, S.tintinalli, S.isshp],
    ...META,
  },
  /* 30 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-30",
    topic: "pre-eclampsia",
    title: "A 29-week pregnancy in a hospital without a nursery",
    stem:
      "You are working in a community hospital emergency department with an on-call obstetrician but no neonatal intensive care unit. The tertiary perinatal centre is 90 minutes away by air. A 28-year-old woman, G2P1 at 29 weeks and 1 day, was diagnosed here 3 hours ago with pre-eclampsia after presenting with headache. Her PCR was 140 mg/mmol. After labetalol, magnesium sulfate 4 g IV and 1 g/hour, her headache has settled. Platelets are 118 x 10^9/L, ALT 52 U/L and creatinine 78 umol/L. She has no contractions. The fetal heart tracing is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "148/96 mmHg", o2sat: "98% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for where she gives birth?",
        options: [
          "Caesarean here within the hour",
          "Discharge after 24 hours if stable",
          "Expectant care here to 34 weeks",
          "In utero transfer to perinatal centre",
          "Induction here, then transfer baby",
        ],
        correct: 3,
        explanation:
          "At 29 weeks her baby will need neonatal intensive care, which this hospital lacks. ISSHP advises that, when timing allows, delivery should occur in a perinatal centre able to care for sick mothers and newborns, and moving the baby before birth avoids a risky postnatal transport. Her BP is controlled, magnesium is running, the tracing is normal and she is not in labour, so there is time to move her. Caesarean or induction here commits a 29-week baby to postnatal transport. Expectant care or discharge here ignores the need for tertiary care.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to antenatal corticosteroids for her?",
        options: [
          "Betamethasone now, second dose in 24 hours",
          "Defer steroids to the receiving centre",
          "Give dexamethasone after delivery",
          "Give only if labour starts",
          "No steroids after 28 weeks",
        ],
        correct: 0,
        explanation:
          "At 29 weeks with pre-eclampsia, birth within 7 days is likely, and SOGC recommends antenatal corticosteroids from 24 weeks to 34 weeks and 6 days in that situation. The first betamethasone dose should be given before she leaves, with the second 24 hours later at the receiving centre. Deferring it loses hours of benefit. Waiting for labour misses the many planned births for pre-eclampsia. Steroids given after delivery do not provide antenatal lung maturation, and the indication does not end at 28 weeks.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-364",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following new findings would make delivery here safer than transfer?",
        options: [
          "ALT rising to 70 U/L",
          "Cervix dilated to 8 cm",
          "PCR rising to 300 mg/mmol",
          "Platelets 110 x 10^9/L",
          "Uric acid 420 umol/L",
        ],
        correct: 1,
        explanation:
          "Transfer is unsafe when birth may happen on the way, and a cervix at 8 cm can deliver in the aircraft. She should give birth here with the best available neonatal resuscitation while the neonatal transport team is called. ISSHP advises that the degree of proteinuria or uric acid should not drive decisions about delivery, so a PCR of 300 mg/mmol or a uric acid of 420 umol/L does not change the plan. Platelets of 110 x 10^9/L and an ALT of 70 U/L need monitoring, which the perinatal centre can provide.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp, S.sogc364],
    ...META,
  },
  /* 31 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-31",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain"],
    title: "Flank pain and nausea at 30 weeks",
    stem:
      "A 26-year-old woman, G1P0 at 30 weeks and 5 days, presents to the emergency department with 1 day of right upper abdominal and flank pain, nausea and malaise. She was treated for a urinary tract infection at 24 weeks. She has no dysuria, fever, headache or visual change. At 28 weeks her BP was 108 mmHg systolic and 66 mmHg diastolic. She takes a prenatal vitamin. There is right upper quadrant tenderness and mild right costovertebral angle tenderness. Reflexes are 3+ without clonus. There is no edema.",
    vitals: { temperature: "37.1°C oral", pulse: "92/minute", resp: "18/minute", bp: "138/88 mmHg", o2sat: "98% on room air", weight: "67 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Urinalysis shows 2+ protein with no nitrites and no leukocytes. The triage nurse asks for an antibiotic order.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Blood and urine cultures only",
          "ceftriaxone 1 g IV and admit to obstetrics",
          "Discharge with nitrofurantoin",
          "Renal ultrasound for obstruction",
          "Repeat BP, platelets, liver enzymes",
        ],
        correct: 4,
        explanation:
          "Right upper quadrant pain, nausea, 3+ reflexes and 2+ proteinuria at 30 weeks, with a BP of 138/88 mmHg against a baseline of 108/66 mmHg, suggest pre-eclampsia or HELLP rather than pyelonephritis. The urinalysis shows no nitrites or leukocytes and she has no fever. A repeat BP with platelets, liver enzymes, creatinine and a PCR decides it within hours. Antibiotics, cultures or discharge on nitrofurantoin treat an infection she probably does not have. A renal ultrasound does not assess the liver or platelets.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "acog-222",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "At 1330 her BP is 146/94 mmHg and at 1350 it is 144/96 mmHg. PCR 64 mg/mmol, platelets 128 x 10^9/L, AST 88 U/L, ALT 102 U/L, LDH 410 U/L, creatinine 70 umol/L.",
        prompt: "Which of the following best describes her condition based on these results?",
        options: ["Acute pyelonephritis", "Chronic hypertension", "Gestational hypertension", "HELLP syndrome", "Pre-eclampsia"],
        correct: 4,
        explanation:
          "Two readings averaging 145/95 mmHg after 20 weeks, with a PCR of 64 mg/mmol and an ALT of 102 U/L, meet the definition of pre-eclampsia. It is not yet HELLP, because platelets of 128 x 10^9/L and an LDH of 410 U/L do not reach the ACOG thresholds of below 100 x 10^9/L and 600 U/L or more. Proteinuria and liver involvement exclude gestational hypertension. Chronic hypertension would predate 20 weeks, and her 28-week BP was 108/66 mmHg. Nothing supports pyelonephritis.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-222",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to the obstetric unit",
          "Discharge with antibiotics",
          "Discharge with home BP checks",
          "Observe 4 hours, then discharge",
          "Outpatient labs in 48 hours",
        ],
        correct: 0,
        explanation:
          "Pre-eclampsia at 30 weeks with liver involvement and right upper quadrant pain needs admission. ISSHP advises that women with pre-eclampsia be assessed and managed in hospital, with only carefully selected cases later considered for outpatient care. Her liver enzymes and platelets need repeat testing within hours, and antenatal corticosteroids and delivery may soon be needed. Discharge with antibiotics or home BP checks, outpatient labs or a short observation all risk missing progression to HELLP or eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.acog222, S.isshp],
    ...META,
  },
  /* 32 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-32",
    topic: "pre-eclampsia",
    title: "Clinic referral at 35 weeks",
    stem:
      "A 30-year-old woman, G2P1 at 35 weeks and 1 day, is referred to the emergency department by her prenatal clinic after readings above 150 mmHg systolic this morning. She feels well. She has no headache, visual change, chest pain or abdominal pain. Fetal movements are normal. At 32 weeks her BP was 118 mmHg systolic and 74 mmHg diastolic. She takes no medications. Her examination is normal and reflexes are 2+ without clonus.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "152/98 mmHg", o2sat: "99% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "At 1015 and 1030 her BP is 150/98 and 148/96 mmHg. PCR 45 mg/mmol, platelets 204 x 10^9/L, ALT 22 U/L, creatinine 61 umol/L. The fetal heart tracing is normal.",
        prompt: "Which of the following is the most appropriate plan for the timing of her delivery?",
        options: [
          "Caesarean within 2 hours",
          "Discharge until labour begins",
          "Discuss induction now versus waiting",
          "Expectant care to 40 weeks",
          "Induce only at 39 weeks",
        ],
        correct: 2,
        explanation:
          "Hypertension with a PCR of 45 mg/mmol is pre-eclampsia, and SOGC recommends discussing initiation of delivery with women who have pre-eclampsia between 34 weeks and 35 weeks and 6 days, because earlier birth lowers maternal risk but raises neonatal respiratory problems. She has no severe features, so an emergency caesarean is not indicated. SOGC recommends delivery for pre-eclampsia from 37 weeks, so waiting to 39 or 40 weeks is not advised. Discharge until labour leaves her exposed to progression.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-426",
      },
      {
        id: "q2",
        kind: "single",
        update: "At 1400 she develops a severe headache and sees flashing lights. Reflexes are 3+ with 3 beats of clonus. Her BP is 158/104 mmHg.",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: ["diazepam 10 mg IV", "ketorolac 30 mg IV", "levetiracetam 1 000 mg IV", "lorazepam 2 mg IV", "magnesium sulfate 4 g IV"],
        correct: 4,
        explanation:
          "New severe headache, visual symptoms, 3+ reflexes and clonus in pre-eclampsia are neurological features, and ISSHP recommends magnesium sulfate for eclampsia prevention, 4 g IV then 1 g/hour. In the Magpie Trial magnesium roughly halved the risk of eclampsia. Diazepam, lorazepam and levetiracetam have not been shown to prevent eclampsia. Ketorolac treats pain but not the cause, and NSAIDs are avoided in the third trimester because of fetal ductal and renal effects.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "At 1420 and 1430 her BP is 166/108 and 164/106 mmHg. A nurse asks whether nifedipine can be given while magnesium is running.",
        prompt: "Which of the following is the most appropriate antihypertensive plan for her?",
        options: [
          "Give nifedipine 10 mg PO now",
          "Stop magnesium before nifedipine",
          "Treat only if diastolic reaches 110",
          "Use nifedipine 10 mg sublingually",
          "Wait 1 hour and recheck BP",
        ],
        correct: 0,
        explanation:
          "Two systolic readings above 160 mmHg confirm severe hypertension, which needs treatment within 30 to 60 minutes. ISSHP states that antihypertensives, including nifedipine, can be used at the same time as magnesium sulfate, so there is no reason to stop magnesium. Treating only when the diastolic reaches 110 mmHg ignores the stroke risk of severe systolic pressure. ISSHP advises swallowing nifedipine whole rather than biting it or giving it sublingually. Waiting an hour delays needed treatment.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.sogc, S.isshp],
    ...META,
  },
  /* 33 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-33",
    topic: "pre-eclampsia",
    title: "Blood pressure that will not come down",
    stem:
      "A 37-year-old woman, G3P2 at 32 weeks and 3 days, presented to the emergency department at 0800 with headache and was diagnosed with pre-eclampsia. Her PCR is 190 mg/mmol, platelets 142 x 10^9/L, ALT 38 U/L and creatinine 74 umol/L. Magnesium sulfate 4 g IV was given, then 1 g/hour. She has no asthma or heart disease. Her headache has eased. The fetal heart tracing is normal and obstetrics is at the bedside.",
    vitals: { temperature: "36.8°C oral", pulse: "72/minute", resp: "16/minute", bp: "176/114 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "She has received labetalol IV 20 mg at 0815, 40 mg at 0845, 80 mg at 0915, 80 mg at 0945 and 80 mg at 1015. At 1045 her BP is 170/112 mmHg and her pulse is 66/minute.",
        prompt: "Which of the following is the most appropriate antihypertensive for her now?",
        options: [
          "hydralazine 20 mg IV",
          "labetalol 80 mg IV",
          "labetalol 2 mg/minute IV",
          "nifedipine 10 mg PO",
          "nitroprusside 0.5 mcg/kg/minute IV",
        ],
        correct: 3,
        explanation:
          "She has received 20 + 40 + 80 + 80 + 80 = 300 mg of IV labetalol, the maximum for a treatment course, so further labetalol by bolus or infusion is not an option. ISSHP advises switching to a drug from a different class, such as immediate-release nifedipine 10 mg PO. Hydralazine is an alternative only from 5 mg IV, and a 20 mg bolus, which is its maximum total dose, risks abrupt hypotension. Nitroprusside is kept for refractory hypertension after first-line drugs fail because of fetal cyanide toxicity.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "After nifedipine 10 mg PO at 1050 and again at 1120, her BP at 1150 is 150/100 mmHg.",
        prompt: "Which of the following is the most appropriate next step in managing her BP?",
        options: [
          "Add oral maintenance therapy",
          "Furosemide to reduce volume",
          "Labetalol infusion to 120/80 mmHg",
          "Nifedipine 10 mg every 30 minutes",
          "Stop all antihypertensives",
        ],
        correct: 0,
        explanation:
          "Her BP is no longer severe, so ISSHP advises switching from urgent dosing to regular oral maintenance therapy aimed at a diastolic of 85 mmHg. Repeating nifedipine every 30 minutes for non-severe BP risks overshoot and reduced placental perfusion. A labetalol infusion to 120/80 mmHg aims too low, and she has already reached the 300 mg IV maximum. Stopping all therapy invites a rebound to severe levels. Furosemide is not used to lower BP in pre-eclampsia without pulmonary edema.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would be an ISSHP indication for delivery regardless of gestational age?",
        options: [
          "BP severe on three drug classes",
          "Edema of the face and hands",
          "PCR above 500 mg/mmol",
          "Platelets 120 x 10^9/L",
          "Uric acid above 400 umol/L",
        ],
        correct: 0,
        explanation:
          "ISSHP lists repeated episodes of severe hypertension despite maintenance treatment with three classes of antihypertensive drugs as an indication for delivery at any gestational age. She has so far needed labetalol and nifedipine. ISSHP also advises that the decision to deliver should not rest on the degree of proteinuria or the uric acid level. The platelet threshold for delivery is below 50 x 10^9/L or a progressive fall, so 120 x 10^9/L does not qualify. Edema is common in normal pregnancy and is not a criterion.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp],
    ...META,
  },
  /* 34 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-34",
    topic: "pre-eclampsia",
    alsoTopics: ["pulmonary-edema", "sob"],
    title: "Breathless lying flat at 30 weeks",
    stem:
      "A 35-year-old woman, G2P1 at 30 weeks and 2 days, presents to the emergency department with 12 hours of worsening shortness of breath. Tonight she cannot lie flat. Pre-eclampsia was diagnosed 2 days ago and she was sent home on labetalol 200 mg twice daily. She has obesity and obstructive sleep apnea. She has no chest pain, cough, fever or leg swelling. She has bibasilar crackles to the mid-zones. The calves are symmetric and nontender. Lung ultrasound shows diffuse bilateral B-lines. The fetal heart rate is 150/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "112/minute", resp: "28/minute", bp: "168/108 mmHg", o2sat: "89% on room air", weight: "118 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her shortness of breath?",
        options: [
          "Amniotic fluid embolism",
          "Community-acquired pneumonia",
          "Hypertensive pulmonary edema",
          "Peripartum cardiomyopathy",
          "Pulmonary embolism",
        ],
        correct: 2,
        explanation:
          "Orthopnea, crackles to the mid-zones, diffuse B-lines and hypoxemia with a BP of 168/108 mmHg in a woman with pre-eclampsia point to pulmonary edema, a recognized end-organ complication of pre-eclampsia. Peripartum cardiomyopathy usually appears in the last month of pregnancy or the months after birth, and she is 30 weeks. Pulmonary embolism causes hypoxemia without diffuse B-lines and crackles. Pneumonia would bring fever, cough and focal findings. Amniotic fluid embolism occurs in labour or just after birth, with collapse and coagulopathy.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following medications is most appropriate for her pulmonary findings?",
        options: [
          "ceftriaxone 1 g IV",
          "furosemide 40 mg IV",
          "heparin 5 000 units IV",
          "normal saline 500 mL IV",
          "salbutamol 5 mg nebulized",
        ],
        correct: 1,
        explanation:
          "Pulmonary edema with an O2 sat of 89% needs oxygen, BP control and a loop diuretic, and furosemide 40 mg IV reduces lung water quickly. A saline bolus adds to the fluid overload that pre-eclampsia makes worse through leaky capillaries. Salbutamol treats bronchospasm, which she does not have, and adds tachycardia. Heparin treats pulmonary embolism, which does not explain bilateral B-lines and crackles. Ceftriaxone treats pneumonia, and she has no fever or cough.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "With oxygen, furosemide and BP control her O2 sat is 95% on 4 L/minute by nasal prongs. The first dose of betamethasone has been given.",
        prompt: "Which of the following is the most appropriate plan for her pregnancy?",
        options: [
          "Deliver once she is stabilized",
          "Discharge after diuresis",
          "Expectant care to 34 weeks",
          "Furosemide daily until 37 weeks",
          "Home oxygen and weekly review",
        ],
        correct: 0,
        explanation:
          "Pulmonary edema is an ISSHP indication for delivery at any gestational age, because pre-eclampsia will not resolve until birth and edema may recur. So once she is stabilized, delivery should be planned, with betamethasone already started at 30 weeks. Expectant care to 34 weeks or daily furosemide to 37 weeks leaves the cause in place. Discharge after diuresis or with home oxygen would be unsafe after an episode of hypoxemic pulmonary edema.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.tintinalli, S.isshp],
    ...META,
  },
  /* 35 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-35",
    topic: "pre-eclampsia",
    title: "Headache and swelling at 21 weeks",
    stem:
      "A 29-year-old woman, G2P0 at 21 weeks and 4 days by first-trimester ultrasound, presents to the emergency department with 2 days of headache and facial swelling. She has systemic lupus erythematosus and antiphospholipid syndrome with a positive lupus anticoagulant. Her only previous pregnancy ended in miscarriage at 9 weeks. She takes hydroxychloroquine and low-dose ASA. An ultrasound 3 days ago showed an estimated fetal weight below the 3rd percentile with absent end-diastolic flow in the umbilical artery. She is alert. Her neurological examination is normal apart from 3+ reflexes.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "18/minute", bp: "164/110 mmHg", o2sat: "98% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following in her history most likely explains pre-eclampsia this early in pregnancy?",
        options: ["Antiphospholipid syndrome", "Hydroxychloroquine use", "Low-dose ASA use", "Maternal age of 29 years", "Previous miscarriage"],
        correct: 0,
        explanation:
          "Antiphospholipid syndrome is a recognized risk factor for pre-eclampsia, particularly severe, early-onset disease with fetal growth restriction, and lupus adds further risk. Hydroxychloroquine and low-dose ASA are treatments, and ASA lowers the risk of preterm pre-eclampsia rather than raising it. An age of 29 years is below the 35-year threshold listed as a risk factor. A single early miscarriage is not itself a listed risk factor for pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-222",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "A repeat BP is 166/112 mmHg. PCR 420 mg/mmol, platelets 96 x 10^9/L, ALT 88 U/L, creatinine 92 umol/L. Labetalol and magnesium sulfate are started.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Betamethasone and expectant care",
          "Discharge with home BP checks",
          "Emergency caesarean for fetal benefit",
          "Expectant care to 28 weeks",
          "Maternal-fetal medicine counselling",
        ],
        correct: 4,
        explanation:
          "Severe pre-eclampsia at 21 weeks with severe fetal growth restriction and absent end-diastolic flow is before viability. ISSHP notes that expectant care before viability carries perinatal mortality above 80% and frequent, sometimes fatal, maternal complications, so ending the pregnancy should be discussed with her values in mind and care moved to a referral centre. Maternal-fetal medicine counselling does that once BP and magnesium are in hand. Betamethasone is not given this far before viability, and a caesarean at 21 weeks offers the fetus no benefit. Expectant care or discharge exposes her to eclampsia, HELLP and stroke.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Six hours later her platelets are 72 x 10^9/L, AST 164 U/L and LDH 690 U/L. Haptoglobin is undetectable and the film shows schistocytes. Hemoglobin has fallen from 118 to 101 g/L.",
        prompt: "Which of the following is the most likely explanation for these new results?",
        options: ["Drug-induced hepatitis", "HELLP syndrome", "Lupus flare with hemolysis", "Lupus hepatitis", "Viral hepatitis"],
        correct: 1,
        explanation:
          "In severe early pre-eclampsia, schistocytes, undetectable haptoglobin and an LDH of 690 U/L show microangiopathic hemolysis, and with an AST of 164 U/L and platelets falling from 96 to 72 x 10^9/L this is HELLP syndrome. Autoimmune hemolysis in a lupus flare produces spherocytes and a positive direct antiglobulin test rather than schistocytes. Lupus, drug-induced and viral hepatitis can raise liver enzymes but do not explain microangiopathic hemolysis with a falling platelet count.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
    ],
    sources: [S.acog222, S.isshp, S.sibai],
    ...META,
  },
  /* 36 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-36",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "A migraine that feels different",
    stem:
      "A 28-year-old woman, G1P0 at 35 weeks and 2 days, presents to the emergency department at 1255 with a left-sided throbbing headache for 8 hours, with nausea and light sensitivity. She has had migraine without aura since her teens. She says this headache feels different, more constant, and it has not eased with acetaminophen. It is her first headache of the pregnancy. She asks for sumatriptan, which helped before pregnancy. At 32 weeks her BP was 110 mmHg systolic and 70 mmHg diastolic. She has no visual symptoms. Her neurological examination is normal. Reflexes are 3+ without clonus.",
    vitals: { temperature: "36.8°C oral", pulse: "86/minute", resp: "16/minute", bp: "142/94 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her headache most strongly suggests a secondary cause?",
        options: [
          "Change from her usual migraines",
          "History of migraine since her teens",
          "Left-sided location",
          "Nausea and light sensitivity",
          "Throbbing, pulsating quality",
        ],
        correct: 0,
        explanation:
          "A headache that differs from a patient's usual pattern is a red flag for a secondary cause, and late in pregnancy that means considering pre-eclampsia first. One-sided location, throbbing quality, nausea and light sensitivity are typical of migraine and do not separate the two. A long migraine history does not protect her, and a first headache of the pregnancy at 35 weeks with a BP of 142/94 mmHg needs assessment for pre-eclampsia before it is called migraine.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "acog-headache",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "CT head before any treatment",
          "Discharge with sumatriptan 100 mg PO",
          "Migraine cocktail, then discharge",
          "Opioid analgesia and observation",
          "Pre-eclampsia workup with repeat BP",
        ],
        correct: 4,
        explanation:
          "Her BP of 142/94 mmHg, against a baseline of 110/70 mmHg at 32 weeks, 3+ reflexes and an unusual headache need a repeat BP, platelets, liver enzymes, creatinine and a PCR before any label of migraine. SOGC counts headache as an adverse condition that turns gestational hypertension into pre-eclampsia. Discharge with sumatriptan or a migraine cocktail risks missing it. Opioids are not first-line for headache and mask symptoms. CT is not the first step with a normal neurological examination and no sudden onset.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-426",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "At 1310 her BP is 144/96 mmHg in the same arm. PCR 18 mg/mmol. Platelets 190 x 10^9/L, ALT 21 U/L, creatinine 55 umol/L. The fetal heart tracing is normal. The headache persists.",
        prompt: "Which of the following best classifies her condition using SOGC 2022 definitions?",
        options: ["Chronic hypertension", "Gestational hypertension", "Pre-eclampsia", "Transient hypertension", "White coat hypertension"],
        correct: 2,
        explanation:
          "Her readings 15 minutes apart average 143/95 mmHg, new after 20 weeks. The PCR of 18 mg/mmol is below 30 mg/mmol, but SOGC also diagnoses pre-eclampsia when gestational hypertension comes with an adverse condition, and her persistent new headache is one. Without the headache this would be gestational hypertension. Chronic hypertension predates 20 weeks, and her 32-week BP was normal. Transient and white coat hypertension settle on repeat readings, and hers did not.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
    ],
    sources: [S.acogHa, S.sogc],
    ...META,
  },
  /* 37 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-37",
    topic: "pre-eclampsia",
    alsoTopics: ["delirium-agitation", "seizures"],
    title: "Found wandering in a parking lot",
    stem:
      "A 23-year-old woman is brought to the emergency department by police, who found her wandering confused in a parking lot. A friend reached by phone says she is about 30 weeks pregnant, has had no prenatal care and has used methamphetamine in the past. She is restless and disoriented to time and place, with a GCS of 14 (E4 V4 M6). There is a fresh bite on the right lateral tongue and her clothes are soaked with urine. Pupils are 4 mm and reactive. There is no neck stiffness or focal deficit. Reflexes are 3+ with ankle clonus. The fundal height is 30 cm. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "37.4°C oral", pulse: "110/minute", resp: "20/minute", bp: "172/112 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her confusion?",
        options: [
          "Hypoglycemic encephalopathy",
          "Methamphetamine intoxication",
          "Postictal state from eclampsia",
          "Serotonin syndrome",
          "Viral encephalitis",
        ],
        correct: 2,
        explanation:
          "A lateral tongue bite and incontinence mean she has had a seizure, and a seizure with a BP of 172/112 mmHg, hyperreflexia and clonus at about 30 weeks is eclampsia until proven otherwise. Methamphetamine can raise BP and provoke seizures, but labelling her intoxicated risks missing eclampsia, which needs magnesium now. Her glucose of 5.8 mmol/L excludes hypoglycemia. Encephalitis would usually bring fever and meningism, and serotonin syndrome has no supporting drug history.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "acog-222",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following medications is most appropriate to prevent further seizures in her?",
        options: ["diazepam 10 mg IV", "haloperidol 5 mg IM", "ketamine 1 mg/kg IV", "lorazepam 2 mg IV", "magnesium sulfate 4 g IV"],
        correct: 4,
        explanation:
          "Magnesium sulfate, 4 g IV then 1 g/hour, prevents recurrent eclamptic seizures better than diazepam or phenytoin, as the Collaborative Eclampsia Trial showed. Benzodiazepines such as lorazepam or diazepam are for a seizure that does not stop, not for prevention, and they add sedation and aspiration risk. Haloperidol and ketamine treat agitation, not the cause, and ketamine raises BP further.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "eclampsia-trial",
      },
      {
        id: "q3",
        kind: "menu",
        select: 4,
        prompt: "Which of the following investigations are the most important to confirm pre-eclampsia and its complications?",
        options: [
          "AST and ALT",
          "Blood alcohol level",
          "CBC with platelets",
          "Serum ammonia",
          "Serum cortisol",
          "Serum creatinine",
          "Serum lipase",
          "Urine PCR",
        ],
        correct: [0, 2, 5, 7],
        explanation:
          "She has had no prenatal care, so a urine PCR is needed to show proteinuria, and platelets, AST, ALT and creatinine show HELLP and kidney injury, which change delivery planning. SOGC defines pre-eclampsia by hypertension after 20 weeks with proteinuria or adverse conditions such as these. Stimulant use and pre-eclampsia can coexist, so a positive drug screen would not exclude eclampsia. Blood alcohol, ammonia, cortisol and lipase look for causes her picture does not suggest.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-426",
      },
    ],
    sources: [S.acog222, S.eclampsiaTrial, S.sogc],
    ...META,
  },
  /* 38 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-38",
    topic: "pre-eclampsia",
    alsoTopics: ["loc", "multiple-trauma"],
    title: "Low-speed crash with no memory of it",
    stem:
      "A 31-year-old woman, G2P1 at 33 weeks and 6 days, is brought to the emergency department by ambulance after her car left the road at low speed and came to rest in a ditch. She was belted and the airbag did not deploy. She does not remember the crash. Her husband says she had a headache this morning. She is drowsy, follows commands and is disoriented to time, with a GCS of 14. There is a bite on the left lateral tongue and no scalp injury. The abdomen and uterus are soft and nontender, with no seatbelt mark. Reflexes are 3+. Capillary glucose is 5.4 mmol/L and breath alcohol is zero. The fetal heart rate is 145/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "18/minute", bp: "166/108 mmHg", o2sat: "97% on room air", weight: "77 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for her confusion?",
        options: [
          "Alcohol intoxication",
          "Concussion from the crash",
          "Hypoglycemic event",
          "Posttraumatic subdural hematoma",
          "Seizure from eclampsia",
        ],
        correct: 4,
        explanation:
          "A lateral tongue bite, amnesia for the event and confusion, after a morning headache, with a BP of 166/108 mmHg and 3+ reflexes at 33 weeks, suggest that an eclamptic seizure caused the crash rather than the crash causing her confusion. A low-speed, belted crash with no scalp injury makes concussion or a subdural hematoma less likely, although imaging is still needed. Her glucose of 5.4 mmol/L excludes hypoglycemia, and a breath alcohol of zero excludes intoxication.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "acog-222",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging or test for her confusion?",
        options: [
          "Electroencephalogram",
          "Lumbar puncture",
          "MRI brain with gadolinium",
          "Noncontrast CT head",
          "Urine drug screen",
        ],
        correct: 3,
        explanation:
          "Persistent confusion after a crash, possibly caused by a seizure, needs a noncontrast CT head to exclude traumatic bleeding and intracranial complications of eclampsia such as hemorrhage. The fetal radiation dose from head CT is negligible. Gadolinium is avoided in pregnancy unless essential, and MRI takes longer. Lumbar puncture is unsafe before imaging. An EEG is not needed for a seizure with a clear cause, and a drug screen does not look for bleeding.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "At 1540 she has a 90-second generalized seizure. Magnesium sulfate 4 g IV is started. The fetal heart rate falls to 80/minute during the seizure and is 110/minute and rising 4 minutes later.",
        prompt: "Which of the following is the most appropriate next step for the fetus?",
        options: [
          "Emergency caesarean now",
          "Immediate induction with oxytocin",
          "Stabilize her, then reassess fetus",
          "Steroids, then delivery in 48 hours",
          "Tocolysis with nifedipine",
        ],
        correct: 2,
        explanation:
          "Fetal bradycardia during an eclamptic seizure is common, from maternal hypoxia and increased uterine tone, and the tracing usually normalizes once the mother is resuscitated. ACOG advises proceeding to delivery only after maternal stabilization, so oxygen, magnesium and BP control come first. An emergency caesarean or induction in a postictal, unstabilized mother adds risk. If the tracing does not recover, abruption must be considered. Eclampsia is an indication for delivery once she is stable, so waiting 48 hours for steroids is not appropriate. Tocolysis has no role.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-222",
      },
    ],
    sources: [S.acog222, S.tintinalli],
    ...META,
  },
];
