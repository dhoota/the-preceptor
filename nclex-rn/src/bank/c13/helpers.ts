import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c13 items. */
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
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall A",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2023,
  },
  pacu: {
    body: "Apfelbaum JL, Silverstein JH, Chung FF, et al. American Society of Anesthesiologists Task Force on Postanesthetic Care",
    work: "Practice Guidelines for Postanesthetic Care. Anesthesiology 118(2):291",
    year: 2013,
    url: "https://pubs.asahq.org/anesthesiology/article/118/2/291/13600/",
  },
  osa: {
    body: "American Society of Anesthesiologists Task Force on Perioperative Management of Patients with Obstructive Sleep Apnea",
    work: "Practice Guidelines for the Perioperative Management of Patients with Obstructive Sleep Apnea. Anesthesiology 120(2):268",
    year: 2014,
    url: "https://pubmed.ncbi.nlm.nih.gov/24346178/",
  },
  opioid: {
    body: "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. Centers for Disease Control and Prevention",
    work: "CDC Clinical Practice Guideline for Prescribing Opioids for Pain, United States. MMWR Recommendations and Reports 71(3)",
    year: 2022,
    url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
  },
  wocn: {
    body: "Wound, Ostomy and Continence Nurses Society",
    work: "WOCN Society Clinical Guideline: Management of the Adult Patient With a Fecal or Urinary Ostomy, An Executive Summary. Journal of Wound, Ostomy and Continence Nursing 45(1):50",
    year: 2018,
    url: "https://journals.lww.com/jwocnonline/abstract/2018/01000/wocn_society_clinical_guideline__management_of_the.9.aspx",
  },
  cap: {
    body: "Metlay JP, Waterer GW, Long AC, et al. American Thoracic Society and Infectious Diseases Society of America",
    work: "Diagnosis and Treatment of Adults with Community-acquired Pneumonia. American Journal of Respiratory and Critical Care Medicine 200(7):e45",
    year: 2019,
    url: "https://pubmed.ncbi.nlm.nih.gov/31573350/",
  },
  bts: {
    body: "O'Driscoll BR, Howard LS, Earis J, Mak V. British Thoracic Society",
    work: "BTS Guideline for Oxygen Use in Adults in Healthcare and Emergency Settings. Thorax 72(Suppl 1):ii1",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28507176/",
  },
  cam: {
    body: "Inouye SK, van Dyck CH, Alessi CA, Balkin S, Siegal AP, Horwitz RI",
    work: "Clarifying Confusion: the Confusion Assessment Method. Annals of Internal Medicine 113(12):941",
    year: 1990,
    url: "https://www.acpjournals.org/doi/10.7326/0003-4819-113-12-941",
  },
  cdiff: {
    body: "McDonald LC, Gerding DN, Johnson S, et al. IDSA and SHEA",
    work: "Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update. Clinical Infectious Diseases 66(7):e1",
    year: 2018,
    url: "https://academic.oup.com/cid/article/66/7/e1/4855916",
  },
  cdiff2021: {
    body: "Johnson S, Lavergne V, Skinner AM, et al. IDSA and SHEA",
    work: "2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clinical Infectious Diseases 73(5):e1029",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/34164674/",
  },
  cdcCdiff: {
    body: "Centers for Disease Control and Prevention",
    work: "Preventing C. diff",
    year: 2024,
    url: "https://www.cdc.gov/c-diff/prevention/index.html",
  },
  fluLtc: {
    body: "Centers for Disease Control and Prevention",
    work: "Interim Guidance for Influenza Outbreak Management in Long-Term Care and Post-Acute Care Facilities",
    year: 2024,
    url: "https://archive.cdc.gov/www_cdc_gov/flu/hcp/infection-control/ltc-facility-guidance.html",
  },
  fluRx: {
    body: "Centers for Disease Control and Prevention",
    work: "Influenza Antiviral Medications: Summary for Clinicians",
    year: 2026,
    url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html",
  },
  acip: {
    body: "Grohskopf LA, Blanton LH, Ferdinands JM, Reed C, Dugan VG, Daskalakis DC. Advisory Committee on Immunization Practices",
    work: "Prevention and Control of Seasonal Influenza with Vaccines, United States, 2025-26 Influenza Season. MMWR 74(32)",
    year: 2025,
    url: "https://www.cdc.gov/mmwr/volumes/74/wr/mm7432a2.htm",
  },
  varcarolis: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
    year: 2022,
  },
};
