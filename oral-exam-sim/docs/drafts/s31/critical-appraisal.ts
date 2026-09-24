// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

/* Every study, rule and number in these SAMPs is fictional and invented for teaching. None reports a real trial's results. */

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S: Record<string, Source> = {
  ug: {
    id: "users-guides",
    citation:
      "Guyatt G, Rennie D, Meade MO, Cook DJ, editors. Users' Guides to the Medical Literature. A Manual for Evidence-Based Clinical Practice. 3rd edition. JAMA Evidence and McGraw-Hill Education. 2015.",
    url: "https://jamaevidence.mhmedical.com/content.aspx?bookid=847&sectionid=69030714",
  },
  stard: {
    id: "stard-2015",
    citation: "Bossuyt PM, Reitsma JB, Bruns DE, et al. STARD 2015. An updated list of essential items for reporting diagnostic accuracy studies. BMJ 2015.",
    url: "https://doi.org/10.1136/bmj.h5527",
  },
  consort: {
    id: "consort-2025",
    citation: "Hopewell S, Chan AW, Collins GS, et al. CONSORT 2025 statement. Updated guideline for reporting randomised trials. BMJ 2025.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40228833/",
  },
  consortNi: {
    id: "consort-noninferiority",
    citation: "Piaggio G, Elbourne DR, Pocock SJ, et al. Reporting of noninferiority and equivalence randomized trials. Extension of the CONSORT 2010 statement. JAMA 2012.",
    url: "https://doi.org/10.1001/jama.2012.87802",
  },
  consortCluster: {
    id: "consort-cluster",
    citation: "Campbell MK, Piaggio G, Elbourne DR, Altman DG. CONSORT 2010 statement. Extension to cluster randomised trials. BMJ 2012.",
    url: "https://doi.org/10.1136/bmj.e5661",
  },
  grade: {
    id: "grade-2008",
    citation: "Guyatt GH, Oxman AD, Vist GE, et al. GRADE. An emerging consensus on rating quality of evidence and strength of recommendations. BMJ 2008.",
    url: "https://doi.org/10.1136/bmj.39489.470347.AD",
  },
  stiell: {
    id: "stiell-wells-rules",
    citation: "Stiell IG, Wells GA. Methodologic standards for the development of clinical decision rules in emergency medicine. Annals of Emergency Medicine 1999.",
    url: "https://doi.org/10.1016/s0196-0644(99)70309-4",
  },
  mcginn: {
    id: "mcginn-rules",
    citation:
      "McGinn TG, Guyatt GH, Wyer PC, Naylor CD, Stiell IG, Richardson WS. Users' guides to the medical literature XXII. How to use articles about clinical decision rules. JAMA 2000.",
    url: "https://pubmed.ncbi.nlm.nih.gov/10872017/",
  },
  hanley: {
    id: "hanley-zero",
    citation: "Hanley JA, Lippman-Hand A. If nothing goes wrong, is everything all right? Interpreting zero numerators. JAMA 1983.",
    url: "https://pubmed.ncbi.nlm.nih.gov/6827763/",
  },
  pauker: {
    id: "pauker-threshold",
    citation: "Pauker SG, Kassirer JP. The threshold approach to clinical decision making. New England Journal of Medicine 1980.",
    url: "https://pubmed.ncbi.nlm.nih.gov/7366635/",
  },
  fragility: {
    id: "fragility-index",
    citation:
      "Walsh M, Srinathan SK, McAuley DF, et al. The statistical significance of randomized controlled trial results is frequently fragile. A case for a Fragility Index. Journal of Clinical Epidemiology 2014.",
    url: "https://doi.org/10.1016/j.jclinepi.2013.10.019",
  },
  tripod: {
    id: "tripod",
    citation:
      "Collins GS, Reitsma JB, Altman DG, Moons KGM. Transparent reporting of a multivariable prediction model for individual prognosis or diagnosis (TRIPOD). The TRIPOD statement. BMJ 2015.",
    url: "https://pubmed.ncbi.nlm.nih.gov/25569120/",
  },
  strobe: {
    id: "strobe",
    citation:
      "von Elm E, Altman DG, Egger M, et al. The Strengthening the Reporting of Observational Studies in Epidemiology (STROBE) statement. Guidelines for reporting observational studies. Lancet 2007.",
    url: "https://doi.org/10.1016/S0140-6736(07)61602-X",
  },
  beers: {
    id: "beers-2023",
    citation: "American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society 2023.",
    url: "https://doi.org/10.1111/jgs.18372",
  },
  steppedWedge: {
    id: "stepped-wedge",
    citation: "Hemming K, Taljaard M, McKenzie JE, et al. Reporting of stepped wedge cluster randomised trials. Extension of the CONSORT 2010 statement with explanation and elaboration. BMJ 2018.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30413417/",
  },
  ssc: {
    id: "ssc-2021",
    citation: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Intensive Care Medicine 2021.",
    url: "https://pubmed.ncbi.nlm.nih.gov/34599691/",
  },
  pecarn: {
    id: "pecarn",
    citation: "Kuppermann N, Holmes JF, Dayan PS, et al. Identification of children at very low risk of clinically-important brain injuries after head trauma. A prospective cohort study. Lancet 2009.",
    url: "https://doi.org/10.1016/S0140-6736(09)61558-0",
  },
  idsa: {
    id: "idsa-ssti",
    citation: "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections. 2014 update by the Infectious Diseases Society of America. Clinical Infectious Diseases 2014.",
    url: "https://academic.oup.com/cid/article/59/2/e10/2895845",
  },
  cps: {
    id: "cps-bronchiolitis",
    citation: "Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society, Acute Care Committee and Drug Therapy and Hazardous Substances Committee. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatrics and Child Health 2014.",
    url: "https://cps.ca/en/documents/position/bronchiolitis",
  },
  loeb: {
    id: "loeb-criteria",
    citation: "Loeb M, Bentley DW, Bradley S, et al. Development of minimum criteria for the initiation of antibiotics in residents of long-term-care facilities. Results of a consensus conference. Infection Control and Hospital Epidemiology 2001.",
    url: "https://pubmed.ncbi.nlm.nih.gov/11232875/",
  },
  cpsPain: {
    id: "cps-procedural-pain",
    citation: "Trottier ED, Dore-Bergeron MJ, Chauvin-Kimoff L, Baerg K, Ali S. Canadian Paediatric Society, Acute Care Committee. Managing pain and distress in children undergoing brief diagnostic and therapeutic procedures. Paediatrics and Child Health 2019.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31844394/",
  },
};

export const CRITICAL_APPRAISAL_S31: Samp[] = [
  /* 16 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-16",
    topic: "critical-appraisal",
    title: "A pathway with no events",
    stem:
      "A 71-year-old woman presents to the emergency department with 3 hours of intermittent central chest pressure that began at rest. She has hypertension treated with ramipril. Her ECG is normal. A high sensitivity troponin drawn at arrival is below the 99th percentile. A colleague suggests discharge using a new low-risk chest pain pathway. He cites a fictional prospective study from 4 Canadian emergency departments. It enrolled 600 consecutive adults aged 30 to 64 without known coronary disease who met the pathway's low-risk criteria. All were discharged home. None had a major adverse cardiac event (MACE) within 30 days, and follow-up was complete.",
    vitals: { temperature: "36.8°C oral", pulse: "78/minute", resp: "16/minute", bp: "148/82 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to the upper limit of the 95% confidence interval for the 30-day MACE rate in this study?",
        options: ["0%", "0.2%", "0.5%", "1.0%", "3.0%"],
        correct: 2,
        explanation:
          "Zero events in 600 patients still leaves an upper 95% limit of about 3 divided by 600, or 0.5%. This is the rule of three, which approximates the exact one-sided limit (0.498%) whenever no events occur. The point estimate of 0% is not the interval. A figure of 0.2% is 1 divided by 600, the rate had a single event occurred. A limit of 1.0% would need only 300 event-free patients, and 3.0% is the limit for 100 patients.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "hanley-zero",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following questions would need a concurrent usual care comparison group to answer?",
        options: [
          "Whether follow-up was complete",
          "Whether MACE was rare after discharge",
          "Whether the pathway reduced admissions",
          "Whether the sites enrolled consecutively",
          "Whether the upper limit of risk was low",
        ],
        correct: 2,
        explanation:
          "A single-group cohort shows what happened to pathway patients, but not what would have happened to them under usual care. Only a comparison group, ideally randomized, can show that the pathway changed admissions or testing. The study itself shows that follow-up was complete, that consecutive patients were enrolled, and that MACE was rare, with an upper 95% limit of 0.5%. Those questions are answered within one group and need no comparator.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "The abstract concludes that the pathway is safe for discharge of any adult with chest pain and a normal first troponin.",
        prompt: "Which of the following study features most directly shows that this conclusion goes beyond the data?",
        options: [
          "Ages 30 to 64 only",
          "Enrolment at 4 sites",
          "Follow-up of 30 days",
          "Only 600 patients enrolled",
          "Use of a single troponin",
        ],
        correct: 0,
        explanation:
          "The study enrolled only adults aged 30 to 64, so it says nothing about the risk in older adults, whose baseline risk of coronary disease is higher. A conclusion about any adult extends the pathway to a population it was never tested in. Four sites is a reasonable multicentre sample. Thirty days is the usual horizon for MACE after chest pain. With 600 patients the upper 95% limit is already 0.5%. The single troponin is part of the pathway being tested, not a reason the conclusion overreaches.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "mcginn-rules",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for this patient?",
        options: [
          "Admit for coronary angiography today",
          "Discharge home using the new pathway",
          "Discharge with a stress test in 6 weeks",
          "Repeat troponin and apply a validated score",
          "Start heparin and admit to telemetry",
        ],
        correct: 3,
        explanation:
          "She is 71, older than anyone the study enrolled, so the pathway's reassuring event rate does not transfer to her. Her pain began 3 hours ago, and a single early troponin cannot rule out infarction, so a repeat troponin and a risk score validated in older adults should guide her disposition. Discharge on the new pathway applies it outside its population. A delayed stress test skips the serial troponin she still needs. Heparin and angiography are not warranted with a normal ECG and a normal first troponin.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [S.hanley, S.ug, S.mcginn],
    ...META,
  },

  /* 17 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-17",
    topic: "critical-appraisal",
    title: "A score in banded form",
    stem:
      "You are working in a rural hospital emergency department with no ultrasound, CT or surgeon available overnight. A 9-year-old boy presents with 20 hours of abdominal pain that moved to the right lower quadrant, with anorexia and one episode of vomiting. He is otherwise well. He has right lower quadrant tenderness with guarding and pain on hopping. WBC is 14.8 x 10^9/L with neutrophils 11.2 x 10^9/L. You apply a pediatric appendicitis score from a fictional prospective study of 900 children aged 4 to 17 at 8 rural and community hospitals. Its items include the WBC and neutrophil count, but not CRP. Appendicitis prevalence in the study was 25%.",
    vitals: { temperature: "38.1°C oral", pulse: "112/minute", resp: "20/minute", bp: "104/62 mmHg", o2sat: "99% on room air", weight: "31 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The study reports likelihood ratios for three score bands: low 0.1, intermediate 1.2 and high 5.0. His score falls in the high band.",
        prompt: "Using the study prevalence as his pretest probability, which of the following is closest to his post-test probability of appendicitis?",
        options: ["25%", "38%", "50%", "63%", "83%"],
        correct: 3,
        explanation:
          "Likelihood ratios act on odds, not on probabilities. A pretest probability of 25% is odds of 0.25 divided by 0.75, or 0.33. Multiplied by 5.0 this gives odds of 1.67, which converts back to 1.67 divided by 2.67, or 63% (rounded to the nearest whole percent). A post-test probability of 25% ignores the result. Multiplying the probability directly by 5.0 gives an impossible 125%. Values of 38% and 50% match likelihood ratios of only about 1.8 and 3.0, and 83% would need a likelihood ratio near 15.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the main advantage of reporting this score in three likelihood ratio bands rather than as positive or negative?",
        options: [
          "Bands keep the meaning of middle scores",
          "Bands let each result ignore prevalence",
          "Bands raise the area under the curve",
          "Bands remove the need for pretest odds",
          "Bands shorten the score for bedside use",
        ],
        correct: 0,
        explanation:
          "Interval likelihood ratios keep information that a single cutoff throws away. An intermediate score here carries a likelihood ratio of 1.2, which barely moves probability, while a high score carries 5.0. A positive or negative split would lump these together. Banding does not change the area under the ROC curve, which describes the whole score. Every likelihood ratio, banded or not, still needs a pretest probability, and the score's items are the same whether results are banded or not.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "His CRP is 48 mg/L. A separate fictional study reports a positive likelihood ratio of 2.0 for CRP above 20 mg/L in children with abdominal pain.",
        prompt: "Which of the following best explains why multiplying his post-test odds by the CRP likelihood ratio would overstate his probability?",
        options: [
          "CRP and the score's blood counts are correlated",
          "Likelihood ratios apply only to single tests",
          "Pretest odds must be reset to study prevalence",
          "The CRP result arrived after the score",
          "The CRP study had a lower prevalence",
        ],
        correct: 0,
        explanation:
          "Chaining likelihood ratios assumes each test adds independent information. CRP, WBC and neutrophil count all rise with the same inflammation, so much of what CRP says is already counted in his high score, and multiplying by 2.0 double counts it. Likelihood ratios can be applied in sequence when tests are independent. The post-test odds from one test become the pretest odds for the next, with no reset. The order results arrive in does not matter. Likelihood ratios are largely stable across prevalence, although spectrum can shift them.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for this child?",
        options: [
          "Discharge with review in 24 hours",
          "Observe overnight with serial examinations",
          "Oral antibiotics and outpatient ultrasound",
          "Repeat the score and WBC in 12 hours",
          "Transfer for surgical assessment",
        ],
        correct: 4,
        explanation:
          "A probability of about 63% with fever, guarding and 20 hours of pain is well above any reasonable threshold to discharge. He needs a surgeon and imaging that this hospital cannot provide overnight, so transfer is the right step, with analgesia, fasting and IV fluids. Discharge with review, even at 24 hours, risks perforation. Overnight observation or a repeat score in 12 hours delays definitive care in a child already likely to have appendicitis. Oral antibiotics with outpatient ultrasound leaves a probable appendicitis unassessed by a surgeon.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.ug],
    ...META,
  },

  /* 18 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-18",
    topic: "critical-appraisal",
    title: "Not every child had an X-ray",
    stem:
      "An 8-year-old boy presents to the emergency department 2 hours after falling onto his outstretched right hand from a trampoline. He has distal forearm pain and swelling without deformity. He is otherwise well. He has focal tenderness over the distal radius, intact sensation and a normal radial pulse. Your department is considering point of care ultrasound (POCUS) to decide which children need an X-ray. A fictional study enrolled 200 children with suspected distal forearm fracture. POCUS was positive in 80, all of whom had an X-ray, which showed a fracture in 72. POCUS was negative in 120. Only the 30 with the most swelling had an X-ray, and 3 of them had a fracture. The authors analyzed only the 110 children who had an X-ray.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "20/minute", bp: "102/64 mmHg", o2sat: "99% on room air", weight: "27 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to the sensitivity of POCUS as reported in the analysis of the 110 children?",
        options: ["77%", "86%", "90%", "96%", "99%"],
        correct: 3,
        explanation:
          "In the 110 children with an X-ray there were 75 fractures, 72 detected by POCUS and 3 missed. Sensitivity is 72 divided by 75, or 96.0%. The reported specificity is 27 divided by 35, or 77.1%, since 8 of the 35 children without a fracture had a positive scan. A value of 86% is the sensitivity after correcting for the unverified children. A value of 90% is 72 divided by 80, the positive predictive value. A sensitivity of 99% would need almost no missed fractures.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "stard-2015",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following biases best describes restricting the analysis to children whose X-ray was ordered based on the POCUS result?",
        options: [
          "Imperfect reference bias",
          "Incorporation bias",
          "Partial verification bias",
          "Spectrum bias",
          "Test review bias",
        ],
        correct: 2,
        explanation:
          "Every POCUS positive child had the reference standard, but only a quarter of the POCUS negative children did, and the rest were dropped. That is partial verification, or work-up, bias. It hides false negatives, so sensitivity is overestimated and specificity underestimated. Imperfect reference bias arises when the reference standard itself misclassifies, but X-ray is a sound reference for these fractures. Incorporation bias occurs when the test forms part of the reference standard. Spectrum bias comes from an unrepresentative sample. Test review bias occurs when the reference is read with knowledge of the index test.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stard-2015",
      },
      {
        id: "q3",
        kind: "single",
        update: "Assume that the 90 children who had no X-ray had fractures at the same rate as the 30 POCUS negative children who did, which is 10%.",
        prompt: "Which of the following is closest to the corrected sensitivity of POCUS for distal forearm fracture?",
        options: ["72%", "80%", "86%", "90%", "93%"],
        correct: 2,
        explanation:
          "At 10%, 9 of the 90 unverified children had a fracture, so false negatives rise from 3 to 12. Sensitivity becomes 72 divided by 84, or 85.7%, which rounds to 86%. Specificity rises to 108 divided by 116, or 93.1%, because 81 more true negatives are added. So 93% is the corrected specificity, not the sensitivity. A value of 90% is the positive predictive value. A value of 80% would follow from 18 missed fractures, and 72% confuses the count of true positives with a percentage.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "stard-2015",
      },
      {
        id: "q4",
        kind: "single",
        update: "Your POCUS of his distal radius shows an intact cortex. Using the corrected figures, his pretest probability is the study prevalence of 42%.",
        prompt: "Which of the following is closest to his probability of fracture after this negative scan?",
        options: ["1%", "3%", "5%", "10%", "15%"],
        correct: 3,
        explanation:
          "The corrected negative likelihood ratio is 0.143 divided by 0.931, or 0.15. Pretest odds of 0.42 divided by 0.58 is 0.72. Multiplied by 0.15 this gives odds of 0.11, a probability of 10%. That matches the 10% fracture rate seen among the imaged negative children. Values of 1% to 5% come from the uncorrected sensitivity of 96%, which would falsely reassure. A value of 15% is the likelihood ratio read as a probability.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for this boy?",
        options: [
          "Apply a cast without an X-ray",
          "Book a repeat POCUS in 1 week",
          "Discharge without a splint or X-ray",
          "Immobilize and X-ray if pain persists",
          "Obtain X-rays of the wrist and forearm",
        ],
        correct: 4,
        explanation:
          "A 10% chance of fracture with focal distal radius tenderness is too high to leave untested, and an X-ray is cheap, fast and low in radiation. A negative scan with a corrected sensitivity of 86% cannot exclude a fracture here. Discharge without a splint or imaging leaves a 1 in 10 chance of an untreated fracture. Casting without imaging treats a probably intact wrist and misses angulation. Delaying imaging to 1 week or until pain persists defers a diagnosis that is easy to make today.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [S.stard, S.ug],
    ...META,
  },
  /* 19 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-19",
    topic: "critical-appraisal",
    title: "Stepping down from IV antibiotics",
    stem:
      "A 52-year-old man returns to the emergency department for a second dose of IV cefazolin for cellulitis of the left lower leg. Yesterday the redness had spread over 2 days. Today it has receded inside the marked border and his fever has settled. He has type 2 diabetes treated with metformin. IV access took 4 attempts yesterday. There is no fluctuance and no skin break between the toes. You review a fictional noninferiority trial of 1 000 adults with cellulitis who had improved after 24 hours of IV cefazolin. They were randomized to oral cephalexin at home or daily IV cefazolin to complete 7 days. The primary outcome was treatment failure at 14 days, with a noninferiority margin of 8 percentage points. In the IV group, 90 patients switched to oral therapy early because of IV access problems.",
    vitals: { temperature: "37.2°C oral", pulse: "84/minute", resp: "16/minute", bp: "138/84 mmHg", o2sat: "98% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "By intention to treat, failure occurred in 8.0% of the oral group and 7.0% of the IV group, a difference of 1.0 percentage point (95% CI -2.4 to 4.4).",
        prompt: "Which of the following best interprets the intention-to-treat result against the prespecified margin?",
        options: [
          "Inconclusive, as the interval crosses zero",
          "Noninferior, with superiority not shown",
          "Oral inferior, as its failures were higher",
          "Oral superior, as the interval includes negatives",
          "Uninterpretable without a p value",
        ],
        correct: 1,
        explanation:
          "The whole 95% interval, from 2.4 points fewer failures to 4.4 points more, lies below the 8 point margin, so noninferiority is shown by intention to treat. The interval also includes zero, so oral therapy is not shown to be better. Crossing zero is expected in a noninferiority trial and does not make it inconclusive. The question is whether the upper limit clears the margin. A higher point estimate of failure does not show inferiority when the interval excludes the margin. The confidence interval carries more information than a p value here.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-noninferiority",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains why a per-protocol analysis matters more in a noninferiority trial than in a superiority trial?",
        options: [
          "ITT cannot be combined with a margin",
          "ITT exaggerates differences between groups",
          "Per-protocol analysis keeps more patients",
          "Per-protocol analysis preserves randomization",
          "Switching arms dilutes any true difference",
        ],
        correct: 4,
        explanation:
          "Ninety IV patients switched to oral therapy, so the two groups received more similar treatment than randomized. That dilution pulls an intention-to-treat estimate toward no difference, which is conservative in a superiority trial but favours a false claim of noninferiority. So both analyses should be reported and should agree. Intention to treat is the analysis that preserves randomization, and it can be compared to a margin in the usual way. It tends to shrink differences, not exaggerate them. A per-protocol analysis excludes patients and so has fewer, not more.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-noninferiority",
      },
      {
        id: "q3",
        kind: "single",
        update: "Per protocol, failure occurred in 8.3% of the oral group and 4.8% of the IV group, a difference of 3.5 percentage points (95% CI -2.1 to 9.1).",
        prompt: "Which of the following conclusions is best supported by the two analyses taken together?",
        options: [
          "Noninferiority not robust across analyses",
          "Noninferiority shown with high confidence",
          "Oral and IV therapy shown to be equivalent",
          "Oral inferior by more than the margin",
          "Oral superior to continued IV therapy",
        ],
        correct: 0,
        explanation:
          "Per protocol, the upper limit of 9.1 points crosses the 8 point margin, so noninferiority is not shown in that analysis, though it is shown by intention to treat. When the two disagree, the claim of noninferiority is weaker than the abstract may suggest. Inferiority is not shown either, since the interval includes zero and runs well below the margin. Equivalence needs the interval inside a margin on both sides, which fails here. Neither analysis suggests that oral therapy is better, since both point estimates favour IV therapy.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-noninferiority",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for this patient today?",
        options: [
          "Admit for daily IV cefazolin",
          "Home IV cefazolin through a PICC line",
          "Oral cephalexin with review in 48 hours",
          "Stop antibiotics and review in 48 hours",
          "Switch to IV vancomycin in the department",
        ],
        correct: 2,
        explanation:
          "He is improving after 24 hours of IV therapy, has no abscess and has poor IV access, so oral step-down with early review suits him. Even the least favourable per-protocol limit allows up to 9 more failures per 100, and early review catches those who fail. Admission or a PICC line for daily IV therapy adds line risks for a benefit the trial could not confirm. Stopping antibiotics after one day undertreats cellulitis. He is responding to cefazolin and has no risk factor for MRSA given in the case, so vancomycin is not needed.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [S.consortNi, S.ug],
    ...META,
  },

  /* 20 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-20",
    topic: "critical-appraisal",
    title: "Randomizing departments, not patients",
    stem:
      "An 84-year-old woman is brought to the emergency department by ambulance after a fall at home. She has right hip pain and cannot bear weight. She has mild dementia and lives with her daughter. X-ray shows a displaced right femoral neck fracture, and she will wait in the department overnight for surgery. Your region is reviewing a fictional trial of a nurse-led delirium prevention bundle for older adults admitted through the emergency department. The bundle includes reorientation, glasses and hearing aids, family presence, a sleep protocol and no physical restraints. Twelve emergency departments were randomized, 6 to the bundle and 6 to usual care, and each enrolled 200 adults aged 65 or older. Delirium within 72 hours occurred in 10% with the bundle and 14% with usual care.",
    vitals: { temperature: "36.4°C oral", pulse: "92/minute", resp: "18/minute", bp: "152/78 mmHg", o2sat: "95% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the main reason to randomize whole departments rather than individual patients for this intervention?",
        options: [
          "Clusters allow blinding of the nurses",
          "Clusters need fewer patients overall",
          "Consent can be waived for every patient",
          "Randomizing sites balances patient ages",
          "Staff would carry the bundle across arms",
        ],
        correct: 4,
        explanation:
          "The bundle is delivered by nurses who care for many patients at once. If patients in one department were randomized individually, staff trained in the bundle would apply parts of it to control patients, which would dilute the difference. Randomizing departments avoids that contamination. Cluster trials need more patients, not fewer, because patients within a site resemble each other. Nurses delivering a bundle cannot be blinded. Consent rules differ by trial and are not the reason for the design. With only 12 clusters, randomizing sites balances patient traits less well than individual randomization would.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-cluster",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the number needed to treat with the bundle to prevent one case of delirium?",
        options: ["4", "7", "10", "25", "40"],
        correct: 3,
        explanation:
          "The absolute risk reduction is 14% minus 10%, or 4 percentage points. The number needed to treat is 1 divided by 0.04, which is 25. The relative risk reduction is 4 divided by 14, or 29%, and its inverse gives about 4, a common error. The values 7 and 10 are the inverses of each group's delirium rate, not of the difference between them. A number needed to treat of 40 would need an absolute reduction of only 2.5 percentage points.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "The intracluster correlation coefficient for delirium was 0.02. The authors analyzed the 2 400 patients as if each had been randomized individually.",
        prompt: "Which of the following is closest to the effective sample size once clustering is taken into account?",
        options: ["200", "480", "1 200", "2 400", "12 000"],
        correct: 1,
        explanation:
          "The design effect is 1 plus the cluster size minus 1, times the intracluster correlation. That is 1 plus 199 times 0.02, or 4.98. The effective sample size is 2 400 divided by 4.98, or about 480. The figure 200 is one cluster, 1 200 is one arm, and 2 400 is the sample that ignores clustering. Multiplying 2 400 by the design effect instead of dividing gives about 12 000, which reverses the correction.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-cluster",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most likely consequence of analyzing this trial as if patients were individually randomized?",
        options: [
          "Confidence interval that is too narrow",
          "Confidence interval that is too wide",
          "Larger absolute risk reduction",
          "Loss of balance created by randomization",
          "Smaller relative risk reduction",
        ],
        correct: 0,
        explanation:
          "Ignoring clustering treats 2 400 patients as independent when they carry the information of about 480. The standard error is too small, so the confidence interval is too narrow and the p value too small, which can make a chance result look significant. The point estimates of absolute and relative risk reduction are not biased by this error. Only their precision is overstated. The analysis method cannot undo balance that randomization of the clusters created at the start.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-cluster",
      },
      {
        id: "q5",
        kind: "single",
        update: "Overnight she becomes restless and asks repeatedly where she is. She is not hypoxic, her glucose is 6.4 mmol/L, and her pain is controlled.",
        prompt: "Which of the following is the most appropriate measure to start for her now?",
        options: [
          "Diphenhydramine 25 mg PO at bedtime",
          "Haloperidol 0.5 mg PO twice daily",
          "Lorazepam 0.5 mg SL at bedtime",
          "Reorientation, glasses and family presence",
          "Soft wrist restraints overnight",
        ],
        correct: 3,
        explanation:
          "The bundle's elements carry almost no harm, so even if clustering has overstated the trial's precision, the balance favours using them for her. Reorientation, sensory aids and family presence target the triggers of delirium in a frail patient with dementia. Diphenhydramine and lorazepam are listed in the Beers Criteria as drugs to avoid in older adults because they cause delirium. Routine antipsychotic use is not supported to prevent or treat delirium without severe distress. Restraints worsen agitation and raise the risk of injury.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "beers-2023",
      },
    ],
    sources: [S.consortCluster, S.ug, S.beers],
    ...META,
  },

  /* 21 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-21",
    topic: "critical-appraisal",
    title: "A bedtime pill and another fall",
    stem:
      "A 79-year-old woman presents to the emergency department after tripping on a rug on her way to the bathroom at night. She landed on her left forearm. She takes lorazepam 1 mg at bedtime for insomnia, started 2 years ago, and amlodipine. She lives alone. She has a bruised left forearm with a normal X-ray, and she walks steadily with a cane. A fictional prospective cohort study followed 800 adults aged 70 or older discharged from 5 emergency departments after a fall. Of the 200 who were taking a benzodiazepine, 60 fell again within 90 days. Of the 600 who were not, 90 fell again. Follow-up was complete.",
    vitals: { temperature: "36.6°C oral", pulse: "74/minute", resp: "16/minute", bp: "134/76 mmHg", o2sat: "96% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the relative risk of a repeat fall within 90 days with benzodiazepine use?",
        options: ["0.15", "2.0", "2.4", "6.7", "15"],
        correct: 1,
        explanation:
          "The risk of a repeat fall was 60 of 200, or 30%, with a benzodiazepine and 90 of 600, or 15%, without. The relative risk is 0.30 divided by 0.15, which is 2.0. The odds ratio is 60 times 510 divided by 140 times 90, or 2.4, which overstates the relative risk when the outcome is this common. The value 0.15 is the absolute risk difference as a proportion, and 15 is the same difference in percentage points. The value 6.7 is the number needed to harm.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the number needed to harm for one additional repeat fall within 90 days?",
        options: ["2", "3", "5", "7", "15"],
        correct: 3,
        explanation:
          "The absolute risk increase is 30% minus 15%, or 15 percentage points. The number needed to harm is 1 divided by 0.15, or 6.7, rounded up to 7 by convention. So about 1 extra person in every 7 older adults on a benzodiazepine falls again within 90 days. The value 2 is the relative risk. The value 3 is the inverse of the 30% fall rate in the exposed group alone. A number needed to harm of 5 would need an absolute increase of 20 percentage points, and 15 is the increase itself.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following most threatens the conclusion that benzodiazepines caused the excess falls in this cohort?",
        options: [
          "Confounding by frailty and comorbidity",
          "Lack of blinding of the participants",
          "Recall bias about the index fall",
          "Too few repeat falls to analyze",
          "Use of a prospective design",
        ],
        correct: 0,
        explanation:
          "Patients were not randomized to benzodiazepines. Those who take them may be frailer, more cognitively impaired or more unwell, and those traits cause falls on their own. Unless the analysis adjusts for them, some of the doubled risk may reflect who gets the drug rather than the drug. Blinding matters less for an objective outcome such as a fall. Recall bias affects case-control studies that ask about past exposure. With 150 repeat falls the study had enough events. A prospective design is a strength of this cohort.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "strobe",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her lorazepam?",
        options: [
          "Add melatonin and continue lorazepam",
          "Continue lorazepam at the same dose",
          "Stop lorazepam abruptly tonight",
          "Switch lorazepam to zopiclone 7.5 mg",
          "Taper lorazepam with sleep support",
        ],
        correct: 4,
        explanation:
          "The cohort adds to consistent evidence that benzodiazepines raise fall risk in older adults, and she has just fallen at night while taking one. The Beers Criteria advise avoiding benzodiazepines in older adults, so a gradual taper with nonpharmacologic sleep support, arranged with her family physician, is the right plan. Continuing the drug, with or without melatonin, leaves the risk in place. Stopping abruptly after 2 years of nightly use risks withdrawal. Zopiclone is also on the Beers list and carries a similar risk of falls.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "beers-2023",
      },
    ],
    sources: [S.ug, S.strobe, S.beers],
    ...META,
  },

  /* 22 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-22",
    topic: "critical-appraisal",
    title: "A small difference in a large trial",
    stem:
      "A 38-year-old man presents to the emergency department with 2 hours of severe left flank pain radiating to the groin, with vomiting. He had a kidney stone 3 years ago. He received ketorolac 15 mg IV 30 minutes ago. POCUS shows mild left hydronephrosis. A pharmacist proposes adding a new IV drug to the renal colic order set. She cites a fictional industry-funded randomized trial of 3 200 adults with renal colic, all given ketorolac, and then the new drug or placebo. The primary outcome was pain reduction at 30 minutes on a 100 mm visual analogue scale. Mean reduction was 48 mm with the drug and 44 mm with placebo, a difference of 4 mm (95% CI 2 to 6, p < 0.001). The minimal clinically important difference on this scale is about 13 mm.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "20/minute", bp: "156/90 mmHg", o2sat: "98% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the primary result of this trial?",
        options: [
          "Clinically important and precise",
          "Likely due to chance given its size",
          "Precise but too small to matter",
          "Unreliable because the trial was large",
          "Worth adopting because p is below 0.001",
        ],
        correct: 2,
        explanation:
          "The interval of 2 to 6 mm is narrow and excludes zero, so the effect is real. Even its upper limit of 6 mm is well below the 13 mm that patients notice. A very large trial can make a trivial difference statistically significant. Chance is an unlikely explanation with p below 0.001. Size makes a trial more reliable, not less. A small p value measures how surprising the result would be if the drug did nothing, not how large or useful the effect is.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        update: "A responder analysis reports at least 50% pain reduction at 30 minutes in 62% with the drug and 58% with placebo.",
        prompt: "Which of the following is the number needed to treat for one additional patient to achieve at least 50% pain reduction?",
        options: ["4", "7", "13", "25", "50"],
        correct: 3,
        explanation:
          "The absolute difference in responders is 62% minus 58%, or 4 percentage points. The number needed to treat is 1 divided by 0.04, which is 25. So 24 of every 25 patients given the drug gain no extra response. The value 4 is the mean difference in millimetres, not a number needed to treat. The value 7 is the relative increase, 4 divided by 58, as a percentage. The value 13 is the minimal important difference in millimetres. A number needed to treat of 50 would follow from a difference of only 2 percentage points.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "The trial reported 20 secondary outcomes. Only one, less nausea at 60 minutes (p = 0.04), favoured the drug. The abstract highlights this as a second benefit.",
        prompt: "Which of the following is the best interpretation of the nausea result?",
        options: [
          "Evidence that the drug is an antiemetic",
          "Likely a chance finding among many tests",
          "Proof of benefit, since p is below 0.05",
          "Reason to make nausea the primary outcome",
          "Stronger evidence than the primary outcome",
        ],
        correct: 1,
        explanation:
          "With 20 secondary outcomes each tested at a threshold of 0.05, about one would be expected to reach significance by chance even if the drug did nothing. A single p of 0.04 among them should be read as a hypothesis, not as evidence of an antiemetic effect. A p value below 0.05 is not proof of benefit, least of all when many tests were run. Changing the primary outcome after the results are known is outcome switching. A secondary finding carries less weight than the prespecified primary outcome, not more.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-2025",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to the proposal to change the order set?",
        options: [
          "Keep the current order set unchanged",
          "Offer the drug for all patients with colic",
          "Offer the drug only for recurrent stones",
          "Replace ketorolac with the new drug",
          "Use the drug when ketorolac fails",
        ],
        correct: 0,
        explanation:
          "The drug's benefit is below the minimal important difference, and its number needed to treat for a meaningful response is 25. That does not justify the added cost, drug exposure and workload for every patient with colic. The trial did not test the drug in recurrent stones or after ketorolac failure, so offering it for those groups goes beyond the evidence. Every patient in the trial also received ketorolac. So the data cannot support replacing ketorolac with the new drug.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.ug, S.consort],
    ...META,
  },

  /* 23 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-23",
    topic: "critical-appraisal",
    title: "A significant result that could flip",
    stem:
      "A 68-year-old man presents to the emergency department with 90 minutes of right anterior epistaxis. He takes apixaban 5 mg twice daily for atrial fibrillation. The bleeding stopped after 20 minutes of firm pressure and a topical vasoconstrictor. His hemoglobin is 138 g/L. A colleague wants to stock a new topical hemostatic gel. She cites a fictional open label randomized trial at 2 emergency departments. It randomized 124 adults with anterior epistaxis to the gel or a saline-soaked pledget. Four patients in the gel group were lost to follow-up and excluded, leaving 60 per group. The treating physician judged when bleeding stopped. Bleeding stopped within 15 minutes in 46 of 60 (76.7%) with the gel and 33 of 60 (55.0%) with saline (p = 0.02).",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute irregular", resp: "16/minute", bp: "162/94 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the number needed to treat with the gel for one additional patient to stop bleeding within 15 minutes?",
        options: ["4", "5", "22", "55", "77"],
        correct: 1,
        explanation:
          "The absolute difference is 76.7% minus 55.0%, or 21.7 percentage points. The number needed to treat is 1 divided by 0.217, or 4.6, rounded up to 5 by convention. Rounding up is the rule because rounding down overstates the benefit, so 4 is wrong. The value 22 is the absolute difference in percentage points, not the number needed to treat. The values 55 and 77 are the success rates in each group.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        update: "The fragility index is 2. Moving 2 saline patients from continued bleeding to stopped bleeding would raise the Fisher exact p value to 0.05 or more.",
        prompt: "Which of the following is the best interpretation of the fragility index alongside the losses to follow-up?",
        options: [
          "Four missing outcomes could overturn the result",
          "Fragility matters only when p exceeds 0.01",
          "Losses under 5% cannot change the result",
          "The index shows a large treatment effect",
          "The result is robust with a p value of 0.02",
        ],
        correct: 0,
        explanation:
          "Only 2 changed outcomes would remove statistical significance, and 4 randomized patients have no outcome at all. If those 4 had done poorly, the result could lose significance, so it is fragile. A fragility index says how many events hold up a p value. It is not a measure of effect size. Fragility is a concern at any p value, and it is greatest near 0.05. Losses below 5% can still overturn a result when the fragility index is smaller than the number lost. A p of 0.02 alone says nothing about robustness.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "fragility-index",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following design changes would most reduce bias in measuring the primary outcome of this trial?",
        options: [
          "Enrolment at more sites",
          "Longer follow-up to 7 days",
          "Per-protocol primary analysis",
          "Stratified randomization by age",
          "Use of a blinded outcome assessor",
        ],
        correct: 4,
        explanation:
          "In this open label trial the treating physician, who knew the allocation, judged when bleeding stopped. That is a subjective call open to detection bias in favour of the new gel. A blinded assessor, or a timed objective definition checked by someone unaware of the group, protects the outcome. More sites improve generalizability, not measurement. Longer follow-up addresses rebleeding, a different question. A per-protocol analysis adds bias rather than removing it. Stratifying by age improves balance but does not fix how the outcome is judged.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2025",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to your colleague's proposal to stock the gel as first-line treatment?",
        options: [
          "Adopt it for anticoagulated patients only",
          "Adopt it since the number needed is under 10",
          "Adopt the gel as first-line for all patients",
          "Await a larger trial with blinded assessment",
          "Reject it as shown to be ineffective",
        ],
        correct: 3,
        explanation:
          "The effect looks large, but the trial is small, fragile and open to detection bias, so the result may not hold. A larger trial with blinded outcome assessment should come before a practice change. An attractive number needed to treat does not make an unreliable estimate trustworthy. The trial did not report results for anticoagulated patients, so limiting use to them has no support. The evidence is weak but it does not show the gel is ineffective, and the point estimate favours it.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.ug, S.fragility, S.consort],
    ...META,
  },
  /* 24 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-24",
    topic: "critical-appraisal",
    title: "Mortality before and after an alert",
    stem:
      "A 57-year-old woman presents to the emergency department with 2 days of fever, dysuria and right flank pain. She has type 2 diabetes. She has right costovertebral angle tenderness and warm extremities. Her lactate is 3.4 mmol/L, and the electronic triage sepsis alert fires. The alert was introduced after a fictional study at your hospital. In the 12 months before the alert, 30-day mortality among 1 000 adults coded with sepsis was 18%. In the 12 months after, among 1 300 adults, it was 15%. During the second year the hospital also opened an ICU outreach team and adopted a broader sepsis definition for coding. The authors conclude that the alert saves lives.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "24/minute", bp: "92/58 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the design of the study that supported the sepsis alert?",
        options: [
          "Case-control study",
          "Interrupted time series",
          "Prospective cohort study",
          "Randomized controlled trial",
          "Uncontrolled before-after study",
        ],
        correct: 4,
        explanation:
          "Mortality in one period before the alert is compared with one period after it, with no concurrent control group. That is an uncontrolled before-after study, one of the weakest designs for judging an intervention. An interrupted time series needs many measurements before and after the change so that an existing trend can be modelled, not just two yearly totals. No patients were allocated, so it is not a trial. It did not select patients by outcome, as a case-control study does, or follow an exposed and an unexposed group at the same time, as a cohort does.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following could explain the fall in sepsis mortality in this study, apart from any effect of the alert?",
        options: [
          "Blinding of outcome assessors",
          "Broader sepsis coding definition",
          "Larger sample after the alert",
          "Measuring mortality at 30 days",
          "New ICU outreach team",
          "Secular trends in sepsis care",
          "Single hospital setting",
          "Use of electronic health records",
        ],
        correct: [1, 4, 5],
        explanation:
          "A broader coding definition adds milder cases to the second year, which lowers mortality without any change in care. The new ICU outreach team is a cointervention that began at the same time. Sepsis care tends to improve year on year, and a before-after design cannot separate that trend from the alert. Death at 30 days is an objective outcome, so blinding and its timing do not create a spurious fall. A larger second-year sample improves precision, not bias. A single site and electronic records limit generalizability but do not explain the change.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the relative risk reduction in 30-day mortality reported by this study?",
        options: ["3%", "17%", "18%", "33%", "83%"],
        correct: 1,
        explanation:
          "Mortality fell from 18% to 15%, an absolute reduction of 3 percentage points. The relative risk reduction is 3 divided by 18, or 16.7%, which rounds to 17%. The relative risk is 15 divided by 18, or 0.83, so 83% is the relative risk expressed as a percentage, not the reduction. The value 3% is the absolute reduction and 18% is the baseline mortality. The value 33 is the number needed to treat before rounding up to 34.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following designs would best test whether the alert itself reduces sepsis mortality across a health region?",
        options: [
          "Case-control study of sepsis deaths",
          "Cross-sectional survey of staff",
          "Larger before-after study",
          "Retrospective cohort at one site",
          "Stepped-wedge cluster randomized trial",
        ],
        correct: 4,
        explanation:
          "An alert changes how a whole department works, so it is randomized by hospital. A stepped-wedge design switches each hospital on at a random time. Every site eventually gets the alert, and calendar time can be modelled, which separates the alert's effect from secular trends and cointerventions. A larger before-after study repeats the same confounding with more patients. A case-control study of deaths, a single-site cohort and a staff survey cannot control for unmeasured differences or for time trends.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stepped-wedge",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for this patient now?",
        options: [
          "Antibiotics once the urine culture results",
          "Crystalloid bolus, cultures and antibiotics now",
          "CT abdomen before starting antibiotics",
          "Oral ciprofloxacin and discharge home",
          "Wait for the ICU outreach team to assess",
        ],
        correct: 1,
        explanation:
          "She has probable pyelonephritis with hypotension and a lactate of 3.4 mmol/L, so she needs fluid resuscitation, blood and urine cultures, and IV antibiotics within the first hour. Doubt about the alert's value does not weaken the evidence for early treatment of sepsis with hypoperfusion. Waiting for culture results or for CT delays antibiotics in a patient at high risk of death. Discharge on oral therapy is unsafe with hypotension and a raised lactate. The outreach team can help, but treatment should not wait for them.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "ssc-2021",
      },
    ],
    sources: [S.ug, S.steppedWedge, S.ssc],
    ...META,
  },

  /* 25 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-25",
    topic: "critical-appraisal",
    title: "A sore throat and a rapid test",
    stem:
      "A 24-year-old woman presents to the emergency department with 2 days of sore throat, cough and a runny nose. She has not had a fever at home and is eating and drinking normally. She has mild pharyngeal redness without exudate, no tender anterior cervical nodes and clear lungs. A fictional study evaluated a rapid antigen test for group A streptococcus in 1 500 adults with sore throat, using throat culture as the reference standard. It reports a sensitivity of 86% and a specificity of 95%. In that study, adults with her clinical features had a 5% prevalence of group A streptococcus.",
    vitals: { temperature: "37.4°C oral", pulse: "82/minute", resp: "16/minute", bp: "118/72 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to her probability of group A streptococcus if the rapid test were positive?",
        options: ["5%", "17%", "48%", "86%", "95%"],
        correct: 2,
        explanation:
          "The positive likelihood ratio is 0.86 divided by 0.05, or 17.2. Pretest odds are 5 divided by 95, or 0.053. Multiplied by 17.2 this gives odds of 0.91, a probability of 48% (0.91 divided by 1.91). So even a positive result leaves her about as likely not to have streptococcus as to have it. The value 17% reads the likelihood ratio as a percentage. The values 86% and 95% are the sensitivity and specificity, which are not post-test probabilities, and 5% ignores the result.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is closest to her probability of group A streptococcus if the rapid test were negative?",
        options: ["0.1%", "0.8%", "2%", "5%", "14%"],
        correct: 1,
        explanation:
          "The negative likelihood ratio is 0.14 divided by 0.95, or 0.15. Pretest odds of 0.053 multiplied by 0.15 give odds of 0.0078, a probability of 0.8%. The value 14% is the false negative rate, 1 minus the sensitivity, which is not a post-test probability. The value 5% ignores the result. A figure of 2% would need a much weaker test, and 0.1% would need a likelihood ratio near 0.02.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to testing and treatment for her?",
        options: [
          "Antibiotics without testing",
          "Rapid test and treat if positive",
          "Rapid test, then culture if negative",
          "Throat culture and delayed antibiotics",
          "No testing and no antibiotics",
        ],
        correct: 4,
        explanation:
          "Her probability of 5% sits below the testing threshold. If 1 000 patients like her were tested, about 43 true positives and 48 false positives would be treated, so half of those given antibiotics would gain nothing and bear the side effects. Her cough and runny nose point to a viral cause, and a missed streptococcal pharyngitis in a healthy adult carries a low risk. Treating without testing gives antibiotics to 95 of every 100 patients like her who do not need them. A culture, or a culture after a negative rapid test, adds cost and delay for the same low yield.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "pauker-threshold",
      },
      {
        id: "q4",
        kind: "single",
        update: "The study reports a sensitivity of 95% in adults with fever, exudate and tender nodes, and 70% in adults with none of these features.",
        prompt: "Which of the following best explains why the test's sensitivity differs between these two groups?",
        options: [
          "Culture misses streptococcus in mild cases",
          "Higher prevalence raises sensitivity directly",
          "Milder disease has less antigen to detect",
          "Operators test severe cases more carefully",
          "Specificity rises as sensitivity falls",
        ],
        correct: 2,
        explanation:
          "Sensitivity varies with the spectrum of disease. Patients with florid pharyngitis carry more bacteria and more antigen, so the rapid test detects them more often than it detects mild or early infection. This spectrum effect is why a single pooled sensitivity can mislead for a patient at one end of the range. Prevalence does not change sensitivity directly, although sicker groups often have both higher prevalence and higher sensitivity. If culture missed mild cases, the rapid test's positives would be counted as false, not missed. No operator difference is given, and sensitivity and specificity are not shown to trade off between these groups.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "stard-2015",
      },
    ],
    sources: [S.ug, S.pauker, S.stard],
    ...META,
  },

  /* 26 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-26",
    topic: "critical-appraisal",
    title: "An adult rule for a toddler",
    stem:
      "You are working in a community hospital emergency department. A 20-month-old boy is brought in by his mother 1 hour after he fell about 1 metre from a kitchen stool onto a tile floor. He cried at once and did not lose consciousness. He vomited once and is acting normally, according to his mother. He has a 3 cm boggy right parietal scalp hematoma with no palpable skull depression, and he is alert and playful. A nurse practitioner applies a fictional minor head injury rule. It was derived at 6 Canadian emergency departments in 3 000 patients aged 16 or older with a GCS of 13 to 15. Its predictors are amnesia before impact, persistent headache, 2 or more episodes of vomiting, and a GCS below 15 at 2 hours. He has none, so the rule rates him as low risk.",
    vitals: { temperature: "36.8°C tympanic", pulse: "118/minute", resp: "26/minute", o2sat: "99% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following features of this case most limit applying the fictional rule to this boy?",
        options: [
          "Age outside the derivation population",
          "Canadian derivation sites",
          "Community hospital setting",
          "Derivation sample of 3 000 patients",
          "Normal behaviour per his mother",
          "Predictors he cannot yet report",
          "Single episode of vomiting",
          "Use of a GCS of 13 to 15",
        ],
        correct: [0, 5],
        explanation:
          "The rule was derived only in patients aged 16 or older, so its accuracy in a 20-month-old is unknown. Two of its predictors, amnesia and headache, depend on a verbal report that a toddler cannot give, so a score of zero may simply reflect missing information. Canadian sites, a community setting and a large sample do not limit its use here. His normal behaviour and single vomit are findings the rule scores, not reasons it fails. His GCS of 15 is within the rule's range.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "mcginn-rules",
      },
      {
        id: "q2",
        kind: "single",
        update: "In a fictional external validation in adults, the rule identified 120 of 124 patients with clinically important brain injury.",
        prompt: "Which of the following is closest to the lower limit of the 95% confidence interval for the rule's sensitivity in this validation?",
        options: ["80%", "86%", "89%", "92%", "97%"],
        correct: 3,
        explanation:
          "Sensitivity is 120 divided by 124, or 96.8%. With only 124 patients who had the outcome, the Wilson 95% confidence interval runs from about 92.0% to 98.7%. So the rule could miss up to 8 in 100 injuries and still fit these data. The value 97% is the point estimate, not a limit. Values of 80% to 89% are wider than this sample allows. The width of the interval depends on the number of patients with the outcome, not on the total enrolled.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "stiell-wells-rules",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following steps would be needed before a rule like this could be used in children under 2 years?",
        options: [
          "Derivation with age-appropriate predictors",
          "External validation in adults at more sites",
          "Impact analysis in adult departments",
          "Meta-analysis of adult validation studies",
          "Reliability study of the adult predictors",
        ],
        correct: 0,
        explanation:
          "Validation tests a rule in the population it was built for. Here the problem is the predictors themselves, because a toddler cannot report amnesia or headache. A rule for young children needs derivation with predictors that can be assessed at that age, such as behaviour and scalp findings, followed by its own validation. More adult validation, an impact analysis in adults, a meta-analysis of adult studies or a reliability study of adult predictors all add evidence about adults. None of them tells you how the rule performs in toddlers.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stiell-wells-rules",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to decide on imaging for this boy?",
        options: [
          "CT head for any toddler with a hematoma",
          "Discharge as low risk by the adult rule",
          "MRI brain under sedation today",
          "Skull X-rays to look for a fracture",
          "Use a pediatric rule validated under 2 years",
        ],
        correct: 4,
        explanation:
          "A prospectively derived and validated pediatric rule exists for children under 2 years, and it includes a non-frontal scalp hematoma as a predictor. It supports a choice between CT and observation, informed by his findings and his parent's preferences. The adult rule was never tested at his age and cannot assess his verbal predictors, so its low-risk result gives false reassurance. CT for every toddler with a hematoma exposes many children to radiation needlessly. MRI under sedation carries its own risks, and skull X-rays miss intracranial injury.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "pecarn",
      },
    ],
    sources: [S.mcginn, S.stiell, S.pecarn],
    ...META,
  },

  /* 27 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-27",
    topic: "critical-appraisal",
    title: "An algorithm flags an ECG",
    stem:
      "A 48-year-old woman presents to the emergency department with 2 days of sharp left chest pain that began after a cold. The pain is worse lying back and on deep breaths. She has no cardiac history and does not smoke. Her ECG shows sinus rhythm without ST elevation on your review. A new fictional artificial intelligence ECG algorithm flags possible coronary occlusion. The vendor study enrolled 500 patients with angiographically confirmed coronary occlusion and 500 outpatients with normal ECGs having routine screening. It reports a sensitivity and a specificity of 90%. In your department, about 2% of patients who have an ECG for chest pain have a coronary occlusion.",
    vitals: { temperature: "37.6°C oral", pulse: "96/minute", resp: "18/minute", bp: "126/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the design of the vendor study?",
        options: [
          "Consecutive cohort of chest pain",
          "Diagnostic case-control study",
          "Randomized trial of ECG reading",
          "Retrospective cohort of all ECGs",
          "Systematic review of ECG studies",
        ],
        correct: 1,
        explanation:
          "The study sampled patients by their known disease status, 500 with occlusion and 500 without, rather than enrolling everyone in whom the test would be used. That is a diagnostic case-control, or two-gate, design. It is useful early in test development but tends to overstate accuracy. A consecutive cohort would enrol all patients with chest pain who need an ECG, whatever the final diagnosis. No patients were randomized. The study did not include all ECGs from a period, and it pooled no other studies.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stard-2015",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is closest to the positive predictive value of the algorithm in your department?",
        options: ["2%", "10%", "16%", "50%", "90%"],
        correct: 2,
        explanation:
          "Among 1 000 patients, 20 have an occlusion and the algorithm flags 18 of them. Of the 980 without one, 10% or 98 are flagged falsely. The positive predictive value is 18 divided by 116, or 15.5%, which rounds to 16%. The vendor's 90% predictive value reflects its artificial 50% prevalence. A value of 50% would apply at a prevalence of 10%. The value 10% is the false positive rate, and 2% is the prevalence.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes how the choice of controls most likely affected the reported specificity?",
        options: [
          "Accurate, since angiography was the reference",
          "Overestimated, since controls had normal ECGs",
          "Unaffected, since specificity ignores prevalence",
          "Unaffected, since the sample was large",
          "Underestimated, since controls were outpatients",
        ],
        correct: 1,
        explanation:
          "Controls were healthy outpatients with normal ECGs, the easiest possible negatives. Real patients with chest pain often have bundle branch block, hypertrophy, pericarditis or early repolarization, which the algorithm is more likely to flag falsely. So the specificity in practice will likely be lower than 90%. This is spectrum bias. Specificity does not depend on prevalence, but it does depend on the mix of patients without disease. A large sample gives a precise estimate of a biased figure. Angiography confirms the cases but did not verify the controls.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "stard-2015",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for this patient?",
        options: [
          "Activate the catheterization lab now",
          "Discharge, as the flag is likely false",
          "Give tenecteplase and transfer",
          "Serial ECGs and troponin, then reassess",
          "Start heparin and admit to cardiology",
        ],
        correct: 3,
        explanation:
          "In your department a flag carries at most a 16% chance of occlusion, and the true figure is probably lower given spectrum bias. Her pleuritic, positional pain after a viral illness points elsewhere, but the flag cannot be ignored. Serial ECGs and a troponin, with your own review, resolve the question safely. Catheterization, fibrinolysis or heparin on an unconfirmed flag would expose most flagged patients to harm with no benefit. Discharge without testing dismisses a result that still raises her probability above her baseline.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [S.stard, S.ug],
    ...META,
  },

  /* 28 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-28",
    topic: "critical-appraisal",
    title: "A low marker and a worrying thigh",
    stem:
      "A 46-year-old man presents to the emergency department with 24 hours of worsening right thigh pain. He scraped the thigh on a fence 2 days ago. He has type 2 diabetes treated with metformin. He has 10 cm of erythema over the lateral thigh with tense edema extending beyond it. The pain is severe and out of proportion to the skin findings. There is no crepitus. A fictional serum biomarker, marker N, is 0.6 ng/mL. A fictional study of marker N in 400 adults with suspected necrotizing soft tissue infection reports an area under the ROC curve of 0.80. Surgical exploration was the reference standard for all patients.",
    vitals: { temperature: "38.6°C oral", pulse: "118/minute", resp: "22/minute", bp: "98/60 mmHg", o2sat: "97% on room air", weight: "104 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The study reports three cutoffs. At 1.0 ng/mL, sensitivity is 95% and specificity 40%. At 2.5 ng/mL, 80% and 75%. At 5.0 ng/mL, 50% and 95%.",
        prompt: "Which of the following is the negative likelihood ratio of marker N at the 1.0 ng/mL cutoff?",
        options: ["0.05", "0.13", "0.27", "0.53", "1.6"],
        correct: 1,
        explanation:
          "The negative likelihood ratio is 1 minus the sensitivity, divided by the specificity. At 1.0 ng/mL that is 0.05 divided by 0.40, or 0.125, which rounds to 0.13. The value 0.05 is the false negative rate alone. The values 0.27 and 0.53 are the negative likelihood ratios at the 2.5 and 5.0 ng/mL cutoffs. The value 1.6 is the positive likelihood ratio at 1.0 ng/mL, 0.95 divided by 0.60.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        update: "Before the result, you estimated his probability of necrotizing infection at 50% from his findings.",
        prompt: "Which of the following is closest to his probability of necrotizing infection after the marker N result of 0.6 ng/mL?",
        options: ["5%", "6%", "11%", "21%", "34%"],
        correct: 2,
        explanation:
          "His result is below the 1.0 ng/mL cutoff, where the negative likelihood ratio is 0.125. Pretest odds of 1.0 multiplied by 0.125 give odds of 0.125, a probability of 11% (0.125 divided by 1.125). Multiplying the 50% probability directly by 0.125 gives 6%, a common error. The value 5% is the false negative rate. The values 21% and 34% use the likelihood ratios at the higher cutoffs, which do not apply to a result of 0.6 ng/mL.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the best interpretation of the area under the ROC curve of 0.80 for marker N?",
        options: [
          "80% of patients are correctly classified",
          "Probability a case outranks a non-case is 0.80",
          "Sensitivity is 80% at the best cutoff",
          "The test is useful at every cutoff",
          "The test rules out 80% of non-cases",
        ],
        correct: 1,
        explanation:
          "The area under the ROC curve is the probability that a randomly chosen patient with the disease has a higher marker value than a randomly chosen patient without it. At 0.80 that happens 4 times in 5. It summarizes discrimination across all cutoffs and does not give accuracy, sensitivity or specificity at any single one. The 2.5 ng/mL cutoff happens to have 80% sensitivity, but that is a separate figure. A useful overall area can still hide cutoffs, such as 1.0 ng/mL, with poor specificity.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for this patient?",
        options: [
          "Discharge on oral antibiotics",
          "IV antibiotics and admit to medicine",
          "MRI of the thigh before any surgery",
          "Repeat marker N in 6 hours",
          "Urgent surgical consultation for exploration",
        ],
        correct: 4,
        explanation:
          "An 11% chance of a necrotizing infection, with hypotension, tachycardia and pain out of proportion, is far too high to accept, so the low marker must not delay surgery. Surgical exploration is both the diagnostic standard and the treatment, alongside broad IV antibiotics. Admission to medicine or a repeat marker in 6 hours lets a rapidly lethal infection progress. MRI delays surgery and should not hold up exploration when suspicion is high. Discharge on oral antibiotics is unsafe in a hypotensive patient.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "idsa-ssti",
      },
    ],
    sources: [S.ug, S.idsa],
    ...META,
  },
  /* 29 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-29",
    topic: "critical-appraisal",
    title: "Rating a body of evidence for vertigo",
    stem:
      "A 66-year-old woman presents to the emergency department with 18 hours of constant vertigo, nausea and unsteadiness that began after a cold. An experienced physician finds the examination consistent with vestibular neuritis and judges a stroke unlikely. She has hypothyroidism treated with levothyroxine. She asks about drug V, a fictional oral medication she read about. A fictional systematic review pooled 6 randomized trials of drug V with 900 patients. Symptom resolution at 7 days had a pooled relative risk of 1.30 (95% CI 0.98 to 1.72). I squared was 65%. Four trials did not conceal allocation or blind outcome assessors. All trials enrolled outpatients in ear, nose and throat clinics a median of 6 days after onset. The funnel plot was symmetric.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "142/84 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 4,
        prompt: "Which of the following GRADE domains should lower the certainty of this evidence for her decision?",
        options: [
          "Dose-response gradient",
          "Imprecision",
          "Inconsistency",
          "Indirectness",
          "Large effect size",
          "Publication bias",
          "Risk of bias",
        ],
        correct: [1, 2, 3, 6],
        explanation:
          "Four of six trials lacked allocation concealment and blinded assessment, which is risk of bias. An I squared of 65% signals inconsistency between trials. The interval runs from a 2% reduction to a 72% increase, so it includes both no effect and a large benefit, which is imprecision. Clinic patients treated a median of 6 days after onset differ from her, which is indirectness. The symmetric funnel plot gives no sign of publication bias. A dose-response gradient and a large effect are reasons to raise certainty in observational evidence, and neither applies.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "grade-2008",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the overall GRADE certainty of this evidence for symptom resolution at 7 days?",
        options: ["High certainty", "Indeterminate certainty", "Low certainty", "Moderate certainty", "Very low certainty"],
        correct: 4,
        explanation:
          "Randomized trials start at high certainty in GRADE. Here serious risk of bias, inconsistency, indirectness and imprecision each lower it by at least one level, so the evidence ends at very low. That means the true effect may well differ substantially from the pooled estimate. Moderate or low certainty would fit only one or two concerns. High certainty needs randomized evidence with no serious limitation. GRADE has four levels and can rate any body of evidence, so indeterminate is not one of its categories.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "grade-2008",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to respond to her question about drug V?",
        options: [
          "Give drug V only if she is admitted",
          "Prescribe drug V as standard care",
          "Refuse drug V as shown to be harmful",
          "Share the uncertainty and decide together",
          "Withhold drug V as shown to be ineffective",
        ],
        correct: 3,
        explanation:
          "With very low certainty evidence, the benefit of drug V is uncertain and the decision depends on her values, such as how she weighs a possible faster recovery against cost and side effects. So the evidence should be shared with her and the choice made together. Prescribing it as standard care overstates evidence that has not shown a benefit. The review showed neither harm nor lack of effect, only uncertainty, so refusing it on either ground is also wrong. Admission status has no bearing on whether the drug works.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "grade-2008",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following new studies would most increase the certainty of evidence about drug V for emergency patients like her?",
        options: [
          "Case series of emergency patients treated",
          "Large blinded trial in emergency patients",
          "Larger unblinded trial in clinic patients",
          "Pharmacy claims study of drug V users",
          "Updated review of the same six trials",
        ],
        correct: 1,
        explanation:
          "A large trial with concealed allocation and blinded outcome assessment addresses risk of bias and imprecision at once. If it enrols patients within a day or two of onset in the emergency department, it also fixes indirectness. A larger unblinded clinic trial repeats the existing biases and indirectness. Case series and claims data lack a randomized control group and start at low certainty. Reanalyzing the same six trials cannot add information they do not contain.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "grade-2008",
      },
    ],
    sources: [S.grade],
    ...META,
  },

  /* 30 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-30",
    topic: "critical-appraisal",
    title: "A block for broken ribs",
    stem:
      "A 74-year-old man presents to the emergency department after falling down 4 stairs. He has left chest wall pain and COPD. CT shows 4 displaced left rib fractures without pneumothorax. Your department is reviewing a fictional randomized trial of 600 adults aged 65 or older with 3 or more rib fractures. Patients were randomized to a serratus anterior plane block by an emergency physician or to usual analgesia. Twenty percent of the block group did not receive a block because no trained physician was on shift, and 10% of the usual care group received one from anesthesia. Pain at 24 hours was lower with the block by 2.1 points on a 10 point scale (95% CI 1.6 to 2.6). Pneumonia within 30 days occurred in 15% with the block and 20% with usual care.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "22/minute", bp: "146/80 mmHg", o2sat: "93% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "By intention to treat, the hazard ratio for pneumonia with the block was 0.78 (95% CI 0.55 to 1.10).",
        prompt: "Which of the following best interprets the intention-to-treat result for pneumonia?",
        options: [
          "Harmful, since the interval reaches 1.10",
          "Inconclusive, allowing benefit or slight harm",
          "Proven benefit of 22% fewer pneumonias",
          "Proven benefit, since the estimate is below 1",
          "No effect, since the interval includes 1",
        ],
        correct: 1,
        explanation:
          "The interval runs from a 45% lower hazard to a 10% higher hazard. That is compatible with an important benefit, no effect or slight harm, so the result is inconclusive. An interval that includes 1 does not show that there is no effect. It shows the trial could not tell. A point estimate below 1 is not proof of benefit when the interval crosses 1. The upper limit of 1.10 marks the largest harm compatible with the data, not a harm shown.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the number needed to treat implied by the crude pneumonia rates in this trial?",
        options: ["5", "15", "20", "22", "78"],
        correct: 2,
        explanation:
          "Pneumonia fell from 20% to 15%, an absolute reduction of 5 percentage points. The number needed to treat is 1 divided by 0.05, or 20. Given the inconclusive interval, that figure is uncertain and should be quoted with that caveat. The value 5 is the inverse of the 20% control rate, and 15 is the block group rate. The values 22 and 78 come from the hazard ratio of 0.78, which is a relative measure and cannot give a number needed to treat directly.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "A per-protocol analysis comparing patients who did and did not actually receive a block reports a hazard ratio of 0.62 (95% CI 0.41 to 0.93).",
        prompt: "Which of the following best explains why this per-protocol result is less trustworthy than the intention-to-treat result?",
        options: [
          "Intention to treat inflates the effect",
          "Per-protocol analysis has fewer events",
          "Per-protocol analysis ignores crossover",
          "Receipt of the block was not randomized",
          "The hazard ratio overstates small effects",
        ],
        correct: 3,
        explanation:
          "Once patients are grouped by the treatment they received, the comparison is no longer randomized. Blocks were missed when no trained physician was on shift, perhaps at night or on busy days, and given by anesthesia to selected patients. So those who got blocks may differ in prognosis. Intention to treat keeps randomization intact and tends to dilute, not inflate, the effect. A per-protocol analysis handles crossover by moving or dropping patients, and fewer events affect precision, not bias. A hazard ratio does not overstate small effects.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2025",
      },
      {
        id: "q4",
        kind: "single",
        update: "The minimal clinically important difference for this pain scale is about 1.3 points.",
        prompt: "Which of the following is the most appropriate change to your department's rib fracture pathway based on this trial?",
        options: [
          "Abandon blocks as shown to be ineffective",
          "Mandate blocks to prevent pneumonia",
          "Offer the block for pain control",
          "Reserve blocks for patients under 65",
          "Wait for trial data before any change",
        ],
        correct: 2,
        explanation:
          "The block lowered pain by 2.1 points, with an interval of 1.6 to 2.6 that sits above the roughly 1.3 point change patients notice. That is a precise, clinically important benefit. So offering the block for pain is justified, while the pneumonia benefit remains unproven. Mandating it to prevent pneumonia claims more than the trial showed. The trial did not show that blocks are ineffective. Patients under 65 were not studied, so reserving blocks for them runs opposite to the evidence. Waiting ignores a pain benefit already shown.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.ug, S.consort],
    ...META,
  },

  /* 31 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-31",
    topic: "critical-appraisal",
    title: "A syncope score in a new setting",
    stem:
      "You are working in a rural hospital emergency department. An 81-year-old woman presents after fainting while standing in church. She felt warm and nauseated beforehand and recovered fully within a minute. She has hypertension treated with hydrochlorothiazide. Her examination, ECG and troponin are normal. A fictional prognostic score for serious outcomes within 30 days of syncope was derived in 4 000 adults at urban academic centres, with a mean age of 52. It was then validated in 2 500 adults at 10 rural hospitals, with a mean age of 68, using the same outcomes and 30-day follow-up. The C statistic in the rural validation was 0.82. Her score predicts a 2% risk. In the rural validation, patients with her score had an observed rate of 6%.",
    vitals: { temperature: "36.5°C oral", pulse: "72/minute", resp: "16/minute", bp: "128/70 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the score's performance in the rural validation?",
        options: [
          "Good calibration but poor discrimination",
          "Good discrimination and calibration",
          "Good discrimination but poor calibration",
          "Poor discrimination and calibration",
          "Unusable, since the C statistic is below 0.9",
        ],
        correct: 2,
        explanation:
          "A C statistic of 0.82 means the score ranks patients well, so discrimination is good. But patients predicted to have a 2% risk had an observed risk of 6%, so the score underestimates absolute risk in this setting, which is poor calibration. The two properties are separate, and a score can rank correctly while every estimate is too low. A C statistic above 0.8 is generally considered good, and no fixed 0.9 threshold makes a score unusable.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "tripod",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the ratio of observed to expected risk for patients with her score in the rural validation?",
        options: ["0.33", "2.0", "3.0", "4.0", "6.0"],
        correct: 2,
        explanation:
          "The observed risk is 6% and the expected risk from the score is 2%, so the ratio is 6 divided by 2, or 3.0. Serious outcomes occurred three times as often as predicted. A value of 0.33 inverts the ratio, which would imply overprediction. The value 4.0 is the difference in percentage points, not a ratio. The values 2.0 and 6.0 are the expected and observed risks themselves.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "tripod",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best explains why the score underestimates risk in the rural hospitals?",
        options: [
          "Higher baseline risk than at derivation",
          "Longer follow-up in the rural study",
          "Lower rate of serious outcomes in rural sites",
          "Random error from a small validation",
          "Too few predictors in the derivation",
        ],
        correct: 0,
        explanation:
          "The rural patients were on average 16 years older than the derivation cohort, so their baseline risk of serious outcomes was higher. A score calibrated to a younger urban population will then predict risks that are too low, even while it still ranks patients well. Follow-up was the same 30 days in both studies. A lower rural outcome rate would cause overprediction, not underprediction. With 2 500 patients, chance is unlikely to explain a threefold gap. Missing predictors would lower discrimination, yet the C statistic stayed good.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "tripod",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following risk estimates is most appropriate to use when discussing disposition with her?",
        options: [
          "Average of the predicted and observed risks",
          "Clinical judgment alone, ignoring the score",
          "Locally observed 6% risk for her score",
          "Predicted 2% risk from the original score",
          "Risk from the urban derivation cohort",
        ],
        correct: 2,
        explanation:
          "The rural validation used patients like her in hospitals like hers, so the locally observed 6% is the best estimate of her risk. Quoting the uncalibrated 2% would understate it threefold. Averaging the two has no statistical basis. The urban derivation cohort is younger and less like her. The score still discriminates well, so ignoring it throws away useful information. Recalibrating a score to the local population keeps its ranking and corrects its absolute risks.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [S.tripod, S.ug],
    ...META,
  },

  /* 32 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-32",
    topic: "critical-appraisal",
    title: "A young infant and a nebulizer trial",
    stem:
      "A 7-week-old boy born at 32 weeks' gestation is brought to the emergency department with 3 days of cough and runny nose and 1 day of poor feeding. He has taken about half his usual feeds today. He has subcostal retractions, nasal flaring and diffuse crackles and wheeze. A resident asks about a nebulized drug studied in a fictional randomized trial at 3 tertiary pediatric emergency departments. It enrolled 800 infants aged 3 to 12 months with a first episode of bronchiolitis. It excluded infants born before 36 weeks and those with heart or lung disease. Respiratory therapists gave every dose under a strict protocol, and adherence was checked. Hospital admission occurred in 22% with the drug and 30% with placebo.",
    vitals: { temperature: "37.9°C rectal", pulse: "168/minute", resp: "64/minute", o2sat: "92% on room air", weight: "3.9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the number needed to treat with the nebulized drug to prevent one hospital admission in this trial?",
        options: ["5", "8", "13", "27", "30"],
        correct: 2,
        explanation:
          "Admission fell from 30% to 22%, an absolute risk reduction of 8 percentage points. The number needed to treat is 1 divided by 0.08, or 12.5, rounded up to 13. The value 8 is the absolute reduction in percentage points. The value 27 is the relative risk reduction, 8 divided by 30, as a percentage. The value 30 is the placebo admission rate. The value 5 is about the inverse of the 22% admission rate with the drug (4.5), which ignores the comparison between groups.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes this trial on the spectrum from explanatory to pragmatic design?",
        options: [
          "Cluster, testing effects across sites",
          "Explanatory, testing efficacy in ideal conditions",
          "Noninferiority, testing against a margin",
          "Observational, testing use in real practice",
          "Pragmatic, testing effectiveness in usual care",
        ],
        correct: 1,
        explanation:
          "The trial used tertiary centres, strict eligibility, therapist-delivered doses and adherence checks. Those are features of an explanatory trial, which asks whether a drug can work under ideal conditions. A pragmatic trial would enrol the broad range of infants seen in ordinary departments and let usual staff give the drug as they normally would. Individual infants, not sites, were randomized, so it is not a cluster trial. It compared the drug with placebo for superiority, not against a margin, and it was randomized, not observational.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2025",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following features of this infant most limit applying the trial result to him?",
        options: [
          "Age under 3 months",
          "Birth at 32 weeks",
          "Crackles on examination",
          "First episode of bronchiolitis",
          "Low-grade fever",
          "Oxygen saturation of 92%",
          "Sex of the infant",
          "Three days of symptoms",
        ],
        correct: [0, 1],
        explanation:
          "The trial enrolled infants aged 3 to 12 months and excluded those born before 36 weeks. At 7 weeks and born at 32 weeks, he falls outside both limits. Young and premature infants are also the ones at highest risk of apnea and severe disease, so the drug's effect in them cannot be assumed. Crackles, low-grade fever, a saturation of 92% and 3 days of symptoms are typical of bronchiolitis and fit the trial population. A first episode matches its entry criteria, and sex was not an eligibility criterion.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for this infant?",
        options: [
          "Dexamethasone PO and discharge home",
          "Discharge after one dose of the drug",
          "Give the drug and observe for 4 hours",
          "Nebulized salbutamol trial, then discharge",
          "Supportive care and admission with monitoring",
        ],
        correct: 4,
        explanation:
          "He is 7 weeks old, was born at 32 weeks, has marked work of breathing and is taking only half his feeds. He needs admission for monitoring, feeding support and oxygen if his saturation falls further. The Canadian Paediatric Society recommends supportive care for bronchiolitis and advises against routine salbutamol and corticosteroids. The trial drug was never tested in infants like him, so giving it, with or without discharge, relies on evidence that does not apply to him.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "cps-bronchiolitis",
      },
    ],
    sources: [S.ug, S.consort, S.cps],
    ...META,
  },
  /* 33 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-33",
    topic: "critical-appraisal",
    title: "Weighing clots against bleeds in a cast",
    stem:
      "A 38-year-old man presents to the emergency department 3 hours after twisting his right ankle playing basketball. X-ray shows a nondisplaced distal fibular fracture. Orthopedics advises a below-knee cast with no weight bearing for 6 weeks. He had a deep vein thrombosis after knee surgery 5 years ago and completed 3 months of anticoagulation. He takes no medications. A fictional randomized trial of 1 500 adults in below-knee casts compared prophylactic-dose low molecular weight heparin (LMWH) daily for the duration of the cast with no prophylaxis. It excluded patients with prior venous thromboembolism (VTE). Symptomatic VTE at 3 months occurred in 0.8% with LMWH and 2.0% without. Major bleeding occurred in 0.6% with LMWH and 0.2% without.",
    vitals: { temperature: "36.6°C oral", pulse: "76/minute", resp: "14/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the number needed to treat with LMWH to prevent one symptomatic VTE in this trial?",
        options: ["84", "100", "125", "250", "500"],
        correct: 0,
        explanation:
          "Symptomatic VTE fell from 2.0% to 0.8%, an absolute reduction of 1.2 percentage points. The number needed to treat is 1 divided by 0.012, or 83.3, rounded up to 84. The value 125 is the inverse of the 0.8% rate in the LMWH group alone. The value 250 is the number needed to harm for major bleeding, and 500 is the inverse of the 0.2% bleeding rate without LMWH. A number needed to treat of 100 would need an absolute reduction of 1 percentage point.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the number needed to harm with LMWH for one additional major bleed in this trial?",
        options: ["84", "125", "167", "250", "500"],
        correct: 3,
        explanation:
          "Major bleeding rose from 0.2% to 0.6%, an absolute increase of 0.4 percentage points. The number needed to harm is 1 divided by 0.004, or 250. So in this trial population about 3 VTEs were prevented for every major bleed caused. The value 167 is the inverse of the 0.6% bleeding rate with LMWH alone, and 500 is the inverse of the 0.2% rate without it. The value 84 is the number needed to treat for VTE, and 125 is the inverse of the VTE rate with LMWH.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update: "A fictional cohort study reports a symptomatic VTE rate of 8% in adults with prior VTE who are casted without prophylaxis. Assume the trial's relative risk reduction applies to him.",
        prompt: "Which of the following is closest to his individual number needed to treat with LMWH to prevent one symptomatic VTE?",
        options: ["5", "13", "21", "60", "84"],
        correct: 2,
        explanation:
          "The trial's relative risk reduction is 1.2 divided by 2.0, or 60%. Applied to his baseline risk of 8%, the absolute reduction is 0.60 times 8%, or 4.8 percentage points. His number needed to treat is 1 divided by 0.048, or 20.8, rounded up to 21. The value 84 applies to the lower-risk trial population, not to him. The value 60 is the relative risk reduction as a percentage. A value of 13 is the inverse of his 8% baseline risk, and 5 is the absolute reduction in percentage points.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate thromboprophylaxis plan for him while he is in the cast?",
        options: [
          "Enoxaparin 40 mg SC daily while in the cast",
          "Graduated compression stocking on the right",
          "Rivaroxaban 20 mg PO daily for 3 months",
          "Warfarin, target INR 2 to 3, for 6 weeks",
          "No prophylaxis while in the cast",
        ],
        correct: 0,
        explanation:
          "His prior VTE raises his risk enough that about 1 in 21 like him avoids a VTE with prophylaxis, against about 1 in 250 who has a major bleed. That balance favours prophylactic-dose LMWH for as long as he is casted, the regimen the trial tested. No prophylaxis ignores his much higher baseline risk. A stocking cannot be worn under a below-knee cast on the injured leg. Rivaroxaban 20 mg daily is a treatment dose, and warfarin to an INR of 2 to 3 is full anticoagulation, so both add bleeding risk and neither was tested in the trial.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.ug],
    ...META,
  },

  /* 34 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-34",
    topic: "critical-appraisal",
    title: "Confusion and a cloudy dipstick",
    stem:
      "An 88-year-old woman is brought to the emergency department by ambulance from her long-term care home with 1 day of new confusion. Three days ago she started oxybutynin for urge incontinence. She has no dysuria and no new urinary symptoms beyond her usual incontinence. She has Alzheimer disease and hypertension. She is drowsy and inattentive, with dry mucous membranes and no focal neurologic deficit. Her abdomen is soft and she has no costovertebral angle tenderness. Urinalysis shows positive leukocyte esterase and pyuria. A fictional study of pyuria for urinary tract infection in long-term care residents reports a sensitivity of 90% and a specificity of 50%. In that study, confused residents without fever or urinary symptoms had a 10% prevalence of urinary tract infection.",
    vitals: { temperature: "37.2°C oral", pulse: "102/minute", resp: "18/minute", bp: "118/64 mmHg", o2sat: "96% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to her probability of urinary tract infection after the positive urinalysis?",
        options: ["17%", "50%", "64%", "90%", "100%"],
        correct: 0,
        explanation:
          "The positive likelihood ratio of pyuria is 0.90 divided by 0.50, or 1.8. Pretest odds of 10 divided by 90, or 0.11, multiplied by 1.8 give odds of 0.20, a probability of 17% (0.20 divided by 1.20). So a positive urinalysis barely moves her probability. A value of 64% would follow only from a pretest probability of 50%. The values 50% and 90% are the specificity and sensitivity. A positive test does not make infection certain, so 100% is wrong.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains the low specificity of pyuria for urinary tract infection in this population?",
        options: [
          "Culture was an imperfect reference",
          "Dipsticks were read by untrained staff",
          "Pyuria is common here without infection",
          "Specimens were contaminated in transport",
          "Urine was tested too late after collection",
        ],
        correct: 2,
        explanation:
          "Asymptomatic bacteriuria with pyuria is common in women living in long-term care, so many residents without infection test positive. That lowers specificity and makes a positive dipstick a weak finding in someone without urinary symptoms or fever. The case gives no sign of contamination, delayed testing or untrained readers. An imperfect reference standard could distort accuracy, but it does not explain why pyuria is frequent in residents who are not infected.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "loeb-criteria",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following findings, if present, would support starting antibiotics for urinary tract infection in a resident like her?",
        options: [
          "Change in urine colour",
          "Costovertebral angle tenderness",
          "Fever of 38.2°C",
          "Foul-smelling urine",
          "Increased confusion alone",
          "New onset of dysuria",
          "Positive nitrite on dipstick",
          "Reduced oral intake",
        ],
        correct: [1, 2, 5],
        explanation:
          "Consensus minimum criteria for residents without a catheter accept acute dysuria alone, or fever with a localizing sign such as costovertebral angle tenderness or new urinary urgency or frequency. Those findings raise the probability of true infection. A change in urine colour or smell, reduced intake and confusion alone are common and nonspecific in residents with asymptomatic bacteriuria. A positive nitrite, like pyuria, reflects bacteriuria rather than symptomatic infection.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "loeb-criteria",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Ceftriaxone IV and admit for urinary infection",
          "Nitrofurantoin PO for 5 days",
          "Repeat urinalysis in 24 hours",
          "Stop oxybutynin and reassess",
          "Urine culture and treat if positive",
        ],
        correct: 3,
        explanation:
          "Her probability of infection after the urinalysis is only about 17%, and she has a more likely cause. Oxybutynin is strongly anticholinergic, and her confusion began after starting it. The Beers Criteria advise avoiding strongly anticholinergic drugs in older adults. Stopping it, with hydration and a search for other causes, addresses the probable cause. Antibiotics for pyuria alone treat asymptomatic bacteriuria and bring side effects and resistance. A culture will often grow bacteria in a resident without infection, so treating a positive culture repeats the error. A repeat urinalysis adds nothing.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "beers-2023",
      },
    ],
    sources: [S.ug, S.loeb, S.beers],
    ...META,
  },

  /* 35 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-35",
    topic: "critical-appraisal",
    title: "Distraction for a frightened child",
    stem:
      "A 5-year-old girl presents to the emergency department with 2 days of vomiting and diarrhea. She has failed a trial of oral rehydration and needs an IV. She is anxious and crying about needles. Her capillary refill is 3 seconds and her mucous membranes are dry. A nurse proposes a virtual reality (VR) headset, citing a fictional study at one pediatric emergency department. It included 300 children aged 4 to 12 who needed IV insertion. Children were allocated by date, with VR on odd-numbered days and standard care on even-numbered days. The nurse who inserted the IV rated the child's distress. High distress occurred in 25% with VR and 40% with standard care.",
    vitals: { temperature: "37.8°C tympanic", pulse: "132/minute", resp: "24/minute", bp: "96/60 mmHg", o2sat: "99% on room air", weight: "18 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following features of this study most threaten the validity of its result?",
        options: [
          "Age range of 4 to 12 years",
          "Allocation by day of the month",
          "Distress rated by the inserting nurse",
          "Sample of 300 children",
          "Single pediatric department",
          "Standard care as comparator",
          "Use of a binary outcome",
        ],
        correct: [1, 2],
        explanation:
          "Allocation by date is predictable, so staff could choose which children to enrol on each day, which is selection bias. The nurse who knew the allocation also rated distress, a subjective outcome, which invites detection bias in favour of VR. The age range, sample size and single site affect precision and generalizability, not internal validity. Standard care is the right comparator for a practical question. A binary outcome loses some information but does not bias the result.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2025",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the number needed to treat with VR to prevent one child from having high distress?",
        options: ["7", "15", "25", "38", "40"],
        correct: 0,
        explanation:
          "High distress fell from 40% to 25%, an absolute reduction of 15 percentage points. The number needed to treat is 1 divided by 0.15, or 6.7, rounded up to 7. The value 15 is the absolute reduction in percentage points. The value 38 is the relative risk reduction, 15 divided by 40, as a percentage (37.5%). The values 25 and 40 are the rates of high distress in each group.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following changes to the design would best prevent selection bias in a repeat study?",
        options: [
          "Allocation by the treating nurse",
          "Alternating weeks instead of days",
          "Larger sample at the same site",
          "Matching children by age",
          "Web-based concealed randomization",
        ],
        correct: 4,
        explanation:
          "Central, web-based randomization with allocation hidden until the child is enrolled stops staff from predicting or influencing which group a child joins. Alternating weeks is still predictable, and allocation by the treating nurse invites exactly the bias to be removed. A larger sample improves precision but leaves the bias in place. Matching by age balances one known factor but cannot balance unknown ones the way randomization does.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2025",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to her IV insertion?",
        options: [
          "Hold still with two staff, no analgesia",
          "Intramuscular ketamine before the IV",
          "Oral midazolam before every IV",
          "Topical anesthetic plus distraction",
          "No preparation, to avoid delay",
        ],
        correct: 3,
        explanation:
          "The study is weak, but distraction carries almost no harm, and the Canadian Paediatric Society recommends topical anesthetic with distraction for needle procedures in children. So offering it does not need proof of a precise effect. Restraint without analgesia increases distress and future fear of needles. Ketamine or routine midazolam for a simple IV adds sedation risks that she does not need. Her dehydration is not so severe that she cannot wait for a topical anesthetic to act.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "cps-procedural-pain",
      },
    ],
    sources: [S.consort, S.ug, S.cpsPain],
    ...META,
  },

  /* 36 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-36",
    topic: "critical-appraisal",
    title: "Two tests for a collapsed lung",
    stem:
      "You are working in a rural hospital emergency department without CT. A 29-year-old man is brought by ambulance after a rollover collision at highway speed. He has left chest wall pain and tenderness but equal air entry. His supine chest X-ray shows no pneumothorax. A fictional study at a trauma centre performed POCUS and supine chest X-ray on 400 adult trauma patients, with chest CT as the reference standard for all. Of 80 patients with pneumothorax, POCUS detected 72 and chest X-ray 40. Of 320 without pneumothorax, POCUS was falsely positive in 6 and chest X-ray in 2. Fellowship-trained sonographers performed every scan.",
    vitals: { temperature: "36.4°C oral", pulse: "104/minute", resp: "22/minute", bp: "132/84 mmHg", o2sat: "95% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the sensitivity of POCUS for pneumothorax in this study?",
        options: ["20%", "50%", "72%", "80%", "90%"],
        correct: 4,
        explanation:
          "POCUS detected 72 of the 80 pneumothoraces, so its sensitivity is 72 divided by 80, or 90%. The sensitivity of supine chest X-ray is 40 divided by 80, or 50%. The value 20% is the prevalence, 80 of 400. The values 72 and 80 are counts of patients, not proportions. POCUS specificity is 314 divided by 320, or 98.1%.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "stard-2015",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the main strength of performing both tests on every patient in this study?",
        options: [
          "Each patient serves as their own control",
          "It blinds readers to the CT result",
          "It doubles the effective sample size",
          "It makes CT unnecessary as a reference",
          "It removes the need for consecutive enrolment",
        ],
        correct: 0,
        explanation:
          "In a paired comparison, both tests are applied to the same patients against the same reference, so differences in accuracy cannot come from differences in who was tested. That is the most valid way to compare two tests. Blinding readers to the CT result is a separate design step. Pairing does not double the sample, and it still needs CT as the reference for every patient. Consecutive enrolment is still needed to avoid spectrum bias.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stard-2015",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important reason POCUS may perform less well in your department than in this study?",
        options: [
          "CT is too sensitive as a reference",
          "Paired design exaggerates the gap",
          "Sample size of 400 was too small",
          "The study enrolled only trauma",
          "Your operators may have less expertise",
        ],
        correct: 4,
        explanation:
          "POCUS accuracy depends on the operator, and every scan in the study was done by fellowship-trained sonographers. Rural physicians with less training and fewer scans may miss more pneumothoraces, so sensitivity in your hands may be lower. CT is the accepted reference and may detect small pneumothoraces that are less important, but that is not a reason your results would differ. A paired design strengthens the comparison. A sample of 400 with 80 pneumothoraces is reasonable, and this patient is a trauma patient.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        update: "Your credentialed POCUS shows absent lung sliding with a lung point on the left. Take his pretest probability as the study prevalence.",
        prompt: "Which of the following is closest to his probability of left pneumothorax after this POCUS result?",
        options: ["20%", "48%", "72%", "90%", "92%"],
        correct: 4,
        explanation:
          "The positive likelihood ratio of POCUS is 0.90 divided by 0.019 (6 of 320), or 48. Pretest odds are 20 divided by 80, or 0.25. Multiplied by 48 this gives odds of 12, a probability of 92% (12 divided by 13). A lung point makes this even more certain in practice. The value 90% is the sensitivity, not a post-test probability, and 48 is the likelihood ratio itself. The value 20% ignores the result.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate use of this POCUS result in planning his care?",
        options: [
          "Confirm with a repeat supine X-ray first",
          "Disregard it, as CT was not done",
          "Manage him as having a left pneumothorax",
          "Repeat POCUS by a second physician",
          "Treat as normal given the negative X-ray",
        ],
        correct: 2,
        explanation:
          "A probability of about 92% is high enough to act on, so he should be managed as having a left pneumothorax, including when planning transfer. The supine X-ray missed half of all pneumothoraces in the study, so a negative film cannot overrule the scan, and repeating it adds little. Waiting for CT or a second scan delays decisions that the current result already supports. A second operator could help if you were unsure of your own findings, but a clear lung point is a specific sign.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [S.stard, S.ug],
    ...META,
  },
];
