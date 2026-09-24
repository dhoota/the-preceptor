import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c04 items. */
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
  bronchiolitis: {
    body: "Ralston SL, Lieberthal AS, Meissner HC, et al. American Academy of Pediatrics",
    work: "Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics 134(5):e1474",
    year: 2014,
    url: "https://publications.aap.org/pediatrics/article/134/5/e1474/75848/Clinical-Practice-Guideline-The-Diagnosis",
  },
  pals: {
    body: "American Heart Association",
    work: "Pediatric Advanced Life Support Provider Manual",
    year: 2020,
  },
  wong: {
    body: "Hockenberry MJ, Duffy EA, Gibbs KD",
    work: "Wong's Nursing Care of Infants and Children, 12th edition",
    year: 2023,
  },
  isolation: {
    body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
    work: "2007 Guideline for Isolation Precautions, Appendix A",
    year: 2007,
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html",
  },
  varcarolis: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
    year: 2022,
    url: "https://openlibrary.org/isbn/9780323697071",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  gold: {
    body: "Global Initiative for Chronic Obstructive Lung Disease",
    work: "Global Strategy for Prevention, Diagnosis and Management of COPD: 2026 Report",
    year: 2025,
    url: "https://goldcopd.org/2026-gold-report/",
  },
  oxygen: {
    body: "National Fire Protection Association",
    work: "Medical Oxygen Safety tip sheet",
    year: 2016,
    url: "https://www.nfpa.org/downloadable-resources/safety-tip-sheets/medical-oxygen-safety-tip-sheet",
  },
  stages: {
    body: "Prochaska JO, DiClemente CC, Norcross JC",
    work: "In search of how people change: applications to addictive behaviors. American Psychologist 47(9):1102",
    year: 1992,
    url: "https://pubmed.ncbi.nlm.nih.gov/1329589/",
  },
  uspstf: {
    body: "Krist AH, Davidson KW, Mangione CM, et al. US Preventive Services Task Force",
    work: "Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons. JAMA 325(3):265",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33464343/",
  },
  patch: {
    body: "US National Library of Medicine, DailyMed",
    work: "Nicotine Transdermal System stop smoking aid, Drug Facts label (Rugby Laboratories)",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ae406389-0f83-d5c8-bd2f-56075e57453a&type=display",
  },
  psda: {
    body: "United States Congress",
    work: "Patient Self-Determination Act, Omnibus Budget Reconciliation Act of 1990, Public Law 101-508",
    year: 1990,
    url: "https://www.law.cornell.edu/cfr/text/42/489.102",
  },
  kdigo: {
    body: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group",
    work: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements 2(1):1",
    year: 2012,
    url: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
  },
  ukka: {
    body: "Alfonzo A, Harrison A, Baines R, Chu A, Mann S, MacRury M. UK Kidney Association",
    work: "Clinical Practice Guideline: Management of Hyperkalaemia in Adults",
    year: 2023,
    url: "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0",
  },
  af: {
    body: "Joglar JA, Chung MK, Armbruster AL, et al. American College of Cardiology and American Heart Association",
    work: "2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38033089/",
  },
  diltiazem: {
    body: "US National Library of Medicine, DailyMed",
    work: "Diltiazem Hydrochloride Injection prescribing information (Hikma Pharmaceuticals)",
    year: 2020,
    url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=734beeef-3968-4137-af2c-276e8a9317df",
  },
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall AM",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2022,
    url: "https://openlibrary.org/isbn/9780323810340",
  },
  ugib: {
    body: "Laine L, Barkun AN, Saltzman JR, Martel M, Leontiadis GI. American College of Gastroenterology",
    work: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. American Journal of Gastroenterology 116(5):899",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33929377/",
  },
  nsaid: {
    body: "Lanza FL, Chan FK, Quigley EM. American College of Gastroenterology Practice Parameters Committee",
    work: "Guidelines for Prevention of NSAID-Related Ulcer Complications. American Journal of Gastroenterology 104(3):728",
    year: 2009,
    url: "https://pubmed.ncbi.nlm.nih.gov/19240698/",
  },
  blood: {
    body: "AABB, American Red Cross, America's Blood Centers and Armed Services Blood Program",
    work: "Circular of Information for the Use of Human Blood and Blood Components",
    year: 2024,
    url: "https://www.aabb.org/news-resources/resources/circular-of-information",
  },
  mi: {
    body: "Miller WR, Rollnick S",
    work: "Motivational Interviewing: Helping People Change and Grow, 4th edition",
    year: 2023,
    url: "https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795",
  },
};
