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
  escPreg: {
    id: "esc-pregnancy-2025",
    citation: "De Backer J, Haugaa KH, Hasselberg NE, et al. 2025 ESC Guidelines for the management of cardiovascular disease and pregnancy. Eur Heart J. 2025.",
    url: "https://doi.org/10.1093/eurheartj/ehaf193",
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
  acogHa: {
    id: "acog-headache",
    citation: "American College of Obstetricians and Gynecologists. Clinical Practice Guideline No. 3: Headaches in pregnancy and postpartum. Obstet Gynecol. 2022.",
  },
  eclampsiaTrial: {
    id: "eclampsia-trial",
    citation: "Eclampsia Trial Collaborative Group. Which anticonvulsant for women with eclampsia? Evidence from the Collaborative Eclampsia Trial. Lancet. 1995.",
  },
  ramoska: {
    id: "ramoska-pregnancy-history",
    citation: "Ramoska EA, Sacchetti AD, Nepp M. Reliability of patient history in determining the possibility of pregnancy. Ann Emerg Med. 1989.",
    url: "https://doi.org/10.1016/s0196-0644(89)80310-5",
  },
  oyelese: {
    id: "oyelese-abruption",
    citation: "Oyelese Y, Ananth CV. Placental abruption. Obstet Gynecol. 2006.",
    url: "https://doi.org/10.1097/01.AOG.0000239439.04364.9a",
  },
  acog723: {
    id: "acog-723",
    citation: "American College of Obstetricians and Gynecologists. Committee Opinion No. 723: Guidelines for diagnostic imaging during pregnancy and lactation. Obstet Gynecol. 2017.",
    url: "https://pubmed.ncbi.nlm.nih.gov/28937575/",
  },
  figo: {
    id: "figo-pph",
    citation: "Escobar MF, Nassar AH, Theron G, et al. FIGO recommendations on the management of postpartum hemorrhage 2022. Int J Gynaecol Obstet. 2022.",
    url: "https://doi.org/10.1002/ijgo.14116",
  },
  johnson: {
    id: "johnson-pyelonephritis",
    citation: "Johnson JR, Russo TA. Acute pyelonephritis in adults. N Engl J Med. 2018.",
    url: "https://doi.org/10.1056/NEJMcp1702758",
  },
  acog171: {
    id: "acog-171",
    citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 171: Management of preterm labor. Obstet Gynecol. 2016.",
    url: "https://pubmed.ncbi.nlm.nih.gov/27661654/",
  },
  haram: {
    id: "haram-hellp",
    citation: "Haram K, Svendsen E, Abildgaard U. The HELLP syndrome: clinical issues and management. A review. BMC Pregnancy Childbirth. 2009.",
    url: "https://doi.org/10.1186/1471-2393-9-8",
  },
  mgConsensus: {
    id: "mg-consensus",
    citation:
      "Sanders DB, Wolfe GI, Benatar M, et al. International consensus guidance for management of myasthenia gravis: executive summary. Neurology. 2016.",
    url: "https://doi.org/10.1212/WNL.0000000000002790",
  },
  fullpiers: {
    id: "fullpiers",
    citation: "von Dadelszen P, Payne B, Li J, et al. Prediction of adverse maternal outcomes in pre-eclampsia. Development and validation of the fullPIERS model. Lancet. 2011.",
    url: "https://doi.org/10.1016/S0140-6736(10)61351-7",
  },
} satisfies Record<string, Source>;

export const PRE_ECLAMPSIA_S47_SAMPS: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-16",
    topic: "pre-eclampsia",
    title: "Facial droop late in pregnancy",
    stem:
      "A 31-year-old woman, G2P1 at 35 weeks and 4 days, presents to the emergency department because the left side of her face has drooped since she woke this morning. Water dribbles from the left corner of her mouth when she drinks. She has no headache, limb weakness or trouble speaking. It is February in Winnipeg, and she has not travelled or had a tick bite. Her first pregnancy was uncomplicated. At 20 weeks her BP was 106 mmHg systolic and 64 mmHg diastolic. She takes a prenatal vitamin.\n\nShe cannot wrinkle the left side of her forehead or fully close her left eye, and the left corner of her mouth droops. There are no vesicles in the ear or mouth. Speech, limb strength, sensation and coordination are normal. The uterus is soft and nontender, and the fetal heart rate is 142/minute.",
    vitals: { temperature: "36.7°C oral", pulse: "86/minute", resp: "16/minute", bp: "138/88 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most important to add to her assessment now?",
        options: [
          "CT head without contrast",
          "Lyme disease serology",
          "MRI of the brain",
          "Nerve conduction studies",
          "Urine protein-creatinine ratio",
        ],
        correct: 4,
        explanation:
          "Facial palsy in late pregnancy is linked to pre-eclampsia. In a Canadian series of pregnant women with Bell palsy, 29% developed pre-eclampsia or gestational hypertension, and ISSHP lists Bell palsy among the rarer organ problems of pre-eclampsia. Her BP of 138/88 mmHg is below 140/90 mmHg but well above her baseline of 106/64 mmHg, so a test for proteinuria belongs in her assessment now, with a repeat BP. Weakness of the whole left face, including the forehead, with an otherwise normal neurological examination is a peripheral facial palsy, so CT and MRI of the brain are not needed. Lyme disease is unlikely in February with no travel or tick bite. Nerve conduction studies do not change her care today.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "shmorgun-bell",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Her BP 15 minutes later is 144/94 mmHg. She now mentions 2 days of nausea and one episode of vomiting, which she blames on a new prenatal vitamin she started last week.",
        prompt: "Which of the following is the most appropriate next step for her nausea?",
        options: [
          "Ondansetron and discharge home",
          "Outpatient review in 2 days",
          "Platelets, liver enzymes and LDH",
          "Switch back to her old vitamin",
          "Upper abdominal ultrasound",
        ],
        correct: 2,
        explanation:
          "New hypertension of 144/94 mmHg after 20 weeks with a facial palsy, and now nausea and vomiting, means HELLP syndrome must be excluded before her nausea is blamed on anything else. Upper abdominal pain, nausea and vomiting are the typical symptoms of HELLP. Platelets, AST and ALT, and LDH are the core tests, with a blood film. Ondansetron with discharge, a review in 2 days or a change of vitamin would treat a presumed cause and leave HELLP undetected. An upper abdominal ultrasound looks for gallbladder disease and cannot measure platelets, hemolysis or liver injury.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "haram-hellp",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Hemoglobin 121 g/L, platelets 168 x 10^9/L, AST 52 U/L, ALT 64 U/L, LDH 410 U/L, bilirubin 9 umol/L, glucose 5.0 mmol/L, creatinine 61 umol/L and INR 1.0. The blood film shows no schistocytes.",
        prompt: "Which of the following best describes her blood results using the ISSHP and Tennessee criteria?",
        options: [
          "Acute fatty liver of pregnancy",
          "Complete HELLP syndrome",
          "Liver involvement without HELLP",
          "Normal results for late pregnancy",
          "Partial HELLP syndrome",
        ],
        correct: 2,
        explanation:
          "An AST of 52 U/L and an ALT of 64 U/L are above 40 U/L, which ISSHP counts as liver involvement of pre-eclampsia, so these results are not normal for late pregnancy. None of the Tennessee thresholds for HELLP is reached. Her platelets of 168 x 10^9/L are not below 100 x 10^9/L, her AST is below 70 U/L, her LDH of 410 U/L is not above 600 U/L, and the film shows no hemolysis. Complete HELLP needs all three parts of the triad, and partial HELLP needs one or two, so neither is present. Acute fatty liver of pregnancy brings jaundice, low glucose and abnormal clotting, and her bilirubin, glucose and INR are normal.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her BP is 146/94 mmHg on repeat. The obstetric team admits her for maternal and fetal monitoring.",
        prompt: "Which of the following is the most appropriate BP treatment for her now?",
        options: [
          "enalapril 10 mg PO daily",
          "hydralazine 5 mg IV now",
          "labetalol 20 mg IV now",
          "labetalol 200 mg PO twice daily",
          "No antihypertensive yet",
        ],
        correct: 3,
        explanation:
          "Her BP of 146/94 mmHg is non-severe hypertension, and ISSHP recommends treating it with a first-line oral drug, such as labetalol, nifedipine or methyldopa, to a diastolic target of 85 mmHg. Oral labetalol 200 mg twice daily is a common starting dose, raised as needed. IV labetalol and IV hydralazine are for severe hypertension of 160 mmHg systolic or 110 mmHg diastolic or more, which she does not have. ACE inhibitors such as enalapril are not used once a woman is pregnant because they harm the fetal kidneys. Waiting until her BP becomes severe gives up the benefit of treating to target.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [
      {
        id: "shmorgun-bell",
        citation: "Shmorgun D, Chan WS, Ray JG. Association between Bell's palsy in pregnancy and pre-eclampsia. QJM. 2002.",
        url: "https://doi.org/10.1093/qjmed/95.6.359",
      },
      S.haram,
      { ...S.isshp, url: "https://doi.org/10.1016/j.preghy.2021.09.008" },
    ],
    ...META,
    version: 3,
  },
  /* 17 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-17",
    topic: "pre-eclampsia",
    title: "No fetal movement for two days at 27 weeks",
    stem:
      "A 38-year-old woman, G4P3 at 27 weeks and 2 days, presents to the emergency department because she has not felt the baby move for 2 days. She has no headache, visual change, abdominal pain or vaginal bleeding. Her three earlier pregnancies ended in uncomplicated births at term. At 20 weeks her BP was 118 mmHg systolic and 72 mmHg diastolic. She takes a prenatal vitamin.\n\nThe uterus is soft and nontender. Reflexes are 2+ without clonus. Bedside ultrasound shows no fetal cardiac activity. Obstetrics confirms fetal death on formal ultrasound.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "18/minute", bp: "164/110 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A repeat BP 15 minutes later is 162/108 mmHg. PCR is 22 mg/mmol, platelets 214 x 10^9/L, ALT 24 U/L and creatinine 64 umol/L.",
        prompt: "Which of the following best describes her hypertensive disorder under the ISSHP 2021 classification?",
        options: ["Chronic hypertension", "Gestational hypertension", "HELLP syndrome", "Pre-eclampsia", "White-coat hypertension"],
        correct: 3,
        explanation:
          "Her BP was 118/72 mmHg at 20 weeks and is now confirmed at 162/108 mmHg or higher, so the hypertension is new after 20 weeks. ISSHP defines pre-eclampsia as new hypertension at 20 weeks or more with proteinuria, maternal organ dysfunction or uteroplacental dysfunction, and it lists intrauterine fetal death as a sign of uteroplacental dysfunction. So the fetal death makes this pre-eclampsia, even though her PCR of 22 mg/mmol is below the abnormal level of 30 mg/mmol and her platelets, ALT and creatinine are normal. Gestational hypertension applies only when none of these features is present. Chronic hypertension begins before 20 weeks, and her 20-week reading was normal. White-coat hypertension needs normal home or ambulatory readings, which she does not have. Normal platelets and ALT exclude HELLP syndrome. The question names ISSHP because not every guideline lists fetal death as a criterion.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for antenatal corticosteroids?",
        options: [
          "betamethasone 12 mg IM, 2 doses 24 hours apart",
          "betamethasone 12 mg IM, single dose",
          "dexamethasone 6 mg IM, 4 doses 12 hours apart",
          "dexamethasone 6 mg IM every 12 hours",
          "No antenatal corticosteroids",
        ],
        correct: 4,
        explanation:
          "ISSHP advises a single course of antenatal corticosteroids for a woman with a hypertensive disorder before 34 weeks who is at risk of birth within 7 days, to reduce neonatal death and neonatal morbidity. The benefit is for the baby, and fetal death has been confirmed on formal ultrasound, so no course can help. Each betamethasone and dexamethasone regimen listed would expose her to the drug with no baby to benefit. ISSHP also advises against corticosteroids to hasten the resolution of HELLP syndrome, and her platelets and ALT are normal in any case.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the timing of birth?",
        options: [
          "Await spontaneous labour for 2 weeks",
          "Birth once her BP is controlled",
          "Discharge with twice-weekly bloodwork",
          "Expectant care until 34 weeks",
          "Repeat ultrasound in 1 week first",
        ],
        correct: 1,
        explanation:
          "ISSHP lists nonreassuring fetal status, including fetal death, among the indications for delivery at any gestational age in a hypertensive disorder of pregnancy. So birth should be planned once her severe BP is controlled. Expectant care to 34 weeks exists to gain fetal maturity, and that aim no longer applies, while her own risk from pre-eclampsia continues. Waiting 2 weeks for labour, or managing her as an outpatient with bloodwork, leaves that risk in place. Obstetrics has already confirmed the fetal death on formal ultrasound, so a repeat scan in a week only adds delay.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her BP has been controlled with nifedipine XL 30 mg PO twice daily.",
        prompt: "Which of the following is the most appropriate plan for her antihypertensive therapy after she gives birth?",
        options: [
          "Continue it and check BP on days 3 to 7",
          "Halve the dose and stop at discharge",
          "Stop nifedipine and follow up in 6 weeks",
          "Stop nifedipine at delivery of the placenta",
          "Stop nifedipine when labour begins",
        ],
        correct: 0,
        explanation:
          "ISSHP advises that antihypertensive therapy given before birth be continued after birth, and that BP be checked at least once on days 3 to 7 postpartum, when it is likely to be highest. So she should continue nifedipine and have a BP check in that window. Stopping when labour begins or at delivery of the placenta withdraws treatment just before the usual postpartum peak. Halving the dose and stopping at discharge has the same problem. A single follow-up visit at 6 weeks misses the days when her BP is most likely to rise.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp],
    ...META,
    version: 2,
  },
  /* 18 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-18",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Teenager with headache and vomiting",
    stem:
      "A 16-year-old girl is brought to the emergency department by her mother with 2 days of headache and 3 episodes of vomiting today. She says she has never been sexually active. Her periods have been irregular and she cannot recall the last one. She has no medical history and takes no medications. She is alert and oriented. Pupils are equal and reactive, and there is no neck stiffness or focal deficit. Reflexes are brisk. The abdomen is protuberant, with a firm, nontender midline mass rising about 12 cm above the umbilicus.",
    vitals: { temperature: "37.0°C oral", pulse: "102/minute", resp: "18/minute", bp: "162/106 mmHg", o2sat: "98% on room air", weight: "94 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is the most urgent for her?",
        options: ["Bedside pregnancy test", "CT head without contrast", "Lumbar puncture", "Plasma metanephrines", "Serum drug screen"],
        correct: 0,
        explanation:
          "A firm midline mass above the umbilicus with irregular periods is a gravid uterus until proven otherwise. History is an unreliable way to exclude pregnancy, and in an emergency department study at least 10% of patients who said they could not be pregnant were, so a denial of sexual activity does not settle it. Headache, vomiting and a BP of 162/106 mmHg in a pregnancy beyond 20 weeks would mean pre-eclampsia. A bedside pregnancy test takes minutes and changes the whole workup. CT head may still be needed but would not explain her hypertension. Lumbar puncture is premature before a diagnosis. Metanephrines and a drug screen look for rarer causes and take longer.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "ramoska-pregnancy-history",
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
    sources: [S.ramoska, S.sogc, S.isshp],
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
          "Previous pre-eclampsia, chronic hypertension, pregestational diabetes and a BMI above 30 kg/m2 are each listed by ISSHP as a high-risk factor for pre-eclampsia. An age of 31 years is below the age thresholds that guidelines list. The caesarean itself does not raise her risk, and metformin is a treatment, not a risk factor. Her headache settled with acetaminophen and, at 13 weeks, is not a feature of pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
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
    sources: [S.sogc, S.isshp],
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
          "A systolic of 160 mmHg or more is severe hypertension even when the diastolic is below 110 mmHg, and it needs treatment within 30 to 60 minutes. Stroke in pre-eclampsia tracks systolic pressure. In a series of 28 women with stroke, 23 of the 24 with readings just before the stroke had a systolic of 160 mmHg or more, but only 3 had a diastolic of 110 mmHg or more. Waiting for a diastolic of 110 mmHg, for 4 hours, for proteinuria results or for the headache to persist delays treatment of that risk.",
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
          "Hypertension with a PCR of 58 mg/mmol at 38 weeks and 2 days is pre-eclampsia, and SOGC recommends initiating delivery at 37 weeks or later. At term the baby gains nothing from waiting, while she stays exposed to eclampsia, abruption and HELLP. Waiting to 40 weeks, outpatient care until labour or weekly tests all accept that risk. A repeat PCR adds nothing, because ISSHP advises that proteinuria testing need not be repeated once significant proteinuria is confirmed.",
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
        source: "oyelese-abruption",
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
          "Abruption can cause heavy concealed bleeding and disseminated intravascular coagulation, so she needs a CBC with platelets, a fibrinogen level and a group and crossmatch now. A low fibrinogen marks consumptive coagulopathy and guides replacement. Abruption is a clinical diagnosis, and ultrasound is of limited value, so a normal scan cannot exclude one and must not delay care. D-dimer is raised in normal pregnancy and adds nothing. A repeat PCR, uric acid and lipase do not change management.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "oyelese-abruption",
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
          "A prolonged fall in the fetal heart rate to 90/minute with a rising maternal pulse after an abruption means fetal compromise and ongoing blood loss. ISSHP lists abruption with maternal or fetal compromise as an indication for delivery at any gestational age, and emergency caesarean is the fastest route. Induction with oxytocin takes hours that a bradycardic fetus does not have. Tocolysis is contraindicated in abruption. Waiting 48 hours for betamethasone or an hour for a scan delays delivery of a compromised fetus.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "Hemoglobin 88 g/L, platelets 74 x 10^9/L, fibrinogen 1.1 g/L, INR 1.6. She is going to the operating room.",
        prompt: "Which of the following treatments best addresses her most severe coagulation deficit?",
        options: ["Albumin 5% infusion", "Cryoprecipitate", "Platelets only", "Protamine sulfate", "Vitamin K IV"],
        correct: 1,
        explanation:
          "A fibrinogen of 1.1 g/L with an INR of 1.6 is consumptive coagulopathy from abruption, and fibrinogen falls first and furthest. Cryoprecipitate replaces fibrinogen, given with red cells and plasma as bleeding requires. Platelets alone leave the fibrinogen deficit, and a count of 74 x 10^9/L is not the main problem. Vitamin K corrects deficiency, not consumption. Protamine reverses heparin, which she has not received. Albumin adds volume without clotting factors. Coagulopathy from abruption is managed aggressively while delivery removes its cause.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "oyelese-abruption",
      },
    ],
    sources: [S.oyelese, S.isshp],
    ...META,
  },
  /* 23 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-23",
    topic: "pre-eclampsia",
    title: "Birth in the department",
    stem:
      "You are working in a community hospital emergency department. A 27-year-old woman, G2P1 at 36 weeks and 4 days, arrives in strong labour and gives birth to a vigorous baby 10 minutes later, before the obstetrician arrives. Pre-eclampsia was diagnosed 3 days ago, and she takes labetalol 200 mg PO three times daily. She has no other medical conditions and no asthma. Blood drawn on arrival shows platelets 78 x 10^9/L, AST 264 U/L, ALT 231 U/L, LDH 760 U/L, creatinine 71 umol/L, INR 1.0 and glucose 5.1 mmol/L, with schistocytes on the film. Oxytocin 10 units IM was given after the birth, and the placenta delivered complete.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "18/minute", bp: "154/100 mmHg", o2sat: "98% on room air", weight: "69 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Fifteen minutes later she is bleeding heavily, with about 700 mL of blood loss, and the uterus is soft. Uterine massage has started and an oxytocin infusion is running.",
        prompt: "Which of the following medications for her postpartum hemorrhage carries the greatest risk in her case?",
        options: [
          "carbetocin 100 mcg IV",
          "carboprost 250 mcg IM",
          "ergonovine 0.25 mg IM",
          "misoprostol 800 mcg SL",
          "tranexamic acid 1 g IV",
        ],
        correct: 2,
        explanation:
          "Ergonovine is an ergot alkaloid that constricts blood vessels and can raise BP sharply, so FIGO advises using it only when hypertensive disorders have been excluded. She has pre-eclampsia with HELLP and a BP of 154/100 mmHg, so ergonovine risks severe hypertension and stroke. Sublingual misoprostol 800 mcg is a recommended treatment when bleeding continues. Tranexamic acid 1 g IV is recommended as soon as hemorrhage is diagnosed and within 3 hours of birth. Carboprost is an accepted second-line uterotonic, and she has no asthma. Carbetocin is a long-acting oxytocin analogue without a vasoconstrictor effect of this kind.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "figo-pph",
      },
      {
        id: "q2",
        kind: "single",
        update: "The bleeding settles, with a total blood loss of 900 mL. She is admitted to an obstetric unit that follows ACOG guidance for HELLP syndrome.",
        prompt: "Which of the following is the longest acceptable interval between her repeat laboratory tests?",
        options: ["4 hours", "12 hours", "24 hours", "48 hours", "72 hours"],
        correct: 1,
        explanation:
          "ACOG advises very close monitoring in HELLP syndrome before and after birth, with laboratory tests at least every 12 hours. The platelet count can fall by about 40% a day as liver enzymes rise, and the disease can worsen in the first days after birth. From 78 x 10^9/L, a 40% fall would bring her to about 47 x 10^9/L within a day, since 78 x 0.6 = 46.8. Intervals of 24 to 72 hours would miss that fall. Testing every 4 hours is reasonable when she is unstable, but it is not the longest interval ACOG accepts.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "acog-222",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Twelve hours after birth her platelets are 52 x 10^9/L and AST 298 U/L. Fibrinogen is 3.0 g/L and INR 1.0. She has not received heparin. Her BP is 138/86 mmHg.",
        prompt: "Which of the following is the most likely explanation for her falling platelet count?",
        options: [
          "Acute fatty liver of pregnancy",
          "Disseminated intravascular coagulation",
          "Expected course after delivery",
          "Heparin-induced thrombocytopenia",
          "Thrombotic thrombocytopenic purpura",
        ],
        correct: 2,
        explanation:
          "In HELLP syndrome the platelet count often keeps falling after birth, reaching its lowest point at a mean of 23 hours, and the disease can peak in the first 2 days. With supportive care 90% have platelets above 100 x 10^9/L within 7 days. ACOG advises reassessing the diagnosis, for example for thrombotic thrombocytopenic purpura, only if platelets still fall and enzymes still rise after day 4. A fibrinogen of 3.0 g/L and an INR of 1.0 argue against DIC after her hemorrhage. She has had no heparin. Fatty liver would bring coagulopathy or hypoglycemia.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "acog-222",
      },
    ],
    sources: [S.figo, S.acog222],
    ...META,
    version: 2,
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
          "Thrombotic thrombocytopenic purpura is often fatal without prompt plasma exchange, which replaces ADAMTS13 and, in acquired disease, removes the inhibiting antibody, usually with corticosteroids. Unlike HELLP, it does not resolve with delivery, so emergency delivery at 23 weeks would not treat her. Platelet transfusion may worsen microvascular thrombosis and is avoided unless bleeding is life-threatening. Magnesium prevents eclampsia, which she does not have. Rituximab is an adjunct and cannot replace plasma exchange.",
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
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "16/minute", bp: "164/104 mmHg", o2sat: "98% on room air", weight: "76 kg" },
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
          "Her two readings average 163/104 mmHg, so she has severe hypertension, which after birth carries the same stroke risk as before and needs treatment within 30 to 60 minutes with IV labetalol, oral immediate-release nifedipine or IV hydralazine. Enalapril is compatible with breastfeeding but acts too slowly for severe hypertension and is best avoided while her kidney injury evolves. Methyldopa is slow and usually avoided after birth because of concern about depression. Diuretics do not control severe hypertension quickly and would worsen her kidney injury.",
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
      "A 26-year-old woman, G1P0 at 33 weeks and 1 day, presented to the emergency department at 1200 with a severe headache and repeated visual scotomata. Her BP was confirmed at 172 mmHg systolic and 114 mmHg diastolic, and her urine PCR was 310 mg/mmol. She received IV labetalol. Magnesium sulfate 4 g IV over 20 minutes was started at 1300, then 1 g/hour. A urinary catheter was placed at 1300. It is now 1700 and the obstetrician is finishing a caesarean. Urine output since 1300 is 75 mL. Creatinine is 168 umol/L, up from 60 umol/L at 28 weeks. Potassium is 4.6 mmol/L. She is awake and oriented. Patellar reflexes are 1+. The lungs are clear.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "14/minute", bp: "150/98 mmHg", o2sat: "97% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She says she has felt warm and flushed, with a metallic taste, since the loading dose.",
        prompt: "Which of the following new symptoms would suggest magnesium toxicity rather than an expected side effect?",
        options: ["Facial flushing", "Metallic taste", "Nausea and vomiting", "Palpitations", "Slurred speech"],
        correct: 4,
        explanation:
          "Slurred speech is a central nervous system sign of magnesium toxicity. ISSHP lists excessive drowsiness and slurred speech, with muscle weakness, lost reflexes, a resp rate below 12/minute and an O2 sat below 94%, as findings that should stop the infusion and prompt a serum magnesium level. Flushing, a metallic taste, nausea and vomiting, and palpitations are recognized side effects that ISSHP says should be told apart from toxicity. Her urine output of 75 mL in 4 hours, about 19 mL/hour, is below the ISSHP warning level of 30 mL/hour for 4 hours, and her 1+ reflexes are decreased, so accumulation is already suspected and the infusion should be paused while a serum level is sent.",
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
      "A 44-year-old woman, G1P0 at 27 weeks and 2 days with a singleton pregnancy conceived by IVF with donor eggs, presents to the emergency department after home BP readings above 140 mmHg systolic on 2 days. She feels well. She has hypothyroidism treated with levothyroxine. Her BMI is 32 kg/m2. She has no headache, visual symptoms, chest pain or abdominal pain. Fetal movements are normal. Her neurological examination is normal and reflexes are 2+.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "142/92 mmHg", o2sat: "99% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "At 1120 her BP is 144/90 mmHg. PCR is 22 mg/mmol. Platelets 164 x 10^9/L, ALT 26 U/L, creatinine 58 umol/L. The fetal heart tracing is normal. She remains well.",
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
        prompt: "Which of the following home BP readings should prompt her to return to hospital immediately?",
        options: ["130/80 mmHg or higher", "140/90 mmHg or higher", "150/100 mmHg or higher", "160/110 mmHg or higher", "180/120 mmHg or higher"],
        correct: 3,
        explanation:
          "A systolic of 160 mmHg or more or a diastolic of 110 mmHg or more is severe hypertension, which ISSHP says needs urgent treatment in a monitored setting, so either reading should bring her straight back. On treatment her diastolic target is 85 mmHg, so readings of 140/90 or 150/100 mmHg call for a prompt review of her medication, not an emergency visit. A reading of 130/80 mmHg is at or near target. Waiting for 180/120 mmHg accepts a stroke risk that begins at a systolic of 160 mmHg. New headache, visual change or abdominal pain should also bring her back at any BP.",
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
          "Sudden severe headache with vomiting, a GCS of 13 and a new arm drift suggest intracerebral hemorrhage, and noncontrast CT of the head confirms it within minutes. ACOG advises that the radiation from CT is far below the dose linked to fetal harm, and a needed CT should not be withheld in pregnancy. MRI with venography takes longer and is better suited to stable patients or to cerebral venous thrombosis. Lumbar puncture is unsafe before a mass lesion is excluded. An EEG and carotid Doppler do not assess hemorrhage.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-723",
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
          "Pre-eclampsia complicated by stroke needs magnesium sulfate to prevent eclampsia, neurosurgical input for the hematoma, and obstetric care to plan delivery once she is stable, since stroke is an indication for delivery at any gestational age. Levetiracetam does not prevent eclampsia the way magnesium does. With platelets of 176 x 10^9/L and an INR of 1.0, platelet transfusion has nothing to correct, and tranexamic acid did not improve functional outcome after spontaneous intracerebral hemorrhage in a large trial. Dexamethasone does not help edema around a hemorrhage. Lumbar puncture is unsafe with a mass lesion.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.martin, S.acog723, S.isshp],
    ...META,
  },
  /* 30 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-30",
    topic: "pre-eclampsia",
    title: "Headache at term with a neuromuscular disease",
    stem:
      "A 30-year-old woman, G1P0 at 37 weeks and 2 days, presents to the emergency department with a frontal headache since this morning. She has generalized myasthenia gravis, stable for 3 years on pyridostigmine 60 mg PO four times daily. At 20 weeks her BP was 112 mmHg systolic and 70 mmHg diastolic. She has no visual change or abdominal pain.\n\nShe has mild bilateral ptosis, which she says is usual for her. Limb strength is normal, and she speaks in full sentences. Reflexes are 3+ without clonus. The fetal heart rate is 140/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "16/minute", bp: "164/112 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A repeat BP 15 minutes later is 162/110 mmHg. PCR is 96 mg/mmol, platelets 168 x 10^9/L, ALT 34 U/L and creatinine 66 umol/L. Obstetrics would usually start magnesium sulfate for eclampsia prevention and asks your advice.",
        prompt: "Which of the following is the most appropriate approach to seizure prophylaxis for her?",
        options: [
          "Half-dose magnesium sulfate infusion",
          "Magnesium sulfate with calcium on standby",
          "Phenytoin rather than magnesium sulfate",
          "Scheduled IV diazepam until delivery",
          "Standard-dose magnesium sulfate infusion",
        ],
        correct: 2,
        explanation:
          "Her myasthenia changes the usual choice. An international consensus on myasthenia gravis advises against magnesium sulfate for eclampsia in myasthenia because of its neuromuscular blocking effect, and states that barbiturates or phenytoin usually provide adequate treatment. So phenytoin replaces magnesium sulfate here. A standard or a half-dose infusion still carries that blocking effect, in a patient who already has ptosis. Having calcium on standby does not change the blocking effect of the magnesium itself. Scheduled IV diazepam is not one of the alternatives the consensus names, and it adds sedation.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "mg-consensus",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her BP is now 148/96 mmHg. Obstetrics asks for your view on the plan for her birth.",
        prompt: "Which of the following is the most appropriate plan for her birth?",
        options: [
          "Aim for vaginal birth after induction",
          "Caesarean because of her myasthenia",
          "Caesarean under general anesthesia",
          "Elective caesarean with spinal block",
          "Expectant care until 39 weeks",
        ],
        correct: 0,
        explanation:
          "She has pre-eclampsia at 37 weeks, and ISSHP advises that women with pre-eclampsia at term be offered birth. So induction now, aiming for a vaginal birth, is the plan. Her myasthenia does not change the route. The myasthenia consensus makes spontaneous vaginal delivery the objective and actively encourages it, so stable myasthenia is not itself a reason for caesarean birth. A planned caesarean, under general or spinal anesthesia, adds surgical risk without an obstetric indication in her case. Expectant care to 39 weeks delays the birth that ISSHP advises and leaves her exposed to the complications of pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her baby after birth?",
        options: [
          "Cord blood antibody test alone",
          "Examination for transient weakness",
          "Immunoglobulin IV for the newborn",
          "Pyridostigmine for the newborn at birth",
          "Routine care with no added checks",
        ],
        correct: 1,
        explanation:
          "The consensus advises that every baby born to a mother with myasthenia be examined for transient myasthenic weakness, even when the mother's disease is well controlled, and have rapid access to neonatal care. Her stable disease does not remove that need, so routine care without added checks falls short. An antibody result alone does not show whether the baby is weak, and weakness is the finding that matters. Pyridostigmine and IV immunoglobulin are treatments, and nothing yet shows that the baby needs treatment.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "mg-consensus",
      },
    ],
    sources: [S.mgConsensus, S.isshp],
    ...META,
    version: 2,
  },
  /* 31 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-31",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Headache with kidney disease at 30 weeks",
    stem:
      "A 33-year-old woman, G2P1 at 30 weeks and 4 days, presents to the emergency department with a dull bifrontal headache for 2 days. Acetaminophen eases it partly. She has IgA nephropathy and chronic hypertension. Her nifedipine XL was increased from 30 mg to 60 mg PO daily 1 week ago. Her usual treated BP is about 130 mmHg systolic and 80 mmHg diastolic. At 14 weeks her PCR was 80 mg/mmol, her platelets were 246 x 10^9/L and her creatinine was 68 umol/L. She has no visual change, abdominal pain or contractions.\n\nHer neurological examination is normal. Reflexes are 3+ without clonus. The fetal heart rate is 145/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "136/86 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following diagnoses is most important to exclude as the cause of her headache?",
        options: ["Medication overuse headache", "Migraine without aura", "Nifedipine-related headache", "Superimposed pre-eclampsia", "Tension-type headache"],
        correct: 3,
        explanation:
          "Chronic hypertension and chronic kidney disease are both high-risk factors for pre-eclampsia in the ISSHP risk table, so a new headache at 30 weeks calls for testing for superimposed pre-eclampsia. Her BP of 136/86 mmHg, close to her usual treated level, does not exclude it. ISSHP diagnoses superimposed pre-eclampsia by new proteinuria, maternal organ dysfunction or uteroplacental dysfunction, not by the BP level. ISSHP notes that nifedipine may cause maternal headache, so her recent dose increase is a plausible cause, but only once pre-eclampsia has been excluded. Migraine and tension-type headache are also diagnoses to reach after that testing. Medication overuse headache does not fit 2 days of acetaminophen.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "isshp-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her repeat BP is 142/92 mmHg. PCR is 190 mg/mmol, platelets 132 x 10^9/L, ALT 28 U/L, creatinine 70 umol/L and uric acid 410 umol/L.",
        prompt: "Which of the following findings best confirms the diagnosis under consideration, using ISSHP 2021 criteria?",
        options: ["BP rise to 142/92 mmHg", "PCR rise to 190 mg/mmol", "Platelets of 132 x 10^9/L", "Reflexes of 3+ bilaterally", "Uric acid of 410 umol/L"],
        correct: 2,
        explanation:
          "ISSHP diagnoses pre-eclampsia superimposed on chronic hypertension by new proteinuria, another maternal organ dysfunction or uteroplacental dysfunction, and a platelet count below 150 x 10^9/L counts as hematologic dysfunction. Her platelets have fallen from 246 to 132 x 10^9/L. Her proteinuria was already present at 14 weeks, and ISSHP states that in proteinuric kidney disease a rise in proteinuria alone is insufficient for the diagnosis. It also advises that a rise in BP should not be used to make it. Uric acid is not a diagnostic criterion. Hyperreflexia is not one either, because it is nonspecific and common in healthy young women.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following fetal assessments is most appropriate for her now?",
        options: [
          "Amniocentesis for lung maturity",
          "Biophysical profile score",
          "Daily fetal kick counts only",
          "Fetal fibronectin swab",
          "Growth, fluid and umbilical Doppler",
        ],
        correct: 4,
        explanation:
          "ISSHP advises fetal ultrasound in pre-eclampsia to assess fetal growth, amniotic fluid volume and umbilical artery Doppler, given the shared origins of pre-eclampsia and fetal growth restriction. It advises against the biophysical profile, which can be falsely reassuring in hypertensive and growth-restricted pregnancies, and an abnormal profile is a late finding. Kick counts alone cannot measure growth or placental blood flow. Fetal fibronectin assesses preterm labour, and she has no contractions. Amniocentesis for lung maturity does not assess growth or placental function.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "isshp-2021",
      },
    ],
    sources: [S.isshp],
    ...META,
    version: 2,
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
          "Two systolic readings of 160 mmHg or more confirm severe hypertension, which needs treatment within 30 to 60 minutes. ISSHP states that antihypertensives, including nifedipine, can be used at the same time as magnesium sulfate, so there is no reason to stop magnesium. Treating only when the diastolic reaches 110 mmHg ignores the stroke risk of severe systolic pressure. ISSHP advises swallowing nifedipine whole rather than biting it or giving it sublingually. Waiting an hour delays needed treatment.",
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
    alsoTopics: ["pulmonary-edema"],
    title: "Breathless lying flat at 33 weeks",
    stem:
      "A 32-year-old woman, G1P0 at 33 weeks and 2 days, presents to the emergency department with 6 hours of chest tightness and shortness of breath that is worse lying flat. At 20 weeks her BP was 116 mmHg systolic and 70 mmHg diastolic. Her hands and face have been swelling for a week. She has no headache, visual change or abdominal pain. There are crackles at both lung bases, and reflexes are brisk without clonus. Platelets 212 x 10^9/L, creatinine 71 umol/L, AST 30 U/L and urine PCR 540 mg/mmol. The fetal heart rate is 145/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "28/minute", bp: "166/108 mmHg", o2sat: "91% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings most increase her risk of a severe maternal complication in the next 48 hours?",
        options: [
          "Age of 32 years",
          "Chest tightness and dyspnea",
          "First pregnancy",
          "Oxygen saturation of 91%",
          "Swelling of hands and face",
          "Urine PCR of 540 mg/mmol",
        ],
        select: 2,
        correct: [1, 3],
        explanation:
          "The fullPIERS model predicts fatal or life-threatening complications within 48 hours from gestational age, chest pain or dyspnea, oxygen saturation, platelet count, creatinine and AST. Her chest tightness with dyspnea and a saturation of 91% are the abnormal predictors, while her platelets, creatinine and AST are normal. Proteinuria is not part of the model, so a PCR of 540 mg/mmol does not add to her short-term risk. Being 32, in a first pregnancy and swollen are not predictors in the model.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "fullpiers",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "A chest radiograph confirms pulmonary edema. With furosemide, nitroglycerin and noninvasive ventilation her saturation is 95% and her BP is 150/96 mmHg. Magnesium sulfate is running and betamethasone 12 mg IM has been given.",
        prompt: "Which of the following investigations is most appropriate now to assess the cause of her pulmonary edema?",
        options: [
          "CT pulmonary angiography",
          "Echocardiography",
          "NT-proBNP level",
          "Repeat chest radiograph",
          "Serum uric acid",
        ],
        correct: 1,
        explanation:
          "Pre-eclampsia is the likely cause of her pulmonary edema, but peripartum cardiomyopathy and undiagnosed structural heart disease such as mitral stenosis can look the same, and each changes her fluid, drug and delivery plans. The ESC pregnancy guideline recommends transthoracic echocardiography as the first imaging test for any pregnant woman with new or unexplained cardiovascular signs or symptoms. NT-proBNP can be raised by pre-eclampsia itself and shows neither ventricular function nor valve disease. A repeat radiograph only confirms the edema already seen. Pulmonary embolism does not explain crackles with orthopnea, severe hypertension and proteinuria, so CT angiography adds radiation without answering the question. Uric acid says nothing about the heart and does not guide her care.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "esc-pregnancy-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her breathing is settling on noninvasive ventilation. Obstetrics plans her birth today once she is stable.",
        prompt: "Which of the following is the main purpose of her magnesium sulfate infusion?",
        options: [
          "Lowering her BP",
          "Preventing eclampsia",
          "Reducing her proteinuria",
          "Stopping preterm labour",
          "Treating pulmonary edema",
        ],
        correct: 1,
        explanation:
          "SOGC recommends magnesium sulfate as prophylaxis against eclampsia in severe pre-eclampsia, and pulmonary edema is a severe complication. With birth planned at 33 weeks and 2 days, magnesium also gives fetal neuroprotection, which SOGC advises up to 33 weeks and 6 days, but eclampsia prevention is the reason it is started here. SOGC advises that magnesium is not used as an antihypertensive. It does not reduce proteinuria. She is not in labour, and magnesium does not treat pulmonary edema.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-426",
      },
    ],
    sources: [S.fullpiers, S.escPreg, { ...S.sogc, url: "https://pubmed.ncbi.nlm.nih.gov/35577426/" }],
    ...META,
    version: 3,
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
          "Antiphospholipid syndrome is an ISSHP high-risk factor for pre-eclampsia, particularly severe, early-onset disease with fetal growth restriction, and lupus adds further risk. Hydroxychloroquine and low-dose ASA are treatments, and ASA lowers the risk of preterm pre-eclampsia rather than raising it. An age of 29 years is below the age thresholds that guidelines list. A single early miscarriage is not itself a listed risk factor for pre-eclampsia.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp-2021",
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
    sources: [S.isshp, S.sibai],
    ...META,
  },
  /* 36 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-36",
    topic: "pre-eclampsia",
    alsoTopics: ["gi-bleed"],
    title: "Nosebleeds and bruises at 34 weeks",
    stem:
      "A 27-year-old woman, G2P1 at 34 weeks and 3 days, presents to the emergency department with 2 days of nosebleeds and new bruises on her arms and legs. She has mild nausea but no headache, visual change or abdominal pain. Her first pregnancy was uncomplicated. At 11 weeks her BP was 102 mmHg systolic and 64 mmHg diastolic, and her platelets were 236 x 10^9/L. She takes a prenatal vitamin and no other medication, and she is eating normally. There are scattered bruises on her forearms and shins. The abdomen is soft and nontender, and reflexes are normal. The fetal heart rate is 150/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "16/minute", bp: "134/88 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important diagnosis to exclude first in her?",
        options: [
          "Gestational thrombocytopenia",
          "Hereditary bleeding disorder",
          "Immune thrombocytopenia",
          "Pre-eclampsia with HELLP",
          "Vitamin K deficiency",
        ],
        correct: 3,
        explanation:
          "New bleeding and bruising late in the third trimester can mean a falling platelet count from HELLP syndrome, which threatens mother and fetus and must be excluded first. Haram and colleagues note that hypertension and proteinuria are absent in 10 to 20% of women with HELLP. Gestational and immune thrombocytopenia are more benign causes considered after HELLP is excluded. A hereditary bleeding disorder would have shown before, including in her first pregnancy. Vitamin K deficiency is unlikely in a woman eating normally.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "haram-hellp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings is most important when interpreting her BP of 134/88 mmHg?",
        options: [
          "Bruising on the shins",
          "Fetal heart rate of 150/minute",
          "Normal reflexes",
          "Second pregnancy",
          "Systolic rise of 32 mmHg",
        ],
        correct: 4,
        explanation:
          "Her BP of 134/88 mmHg is below 140/90 mmHg, but her systolic pressure has risen by 134 - 102 = 32 mmHg from early pregnancy, which suggests pre-eclampsia is developing. Haram and colleagues note that HELLP can occur without the usual hypertension. Bruising shows a bleeding problem but not its cause. A fetal heart rate of 150/minute is normal. Normal reflexes do not exclude pre-eclampsia. A second pregnancy carries less risk than a first.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "haram-hellp",
      },
      {
        id: "q3",
        kind: "single",
        update: "Platelets 64 x 10^9/L, AST 188 U/L, ALT 162 U/L, LDH 720 U/L, bilirubin 26 umol/L, glucose 5.0 mmol/L, INR 1.0 and urine PCR 22 mg/mmol. The film shows schistocytes.",
        prompt: "Which of the following best interprets these results using the Tennessee criteria?",
        options: [
          "Complete HELLP syndrome",
          "Gestational thrombocytopenia",
          "Not HELLP as BP is under 140/90",
          "Not HELLP as PCR is under 30",
          "Partial HELLP syndrome",
        ],
        correct: 0,
        explanation:
          "The Tennessee criteria for HELLP are platelets below 100 x 10^9/L, AST of 70 U/L or more, LDH above 600 U/L and hemolysis shown on the film with a bilirubin of 1.2 mg/dL or more. Her platelets of 64 x 10^9/L, AST of 188 U/L, LDH of 720 U/L, schistocytes and bilirubin of 26 umol/L, about 1.5 mg/dL, meet all of them, so this is complete rather than partial HELLP. A low PCR or a BP under 140/90 mmHg does not exclude HELLP. Gestational thrombocytopenia does not raise liver enzymes or fragment red cells.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "haram-hellp",
      },
    ],
    sources: [S.haram],
    ...META,
    version: 2,
  },
  /* 37 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-37",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain"],
    title: "Back pain and tightening at 29 weeks",
    stem:
      "A 33-year-old woman, G3P2 at 29 weeks and 3 days, presents to the emergency department with 6 hours of lower back pain and upper abdominal tightening that she believes are contractions. Her last baby was born at 34 weeks after preterm labour. At 26 weeks her BP was 104 mmHg systolic and 64 mmHg diastolic. She has no headache, visual change, dysuria, vaginal bleeding or leakage of fluid. The uterus is soft between mild contractions every 8 to 10 minutes. There is epigastric tenderness. Reflexes are 3+ without clonus. The fetal heart rate is 150/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "98/minute", resp: "18/minute", bp: "142/90 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests a cause other than preterm labour for her pain?",
        options: [
          "Back pain with the tightening",
          "Contractions every 8 to 10 minutes",
          "Epigastric tenderness",
          "Previous preterm birth at 34 weeks",
          "Soft uterus between contractions",
        ],
        correct: 2,
        explanation:
          "Epigastric or right upper quadrant pain and tenderness is a typical presenting feature of HELLP syndrome, and here it comes with 3+ reflexes and a BP of 142/90 mmHg against a baseline of 104/64 mmHg. Preterm labour does not cause epigastric tenderness. Back pain with tightening, regular contractions, a soft uterus between them and a previous preterm birth all fit preterm labour and do not point elsewhere, so they could lead to tocolysis while HELLP is missed.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "acog-222",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "At 1420 and 1440 her BP is 146/94 and 148/96 mmHg. Platelets 88 x 10^9/L, AST 212 U/L, ALT 190 U/L, LDH 690 U/L, creatinine 68 umol/L, glucose 5.0 mmol/L, INR 1.0. PCR is 52 mg/mmol. The cervix is 2 cm dilated.",
        prompt: "Which of the following best describes her condition based on these results?",
        options: [
          "Fatty liver of pregnancy",
          "Gestational hypertension",
          "HELLP syndrome",
          "Preterm labour alone",
          "Pyelonephritis",
        ],
        correct: 2,
        explanation:
          "Platelets of 88 x 10^9/L, an AST of 212 U/L and an LDH of 690 U/L meet the ACOG thresholds for HELLP syndrome of platelets below 100 x 10^9/L, transaminases more than twice normal and an LDH of 600 U/L or more, on a background of pre-eclampsia with readings averaging 147/95 mmHg and a PCR of 52 mg/mmol. Fatty liver of pregnancy would bring hypoglycemia or coagulopathy, and her glucose and INR are normal. Proteinuria excludes gestational hypertension. Preterm labour alone does not explain the blood work, and she has no fever or dysuria to suggest pyelonephritis.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-222",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to her contractions?",
        options: [
          "Bed rest and a fluid bolus",
          "indomethacin 50 mg PO",
          "nifedipine 20 mg PO",
          "terbutaline 0.25 mg SC",
          "No tocolytic medication",
        ],
        correct: 4,
        explanation:
          "HELLP syndrome is pre-eclampsia with severe features, which ACOG lists as a contraindication to tocolysis, because the risks of prolonging the pregnancy outweigh those of preterm birth and delivery is the treatment. Indomethacin is also an NSAID that impairs platelet and kidney function, which matters with platelets of 88 x 10^9/L. Nifedipine and terbutaline act on BP and heart rate. Bed rest and hydration have not been shown to prevent preterm birth, and a fluid bolus risks pulmonary edema in pre-eclampsia. Her care now centres on magnesium sulfate, betamethasone and planned birth.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-171",
      },
    ],
    sources: [S.acog222, S.acog171],
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
          "Persistent confusion after a crash, possibly caused by a seizure, needs a noncontrast CT head to exclude traumatic bleeding and intracranial complications of eclampsia such as hemorrhage. ACOG advises that CT radiation is far below the dose linked to fetal harm and that a needed CT should not be withheld. Gadolinium is limited in pregnancy to cases where it clearly improves care, and MRI takes longer. Lumbar puncture is unsafe before imaging. An EEG is not needed for a seizure with a clear cause, and a drug screen does not look for bleeding.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "acog-723",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Magnesium sulfate and labetalol are running. An hour later she is alert, her BP is 148/96 mmHg and the fetal tracing is normal. The fetus is cephalic, she is contracting every 4 minutes and the cervix is 5 cm dilated.",
        prompt: "Which of the following is the most appropriate plan for her delivery?",
        options: [
          "Allow labour to continue vaginally",
          "Delay delivery 48 hours for steroids",
          "Expectant care to 37 weeks",
          "Immediate caesarean delivery",
          "Tocolysis to stop labour",
        ],
        correct: 0,
        explanation:
          "ACOG states that eclampsia by itself is not an indication for caesarean delivery. Once the mother is stable, the route depends on gestational age, presentation and the cervix, and a woman progressing in labour can continue labour after an eclamptic seizure. She is alert with controlled BP, a cephalic fetus, a normal tracing and a cervix at 5 cm, so vaginal birth with magnesium continuing is appropriate. Eclampsia calls for timely delivery, so tocolysis, a 48-hour delay for steroids or expectant care to 37 weeks are all wrong.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-222",
      },
    ],
    sources: [S.acog222, S.acog723],
    ...META,
  },
];
