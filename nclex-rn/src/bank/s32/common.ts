import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s32. Health Promotion and Maintenance and Safety and Infection Prevention and Control. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const USPSTF_BRCA: Source = {
  body: "US Preventive Services Task Force. Owens DK, Davidson KW, Krist AH, et al.",
  work: "Risk Assessment, Genetic Counseling, and Genetic Testing for BRCA-Related Cancer: Recommendation Statement. JAMA 322(7):652",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31429903/",
};
export const LYNCH: Source = {
  body: "Giardiello FM, Allen JI, Axilbund JE, Boland CR, et al. US Multi-Society Task Force on Colorectal Cancer",
  work: "Guidelines on Genetic Evaluation and Management of Lynch Syndrome. Gastroenterology 147(2):502",
  year: 2014,
  url: "https://pubmed.ncbi.nlm.nih.gov/25043945/",
};
export const ACOG_PB226: Source = {
  body: "American College of Obstetricians and Gynecologists and Society for Maternal-Fetal Medicine",
  work: "Screening for Fetal Chromosomal Abnormalities: ACOG Practice Bulletin Number 226. Obstetrics and Gynecology 136(4):e48",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32804883/",
};
export const ADA_PREG: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes 2026. Diabetes Care 49(Supplement 1):S321",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards",
};
export const AAN_ASM: Source = {
  body: "Pack AM, Oskoui M, Williams Roberson S, et al. American Academy of Neurology, American Epilepsy Society and Society for Maternal-Fetal Medicine",
  work: "Teratogenesis, Perinatal, and Neurodevelopmental Outcomes After In Utero Exposure to Antiseizure Medication: Practice Guideline. Neurology 102(11):e209279",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/38748979/",
};
export const NAMS_NONHORMONE: Source = {
  body: "The North American Menopause Society Nonhormone Therapy Position Statement Advisory Panel",
  work: "The 2023 Nonhormone Therapy Position Statement of The North American Menopause Society. Menopause 30(6):573",
  year: 2023,
  url: "https://pubmed.ncbi.nlm.nih.gov/37252752/",
};
export const NAMS_HT: Source = {
  body: "The North American Menopause Society Hormone Therapy Position Statement Advisory Panel",
  work: "The 2022 Hormone Therapy Position Statement of The North American Menopause Society. Menopause 29(7):767",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35797481/",
};
export const CDC_CO: Source = {
  body: "Centers for Disease Control and Prevention, National Center for Environmental Health",
  work: "Prevention Guidelines: You Can Prevent Carbon Monoxide Exposure",
  year: 2017,
  url: "https://stacks.cdc.gov/view/cdc/47927",
};
export const NAMS_GSM: Source = {
  body: "The NAMS 2020 GSM Position Statement Editorial Panel",
  work: "The 2020 Genitourinary Syndrome of Menopause Position Statement of The North American Menopause Society. Menopause 27(9):976",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32852449/",
};
export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const USPSTF_TESTIS: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Testicular Cancer: Reaffirmation Recommendation Statement. Annals of Internal Medicine 154(7):483",
  year: 2011,
  url: "https://pubmed.ncbi.nlm.nih.gov/21464350/",
};
export const USPSTF_PSA: Source = {
  body: "US Preventive Services Task Force. Grossman DC, Curry SJ, Owens DK, et al.",
  work: "Screening for Prostate Cancer: Recommendation Statement. JAMA 319(18):1901",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/29801017/",
};
export const ENDO_MEN: Source = {
  body: "Watts NB, Adler RA, Bilezikian JP, et al. Endocrine Society",
  work: "Osteoporosis in Men: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology and Metabolism 97(6):1802",
  year: 2012,
  url: "https://pubmed.ncbi.nlm.nih.gov/22675062/",
};
export const BHOF: Source = {
  body: "LeBoff MS, Greenspan SL, Insogna KL, et al. Bone Health and Osteoporosis Foundation",
  work: "The Clinician's Guide to Prevention and Treatment of Osteoporosis. Osteoporosis International 33(10):2049",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35478046/",
};
export const AGS_DRIVE: Source = {
  body: "American Geriatrics Society and National Highway Traffic Safety Administration. Pomidor A, editor",
  work: "Clinician's Guide to Assessing and Counseling Older Drivers, 4th edition",
  year: 2019,
  url: "https://geriatricscareonline.org/ProductAbstract/clinicians-guide-to-assessing-and-counseling-older-drivers-4th-edition/B047",
};
export const AAO_SSNHL: Source = {
  body: "Chandrasekhar SS, Tsai Do BS, Schwartz SR, et al. American Academy of Otolaryngology Head and Neck Surgery Foundation",
  work: "Clinical Practice Guideline: Sudden Hearing Loss (Update). Otolaryngology Head and Neck Surgery 161(1 Suppl):S1",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31369359/",
};
export const PIROZZO: Source = {
  body: "Pirozzo S, Papinczak T, Glasziou P",
  work: "Whispered Voice Test for Screening for Hearing Impairment in Adults and Children: Systematic Review. BMJ 327(7421):967",
  year: 2003,
  url: "https://pubmed.ncbi.nlm.nih.gov/14576249/",
};
export const FDA_OTC_HA: Source = {
  body: "US Food and Drug Administration",
  work: "Medical Devices. Ear, Nose, and Throat Devices. Establishing Over-the-Counter Hearing Aids. Final Rule. Federal Register 87:50698",
  year: 2022,
  url: "https://www.federalregister.gov/documents/2022/08/17/2022-17230/medical-devices-ear-nose-and-throat-devices-establishing-over-the-counter-hearing-aids",
};
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const USPSTF_VISION: Source = {
  body: "US Preventive Services Task Force. Grossman DC, Curry SJ, Owens DK, et al.",
  work: "Vision Screening in Children Aged 6 Months to 5 Years: Recommendation Statement. JAMA 318(9):836",
  year: 2017,
  url: "https://doi.org/10.1001/jama.2017.11260",
};
export const USPSTF_CARIES: Source = {
  body: "US Preventive Services Task Force. Davidson KW, Barry MJ, Mangione CM, et al.",
  work: "Screening and Interventions to Prevent Dental Caries in Children Younger Than 5 Years: Recommendation Statement. JAMA 326(21):2172",
  year: 2021,
  url: "https://doi.org/10.1001/jama.2021.20007",
};
export const AAP_FLUORIDE: Source = {
  body: "Clark MB, Keels MA, Slayton RL. American Academy of Pediatrics Section on Oral Health",
  work: "Fluoride Use in Caries Prevention in the Primary Care Setting. Pediatrics 146(6):e2020034637",
  year: 2020,
  url: "https://doi.org/10.1542/peds.2020-034637",
};
export const CDC_BLRV: Source = {
  body: "Ruckart PZ, Jones RL, Courtney JG, et al. Centers for Disease Control and Prevention",
  work: "Update of the Blood Lead Reference Value, United States, 2021. MMWR 70(43):1509",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34710078/",
};
export const CDC_LEAD_CLIN: Source = {
  body: "Centers for Disease Control and Prevention, Childhood Lead Poisoning Prevention Program",
  work: "Clinical Guidance for Childhood Lead Exposure: Recommended Actions Based on Blood Lead Level",
  year: 2025,
  url: "https://www.cdc.gov/lead-prevention/hcp/clinical-guidance/index.html",
};
export const MEITES_HPV: Source = {
  body: "Meites E, Szilagyi PG, Chesson HW, et al. Advisory Committee on Immunization Practices",
  work: "Human Papillomavirus Vaccination for Adults: Updated Recommendations of the ACIP. MMWR 68(32):698",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31415491/",
};
export const ACIP_GBP: Source = {
  body: "Kroger A, Bahta L, Long S, Sanchez P. Advisory Committee on Immunization Practices",
  work: "Best Practice Guidelines for Immunization, the ACIP general recommendations",
  year: 2023,
  url: "https://www.cdc.gov/vaccines/hcp/acip-recs/general-recs/downloads/general-recs.pdf",
};
export const AMSTERDAM: Source = {
  body: "Patricios JS, Schneider KJ, Dvorak J, et al.",
  work: "Consensus Statement on Concussion in Sport: the 6th International Conference on Concussion in Sport, Amsterdam, October 2022. British Journal of Sports Medicine 57(11):695",
  year: 2023,
  url: "https://doi.org/10.1136/bjsports-2023-106898",
};
export const AMSTERDAM_PEDS: Source = {
  body: "Davis GA, Schneider KJ, Anderson V, Babl FE, et al.",
  work: "Pediatric Sport-Related Concussion: Recommendations From the Amsterdam Consensus Statement 2023. Pediatrics 153(1):e2023063489",
  year: 2024,
  url: "https://doi.org/10.1542/peds.2023-063489",
};
export const AAP_MOWER: Source = {
  body: "American Academy of Pediatrics Committee on Injury and Poison Prevention",
  work: "Lawn Mower-Related Injuries to Children. Pediatrics 107(6):1480",
  year: 2001,
  url: "https://doi.org/10.1542/peds.107.6.1480",
};
export const AAP_TRAMPOLINE: Source = {
  body: "Briskin S, LaBotz M. American Academy of Pediatrics Council on Sports Medicine and Fitness",
  work: "Trampoline Safety in Childhood and Adolescence. Pediatrics 130(4):774",
  year: 2012,
  url: "https://doi.org/10.1542/peds.2012-2082",
};
export const AAP_OBESITY: Source = {
  body: "Hampl SE, Hassink SG, Skinner AC, et al. American Academy of Pediatrics",
  work: "Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity. Pediatrics 151(2):e2022060640",
  year: 2023,
  url: "https://doi.org/10.1542/peds.2022-060640",
};
export const US_MEC: Source = {
  body: "Nguyen AT, Curtis KM, Tepper NK, et al. Centers for Disease Control and Prevention",
  work: "US Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(4):1",
  year: 2024,
  url: "https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm",
};
export const ABM_MASTITIS: Source = {
  body: "Mitchell KB, Johnson HM, Rodriguez JM, Eglash A, et al. Academy of Breastfeeding Medicine",
  work: "ABM Clinical Protocol 36: The Mastitis Spectrum, Revised 2022. Breastfeeding Medicine 17(5):360",
  year: 2022,
  url: "https://doi.org/10.1089/bfm.2022.29207.kbm",
};
export const CDC_MILK: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Breast Milk Preparation and Storage: Handling Breast Milk",
  year: 2026,
  url: "https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html",
};
export const JCIH: Source = {
  body: "Joint Committee on Infant Hearing",
  work: "Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs. Journal of Early Hearing Detection and Intervention 4(2):1",
  year: 2019,
  url: "https://doi.org/10.15142/fptk-b748",
};
export const AAP_DDH: Source = {
  body: "Shaw BA, Segal LS. American Academy of Pediatrics Section on Orthopaedics",
  work: "Evaluation and Referral for Developmental Dysplasia of the Hip in Infants. Pediatrics 138(6):e20163107",
  year: 2016,
  url: "https://doi.org/10.1542/peds.2016-3107",
};
export const ACIP_MMR: Source = {
  body: "McLean HQ, Fiebelkorn AP, Temte JL, Wallace GS. Advisory Committee on Immunization Practices",
  work: "Prevention of Measles, Rubella, Congenital Rubella Syndrome, and Mumps, 2013. MMWR Recommendations and Reports 62(RR-04):1",
  year: 2013,
  url: "https://pubmed.ncbi.nlm.nih.gov/23760231/",
};
export const CDC_MEASLES_TRAVEL: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Measles (Rubeola): Plan for Travel",
  year: 2026,
  url: "https://www.cdc.gov/measles/travel/index.html",
};
export const YB_MALARIA: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "CDC Yellow Book 2026: Health Information for International Travel, Malaria",
  year: 2025,
  url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/malaria.html",
};
export const CDC_EPI_RISK: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Principles of Epidemiology in Public Health Practice, 3rd edition, Lesson 3: Measures of Risk",
  year: 2012,
  url: "https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson3/section2.html",
};
export const OSHA_NOISE: Source = {
  body: "Occupational Safety and Health Administration",
  work: "Occupational Noise Exposure. 29 CFR 1910.95",
  year: 2026,
  url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1910/subpart-G/section-1910.95",
};
export const USPSTF_CERVIX: Source = {
  body: "US Preventive Services Task Force. Curry SJ, Krist AH, Owens DK, et al.",
  work: "Screening for Cervical Cancer: Recommendation Statement. JAMA 320(7):674",
  year: 2018,
  url: "https://doi.org/10.1001/jama.2018.10897",
};
export const USPSTF_BREAST: Source = {
  body: "US Preventive Services Task Force. Nicholson WK, Silverstein M, Wong JB, et al.",
  work: "Screening for Breast Cancer: Recommendation Statement. JAMA 331(22):1918",
  year: 2024,
  url: "https://doi.org/10.1001/jama.2024.5534",
};
export const FDA_MQSA: Source = {
  body: "US Food and Drug Administration",
  work: "Mammography Quality Standards Act. Final Rule. Federal Register 88:15126, codified at 21 CFR 900.12",
  year: 2023,
  url: "https://www.federalregister.gov/documents/2023/03/10/2023-04550/mammography-quality-standards-act",
};
export const FDA_DISPOSAL: Source = {
  body: "US Food and Drug Administration",
  work: "Where and How to Dispose of Unused Medicines",
  year: 2025,
  url: "https://www.fda.gov/consumers/consumer-updates/where-and-how-dispose-unused-medicines",
};
export const FDA_FLUSH: Source = {
  body: "US Food and Drug Administration",
  work: "Drug Disposal: FDA's Flush List for Certain Medicines",
  year: 2024,
  url: "https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-flush-potentially-dangerous-medicine",
};
