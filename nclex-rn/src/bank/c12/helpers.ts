import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c12 items. */
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
  aapEd: {
    body: "Hornberger LL, Lane MA. American Academy of Pediatrics Committee on Adolescence",
    work: "Identification and Management of Eating Disorders in Children and Adolescents. Pediatrics 147(1):e2020040279",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33386343/",
  },
  sahm: {
    body: "Society for Adolescent Health and Medicine",
    work: "Medical Management of Restrictive Eating Disorders in Adolescents and Young Adults. Journal of Adolescent Health 71(5):648",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/36058805/",
  },
  refeeding: {
    body: "da Silva JSV, Seres DS, Sabino K, et al. American Society for Parenteral and Enteral Nutrition",
    work: "ASPEN Consensus Recommendations for Refeeding Syndrome. Nutrition in Clinical Practice 35(2):178",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32115791/",
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
    year: 2022,
  },
  boyer: {
    body: "Boyer EW",
    work: "Management of Opioid Analgesic Overdose. New England Journal of Medicine 367(2):146",
    year: 2012,
    url: "https://pubmed.ncbi.nlm.nih.gov/22784117/",
  },
  ahaTox: {
    body: "Lavonas EJ, Akpunonu PD, Arens AM, et al. American Heart Association",
    work: "2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning. Circulation 148(16):e149",
    year: 2023,
    url: "https://pubmed.ncbi.nlm.nih.gov/37721023/",
  },
  naloxone: {
    body: "US National Library of Medicine, DailyMed. International Medication Systems",
    work: "Naloxone Hydrochloride Injection, USP prescribing information",
    year: 2024,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=236349ef-2cb5-47ca-a3a5-99534c3a4996",
  },
  samhsa: {
    body: "Substance Abuse and Mental Health Services Administration",
    work: "SAMHSA Overdose Prevention and Response Toolkit, Publication No. PEP23-03-00-001",
    year: 2023,
    url: "https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001",
  },
  bologna: {
    body: "Ten Broek RPG, Krielen P, Di Saverio S, et al. World Society of Emergency Surgery ASBO working group",
    work: "Bologna guidelines for diagnosis and management of adhesive small bowel obstruction: 2017 update. World Journal of Emergency Surgery 13:24",
    year: 2018,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  aspenEn: {
    body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
    work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/27815525/",
  },
  delegation: {
    body: "National Council of State Boards of Nursing and American Nurses Association",
    work: "National Guidelines for Nursing Delegation",
    year: 2019,
    url: "https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf",
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  zosyn: {
    body: "US National Library of Medicine, DailyMed. Baxter Healthcare Corporation",
    work: "Zosyn (piperacillin and tazobactam) injection prescribing information",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8db6bd91-2106-4bfd-8cc8-38aaf1e18d17",
  },
  consent: {
    body: "Katz AL, Webb SA. American Academy of Pediatrics Committee on Bioethics",
    work: "Informed Consent in Decision-Making in Pediatric Practice. Pediatrics 138(2):e20161485",
    year: 2016,
    url: "https://pubmed.ncbi.nlm.nih.gov/27456510/",
  },
  ssi: {
    body: "Berrios-Torres SI, Umscheid CA, Bratzler DW, et al. Centers for Disease Control and Prevention",
    work: "Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surgery 152(8):784",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28467526/",
  },
  handHygiene: {
    body: "Boyce JM, Pittet D. Healthcare Infection Control Practices Advisory Committee",
    work: "Guideline for Hand Hygiene in Health-Care Settings. MMWR Recommendations and Reports 51(RR-16)",
    year: 2002,
    url: "https://pubmed.ncbi.nlm.nih.gov/12418624/",
  },
  orthostatic: {
    body: "Freeman R, Wieling W, Axelrod FB, et al.",
    work: "Consensus Statement on the Definition of Orthostatic Hypotension, Neurally Mediated Syncope and the Postural Tachycardia Syndrome. Clinical Autonomic Research 21(2):69",
    year: 2011,
    url: "https://pubmed.ncbi.nlm.nih.gov/21431947/",
  },
  falls: {
    body: "Ganz DA, Huang C, Saliba D, et al. Agency for Healthcare Research and Quality",
    work: "Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care",
    year: 2013,
    url: "https://www.ahrq.gov/sites/default/files/publications/files/fallpxtoolkit.pdf",
  },
  enoxaparin: {
    body: "US National Library of Medicine, DailyMed. Meitheal Pharmaceuticals",
    work: "Enoxaparin Sodium Injection prescribing information",
    year: 2024,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adfc2b23-00a5-4f05-a08b-83087e1e4843",
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations",
    year: 2021,
    url: "https://www.ismp.org/system/files/resources/2021-02/Error%20Prone%20Abbreviations%202021_0.pdf",
  },
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall AM",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2023,
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
  aaosTkr: {
    body: "American Academy of Orthopaedic Surgeons",
    work: "OrthoInfo: Total Knee Replacement",
    year: 2023,
    url: "https://www.orthoinfo.org/en/treatment/total-knee-replacement",
  },
};
