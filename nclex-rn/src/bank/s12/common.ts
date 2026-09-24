import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s12. Psychosocial Integrity. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PSY",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HALTER: Source = {
  body: "Halter MJ",
  work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
  year: 2022,
  url: "https://evolve.elsevier.com/cs/product/9780323697071",
};
export const TOWNSEND: Source = {
  body: "Morgan KI, Townsend MC",
  work: "Davis Advantage for Townsend's Psychiatric Mental Health Nursing, 11th edition",
  year: 2023,
  url: "https://www.fadavis.com/nursing/psychiatric-and-mental-health-nursing",
};
export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const HINKLE: Source = {
  body: "Hinkle JL, Cheever KH, Overbaugh KJ",
  work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
  year: 2022,
};
export const DSM: Source = {
  body: "American Psychiatric Association",
  work: "Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)",
  year: 2022,
  url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const GIGER: Source = {
  body: "Giger JN, Haddad LG",
  work: "Transcultural Nursing: Assessment and Intervention, 8th edition",
  year: 2021,
  url: "https://shop.elsevier.com/books/transcultural-nursing/giger/978-0-323-69554-1",
};
export const ASAM_AW: Source = {
  body: "American Society of Addiction Medicine",
  work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S Suppl 1)",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
};
export const TIP63: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "TIP 63: Medications for Opioid Use Disorder",
  year: 2021,
  url: "https://library.samhsa.gov/product/tip-63-medications-opioid-use-disorder/pep21-02-01-002",
};
export const ASAM_BZD: Source = {
  body: "Brunner E, et al. American Society of Addiction Medicine and partner societies",
  work: "Joint Clinical Practice Guideline on Benzodiazepine Tapering: Considerations When Risks Outweigh Benefits. Journal of General Internal Medicine 40(12):2814",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40526204/",
};
export const SECHI: Source = {
  body: "Sechi G, Serra A",
  work: "Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurology 6(5):442",
  year: 2007,
  url: "https://pubmed.ncbi.nlm.nih.gov/17434099/",
};
export const USPSTF_ALC: Source = {
  body: "US Preventive Services Task Force, Curry SJ, et al.",
  work: "Screening and Behavioral Counseling Interventions to Reduce Unhealthy Alcohol Use in Adolescents and Adults. JAMA 320(18):1899",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30422199/",
};
export const AACN_FP: Source = {
  body: "American Association of Critical-Care Nurses",
  work: "Practice Alert: Facilitating Family Presence During Resuscitation and Invasive Procedures Throughout the Life Span. Critical Care Nurse 44(2):e1",
  year: 2024,
  url: "https://aacnjournals.org/ccnonline/article/44/2/e1/32253/Facilitating-Family-Presence-During-Resuscitation",
};
export const AAP_ABUSE: Source = {
  body: "Christian CW. American Academy of Pediatrics Committee on Child Abuse and Neglect",
  work: "The Evaluation of Suspected Child Physical Abuse. Pediatrics 135(5):e1337",
  year: 2015,
  url: "https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse",
};
export const ENA_HT: Source = {
  body: "Emergency Nurses Association, International Association of Forensic Nurses",
  work: "Human Trafficking Awareness in the Emergency Care Setting: Joint Position Statement. Journal of Forensic Nursing 20(3):E53",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/39102314/",
};
export const DONG: Source = {
  body: "Dong XQ",
  work: "Elder Abuse: Systematic Review and Implications for Practice. Journal of the American Geriatrics Society 63(6):1214",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/26096395/",
};
export const CDC_TDV: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "About Teen Dating Violence. Intimate Partner Violence Prevention",
  year: 2025,
  url: "https://www.cdc.gov/intimate-partner-violence/about/about-teen-dating-violence.html",
};
export const AAP_DISC: Source = {
  body: "Sege RD, Siegel BS. American Academy of Pediatrics",
  work: "Effective Discipline to Raise Healthy Children. Pediatrics 142(6):e20183112",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30397164/",
};
export const AAP_TO: Source = {
  body: "American Academy of Pediatrics",
  work: "How to Give a Time-Out. HealthyChildren.org",
  year: 2018,
  url: "https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Time-Outs-101.aspx",
};
export const INOUYE: Source = {
  body: "Inouye SK, Westendorp RG, Saczynski JS",
  work: "Delirium in elderly people. Lancet 383(9920):911",
  year: 2014,
  url: "https://pubmed.ncbi.nlm.nih.gov/23992774/",
};
export const PANG: Source = {
  body: "Pang L",
  work: "Hallucinations Experienced by Visually Impaired: Charles Bonnet Syndrome. Optometry and Vision Science 93(12):1466",
  year: 2016,
  url: "https://pubmed.ncbi.nlm.nih.gov/27529611/",
};
export const WINSTEIN: Source = {
  body: "Winstein CJ, Stein J, Arena R, et al. American Heart Association, American Stroke Association",
  work: "Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke 47(6):e98",
  year: 2016,
};
export const CAVANAGH: Source = {
  body: "Cavanagh N, Cockett G, Heinrich C, et al.",
  work: "Compassion fatigue in healthcare providers: A systematic review and meta-analysis. Nursing Ethics 27(3):639",
  year: 2020,
  url: "https://journals.sagepub.com/doi/10.1177/0969733019889400",
};
export const MCEWEN: Source = {
  body: "McEwen BS",
  work: "Physiology and neurobiology of stress and adaptation: central role of the brain. Physiological Reviews 87(3):873",
  year: 2007,
  url: "https://pubmed.ncbi.nlm.nih.gov/17615391/",
};
