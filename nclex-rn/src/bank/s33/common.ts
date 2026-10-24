import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s33. Psychosocial Integrity and Basic Care and Comfort. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "need" | "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  canada: "",
  reviewed: true,
  version: 1,
  ...over,
});

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
export const HOCKENBERRY: Source = {
  body: "Hockenberry MJ, Duffy EA, Gibbs KD",
  work: "Wong's Nursing Care of Infants and Children, 12th edition",
  year: 2024,
  url: "https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html",
};
export const POTTER: Source = {
  body: "Potter PA, Perry AG, Stockert PA, Hall AM",
  work: "Fundamentals of Nursing, 11th edition",
  year: 2023,
  url: "https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0",
};
export const BINDING: Source = {
  body: "Peitzmeier S, Gardner I, Weinand J, Corbet A, Acevedo K",
  work: "Health Impact of Chest Binding Among Transgender Adults: A Community-Engaged, Cross-Sectional Study. Culture, Health and Sexuality 19(1):64",
  year: 2017,
  url: "https://pubmed.ncbi.nlm.nih.gov/27300085/",
};
export const UCSF_TRANS: Source = {
  body: "Deutsch MB, editor. UCSF Transgender Care, University of California San Francisco",
  work: "Guidelines for the Primary and Gender-Affirming Care of Transgender and Gender Nonbinary People, 2nd edition",
  year: 2016,
  url: "https://transcare.ucsf.edu/guidelines",
};
export const HINDUJA: Source = {
  body: "Hinduja S, Patchin JW",
  work: "Bullying Beyond the Schoolyard: Preventing and Responding to Cyberbullying, 3rd edition",
  year: 2023,
  url: "https://www.sagepub.com/books/Book286130",
};
export const POTENZA: Source = {
  body: "Potenza MN, Balodis IM, Derevensky J, et al.",
  work: "Gambling Disorder. Nature Reviews Disease Primers 5:51",
  year: 2019,
  url: "https://doi.org/10.1038/s41572-019-0099-7",
};
export const LINEHAN: Source = {
  body: "Linehan MM",
  work: "DBT Skills Training Manual, 2nd edition",
  year: 2015,
  url: "https://www.guilford.com/books/DBT-Skills-Training-Manual/Marsha-Linehan/9781462516995",
};
export const TIP33: Source = {
  body: "Substance Abuse and Mental Health Services Administration",
  work: "TIP 33: Treatment for Stimulant Use Disorders, Publication No. PEP21-02-01-004",
  year: 2021,
  url: "https://www.govinfo.gov/content/pkg/GOVPUB-HE20_400-PURL-gpo171771/pdf/GOVPUB-HE20_400-PURL-gpo171771.pdf",
};
export const BZD_TAPER: Source = {
  body: "Brunner E, Chen CA, Klein T, Maust D, et al. American Society of Addiction Medicine and partner organizations",
  work: "Joint Clinical Practice Guideline on Benzodiazepine Tapering: Considerations When Risks Outweigh Benefits. Journal of General Internal Medicine 40(12):2814",
  year: 2025,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12463801/",
};
export const CANNABIS_WD: Source = {
  body: "Connor JP, Stjepanovic D, Budney AJ, Le Foll B, Hall WD",
  work: "Clinical Management of Cannabis Withdrawal. Addiction 117(7):2075",
  year: 2022,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9110555/",
};
export const KRATOM: Source = {
  body: "Bin Abdullah MFIL",
  work: "Kratom Dependence and Treatment Options: A Comprehensive Review of the Literature. Current Drug Targets 21(15):1566",
  year: 2020,
  url: "https://pubmed.ncbi.nlm.nih.gov/32682371/",
};
export const VAPE_TEXT: Source = {
  body: "Graham AL, Cha S, Jacobs MA, et al.",
  work: "A Vaping Cessation Text Message Program for Adolescent E-Cigarette Users: A Randomized Clinical Trial. JAMA 332(9):713",
  year: 2024,
  url: "https://pubmed.ncbi.nlm.nih.gov/39110436/",
};
export const MORAL_INJURY: Source = {
  body: "Williamson V, Kothari R, Bonson A, Campbell G, Greenberg N, Murphy D, Lamb D",
  work: "Moral Injury Prevention and Intervention. European Journal of Psychotraumatology 16(1):2567721",
  year: 2025,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12541919/",
};
export const LITZ: Source = {
  body: "Litz BT, Stein N, Delaney E, Lebowitz L, Nash WP, Silva C, Maguen S",
  work: "Moral Injury and Moral Repair in War Veterans: A Preliminary Model and Intervention Strategy. Clinical Psychology Review 29(8):695",
  year: 2009,
  url: "https://sites.bu.edu/litzlab/files/2023/04/Moral-injury-and-moral-repair-in-war-veterans-Litz-2009.pdf",
};
export const WHO_PFA: Source = {
  body: "World Health Organization, War Trauma Foundation, World Vision International",
  work: "Psychological First Aid: Guide for Field Workers",
  year: 2011,
  url: "https://iris.who.int/handle/10665/44615",
};
export const ROSE_DEBRIEF: Source = {
  body: "Rose SC, Bisson J, Churchill R, Wessely S",
  work: "Psychological Debriefing for Preventing Post Traumatic Stress Disorder (PTSD). Cochrane Database of Systematic Reviews CD000560",
  year: 2002,
  url: "https://www.cochrane.org/evidence/CD000560_psychological-debriefing-preventing-post-traumatic-stress-disorder-ptsd",
};
export const ESHRE: Source = {
  body: "Gameiro S, Boivin J, Dancet E, et al. European Society of Human Reproduction and Embryology",
  work: "ESHRE Guideline: Routine Psychosocial Care in Infertility and Medically Assisted Reproduction, a Guide for Fertility Staff. Human Reproduction 30(11):2476",
  year: 2015,
  url: "https://doi.org/10.1093/humrep/dev177",
};
export const CDC_PARTNER: Source = {
  body: "Centers for Disease Control and Prevention",
  work: "Recommendations for Partner Services Programs for HIV Infection, Syphilis, Gonorrhea, and Chlamydial Infection. MMWR Recommendations and Reports 57(RR-9)",
  year: 2008,
  url: "https://www.cdc.gov/mmwr/PDF/rr/rr5709.pdf",
};
export const NICE_CONDUCT: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Antisocial Behaviour and Conduct Disorders in Children and Young People: Recognition and Management (CG158)",
  year: 2013,
  url: "https://www.nice.org.uk/guidance/cg158",
};
export const TICS: Source = {
  body: "Pringsheim T, Okun MS, Muller-Vahl K, et al. American Academy of Neurology",
  work: "Practice Guideline Recommendations Summary: Treatment of Tics in People With Tourette Syndrome and Chronic Tic Disorders. Neurology 92(19):896",
  year: 2019,
  url: "https://doi.org/10.1212/WNL.0000000000007466",
};
export const HINDU_QLD: Source = {
  body: "Queensland Health, Division of the Chief Health Officer",
  work: "Health Care Providers' Handbook on Hindu Patients",
  year: 2011,
  url: "https://www.health.qld.gov.au/multicultural/health_workers/hbook-hindu",
};
export const SIKH_BRADFORD: Source = {
  body: "Bradford Teaching Hospitals NHS Foundation Trust",
  work: "SPaRC Multi-Belief Guide: Sikh",
  year: 2026,
  url: "https://sparc.bradfordhospitals.nhs.uk/?p=533",
};
export const NCI_AROMA: Source = {
  body: "PDQ Integrative, Alternative, and Complementary Therapies Editorial Board. National Cancer Institute",
  work: "Aromatherapy With Essential Oils (PDQ), Health Professional Version",
  year: 2024,
  url: "https://www.cancer.gov/about-cancer/treatment/cam/hp/aromatherapy-pdq",
};
export const MUSIC_PAIN: Source = {
  body: "Lee JH",
  work: "The Effects of Music on Pain: A Meta-Analysis. Journal of Music Therapy 53(4):430",
  year: 2016,
  url: "https://academic.oup.com/jmt/article/53/4/430/973764",
};
export const PC6: Source = {
  body: "Lee A, Chan SKC, Fan LTY",
  work: "Stimulation of the Wrist Acupuncture Point PC6 for Preventing Postoperative Nausea and Vomiting. Cochrane Database of Systematic Reviews CD003281",
  year: 2015,
  url: "https://doi.org/10.1002/14651858.CD003281.pub4",
};
export const SLOW_BREATH: Source = {
  body: "Joseph AE, Moman RN, Barman RA, et al.",
  work: "Effects of Slow Deep Breathing on Acute Clinical Pain in Adults: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. Journal of Evidence-Based Integrative Medicine 27:2515690X221078006",
  year: 2022,
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8891889/",
};
export const NICE_PTSD: Source = {
  body: "National Institute for Health and Care Excellence",
  work: "Post-Traumatic Stress Disorder (NG116)",
  year: 2018,
  url: "https://www.nice.org.uk/guidance/ng116",
};
export const WHO_DISCLOSURE: Source = {
  body: "World Health Organization",
  work: "Guideline on HIV Disclosure Counselling for Children up to 12 Years of Age",
  year: 2011,
  url: "https://iris.who.int/handle/10665/44777",
};
export const AUTISM_INJURY: Source = {
  body: "Guan J, Li G",
  work: "Injury Mortality in Individuals With Autism. American Journal of Public Health 107(5):791",
  year: 2017,
  url: "https://doi.org/10.2105/AJPH.2017.303696",
};
export const NAS_MELTDOWN: Source = {
  body: "National Autistic Society",
  work: "Meltdowns: A Guide for All Audiences",
  year: 2020,
  url: "https://www.autism.org.uk/advice-and-guidance/topics/behaviour/meltdowns/all-audiences",
};
export const HINDU_HT: Source = {
  body: "Hinduism Today, reprinting Queensland Health",
  work: "Educational Insight: A Health Care Provider's Handbook on Hindu Patients. Hinduism Today, January to March issue",
  year: 2013,
  url: "https://www.hinduismtoday.com/magazine/january-february-march-2013/2013-01-educational-insight-a-health-care-provider-s-handbook-on-hindu-patients/",
};
export const PAPERNOW: Source = {
  body: "Papernow PL",
  work: "Surviving and Thriving in Stepfamily Relationships: What Works and What Doesn't. Routledge",
  year: 2013,
  url: "https://doi.org/10.4324/9780203813645",
};
