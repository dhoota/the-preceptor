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
      "You are working at a nursing station in a fly-in community in northern Ontario. Blood samples go out on the scheduled flight, and results take about 24 hours. A 24-year-old woman, G3P2 at 31 weeks and 5 days, presents with 2 days of body aches, fatigue and nausea. She has vomited twice today and has a dull ache under her right ribs. She has no dysuria or urinary frequency. Three people in her household have had influenza this week. Her two earlier pregnancies were normotensive. At 20 weeks her BP was 104 mmHg systolic and 66 mmHg diastolic. She takes a prenatal vitamin.\n\nShe has epigastric and right upper quadrant tenderness without guarding. The uterus is soft and nontender. Reflexes are 3+ without clonus. The fetal heart rate is 144/minute by Doppler. Urine dipstick shows 2+ protein. Capillary glucose is 5.2 mmol/L.",
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
          "No blood results will be available for about 24 hours. The obstetrician on call at the referral centre asks how you plan to proceed.",
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
          "You give magnesium sulfate 4 g IV over 20 minutes by syringe. The station has no infusion pump, and she will be at the station for at least the next 3 hours.",
        prompt: "Which of the following is the most appropriate way to continue magnesium sulfate over the next few hours?",
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
          "Obstetrics plans birth within 24 hours, once she is stable. Magnesium sulfate and labetalol have been started, and she is waiting in the emergency department for the obstetric team.",
        prompt: "Which of the following is the most appropriate fetal assessment while she waits?",
        options: [
          "Continuous fetal heart rate tracing",
          "Doppler heart rate every 4 hours",
          "Fetal movement counts",
          "Ultrasound biophysical profile tomorrow",
          "No fetal assessment until birth",
        ],
        correct: 0,
        explanation:
          "NICE advises cardiotocography at the diagnosis of pre-eclampsia and again when there is abdominal pain or the mother's condition worsens. She has new HELLP syndrome, ongoing pain and a magnesium infusion at 32 weeks, so the tracing continues while she waits. HELLP can bring sudden fetal compromise or placental abruption, which a Doppler check every 4 hours would miss for hours. Fetal movement counts are a tool for outpatients and depend on her attention while she is unwell. A biophysical profile tomorrow comes too late when birth is planned within 24 hours. A viable fetus at 32 weeks needs surveillance, so no assessment until birth is unsafe.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "nice-ng133",
      },
    ],
    sources: [S.nice, S.simerville, S.tamir],
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
        prompt: "Which of the following findings establishes the diagnosis despite her protein-creatinine ratio of 18 mg/mmol?",
        options: [
          "Ankle clonus with confusion",
          "Family history of bipolar disorder",
          "Heart rate of 104/minute",
          "Normal platelets and liver enzymes",
          "Vaginal birth 6 days ago",
        ],
        correct: 0,
        explanation:
          "Proteinuria is not required for pre-eclampsia. NICE defines it as new hypertension after 20 weeks with proteinuria or another maternal organ problem, and neurological complications such as altered mental status and clonus qualify on their own. Her ratio of 18 mg/mmol is below the 30 mg/mmol threshold, but confusion and clonus with a new BP of 156/102 mmHg still meet the definition. A family history of bipolar disorder raises the risk of postpartum psychosis but does not establish any diagnosis. A heart rate of 104/minute is nonspecific. Normal platelets and liver enzymes exclude HELLP but do not confirm pre-eclampsia. Pre-eclampsia can first appear up to 6 weeks after birth, so the timing of her birth neither establishes nor excludes it.",
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
          "Her confusion is a new cerebral disturbance, which ACOG counts as a severe feature of pre-eclampsia, so she needs magnesium sulfate to prevent eclampsia although her BP is below 160/110 mmHg. ACOG gives it after birth as before it, as a 4 to 6 g IV load over about 20 minutes and then 1 to 2 g/hour. A 4 g load is the usual first dose. Sedation is not needed unless her agitation threatens her safety. Droperidol, haloperidol and olanzapine would sedate her and cloud the neurological examination that tracks her response, and they do not prevent eclamptic seizures. Benzodiazepines such as lorazepam are less effective than magnesium sulfate against eclamptic seizures. Her BP still needs treatment.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "acog-222",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Her confusion clears over 12 hours. Her BP stays near 150/100 mmHg. She wishes to keep breastfeeding.",
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

  /* 42 Facial swelling blamed on a seafood dinner ------------------------- */
  {
    id: "pre-eclampsia-42",
    topic: "pre-eclampsia",
    alsoTopics: ["anaphylaxis"],
    title: "Swollen face after a seafood dinner",
    stem:
      "A 33-year-old woman, G1P0 at 36 weeks and 2 days, presents to the emergency department with swelling of her face and hands that has built up over 2 days. She ate shrimp at a restaurant last night and is worried about an allergy. She has eaten shellfish before without a problem. She has no itch, rash, throat tightness, wheeze or vomiting. She has had a mild headache since this morning. She takes no medications and has never had angioedema. At 20 weeks her BP was 110 mmHg systolic and 70 mmHg diastolic.\n\nHer eyelids and face are puffy, with pitting edema of the hands and shins. Her lips and tongue are normal, the chest is clear and there are no hives. Reflexes are 3+. The fetal heart rate is 140/minute. The triage nurse has drawn up epinephrine and asks you to sign the order.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "156/102 mmHg", o2sat: "99% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the swelling of her face and hands?",
        options: [
          "Acute glomerulonephritis",
          "Allergic reaction to shrimp",
          "Hereditary angioedema",
          "Normal pregnancy edema",
          "Pre-eclampsia",
        ],
        correct: 4,
        explanation:
          "Her BP has risen from 110/70 mmHg at 20 weeks to 156/102 mmHg, and she has a headache and brisk reflexes at 36 weeks, so pre-eclampsia is the most likely cause. NICE lists sudden swelling of the face, hands or feet among its symptoms. The swelling began a day before the shrimp, and she has no itch, hives, wheeze or throat symptoms, so an allergic reaction is unlikely. Hereditary angioedema causes non-pitting swelling, usually with a history of attacks. Normal pregnancy edema is mostly in the legs, builds slowly and does not come with new hypertension or a headache. Glomerulonephritis is possible but far less common than pre-eclampsia at this stage of pregnancy.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "nice-ng133",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests is the most useful to send now?",
        options: [
          "Complement C4 level",
          "Serum mast cell tryptase",
          "Shrimp-specific IgE level",
          "TSH and free T4",
          "Urine protein-creatinine ratio",
        ],
        correct: 4,
        explanation:
          "A urine protein to creatinine ratio of 30 mg/mmol or more confirms proteinuria, which with her new hypertension would establish pre-eclampsia. It is sent with platelets, creatinine and liver enzymes to look for other organ involvement. Tryptase supports a diagnosis of anaphylaxis, which nothing in her presentation suggests. A C4 level screens for hereditary angioedema, which is unlikely with pitting swelling and no past attacks. Shrimp-specific IgE does not change acute care, and she has eaten shellfish safely before. Thyroid disease is far less likely. Hypothyroid swelling is non-pitting and comes with slow reflexes, and hyperthyroidism does not cause pitting edema of the face and hands.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "nice-ng133",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Platelets 168 x 10^9/L, AST 30 U/L and creatinine 66 umol/L. Her BP is 158/104 mmHg on repeat.",
        prompt: "Which of the following medications carries the greatest risk for her now?",
        options: [
          "cetirizine 10 mg PO",
          "epinephrine 0.5 mg IM",
          "famotidine 20 mg PO",
          "labetalol 200 mg PO",
          "prednisone 50 mg PO",
        ],
        correct: 1,
        explanation:
          "Epinephrine raises BP through its alpha effect, and she most likely has pre-eclampsia, with a BP of 158/104 mmHg, so a surge would raise her risk of stroke and could reduce placental blood flow. She does not meet the World Allergy Organization criteria for anaphylaxis, which need acute skin or mucosal signs with breathing, circulatory or severe gut involvement, or sudden hypotension or airway involvement after an allergen. Her swelling built over 2 days and she has none of these. Cetirizine and famotidine are unnecessary but low risk. Oral labetalol is an appropriate treatment for her BP. A single dose of prednisone is not indicated but carries little acute risk.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "wao-2020",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Two hours later she has nausea and has vomited once. Repeat platelets are 131 x 10^9/L, AST is 88 U/L and LDH is 390 U/L.",
        prompt: "Which of the following best interprets the change in her blood results?",
        options: [
          "Evolving organ involvement",
          "Sampling or laboratory error",
          "Thrombocytopenia of pregnancy",
          "Viral gastroenteritis",
          "Viral hepatitis",
        ],
        correct: 0,
        explanation:
          "In 2 hours her platelets fell from 168 to 131 x 10^9/L and her AST rose from 30 to 88 U/L, while she developed nausea and vomiting. NICE counts platelets below 150 x 10^9/L and transaminases above 40 U/L as organ involvement, and lists progressive deterioration in liver function or platelet count among reasons for planned birth. She does not yet have HELLP, since her platelets are above 100 x 10^9/L and LDH is below 600 U/L, but the trend shows it may be developing. Gestational thrombocytopenia is a slow, mild fall without liver injury. Two values moving together with new symptoms are unlikely to be error. Gastroenteritis and hepatitis do not explain her new hypertension, headache and brisk reflexes.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "nice-ng133",
      },
    ],
    sources: [S.nice, S.wao],
    ...META,
  },

  /* 43 Night-time chest pain pathway -------------------------------------- */
  {
    id: "pre-eclampsia-43",
    topic: "pre-eclampsia",
    alsoTopics: ["chest-pain"],
    title: "Chest pain pathway at three in the morning",
    stem:
      "A 43-year-old woman, G3P2 at 34 weeks and 2 days, presents to the emergency department at 0300 with 4 hours of pressure across her lower chest and upper abdomen, with nausea. Her last birth was 12 years ago. Her two earlier pregnancies were normotensive. She smokes 10 cigarettes a day. Her BMI was 37 kg/m2 at her first prenatal visit. At 16 weeks her BP was 118 mmHg systolic and 76 mmHg diastolic. She takes a prenatal vitamin.\n\nTriage started the chest pain pathway. The ECG shows sinus tachycardia without ST changes. She is tender in the epigastrium and right upper quadrant. The chest is clear, and the calves are soft and symmetric. Reflexes are 3+. The fetal heart rate is 150/minute.",
    vitals: { temperature: "37.0°C oral", pulse: "102/minute", resp: "18/minute", bp: "152/100 mmHg", o2sat: "97% on room air", weight: "98 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for her pain?",
        options: [
          "Acute coronary syndrome",
          "Acute pericarditis",
          "Biliary colic",
          "Gastroesophageal reflux",
          "Pre-eclampsia",
        ],
        correct: 4,
        explanation:
          "Epigastric and right upper quadrant tenderness with nausea, a BP that has risen from 118/76 mmHg at 16 weeks to 152/100 mmHg, and brisk reflexes at 34 weeks point to pre-eclampsia with liver involvement. Pain under the ribs is easily read as cardiac in a 43-year-old smoker. An ECG without ST changes does not support acute coronary syndrome, and it would not explain the new hypertension or brisk reflexes. Pericarditis gives pleuritic, positional pain, often with ECG changes. Reflux and biliary colic can cause this pain, but neither explains the rise in BP.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "nice-ng133",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features of her history increase her risk of pre-eclampsia?",
        options: [
          "Age of 43 years",
          "BMI of 37 kg/m2",
          "Pregnancy interval of 12 years",
          "Prenatal vitamin use",
          "Smoking 10 cigarettes a day",
          "Two earlier normotensive births",
        ],
        correct: [0, 1, 2],
        explanation:
          "NICE lists age of 40 years or older, a pregnancy interval of more than 10 years and a BMI of 35 kg/m2 or more at the first visit as moderate risk factors for pre-eclampsia, and she has all three. Smoking harms the pregnancy in many ways, but a systematic review of nearly 834 000 women found it linked with a lower risk of pre-eclampsia, with a relative risk of about 0.68, so it does not add to her risk. Two earlier normotensive births lower her risk compared with a first pregnancy. Prenatal vitamins do not raise the risk.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "conde-agudelo-smoking",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Troponin is below the reference limit. Hemoglobin 108 g/L, platelets 84 x 10^9/L, AST 264 U/L, ALT 221 U/L, LDH 780 U/L, haptoglobin below the detection limit, creatinine 74 umol/L, glucose 4.9 mmol/L and INR 1.0.",
        prompt: "Which of the following is the most likely diagnosis given these results?",
        options: [
          "Acute cholecystitis",
          "Autoimmune hepatitis",
          "HELLP syndrome",
          "Myocardial infarction",
          "Viral hepatitis",
        ],
        correct: 2,
        explanation:
          "Platelets of 84 x 10^9/L, an AST of 264 U/L and an LDH of 780 U/L with undetectable haptoglobin show hemolysis, liver injury and a low platelet count, which in a woman with new hypertension at 34 weeks is HELLP syndrome. ACOG uses an LDH of 600 U/L or more, transaminases more than twice normal and platelets below 100 x 10^9/L. A normal troponin and ECG argue against myocardial infarction. Cholecystitis and viral or autoimmune hepatitis do not cause hemolysis with a low platelet count, and none explains her new hypertension. A normal glucose and INR argue against acute fatty liver of pregnancy.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "acog-222",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "The chest pain order set generated the medication orders below before the results returned. None has been given. Obstetrics plans birth today.",
        prompt: "Which of the following ordered medications is most important to cancel now?",
        options: [
          "acetaminophen 1 g PO",
          "enoxaparin 100 mg SC",
          "morphine 2.5 mg IV",
          "nitroglycerin 0.4 mg SL",
          "ondansetron 4 mg IV",
        ],
        correct: 1,
        explanation:
          "Enoxaparin 100 mg SC is a therapeutic dose of about 1 mg/kg for her 98 kg, ordered for an acute coronary syndrome she does not have. With HELLP and platelets of 84 x 10^9/L it adds bleeding risk at the liver and at surgery. The SOAP consensus advises waiting at least 24 hours after a therapeutic dose before neuraxial anesthesia, so it could force general anesthesia for a caesarean today. Nitroglycerin is not needed without ischemia, but it is a short-acting drug that would not block neuraxial anesthesia. Morphine, ondansetron and acetaminophen are reasonable for her pain and nausea.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "soap-anticoagulants",
      },
    ],
    sources: [S.nice, S.conde, S.acog222, S.leffert],
    ...META,
  },
];
