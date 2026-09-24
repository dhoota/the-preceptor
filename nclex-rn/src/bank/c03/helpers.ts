import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c03 items. */
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
  sepsis2021: {
    body: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign",
    work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Critical Care Medicine 49(11):e1063",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/34605781/",
  },
  sepsis2026: {
    body: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign",
    work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Critical Care Medicine",
    year: 2026,
    url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  falls: {
    body: "Montero-Odasso M, van der Velde N, Martin FC, et al. Task Force on Global Guidelines for Falls in Older Adults",
    work: "World guidelines for falls prevention and management for older adults. Age and Ageing 51(9):afac205",
    year: 2022,
    url: "https://academic.oup.com/ageing/article/51/9/afac205/6730755",
  },
  delirium: {
    body: "Inouye SK, Westendorp RG, Saczynski JS",
    work: "Delirium in elderly people. The Lancet 383(9920):911",
    year: 2014,
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)60688-1/abstract",
  },
  sbar: {
    body: "Institute for Healthcare Improvement",
    work: "SBAR Tool: Situation-Background-Assessment-Recommendation",
    year: 2023,
    url: "https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation",
  },
  ispadDka: {
    body: "Glaser N, Fritsch M, Priyambada L, et al. International Society for Pediatric and Adolescent Diabetes",
    work: "ISPAD Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 23(7):835",
    year: 2022,
    url: "https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406",
  },
  ispadSick: {
    body: "Phelan H, Hanas R, Hofer SE, et al. International Society for Pediatric and Adolescent Diabetes",
    work: "ISPAD Clinical Practice Consensus Guidelines 2022: Sick day management in children and adolescents with diabetes. Pediatric Diabetes 23(7):912",
    year: 2022,
    url: "https://www.ispad.org/resource/chapter-13-sick-day-management.html",
  },
  ispadAdol: {
    body: "Gregory JW, Cameron FJ, Joshi K, et al. International Society for Pediatric and Adolescent Diabetes",
    work: "ISPAD Clinical Practice Consensus Guidelines 2022: Diabetes in adolescence. Pediatric Diabetes 23(7):857",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9828225/",
  },
  ismp: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Acute Care Settings",
    year: 2024,
    url: "https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf",
  },
  acg: {
    body: "Tenner S, Vege SS, Sheth SG, et al. American College of Gastroenterology",
    work: "American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. American Journal of Gastroenterology 119(3):419",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38857482/",
  },
  asam: {
    body: "American Society of Addiction Medicine",
    work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S)",
    year: 2020,
    url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
  },
  mi: {
    body: "Miller WR, Rollnick S",
    work: "Motivational Interviewing: Helping People Change and Grow, 4th edition",
    year: 2023,
    url: "https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795",
  },
  gold: {
    body: "Global Initiative for Chronic Obstructive Lung Disease",
    work: "Global Strategy for the Diagnosis, Management, and Prevention of COPD, 2026 Report",
    year: 2025,
    url: "https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf",
  },
  bts: {
    body: "O'Driscoll BR, Howard LS, Earis J, Mak V. British Thoracic Society",
    work: "BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax 72(Suppl 1):ii1",
    year: 2017,
    url: "https://www.brit-thoracic.org.uk/clinical-resources/guidelines/emergency-oxygen/",
  },
  cdcFlu: {
    body: "Centers for Disease Control and Prevention",
    work: "Infection Prevention and Control Strategies for Seasonal Influenza in Healthcare Settings",
    year: 2025,
    url: "https://www.cdc.gov/flu/hcp/infection-control/healthcare-settings.html",
  },
  cdcAntiviral: {
    body: "Centers for Disease Control and Prevention",
    work: "Influenza Antiviral Medications: Summary for Clinicians",
    year: 2026,
    url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html",
  },
  cdcRsv: {
    body: "Centers for Disease Control and Prevention",
    work: "Clinical Guidance for RSV Immunizations and Vaccines",
    year: 2025,
    url: "https://www.cdc.gov/rsv/hcp/vaccine-clinical-guidance/index.html",
  },
  uspstf: {
    body: "US Preventive Services Task Force",
    work: "Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons. JAMA 325(3):265",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33464343/",
  },
  escPe: {
    body: "Konstantinides SV, Meyer G, Becattini C, et al. European Society of Cardiology and European Respiratory Society",
    work: "2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism. European Heart Journal 41(4):543",
    year: 2020,
    url: "https://academic.oup.com/eurheartj/article/41/4/543/5556136",
  },
};
