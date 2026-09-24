import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c08 items. */
export const meta = (id: string, over: Partial<ItemMeta>): ItemMeta => ({
  id,
  need: "PA",
  topic: "",
  cjmm: "recognize",
  process: "clinical-judgment",
  difficulty: 3,
  stem: "",
  rationale: "",
  sources: [],
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const SRC: Record<string, Source> = {
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  kosova: {
    body: "Kosova E, Bergmark B, Piazza G",
    work: "Fat Embolism Syndrome. Circulation 131(3):317",
    year: 2015,
    url: "https://pubmed.ncbi.nlm.nih.gov/25601951/",
  },
  timon: {
    body: "Timon C, Keady C, Murphy CG",
    work: "Fat Embolism Syndrome: A Qualitative Review of its Incidence, Presentation, Pathogenesis and Management. Malaysian Orthopaedic Journal 15(1):1",
    year: 2021,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8043637/",
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
  restraint: {
    body: "Centers for Medicare and Medicaid Services",
    work: "Condition of Participation: Patient's Rights, Restraint or Seclusion. 42 CFR 482.13(e)",
    year: 2024,
    url: "https://www.law.cornell.edu/cfr/text/42/482.13",
  },
  hak: {
    body: "Hak DJ. In: Mauffrey C, Hak DJ, Martin MP, editors",
    work: "Acute Compartment Syndrome in Children. Compartment Syndrome: A Guide to Diagnosis and Management, Chapter 13",
    year: 2019,
    url: "https://www.ncbi.nlm.nih.gov/books/NBK553897/",
  },
  bae: {
    body: "Bae DS, Kadiyala RK, Waters PM",
    work: "Acute Compartment Syndrome in Children: Contemporary Diagnosis, Treatment, and Outcome. Journal of Pediatric Orthopaedics 21(5):680",
    year: 2001,
    url: "https://pubmed.ncbi.nlm.nih.gov/11521042/",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  consent: {
    body: "Katz AL, Webb SA. American Academy of Pediatrics Committee on Bioethics",
    work: "Informed Consent in Decision-Making in Pediatric Practice. Pediatrics 138(2):e20161485",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/27456510/",
  },
  nhlbi: {
    body: "National Heart, Lung, and Blood Institute",
    work: "Evidence-Based Management of Sickle Cell Disease: Expert Panel Report",
    year: 2014,
    url: "https://www.nhlbi.nih.gov/sites/default/files/media/docs/Evd-Bsd_SickleCellDis_Rep2014.pdf",
  },
  ashPain: {
    body: "Brandow AM, Carroll CP, Creary S, et al. American Society of Hematology",
    work: "American Society of Hematology 2020 Guidelines for Sickle Cell Disease: Management of Acute and Chronic Pain. Blood Advances 4(12):2656",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32559294/",
  },
  aspmn: {
    body: "Jungquist CR, Quinlan-Colwell A, Vallerand A, et al. American Society for Pain Management Nursing",
    work: "Guidelines on Monitoring for Opioid-Induced Advancing Sedation and Respiratory Depression: Revisions. Pain Management Nursing 21(1):7",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/31377031/",
  },
  proxy: {
    body: "Wuhrman E, Cooney MF, Dunwoody CJ, et al. American Society for Pain Management Nursing",
    work: "Authorized and Unauthorized (PCA by Proxy) Dosing of Analgesic Infusion Pumps: Position Statement with Clinical Practice Recommendations. Pain Management Nursing 8(1):4",
    year: 2007,
    url: "https://pubmed.ncbi.nlm.nih.gov/17336864/",
  },
  freifeld: {
    body: "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Infectious Diseases Society of America",
    work: "Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer: 2010 Update. Clinical Infectious Diseases 52(4):e56",
    year: 2011,
    url: "https://academic.oup.com/cid/article/52/4/e56/382256",
  },
  taplitz: {
    body: "Taplitz RA, Kennedy EB, Bow EJ, et al. American Society of Clinical Oncology and Infectious Diseases Society of America",
    work: "Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: Clinical Practice Guideline Update. Journal of Clinical Oncology 36(14):1443",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29461916/",
  },
  vaccine: {
    body: "Rubin LG, Levin MJ, Ljungman P, et al. Infectious Diseases Society of America",
    work: "2013 IDSA Clinical Practice Guideline for Vaccination of the Immunocompromised Host. Clinical Infectious Diseases 58(3):e44",
    year: 2014,
    url: "https://pubmed.ncbi.nlm.nih.gov/24311479/",
  },
  howard: {
    body: "Howard SC, Jones DP, Pui CH",
    work: "The Tumor Lysis Syndrome. New England Journal of Medicine 364(19):1844",
    year: 2011,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3437249/",
  },
  coiffier: {
    body: "Coiffier B, Altman A, Pui CH, Younes A, Cairo MS",
    work: "Guidelines for the Management of Pediatric and Adult Tumor Lysis Syndrome: An Evidence-Based Review. Journal of Clinical Oncology 26(16):2767",
    year: 2008,
    url: "https://pubmed.ncbi.nlm.nih.gov/18509186/",
  },
  elitek: {
    body: "US National Library of Medicine, DailyMed",
    work: "Elitek (rasburicase) for injection prescribing information",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ae10bc4-6b65-402f-9db5-2d7753054922",
  },
  handoff: {
    body: "The Joint Commission",
    work: "Sentinel Event Alert Issue 58: Inadequate Hand-off Communication",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28914519/",
  },
  hazard: {
    body: "Polovich M, Olsen MM. Oncology Nursing Society",
    work: "Safe Handling of Hazardous Drugs, 3rd edition",
    year: 2018,
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
    year: 2022,
  },
  clabsi: {
    body: "O'Grady NP, Alexander M, Burns LA, et al. Healthcare Infection Control Practices Advisory Committee",
    work: "Guidelines for the Prevention of Intravascular Catheter-Related Infections",
    year: 2011,
    url: "https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf",
  },
};
