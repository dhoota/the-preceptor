import type { ItemMeta, Source } from "@/engine/types";

/** Shared defaults for batch c14 items. */
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
  htn: {
    body: "Jones DW, Ferdinand KC, Taler SJ, et al. American Heart Association and American College of Cardiology",
    work: "2025 AHA/ACC Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Circulation",
    year: 2025,
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356",
  },
  nicardipine: {
    body: "Baxter Healthcare Corporation, via US National Library of Medicine DailyMed",
    work: "Cardene IV (nicardipine hydrochloride) premixed injection, 20 mg in 200 mL, prescribing information",
    year: 2026,
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f12cea0d-b7cd-41d8-b551-2c74cc7f5f4e",
  },
  brunner: {
    body: "Hinkle JL, Cheever KH, Overbaugh KJ",
    work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
    year: 2022,
  },
  tobacco: {
    body: "Krist AH, Davidson KW, Mangione CM, et al. US Preventive Services Task Force",
    work: "Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons. JAMA 325(3):265",
    year: 2021,
    url: "https://pubmed.ncbi.nlm.nih.gov/33464343/",
  },
  pad: {
    body: "Gornik HL, Aronow HD, Goodney PP, et al. American College of Cardiology and American Heart Association",
    work: "2024 ACC/AHA Multisociety Guideline for the Management of Lower Extremity Peripheral Artery Disease. Circulation 149(24):e1313",
    year: 2024,
    url: "https://pubmed.ncbi.nlm.nih.gov/38743805/",
  },
  ssi: {
    body: "Berrios-Torres SI, Umscheid CA, Bratzler DW, et al. Centers for Disease Control and Prevention",
    work: "Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surgery 152(8):784",
    year: 2017,
    url: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2623725",
  },
  varcarolis: {
    body: "Halter MJ",
    work: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing: A Clinical Approach, 9th edition",
    year: 2022,
  },
  acogVte: {
    body: "American College of Obstetricians and Gynecologists",
    work: "Thromboembolism in Pregnancy. ACOG Practice Bulletin No. 196. Obstetrics and Gynecology 132(1):e1",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29939938/",
  },
  lowdermilk: {
    body: "Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE",
    work: "Maternity and Women's Health Care, 13th edition",
    year: 2023,
  },
  lovenox: {
    body: "US Food and Drug Administration",
    work: "Lovenox (enoxaparin sodium injection) prescribing information",
    year: 2021,
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf",
  },
  mec: {
    body: "Nguyen AT, Curtis KM, Tepper NK, et al. Centers for Disease Control and Prevention",
    work: "U.S. Medical Eligibility Criteria for Contraceptive Use, 2024. MMWR Recommendations and Reports 73(4):1",
    year: 2024,
    url: "https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm",
  },
  aaa: {
    body: "Chaikof EL, Dalman RL, Eskandari MK, et al. Society for Vascular Surgery",
    work: "The Society for Vascular Surgery Practice Guidelines on the Care of Patients With an Abdominal Aortic Aneurysm. Journal of Vascular Surgery 67(1):2",
    year: 2018,
    url: "https://pubmed.ncbi.nlm.nih.gov/29268916/",
  },
  aortic: {
    body: "Isselbacher EM, Preventza O, Hamilton Black J, et al. American College of Cardiology and American Heart Association",
    work: "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 146(24):e334",
    year: 2022,
    url: "https://pubmed.ncbi.nlm.nih.gov/36322642/",
  },
  falls: {
    body: "Montero-Odasso M, van der Velde N, Martin FC, et al. Task Force on Global Guidelines for Falls in Older Adults",
    work: "World guidelines for falls prevention and management for older adults: a global initiative. Age and Ageing 51(9):afac205",
    year: 2022,
    url: "https://academic.oup.com/ageing/article/51/9/afac205/6730755",
  },
  potter: {
    body: "Potter PA, Perry AG, Stockert PA, Hall A",
    work: "Fundamentals of Nursing, 11th edition",
    year: 2023,
  },
  pericardial: {
    body: "Adler Y, Charron P, Imazio M, et al. European Society of Cardiology",
    work: "2015 ESC Guidelines for the Diagnosis and Management of Pericardial Diseases. European Heart Journal 36(42):2921",
    year: 2015,
    url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293375",
  },
  sts: {
    body: "Society of Thoracic Surgeons Task Force on Resuscitation After Cardiac Surgery",
    work: "The Society of Thoracic Surgeons Expert Consensus for the Resuscitation of Patients Who Arrest After Cardiac Surgery. Annals of Thoracic Surgery 103(3):1005",
    year: 2017,
    url: "https://pubmed.ncbi.nlm.nih.gov/28122680/",
  },
};
