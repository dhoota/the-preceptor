import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s28. Psychosocial Integrity and Basic Care and Comfort. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const HALTER: Source = {
  body: "Halter MJ",
  work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
};
export const DSM: Source = {
  body: "American Psychiatric Association",
  work: "Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)",
  year: 2022,
  url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
};
export const NPIAP: Source = {
  body: "European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, Pan Pacific Pressure Injury Alliance",
  work: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, The International Guideline, 3rd edition",
  year: 2019,
  url: "https://internationalguideline.com/2019",
};
export const ASPEN_EN: Source = {
  body: "Boullata JI, Carrera AL, Harvey L, et al. American Society for Parenteral and Enteral Nutrition",
  work: "ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN Journal of Parenteral and Enteral Nutrition 41(1):15",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27815525/",
};
export const PADIS: Source = {
  body: "Devlin JW, Skrobik Y, Gelinas C, et al. Society of Critical Care Medicine",
  work: "Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU. Critical Care Medicine 46(9):e825",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30113379/",
};
export const AASM_INSOMNIA: Source = {
  body: "Edinger JD, Arnedt JT, Bertisch SM, et al. American Academy of Sleep Medicine",
  work: "Behavioral and Psychological Treatments for Chronic Insomnia Disorder in Adults. Journal of Clinical Sleep Medicine 17(2):255",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/33164742/",
};
export const SLOANE_BATH: Source = {
  body: "Sloane PD, Hoeffer B, Mitchell CM, et al.",
  work: "Effect of Person-Centered Showering and the Towel Bath on Bathing-Associated Aggression, Agitation, and Discomfort in Nursing Home Residents With Dementia. Journal of the American Geriatrics Society 52(11):1795",
  year: 2004,
  url: "https://pubmed.ncbi.nlm.nih.gov/15507054/",
};
export const WOCN_OSTOMY: Source = {
  body: "Wound, Ostomy and Continence Nurses Society",
  work: "WOCN Society Clinical Guideline: Management of the Adult Patient With a Fecal or Urinary Ostomy, An Executive Summary. Journal of Wound, Ostomy and Continence Nursing 45(1):50",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29300288/",
};
export const PAINAD: Source = {
  body: "Warden V, Hurley AC, Volicer L",
  work: "Development and Psychometric Evaluation of the Pain Assessment in Advanced Dementia (PAINAD) Scale. Journal of the American Medical Directors Association 4(1):9",
  year: 2003,
  url: "https://pubmed.ncbi.nlm.nih.gov/12807591/",
};
export const CHS: Source = {
  body: "Sorensen CJ, DeSanto K, Borgelt L, Phillips KT, Monte AA",
  work: "Cannabinoid Hyperemesis Syndrome: Diagnosis, Pathophysiology, and Treatment, a Systematic Review. Journal of Medical Toxicology 13(1):71",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/28000146/",
};
export const RAMADAN: Source = {
  body: "Hassanein M, Afandi B, Yakoob Ahmedani M, et al. International Diabetes Federation and DAR International Alliance",
  work: "Diabetes and Ramadan: Practical Guidelines 2021. Diabetes Research and Clinical Practice 185:109185",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35016991/",
};
export const CIWA: Source = {
  body: "Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM",
  work: "Assessment of Alcohol Withdrawal: The Revised Clinical Institute Withdrawal Assessment for Alcohol Scale (CIWA-Ar). British Journal of Addiction 84(11):1353",
  year: 1989,
  url: "https://pubmed.ncbi.nlm.nih.gov/2597811/",
};
export const ASAM_AWM: Source = {
  body: "American Society of Addiction Medicine",
  work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S Suppl 1):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
};
export const YALOM: Source = {
  body: "Yalom ID, Leszcz M",
  work: "The Theory and Practice of Group Psychotherapy, 6th edition",
  year: 2020,
  url: "https://www.hachettebookgroup.com/titles/irvin-d-yalom/the-theory-and-practice-of-group-psychotherapy/9781541617575/",
};
export const NCP: Source = {
  body: "National Consensus Project for Quality Palliative Care",
  work: "Clinical Practice Guidelines for Quality Palliative Care, 4th edition",
  year: 2018,
  url: "https://www.nationalcoalitionhpc.org/ncp/",
};
export const DEATH_RATTLE: Source = {
  body: "Moons L, De Roo ML, Deschodt M, Oldenburger E",
  work: "Death Rattle: Current Experiences and Non-Pharmacological Management, a Narrative Review. Annals of Palliative Medicine 13(1):150",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38073292/",
};
export const FIN_EXPLOIT: Source = {
  body: "Mosafer H, Soltani S, Rostami Z, Sharifi S, Mohammadi M",
  work: "Factors Associated With Financial Exploitation in Older Adults: A Systematic Review. Geriatric Nursing 61:662",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/39516091/",
};
export const TIP57: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "TIP 57: Trauma-Informed Care in Behavioral Health Services",
  year: 2014,
  url: "https://library.samhsa.gov/product/tip-57-trauma-informed-care-behavioral-health-services/sma14-4816",
};
export const CLAS: Source = {
  body: "US Department of Health and Human Services, Office of Minority Health",
  work: "National Standards for Culturally and Linguistically Appropriate Services in Health and Health Care",
  year: 2013,
  url: "https://www.federalregister.gov/documents/2013/09/24/2013-23164/national-standards-for-culturally-and-linguistically-appropriate-services-clas-in-health-and-health",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const GOULD_CAUTI: Source = {
  body: "Gould CV, Umscheid CA, Agarwal RK, Kuntz G, Pegues DA. Healthcare Infection Control Practices Advisory Committee",
  work: "Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009. Infection Control and Hospital Epidemiology 31(4):319",
  year: 2010,
  url: "https://pubmed.ncbi.nlm.nih.gov/20156062/",
};
