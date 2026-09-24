import type { ClientNeed } from "@/engine/blueprint";
import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s27. HPM, PPT and PSY mixed batch. */
export const meta = (
  id: string,
  need: ClientNeed,
  over: Omit<Partial<ItemMeta>, "id" | "need"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
  id,
  need,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const SPR: Source = {
  body: "Curtis KM, Nguyen AT, Tepper NK, et al. Centers for Disease Control and Prevention",
  work: "U.S. Selected Practice Recommendations for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(3):1",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/39106301/",
};
export const MEC: Source = {
  body: "Nguyen AT, Curtis KM, Tepper NK, et al. Centers for Disease Control and Prevention",
  work: "U.S. Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(4):1",
  year: 2024,
  url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11315372/",
};
export const MISSED_PILLS: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Recommended Actions After Late or Missed Combined Oral Contraceptives (U.S. SPR 2024 job aid)",
  year: 2024,
  url: "https://www.cdc.gov/contraception/media/pdfs/2024/07/recommended-action-late-missed-contraception-508.pdf",
};
export const AUA_VAS: Source = {
  body: "Sharlip ID, Belker AM, Honig S, et al. American Urological Association",
  work: "Vasectomy: AUA Guideline. Journal of Urology 188(6 Suppl):2482",
  year: 2012,
  url: "https://www.auajournals.org/doi/10.1016/j.juro.2012.09.080",
};
export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
export const CONDOM: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "How to Use a Condom (External Condom Use)",
  year: 2024,
  url: "https://www.cdc.gov/condom-use/resources/external.html",
};
export const MIRENA: Source = {
  body: "Bayer HealthCare Pharmaceuticals. US Food and Drug Administration",
  work: "Mirena (levonorgestrel-releasing intrauterine system) 52 mg Prescribing Information",
  year: 2022,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/021225s043lbl.pdf",
};
export const NEXPLANON: Source = {
  body: "Organon",
  work: "US Food and Drug Administration Approval of Supplemental New Drug Application Extending Duration of Use of Nexplanon (etonogestrel implant) 68 mg Radiopaque to up to 5 years",
  year: 2026,
  url: "https://www.organon.com/news/organon-announces-us-food-and-drug-administration-approval-of-supplemental-new-drug-application-extending-duration-of-use-of-nexplanon-etonogestrel-implant-68-mg-radiopaque/",
};
export const LARC_EXT: Source = {
  body: "Society of Family Planning",
  work: "Clinical Recommendation: Extended Use of Long-Acting Reversible Contraception. Contraception 113:13",
  year: 2022,
  url: "https://www.contraceptionjournal.org/article/S0010-7824(22)00162-7/fulltext",
};
export const PREP: Source = {
  body: "Centers for Disease Control and Prevention, US Public Health Service",
  work: "Preexposure Prophylaxis for the Prevention of HIV Infection in the United States, 2021 Update: A Clinical Practice Guideline",
  year: 2021,
  url: "https://www.cdc.gov/hiv/pdf/risk/prep/cdc-hiv-prep-guidelines-2021.pdf",
};
export const NPEP: Source = {
  body: "Tanner MR, O'Shea JG, Byrd KM, et al. Centers for Disease Control and Prevention",
  work: "Antiretroviral Postexposure Prophylaxis After Sexual, Injection Drug Use, or Other Nonoccupational Exposure to HIV, CDC Recommendations, United States, 2025. MMWR Recommendations and Reports 74(1):1",
  year: 2025,
  url: "https://pubmed.ncbi.nlm.nih.gov/40331832/",
};
export const STI: Source = {
  body: "Workowski KA, Bachmann LH, Chan PA, et al. Centers for Disease Control and Prevention",
  work: "Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recommendations and Reports 70(4):1",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34292926/",
};
export const NIAAA: Source = {
  body: "National Institute on Alcohol Abuse and Alcoholism",
  work: "Understanding Alcohol Drinking Patterns",
  year: 2024,
  url: "https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-drinking-patterns",
};
export const SAMHSA_OD: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "SAMHSA Overdose Prevention and Response Toolkit. Publication PEP23-03-00-001",
  year: 2023,
  url: "https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001",
};
export const ECIG: Source = {
  body: "Jenssen BP, Walley SC. American Academy of Pediatrics Section on Tobacco Control",
  work: "E-Cigarettes and Similar Devices. Pediatrics 143(2):e20183652",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/30835247/",
};
export const FIREARM: Source = {
  body: "Lee LK, Fleegler EW, Goyal MK, et al. American Academy of Pediatrics Council on Injury, Violence, and Poison Prevention",
  work: "Firearm-Related Injuries and Deaths in Children and Youth: Injury Prevention and Harm Reduction. Pediatrics 150(6):e2022060070",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/36207776/",
};
export const HCV_SCREEN: Source = {
  body: "Schillie S, Wester C, Osborne M, Wesolowski L, Ryerson AB. Centers for Disease Control and Prevention",
  work: "CDC Recommendations for Hepatitis C Screening Among Adults, United States, 2020. MMWR Recommendations and Reports 69(2):1",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32271723/",
};
export const RESP_VIRUS: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Respiratory Virus Guidance: Preventing Spread of Respiratory Viruses When You're Sick",
  year: 2024,
  url: "https://www.cdc.gov/media/releases/2024/p0301-respiratory-virus.html",
};
export const ADA_FOOT: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S261",
  year: 2026,
  url: "https://pubmed.ncbi.nlm.nih.gov/41358886/",
};
export const USPSTF_SKIN: Source = {
  body: "US Preventive Services Task Force",
  work: "Behavioral Counseling to Prevent Skin Cancer: Recommendation Statement. JAMA 319(11):1134",
  year: 2018,
  url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/skin-cancer-counseling",
};
export const NCI_SMOKELESS: Source = {
  body: "National Cancer Institute",
  work: "Smokeless Tobacco and Cancer. Fact sheet",
  year: 2023,
  url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/smokeless-fact-sheet",
};
export const BRIGHT: Source = {
  body: "Hagan JF, Shaw JS, Duncan PM. American Academy of Pediatrics",
  work: "Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents, 4th edition",
  year: 2017,
  url: "https://www.aap.org/Bright-Futures-Guidelines-for-Health-Supervision-of-Infants-Children-and-Adolescents-4th-Edition",
};
export const RECOVERY: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "SAMHSA's Working Definition of Recovery: 10 Guiding Principles of Recovery. Publication PEP12-RECDEF",
  year: 2012,
  url: "https://library.samhsa.gov/sites/default/files/pep12-recdef.pdf",
};
export const HALTER: Source = {
  body: "Halter MJ",
  work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1",
};
export const AOM: Source = {
  body: "Lieberthal AS, Carroll AE, Chonmaitree T, et al. American Academy of Pediatrics",
  work: "The Diagnosis and Management of Acute Otitis Media. Pediatrics 131(3):e964",
  year: 2013,
  url: "https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media",
};
export const ONDANSETRON: Source = {
  body: "Qilu Pharmaceutical. US Food and Drug Administration",
  work: "Ondansetron Injection, USP Prescribing Information (DailyMed)",
  year: 2025,
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a44601b-c31c-4779-a688-28cc4cc75e8b",
};
export const FLU_ANTIVIRAL: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Influenza Antiviral Medications: Summary for Clinicians",
  year: 2025,
  url: "https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html",
};
export const BEERS: Source = {
  body: "American Geriatrics Society Beers Criteria Update Expert Panel",
  work: "American Geriatrics Society 2023 Updated AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults. Journal of the American Geriatrics Society 71(7):2052",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37139824/",
};
export const FDA_COUGH: Source = {
  body: "US Food and Drug Administration",
  work: "Use Caution When Giving Cough and Cold Products to Kids",
  year: 2018,
  url: "https://www.fda.gov/drugs/safe-use-over-counter-otc-medicines-children/use-caution-when-giving-cough-and-cold-products-kids",
};
export const FDA_CODEINE: Source = {
  body: "US Food and Drug Administration",
  work: "FDA Drug Safety Communication: FDA restricts use of prescription codeine pain and cough medicines and tramadol pain medicines in children",
  year: 2017,
  url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-restricts-use-prescription-codeine-pain-and-cough-medicines-and",
};
export const CASCADE: Source = {
  body: "Savage RD, Visentin JD, Bronskill SE, et al.",
  work: "Evaluation of a Common Prescribing Cascade of Calcium Channel Blockers and Diuretics in Older Adults With Hypertension. JAMA Internal Medicine 180(5):643",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32091538/",
};
export const ROCHON: Source = {
  body: "Rochon PA, Gurwitz JH",
  work: "Optimising Drug Treatment for Elderly People: The Prescribing Cascade. BMJ 315(7115):1096",
  year: 1997,
  url: "https://pubmed.ncbi.nlm.nih.gov/9366745/",
};
export const APA_DEMENTIA: Source = {
  body: "Reus VI, Fochtmann LJ, Eyler AE, et al. American Psychiatric Association",
  work: "The American Psychiatric Association Practice Guideline on the Use of Antipsychotics to Treat Agitation or Psychosis in Patients With Dementia. American Journal of Psychiatry 173(5):543",
  year: 2016,
  url: "https://pubmed.ncbi.nlm.nih.gov/27133416/",
};
export const ISMP_CRUSH: Source = {
  body: "Institute for Safe Medication Practices",
  work: "Oral Dosage Forms That Should Not Be Crushed",
  year: 2020,
};
export const CPSC: Source = {
  body: "US Consumer Product Safety Commission",
  work: "Poison Prevention Packaging: A Guide for Healthcare Professionals",
  year: 2023,
  url: "https://www.cpsc.gov/safety-education/safety-guides/containers-and-packaging/poison-prevention-packaging-guide-healthcare",
};
export const METRIC: Source = {
  body: "American Academy of Pediatrics Committee on Drugs",
  work: "Metric Units and the Preferred Dosing of Orally Administered Liquid Medications. Pediatrics 135(4):784",
  year: 2015,
  url: "https://publications.aap.org/pediatrics/article/135/4/784/33600/Metric-Units-and-the-Preferred-Dosing-of-Orally",
};
export const GINA: Source = {
  body: "Global Initiative for Asthma",
  work: "Global Strategy for Asthma Management and Prevention, 2026 update",
  year: 2026,
  url: "https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf",
};
export const LEHNE: Source = {
  body: "Burchum JR, Rosenthal LD",
  work: "Lehne's Pharmacology for Nursing Care, 11th edition",
  year: 2022,
  url: "https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1",
};
export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
};
export const TOUHY: Source = {
  body: "Touhy TA, Jett KF",
  work: "Ebersole and Hess' Gerontological Nursing and Healthy Aging, 6th edition",
  year: 2021,
  url: "https://shop.elsevier.com/books/ebersole-and-hess-gerontological-nursing-and-healthy-aging/touhy/978-0-323-69803-0",
};
export const ACOG_EC: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Emergency Contraception. Practice Bulletin No. 152. Obstetrics and Gynecology 126(3):e1",
  year: 2015,
  url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2015/09/emergency-contraception",
};
export const TAMIFLU: Source = {
  body: "Genentech. US Food and Drug Administration",
  work: "Tamiflu (oseltamivir phosphate) Capsules and for Oral Suspension Prescribing Information",
  year: 2018,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/021087s070lbl,%20021246s053lbl.pdf",
};
export const ZITHROMAX: Source = {
  body: "Pfizer. US Food and Drug Administration",
  work: "Zithromax (azithromycin) Tablets and for Oral Suspension Prescribing Information",
  year: 2026,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050710s054lbl.pdf",
};
export const PROMETHAZINE: Source = {
  body: "Hikma Pharmaceuticals. US Food and Drug Administration",
  work: "Promethazine Hydrochloride Injection Prescribing Information (DailyMed)",
  year: 2020,
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c525cb2c-9a01-4a9b-ad2c-08630719953d",
};
export const FDA_APAP: Source = {
  body: "US Food and Drug Administration",
  work: "Acetaminophen: Safe Use of Over-the-Counter Pain Relievers and Fever Reducers",
  year: 2024,
  url: "https://www.fda.gov/drugs/safe-use-over-counter-pain-relievers-and-fever-reducers/acetaminophen",
};
export const REYE: Source = {
  body: "American Academy of Pediatrics",
  work: "Reye Syndrome. HealthyChildren.org, adapted from Caring for Your Baby and Young Child: Birth to Age 5",
  year: 2025,
  url: "https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Reye-Syndrome.aspx",
};
export const AGARWAL: Source = {
  body: "Agarwal M, Lovegrove MC, Geller RJ, et al.",
  work: "Circumstances Involved in Unsupervised Solid Dose Medication Exposures among Young Children. Journal of Pediatrics 219:188",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32005542/",
};
