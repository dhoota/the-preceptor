import type { ItemMeta, Source } from "@/engine/types";

/** Shared metadata defaults and verified sources for batch s23. Physiological Adaptation. */
export const meta = (id: string, over: Omit<Partial<ItemMeta>, "id"> & Pick<ItemMeta, "topic" | "cjmm" | "process" | "difficulty" | "stem" | "rationale" | "sources">): ItemMeta => ({
  id,
  need: "PA",
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const HINKLE: Source = { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 };
export const ALS: Source = { body: "Wigginton JG, Agarwal S, Bartos JA, et al. American Heart Association", work: "Part 9: Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 152", year: 2025 };
export const BLS: Source = { body: "Kleinman ME, Buick JE, Huber N, et al. American Heart Association", work: "Part 7: Adult Basic Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 152(Suppl 2):S448", year: 2025 };
export const HF: Source = { body: "Heidenreich PA, Bozkurt B, Aguilar D, et al. American Heart Association, American College of Cardiology and Heart Failure Society of America", work: "2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895", year: 2022 };
export const ACS: Source = { body: "Rao SV, O'Donoghue ML, Ruel M, et al. American College of Cardiology and American Heart Association", work: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 151(13):e771", year: 2025 };
export const OXYGEN: Source = { body: "O'Driscoll BR, Howard LS, Earis J, Mak V. British Thoracic Society", work: "BTS Guideline for Oxygen Use in Adults in Healthcare and Emergency Settings. Thorax 72(Suppl 1):ii1", year: 2017 };
export const ARDS: Source = { body: "Qadir N, Sahetya S, Munshi L, et al. American Thoracic Society", work: "An Update on Management of Adult Patients with Acute Respiratory Distress Syndrome. American Journal of Respiratory and Critical Care Medicine 209(1):24", year: 2024 };
export const PERI: Source = { body: "Schulz-Menger J, Collini V, et al. European Society of Cardiology", work: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis. European Heart Journal 46(40):3952", year: 2025 };
export const ENDO: Source = { body: "Baddour LM, Wilson WR, Bayer AS, et al. American Heart Association", work: "Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications. Circulation 132(15):1435", year: 2015 };
export const AORTA: Source = { body: "Isselbacher EM, Preventza O, Hamilton Black J, et al. American College of Cardiology and American Heart Association", work: "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 146(24):e334", year: 2022 };
export const PLEURA: Source = { body: "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society", work: "British Thoracic Society Guideline for Pleural Disease. Thorax 78(Suppl 3):s1", year: 2023 };
export const VALVE: Source = { body: "Otto CM, Nishimura RA, Bonow RO, et al. American College of Cardiology and American Heart Association", work: "2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation 143(5):e72", year: 2021 };
export const BRADY: Source = { body: "Kusumoto FM, Schoenfeld MH, Barrett C, et al. American College of Cardiology, American Heart Association and Heart Rhythm Society", work: "2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation 140(8):e382", year: 2019 };
export const HHS: Source = { body: "Umpierrez GE, Davis GM, ElSayed NA, et al.", work: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 47(8):1257", year: 2024 };
export const HYPERNA: Source = { body: "Adrogue HJ, Madias NE", work: "Hypernatremia. New England Journal of Medicine 342(20):1493", year: 2000 };
export const THYROID: Source = { body: "Jonklaas J, Bianco AC, Bauer AJ, et al. American Thyroid Association", work: "Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670", year: 2014 };
export const SEPSIS: Source = { body: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign", work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Critical Care Medicine", year: 2026 };
export const AFIB: Source = { body: "Joglar JA, Chung MK, Armbruster AL, et al. American College of Cardiology and American Heart Association", work: "2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1", year: 2024 };
