import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s10. Health Promotion and Maintenance. */
export const meta = (
  id: string,
  over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">,
): ItemMeta => ({
  id,
  need: "HPM",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const WONG: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs K",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2023,
};
export const LOWDERMILK: Source = {
  body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
  work: "Maternity and Women's Health Care, 13th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0",
};
export const TOUHY: Source = {
  body: "Touhy TA, Jett KF",
  work: "Ebersole and Hess' Gerontological Nursing and Healthy Aging, 6th edition",
  year: 2021,
  url: "https://shop.elsevier.com/books/ebersole-and-hess-gerontological-nursing-and-healthy-aging/touhy/978-0-323-69803-0",
};
export const POTTER: Source = { body: "Potter PA, Perry AG, Stockert PA, Hall AM", work: "Fundamentals of Nursing, 11th edition", year: 2023 };
export const JARVIS: Source = {
  body: "Jarvis C, Eckhardt AL",
  work: "Physical Examination and Health Assessment, 9th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/physical-examination-and-health-assessment/jarvis/978-0-323-80984-9",
};
export const MILESTONES: Source = {
  body: "Zubler JM, Wiggins LD, Macias MM, et al.",
  work: "Evidence-Informed Milestones for Developmental Surveillance Tools. Pediatrics 149(3):e2021052138",
  year: 2022,
  url: "https://publications.aap.org/pediatrics/article/149/3/e2021052138/184748/Evidence-Informed-Milestones-for-Developmental",
};
export const PEANUT: Source = {
  body: "Togias A, Cooper SF, Acebal ML, et al. NIAID-sponsored Expert Panel",
  work: "Addendum Guidelines for the Prevention of Peanut Allergy in the United States. Journal of Allergy and Clinical Immunology 139(1):29",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/28065278/",
};
export const JUICE: Source = {
  body: "Heyman MB, Abrams SA. American Academy of Pediatrics Section on Gastroenterology, Hepatology, and Nutrition and Committee on Nutrition",
  work: "Fruit Juice in Infants, Children, and Adolescents: Current Recommendations. Pediatrics 139(6):e20170967",
  year: 2017,
  url: "https://publications.aap.org/pediatrics/article/139/6/e20170967/38767/Fruit-Juice-in-Infants-Children-and-Adolescents",
};
export const BENZOCAINE: Source = {
  body: "US Food and Drug Administration",
  work: "Drug Safety Communication: Risk of serious and potentially fatal blood disorder prompts FDA action on oral over-the-counter benzocaine products used for teething and mouth pain",
  year: 2018,
  url: "https://www.aafp.org/about/news/20180530fdabenzocaine",
};
export const TEETHING_JEWELRY: Source = {
  body: "US Food and Drug Administration",
  work: "FDA warns about safety risks of teething necklaces, bracelets to relieve teething pain or to provide sensory stimulation. News release, December 20",
  year: 2018,
  url: "https://www.prnewswire.com/news-releases/fda-warns-about-safety-risks-of-teething-necklaces-bracelets-to-relieve-teething-pain-or-to-provide-sensory-stimulation-300769642.html",
};
export const SLEEP_PEDS: Source = {
  body: "Paruthi S, Brooks LJ, D'Ambrosio C, et al. American Academy of Sleep Medicine",
  work: "Recommended Amount of Sleep for Pediatric Populations: A Consensus Statement. Journal of Clinical Sleep Medicine 12(6):785",
  year: 2016,
  url: "https://jcsm.aasm.org/doi/10.5664/jcsm.5866",
};
export const SLEEP_ADULT: Source = {
  body: "Watson NF, Badr MS, Belenky G, et al. American Academy of Sleep Medicine and Sleep Research Society",
  work: "Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement. Sleep 38(6):843",
  year: 2015,
  url: "https://pubmed.ncbi.nlm.nih.gov/26039963/",
};
export const MEDIA: Source = {
  body: "American Academy of Pediatrics Council on Communications and Media",
  work: "Media and Young Minds. Pediatrics 138(5):e20162591",
  year: 2016,
  url: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds",
};
export const HELMET: Source = {
  body: "National Highway Traffic Safety Administration",
  work: "Bicycle Safety: Fitting a Bicycle Helmet",
  year: 2024,
  url: "https://www.nhtsa.gov/sites/nhtsa.gov/files/2024-07/bike-safety-fitting-helmet.pdf",
};
export const CALCIUM: Source = {
  body: "National Institutes of Health Office of Dietary Supplements",
  work: "Calcium: Fact Sheet for Health Professionals",
  year: 2024,
  url: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
};
export const HEAT: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Older Adults and Extreme Heat",
  year: 2024,
  url: "https://www.cdc.gov/aging/emergency-preparedness/older-adults-extreme-heat/",
};
export const GWG: Source = {
  body: "Institute of Medicine and National Research Council",
  work: "Weight Gain During Pregnancy: Reexamining the Guidelines",
  year: 2009,
  url: "https://pubmed.ncbi.nlm.nih.gov/20669500/",
};
export const CAFFEINE: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Moderate Caffeine Consumption During Pregnancy. ACOG Committee Opinion No. 462. Obstetrics and Gynecology 116(2):467",
  year: 2010,
  url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2010/08/moderate-caffeine-consumption-during-pregnancy",
};
export const FISH: Source = {
  body: "US Food and Drug Administration and US Environmental Protection Agency",
  work: "Advice about Eating Fish: For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years",
  year: 2021,
  url: "https://www.fda.gov/food/consumers/advice-about-eating-fish",
};
export const GBS: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Prevention of Group B Streptococcal Early-Onset Disease in Newborns. ACOG Committee Opinion No. 797. Obstetrics and Gynecology 135(2):e51",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/31977793/",
};
export const ANEMIA: Source = {
  body: "American College of Obstetricians and Gynecologists",
  work: "Anemia in Pregnancy. ACOG Practice Bulletin No. 233. Obstetrics and Gynecology 138(2):e55",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34293770/",
};
export const VITK: Source = {
  body: "Hand I, Noble L, Abrams SA. American Academy of Pediatrics Committee on Fetus and Newborn",
  work: "Vitamin K and the Newborn Infant. Pediatrics 149(3):e2021056036",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35190810/",
};
export const HBV: Source = {
  body: "Schillie S, Vellozzi C, Reingold A, et al. Advisory Committee on Immunization Practices",
  work: "Prevention of Hepatitis B Virus Infection in the United States. MMWR Recommendations and Reports 67(1):1",
  year: 2018,
  url: "https://www.cdc.gov/mmwr/volumes/67/rr/rr6701a1.htm",
};
export const CCHD: Source = {
  body: "Martin GR, Ewer AK, Gaviglio A, et al.",
  work: "Updated Strategies for Pulse Oximetry Screening for Critical Congenital Heart Disease. Pediatrics 146(1):e20191650",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32499387/",
};
export const FORMULA: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Infant Formula Preparation and Storage",
  year: 2024,
  url: "https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html",
};
export const LAM: Source = {
  body: "Nguyen AT, Curtis KM, Tepper NK, et al. Centers for Disease Control and Prevention",
  work: "U.S. Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(4):1",
  year: 2024,
  url: "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html",
};
export const MMR: Source = {
  body: "McLean HQ, Fiebelkorn AP, Temte JL, Wallace GS. Advisory Committee on Immunization Practices",
  work: "Prevention of Measles, Rubella, Congenital Rubella Syndrome, and Mumps, 2013. MMWR Recommendations and Reports 62(RR-4):1",
  year: 2013,
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6204a1.htm",
};
export const MASTITIS: Source = {
  body: "Mitchell KB, Johnson HM, Rodriguez JM, et al. Academy of Breastfeeding Medicine",
  work: "Clinical Protocol #36: The Mastitis Spectrum, Revised 2022. Breastfeeding Medicine 17(5):360",
  year: 2022,
  url: "https://pubmed.ncbi.nlm.nih.gov/35576513/",
};
export const ROTA: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book), Chapter 19: Rotavirus",
  year: 2024,
  url: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-19-rotavirus.html",
};
export const VAX_GENERAL: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book), Chapter 2: General Best Practice Guidance for Immunization",
  year: 2024,
  url: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html",
};
export const VAX_ADMIN: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book), Chapter 6: Vaccine Administration",
  year: 2024,
  url: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-6-vaccine-administration.html",
};
export const ADULT_VAX: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Adult Immunization Schedule by Age, United States, addendum updated July 2, 2025",
  year: 2025,
  url: "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html",
};
export const AAA: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Abdominal Aortic Aneurysm: Recommendation Statement. JAMA 322(22):2211",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31821437/",
};
export const HCV: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for Hepatitis C Virus Infection in Adolescents and Adults: Recommendation Statement. JAMA 323(10):970",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32119076/",
};
export const HIV: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening for HIV Infection: Recommendation Statement. JAMA 321(23):2326",
  year: 2019,
  url: "https://pubmed.ncbi.nlm.nih.gov/31184701/",
};
export const BMI: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Adult BMI Categories",
  year: 2024,
};
export const TTM: Source = {
  body: "Prochaska JO, Velicer WF",
  work: "The Transtheoretical Model of Health Behavior Change. American Journal of Health Promotion 12(1):38",
  year: 1997,
};
export const SKULL: Source = {
  body: "Laughlin J, Luerssen TG, Dias MS. American Academy of Pediatrics Committee on Practice and Ambulatory Medicine",
  work: "Prevention and Management of Positional Skull Deformities in Infants. Pediatrics 128(6):1236",
  year: 2011,
  url: "https://publications.aap.org/pediatrics/article/128/6/1236/31059/Prevention-and-Management-of-Positional-Skull",
};
export const UV: Source = {
  body: "Balk SJ. American Academy of Pediatrics Council on Environmental Health and Section on Dermatology",
  work: "Ultraviolet Radiation: A Hazard to Children and Adolescents. Pediatrics 127(3):e791",
  year: 2011,
  url: "https://publications.aap.org/pediatrics/article/127/3/e791/65065/Ultraviolet-Radiation-A-Hazard-to-Children-and",
};
export const ALCOHOL: Source = {
  body: "US Preventive Services Task Force",
  work: "Screening and Behavioral Counseling Interventions to Reduce Unhealthy Alcohol Use in Adolescents and Adults: Recommendation Statement. JAMA 320(18):1899",
  year: 2018,
  url: "https://pubmed.ncbi.nlm.nih.gov/30422199/",
};
export const ACTIVITY: Source = {
  body: "US Department of Health and Human Services",
  work: "Physical Activity Guidelines for Americans, 2nd edition",
  year: 2018,
  url: "https://odphp.health.gov/sites/default/files/2019-09/Physical_Activity_Guidelines_2nd_edition.pdf",
};
export const ADA: Source = {
  body: "American Diabetes Association Professional Practice Committee",
  work: "2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S27",
  year: 2026,
  url: "https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes",
};
export const BP: Source = {
  body: "Jones DW, Ferdinand KC, Taler SJ, et al. American Heart Association and American College of Cardiology",
  work: "2025 AHA/ACC Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Circulation",
  year: 2025,
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356",
};
