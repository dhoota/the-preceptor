import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s11. Psychosocial Integrity. */
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
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const ANA_PMH: Source = {
  body: "American Nurses Association, American Psychiatric Nurses Association, International Society of Psychiatric-Mental Health Nurses",
  work: "Psychiatric-Mental Health Nursing: Scope and Standards of Practice, 3rd edition",
  year: 2022,
  url: "https://www.nursingworld.org/nurses-books/psychiatric-mental-health-nursing-scope-and-stand/",
};
export const DSM: Source = {
  body: "American Psychiatric Association",
  work: "Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)",
  year: 2022,
  url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
};
export const SAFETY_PLAN: Source = {
  body: "Stanley B, Brown GK",
  work: "Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk. Cognitive and Behavioral Practice 19(2):256",
  year: 2012,
  url: "https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630",
};
export const CSSRS: Source = {
  body: "Posner K, Brown GK, Stanley B, et al.",
  work: "The Columbia-Suicide Severity Rating Scale: Initial Validity and Internal Consistency Findings. American Journal of Psychiatry 168(12):1266",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/22193671/",
};
export const TJC_SUICIDE: Source = {
  body: "The Joint Commission",
  work: "R3 Report Issue 18: National Patient Safety Goal for Suicide Prevention (NPSG.15.01.01)",
  year: 2019,
  url: "https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18",
};
export const CMS_RESTRAINT: Source = {
  body: "Centers for Medicare and Medicaid Services",
  work: "42 CFR 482.13, Condition of participation: Patient's rights, restraint or seclusion",
  year: 2024,
  url: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13",
};
export const CHILD_ABUSE: Source = {
  body: "Child Welfare Information Gateway, Children's Bureau",
  work: "What Is Child Abuse and Neglect? Recognizing the Signs and Symptoms",
  year: 2019,
  url: "https://www.govinfo.gov/app/details/GOVPUB-HE23_1200-PURL-gpo159549",
};
export const USPSTF_IPV: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults. JAMA 320(16):1678",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30357305/",
};
export const ACOG_PMH: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Clinical Practice Guideline No. 4: Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37486660/",
};
export const APA_ED: Source = {
  body: "American Psychiatric Association",
  work: "Practice Guideline for the Treatment of Patients With Eating Disorders, 4th edition",
  year: 2023,
  url: "https://psychiatryonline.org/doi/full/10.1176/appi.ajp.23180001",
};
export const COWS: Source = {
  body: "Wesson DR, Ling W",
  work: "The Clinical Opiate Withdrawal Scale (COWS). Journal of Psychoactive Drugs 35(2):253",
  year: 2003,
  url: "https://pubmed.ncbi.nlm.nih.gov/12924748/",
};
export const TIP63: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "TIP 63: Medications for Opioid Use Disorder",
  year: 2021,
  url: "https://library.samhsa.gov/product/tip-63-medications-opioid-use-disorder/pep21-02-01-002",
};
export const MI: Source = {
  body: "Miller WR, Rollnick S",
  work: "Motivational Interviewing: Helping People Change and Grow, 4th edition",
  year: 2023,
  url: "https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795",
};
export const PFA: Source = {
  body: "World Health Organization, War Trauma Foundation, World Vision International",
  work: "Psychological First Aid: Guide for Field Workers",
  year: 2011,
  url: "https://www.who.int/publications/i/item/9789241548205",
};
export const TIC: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "SAMHSA's Concept of Trauma and Guidance for a Trauma-Informed Approach",
  year: 2014,
  url: "https://library.samhsa.gov/product/samhsas-concept-trauma-and-guidance-trauma-informed-approach/sma14-4884",
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
export const FICA: Source = {
  body: "Puchalski C, Romer AL",
  work: "Taking a Spiritual History Allows Clinicians to Understand Patients More Fully. Journal of Palliative Medicine 3(1):129",
  year: 2000,
  url: "https://pubmed.ncbi.nlm.nih.gov/15859737/",
};
export const ALZ: Source = {
  body: "Fazio S, Pace D, Maslow K, Zimmerman S, Kallmyer B. Alzheimer's Association",
  work: "Alzheimer's Association Dementia Care Practice Recommendations. The Gerontologist 58(S1):S1",
  year: 2018,
  url: "https://academic.oup.com/gerontologist/article/58/suppl_1/S1/4816759",
};
export const SAFE: Source = {
  body: "US Department of Justice, Office on Violence Against Women",
  work: "A National Protocol for Sexual Assault Medical Forensic Examinations: Adults/Adolescents, 3rd edition",
  year: 2024,
  url: "https://www.justice.gov/ovw/media/1367191",
};
export const ASAM_AWM: Source = {
  body: "American Society of Addiction Medicine",
  work: "The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. Journal of Addiction Medicine 14(3S Suppl 1):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32511109/",
};
export const WORDEN: Source = {
  body: "Worden JW",
  work: "Grief Counseling and Grief Therapy: A Handbook for the Mental Health Practitioner, 5th edition",
  year: 2018,
  url: "https://connect.springerpub.com/content/book/978-0-8261-3475-2",
};
export const PHQ9: Source = {
  body: "Kroenke K, Spitzer RL, Williams JB",
  work: "The PHQ-9: Validity of a Brief Depression Severity Measure. Journal of General Internal Medicine 16(9):606",
  year: 2001,
  url: "https://pubmed.ncbi.nlm.nih.gov/11556941/",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const TJC_LGBT: Source = {
  body: "The Joint Commission",
  work: "Advancing Effective Communication, Cultural Competence, and Patient- and Family-Centered Care for the Lesbian, Gay, Bisexual, and Transgender (LGBT) Community: A Field Guide",
  year: 2011,
  url: "https://lgbtagingcenter.org/resource/advancing-effective-communication-cultural-competence-and-patient-and-family-centered-care-for-the-lesbian-gay-bisexual-and-transgender-lgbt-community/",
};
export const ACOG_STILL: Source = {
  body: "American College of Obstetricians and Gynecologists, Society for Maternal-Fetal Medicine",
  work: "Obstetric Care Consensus No. 10: Management of Stillbirth. Obstetrics and Gynecology 135(3):e110",
  year: 2020,
  url: "https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth",
};
export const AAP_ADHD: Source = {
  body: "Wolraich ML, Hagan JF, Allan C, et al. American Academy of Pediatrics",
  work: "Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of Attention-Deficit/Hyperactivity Disorder in Children and Adolescents. Pediatrics 144(4):e20192528",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31570648/",
};
export const WIGLESWORTH: Source = {
  body: "Wiglesworth A, Austin R, Corona M, et al.",
  work: "Bruising as a Marker of Physical Elder Abuse. Journal of the American Geriatrics Society 57(7):1191",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/19558476/",
};
