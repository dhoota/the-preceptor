import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c17 items. */
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
  wao: {
    body: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization",
    work: "World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organization Journal 13(10):100472",
    year: 2020,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
  },
  pumphrey: {
    body: "Pumphrey RSH",
    work: "Fatal Posture in Anaphylactic Shock. Journal of Allergy and Clinical Immunology 112(2):451",
    year: 2003,
    url: "https://pubmed.ncbi.nlm.nih.gov/12897756/",
  },
  arv: {
    body: "Panel on Antiretroviral Guidelines for Adults and Adolescents. US Department of Health and Human Services",
    work: "Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents With HIV",
    year: 2025,
    url: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/initiation-antiretroviral-therapy",
  },
  oi: {
    body: "Panel on Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents With HIV",
    work: "Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents With HIV: Pneumocystis Pneumonia",
    year: 2026,
    url: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis",
  },
  uu: {
    body: "Centers for Disease Control and Prevention, Division of HIV/AIDS Prevention",
    work: "Evidence of HIV Treatment and Viral Suppression in Preventing the Sexual Transmission of HIV",
    year: 2018,
    url: "https://stacks.cdc.gov/view/cdc/60952",
  },
  partner: {
    body: "Centers for Disease Control and Prevention",
    work: "Recommendations for Partner Services Programs for HIV Infection, Syphilis, Gonorrhea, and Chlamydial Infection. MMWR Recommendations and Reports 57(RR-9):1",
    year: 2008,
    url: "https://pubmed.ncbi.nlm.nih.gov/18987617/",
  },
  casedef: {
    body: "Selik RM, Mokotoff ED, Branson B, et al. Centers for Disease Control and Prevention",
    work: "Revised Surveillance Case Definition for HIV Infection, United States, 2014. MMWR Recommendations and Reports 63(RR-03):1",
    year: 2014,
    url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6303a1.htm",
  },
  eular: {
    body: "Fanouriakis A, Kostopoulou M, Andersen J, et al. EULAR",
    work: "EULAR Recommendations for the Management of Systemic Lupus Erythematosus: 2023 Update. Annals of the Rheumatic Diseases 83(1):15",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/37827694/",
  },
  kdigoLn: {
    body: "Kidney Disease: Improving Global Outcomes (KDIGO) Lupus Nephritis Work Group",
    work: "KDIGO 2024 Clinical Practice Guideline for the Management of Lupus Nephritis. Kidney International 105(1S):S1",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38182286/",
  },
  cellcept: {
    body: "US National Library of Medicine, DailyMed",
    work: "CellCept (mycophenolate mofetil) prescribing information",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=37241e87-4af4-4dc3-a1aa-ea6f20d8dc40",
  },
  siegel: {
    body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee",
    work: "2007 Guideline for Isolation Precautions",
    year: 2007,
    url: "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
  },
  acr: {
    body: "Fraenkel L, Bathon JM, England BR, et al. American College of Rheumatology",
    work: "2021 American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis. Arthritis Care and Research 73(7):924",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/34101387/",
  },
  mtx: {
    body: "US National Library of Medicine, DailyMed",
    work: "Methotrexate tablets prescribing information",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a6afc4c-819d-4ba9-8040-4504519c116a",
  },
  ismpLtc: {
    body: "Institute for Safe Medication Practices",
    work: "ISMP List of High-Alert Medications in Long-Term Care (LTC) Settings",
    year: 2021,
    url: "https://www.ismp.org/system/files/resources/2021-05/HighAlertMedications_LTC-2021.pdf",
  },
  kdigoTx: {
    body: "Kidney Disease: Improving Global Outcomes (KDIGO) Transplant Work Group",
    work: "KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients. American Journal of Transplantation 9(Suppl 3):S1",
    year: 2009,
    url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1600-6143.2009.02834.x",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  cdcAdult: {
    body: "Centers for Disease Control and Prevention",
    work: "Adult Immunization Schedule by Age and Notes, United States",
    year: 2025,
    url: "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-notes.html",
  },
  halter: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition",
    year: 2022,
  },
};
