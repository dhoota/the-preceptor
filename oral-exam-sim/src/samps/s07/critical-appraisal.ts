// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";
import { AUTHOR, lab } from "./helpers";

/* Every study in these SAMPs is fictional, with numbers invented for teaching. The one exception is the real FORCE trial, cited by name in critical-appraisal-15. */

const UG: Source = {
  id: "users-guides",
  citation:
    "Guyatt G, Rennie D, Meade MO, Cook DJ, editors. Users' Guides to the Medical Literature. A Manual for Evidence-Based Clinical Practice. 3rd edition. JAMA Evidence and McGraw-Hill Education.",
};
const EBM: Source = {
  id: "straus-ebm",
  citation: "Straus SE, Glasziou P, Richardson WS, Haynes RB. Evidence-Based Medicine. How to Practice and Teach EBM. 5th edition. Elsevier.",
};
const STARD: Source = {
  id: "stard-2015",
  citation:
    "Bossuyt PM, Reitsma JB, Bruns DE, et al. STARD 2015. An updated list of essential items for reporting diagnostic accuracy studies. BMJ 2015.",
  url: "https://doi.org/10.1136/bmj.h5527",
};
const CONSORT: Source = {
  id: "consort-2010",
  citation:
    "Schulz KF, Altman DG, Moher D. CONSORT 2010 Statement. Updated guidelines for reporting parallel group randomised trials. BMJ 2010.",
  url: "https://doi.org/10.1136/bmj.c332",
};
const CONSORT_NI: Source = {
  id: "consort-noninferiority",
  citation:
    "Piaggio G, Elbourne DR, Pocock SJ, et al. Reporting of noninferiority and equivalence randomized trials. Extension of the CONSORT 2010 statement. JAMA 2012.",
  url: "https://doi.org/10.1001/jama.2012.87802",
};
const PRISMA: Source = {
  id: "prisma-2020",
  citation:
    "Page MJ, McKenzie JE, Bossuyt PM, et al. The PRISMA 2020 statement. An updated guideline for reporting systematic reviews. BMJ 2021.",
  url: "https://doi.org/10.1136/bmj.n71",
};
const STIELL: Source = {
  id: "stiell-wells-rules",
  citation:
    "Stiell IG, Wells GA. Methodologic standards for the development of clinical decision rules in emergency medicine. Annals of Emergency Medicine 1999.",
  url: "https://doi.org/10.1016/s0196-0644(99)70309-4",
};
const STROBE: Source = {
  id: "strobe",
  citation:
    "von Elm E, Altman DG, Egger M, et al. The Strengthening the Reporting of Observational Studies in Epidemiology (STROBE) statement. Guidelines for reporting observational studies. Lancet 2007.",
  url: "https://doi.org/10.1016/S0140-6736(07)61602-X",
};

const SENS = ["sensitivity", "sens", "sn"];
const SPEC = ["specificity", "spec", "sp"];
const LRP = ["positive", "lr", "plr", "likelihood ratio"];
const LRN = ["negative", "lr", "nlr", "likelihood ratio"];

export const CRITICAL_APPRAISAL: Samp[] = [
  /* 01 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-01",
    topic: "critical-appraisal",
    title: "A bedside scan for right lower quadrant pain",
    stem:
      "A colleague asks whether your community emergency department should adopt point of care ultrasound (POCUS) for suspected appendicitis. She shares a fictional study. At one academic centre, investigators enrolled a convenience sample of adults with suspected appendicitis on weekdays from 0800 to 1600, when one of four fellowship trained emergency sonographers was on shift. Each patient had POCUS before any other imaging. Patients with a positive scan went on to CT or surgery with pathology. Patients with a negative scan were followed by telephone at 30 days. Of 438 patients enrolled, 38 had indeterminate scans and were excluded, leaving 400. Appendicitis was confirmed in 100 patients, and POCUS was positive in 80 of them. Of the 300 without appendicitis, POCUS was positive in 30.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the design of this study? Select one.",
        options: [
          "Randomized controlled trial",
          "Prospective cross-sectional diagnostic accuracy study",
          "Retrospective cohort study",
          "Diagnostic case-control study",
          "Systematic review",
        ],
        correct: 1,
        explanation:
          "Consecutive or convenience patients with the suspected condition had the index test and then a reference standard. That is a prospective cross-sectional diagnostic accuracy design. A diagnostic case-control study would compare known cases with healthy controls, which inflates accuracy.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stard-2015",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Calculate the sensitivity and specificity of POCUS in this study. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "sens", text: "Sensitivity 80% (80/100)", match: lab(SENS, ["80%", "80", "0.8", "0.80"]) },
          { id: "spec", text: "Specificity 90% (270/300)", match: lab(SPEC, ["90%", "90", "0.9", "0.90"]) },
        ],
        unacceptable: [
          { text: "Sensitivity 73% (this is the positive predictive value, 80/110)", match: lab(["sensitivity"], ["73%", "73", "0.73"]) },
        ],
        explanation:
          "Sensitivity is true positives over all with disease, 80/100 = 80%. Specificity is true negatives over all without disease. There are 300 minus 30 = 270 true negatives, so 270/300 = 90%. Dividing by the number of positive tests gives predictive values, not sensitivity.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "Calculate the positive and negative likelihood ratios for POCUS. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "lrpos", text: "Positive likelihood ratio 8 (0.80 / 0.10)", match: lab(LRP, ["8", "8.0"]) },
          { id: "lrneg", text: "Negative likelihood ratio 0.22 (0.20 / 0.90)", match: lab(LRN, ["0.22", "0.2", "0.222"]) },
        ],
        explanation:
          "LR+ is sensitivity divided by (1 minus specificity), 0.80 / 0.10 = 8. LR- is (1 minus sensitivity) divided by specificity, 0.20 / 0.90 = 0.22. An LR- of 0.22 lowers probability only moderately. It is not strong enough to rule out appendicitis on its own.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "A 24-year-old man has 18 hours of periumbilical pain moving to the right lower quadrant, with anorexia and mild right lower quadrant tenderness. You estimate his pretest probability of appendicitis at 20%. His POCUS is negative.",
        prompt: "Using the likelihood ratios from this study, what is his post-test probability of appendicitis? Select one.",
        options: ["1%", "5%", "10%", "15%", "18%"],
        correct: 1,
        explanation:
          "Pretest odds are 0.20 / 0.80 = 0.25. Post-test odds are 0.25 x 0.22 = 0.055, which is a probability of about 5%. A 1 in 20 residual risk is not low enough to stop, so he still needs serial examination or further imaging with clear return advice.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "short",
        prompt:
          "List THREE features of this study that may overestimate the accuracy of POCUS or limit its applicability to your community department.",
        required: 3,
        accept: [
          {
            id: "indeterminate",
            text: "Indeterminate scans were excluded from the analysis",
            match: ["indeterminate", "excluded", "exclusion", "uninterpretable"],
          },
          {
            id: "verification",
            text: "Differential verification. Positive and negative scans had different reference standards",
            match: ["differential verification", "verification bias", "reference standard", "gold standard", "telephone", "workup bias", "work up bias"],
          },
          {
            id: "sampling",
            text: "Convenience sample on weekday daytime shifts only (spectrum or selection bias)",
            match: ["convenience", "weekday", "daytime", "spectrum", "selection bias", "sampling"],
          },
          {
            id: "operator",
            text: "Scans were done by fellowship trained expert sonographers, so results may not transfer to less experienced operators",
            match: ["fellowship", "expert", "operator", "sonographer", "experience", "experienced", "training", "skill"],
          },
          {
            id: "site",
            text: "Single academic centre",
            match: ["single centre", "single center", "single site", "one centre", "one center", "one site", "academic", "tertiary"],
          },
        ],
        explanation:
          "Excluding indeterminate scans removes the hardest cases and inflates both sensitivity and specificity. Using telephone follow-up for negatives and pathology for positives is differential verification bias. Expert operators and a daytime convenience sample at one academic site limit how well these results transfer to a community department.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "stard-2015",
      },
    ],
    sources: [UG, STARD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 02 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-02",
    topic: "critical-appraisal",
    title: "A regional block trial in older adults",
    stem:
      "Your department is debating whether emergency physicians should perform ultrasound guided fascia iliaca blocks for older adults with hip fracture. You read a fictional randomized trial. At 6 Canadian emergency departments, 600 adults aged 70 or older with hip fracture were randomized to a fascia iliaca block plus usual care or usual care alone. No sham block was used. Allocation was concealed by central web randomization. The primary outcome was delirium within 72 hours, assessed daily with the Confusion Assessment Method (CAM) by research nurses blinded to allocation. Delirium occurred in 36 of 300 block patients (12%) and 60 of 300 controls (20%). Mean patient reported pain at 4 hours was 0.6 points lower with the block on a 0 to 10 scale (95% CI 0.3 to 0.9, p < 0.001). Block site hematoma occurred in 6 of 300 block patients (2%) and in no controls.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt:
          "Calculate the absolute risk reduction, relative risk reduction and number needed to treat for delirium. List THREE values, each labelled.",
        required: 3,
        accept: [
          { id: "arr", text: "Absolute risk reduction 8% (20% minus 12%)", match: lab(["arr", "absolute"], ["8%", "8", "0.08"]) },
          { id: "rrr", text: "Relative risk reduction 40% (0.08 / 0.20)", match: lab(["rrr", "relative"], ["40%", "40", "0.4", "0.40"]) },
          { id: "nnt", text: "Number needed to treat 13 (1 / 0.08 = 12.5, rounded up)", match: lab(["nnt", "number needed"], ["13", "12.5"]) },
        ],
        unacceptable: [
          { text: "Relative risk reduction 8% (this is the absolute difference)", match: lab(["rrr", "relative"], ["8%", "8"]) },
        ],
        explanation:
          "ARR is the control event rate minus the treated event rate, 20% minus 12% = 8%. RRR is the ARR divided by the control event rate, 8 / 20 = 40%. NNT is 1 / ARR = 12.5, which is rounded up to 13.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which statement correctly interprets the number needed to treat for delirium? Select one.",
        options: [
          "The block reduces delirium by 13%.",
          "About 13 older adults with hip fracture need a block to prevent one episode of delirium within 72 hours.",
          "One patient in 13 who gets a block will develop delirium anyway.",
          "About 13 patients need a block to prevent one episode of delirium during their whole hospital stay.",
          "About 13 patients need a block for one to have a hematoma.",
        ],
        correct: 1,
        explanation:
          "An NNT always applies to a specific outcome, population and time frame. Here that is delirium within 72 hours in adults aged 70 or older with hip fracture. The trial did not measure delirium over the whole admission, so extending the time frame is not supported.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "Calculate the number needed to harm for block site hematoma. State the value.",
        required: 1,
        accept: [{ id: "nnh", text: "Number needed to harm 50 (1 / 0.02)", match: ["50"] }],
        explanation:
          "The absolute risk increase is 2% minus 0% = 2%. NNH is 1 / 0.02 = 50. Weigh this against an NNT of 13 for delirium, keeping in mind that a small hematoma is usually far less important than delirium.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "The abstract concludes that the block gives clinically important pain relief. Give TWO reasons to question this conclusion.",
        required: 2,
        accept: [
          {
            id: "mcid",
            text: "A 0.6 point difference is below the minimal clinically important difference of about 1 to 2 points",
            match: ["minimal clinically", "minimum clinically", "mcid", "not clinically", "clinically insignificant", "too small", "small difference", "below 1", "less than 1"],
          },
          {
            id: "stats",
            text: "Statistical significance reflects the large sample size, not the importance of the effect",
            match: ["statistical", "statistically", "p value", "sample size", "large sample"],
          },
          {
            id: "blinding",
            text: "Pain is patient reported and patients were not blinded, as there was no sham block",
            match: ["sham", "no sham", "unblinded", "not blinded", "placebo", "no placebo", "open label", "subjective", "patient reported"],
          },
          { id: "secondary", text: "Pain was a secondary outcome, so it is hypothesis generating", match: ["secondary"] },
          {
            id: "ci",
            text: "Even the upper confidence limit of 0.9 points is below the usual minimal clinically important difference",
            match: ["confidence interval", "upper limit", "upper bound", "0.9"],
          },
        ],
        explanation:
          "A p value tells you the result is unlikely to be chance. It does not tell you the effect matters. A 0.6 point drop on a 10 point scale is well below the usual minimal clinically important difference. Unblinded patient reported outcomes and secondary end points deserve extra caution.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-2010",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "List TWO features of this trial's design that protect the primary outcome from bias.",
        required: 2,
        accept: [
          { id: "random", text: "Randomization", match: ["randomization", "randomized", "randomised", "randomisation", "random"] },
          { id: "conceal", text: "Concealed allocation by central web randomization", match: ["concealment", "concealed", "central"] },
          {
            id: "blind",
            text: "Outcome assessors blinded to allocation",
            match: ["blinded assessor", "blinded outcome", "blinding", "blind", "blinded", "assessor"],
          },
          { id: "cam", text: "A validated, standardized delirium tool (CAM) applied daily", match: ["cam", "confusion assessment", "validated", "standardized"] },
        ],
        explanation:
          "Randomization with concealed allocation balances known and unknown prognostic factors. Because the block cannot be hidden from patients, blinding the outcome assessors is the main protection against biased measurement. A validated tool applied on a fixed schedule reduces ascertainment differences.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2010",
      },
    ],
    sources: [UG, CONSORT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 03 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-03",
    topic: "critical-appraisal",
    title: "A new rule for older adults who fall",
    stem:
      "A fictional study proposes a decision rule for head CT in older adults after a fall. At one tertiary emergency department, investigators prospectively enrolled 1,280 adults aged 65 or older who presented after a ground level fall and were not taking an anticoagulant. Physicians recorded 14 candidate predictors before imaging. The outcome was clinically important intracranial injury on CT or at 30-day follow-up. Recursive partitioning produced a 4-item rule. Eighty patients had the outcome, and the rule was positive in 78 of them. Of the 1,200 without the outcome, the rule was negative in 420. The authors report sensitivity 97.5% (95% CI 91.3 to 99.7). At the study site, 60% of these patients currently have a head CT.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Calculate the sensitivity and specificity of the rule. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "sens", text: "Sensitivity 97.5% (78/80)", match: lab(SENS, ["97.5%", "97.5", "0.975", "98%"]) },
          { id: "spec", text: "Specificity 35% (420/1,200)", match: lab(SPEC, ["35%", "35", "0.35"]) },
        ],
        explanation:
          "Sensitivity is 78/80 = 97.5%. Specificity is rule negative patients without the outcome over all without the outcome, 420/1,200 = 35%. High sensitivity with low specificity is typical of a rule built to avoid missed injuries.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "short",
        prompt:
          "If a positive rule were used as the indication for CT, what proportion of these 1,280 patients would have a CT? State the value.",
        required: 1,
        accept: [{ id: "ctrate", text: "About 67% (858/1,280)", match: ["67%", "67", "0.67", "858", "67.0%"] }],
        explanation:
          "Rule positive patients are 78 true positives plus 780 false positives (1,200 minus 420), which is 858 of 1,280, or 67%. That is higher than the current CT rate of 60%. A rule that increases imaging offers no efficiency benefit, however accurate it is.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "stiell-wells-rules",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE reasons you would not yet adopt this rule in your department.",
        required: 3,
        accept: [
          {
            id: "validation",
            text: "It has only been derived. It needs prospective validation in a new population",
            match: ["validation", "validated", "validate", "not validated", "no validation", "derivation", "derived", "external"],
          },
          {
            id: "ci",
            text: "The lower confidence limit of 91% means it could miss up to about 1 in 11 injuries",
            match: ["confidence interval", "ci", "lower bound", "lower limit", "91", "91.3", "imprecise", "wide"],
          },
          {
            id: "ctuse",
            text: "It would increase CT use from 60% to 67%",
            match: ["increase ct", "more ct", "increase imaging", "more imaging", "ct rate", "imaging rate", "67%", "60% to 67"],
          },
          { id: "single", text: "Single centre study", match: ["single centre", "single center", "single site", "one centre", "one site", "one center"] },
          { id: "reliability", text: "Interobserver reliability of the predictors is not reported", match: ["reliability", "no reliability", "kappa", "no kappa", "interobserver", "interrater", "agreement"] },
          { id: "impact", text: "No impact analysis showing it changes practice safely", match: ["impact", "no impact", "implementation", "no implementation"] },
        ],
        explanation:
          "A derived rule is usually overfit to its own data and performs worse elsewhere, so it must be validated before use. With only 80 outcomes the confidence interval is wide, and the lower bound matters most for a rule out tool. This rule would also increase imaging, which defeats its purpose.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "stiell-wells-rules",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which is the most appropriate next stage of research for this rule? Select one.",
        options: [
          "Meta-analysis of existing head CT rules",
          "Prospective validation in a new population at several sites",
          "Randomized impact trial of the rule against usual care",
          "Retrospective chart review at the same site",
          "Immediate implementation with audit of missed injuries",
        ],
        correct: 1,
        explanation:
          "Decision rules move from derivation to prospective validation in a separate population, then to an impact analysis, often a cluster randomized trial. Skipping validation risks implementing a rule that is overfit to one site. A chart review at the same site does not test transportability.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stiell-wells-rules",
      },
      {
        id: "q5",
        kind: "single",
        update:
          "An 81-year-old woman tripped at home and struck her head. She takes apixaban for atrial fibrillation. She has a GCS of 15, no vomiting and a small frontal bruise. A colleague notes that she is negative on the new rule.",
        prompt: "Which is the most appropriate approach? Select one.",
        options: [
          "Discharge her, because the rule is negative",
          "Apply the rule anyway, since apixaban carries less bleeding risk than warfarin",
          "Decide on CT using clinical judgment and guidance for anticoagulated patients, because the rule does not apply to her",
          "Check an anti-Xa level and scan only if it is elevated",
          "Observe for 2 hours and discharge if she remains GCS 15",
        ],
        correct: 2,
        explanation:
          "A rule can only be applied to patients like those in the study. Anticoagulated patients were excluded, so the rule says nothing about her risk. Many Canadian emergency physicians have a low threshold to image older anticoagulated patients after head trauma, although practice varies.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [UG, STIELL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 04 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-04",
    topic: "critical-appraisal",
    title: "Pooling trials for a kidney stone medication",
    stem:
      "You are asked whether to prescribe a medication to help distal ureteric stones pass. A fictional systematic review with meta-analysis pooled 12 randomized trials with 2,400 patients. Pooled relative risk for stone passage at 4 weeks was 1.25 (95% CI 1.10 to 1.42) favouring the drug, with an I squared of 72%. The three largest trials, which had low risk of bias and 1,600 patients in total, found a relative risk of 1.03 (95% CI 0.95 to 1.12). The funnel plot is asymmetric, with no small trials showing harm or no effect. In a subgroup analysis, the effect was larger for stones over 5 mm (relative risk 1.40) than for stones of 5 mm or less (relative risk 1.02). That analysis was not planned in the protocol.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List TWO methodologic features you would look for to judge whether this systematic review is valid.",
        required: 2,
        accept: [
          {
            id: "search",
            text: "A comprehensive search of several databases, including unpublished or grey literature",
            match: ["comprehensive", "search", "database", "grey literature", "gray literature", "unpublished"],
          },
          { id: "criteria", text: "Explicit, reproducible inclusion criteria", match: ["inclusion", "eligibility", "criteria"] },
          {
            id: "duplicate",
            text: "Study selection and data extraction by two reviewers independently",
            match: ["two reviewer", "duplicate", "independent", "independently"],
          },
          { id: "rob", text: "Risk of bias assessment of each included trial", match: ["risk of bias", "quality assessment", "quality of included", "bias assessment"] },
          { id: "prospero", text: "A registered, prespecified protocol", match: ["protocol", "registered", "prospero", "prespecified"] },
          { id: "hetero", text: "Assessment of heterogeneity and publication bias", match: ["heterogeneity", "publication bias", "funnel"] },
        ],
        explanation:
          "A systematic review is only as good as its search and its handling of the included studies. Look for a focused question, a comprehensive search, duplicate independent screening, and a formal risk of bias assessment. Heterogeneity and publication bias should be explored, not ignored.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "prisma-2020",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What does an I squared of 72% indicate? Answer in one line.",
        required: 1,
        accept: [
          {
            id: "het",
            text: "Substantial heterogeneity. Much of the variation between trial results is beyond what chance would explain",
            match: ["heterogeneity", "heterogeneous", "inconsistency", "inconsistent", "variability", "variation"],
          },
        ],
        unacceptable: [{ text: "72% of patients benefit from the drug", match: ["patients benefit", "patient benefit"] }],
        explanation:
          "I squared estimates the proportion of variability between studies that reflects true differences rather than chance. Values above about 50 to 75% indicate substantial heterogeneity. A single pooled estimate is then less trustworthy, and you should look for the reason, such as trial quality or stone size.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "Name the bias suggested by the asymmetric funnel plot.",
        required: 1,
        accept: [
          {
            id: "pub",
            text: "Publication bias (small study effects)",
            match: ["publication", "small study", "reporting bias", "file drawer"],
          },
        ],
        explanation:
          "Small negative trials are less likely to be published, so the lower corner of the funnel plot is empty. The pooled estimate then overstates benefit. This fits the finding that the large, low risk of bias trials showed no effect.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "prisma-2020",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "The authors conclude that the drug works for stones over 5 mm. List TWO criteria that make a subgroup effect credible.",
        required: 2,
        accept: [
          { id: "prespec", text: "The subgroup hypothesis was specified before the analysis, including its direction", match: ["prespecified", "pre specified", "a priori", "before", "planned"] },
          { id: "interaction", text: "A statistically significant test for interaction", match: ["interaction"] },
          { id: "few", text: "Only a small number of subgroups were tested", match: ["few subgroup", "number of subgroup", "multiple comparison", "small number"] },
          { id: "consistent", text: "The effect is consistent across trials or replicated in other studies", match: ["consistent", "consistency", "replicated", "replication", "reproduced"] },
          { id: "within", text: "It comes from comparisons within trials, not between them", match: ["within trial", "within study", "within studie"] },
          { id: "plausible", text: "There is a strong biological rationale", match: ["plausible", "plausibility", "biological", "biologic", "rationale"] },
        ],
        explanation:
          "Most subgroup claims are false positives. Credible ones are prespecified with a predicted direction, show a significant interaction, are few in number, and are consistent across studies. This subgroup was not planned, so treat it as hypothesis generating.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        update: "A 40-year-old man has a 4 mm distal ureteric stone on CT. His pain is controlled, he is afebrile and his creatinine is normal.",
        prompt: "Which is the most appropriate use of this evidence? Select one.",
        options: [
          "Prescribe the drug, since the pooled relative risk shows 25% more stones pass",
          "Do not routinely prescribe it for his 4 mm stone, since the high quality trials and the small stone subgroup show no meaningful benefit",
          "Prescribe it, since the harms of a short course are negligible",
          "Refer him to urology for early ureteroscopy",
          "Repeat the CT in 1 week to measure stone progress before deciding",
        ],
        correct: 1,
        explanation:
          "When large, low risk of bias trials disagree with a pooled result driven by small trials, trust the large trials. Both those trials and the small stone subgroup suggest little or no benefit for a 4 mm stone. Analgesia, return precautions and follow-up are the core of his plan.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [UG, PRISMA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 05 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-05",
    topic: "critical-appraisal",
    title: "An antibiotic class and a rare vascular event",
    stem:
      "A fictional study used provincial health databases. Investigators identified 300 adults hospitalized with aortic dissection or rupture (cases) and matched them by age and sex to 1,200 adults without it (controls). Exposure was a fluoroquinolone prescription dispensed in the previous 60 days. Thirty cases (10%) and 60 controls (5%) had been exposed. The authors adjusted for hypertension and smoking and conclude that fluoroquinolones cause aortic dissection.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the design of this study? Select one.",
        options: ["Prospective cohort study", "Case-control study", "Cross-sectional study", "Randomized controlled trial", "Case series"],
        correct: 1,
        explanation:
          "Participants were selected by outcome, then compared for past exposure. That is a case-control design. It is efficient for rare outcomes like aortic dissection, where a cohort or trial would need huge numbers.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "strobe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO limitations inherent to this design or analysis.",
        required: 2,
        accept: [
          { id: "confound", text: "Residual or unmeasured confounding", match: ["confounding", "confounder", "unmeasured", "residual"] },
          {
            id: "indication",
            text: "Confounding by indication. The infection itself may raise the risk",
            match: ["indication", "infection itself", "underlying infection"],
          },
          {
            id: "absolute",
            text: "Cannot directly measure incidence or absolute risk",
            match: ["incidence", "absolute risk", "absolute", "relative risk", "risk directly"],
          },
          { id: "controls", text: "Selection bias in how controls were chosen", match: ["control selection", "selection of control", "selection bias"] },
          {
            id: "misclass",
            text: "Exposure misclassification. A dispensed prescription does not prove the drug was taken",
            match: ["misclassification", "adherence", "dispensed", "dispensing", "taken"],
          },
          { id: "causal", text: "Shows association, not causation", match: ["causation", "causal", "association"] },
        ],
        explanation:
          "Observational designs cannot exclude unmeasured confounding, and infection itself may be linked to vascular events. Case-control studies yield odds ratios, not incidence, so absolute risk needs outside data. The authors' causal conclusion goes beyond what the design can show.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "strobe",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "Calculate the unadjusted odds ratio for aortic dissection with fluoroquinolone exposure. State the value.",
        required: 1,
        accept: [{ id: "or", text: "Odds ratio 2.1 ((30 x 1,140) / (270 x 60))", match: ["2.1", "2.11"] }],
        unacceptable: [{ text: "Odds ratio 2.0 (this is the ratio of exposure proportions, not odds)", match: ["2.0"] }],
        explanation:
          "Odds of exposure in cases are 30/270 = 0.111. Odds of exposure in controls are 60/1,140 = 0.053. The odds ratio is 0.111 / 0.053 = 2.1.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt:
          "Assume the odds ratio approximates the relative risk and that the baseline 60-day risk of aortic dissection is 1 in 10,000. Calculate the number needed to harm. State the value.",
        required: 1,
        accept: [
          {
            id: "nnh",
            text: "About 9,100 (1 / (2.1 x 0.0001 minus 0.0001) = 1 / 0.00011)",
            match: ["9100", "9,100", "9091", "9,091", "9000", "9,000", "9009", "9,009", "9 100", "9 000"],
          },
        ],
        explanation:
          "Risk with exposure is about 2.1 in 10,000, so the absolute increase is 1.1 in 10,000, or 0.00011. NNH is 1 / 0.00011, about 9,100. A doubled relative risk of a rare event is still a very small absolute harm.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        update: "A 72-year-old woman with normal renal function has symptoms of uncomplicated cystitis. She has no drug allergies.",
        prompt: "Which is the most appropriate management? Select one.",
        options: [
          "Ciprofloxacin, since the absolute risk of dissection is tiny",
          "Nitrofurantoin, a first-line agent for cystitis that also avoids the possible harm",
          "CT of the aorta before prescribing any fluoroquinolone",
          "No antibiotic, because all antibiotics carry vascular risk",
          "Ciprofloxacin with an echocardiogram at follow-up",
        ],
        correct: 1,
        explanation:
          "Fluoroquinolones are not first-line for uncomplicated cystitis in any case. When an equally effective first-line option exists, even a small, uncertain harm tips the balance. Screening imaging is not justified by an NNH near 9,000.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [UG, STROBE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 06 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-06",
    topic: "critical-appraisal",
    title: "Two patients with a swollen calf",
    stem:
      "A fictional meta-analysis reports that emergency physician two-point compression ultrasound for proximal deep vein thrombosis (DVT) has a sensitivity of 90% and a specificity of 95%. You see two patients on the same shift who both have a negative two-point scan.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Calculate the positive and negative likelihood ratios for this test. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "lrpos", text: "Positive likelihood ratio 18 (0.90 / 0.05)", match: lab(LRP, ["18", "18.0"]) },
          { id: "lrneg", text: "Negative likelihood ratio 0.11 (0.10 / 0.95)", match: lab(LRN, ["0.11", "0.1", "0.10", "0.105"]) },
        ],
        explanation:
          "LR+ is 0.90 / 0.05 = 18. LR- is 0.10 / 0.95 = 0.105, about 0.11. An LR- near 0.1 causes a large drop in probability, but how low the result falls depends on where you start.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        update: "Patient A is a 35-year-old runner with calf pain after a long run. You estimate her pretest probability of DVT at 10%.",
        prompt: "What is her post-test probability of proximal DVT after the negative scan? Select one.",
        options: ["1%", "3%", "5%", "9%", "10%"],
        correct: 0,
        explanation:
          "Pretest odds are 0.10 / 0.90 = 0.11. Post-test odds are 0.11 x 0.105 = 0.012, a probability of about 1%. That is below most test thresholds for DVT.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Patient B is a 67-year-old man with metastatic pancreatic cancer and 3 days of unilateral leg swelling with pitting edema. You estimate his pretest probability at 50%.",
        prompt: "Calculate his post-test probability of proximal DVT after the negative scan. State the value.",
        required: 1,
        accept: [{ id: "post", text: "About 10% (odds 1 x 0.105 = 0.105, probability 9.5%)", match: ["9.5%", "9.5", "10%", "10", "0.095", "9%", "10 percent", "9 percent", "1 in 10"] }],
        explanation:
          "Pretest odds are 0.50 / 0.50 = 1. Post-test odds are 1 x 0.105 = 0.105, a probability of about 9.5%. The same negative test leaves this man with roughly a 1 in 10 chance of DVT.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO appropriate next steps for Patient B.",
        required: 2,
        accept: [
          {
            id: "formal",
            text: "Formal complete duplex ultrasound of the leg",
            match: ["duplex", "formal", "radiology", "whole leg", "complete", "comprehensive", "full leg"],
          },
          { id: "repeat", text: "Repeat ultrasound in about 1 week if the first imaging is negative", match: ["repeat", "serial"] },
          { id: "ddimer", text: "D-dimer to guide the need for repeat imaging", match: ["d dimer", "dimer", "ddimer"] },
          {
            id: "anticoag",
            text: "Empiric anticoagulation if formal imaging is delayed and bleeding risk allows",
            match: ["anticoagulation", "anticoagulant", "anticoagulate", "apixaban", "rivaroxaban", "lmwh", "dalteparin", "enoxaparin", "tinzaparin"],
          },
        ],
        unacceptable: [
          { text: "Discharge without further testing. DVT is excluded", match: ["discharge dvt excluded", "discharge dvt ruled out"] },
        ],
        explanation:
          "A 10% residual risk is above the threshold for stopping. High pretest patients need a formal whole-leg or repeat ultrasound, often guided by D-dimer. Consider interim anticoagulation if imaging is delayed.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "thrombosis-canada-dvt",
      },
    ],
    sources: [
      UG,
      { id: "thrombosis-canada-dvt", citation: "Thrombosis Canada. Clinical guide. Deep vein thrombosis. Diagnosis." },
    ],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 07 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-07",
    topic: "critical-appraisal",
    title: "One dose or five days",
    stem:
      "A fictional open label randomized trial compared a single dose of oral dexamethasone 16 mg with 5 days of oral prednisone 50 mg daily in 1,500 adults discharged from the emergency department after a mild to moderate asthma exacerbation. The primary outcome was relapse, defined as an unscheduled visit for asthma within 14 days. The investigators set a non-inferiority margin of 5 percentage points. Follow-up was complete in 82% of patients. Relapse occurred in 12.0% with dexamethasone and 10.0% with prednisone, a difference of 2.0 percentage points (95% CI -1.5 to 5.5). Only an intention to treat analysis is reported. The authors conclude that single dose dexamethasone is non-inferior.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "What is the purpose of a non-inferiority design? Select one.",
        options: [
          "To prove the new treatment is better than standard care",
          "To show the new treatment is not worse than standard care by more than a prespecified margin",
          "To show the two treatments are exactly equal",
          "To reduce the sample size needed for a superiority trial",
          "To compare a treatment with placebo when standard care is unethical",
        ],
        correct: 1,
        explanation:
          "Non-inferiority trials test whether a new option with other advantages, such as simpler dosing, loses no more than an acceptable amount of benefit. The margin must be set in advance and justified clinically. They often need larger samples, not smaller ones.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-noninferiority",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Do the results support the authors' conclusion? Explain in one line.",
        required: 1,
        accept: [
          {
            id: "no",
            text: "No. The upper limit of the confidence interval (5.5) exceeds the 5 point margin, so non-inferiority is not shown",
            match: ["upper limit", "upper bound", "no upper", "no exceed", "no margin", "no 5.5", "5.5", "exceeds margin", "crosses margin", "exceeds the margin", "inconclusive", "not shown", "not demonstrated", "not established", "not proven"],
          },
        ],
        unacceptable: [
          {
            text: "Yes, because the difference was not statistically significant",
            match: ["yes"],
          },
        ],
        explanation:
          "Non-inferiority is shown only when the whole confidence interval lies on the favourable side of the margin. An upper bound of 5.5 means dexamethasone could be up to 5.5 points worse, beyond the accepted 5. Lack of a significant difference is not the same as non-inferiority.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "consort-noninferiority",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO other features of this trial that weaken confidence in a non-inferiority conclusion.",
        required: 2,
        accept: [
          { id: "loss", text: "18% loss to follow-up", match: ["loss", "lost", "attrition", "18%", "follow up", "incomplete"] },
          { id: "pp", text: "No per protocol analysis reported", match: ["per protocol", "no per protocol", "protocol analysis", "as treated"] },
          { id: "open", text: "Open label design with an outcome partly driven by patient behaviour", match: ["open label", "unblinded", "not blinded", "blinding", "blind"] },
          { id: "margin", text: "No justification given for the margin", match: ["margin", "justification", "justified"] },
        ],
        explanation:
          "In non-inferiority trials, intention to treat can bias toward no difference, because crossovers and dropouts make groups look alike. Both analyses should be reported and agree. Heavy loss to follow-up and an unjustified margin further weaken the claim.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-noninferiority",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "A 28-year-old woman is ready for discharge after an asthma exacerbation. She has no inhaled corticosteroid at home and says she often forgets medications.",
        prompt: "Which is the most appropriate approach? Select one.",
        options: [
          "Prescribe prednisone 50 mg daily for 5 days only, since dexamethasone is inferior",
          "Explain that single dose dexamethasone may be slightly less effective, share the uncertainty, and choose with her, while starting an inhaled corticosteroid",
          "Give single dose dexamethasone, since the trial proves it is non-inferior",
          "Withhold systemic corticosteroids because her exacerbation was mild to moderate",
          "Prescribe both dexamethasone and prednisone to cover the uncertainty",
        ],
        correct: 1,
        explanation:
          "The trial is inconclusive, not negative. It neither proves nor rules out a small loss of benefit. Her adherence concerns are a legitimate value to weigh in a shared decision. Every patient discharged after an asthma exacerbation should also leave with an inhaled corticosteroid.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "gina",
      },
    ],
    sources: [CONSORT_NI, { id: "gina", citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention." }],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 08 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-08",
    topic: "critical-appraisal",
    title: "Chart review of antibiotic timing",
    stem:
      "A fictional study reviewed electronic health records at 3 hospitals. It included 4,000 adults with sepsis. Patients who got antibiotics within 1 hour of triage had a 30-day mortality of 14%, compared with 18% for those treated later. After adjusting for age, sex and lactate, the odds ratio for death with early antibiotics was 0.82 (95% CI 0.70 to 0.96). Records missing the time of antibiotic administration (12%) were excluded. Data abstractors knew each patient's outcome.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the design of this study? Select one.",
        options: ["Randomized controlled trial", "Prospective cohort study", "Retrospective cohort study", "Case-control study", "Before and after study"],
        correct: 2,
        explanation:
          "Patients were grouped by exposure (antibiotic timing) and followed to an outcome using data already recorded. That is a retrospective cohort. Its data were collected for care, not research, so quality and completeness are limited.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "strobe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE limitations of this study for answering whether faster antibiotics reduce mortality.",
        required: 3,
        accept: [
          { id: "confound", text: "Unmeasured confounding", match: ["confounding", "confounder", "unmeasured", "residual"] },
          {
            id: "severity",
            text: "Confounding by severity or recognition. Obvious sepsis is treated faster but may differ in prognosis",
            match: ["severity", "sicker", "obvious", "recognition", "indication"],
          },
          { id: "missing", text: "Selection bias from excluding records with missing times", match: ["missing", "excluded", "exclusion", "selection bias"] },
          {
            id: "info",
            text: "Information bias. Abstractors were not blinded to outcome and charted times may be inaccurate",
            match: ["information bias", "blinded", "not blinded", "unblinded", "abstractor", "measurement", "documentation", "inaccurate", "recall"],
          },
          { id: "causal", text: "It shows association, not causation", match: ["causation", "causal", "association"] },
        ],
        explanation:
          "Observational data cannot balance unknown prognostic factors, and adjusting for three variables leaves much residual confounding. Excluding records with missing data and unblinded abstraction add bias. At best the study shows an association.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "strobe",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO analytic or design methods that reduce confounding in observational studies.",
        required: 2,
        accept: [
          { id: "regression", text: "Multivariable regression adjustment", match: ["regression", "multivariable", "multivariate", "adjustment", "adjust", "adjusted"] },
          { id: "propensity", text: "Propensity score matching or weighting", match: ["propensity"] },
          { id: "matching", text: "Matching on key confounders", match: ["matching", "matched", "match"] },
          { id: "restriction", text: "Restriction of the study population", match: ["restriction", "restrict", "restricted"] },
          { id: "strat", text: "Stratified analysis", match: ["stratification", "stratified", "stratify"] },
          { id: "iv", text: "Instrumental variable analysis", match: ["instrumental"] },
        ],
        explanation:
          "These methods deal only with confounders that were measured. Randomization is the only method that balances unmeasured confounders. That is why a randomized trial remains the best test of a treatment effect.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "Using the unadjusted mortality figures, calculate the absolute risk difference and the corresponding number needed to treat. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "arr", text: "Absolute risk difference 4% (18% minus 14%)", match: lab(["arr", "absolute", "risk difference", "difference"], ["4%", "4", "0.04"]) },
          { id: "nnt", text: "Number needed to treat 25 (1 / 0.04)", match: ["25"] },
        ],
        explanation:
          "The absolute difference is 18% minus 14% = 4%, and 1 / 0.04 = 25. In an observational study this is an association, not a proven effect of treatment. It likely overstates the true benefit because of confounding.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which conclusion is best supported by this study? Select one.",
        options: [
          "Giving antibiotics within 1 hour prevents one death for every 25 patients",
          "Early antibiotics are associated with lower mortality. This supports prompt antibiotics in suspected sepsis but does not prove a causal effect of the 1 hour target",
          "Antibiotic timing does not matter, since the confidence interval is wide",
          "All patients with fever should receive antibiotics within 1 hour of triage",
          "The study is invalid and should not inform practice",
        ],
        correct: 1,
        explanation:
          "The finding is consistent with other evidence that delays in septic shock are harmful. It cannot prove that a strict 1 hour target saves lives. Applying the target to every febrile patient risks overtreatment.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
    ],
    sources: [UG, STROBE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 09 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-09",
    topic: "critical-appraisal",
    title: "A new blood test for a febrile child",
    stem:
      "A fictional study evaluates a serum biomarker, marker Q, for bacterial meningitis in children. Investigators measured marker Q in 60 children with culture proven bacterial meningitis in intensive care and in 60 healthy children having elective day surgery. The area under the ROC curve was 0.98. At a cutoff of 0.5 ng/mL, sensitivity was 100% and specificity 95%.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Name the main design flaw in this study.",
        required: 1,
        accept: [
          {
            id: "spectrum",
            text: "Spectrum bias from a diagnostic case-control design comparing very sick cases with healthy controls",
            match: ["spectrum", "case control", "healthy control", "selection bias", "sickest", "extreme"],
          },
        ],
        explanation:
          "Comparing the sickest cases with healthy volunteers leaves out the patients where the test is actually needed. Children with viral meningitis or other febrile illness are the hard comparison. This is spectrum bias from a diagnostic case-control design.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stard-2015",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "How does this flaw affect the reported accuracy? Answer in one line.",
        required: 1,
        accept: [
          {
            id: "over",
            text: "It overestimates sensitivity and specificity compared with use in real febrile children",
            match: ["overestimate", "overestimated", "overestimation", "inflate", "inflated", "too high", "higher than", "optimistic", "exaggerate", "exaggerated"],
          },
        ],
        unacceptable: [{ text: "It underestimates accuracy", match: ["underestimate", "underestimated", "lower than"] }],
        explanation:
          "Severe disease is easy to detect and healthy children are easy to clear. Both inflate accuracy. Diagnostic case-control studies can overstate accuracy several fold compared with cohorts of patients in whom the diagnosis is genuinely uncertain.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "A second fictional study prospectively enrols 800 febrile children having a lumbar puncture in the emergency department, of whom 20 have bacterial meningitis. At a cutoff of 0.5 ng/mL, sensitivity is 95% and specificity 70%. At a cutoff of 2.0 ng/mL, sensitivity is 75% and specificity 95%.",
        prompt: "If marker Q were used to help rule out bacterial meningitis, which cutoff is more appropriate? Select one.",
        options: [
          "0.5 ng/mL, because its higher sensitivity makes a negative result more useful for ruling out",
          "2.0 ng/mL, because its higher specificity makes a negative result more useful for ruling out",
          "2.0 ng/mL, because it has fewer false positives",
          "Either cutoff, because the area under the curve is the same",
          "Neither, because no biomarker can be used as part of a rule out strategy",
        ],
        correct: 0,
        explanation:
          "A highly sensitive test has few false negatives, so a negative result helps rule out disease (SnNout). The 0.5 ng/mL cutoff gives an LR- of 0.05 / 0.70 = 0.07. The 2.0 ng/mL cutoff gives an LR- of 0.25 / 0.95 = 0.26, which is far weaker.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt:
          "In this second study, at the 0.5 ng/mL cutoff, how many children with bacterial meningitis would test negative, and how many children without it would test positive? List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "fn", text: "1 false negative (20 x 0.05)", match: ["1 false negative", "1 missed", "one missed", "one false negative", "missed 1", "1 child", "one child", "1 negative", "one negative", "fn 1"] },
          { id: "fp", text: "234 false positives (780 x 0.30)", match: ["234"] },
        ],
        explanation:
          "With 95% sensitivity, 5% of 20 is 1 child missed. There are 780 children without meningitis, and 30% of them test positive, which is 234 false positives. Even a useful rule out test generates many positives that need further work up.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "short",
        update:
          "A 3-year-old boy has fever, vomiting, neck stiffness and new petechiae on his trunk. His marker Q is 0.3 ng/mL.",
        prompt: "List TWO immediate management steps.",
        required: 2,
        accept: [
          {
            id: "abx",
            text: "Empiric IV antibiotics now, such as ceftriaxone, plus vancomycin",
            match: ["antibiotic", "ceftriaxone", "cefotaxime", "vancomycin"],
          },
          { id: "bc", text: "Blood culture", match: ["blood culture", "culture"] },
          { id: "lp", text: "Lumbar puncture when safe, without delaying antibiotics", match: ["lumbar puncture", "lp", "csf"] },
          { id: "dex", text: "Dexamethasone before or with the first antibiotic dose", match: ["dexamethasone", "steroid"] },
          { id: "resus", text: "Assess and support circulation with IV access and fluid bolus", match: ["fluid bolus", "bolus", "iv access", "resuscitation"] },
        ],
        unacceptable: [{ text: "Discharge or observe because the marker is negative", match: ["discharge", "reassure"], dangerous: true }],
        explanation:
          "His pretest probability is so high that no test result can lower it enough to withhold treatment. Fever with petechiae and meningism needs immediate cultures and antibiotics. A negative biomarker should not delay care.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "cps-meningitis",
      },
    ],
    sources: [
      UG,
      STARD,
      {
        id: "cps-meningitis",
        citation:
          "Canadian Paediatric Society. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age.",
      },
    ],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 10 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-10",
    topic: "critical-appraisal",
    title: "A heart failure trial stopped early",
    stem:
      "A fictional industry funded trial randomized adults admitted with acute heart failure to a new IV drug or placebo. It planned to enrol 2,000 patients but was stopped for benefit at an interim analysis of 1,000. The primary composite outcome was death, heart failure readmission, or in-hospital worsening heart failure (need for extra IV diuretic) at 60 days. It occurred in 24% with the drug and 30% with placebo (p = 0.03). Components were death 6% vs 6%, readmission 9% vs 9%, and worsening heart failure 9% vs 15%. NT-proBNP fell 30% more with the drug. The effect appeared larger in women than in men (p for interaction 0.40).",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List TWO concerns about the primary composite outcome.",
        required: 2,
        accept: [
          {
            id: "driven",
            text: "The benefit is driven entirely by the least important component, worsening heart failure",
            match: ["driven", "least important", "softest", "worsening", "diuretic", "one component", "single component"],
          },
          {
            id: "unequal",
            text: "Components differ greatly in importance to patients",
            match: ["importance", "unequal", "different importance", "not equally", "weight"],
          },
          {
            id: "subjective",
            text: "Worsening heart failure is a physician decision and can be influenced by judgment",
            match: ["subjective", "physician decision", "soft", "judgment", "discretion"],
          },
          { id: "nodeath", text: "No difference in death or readmission", match: ["death", "no death", "mortality", "no mortality", "readmission", "no readmission", "no difference"] },
        ],
        explanation:
          "Composite outcomes are useful only when components are of similar importance and move in the same direction. Here death and readmission are unchanged and the whole effect comes from a softer, clinician driven component. Report it to patients as less need for extra diuretic, not fewer deaths.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What type of outcome is the change in NT-proBNP?",
        required: 1,
        accept: [
          {
            id: "surrogate",
            text: "A surrogate, disease oriented outcome",
            match: ["surrogate", "disease oriented", "intermediate", "biomarker", "laboratory", "physiologic"],
          },
        ],
        unacceptable: [{ text: "A patient important outcome", match: ["patient oriented", "patient important", "patient centred", "patient centered"] }],
        explanation:
          "NT-proBNP is a lab value, not something patients feel or value directly. Surrogates have often moved in the right direction while patient important outcomes did not change or got worse. Decisions should rest on outcomes such as death, symptoms and hospital stays.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "How does stopping a trial early for benefit tend to affect the estimated treatment effect? Answer in one line.",
        required: 1,
        accept: [
          {
            id: "over",
            text: "It tends to overestimate the treatment effect",
            match: ["overestimate", "overestimated", "overestimation", "exaggerate", "exaggerated", "inflate", "inflated", "too large", "larger than"],
          },
        ],
        unacceptable: [{ text: "It underestimates the effect", match: ["underestimate", "underestimated"] }],
        explanation:
          "Trials stopped at a random high point capture an effect that is larger than the truth. The smaller the number of events at stopping, the greater the overestimate. Treat the size of the effect with caution until confirmed.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which is the best interpretation of the larger effect seen in women? Select one.",
        options: [
          "The drug should be reserved for women",
          "The p value for interaction of 0.40 suggests the difference between sexes is likely due to chance",
          "Men should not receive the drug",
          "The drug works only in women, since the effect was statistically significant in that subgroup",
          "The trial should be repeated in women only before any use",
        ],
        correct: 1,
        explanation:
          "The right test is whether the effect differs between subgroups, which is the interaction test. A p for interaction of 0.40 gives no evidence of a real difference. Apparent subgroup effects are usually chance.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "Calculate the number needed to treat for the composite outcome and for death. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "nntcomp", text: "Composite outcome NNT 17 (1 / 0.06 = 16.7)", match: ["17", "16.7"] },
          {
            id: "nntdeath",
            text: "Death: no benefit, so no NNT can be calculated",
            match: ["no benefit", "infinite", "infinity", "not applicable", "undefined", "cannot", "no difference", "not calculable", "none"],
          },
        ],
        explanation:
          "The composite ARR is 30% minus 24% = 6%, so NNT = 1 / 0.06 = 16.7, rounded up to 17. Death was 6% in both groups, so the ARR is zero and no NNT exists. The headline NNT hides the fact that no deaths were prevented.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
    ],
    sources: [UG],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 11 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-11",
    topic: "critical-appraisal",
    title: "An antiviral for an older man with influenza",
    stem:
      "A fictional trial randomized 3,000 outpatients with laboratory confirmed influenza, within 48 hours of symptom onset, to a 5 day oral antiviral or placebo. Median age was 44. Pregnant and immunocompromised patients were excluded. Hospitalization within 28 days occurred in 3.0% of the antiviral group and 4.0% of the placebo group. Nausea occurred in 10% and 5%.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Calculate the absolute risk reduction, relative risk reduction and number needed to treat for hospitalization. List THREE values, each labelled.",
        required: 3,
        accept: [
          { id: "arr", text: "Absolute risk reduction 1% (4.0% minus 3.0%)", match: lab(["arr", "absolute"], ["1%", "1", "0.01"]) },
          { id: "rrr", text: "Relative risk reduction 25% (0.01 / 0.04)", match: lab(["rrr", "relative"], ["25%", "25", "0.25"]) },
          { id: "nnt", text: "Number needed to treat 100 (1 / 0.01)", match: lab(["nnt", "number needed"], ["100"]) },
        ],
        explanation:
          "ARR is 4% minus 3% = 1%. RRR is 1 / 4 = 25%. NNT is 1 / 0.01 = 100 patients treated for 5 days to prevent one hospitalization in this low risk population.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "straus-ebm",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Calculate the number needed to harm for nausea. State the value.",
        required: 1,
        accept: [{ id: "nnh", text: "Number needed to harm 20 (1 / 0.05)", match: ["20"] }],
        explanation:
          "The absolute risk increase is 10% minus 5% = 5%, and 1 / 0.05 = 20. In the average trial patient, one extra person has nausea for every 20 treated, while one hospitalization is prevented for every 100.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "straus-ebm",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "An 82-year-old man with COPD and heart failure has had influenza symptoms for 30 hours. Using a validated tool, you estimate his risk of hospitalization without treatment at 16%.",
        prompt: "Assuming the relative risk reduction applies to him, calculate his individual number needed to treat. State the value.",
        required: 1,
        accept: [{ id: "nnt", text: "NNT 25 (ARR = 16% x 0.25 = 4%, 1 / 0.04 = 25)", match: ["25"] }],
        explanation:
          "Relative effects are usually more stable across risk groups than absolute effects. His ARR is 16% x 25% = 4%, so his NNT is 25. A higher baseline risk makes the same treatment four times more worthwhile for him.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "straus-ebm",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO reasons the trial results may not apply directly to him.",
        required: 2,
        accept: [
          { id: "age", text: "The trial population was much younger (median age 44)", match: ["age", "younger", "older", "44", "elderly"] },
          {
            id: "comorbid",
            text: "Patients with major comorbidity like his may have been few in the trial",
            match: ["comorbidity", "comorbiditie", "comorbid", "copd", "heart failure", "high risk", "underrepresented", "sicker"],
          },
          { id: "interactions", text: "Polypharmacy and drug interactions", match: ["interaction", "polypharmacy", "other medication"] },
          { id: "renal", text: "Possible renal impairment needing dose adjustment", match: ["renal", "kidney", "dose adjustment"] },
          { id: "harm", text: "Adverse effects may be more frequent or severe in frail older adults", match: ["adverse", "side effect", "frail", "tolerate"] },
        ],
        explanation:
          "Ask whether your patient is so different from trial patients that the results cannot help. Usually the relative effect can be borrowed and applied to his own baseline risk. Harms, interactions and dosing also need checking for an 82-year-old.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which is the most appropriate approach? Select one.",
        options: [
          "Do not treat. An NNT of 100 is too high to justify therapy",
          "Offer treatment, explaining that about 1 in 25 patients like him avoids hospitalization and about 1 in 20 has extra nausea, and decide together",
          "Treat only if he has had symptoms for more than 72 hours",
          "Admit him for IV antiviral therapy",
          "Treat, since all patients with confirmed influenza benefit equally",
        ],
        correct: 1,
        explanation:
          "Translating trial results into his own NNT and NNH lets him weigh a 1 in 25 chance of avoiding hospital against a 1 in 20 chance of nausea. Most older adults with comorbidity would choose treatment. His values guide the final decision.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "straus-ebm",
      },
    ],
    sources: [UG, EBM],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 12 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-12",
    topic: "critical-appraisal",
    title: "A single troponin on arrival",
    stem:
      "A fictional validation study examines a single high sensitivity troponin below the limit of detection at arrival as a rule out strategy for myocardial infarction (MI) in adults with chest pain. Patients who presented within 3 hours of symptom onset or who had ischemic ECG changes were excluded. Sensitivity was 99% and specificity 60%.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt:
          "In your emergency department, 10% of adults with chest pain who have this test have MI. Calculate the negative and positive predictive values. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "npv", text: "Negative predictive value 99.8% (540/541)", match: ["99.8%", "99.8", "0.998"] },
          { id: "ppv", text: "Positive predictive value 21.6% (99/459)", match: ["21.6%", "21.6", "22%", "22", "0.22", "0.216"] },
        ],
        explanation:
          "Per 1,000 patients, 100 have MI (99 test positive, 1 negative) and 900 do not (540 negative, 360 positive). NPV is 540/541 = 99.8%. PPV is 99/459 = 21.6%, so most positive tests are false positives at this prevalence.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "If the same test were used where 40% of patients have MI, what would the negative predictive value be? State the value.",
        required: 1,
        accept: [{ id: "npv", text: "About 98.9% (360/364)", match: ["98.9%", "98.9", "0.989"] }],
        explanation:
          "Per 1,000 patients, 400 have MI (4 test negative) and 600 do not (360 negative). NPV is 360/364 = 98.9%. Predictive values fall or rise with prevalence even when sensitivity and specificity stay the same.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "In your department (prevalence 10%), how many patients with MI per 1,000 tested would be classified as ruled out? State the value.",
        required: 1,
        accept: [{ id: "missed", text: "1 per 1,000", match: ["1", "one"] }],
        unacceptable: [
          { text: "None. The rule out is perfect", match: ["none", "zero", "0"] },
          { text: "10 per 1,000 (this is 1% of all patients tested, not 1% of those with MI)", match: ["10 per", "10 patient", "10 mi", "10 missed"] },
        ],
        explanation:
          "With 99% sensitivity, 1% of the 100 patients with MI test negative, which is 1 per 1,000 tested. Among the 541 patients ruled out, that is a miss rate of about 0.2%. This is well below the risk of about 1% at 30 days that many emergency physicians say they accept, but follow-up advice still matters.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "A 52-year-old man arrives 45 minutes after the onset of crushing central chest pain. His ECG is normal and his first troponin is below the limit of detection.",
        prompt: "Which is the most appropriate next step? Select one.",
        options: [
          "Discharge him, since his troponin is below the limit of detection",
          "Repeat the troponin at an interval set by your local pathway, since early presenters were excluded from the study",
          "Order CT coronary angiography before any repeat troponin",
          "Discharge him with outpatient stress testing within 72 hours",
          "Admit him to cardiology for angiography",
        ],
        correct: 1,
        explanation:
          "Troponin may not yet be detectable 45 minutes after symptom onset. Patients presenting within 3 hours were excluded, so the single sample strategy does not apply to him. He needs serial troponin and ECG testing.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "List TWO factors other than troponin that you must integrate before discharging a patient with chest pain.",
        required: 2,
        accept: [
          { id: "ecg", text: "ECG for ischemia", match: ["ecg", "ekg", "electrocardiogram"] },
          { id: "score", text: "A structured clinical risk score such as HEART", match: ["heart score", "risk score", "timi", "edacs", "score", "risk stratification"] },
          {
            id: "alt",
            text: "Other dangerous diagnoses such as aortic dissection or pulmonary embolism",
            match: ["dissection", "pulmonary embolism", "pe", "alternative diagnosis", "pneumothorax", "other cause"],
          },
          { id: "ongoing", text: "Ongoing or recurrent pain or hemodynamic instability", match: ["ongoing pain", "recurrent pain", "ongoing", "unstable", "instability", "hemodynamic"] },
          { id: "followup", text: "Reliable follow-up and return advice", match: ["follow up", "followup", "return"] },
        ],
        explanation:
          "A test result is one input, not the whole decision. Its accuracy was measured in patients defined by ECG and timing criteria. Clinical risk and other life threats must also be considered.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "users-guides",
      },
    ],
    sources: [UG],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 13 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-13",
    topic: "critical-appraisal",
    title: "Agreement and follow-up in a back pain study",
    stem:
      "A fictional prospective study derives a rule to identify serious pathology in adults with acute low back pain. One predictor is midline spinal tenderness. In a reliability substudy, two emergency physicians independently examined the same 100 patients. Both found tenderness in 20 patients and both found none in 50. Physician A alone found it in 15, and physician B alone found it in 15.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Calculate the observed agreement and the kappa for midline tenderness. List TWO values, each labelled.",
        required: 2,
        accept: [
          { id: "po", text: "Observed agreement 70% (70/100)", match: lab(["observed", "agreement", "po"], ["70%", "70", "0.7", "0.70"]) },
          { id: "kappa", text: "Kappa 0.34", match: ["0.34", "0.3", "0.341", "34%"] },
        ],
        explanation:
          "Observed agreement is (20 + 50) / 100 = 0.70. Each physician calls tenderness in 35%, so chance agreement is 0.35 x 0.35 + 0.65 x 0.65 = 0.545. Kappa is (0.70 minus 0.545) / (1 minus 0.545) = 0.34.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Interpret this kappa and state its implication for the rule. Answer in one line.",
        required: 1,
        accept: [
          {
            id: "fair",
            text: "Only fair agreement beyond chance, so the predictor is unreliable and the rule may perform worse in practice",
            match: ["fair", "poor", "weak", "unreliable", "not reliable", "low agreement", "inconsistent"],
          },
        ],
        unacceptable: [{ text: "Good or substantial agreement", match: ["good agreement", "substantial", "excellent", "strong agreement"] }],
        explanation:
          "A kappa of 0.21 to 0.40 is usually called fair agreement. Methodologic standards for decision rules expect predictors with at least moderate reliability, often kappa above 0.6. An unreliable predictor makes the rule less reproducible in other hands.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "stiell-wells-rules",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "The rule is applied to 1,200 patients. Sixty have serious pathology at 30 days, and all 60 were rule positive. However, 90 rule negative patients could not be contacted for follow-up. The authors report a sensitivity of 100%.",
        prompt: "If 6 of the patients lost to follow-up actually had serious pathology, what would the true sensitivity be? State the value.",
        required: 1,
        accept: [{ id: "sens", text: "About 91% (60/66)", match: ["91%", "91", "90.9%", "90.9", "0.91", "0.909"] }],
        explanation:
          "The 6 missed cases were rule negative, so they are false negatives. Sensitivity becomes 60 / (60 + 6) = 90.9%. In the true worst case, all 90 had serious pathology and sensitivity would be 60 / 150 = 40%. Loss to follow-up in the rule negative group can hide exactly the misses that matter most.",
        keyFeature: { topic: "critical-appraisal", n: 2 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO ways investigators could reduce or account for this loss to follow-up.",
        required: 2,
        accept: [
          { id: "worst", text: "Worst case sensitivity analysis", match: ["worst case", "sensitivity analysis", "best case"] },
          {
            id: "records",
            text: "Search health records, registries or provincial databases for outcomes",
            match: ["record", "registry", "registrie", "database", "chart review", "linkage"],
          },
          { id: "contact", text: "Multiple contact attempts and alternate contacts collected at enrolment", match: ["multiple attempt", "contact", "phone", "alternate"] },
          { id: "impute", text: "Multiple imputation of missing outcomes", match: ["imputation", "impute", "imputed"] },
        ],
        explanation:
          "Good studies plan follow-up so that few patients are lost, and they report a worst case analysis. Health record and registry linkage is especially powerful in Canada, where most admissions and deaths are captured provincially. A result that holds under worst case assumptions is far more convincing.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "stiell-wells-rules",
      },
    ],
    sources: [UG, STIELL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 14 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-14",
    topic: "critical-appraisal",
    title: "A small negative migraine trial",
    stem:
      "A fictional randomized trial at 2 emergency departments enrolled 64 adults with migraine and randomized them to an IV drug or placebo. The primary outcome was freedom from pain at 2 hours: 38% with the drug and 25% with placebo, a difference of 13 percentage points (95% CI -10 to 36, p = 0.26). The sample size was based on an expected absolute difference of 30 percentage points. The authors conclude that the drug is not effective for migraine.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Give TWO reasons the authors' conclusion does not follow from these results.",
        required: 2,
        accept: [
          {
            id: "power",
            text: "The trial is small and underpowered",
            match: ["underpowered", "power", "powered", "not powered", "small sample", "sample size", "too small", "small trial"],
          },
          {
            id: "ci",
            text: "The confidence interval is wide and includes a clinically important benefit of up to 36 points",
            match: ["confidence interval", "ci", "wide", "36", "includes benefit", "imprecise"],
          },
          {
            id: "assumed",
            text: "The assumed 30 point difference was unrealistically large",
            match: ["unrealistic", "30", "assumed", "effect size", "overestimated", "optimistic"],
          },
          {
            id: "absence",
            text: "Absence of evidence is not evidence of absence",
            match: ["absence", "no evidence", "inconclusive"],
          },
          { id: "type2", text: "A type II error is likely", match: ["type 2", "type ii", "false negative", "beta"] },
        ],
        explanation:
          "A non-significant result from a small trial is inconclusive, not negative. The interval runs from 10 points of harm to 36 points of benefit, so an important benefit is fully compatible with the data. Planning for a 30 point difference guaranteed the trial was too small for realistic effects.",
        keyFeature: { topic: "critical-appraisal", n: 4 },
        source: "users-guides",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "If the drug truly works, which error has most likely occurred? Select one.",
        options: ["Type I error", "Type II error", "Selection bias", "Confounding", "Regression to the mean"],
        correct: 1,
        explanation:
          "A type II error is failing to detect a real difference. Its risk rises when a trial is small or the true effect is smaller than planned. A type I error is a false positive.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE factors that determine the sample size needed for a randomized trial.",
        required: 3,
        accept: [
          { id: "alpha", text: "Alpha, the accepted type I error rate", match: ["alpha", "significance level", "type 1", "type i", "p value threshold"] },
          { id: "power", text: "Power, or 1 minus beta", match: ["power", "beta", "type 2", "type ii"] },
          {
            id: "effect",
            text: "The smallest clinically important difference to detect",
            match: ["effect size", "clinically important difference", "mcid", "difference", "effect"],
          },
          {
            id: "baseline",
            text: "The baseline event rate or the outcome's variability",
            match: ["event rate", "baseline", "control rate", "variance", "variability", "standard deviation"],
          },
          { id: "dropout", text: "Expected loss to follow-up", match: ["loss to follow", "dropout", "drop out", "attrition", "lost to follow"] },
        ],
        explanation:
          "Smaller alpha, higher power, a smaller target difference and rarer events all increase the sample size needed. Investigators then inflate it for expected dropouts. Choosing an implausibly large effect is a common way trials end up underpowered.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "consort-2010",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "Calculate the number needed to treat from the point estimate for pain freedom at 2 hours. State the value.",
        required: 1,
        accept: [{ id: "nnt", text: "NNT 8 (1 / 0.13 = 7.7, rounded up)", match: ["8", "7.7"] }],
        explanation:
          "The absolute difference is 38% minus 25% = 13%. The NNT is 1 / 0.13 = 7.7, rounded up to 8. The confidence interval crosses zero, so the true NNT could range from about 3 to benefit, through no effect, to harm.",
        keyFeature: { topic: "critical-appraisal", n: 3 },
        source: "users-guides",
      },
    ],
    sources: [UG, CONSORT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  /* 15 ----------------------------------------------------------------- */
  {
    id: "critical-appraisal-15",
    topic: "critical-appraisal",
    title: "Splint or cast for a child's wrist",
    stem:
      "A 7-year-old girl fell onto her outstretched hand at the playground. X-rays show a buckle (torus) fracture of the distal radius with no cortical break on the other side. A new colleague routinely applies a full cast and refers every child to fracture clinic. She asks you whether that is necessary.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Frame her question in PICO format. List the FOUR elements.",
        required: 4,
        accept: [
          {
            id: "p",
            text: "Population. Children with distal radius buckle fractures",
            match: ["children", "child", "pediatric", "paediatric", "buckle", "torus"],
          },
          { id: "i", text: "Intervention. Removable splint or soft bandage", match: ["splint", "removable", "bandage", "brace"] },
          { id: "c", text: "Comparison. Rigid cast", match: ["cast", "rigid immobilization", "rigid immobilisation"] },
          {
            id: "o",
            text: "Outcomes. Pain, function, complications and return to activity",
            match: ["pain", "function", "complication", "refracture", "satisfaction", "healing", "return to activity", "school"],
          },
        ],
        explanation:
          "A focused PICO question drives an efficient search and helps you judge whether evidence fits. Choose outcomes that matter to families, such as pain and function, rather than only radiographic healing.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "straus-ebm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which type of evidence would best answer this therapy question? Select one.",
        options: [
          "A case series from a fracture clinic",
          "A case-control study",
          "A retrospective cohort study",
          "A systematic review of randomized controlled trials",
          "An expert consensus statement",
        ],
        correct: 3,
        explanation:
          "For therapy questions, randomized trials minimize confounding, and a systematic review of them is the highest level of evidence. Observational designs are better suited to harm, prognosis or rare outcomes. Expert opinion ranks lowest.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q3",
        kind: "short",
        prompt:
          "Your colleague also wants to know how accurate point of care ultrasound is for diagnosing these fractures. Name the study design that best answers that question.",
        required: 1,
        accept: [
          {
            id: "dx",
            text: "A prospective cross-sectional diagnostic accuracy study with blinded comparison to a reference standard (X-ray)",
            match: ["cross sectional", "diagnostic accuracy", "reference standard", "gold standard", "prospective cohort", "blinded comparison"],
          },
        ],
        unacceptable: [{ text: "A randomized controlled trial", match: ["randomized controlled", "rct", "randomised controlled"] }],
        explanation:
          "Diagnostic accuracy is best studied by applying the index test and a reference standard to consecutive patients with a suspected condition. Readers of each test should be blinded to the other. An RCT answers whether using the test improves outcomes, which is a different question.",
        keyFeature: { topic: "critical-appraisal", n: 1 },
        source: "users-guides",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "You find a real trial, FORCE (Lancet 2022). It randomized 965 children aged 4 to 15 years with distal radius torus fractures at 23 UK hospitals to the offer of a soft bandage with immediate discharge, or rigid immobilization with follow-up per local protocol. Pain at 3 days was equivalent, and there were no differences in pain or function over 6 weeks.",
        prompt: "List TWO elements of your evidence based discharge plan for this child.",
        required: 2,
        accept: [
          {
            id: "splint",
            text: "Soft bandage or removable splint for comfort, not a cast",
            match: ["splint", "brace", "removable", "bandage", "tensor", "no cast", "not a cast"],
          },
          { id: "analgesia", text: "Regular ibuprofen or acetaminophen", match: ["ibuprofen", "acetaminophen", "analgesia", "analgesic", "pain control"] },
          {
            id: "nofollow",
            text: "No routine specialist follow-up and no repeat X-ray",
            match: ["no routine", "no follow", "no repeat", "no specialist", "no further x ray", "no clinic"],
          },
          {
            id: "return",
            text: "Resume activity as comfort allows and return if pain persists beyond 2 to 3 weeks",
            match: ["return if", "return precaution", "comfort", "resume activity", "activity as", "as tolerated"],
          },
        ],
        unacceptable: [
          { text: "Full cast with orthopaedic follow-up", match: ["full cast", "plaster cast", "rigid cast", "refer orthopaedic", "refer orthopedic", "refer fracture clinic"] },
          { text: "Routine fracture clinic follow-up or repeat X-ray", match: ["fracture clinic", "orthopaedic follow", "orthopedic follow", "repeat x ray"] },
        ],
        explanation:
          "Buckle fractures are stable and heal well without rigid immobilization. FORCE supports a soft bandage or removable splint, analgesia and no routine specialist follow-up. It was done in UK hospitals, so check that local practice and follow-up access are similar before applying it.",
        keyFeature: { topic: "critical-appraisal", n: 5 },
        source: "force-trial",
      },
    ],
    sources: [
      UG,
      EBM,
      {
        id: "force-trial",
        citation:
          "Perry DC, Achten J, Knight R, et al. Immobilisation of torus fractures of the wrist in children (FORCE). A randomised controlled equivalence trial in the UK. Lancet 2022.",
        url: "https://doi.org/10.1016/S0140-6736(22)01015-7",
      },
    ],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
