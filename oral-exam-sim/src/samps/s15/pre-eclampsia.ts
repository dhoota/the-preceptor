// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  sogc: {
    id: "sogc-hdp",
    citation:
      "Magee LA, Smith GN, Bloch C, et al. Guideline No. 426: Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022.",
  },
  isshp: {
    id: "isshp",
    citation:
      "Magee LA, Brown MA, Hall DR, et al. The 2021 International Society for the Study of Hypertension in Pregnancy classification, diagnosis and management recommendations for international practice. Pregnancy Hypertens. 2022.",
  },
  acog: {
    id: "acog-222",
    citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 222. Gestational hypertension and preeclampsia. Obstet Gynecol. 2020.",
  },
  eclampsiaTrial: {
    id: "eclampsia-trial",
    citation: "Eclampsia Trial Collaborative Group. Which anticonvulsant for women with eclampsia? Evidence from the Collaborative Eclampsia Trial. Lancet. 1995.",
  },
  sogcSteroids: {
    id: "sogc-acs",
    citation: "Skoll A, Boutin A, Bujold E, et al. Guideline No. 364: Antenatal corticosteroid therapy for improving neonatal outcomes. J Obstet Gynaecol Can. 2018.",
  },
  sibai: {
    id: "sibai-hellp",
    citation:
      "Sibai BM. Diagnosis, controversies, and management of the syndrome of hemolysis, elevated liver enzymes, and low platelet count. Obstet Gynecol. 2004.",
  },
  sogcGtd: {
    id: "sogc-gtd",
    citation: "Eiriksson L, Dean E, Sebastianelli A, et al. Guideline No. 408: Management of gestational trophoblastic diseases. J Obstet Gynaecol Can. 2021.",
  },
  tintinalli: {
    id: "tintinalli",
    citation:
      "Tintinalli JE, Ma OJ, Yealy DM, Meckler GD, Stapczynski JS, Cline DM, Thomas SH, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. Chapter 100, Maternal Emergencies After 20 Weeks of Pregnancy and in the Peripartum Period.",
  },
  rosen: {
    id: "rosen",
    citation:
      "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapters on acute complications of pregnancy, headache and seizures.",
  },
} satisfies Record<string, Source>;

/* Reusable match phrase sets ------------------------------------------- */

const MG_LOAD = ["magnesium 4 g", "magnesium 4g", "magnesium 4 gram", "mgso4 4 g", "mgso4 4g", "mag 4 g", "mag 4g", "mg 4 g"];
const LAB_IV = ["labetalol 20 mg", "labetalol 20mg"];
const LAB_PO = ["labetalol 200 mg", "labetalol 200mg"];
const NIF_IR = ["nifedipine 10 mg", "nifedipine 10mg", "nifedipine 20 mg", "nifedipine 20mg"];
const HYD_IV = ["hydralazine 5 mg", "hydralazine 5mg", "hydralazine 10 mg", "hydralazine 10mg"];
const BETA = ["betamethasone 12 mg", "betamethasone 12mg", "dexamethasone 6 mg", "dexamethasone 6mg"];

export const PRE_ECLAMPSIA_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-01",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Headache late in pregnancy",
    stem:
      "A 29-year-old G2P1 at 36 weeks and 2 days presents with 2 days of bifrontal headache that has not settled with acetaminophen. She denies visual change. Her blood pressure at the 20-week prenatal visit was 104/62 mmHg. Her BP is 136/86 mmHg when repeated 15 minutes after triage. Her neurological examination is normal. The triage nurse suggests a migraine cocktail and discharge because her blood pressure is below 140/90 mmHg.",
    vitals: { temperature: "36.8°C", pulse: "92/minute", resp: "16/minute", bp: "138/88 mmHg", o2sat: "98% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What features of this presentation keep pre-eclampsia on the differential despite a blood pressure below 140/90 mmHg?",
        accept: [
          { id: "rise", text: "Blood pressure has risen substantially from her baseline", match: ["baseline", "rise"] },
          { id: "ha", text: "New persistent headache that does not respond to analgesia", match: ["headache"] },
          { id: "ga", text: "Gestation beyond 20 weeks, in the third trimester", match: ["20 week", "third trimester", "36 week", "late pregnancy", "gestational age"] },
        ],
        unacceptable: [{ text: "Normal neurological examination", match: ["normal neuro"] }],
        explanation:
          "Pre-eclampsia can present with symptoms before the BP crosses 140/90. A large rise from an early pregnancy baseline is a warning sign. A new headache unresponsive to analgesia after 20 weeks is an adverse condition that needs a workup, not a migraine label.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 4,
        prompt: "What investigations would you order now to assess for pre-eclampsia?",
        accept: [
          { id: "cbc", text: "CBC with platelet count", match: ["cbc", "platelet"] },
          { id: "cr", text: "Serum creatinine", match: ["creatinine"] },
          { id: "lft", text: "AST and ALT", match: ["ast", "alt", "liver enzyme", "liver function", "lft", "transaminase"] },
          { id: "ldh", text: "LDH", match: ["ldh"] },
          { id: "pcr", text: "Urine protein to creatinine ratio", match: ["urine protein", "dipstick", "pcr", "upcr", "protein creatinine", "proteinuria", "urinalysis"] },
          { id: "smear", text: "Blood film for schistocytes", match: ["film"] },
          { id: "bili", text: "Bilirubin", match: ["bilirubin"] },
          { id: "uric", text: "Uric acid", match: ["uric"] },
          { id: "coag", text: "INR and PTT", match: ["inr", "ptt", "coagulation"] },
          { id: "plgf", text: "PlGF based testing such as the sFlt 1 to PlGF ratio, where available", match: ["plgf"] },
          { id: "nst", text: "Fetal heart rate monitoring or nonstress test", match: ["fetal"] },
        ],
        unacceptable: [{ text: "24 hour urine collection before any decision", match: ["24 hour urine"] }],
        explanation:
          "SOGC recommends CBC, creatinine, liver enzymes, LDH and a urine protein assessment for suspected pre-eclampsia, with a film and bilirubin if hemolysis is possible. A spot urine protein to creatinine ratio of 30 mg/mmol or more is equivalent to significant proteinuria. Waiting 24 hours for a urine collection delays the decision.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Urine protein to creatinine ratio 52 mg/mmol. Platelets 142 x 10^9/L, AST 38 U/L, creatinine 64 micromol/L. Repeat BP 142/92. Her headache persists. The fetal heart rate tracing is normal.",
        prompt: "Which of the following is the most appropriate disposition for this patient?",
        options: [
          "Admit to internal medicine for BP control",
          "Admit to obstetrics for maternal and fetal assessment",
          "Discharge with home BP monitoring and review in 48 hours",
          "Discharge with sumatriptan and follow-up in 1 week",
          "Outpatient CT head and reassessment in the department",
        ],
        correct: 1,
        explanation:
          "She now meets criteria for pre-eclampsia with a persistent headache, which is an adverse condition. Pre-eclampsia is managed in hospital with obstetrics, who complete the maternal and fetal assessment and decide on timing of delivery. Delivery timing depends on gestation and maternal and fetal status. Discharge risks eclampsia or HELLP at home.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q4",
        kind: "short",
        update: "While awaiting obstetrics she asks for something for her headache.",
        required: 2,
        prompt: "What medications are appropriate for her headache?",
        accept: [
          { id: "acet", text: "Acetaminophen", match: ["acetaminophen"] },
          { id: "meto", text: "Metoclopramide IV", match: ["metoclopramide"] },
          { id: "prochlor", text: "Prochlorperazine", match: ["prochlorperazine"] },
          { id: "dimen", text: "Dimenhydrinate or diphenhydramine as an adjunct", match: ["dimenhydrinate", "diphenhydramine"] },
          { id: "opioid", text: "A short course of an opioid such as morphine or hydromorphone", match: ["morphine", "hydromorphone"] },
          { id: "bp", text: "Treat the BP if it becomes severe, since the headache is likely from pre-eclampsia", match: ["treat bp"] },
          { id: "mg", text: "Magnesium sulfate, which also treats the pre-eclampsia", match: ["magnesium"] },
        ],
        unacceptable: [
          { text: "Ergotamine or dihydroergotamine", match: ["ergot", "ergotamine"], dangerous: true },
          { text: "Dihydroergotamine", match: ["dihydroergotamine"], dangerous: true },
          { text: "DHE", match: ["dhe"], dangerous: true },
          { text: "NSAIDs such as ketorolac or ibuprofen after 20 weeks", match: ["ketorolac"] },
          { text: "Ibuprofen", match: ["ibuprofen"] },
          { text: "Naproxen", match: ["naproxen"] },
          { text: "NSAID", match: ["nsaid"] },
        ],
        explanation:
          "Acetaminophen, metoclopramide or prochlorperazine and a short opioid course are reasonable in late pregnancy. NSAIDs are avoided after 20 weeks because of fetal renal and ductal effects. Ergot derivatives are contraindicated because they cause uterine contraction and vasoconstriction.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "rosen",
      },
    ],
    sources: [S.sogc, S.rosen],
    ...META,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-02",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain"],
    title: "Epigastric pain at 33 weeks",
    stem:
      "A 31-year-old primigravida at 33 weeks and 4 days has had 6 hours of epigastric and right upper quadrant pain with nausea and 2 episodes of vomiting. A walk-in clinic gave her an antacid yesterday. She is tender in the epigastrium and right upper quadrant without peritonism. Fetal heart rate is 140/minute.",
    vitals: { temperature: "36.9°C", pulse: "98/minute", resp: "18/minute", bp: "148/96 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What diagnoses must you consider?",
        accept: [
          { id: "hellp", text: "HELLP syndrome", match: ["hellp"] },
          { id: "pet", text: "Pre-eclampsia with liver involvement", match: ["pre eclampsia", "preeclampsia"] },
          { id: "aflp", text: "Acute fatty liver of pregnancy", match: ["fatty liver", "aflp"] },
          { id: "chole", text: "Cholecystitis or biliary colic", match: ["cholecystitis", "biliary", "gallstone", "cholangitis"] },
          { id: "panc", text: "Pancreatitis", match: ["pancreatitis"] },
          { id: "appy", text: "Appendicitis", match: ["appendicitis"] },
          { id: "abrupt", text: "Placental abruption", match: ["abruption"] },
          { id: "hematoma", text: "Subcapsular liver hematoma", match: ["hematoma"] },
          { id: "pyelo", text: "Pyelonephritis", match: ["pyelonephritis"] },
          { id: "hepatitis", text: "Viral hepatitis", match: ["hepatitis"] },
        ],
        unacceptable: [{ text: "Gastroesophageal reflux as the working diagnosis", match: ["reflux"] }, { text: "GERD", match: ["gerd"] }],
        explanation:
          "Epigastric or right upper quadrant pain with nausea after 20 weeks is HELLP until proven otherwise. Reflux is a diagnosis of exclusion here. Acute fatty liver, biliary disease and pancreatitis are the main mimics.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 4,
        prompt: "What blood tests will confirm or exclude your leading diagnosis?",
        accept: [
          { id: "cbc", text: "CBC", match: ["cbc", "platelet"] },
          { id: "ast", text: "AST", match: ["ast"] },
          { id: "alt", text: "ALT", match: ["alt"] },
          { id: "ldh", text: "LDH", match: ["ldh"] },
          { id: "bili", text: "Bilirubin", match: ["bilirubin"] },
          { id: "hapto", text: "Haptoglobin", match: ["haptoglobin"] },
          { id: "film", text: "Blood film for schistocytes", match: ["film", "schistocyte"] },
          { id: "cr", text: "Creatinine", match: ["creatinine"] },
          { id: "coag", text: "INR and fibrinogen", match: ["inr"] },
          { id: "fib", text: "Fibrinogen", match: ["fibrinogen"] },
          { id: "gluc", text: "Glucose", match: ["glucose"] },
          { id: "lipase", text: "Lipase", match: ["lipase"] },
        ],
        explanation:
          "HELLP is defined by hemolysis (raised LDH, low haptoglobin, schistocytes, raised bilirubin), raised transaminases and platelets below 100 x 10^9/L. Glucose, INR and creatinine help separate acute fatty liver of pregnancy. Lipase screens for pancreatitis.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "Hb 104 g/L, platelets 68 x 10^9/L, AST 212 U/L, ALT 180 U/L, LDH 780 U/L, bilirubin 28 micromol/L, creatinine 72 micromol/L, glucose 5.1 mmol/L, INR 1.0. Urine protein to creatinine ratio 90 mg/mmol. Repeat BP 152/98.",
        prompt: "Which of the following medications are most appropriate to give her now?",
        options: [
          "Betamethasone 6 mg IM once",
          "Betamethasone 12 mg IM, repeated in 24 hours",
          "Dexamethasone 10 mg IV every 12 hours",
          "Enoxaparin 40 mg subcutaneous daily",
          "Ketorolac 30 mg IV",
          "Magnesium sulfate 2 g IV load then 0.5 g/h",
          "Magnesium sulfate 4 g IV load then 1 g/h",
          "Phenytoin 20 mg/kg IV",
          "Platelet transfusion 1 adult dose",
        ],
        select: 2,
        correct: [6, 1],
        explanation:
          "HELLP is a severe form of pre-eclampsia and warrants magnesium sulfate for seizure prophylaxis. At 33 weeks, betamethasone 12 mg IM for 2 doses 24 hours apart improves neonatal outcomes if delivery can be safely delayed. Steroids to raise platelets for maternal benefit are not recommended. Platelets are not needed at 68 x 10^9/L without bleeding or a procedure.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-acs",
      },
    ],
    sources: [S.sogc, S.sibai, S.sogcSteroids],
    ...META,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-03",
    topic: "pre-eclampsia",
    alsoTopics: ["headache"],
    title: "Headache one week after delivery",
    stem:
      "A 34-year-old woman delivered vaginally 7 days ago after an uncomplicated pregnancy. She had an epidural. She presents with a severe generalized headache for 1 day and blurred vision. She is breastfeeding. Her BP is 168/112 mmHg when repeated 15 minutes later. Her SpO2 is 98%. GCS 15. No focal neurological deficit.",
    vitals: { temperature: "36.7°C", pulse: "88/minute", resp: "16/minute", bp: "172/114 mmHg", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the most likely diagnosis?",
        accept: [
          { id: "pp", text: "Postpartum pre-eclampsia with severe features", match: ["pre eclampsia", "preeclampsia", "postpartum hypertension"] },
        ],
        unacceptable: [
          { text: "Post dural puncture headache", match: ["dural puncture"] },
          { text: "Migraine", match: ["migraine"] },
          { text: "Tension headache", match: ["tension"] },
        ],
        explanation:
          "Pre-eclampsia can first appear after delivery, most often within the first week and up to 6 weeks postpartum. Severe hypertension with headache and visual symptoms fits. A post dural puncture headache is positional and does not explain a BP of 170/114.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What medications, with drug, dose and route, would you give in the next 30 minutes?",
        accept: [
          { id: "lab", text: "Labetalol 20 mg IV", match: LAB_IV },
          { id: "labpo", text: "Labetalol 200 mg PO", match: LAB_PO },
          { id: "nif", text: "Nifedipine immediate release 10 mg PO", match: NIF_IR },
          { id: "hyd", text: "Hydralazine 5 mg IV", match: HYD_IV },
          { id: "mg", text: "Magnesium sulfate 4 g IV load then 1 g/h", match: MG_LOAD },
        ],
        unacceptable: [
          { text: "Sublingual or bitten nifedipine capsule", match: ["sublingual nifedipine", "bitten nifedipine", "bite nifedipine", "chewed nifedipine", "chew nifedipine"] },
          { text: "Hydralazine 20 mg IV bolus", match: ["hydralazine 20 mg"] },
          { text: "Sumatriptan", match: ["sumatriptan"] },
          { text: "Ergot derivatives", match: ["ergot", "ergotamine"], dangerous: true },
        ],
        explanation:
          "Severe hypertension of 160/110 or higher needs treatment within 30 to 60 minutes with IV labetalol, oral immediate release nifedipine or IV hydralazine. Magnesium sulfate is indicated for pre-eclampsia with severe features, including postpartum. The antihypertensives listed are compatible with breastfeeding.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What other serious causes of severe headache must you consider in a postpartum patient?",
        accept: [
          { id: "cvst", text: "Cerebral venous sinus thrombosis", match: ["venous", "cvst"] },
          { id: "pres", text: "Posterior reversible encephalopathy syndrome", match: ["posterior reversible", "reversible encephalopathy", "posterior encephalopathy"] },
          { id: "rcvs", text: "Reversible cerebral vasoconstriction syndrome", match: ["vasoconstriction", "rcvs"] },
          { id: "sah", text: "Subarachnoid hemorrhage", match: ["subarachnoid", "sah"] },
          { id: "ich", text: "Intracerebral hemorrhage", match: ["intracerebral"] },
          { id: "stroke", text: "Ischemic stroke", match: ["stroke"] },
          { id: "pdph", text: "Post dural puncture headache", match: ["dural puncture"] },
          { id: "mening", text: "Meningitis", match: ["meningitis"] },
          { id: "pit", text: "Pituitary apoplexy", match: ["pituitary"] },
          { id: "dissect", text: "Cervical artery dissection", match: ["dissection"] },
        ],
        explanation:
          "The postpartum period is prothrombotic and has distinct vascular causes of headache. Venous sinus thrombosis, reversible vasoconstriction syndrome, PRES and hemorrhage all present with headache and may coexist with hypertension. A recent epidural adds post dural puncture headache.",
        keyFeature: { topic: "headache", n: 2 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "After 2 doses of labetalol her BP is 148/94. She is on magnesium sulfate. Her headache is improving.",
        prompt: "What findings would prompt urgent neuroimaging in this patient?",
        accept: [
          { id: "focal", text: "Focal neurological deficit", match: ["focal"] },
          { id: "loc", text: "Decreased level of consciousness or confusion", match: ["consciousness", "confusion", "altered mental status"] },
          { id: "seiz", text: "Seizure, especially despite magnesium", match: ["seizure"] },
          { id: "persist", text: "Headache that persists or worsens despite BP control", match: ["persistent", "persisting", "persists", "worsening", "worse"] },
          { id: "vision", text: "Visual loss or cortical blindness", match: ["visual loss", "blind", "blindness", "vision loss"] },
          { id: "thunder", text: "Thunderclap onset", match: ["thunderclap"] },
          { id: "papill", text: "Papilledema", match: ["papilledema"] },
        ],
        explanation:
          "Headache from postpartum pre-eclampsia should improve with BP control and magnesium. Focal signs, seizures, reduced consciousness, visual loss or a headache that persists need CT or MRI with venography. These findings suggest stroke, hemorrhage, venous thrombosis or PRES.",
        keyFeature: { topic: "headache", n: 6 },
        source: "rosen",
      },
    ],
    sources: [S.sogc, S.rosen],
    ...META,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-04",
    topic: "pre-eclampsia",
    alsoTopics: ["seizures"],
    title: "Seizure in triage at 30 weeks",
    stem:
      "A 22-year-old primigravida at 30 weeks and 1 day came in with a headache. While being triaged she has a generalized tonic clonic seizure that has lasted 90 seconds so far. Capillary glucose 5.4 mmol/L. She has no IV access yet.",
    vitals: { pulse: "120/minute", bp: "176/112 mmHg", o2sat: "88% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What immediate actions would you take while she is seizing?",
        accept: [
          { id: "lat", text: "Place her in the left lateral position to displace the uterus", match: ["left lateral", "uterine displacement", "lateral"] },
          { id: "airway", text: "Protect the airway and suction", match: ["airway", "suction"] },
          { id: "o2", text: "High flow oxygen", match: ["oxygen"] },
          { id: "iv", text: "Establish IV access", match: ["iv access"] },
          { id: "mg", text: "Give magnesium sulfate", match: ["magnesium", "mgso4"] },
          { id: "help", text: "Call obstetrics, anesthesia and neonatal teams", match: ["obstetric", "obstetrical", "obstetrician"] },
          { id: "injury", text: "Protect her from injury with padded rails", match: ["injury"] },
          { id: "mon", text: "Cardiac and oxygen saturation monitoring", match: ["monitor", "monitoring"] },
        ],
        unacceptable: [
          { text: "Force a bite block or tongue depressor into her mouth", match: ["bite block"] },
          { text: "Tongue depressor", match: ["tongue depressor"] },
          { text: "Immediate caesarean section during the seizure", match: ["immediate caesarean"] },
        ],
        explanation:
          "Most eclamptic seizures are brief and self-limited. The priorities are to prevent injury and aspiration, displace the uterus, give oxygen and start magnesium sulfate. Delivery is never done during a seizure. Stabilize the mother first.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate anticonvulsant for this patient?",
        options: [
          "Levetiracetam 60 mg/kg IV over 10 minutes",
          "Lorazepam 4 mg IV over 2 minutes, repeated once",
          "Magnesium sulfate 2 g IV load then 0.5 g/h",
          "Magnesium sulfate 4 g IV load then 1 g/h",
          "Phenytoin 20 mg/kg IV at up to 50 mg/minute",
        ],
        correct: 3,
        explanation:
          "Magnesium sulfate is the drug of choice for eclampsia. It prevents recurrent seizures better than diazepam or phenytoin. The loading dose is 4 g IV over 5 to 20 minutes, followed by 1 g/h. If IV access is delayed, 10 g IM (5 g into each buttock) is an alternative. Benzodiazepines are reserved for when magnesium is not available or seizures persist.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "eclampsia-trial",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "Her seizure stops after 2 minutes. IV access is obtained and the magnesium infusion is running. Fifteen minutes later she has a second generalized seizure.",
        prompt: "What is your next anticonvulsant step, with drug, dose and route?",
        accept: [
          {
            id: "mg2",
            text: "Additional magnesium sulfate 2 g IV over 5 minutes",
            match: ["magnesium 2 g", "magnesium 2g", "magnesium 2 gram", "mgso4 2 g", "mgso4 2g", "mag 2 g", "mag 2g", "mg 2 g"],
          },
        ],
        unacceptable: [
          { text: "Phenytoin load", match: ["phenytoin"] },
          { text: "Stop the magnesium infusion", match: ["stop magnesium"] },
        ],
        explanation:
          "Recurrent eclamptic seizure on magnesium is treated with a further 2 g IV bolus over 5 minutes. ACOG allows 2 to 4 g. If seizures continue after that, a benzodiazepine is added and the airway secured. Persistent or atypical seizures need neuroimaging.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "sogc-hdp",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update: "Seizures have stopped. She is drowsy but protecting her airway. BP 170/110. Fetal heart rate 110 bpm and recovering.",
        prompt: "What further management steps would you take in the next hour?",
        accept: [
          { id: "bp", text: "Treat the severe hypertension with IV labetalol, IV hydralazine or oral nifedipine", match: ["labetalol", "hydralazine", "nifedipine", "antihypertensive"] },
          { id: "fhr", text: "Continuous fetal heart rate monitoring", match: ["fetal"] },
          { id: "obs", text: "Urgent obstetrics consultation to plan delivery once she is stable", match: ["obstetric", "obstetrical", "obstetrician"] },
          { id: "deliv", text: "Plan delivery after maternal stabilization", match: ["delivery"] },
          { id: "steroid", text: "Betamethasone 12 mg IM for fetal lung maturity", match: ["betamethasone", "corticosteroid"] },
          { id: "labs", text: "Pre-eclampsia bloodwork including platelets, liver enzymes and creatinine", match: ["platelet", "hellp"] },
          { id: "foley", text: "Foley catheter and hourly urine output", match: ["urine output", "foley"] },
          { id: "tertiary", text: "Transfer to a centre with a level 3 NICU if not already there", match: ["nicu"] },
          { id: "mgmon", text: "Monitor reflexes and respiratory rate on magnesium", match: ["reflex", "reflexes"] },
          { id: "airway", text: "Continued airway monitoring and aspiration precautions", match: ["aspiration"] },
        ],
        unacceptable: [
          { text: "Emergency caesarean before the mother is stabilized", match: ["caesarean before"] },
          { text: "Large IV fluid bolus", match: ["fluid bolus"] },
        ],
        explanation:
          "After eclampsia, control severe BP, continue magnesium, monitor the fetus and plan delivery with obstetrics once the mother is stable. Fetal bradycardia during a seizure usually recovers and is not an indication for crash delivery. At 30 weeks, steroids and a centre with a NICU matter.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
    ],
    sources: [S.sogc, S.eclampsiaTrial],
    ...META,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-05",
    topic: "pre-eclampsia",
    alsoTopics: ["tox", "ems"],
    title: "Drowsy patient awaiting transfer",
    stem:
      "You are working in a rural emergency department. A 27-year-old at 35 weeks with pre-eclampsia with severe features has been waiting 6 hours for an obstetrical transfer. She received magnesium sulfate 4 g IV, and the pump was programmed at 2 g/h instead of the ordered 1 g/h. The nurse calls you because she is hard to rouse. Patellar reflexes are absent. Urine output has been 60 mL over 4 hours. Creatinine is 132 micromol/L, up from 70 micromol/L on arrival.",
    vitals: { pulse: "64/minute", resp: "9/minute", bp: "138/88 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What factors explain her condition?",
        accept: [
          { id: "rate", text: "Infusion running at double the intended rate", match: ["double rate", "infusion rate", "wrong rate", "2 g/h", "pump", "programming", "medication error", "overdose"] },
          { id: "renal", text: "Acute kidney injury reducing magnesium clearance", match: ["kidney", "oliguria", "urine output", "creatinine", "renal"] },
          { id: "mgtox", text: "Magnesium toxicity", match: ["magnesium toxicity", "hypermagnesemia"] },
        ],
        explanation:
          "Magnesium is cleared by the kidneys. Oliguria and a rising creatinine in severe pre-eclampsia allow levels to climb, and a double rate infusion accelerates this. Loss of reflexes, drowsiness and respiratory depression are the classic progression of toxicity.",
        keyFeature: { topic: "tox", n: 5 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What immediate actions would you take, with the dose and route of any drug?",
        accept: [
          { id: "stop", text: "Stop the magnesium infusion", match: ["stop", "hold", "discontinue", "turn off magnesium", "pause magnesium"] },
          {
            id: "ca",
            text: "Calcium gluconate 1 g IV (10 mL of 10%) over about 3 to 10 minutes",
            match: ["calcium gluconate 1 g", "calcium gluconate 1g", "calcium gluconate 10 ml", "calcium gluconate 3 g", "calcium chloride 1 g", "calcium chloride 1g", "calcium gluconate 1 gram"],
          },
          { id: "vent", text: "Support ventilation with bag valve mask as needed", match: ["bag valve", "bvm"] },
          { id: "o2", text: "Supplemental oxygen", match: ["oxygen"] },
          { id: "level", text: "Serum magnesium level", match: ["magnesium level", "serum magnesium"] },
          { id: "ecg", text: "ECG and cardiac monitoring", match: ["ecg"] },
          { id: "intub", text: "Prepare for intubation if ventilation remains inadequate", match: ["intubation", "intubate"] },
          { id: "fhr", text: "Continuous fetal monitoring", match: ["fetal"] },
        ],
        unacceptable: [
          { text: "Continue the infusion at the same rate", match: ["continue infusion"], dangerous: true },
          { text: "Naloxone as the antidote", match: ["naloxone"] },
          { text: "Flumazenil", match: ["flumazenil"] },
        ],
        explanation:
          "Stop the infusion and give IV calcium gluconate 1 g as the antagonist. Absent reflexes appear at roughly 3.5 to 5 mmol/L and respiratory depression at 5 to 6.5 mmol/L. Support ventilation until the respiratory rate recovers. Send a magnesium level and monitor the ECG for conduction delay. Naloxone and flumazenil have no role.",
        keyFeature: { topic: "tox", n: 2 },
        source: "acog-222",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "Twenty minutes after calcium she is alert, RR 16, SpO2 97%. The magnesium level returns at 5.9 mmol/L. The critical care transport team arrives.",
        prompt: "What will you arrange or hand over before she leaves?",
        accept: [
          { id: "mgplan", text: "A clear written magnesium plan, held or restarted at a reduced rate guided by level, reflexes and urine output", match: ["magnesium"] },
          { id: "ca", text: "Calcium gluconate available during transport", match: ["calcium"] },
          { id: "reflex", text: "Hourly reflexes and respiratory rate checks in transit", match: ["reflex", "reflexes"] },
          { id: "uo", text: "Foley catheter with hourly urine output", match: ["urine", "foley"] },
          { id: "bp", text: "BP monitoring and antihypertensive orders for severe BP", match: ["bp", "blood pressure"] },
          { id: "fetal", text: "Fetal heart rate assessment before departure", match: ["fetal"] },
          { id: "call", text: "Physician to physician handover to the receiving obstetrician", match: ["handover", "receiving"] },
          { id: "records", text: "Copies of records, labs and the incident details", match: ["record"] },
          { id: "airway", text: "Escort able to manage the airway", match: ["airway"] },
          { id: "incident", text: "Report the medication incident", match: ["incident"] },
          { id: "pump", text: "Infusion by pump with independent double check", match: ["double check"] },
        ],
        explanation:
          "Stabilize before transfer and send a team able to manage the airway and magnesium toxicity. The receiving team needs a clear magnesium plan, monitoring parameters and calcium on hand. The pump error is a safety incident and should be reported.",
        keyFeature: { topic: "ems", n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [S.sogc, S.acog, S.tintinalli],
    ...META,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-06",
    topic: "pre-eclampsia",
    alsoTopics: ["loc", "seizures"],
    title: "Confusion at term",
    stem:
      "A 36-year-old G3P2 at 38 weeks and 1 day is brought in by her partner with 3 hours of confusion. She moved from another province at 12 weeks and has had no prenatal care since. Her BP is 154/100 mmHg on repeat. GCS 13 (E3 V4 M6). Capillary glucose 4.8 mmol/L. No focal deficit. Fundal height is consistent with term.",
    vitals: { temperature: "37.1°C", pulse: "104/minute", resp: "18/minute", bp: "150/98 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What causes of her confusion must you consider?",
        accept: [
          { id: "ecl", text: "Eclampsia with a postictal state after an unwitnessed seizure", match: ["eclampsia", "postictal", "pre eclampsia"] },
          { id: "pres", text: "Posterior reversible encephalopathy syndrome", match: ["posterior reversible", "reversible encephalopathy", "posterior encephalopathy"] },
          { id: "ich", text: "Intracranial hemorrhage", match: ["hemorrhage", "ich"] },
          { id: "stroke", text: "Stroke", match: ["stroke"] },
          { id: "cvst", text: "Cerebral venous sinus thrombosis", match: ["venous"] },
          { id: "infect", text: "CNS infection or sepsis", match: ["meningitis", "sepsis"] },
          { id: "tox", text: "Toxic ingestion", match: ["toxic", "toxin", "ingestion", "overdose"] },
          { id: "aflp", text: "Acute fatty liver of pregnancy with encephalopathy", match: ["fatty liver"] },
          { id: "ttp", text: "Thrombotic thrombocytopenic purpura", match: ["ttp", "thrombotic"] },
          { id: "na", text: "Hyponatremia", match: ["hyponatremia"] },
        ],
        explanation:
          "Altered sensorium in late pregnancy is pre-eclampsia or eclampsia until proven otherwise, even with only moderately raised BP. An unwitnessed seizure with a postictal state is common. Intracranial hemorrhage, PRES and venous thrombosis must also be considered.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What collateral history would you seek from her partner?",
        accept: [
          { id: "seiz", text: "Any seizure activity, tongue biting or incontinence", match: ["seizure", "tongue", "incontinence"] },
          { id: "ha", text: "Preceding headache", match: ["headache"] },
          { id: "vis", text: "Visual symptoms", match: ["visual"] },
          { id: "baseline", text: "Her baseline mental status and when she was last normal", match: ["last normal", "baseline"] },
          { id: "prior", text: "Prior BP readings or pre-eclampsia in previous pregnancies", match: ["previous pregnancy", "previous pregnancies", "prior pregnancy", "prior pre eclampsia"] },
          { id: "meds", text: "Medications, substances or possible ingestion", match: ["medication", "drug"] },
          { id: "epi", text: "History of epilepsy", match: ["epilepsy"] },
          { id: "diab", text: "Diabetes or insulin use", match: ["diabetes"] },
          { id: "abd", text: "Abdominal pain or vomiting", match: ["abdominal pain"] },
          { id: "trauma", text: "Head injury or trauma", match: ["trauma"] },
          { id: "fever", text: "Fever or infectious symptoms", match: ["fever"] },
        ],
        explanation:
          "Collateral history establishes the change from baseline and may reveal an unwitnessed seizure. Headache, visual change and epigastric pain point to pre-eclampsia. Ingestions, epilepsy, diabetes and trauma are the key alternatives.",
        keyFeature: { topic: "loc", n: 3 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "menu",
        update: "Her partner found her on the bathroom floor this morning. She had bitten her tongue and was incontinent of urine.",
        prompt: "Which of the following are the most appropriate immediate management steps for this patient?",
        options: [
          "Hydralazine 20 mg IV bolus",
          "Levetiracetam 60 mg/kg IV load",
          "Lorazepam 4 mg IV, repeated once",
          "Lumbar puncture before any treatment",
          "Magnesium sulfate 1 g IV once",
          "Magnesium sulfate 4 g IV then 1 g/h",
          "Oxytocin induction started in the emergency department",
          "Phenytoin 20 mg/kg IV load",
          "Urgent obstetrical consultation for delivery once stable",
        ],
        select: 2,
        correct: [5, 8],
        explanation:
          "The history now confirms eclampsia. Magnesium sulfate prevents further seizures and is superior to phenytoin or benzodiazepines. Delivery is the definitive treatment and is planned with obstetrics after stabilization. Hydralazine at 20 mg is too large a bolus and her BP is not in the severe range.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "eclampsia-trial",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What findings would prompt urgent head CT in this patient?",
        accept: [
          { id: "focal", text: "New focal neurological deficit", match: ["focal"] },
          { id: "gcs", text: "GCS that fails to improve or falls, or persistently decreased consciousness", match: ["gcs", "consciousness"] },
          { id: "seiz", text: "Recurrent seizure despite magnesium", match: ["recurrent seizure", "despite magnesium"] },
          { id: "ha", text: "Sudden severe headache", match: ["headache"] },
          { id: "pupil", text: "Unequal pupils", match: ["pupil"] },
          { id: "vis", text: "Visual loss", match: ["visual"] },
          { id: "trauma", text: "Head injury from the fall", match: ["head injury", "head trauma"] },
          { id: "coag", text: "Low platelets or coagulopathy", match: ["platelet"] },
        ],
        explanation:
          "Uncomplicated eclampsia does not always need imaging. Focal signs, a GCS that does not recover, seizures despite magnesium or a fall with head injury raise the concern for hemorrhage. Hemorrhagic stroke is a leading cause of death in pre-eclampsia.",
        keyFeature: { topic: "loc", n: 1 },
        source: "sogc-hdp",
      },
    ],
    sources: [S.sogc, S.eclampsiaTrial, S.rosen],
    ...META,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-07",
    topic: "pre-eclampsia",
    alsoTopics: ["abdominal-pain", "shock"],
    title: "Return visit with right upper quadrant pain",
    stem:
      "A 38-year-old G2P1 at 37 weeks has known gallstones. She was seen at another emergency department yesterday for right upper quadrant pain, diagnosed with biliary colic and discharged. She returns with worse pain radiating to the right shoulder and nausea. Her baseline BP is 118/74 mmHg. Her SpO2 is 97%. Labs: Hb 98 g/L (112 g/L yesterday), platelets 61 x 10^9/L, AST 420 U/L, ALT 360 U/L, LDH 1 040 U/L, bilirubin 34 micromol/L, lipase normal, glucose 4.9 mmol/L, creatinine 88 micromol/L. Ultrasound shows gallstones without wall thickening or pericholecystic fluid.",
    vitals: { temperature: "37.0°C", pulse: "108/minute", resp: "20/minute", bp: "134/86 mmHg", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the most likely diagnosis?",
        accept: [
          { id: "hellp", text: "HELLP syndrome", match: ["hellp"] },
        ],
        unacceptable: [
          { text: "Biliary colic", match: ["biliary colic"] },
          { text: "Cholecystitis", match: ["cholecystitis"] },
          { text: "Choledocholithiasis", match: ["choledocholithiasis"] },
        ],
        explanation:
          "Hemolysis, raised liver enzymes and platelets below 100 x 10^9/L define HELLP. Gallstones are common and can be a distraction. HELLP can occur with a BP that looks nearly normal.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What features of this presentation argue against a biliary cause as the full explanation?",
        accept: [
          { id: "plt", text: "Thrombocytopenia", match: ["platelet", "thrombocytopenia"] },
          { id: "ldh", text: "Markedly raised LDH suggesting hemolysis", match: ["ldh", "hemolysis"] },
          { id: "hb", text: "Falling hemoglobin", match: ["hemoglobin", "hb"] },
          { id: "bp", text: "BP rise from her baseline", match: ["baseline"] },
          { id: "us", text: "No sonographic signs of cholecystitis", match: ["ultrasound", "sonographic", "no sonographic", "wall thickening", "no wall thickening"] },
          { id: "afeb", text: "Afebrile", match: ["afebrile"] },
          { id: "shoulder", text: "Shoulder tip pain suggesting liver capsule stretch", match: ["shoulder"] },
          { id: "ast", text: "Transaminases much higher than expected for colic", match: ["transaminase", "ast"] },
          { id: "ga", text: "Third trimester", match: ["third trimester"] },
        ],
        explanation:
          "Biliary colic does not cause thrombocytopenia, hemolysis or a falling hemoglobin. A BP rise of this size from baseline supports pre-eclampsia. The ultrasound shows incidental stones without cholecystitis.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update: "Thirty minutes later she reports sudden worsening pain. HR 132, BP 88/50. Her abdomen is more distended. Fetal heart rate 100 bpm.",
        prompt: "What complications could explain this deterioration?",
        accept: [
          { id: "liver", text: "Rupture of a subcapsular liver hematoma", match: ["liver", "hepatic", "hematoma"] },
          { id: "abrupt", text: "Placental abruption", match: ["abruption"] },
          { id: "dic", text: "Disseminated intravascular coagulation with hemorrhage", match: ["dic", "disseminated"] },
          { id: "uterine", text: "Uterine rupture", match: ["uterine rupture"] },
        ],
        explanation:
          "Hemorrhagic shock in HELLP suggests liver hematoma rupture or placental abruption, and both can trigger DIC. Tachycardia often precedes hypotension in late pregnancy because of expanded blood volume. The fetal bradycardia reflects maternal shock or abruption.",
        keyFeature: { topic: "shock", n: 1 },
        source: "sibai-hellp",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "What are your immediate management steps?",
        accept: [
          { id: "mtp", text: "Activate the massive hemorrhage protocol", match: ["massive", "mtp"] },
          { id: "blood", text: "Transfuse uncrossmatched O negative red cells", match: ["transfusion", "transfuse", "o negative"] },
          { id: "iv", text: "Two large bore IVs", match: ["large bore"] },
          { id: "surg", text: "Stat general surgery and obstetrics for laparotomy and caesarean delivery", match: ["surgery", "laparotomy", "operating room"] },
          { id: "obs", text: "Stat obstetrics", match: ["obstetric", "obstetrical", "obstetrician", "caesarean", "cesarean"] },
          { id: "lat", text: "Left uterine displacement", match: ["uterine displacement", "left lateral"] },
          { id: "coag", text: "Correct coagulopathy with platelets, plasma and fibrinogen", match: ["fibrinogen", "cryo", "platelet"] },
          { id: "txa", text: "Tranexamic acid 1 g IV", match: ["tranexamic", "txa"] },
          { id: "pocus", text: "Bedside ultrasound for free fluid", match: ["ultrasound", "fast"] },
          { id: "ir", text: "Interventional radiology for hepatic embolization", match: ["embolization"] },
        ],
        unacceptable: [{ text: "CT abdomen before surgical consultation", match: ["ct abdomen"] }],
        explanation:
          "This is a surgical and obstetrical emergency. Activate massive transfusion, displace the uterus and call surgery and obstetrics to the bedside for laparotomy and delivery. Do not send an unstable patient to CT.",
        keyFeature: { topic: "abdominal-pain", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [S.sogc, S.sibai, S.tintinalli],
    ...META,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-08",
    topic: "pre-eclampsia",
    alsoTopics: ["ems"],
    title: "Twin pregnancy in a rural department",
    stem:
      "You are working in a rural emergency department 2 hours by road from the regional centre with a level 3 NICU. A 33-year-old primigravida with a twin pregnancy conceived by IVF is at 28 weeks and 3 days. She has a mild headache. Her BP is 164/110 mmHg when repeated 15 minutes later. Her SpO2 is 98%. Urine dipstick 3+ protein. Platelets 118 x 10^9/L, AST 45 U/L, creatinine 70 micromol/L.",
    vitals: { pulse: "90/minute", resp: "16/minute", bp: "162/108 mmHg", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What are the risk factors for pre-eclampsia in this patient?",
        accept: [
          { id: "nullip", text: "Nulliparity", match: ["nulliparity", "nulliparous", "first pregnancy", "primigravida"] },
          { id: "twins", text: "Multiple gestation", match: ["multiple", "twin"] },
          { id: "ivf", text: "Assisted reproduction or IVF", match: ["ivf", "assisted"] },
        ],
        explanation:
          "Nulliparity, multiple pregnancy and assisted reproduction each increase the risk of pre-eclampsia. A structured risk assessment also asks about prior pre-eclampsia, chronic hypertension, diabetes, renal disease, antiphospholipid syndrome and obesity.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What medications, with drug, dose and route, would you give before transfer?",
        accept: [
          { id: "lab", text: "Labetalol 20 mg IV, repeated at 20 to 80 mg every 30 minutes to a maximum of 300 mg", match: LAB_IV },
          { id: "labpo", text: "Labetalol 200 mg PO", match: LAB_PO },
          { id: "nif", text: "Nifedipine immediate release 10 mg PO", match: NIF_IR },
          { id: "hyd", text: "Hydralazine 5 mg IV", match: HYD_IV },
          { id: "mg", text: "Magnesium sulfate 4 g IV load then 1 g/h", match: MG_LOAD },
          { id: "beta", text: "Betamethasone 12 mg IM", match: BETA },
        ],
        unacceptable: [
          { text: "Enalapril or other ACE inhibitor", match: ["enalapril"] },
          { text: "ACE inhibitor", match: ["ace inhibitor"] },
          { text: "Furosemide", match: ["furosemide"] },
        ],
        explanation:
          "She needs treatment of severe hypertension, magnesium sulfate for seizure prophylaxis and betamethasone for fetal lung maturity. SOGC recommends considering magnesium for fetal neuroprotection up to 33+6 weeks when preterm birth is imminent or planned. ACE inhibitors are contraindicated before delivery.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What will you arrange for a safe transfer?",
        accept: [
          { id: "accept", text: "Physician to physician acceptance by the receiving obstetrician and NICU", match: ["obstetrician", "nicu"] },
          { id: "team", text: "A critical care transport team or escort able to manage eclampsia and the airway", match: ["critical care", "escort"] },
          { id: "pump", text: "Magnesium infusion on a pump with calcium gluconate available", match: ["calcium", "pump"] },
          { id: "bp", text: "BP controlled below 160/110 before departure", match: ["bp", "blood pressure"] },
          { id: "mon", text: "Continuous maternal monitoring including oximetry", match: ["monitor", "monitoring"] },
          { id: "fetal", text: "Fetal heart rate assessment before departure", match: ["fetal"] },
          { id: "foley", text: "Foley catheter", match: ["foley"] },
          { id: "iv", text: "Two IV lines", match: ["iv line"] },
          { id: "record", text: "Copies of records and labs", match: ["record"] },
          { id: "orders", text: "Written orders for seizure and BP management en route", match: ["order"] },
          { id: "lat", text: "Transport in left lateral tilt", match: ["lateral"] },
        ],
        explanation:
          "Stabilize the mother before transport. BP should be controlled and magnesium running. The receiving obstetrician and NICU must accept. The escort needs orders and drugs for seizures, magnesium toxicity and severe BP. At 28 weeks with twins, in utero transfer is far safer than neonatal transport.",
        keyFeature: { topic: "ems", n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [S.sogc, S.tintinalli],
    ...META,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-09",
    topic: "pre-eclampsia",
    alsoTopics: ["pulmonary-edema", "sob"],
    title: "Short of breath four days after caesarean",
    stem:
      "A 40-year-old woman is 4 days after a caesarean section done at 37 weeks for pre-eclampsia. She went home yesterday on labetalol 200 mg PO three times daily. She returns with 12 hours of dyspnea and orthopnea. She has bibasilar crackles. Bedside ultrasound shows diffuse B lines, grossly normal left ventricular function and no pericardial effusion. Her legs are symmetric and nontender.",
    vitals: { temperature: "37.2°C", pulse: "118/minute", resp: "30/minute", bp: "176/108 mmHg", o2sat: "86% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What diagnoses should you consider for her dyspnea?",
        accept: [
          { id: "pe", text: "Pulmonary edema from pre-eclampsia", match: ["pulmonary edema", "hypertensive"] },
          { id: "ppcm", text: "Peripartum cardiomyopathy", match: ["peripartum", "cardiomyopathy"] },
          { id: "pte", text: "Pulmonary embolism", match: ["embolism", "pe"] },
          { id: "pna", text: "Pneumonia or aspiration", match: ["pneumonia", "aspiration"] },
          { id: "taco", text: "Fluid overload from perioperative fluids", match: ["overload"] },
          { id: "acs", text: "Myocardial ischemia or SCAD", match: ["ischemia", "dissection"] },
          { id: "sepsis", text: "Sepsis from endometritis or wound infection", match: ["sepsis"] },
        ],
        explanation:
          "Postpartum dyspnea has a broad differential. Pre-eclampsia pulmonary edema often appears after delivery as fluid mobilizes, especially after caesarean. Peripartum cardiomyopathy, pulmonary embolism and pneumonia must also be considered.",
        keyFeature: { topic: "sob", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What immediate treatments would you give, with doses where relevant?",
        accept: [
          { id: "niv", text: "Noninvasive ventilation such as CPAP or BiPAP", match: ["cpap", "noninvasive", "niv", "bipap"] },
          { id: "furo", text: "Furosemide 20 to 40 mg IV", match: ["furosemide"] },
          { id: "lab", text: "Labetalol 20 mg IV", match: LAB_IV },
          { id: "nif", text: "Nifedipine 10 mg PO", match: NIF_IR },
          { id: "hyd", text: "Hydralazine 5 mg IV", match: HYD_IV },
          { id: "ntg", text: "Nitroglycerin, sublingual or IV infusion", match: ["nitroglycerin", "nitro"] },
          { id: "o2", text: "Oxygen to SpO2 above 94%", match: ["oxygen"] },
          { id: "up", text: "Sit her upright", match: ["upright"] },
          { id: "mg", text: "Magnesium sulfate 4 g IV load then 1 g/h", match: MG_LOAD },
        ],
        unacceptable: [
          { text: "IV fluid bolus", match: ["fluid bolus"], dangerous: true },
          { text: "Morphine", match: ["morphine"] },
        ],
        explanation:
          "Treat the pulmonary edema at once with noninvasive ventilation, a loop diuretic and afterload reduction. Severe BP is treated with labetalol, nifedipine or hydralazine, and nitroglycerin is useful for pulmonary edema. She still needs magnesium for severe features. Avoid fluid boluses and restrict total intake to about 80 mL/h.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What blood tests would you order to look for HELLP and other end organ involvement?",
        accept: [
          { id: "plt", text: "Platelet count", match: ["platelet", "cbc"] },
          { id: "ast", text: "AST", match: ["ast", "alt", "liver"] },
          { id: "ldh", text: "LDH", match: ["ldh"] },
          { id: "cr", text: "Creatinine", match: ["creatinine"] },
          { id: "bili", text: "Bilirubin", match: ["bilirubin"] },
          { id: "film", text: "Blood film", match: ["film"] },
          { id: "trop", text: "Troponin", match: ["troponin"] },
          { id: "bnp", text: "BNP or NT-proBNP", match: ["bnp"] },
          { id: "coag", text: "INR and fibrinogen", match: ["inr"] },
          { id: "gas", text: "Blood gas", match: ["gas"] },
        ],
        explanation:
          "HELLP can first appear postpartum and can coexist with pulmonary edema. Platelets, transaminases, LDH and creatinine define severity. Troponin and BNP help separate pre-eclampsia pulmonary edema from cardiomyopathy or ischemia.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sogc-hdp",
      },
    ],
    sources: [S.sogc, S.tintinalli],
    ...META,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-10",
    topic: "pre-eclampsia",
    alsoTopics: ["eye"],
    title: "Patchy vision at 32 weeks",
    stem:
      "A 26-year-old G2P1 at 32 weeks and 5 days has had 2 hours of flashing lights and patchy loss of vision in both eyes. Her BP is 166/110 mmHg when repeated 15 minutes later. Her SpO2 is 97%. Visual acuity is counting fingers in both eyes. Pupils react briskly to light. Fundoscopy is normal. Labs: platelets 96 x 10^9/L, AST 80 U/L, creatinine 90 micromol/L, urine protein to creatinine ratio 110 mg/mmol.",
    vitals: { pulse: "96/minute", resp: "16/minute", bp: "164/112 mmHg", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What elements of the eye and neurological assessment would you document?",
        accept: [
          { id: "va", text: "Visual acuity in each eye", match: ["acuity"] },
          { id: "fields", text: "Visual fields by confrontation", match: ["field"] },
          { id: "pupils", text: "Pupil reactions including a relative afferent pupillary defect", match: ["pupil", "rapd"] },
          { id: "fundo", text: "Fundoscopy for retinal detachment, hemorrhage or papilledema", match: ["fundoscopy", "fundus", "retinal detachment"] },
          { id: "eom", text: "Extraocular movements", match: ["extraocular"] },
          { id: "gcs", text: "Level of consciousness and GCS", match: ["gcs"] },
          { id: "focal", text: "Focal motor or sensory deficits", match: ["focal"] },
          { id: "reflex", text: "Deep tendon reflexes and clonus", match: ["reflex", "reflexes", "clonus"] },
        ],
        explanation:
          "Visual symptoms in pre-eclampsia range from scotomata to cortical blindness and serous retinal detachment. Acuity, fields, pupils and fundoscopy separate a retinal cause from an occipital one. Brisk pupils with a normal fundus and poor vision point to cortical blindness.",
        keyFeature: { topic: "eye", n: 3 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following treatments are most appropriate to give now?",
        options: [
          "Enalapril 10 mg PO",
          "Furosemide 40 mg IV",
          "Hydralazine 20 mg IV bolus",
          "Labetalol 20 mg IV",
          "Labetalol 200 mg IV",
          "Magnesium sulfate 1 g IV then 1 g/h",
          "Magnesium sulfate 4 g IV then 1 g/h",
          "Mannitol 1 g/kg IV",
          "Nifedipine 10 mg capsule bitten sublingually",
          "Sodium nitroprusside infusion",
        ],
        select: 2,
        correct: [3, 6],
        explanation:
          "Labetalol 20 mg IV is the correct starting dose, repeated at 20 to 80 mg every 30 minutes up to 300 mg. Magnesium sulfate 4 g IV then 1 g/h prevents eclampsia. Hydralazine 20 mg and a bitten nifedipine capsule risk abrupt hypotension and fetal compromise. ACE inhibitors are contraindicated before delivery.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What findings in this patient indicate severe pre-eclampsia or its complications?",
        accept: [
          { id: "bp", text: "Severe hypertension of 160/110 or higher", match: ["160/110", "severe hypertension", "164/112"] },
          { id: "vis", text: "Visual disturbance or cortical blindness", match: ["visual", "blind"] },
          { id: "plt", text: "Platelets below 100 x 10^9/L", match: ["platelet", "thrombocytopenia"] },
          { id: "ast", text: "Raised AST", match: ["ast", "transaminase"] },
          { id: "cr", text: "Creatinine above normal for pregnancy", match: ["creatinine"] },
        ],
        unacceptable: [{ text: "The amount of proteinuria as a marker of severity", match: ["proteinuria"] }],
        explanation:
          "Severe BP, visual disturbance, thrombocytopenia, raised AST and a creatinine of 90 micromol/L are all adverse features. ISSHP counts a creatinine of 90 micromol/L or more as kidney involvement. The amount of proteinuria no longer defines severity. Cortical blindness is a severe complication, so delivery is indicated once she is stable.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp",
      },
    ],
    sources: [S.sogc, S.isshp, S.rosen],
    ...META,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-11",
    topic: "pre-eclampsia",
    title: "Office blood pressure referral at 26 weeks",
    stem:
      "A 37-year-old G3P2 at 26 weeks is sent in by her family physician for a BP of 152/98 mmHg and new ankle swelling. She has chronic hypertension on nifedipine XL 30 mg daily and type 2 diabetes on insulin. BMI 38. She has no symptoms. Her BP is 148/94 mmHg on repeat. Urine dipstick 1+ protein. Fetal heart rate 145/minute.",
    vitals: { pulse: "86/minute", bp: "150/96 mmHg", weight: "112 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What are the risk factors for pre-eclampsia in this patient?",
        accept: [
          { id: "htn", text: "Chronic hypertension", match: ["chronic hypertension", "hypertension"] },
          { id: "dm", text: "Pre-existing diabetes", match: ["diabetes"] },
          { id: "bmi", text: "Obesity with BMI over 30", match: ["obesity", "obese", "bmi"] },
          { id: "age", text: "Maternal age over 35", match: ["age"] },
        ],
        explanation:
          "Chronic hypertension and pre-existing diabetes are strong risk factors. Obesity and maternal age add risk. She should have been on low dose aspirin at bedtime from before 16 weeks.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "What findings would establish superimposed pre-eclampsia in this patient?",
        accept: [
          { id: "prot", text: "New proteinuria with protein to creatinine ratio of 30 mg/mmol or more", match: ["proteinuria", "protein creatinine"] },
          { id: "plt", text: "Platelets below 100 x 10^9/L", match: ["platelet"] },
          { id: "liver", text: "Raised transaminases", match: ["transaminase", "ast"] },
          { id: "cr", text: "Raised creatinine", match: ["creatinine"] },
          { id: "ha", text: "New headache or visual symptoms", match: ["headache"] },
          { id: "vis", text: "Visual symptoms", match: ["visual"] },
          { id: "ruq", text: "Right upper quadrant or epigastric pain", match: ["epigastric", "ruq"] },
          { id: "fgr", text: "Fetal growth restriction", match: ["growth restriction", "fgr"] },
          { id: "doppler", text: "Abnormal umbilical artery Doppler", match: ["doppler"] },
          { id: "pulm", text: "Pulmonary edema", match: ["pulmonary edema"] },
          { id: "ldh", text: "Raised LDH", match: ["ldh"] },
          { id: "sat", text: "SpO2 below 97%", match: ["spo2"] },
        ],
        unacceptable: [{ text: "Peripheral edema", match: ["ankle"] }, { text: "Edema alone", match: ["edema alone"] }],
        explanation:
          "Superimposed pre-eclampsia is chronic hypertension plus new proteinuria or new maternal end organ or uteroplacental dysfunction. Edema is common in normal pregnancy and is not a diagnostic criterion. A higher BP alone does not make the diagnosis.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "isshp",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her urine dipstick shows 1+ protein.",
        prompt: "Which of the following is the most appropriate next step in assessing her proteinuria?",
        options: [
          "Diagnose superimposed pre-eclampsia",
          "Disregard the dipstick result",
          "Repeat the dipstick at the next prenatal visit",
          "Send a spot urine protein to creatinine ratio",
          "Start a 24-hour urine collection before deciding",
        ],
        correct: 3,
        explanation:
          "A dipstick of 1+ is a screen, not a diagnosis. SOGC recommends quantifying with a spot urine protein to creatinine ratio, where 30 mg/mmol or more is significant. A 24-hour collection is slower and adds little in the emergency department. Disregarding the dipstick is wrong because a positive screen still needs quantifying.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-hdp",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update:
          "Protein to creatinine ratio 18 mg/mmol. Platelets 210 x 10^9/L, AST 22 U/L, creatinine 58 micromol/L. Obstetrics sees her, increases her nifedipine XL to 60 mg daily and arranges review in 3 days.",
        prompt: "What symptoms should prompt her to return immediately?",
        accept: [
          { id: "ha", text: "Severe or persistent headache", match: ["headache"] },
          { id: "vis", text: "Visual disturbance", match: ["visual", "vision"] },
          { id: "epi", text: "Epigastric or right upper quadrant pain", match: ["epigastric", "right upper", "ruq", "abdominal pain"] },
          { id: "nv", text: "Nausea or vomiting", match: ["vomiting", "nausea"] },
          { id: "sob", text: "Shortness of breath or chest pain", match: ["breath", "dyspnea"] },
          { id: "cp", text: "Chest pain", match: ["chest pain"] },
          { id: "fm", text: "Decreased fetal movement", match: ["fetal movement"] },
          { id: "seiz", text: "Seizure", match: ["seizure"] },
          { id: "conf", text: "Confusion", match: ["confusion"] },
          { id: "bleed", text: "Vaginal bleeding or abdominal pain suggesting abruption", match: ["bleeding"] },
          { id: "bp", text: "Home BP of 160/110 or higher", match: ["160/110"] },
        ],
        explanation:
          "She is at high risk of superimposed pre-eclampsia, which can progress quickly. Headache, visual change, epigastric pain, nausea, dyspnea and reduced fetal movement are warning symptoms. Many of these can appear before the BP rises further.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
    ],
    sources: [S.sogc, S.isshp],
    ...META,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-12",
    topic: "pre-eclampsia",
    alsoTopics: ["loc"],
    title: "Vomiting teenager at 34 weeks",
    stem:
      "A 17-year-old primigravida at 34 weeks and 2 days has had 1 day of nausea, 5 episodes of vomiting, malaise and mild epigastric discomfort. Her sister has gastroenteritis. Her first trimester BP was 96/58 mmHg. Her SpO2 is 98%. She has mild epigastric tenderness. The triage protocol has already given ondansetron with a plan to discharge her once she tolerates fluids.",
    vitals: { temperature: "37.3°C", pulse: "104/minute", resp: "18/minute", bp: "132/86 mmHg", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What features make you unwilling to accept gastroenteritis without further workup?",
        accept: [
          { id: "bp", text: "BP rise from her first trimester baseline", match: ["baseline", "blood pressure"] },
          { id: "ga", text: "Third trimester pregnancy", match: ["third trimester", "20 week"] },
          { id: "epi", text: "Epigastric pain", match: ["epigastric"] },
          { id: "prim", text: "Primigravida", match: ["primigravida", "first pregnancy"] },
          { id: "young", text: "Teenage mother", match: ["teenage", "teenager", "adolescent", "young", "age"] },
          { id: "hr", text: "Tachycardia", match: ["tachycardia"] },
          { id: "nodiarr", text: "No diarrhea", match: ["no diarrhea", "without diarrhea", "absence of diarrhea"] },
        ],
        explanation:
          "Nausea, vomiting and epigastric pain in the third trimester are classic early HELLP symptoms. Her BP has risen by 36 mmHg systolic and 28 mmHg diastolic from baseline. Her BP of 132/86 looks normal for a nonpregnant adult but not for her.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        update:
          "Labs: Hb 118 g/L, platelets 84 x 10^9/L, AST 164 U/L, LDH 690 U/L, bilirubin 62 micromol/L, glucose 2.9 mmol/L, INR 1.8, fibrinogen 1.2 g/L, creatinine 138 micromol/L.",
        prompt: "What results point toward acute fatty liver of pregnancy rather than HELLP alone?",
        accept: [
          { id: "gluc", text: "Hypoglycemia", match: ["glucose", "hypoglycemia"] },
          { id: "inr", text: "Prolonged INR", match: ["inr", "coagulopathy"] },
          { id: "fib", text: "Low fibrinogen", match: ["fibrinogen"] },
          { id: "bili", text: "Markedly raised bilirubin", match: ["bilirubin"] },
          { id: "cr", text: "Raised creatinine", match: ["creatinine", "kidney"] },
        ],
        unacceptable: [{ text: "Low platelets", match: ["platelet"] }],
        explanation:
          "Hypoglycemia, early coagulopathy with low fibrinogen, jaundice and renal failure favour acute fatty liver of pregnancy, which is a form of liver failure. Thrombocytopenia occurs in both. The two conditions overlap and both are treated by delivery.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update: "She becomes drowsy and difficult to engage. Repeat capillary glucose is 2.6 mmol/L.",
        prompt: "What immediate treatments would you give, with doses where relevant?",
        accept: [
          { id: "d50", text: "Dextrose 25 g IV (50 mL of D50W)", match: ["dextrose", "d50", "d50w", "d10", "d10w", "glucose"] },
          { id: "cryo", text: "Cryoprecipitate or fibrinogen concentrate", match: ["cryo", "fibrinogen"] },
          { id: "ffp", text: "Frozen plasma", match: ["plasma"] },
          { id: "vitk", text: "Vitamin K", match: ["vitamin k"] },
          { id: "airway", text: "Airway protection and ICU", match: ["airway", "icu"] },
          { id: "deliv", text: "Urgent obstetrics for delivery", match: ["delivery", "deliver", "obstetric", "obstetrical", "obstetrician"] },
        ],
        unacceptable: [{ text: "Glucagon", match: ["glucagon"] }],
        explanation:
          "Hypoglycemia from hepatic failure must be corrected at once with IV dextrose and followed by a dextrose infusion with frequent checks. Coagulopathy should be corrected before delivery. Glucagon depends on hepatic glycogen and is unreliable in liver failure.",
        keyFeature: { topic: "loc", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What other conditions can mimic HELLP syndrome with thrombocytopenia and organ dysfunction?",
        accept: [
          { id: "ttp", text: "Thrombotic thrombocytopenic purpura", match: ["ttp", "thrombotic"] },
          { id: "hus", text: "Hemolytic uremic syndrome", match: ["hus", "uremic"] },
          { id: "aflp", text: "Acute fatty liver of pregnancy", match: ["fatty liver"] },
          { id: "sle", text: "Lupus flare", match: ["lupus", "sle"] },
          { id: "aps", text: "Catastrophic antiphospholipid syndrome", match: ["antiphospholipid"] },
          { id: "dic", text: "DIC from sepsis or abruption", match: ["dic", "sepsis"] },
          { id: "hep", text: "Viral hepatitis", match: ["hepatitis"] },
        ],
        explanation:
          "Thrombotic microangiopathies, acute fatty liver, lupus flares and sepsis with DIC can all resemble HELLP. TTP needs plasma exchange rather than delivery alone. Persisting or worsening disease after delivery should prompt a search for these alternatives.",
        keyFeature: { topic: "pre-eclampsia", n: 3 },
        source: "sibai-hellp",
      },
    ],
    sources: [S.sogc, S.sibai, S.tintinalli],
    ...META,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-13",
    topic: "pre-eclampsia",
    alsoTopics: ["seizures", "headache"],
    title: "Seizure ten days after delivery",
    stem:
      "A 30-year-old woman delivered vaginally with an epidural 10 days ago. Her BP was normal throughout pregnancy. She has had a worsening headache for 3 days and today had a witnessed generalized seizure lasting 2 minutes. On arrival she is postictal with GCS 12 and improving. Her SpO2 is 96%. Capillary glucose 6.2 mmol/L. There is a subtle left pronator drift.",
    vitals: { temperature: "37.4°C", pulse: "100/minute", resp: "18/minute", bp: "158/102 mmHg", weight: "71 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What diagnoses must you consider?",
        accept: [
          { id: "ecl", text: "Late postpartum eclampsia", match: ["eclampsia"] },
          { id: "cvst", text: "Cerebral venous sinus thrombosis", match: ["venous", "cvst"] },
          { id: "pres", text: "Posterior reversible encephalopathy syndrome", match: ["posterior reversible", "reversible encephalopathy", "posterior encephalopathy"] },
          { id: "rcvs", text: "Reversible cerebral vasoconstriction syndrome", match: ["vasoconstriction", "rcvs"] },
          { id: "ich", text: "Intracranial hemorrhage", match: ["hemorrhage"] },
          { id: "stroke", text: "Ischemic stroke", match: ["stroke"] },
          { id: "mening", text: "Meningitis or encephalitis", match: ["meningitis", "encephalitis"] },
          { id: "na", text: "Hyponatremia", match: ["hyponatremia"] },
          { id: "tumour", text: "Mass lesion", match: ["mass"] },
        ],
        explanation:
          "Eclampsia can occur up to several weeks postpartum in a woman with no prior hypertension. A focal sign and a prolonged headache also raise venous sinus thrombosis, PRES, reversible vasoconstriction and hemorrhage. Normal BP during pregnancy does not exclude the diagnosis.",
        keyFeature: { topic: "pre-eclampsia", n: 1 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for this patient now?",
        options: [
          "CT head with CT venography, or MRI with MR venography",
          "Electroencephalogram before any imaging",
          "Lumbar puncture before any neuroimaging",
          "Noncontrast CT head only, without venous sinus imaging",
          "No neuroimaging at this stage",
        ],
        correct: 0,
        explanation:
          "A late postpartum seizure with a focal deficit needs brain and venous imaging. This is not typical eclampsia, so omitting imaging is unsafe. Noncontrast CT alone can miss venous sinus thrombosis. MRI best shows PRES but CT venography is often faster in the emergency department.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "Imaging shows bilateral parieto-occipital vasogenic edema consistent with PRES. The venous sinuses are patent. There is no hemorrhage.",
        prompt: "What medication, with drug, dose and route, would you give to prevent further seizures?",
        accept: [{ id: "mg", text: "Magnesium sulfate 4 g IV then 1 g/h", match: MG_LOAD }],
        unacceptable: [
          { text: "Phenytoin", match: ["phenytoin"] },
          { text: "Levetiracetam as first line", match: ["levetiracetam"] },
        ],
        explanation:
          "Postpartum eclampsia is treated the same as antepartum eclampsia. Magnesium sulfate 4 g IV then 1 g/h, usually for 24 hours, prevents recurrence better than phenytoin. BP control is also part of treating PRES.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "eclampsia-trial",
      },
      {
        id: "q4",
        kind: "short",
        update: "She recovers fully.",
        required: 2,
        prompt: "What counselling points would you give her before she leaves hospital?",
        accept: [
          { id: "drive", text: "Do not drive until cleared by her physician", match: ["driving", "drive", "not drive", "no driving", "avoid driving"] },
          { id: "asa", text: "Low dose aspirin starting before 16 weeks in any future pregnancy", match: ["aspirin", "asa"] },
          { id: "recur", text: "Higher risk of pre-eclampsia in future pregnancies", match: ["future pregnancy", "future pregnancies", "next pregnancy", "recurrence"] },
          { id: "cv", text: "Lifelong higher cardiovascular risk with yearly BP and risk factor screening", match: ["cardiovascular"] },
          { id: "bp", text: "Home BP monitoring and follow-up", match: ["bp", "blood pressure"] },
          { id: "bf", text: "Breastfeeding is safe with her medications", match: ["breastfeed", "breastfeeding", "breast feeding"] },
          { id: "sx", text: "Return for headache, visual change or seizure", match: ["return"] },
          { id: "bath", text: "Avoid bathing or swimming alone until cleared", match: ["swimming", "swim", "bathing", "avoid bathing", "avoid swimming", "no swimming"] },
        ],
        explanation:
          "Any seizure raises driving and safety questions until the cause is resolved. Pre-eclampsia predicts recurrence and later cardiovascular disease, so future aspirin prophylaxis and long-term risk factor screening are advised. Her antihypertensives are compatible with breastfeeding.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "sogc-hdp",
      },
    ],
    sources: [S.sogc, S.eclampsiaTrial, S.rosen],
    ...META,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-14",
    topic: "pre-eclampsia",
    alsoTopics: ["pulmonary-edema", "asthma-copd"],
    title: "Severe blood pressure in a patient with asthma",
    stem:
      "A 32-year-old G2P1 at 36 weeks and 4 days is referred from her prenatal clinic with BP 168/112 mmHg. She has severe asthma on budesonide and formoterol and was admitted to the ICU for asthma 2 years ago. She has a mild headache. In the emergency department her BP is 168/112 mmHg when repeated 15 minutes later. Chest has faint end expiratory wheeze.",
    vitals: { pulse: "88/minute", resp: "18/minute", bp: "170/114 mmHg", o2sat: "97% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following are the most appropriate first antihypertensive options for this patient?",
        options: [
          "Clonidine 0.2 mg PO",
          "Enalaprilat 1.25 mg IV",
          "Furosemide 40 mg IV",
          "Hydralazine 5 mg IV",
          "Labetalol 20 mg IV",
          "Labetalol 200 mg PO",
          "Metoprolol 5 mg IV",
          "Nifedipine immediate release 10 mg PO",
          "Sodium nitroprusside infusion",
        ],
        select: 2,
        correct: [7, 3],
        explanation:
          "Labetalol is a nonselective beta blocker and is avoided in asthma, particularly with prior ICU admission. Immediate release oral nifedipine or IV hydralazine are effective alternatives. ACE inhibitors are contraindicated before delivery and nitroprusside is reserved for refractory cases.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate BP target over the first hour?",
        options: [
          "Below 160/110, then a diastolic of about 85",
          "Below 120/80 within the first hour",
          "Diastolic below 70 within the first hour",
          "Mean arterial pressure 50% lower within 1 hour",
          "No treatment until BP exceeds 180/120",
        ],
        correct: 0,
        explanation:
          "Severe hypertension in pregnancy is treated promptly to reduce stroke risk, aiming first for below 160/110. Once controlled, SOGC targets a diastolic of about 85. Overly rapid or deep reductions reduce uteroplacental perfusion and can cause fetal distress.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-hdp",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update:
          "Her BP comes down to 150/98 after nifedipine. An hour later she reports tightness and says her asthma is acting up. RR 28, SpO2 91% on room air. You hear fine inspiratory crackles at both bases in addition to wheeze.",
        prompt: "What bedside findings or tests would support pulmonary edema over an asthma exacerbation?",
        accept: [
          { id: "blines", text: "Bilateral B lines on lung ultrasound", match: ["b line", "ultrasound", "pocus"] },
          { id: "crackles", text: "Bibasilar crackles", match: ["crackle"] },
          { id: "cxr", text: "Chest X-ray showing interstitial or alveolar edema", match: ["x ray", "cxr"] },
          { id: "bnp", text: "Elevated BNP or NT-proBNP", match: ["bnp"] },
          { id: "orth", text: "Orthopnea", match: ["orthopnea"] },
          { id: "jvp", text: "Raised JVP", match: ["jvp"] },
          { id: "peak", text: "Preserved peak flow compared with her baseline", match: ["peak flow"] },
          { id: "froth", text: "Pink frothy sputum", match: ["frothy"] },
        ],
        explanation:
          "Pulmonary edema is a severe complication of pre-eclampsia and can present with wheeze, often called cardiac asthma. Crackles, B lines, orthopnea and a raised BNP favour edema. Peak flow that is near her baseline argues against bronchospasm.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "tintinalli",
      },
    ],
    sources: [S.sogc, S.tintinalli],
    ...META,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "pre-eclampsia-15",
    topic: "pre-eclampsia",
    alsoTopics: ["first-trimester-bleeding"],
    title: "Hypertension and vomiting at 17 weeks",
    stem:
      "A 24-year-old primigravida at 17 weeks by her last menstrual period is sent from a walk-in clinic with BP 162/104 mmHg. She has had headache and vomiting for 3 days and light vaginal spotting today. She has had no prenatal ultrasound. Her BP is 164/106 mmHg on repeat. Her SpO2 is 98%. Fundal height is at the umbilicus. She has a fine tremor.",
    vitals: { temperature: "36.9°C", pulse: "112/minute", resp: "18/minute", bp: "160/104 mmHg", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "Pre-eclampsia before 20 weeks is unusual. What conditions can cause it this early?",
        accept: [
          { id: "molar", text: "Molar pregnancy or gestational trophoblastic disease", match: ["molar", "mole", "trophoblastic"] },
          { id: "multi", text: "Multiple gestation", match: ["multiple", "twin"] },
          { id: "aps", text: "Antiphospholipid syndrome", match: ["antiphospholipid"] },
          { id: "renal", text: "Underlying renal disease", match: ["renal"] },
          { id: "triploidy", text: "Fetal triploidy", match: ["triploidy"] },
          { id: "sle", text: "Lupus", match: ["lupus"] },
        ],
        unacceptable: [{ text: "Normal singleton pregnancy", match: ["normal pregnancy"] }],
        explanation:
          "Pre-eclampsia before 20 weeks should prompt a search for a molar pregnancy, multiple gestation or antiphospholipid syndrome. A uterus large for dates, vomiting, bleeding and thyrotoxic signs strongly suggest a complete mole here.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-hdp",
      },
      {
        id: "q2",
        kind: "short",
        required: 4,
        prompt: "What investigations would you order now?",
        accept: [
          { id: "us", text: "Pelvic ultrasound", match: ["ultrasound"] },
          { id: "hcg", text: "Quantitative beta hCG", match: ["hcg"] },
          { id: "tsh", text: "TSH and free T4", match: ["tsh", "t4"] },
          { id: "cbc", text: "CBC and platelets", match: ["cbc", "platelet"] },
          { id: "cr", text: "Creatinine and electrolytes", match: ["creatinine", "electrolyte"] },
          { id: "lft", text: "AST, ALT and LDH", match: ["ast", "alt"] },
          { id: "ldh", text: "LDH", match: ["ldh"] },
          { id: "upcr", text: "Urine protein to creatinine ratio", match: ["urine protein", "pcr", "upcr", "protein creatinine"] },
          { id: "type", text: "Blood group and Rh type and screen", match: ["rh", "type and screen"] },
          { id: "cxr", text: "Chest X-ray if a molar pregnancy is confirmed", match: ["chest x ray"] },
          { id: "coag", text: "INR and fibrinogen", match: ["inr"] },
        ],
        explanation:
          "Ultrasound and a quantitative hCG confirm a mole. Very high hCG stimulates the TSH receptor and causes hyperthyroidism, which explains her tremor and tachycardia. Pre-eclampsia labs, Rh status and a type and screen are needed before evacuation.",
        keyFeature: { topic: "pre-eclampsia", n: 2 },
        source: "sogc-gtd",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "Ultrasound shows a complete molar pregnancy with no fetus. Beta hCG is 480 000 IU/L. Free T4 is elevated. She is Rh negative.",
        prompt: "What are your management steps?",
        accept: [
          { id: "evac", text: "Urgent gynecology consultation for suction evacuation", match: ["evacuation", "suction", "d c", "gynecology", "gynaecology", "gyne"] },
          { id: "bp", text: "Treat the severe BP with labetalol, nifedipine or hydralazine", match: ["nifedipine", "hydralazine", "antihypertensive", "labetalol"] },
          { id: "beta", text: "Beta blocker for thyrotoxic symptoms", match: ["beta blocker", "propranolol"] },
          { id: "mg", text: "Magnesium sulfate seizure prophylaxis", match: ["magnesium"] },
          { id: "rh", text: "Rh immune globulin", match: ["rh immune", "anti d", "rhig", "winrho", "rhogam", "rh immunoglobulin"] },
          { id: "xm", text: "Crossmatch blood for evacuation", match: ["crossmatch"] },
          { id: "follow", text: "Serial hCG follow-up for persistent trophoblastic disease", match: ["serial hcg"] },
        ],
        unacceptable: [
          { text: "Medical evacuation with misoprostol", match: ["misoprostol", "medical evacuation", "mifepristone", "prostaglandin"] },
          { text: "Oxytocin induction before evacuation", match: ["oxytocin induction"] },
        ],
        explanation:
          "The delivery equivalent for a mole is prompt vacuum evacuation, after BP and thyroid stabilization. SOGC 408 offers anti-D to Rh negative patients after evacuation. SOGC 448 (2024) says it is not required once a complete mole is certain, but suggests 300 mcg for pregnancy loss after 12 weeks, so giving it here is reasonable. Medical evacuation and oxytocin before evacuation are avoided because of bleeding and embolization risk.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc-gtd",
      },
    ],
    sources: [S.sogc, S.sogcGtd],
    ...META,
  },
];
