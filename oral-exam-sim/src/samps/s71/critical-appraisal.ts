// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

/* Every study, device, drug, test and number in these SAMPs is fictional and invented for teaching. None reports a real trial's results. */

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S: Record<string, Source> = {
  blandAltman: {
    id: "bland-altman-1986",
    citation: "Bland JM, Altman DG. Statistical methods for assessing agreement between two methods of clinical measurement. Lancet 1986.",
    url: "https://doi.org/10.1016/S0140-6736(86)90837-8",
  },
  barkun: {
    id: "barkun-ugib-2019",
    citation:
      "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding. Guideline recommendations from the International Consensus Group. Annals of Internal Medicine 2019.",
    url: "https://doi.org/10.7326/M19-1795",
  },
  laupacis: {
    id: "laupacis-nnt-1988",
    citation: "Laupacis A, Sackett DL, Roberts RS. An assessment of clinically useful measures of the consequences of treatment. New England Journal of Medicine 1988.",
    url: "https://doi.org/10.1056/NEJM198806303182605",
  },
  lipsitch: {
    id: "lipsitch-negative-controls-2010",
    citation: "Lipsitch M, Tchetgen Tchetgen E, Cohen T. Negative controls. A tool for detecting confounding and bias in observational studies. Epidemiology 2010.",
    url: "https://doi.org/10.1097/EDE.0b013e3181d61eeb",
  },
  suissa: {
    id: "suissa-immortal-time-2008",
    citation: "Suissa S. Immortal time bias in pharmaco-epidemiology. American Journal of Epidemiology 2008.",
    url: "https://doi.org/10.1093/aje/kwm324",
  },
  kohn: {
    id: "kohn-bias-direction-2013",
    citation: "Kohn MA, Carpenter CR, Newman TB. Understanding the direction of bias in studies of diagnostic test accuracy. Academic Emergency Medicine 2013.",
    url: "https://doi.org/10.1111/acem.12255",
  },
  jaeschke: {
    id: "jaeschke-diagnostic-results-1994",
    citation:
      "Jaeschke R, Guyatt GH, Sackett DL. Users' guides to the medical literature. III. How to use an article about a diagnostic test. B. What are the results and will they help me in caring for my patients? JAMA 1994.",
    url: "https://doi.org/10.1001/jama.271.9.703",
  },
  long: {
    id: "long-septic-arthritis-2019",
    citation: "Long B, Koyfman A, Gottlieb M. Evaluation and management of septic arthritis and its mimics in the emergency department. Western Journal of Emergency Medicine 2019.",
    url: "https://doi.org/10.5811/westjem.2018.10.40974",
  },
};

export const CRITICAL_APPRAISAL_S71: Samp[] = [
  /* 37 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-37",
    topic: "critical-appraisal",
    title: "A reading at the fingertip",
    stem:
      "You are working in a community hospital emergency department. A 64-year-old man presents with 2 days of black stools and light-headedness on standing. He takes naproxen for knee pain and has no history of heart disease. His abdomen is soft, and rectal examination shows melena. Your department is trialling a fictional noninvasive fingertip hemoglobin monitor. A vendor study at one tertiary centre compared it with laboratory hemoglobin in 250 adult emergency patients, with both measured within 10 minutes. On average the monitor read 5 g/L higher than the laboratory, and the standard deviation of the paired differences was 11 g/L. The correlation coefficient was 0.92. Most participants had normal values, and 9 had a laboratory hemoglobin below 90 g/L. The authors conclude that the monitor can replace laboratory testing.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "16/minute", bp: "124/76 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why the correlation of 0.92 does not support the authors' conclusion?",
        options: [
          "It cannot be calculated from paired data",
          "It is below the 0.95 set for interchangeability",
          "It measures association, not agreement",
          "It needs at least 500 paired readings",
          "It was not adjusted for age and sex",
        ],
        correct: 2,
        explanation:
          "A correlation coefficient shows how closely two measurements rise and fall together, not whether they give the same value. Two methods can correlate strongly while one reads systematically higher and single readings differ widely, which is what a mean difference of 5 g/L with a standard deviation of 11 g/L shows here. Correlation also rises when the sample spans a wide range of values. No correlation cutoff, such as 0.95, defines interchangeability. More readings or adjustment for age and sex would not fix the problem. Correlation is calculated from exactly this kind of paired data.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "bland-altman-1986",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is closest to the upper 95% limit for how far the monitor reads above the laboratory hemoglobin?",
        options: ["6 g/L", "16 g/L", "22 g/L", "27 g/L", "38 g/L"],
        correct: 3,
        explanation:
          "The 95% limits are the mean difference plus or minus 1.96 standard deviations of the differences, often rounded to 2. Here 1.96 x 11 is 21.6, so the upper limit is 5 plus 21.6, or 26.6, about 27 g/L, and the lower limit is 5 minus 21.6, about 17 g/L below the laboratory. A value of 22 g/L leaves out the 5 g/L bias. A value of 16 g/L uses one standard deviation. A value of 6 g/L uses the standard error (11 divided by the square root of 250 is 0.70), which describes the mean difference, not single readings. A value of 38 g/L uses three standard deviations.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "bland-altman-1986",
      },
      {
        id: "q3",
        kind: "single",
        update: "His monitor reading is 92 g/L. The laboratory hemoglobin will take 90 minutes. He remains alert, and his pulse and blood pressure are unchanged.",
        prompt: "Which of the following is the most appropriate use of this monitor reading in deciding on red cell transfusion?",
        options: [
          "Await the laboratory hemoglobin",
          "Lower the reading by 5 g/L and act on it",
          "Repeat the monitor reading in 1 hour",
          "Transfuse 1 unit of red cells now",
          "Withhold transfusion based on the reading",
        ],
        correct: 0,
        explanation:
          "In 95% of patients the monitor reads between about 17 g/L below and 27 g/L above the laboratory value. A reading of 92 g/L therefore fits a laboratory hemoglobin anywhere from 92 minus 27, or 65 g/L, to 92 plus 17, or 109 g/L. The International Consensus Group suggests transfusion below 80 g/L in upper GI bleeding without cardiovascular disease, and that range crosses 80 g/L. He is stable, so the laboratory result is worth the wait. Subtracting the 5 g/L bias gives 87 g/L but leaves the scatter of single readings. A repeat reading carries the same error. Transfusing now or withholding transfusion on this reading both rest on a number that cannot place him on either side of the threshold.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "barkun-ugib-2019",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following study features most limits applying its results to patients with suspected GI bleeding?",
        options: [
          "Enrolment of adults only",
          "Few participants with low hemoglobin",
          "Laboratory hemoglobin as the comparator",
          "Paired readings within 10 minutes",
          "Sample of 250 paired readings",
        ],
        correct: 1,
        explanation:
          "Only 9 of 250 participants had a hemoglobin below 90 g/L, so the study describes the monitor mostly at normal values. Differences between two methods can change with the size of the measurement, which is why they should be plotted against the mean of the pair. With so few low values, the study cannot show how the monitor performs in the range where transfusion decisions are made. Enrolling adults matches this 64-year-old man. Laboratory hemoglobin is the right comparator. Readings within 10 minutes ensure both methods measure the same blood. The problem is who the 250 participants were, not how many there were.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "bland-altman-1986",
      },
    ],
    sources: [S.blandAltman, S.barkun],
    ...META,
  },

  /* 38 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-38",
    topic: "critical-appraisal",
    title: "A prescription filled later",
    stem:
      "A 72-year-old woman presents to the emergency department with 3 days of increased breathlessness and green sputum. She has COPD and uses a tiotropium inhaler. After treatment she improves and is ready for discharge. A resident proposes adding drug T, a fictional inhaled medication, to discharge prescriptions for COPD. He cites a fictional cohort study from provincial databases of 4 000 adults discharged from emergency departments after a COPD exacerbation. Patients who filled a drug T prescription at any time in the 12 months after discharge were classed as users from the day of discharge. The median time to the first fill was 4 months. Death within 12 months occurred in 60 of 1 000 users and 450 of 3 000 non-users. Follow-up was complete.",
    vitals: { temperature: "37.1°C oral", pulse: "88/minute", resp: "18/minute", bp: "138/80 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the crude relative risk reduction for death within 12 months among drug T users in this cohort?",
        options: ["6%", "9%", "40%", "60%", "64%"],
        correct: 3,
        explanation:
          "Risk of death was 60 of 1 000, or 6.0%, in users and 450 of 3 000, or 15.0%, in non-users. The relative risk is 6.0 divided by 15.0, or 0.40, and the relative risk reduction is 1 minus 0.40, or 60%. A value of 40% is the relative risk itself. A value of 9% is the absolute risk reduction (15.0% minus 6.0%). A value of 6% is the users' own risk. A value of 64% comes from the odds ratio, (60/940) divided by (450/2 550), or 0.36, which is lower than the relative risk because death is not rare in this cohort.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "laupacis-nnt-1988",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the crude number needed to treat with drug T to prevent one death within 12 months?",
        options: ["7", "12", "15", "17", "40"],
        correct: 1,
        explanation:
          "The number needed to treat is the reciprocal of the absolute risk reduction. Death fell from 15.0% in non-users to 6.0% in users, an absolute difference of 9.0 percentage points. One divided by 0.09 is 11.1, which is rounded up to 12. A value of 7 is the reciprocal of the non-users' risk alone (1 divided by 0.15 is 6.7). A value of 17 is the reciprocal of the users' risk alone (1 divided by 0.06 is 16.7). A value of 15 reads the non-users' risk in percent as a count of patients, and a value of 40 does the same with the relative risk of 0.40. None of these uses the absolute difference between the groups.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "laupacis-nnt-1988",
      },
      {
        id: "q3",
        kind: "single",
        update: "Users also had half the rate of death from injuries such as falls and road crashes, which drug T has no known way to prevent.",
        prompt: "Which of the following best describes the role of deaths from injury in judging this study?",
        options: [
          "A component of a composite outcome",
          "A negative control outcome",
          "A patient-important primary outcome",
          "A safety outcome for the drug",
          "A surrogate outcome for mortality",
        ],
        correct: 1,
        explanation:
          "An outcome that the exposure cannot plausibly cause or prevent, but that is open to the same biases, works as a negative control. Drug T has no known way to prevent injury deaths, so finding half as many among users points to a noncausal association, from confounding or from how the groups were formed. The same distortion is then likely to inflate the all-cause mortality benefit. The study defined no composite outcome. All-cause death within 12 months, not injury death, was its main outcome. A safety outcome tracks harm the drug might cause. A surrogate stands in for a clinical outcome, while injury death is itself clinical.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "lipsitch-negative-controls-2010",
      },
      {
        id: "q4",
        kind: "single",
        update: "The authors reanalyze the data, counting each user as unexposed until the day of the first fill. The hazard ratio for death is now 0.94 (95% CI 0.78 to 1.13).",
        prompt: "Which of the following biases best explains the change in the hazard ratio after this reanalysis?",
        options: ["Confounding by indication", "Exposure recall bias", "Immortal time bias", "Lead time bias", "Spectrum bias"],
        correct: 2,
        explanation:
          "Users were classed as exposed from discharge, yet each had to survive until the first fill, a median of 4 months, to become a user. Anyone who died in that window could only be counted as a non-user. That guaranteed survival time made drug T look protective. Counting the time before the first fill as unexposed removes it, and the hazard ratio moves to 0.94 with a confidence interval that includes 1. Confounding by indication comes from who is prescribed a drug, which reclassifying time does not change. Recall bias needs self-reported exposure, not dispensing records. Lead time bias arises when earlier diagnosis lengthens apparent survival. Spectrum bias affects diagnostic accuracy studies.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "suissa-immortal-time-2008",
      },
    ],
    sources: [S.laupacis, S.lipsitch, S.suissa],
    ...META,
  },

  /* 39 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-39",
    topic: "critical-appraisal",
    title: "A strip on joint fluid",
    stem:
      "You are working in a community hospital emergency department. A 58-year-old man presents with 2 days of a painful, swollen right knee, and he cannot bear weight. He has type 2 diabetes treated with metformin and no injury or previous joint disease. The knee is warm with a large effusion, and passive flexion is painful. You aspirate 30 mL of cloudy fluid and send it to the laboratory. A fictional study evaluated a bedside leukocyte esterase reagent strip on synovial fluid in 320 adults with acute atraumatic monoarthritis at 3 emergency departments. Patients with crystals on synovial fluid microscopy were excluded. Strips were read at the bedside before the cell count was known, and every patient had synovial culture. The reference standard was an expert panel diagnosis based on culture, cell count, clinical course and the strip result.",
    vitals: { temperature: "38.3°C oral", pulse: "102/minute", resp: "18/minute", bp: "132/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following features of this study would most likely inflate the strip's reported accuracy?",
        options: [
          "Adults with atraumatic monoarthritis",
          "Enrolment at three sites",
          "Exclusion of crystal arthritis",
          "Expert panel aware of the strip result",
          "Prospective data collection",
          "Strip read before the cell count",
          "Synovial culture in every patient",
        ],
        correct: [2, 3],
        explanation:
          "The panel used the strip result to decide who had septic arthritis, so the strip was partly judged against itself. This incorporation bias makes both sensitivity and specificity look better than they are. Excluding patients with crystals removed gout and pseudogout, which can raise synovial white cell counts as high as infection does and are the mimics most likely to give a false positive strip. Leaving out the hardest non-cases inflates specificity. Reading the strip before the cell count kept the reader blind to it. Culture in every patient avoided partial verification. Prospective enrolment of adults with atraumatic monoarthritis at three sites matches the patients in whom the strip would be used.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "kohn-bias-direction-2013",
      },
      {
        id: "q2",
        kind: "single",
        update: "Septic arthritis was diagnosed in 64 patients, and the strip was positive in 56 of them. Of the 256 without septic arthritis, the strip was negative in 218.",
        prompt: "Which of the following is the specificity of the strip for septic arthritis in this study?",
        options: ["60%", "68%", "85%", "88%", "96%"],
        correct: 2,
        explanation:
          "Specificity is the proportion of patients without the disease who test negative, here 218 of 256, or 85.2%, about 85%. A value of 88% is the sensitivity, 56 of 64, or 87.5%. A value of 60% is the positive predictive value, 56 true positives among 94 positive strips (56 plus the 38 false positives, which is 256 minus 218). A value of 96% is the negative predictive value, 218 true negatives among 226 negative strips (218 plus the 8 false negatives, which is 64 minus 56). A value of 68% divides 218 by all 320 patients.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "jaeschke-diagnostic-results-1994",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is closest to the negative likelihood ratio of the strip for septic arthritis in this study?",
        options: ["0.03", "0.04", "0.13", "0.15", "0.84"],
        correct: 3,
        explanation:
          "The negative likelihood ratio is (1 minus sensitivity) divided by specificity. Sensitivity is 56 of 64, or 0.875, and specificity is 218 of 256, or 0.852. So 0.125 divided by 0.852 is 0.147, about 0.15. A value of 0.13 is 1 minus sensitivity without the division. A value of 0.84 divides 0.125 by the false positive rate of 0.148 instead of by specificity. A value of 0.04 is 1 minus the negative predictive value (8 of 226, or 0.035), which depends on prevalence. A value of 0.03 is the 8 false negatives divided by all 320 patients.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "jaeschke-diagnostic-results-1994",
      },
      {
        id: "q4",
        kind: "single",
        update: "In the study, patients with a temperature above 38.0°C had a 40% prevalence of septic arthritis. His strip is negative.",
        prompt: "Using the study's negative likelihood ratio, which of the following is closest to his probability of septic arthritis?",
        options: ["9%", "13%", "15%", "40%", "60%"],
        correct: 0,
        explanation:
          "Likelihood ratios act on odds. A pretest probability of 40% is odds of 0.40 divided by 0.60, or 0.67. Multiplied by 0.147 this gives post-test odds of 0.098, which is a probability of 0.098 divided by 1.098, or 8.9%, about 9%. A value of 40% ignores the test. A value of 15% reads the likelihood ratio as a probability. A value of 13% is 1 minus sensitivity, which is the chance of a negative strip in a patient who has the disease, not his chance of disease. A value of 60% is the study's positive predictive value, which applies to a positive strip.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "jaeschke-diagnostic-results-1994",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Discharge with naproxen and review in 24 hours",
          "Intra-articular corticosteroid injection",
          "Oral cephalexin and review in 48 hours",
          "Repeat the strip on a second aspirate",
          "Start IV antibiotics and consult orthopedics",
        ],
        correct: 4,
        explanation:
          "Even with the study's own likelihood ratio his probability of septic arthritis is about 9%, and the study's design flatters the strip, so his true probability is likely higher. He has fever, a warm effusion, cloudy fluid and cannot bear weight, and the fluid has already been sent for culture. Septic arthritis is managed with IV antibiotics and orthopedic surgery consultation. There is no role for intra-articular corticosteroids in the emergency department for these patients. Discharge with naproxen or oral cephalexin leaves a possibly infected joint without definitive care. A second strip repeats the same test with the same limits.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "long-septic-arthritis-2019",
      },
    ],
    sources: [S.kohn, S.jaeschke, S.long],
    ...META,
  },
];
